---
title: "Building a Production GPU Path Tracer with Kokkos"
subtitle: "How we built Photon — a physically-based renderer that runs on any GPU, reads industry-standard scene files, and produces production-quality images with denoising and tone mapping."
date: 2026-03-17T12:00:00-05:00
images: [ photon-spaceship.webp ]
draft: true
---

## The Goal

Build a path tracer that:
- Runs on **any GPU** (NVIDIA, AMD, Intel) through Kokkos
- Implements a **full Disney Principled BSDF** for physically-based materials
- Reads **pbrt-v4 scene files** — the standard format used by researchers and artists
- Produces **production-quality images** with denoising and tone mapping
- Integrates with the **ANARI** rendering standard for interoperability

## Gallery

{{< gallery "photon-cornell-box.webp::Cornell Box — 36 triangles, red and green walls with color bleeding, area light on ceiling. 1024 spp, OIDN denoised." "photon-spaceship.webp::Spaceship — 457K triangles, metallic body with conductor Fresnel, transparent glass cockpit dome, 4 area lights." "photon-bathroom.webp::Bathroom — 592K triangles, 32 materials, 12 textures. Chrome faucets, glass light bulbs, mirror, wood grain, marble countertop." "photon-kitchen.webp::Kitchen — 1.4M triangles, 90 materials, 4 area lights. The largest standard test scene." "photon-living-room.webp::Living Room — Lit entirely by HDRI environment map. No area lights — all illumination from importance-sampled environment lighting." "photon-staircase.webp::Staircase — 263K triangles, 25 materials, indirect illumination." >}}

---

## Architecture

Photon is structured as a layered system:

```
┌──────────────────────────────────────────────────┐
│              ANARI Device Layer                  │
│        PhotonDevice, SceneFromAnari              │
├──────────────────────────────────────────────────┤
│  pbrt-v4 Scene Reader    │    Texture Atlas      │
│  Parser, PLY, PFM, TGA   │    GPU Flat Buffer    │
├──────────────────────────────────────────────────┤
│       Wavefront Path Tracing Integrator          │
│  NEE, MIS, Adaptive Sampling, Disney BSDF        │
│  Firefly Clamp, ACES Tone Map, OIDN Denoise      │
│              (Kokkos — portable)                 │
├──────────────────────────────────────────────────┤
│            RayBackend Interface                  │
│         build_accel() / trace_rays()             │
├───────┬──────────┬──────────┬────────────────────┤
│Kokkos │  Embree  │  OptiX   │      HIP RT        │
│ BVH   │  (CPU)   │ (NVIDIA) │      (AMD)         │
└───────┴──────────┴──────────┴────────────────────┘
```

The path tracer kernel runs entirely on GPU via Kokkos. The ray tracing backend is pluggable — we support Kokkos BVH (portable, works everywhere), Intel Embree 4 (CPU), NVIDIA OptiX 8 (GPU with RT cores), and AMD HIP RT (stub).

### Why Kokkos?

Kokkos provides performance-portable parallel execution across CUDA, HIP, SYCL, and OpenMP. The entire path tracing kernel — ray generation, BSDF sampling, NEE, Russian roulette — runs inside a single `Kokkos::parallel_for` with no host synchronization per bounce. This makes the Kokkos BVH backend surprisingly fast — faster than OptiX for our workloads, because OptiX requires a separate GPU dispatch per bounce with host-side synchronization.

---

## The Disney Principled BSDF

The material model implements the Disney Principled BSDF with these lobes:

**Diffuse**: Lambertian with Fresnel retro-reflection and subsurface scattering (Christensen-Burley approximation).

**Specular Reflection**: GGX microfacet distribution with Smith geometry term. Supports anisotropic roughness for brushed metal surfaces. Specular tint colors the dielectric F0 based on base color.

**Specular Transmission**: Fresnel-weighted thin-shell glass. At normal incidence, ~96% of rays transmit through (matching Schlick's approximation). TIR at grazing angles is handled by forcing pass-through on back faces to prevent ray trapping in closed meshes.

**Clearcoat**: Separate GGX lobe for coated surfaces.

**Sheen**: Ashikhmin model for fabric/velvet materials.

**Conductor Fresnel**: Physical eta/k values for metals, computed from measured spectral data (silver, gold, copper, aluminum, iron). The base color is derived from the Fresnel F0 at normal incidence.

### Glass: The Hardest Material

Getting glass right was one of the biggest challenges. The naive approach — full Snell's law refraction — fails for closed mesh surfaces because:

1. **Total Internal Reflection (TIR)** traps rays inside the glass at angles >42° (for IOR 1.5)
2. **Mesh normal inconsistencies** cause refracted rays to go in wrong directions
3. **50/50 lobe splitting** between specular reflection and transmission wastes half the ray budget

Our solution follows pbrt-v4's `DielectricBxDF` approach: use Fresnel as the sampling probability (`pr = R, pt = T`), route pure dielectrics directly to the transmission lobe, and force back-face exit (refract or pass-through) to prevent internal trapping. The result: transparent glass that works for both open surfaces (spaceship dome) and closed meshes (bathroom light bulbs).

---

## The pbrt-v4 Scene Reader

We built a complete pbrt-v4 parser from scratch (~700 lines) that handles:

- **Recursive file inclusion** with indentation-aware `Include`/`Import` preprocessing
- **Transform stack**: `LookAt`, `Transform`, `Scale`, `Rotate`, `ConcatTransform`, `Identity`
- **Materials**: diffuse, conductor, dielectric, coateddiffuse, diffusetransmission
- **Textures**: `imagemap` with TGA/PNG/JPEG/HDR/PFM loading
- **Shapes**: `trianglemesh`, `plymesh` (binary/ASCII PLY), `sphere` (tessellated)
- **Lights**: `AreaLightSource` (diffuse), `LightSource` (infinite/environment)
- **Instancing**: `ObjectBegin/End/Instance` with configurable triangle budget
- **Named spectral data**: metal-Ag-eta/k, metal-Au-eta/k, etc. mapped to sRGB

### Handling the Moana Island Scene

The Disney Moana Island Scene contains 30.9 million object instances of 313 unique objects, with thousands of nested `Include` files. Our parser preprocesses all includes recursively, then parses the unified content with instance budget limits to control memory usage. At 97.5 million triangles (terrain + vegetation geometry), it renders in 32 seconds at 1920x804 on an NVIDIA RTX 5000 Ada.

---

## GPU Texture Sampling

Textures are stored in a flat GPU buffer (`Kokkos::View<Vec3*>`) with per-texture offset/width/height metadata — avoiding nested Kokkos Views that can't be deep-copied between host and device. Bilinear filtering with wrap-around coordinates is computed at each hit point using the interpolated UV from the mesh intersector.

The bathroom scene uploads 12 textures (208 MB) to GPU memory, including wood grain (2048x910), floor tiles (996x1024), marble (2048x1454), and wallpaper patterns.

---

## Intel OIDN Denoiser

The denoiser runs after path tracing using the color, albedo, and normal AOVs. It produces clean, noise-free images from as few as 64 samples per pixel. We added a preservation blend that keeps original pixel values where OIDN over-darkens specular/glass regions — a known issue with denoisers on high-variance light transport paths.

At 1920x1920, denoising takes ~700ms on CPU (OIDN 2.2).

---

## ACES Filmic Tone Mapping

The renderer outputs HDR linear radiance values. For display, we apply the ACES filmic tone mapping curve (Narkowicz 2015 fit) which gracefully compresses highlights instead of hard-clipping. An `--exposure` parameter controls the overall brightness. For interior scenes with bright windows (like the bathroom), exposure 0.3 provides a good balance between highlight detail and shadow visibility.

---

## Benchmarks

All benchmarks on **NVIDIA RTX 5000 Ada Generation** (32 GB VRAM).

### Production Render Times (OptiX backend, 1920×1920, 1024 spp, denoised)

| Scene | Triangles | Render Time | Denoise |
|-------|-----------|------------|---------|
| Cornell Box | 36 | 2m 17s | 673ms |
| Veach MIS | 3K | 10s | 714ms |
| Spaceship | 457K | 2m 38s | 683ms |
| Bathroom | 592K | 47s | 693ms |
| Kitchen | 1.4M | 45s | 684ms |
| Staircase | 263K | 2m 27s | 699ms |
| Moana Island | 97.5M | 32s (Kokkos, 1920x804, 16spp) | — |

### Backend Comparison

All benchmarks at 1024×1024, 128 spp on **NVIDIA RTX 5000 Ada Generation** (32 GB).

| Scene | Triangles | Kokkos BVH | OptiX 8 (RT cores) | OptiX Speedup |
|-------|-----------|-----------|-------------------|---------------|
| Cornell Box | 36 | 5.4s | 4.9s | 1.1x |
| Veach MIS | 3K | 1.2s | 0.4s | 3.2x |
| Spaceship | 457K | 55.8s | 5.7s | **9.8x** |
| Bathroom | 592K | 28.4s | 1.8s | **16.2x** |
| Kitchen | 1.4M | 50.2s | 1.7s | **29.2x** |

The OptiX advantage scales with scene complexity. For simple scenes (Cornell Box, 36 triangles), the software BVH traversal is trivial and RT core overhead provides no benefit. For complex scenes (Kitchen, 1.4M triangles), OptiX's hardware-accelerated BVH traversal using RT cores is **29x faster**.

The key to this performance: the OptiX raygen program reads ray data directly from Kokkos GPU Views and writes shaded HitResults (interpolated normals, UVs, material IDs, vertex colors) directly to the Kokkos HitBatch — zero CPU round-trips, zero per-call allocations. The only host-device transfer per bounce is a 64-byte Params struct.

---

## The OptiX Optimization: From 77x Slower to 29x Faster

Our initial OptiX integration was embarrassingly slow — 77x slower than the software BVH. The bathroom scene took 406 seconds with OptiX vs 5 seconds with Kokkos. How could hardware RT cores be slower than software ray tracing?

The problem was architectural. Per bounce, the naive integration:

1. Allocated 5 temporary GPU buffers (`cudaMalloc`)
2. Launched `optixLaunch` + `cudaDeviceSynchronize`
3. Copied all hit results to CPU (5x `cudaMemcpy` D→H)
4. Copied mesh data to CPU for shading (`create_mirror_view_and_copy`)
5. Ran shading in a **serial CPU `for` loop** over every ray
6. Copied results back to GPU
7. Freed the temporary buffers

That's ~20 CUDA API calls + millions of CPU operations **per bounce**. The RT cores were idle 99% of the time, waiting for the CPU to finish shading.

The fix: move shading into the OptiX raygen program. The raygen reads ray data directly from Kokkos GPU Views (which are already in CUDA device memory), calls `optixTrace`, receives the hit via payloads, computes normals/UVs/material IDs on GPU, and writes the result directly to the Kokkos `HitBatch` View. Zero CPU round-trips. The only host→device transfer per bounce is a 64-byte `Params` struct.

The result:

| Scene | Before | After | Improvement |
|-------|--------|-------|-------------|
| Cornell Box | 406s | 4.9s | 83x faster |
| Spaceship | 126s | 5.7s | 22x faster |
| Bathroom | (extrapolated ~500s) | 1.8s | ~280x faster |
| Kitchen | (would not finish) | 1.7s | ∞ |

The kitchen (1.4M triangles) now renders in 1.7 seconds with OptiX — **29x faster** than the Kokkos software BVH. The lesson: RT core acceleration is meaningless if your integration architecture bottlenecks on CPU↔GPU transfers.

---

## What We Learned

1. **Glass is the hardest material.** Getting transparent closed-mesh glass right required understanding TIR, Fresnel sampling probabilities, back-face handling, and denoiser interaction.

2. **OptiX integration architecture matters more than RT cores.** Our initial OptiX integration was 77x *slower* than the software BVH because it copied hit results to CPU for shading. After rewriting the raygen program to do shading on GPU and write directly to Kokkos Views, OptiX became 16-29x *faster*. The lesson: RT core acceleration is meaningless if you bottleneck on CPU↔GPU transfers.

3. **The denoiser can hurt.** OIDN aggressively smooths high-variance regions (glass, mirrors) to black. A preservation blend that keeps original pixels where the denoiser over-darkens is essential.

4. **One-sided emission matters.** Area lights should only emit from their front face. Without this, light leaks through walls and creates unrealistic brightness.

5. **Nested Kokkos Views don't deep_copy.** A `Kokkos::View<Struct*>` where `Struct` contains another `Kokkos::View` can't be byte-copied between host and device. Flat buffer + metadata is the correct approach.

---

## Code Statistics

- **114 commits** over the development period
- **~6,000 lines of C++/CUDA** for the renderer core
- **~700 lines** for the pbrt-v4 parser
- **7 test scenes** rendered at production quality
- **97.5 million triangles** rendered from the Moana Island Scene

---

## Future Work

- **Two-level BVH / instancing** for the full Moana scene (30M instances of 313 unique objects)
- **Volumetric rendering** — fog, smoke, participating media with delta tracking
- **Bidirectional path tracing** for difficult light transport (caustics through glass)
- **GPU denoising** — OIDN CUDA backend or OptiX AI denoiser for faster denoising
- **Motion blur** — time-sampled ray generation for animation
- **IES light profiles** for photometric architectural lighting
- **Full Embree integration** — move shading to CPU threads to eliminate GPU↔CPU transfer bottleneck (same architectural fix as OptiX)

---

*Photon is built with C++23, Kokkos 5.0, ANARI SDK 0.15.0, and optionally Embree 4.3.3, OptiX 8.1, and Intel OIDN 2.2.*
