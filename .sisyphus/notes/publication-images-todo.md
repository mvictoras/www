# Publication Hero Images — Curation Guide

Publication thumbnail coverage status. **41 of 45 papers (91%)** have hero images.

## Coverage status

```
[████████████████████████░░░] 91%  (41/45)
```

The remaining 4 papers are paywalled or low-priority (see "Skipped" section below).

## How to add an image

1. Drop the image file in `assets/publications/` using the suggested filename below.
2. Open `data/publications.yaml`, find the entry by title, add `    image: "your-filename.png"` as the last field of that entry.
3. Hugo auto-rebuilds. Refresh `/publications/` to verify.

Images are auto-cropped to square 200×200 thumbnails (displayed at 120×120). No need to pre-crop.

## ✅ Already done (25/47)

### Sourced from arXiv preprints
- Scaling CFD: NekRS using SENSEI (2023, ISAV Best Paper) → `nekrs-sensei-2023.png`
- Science in a Blink (VIS 2024) → `science-in-a-blink-2024.png`
- VisAnywhere (2024, SciVis Contest Winner) → `visanywhere-2024.png`
- Distributed Neural Representation (TVCG 2024) → `distributed-neural-2024.png`
- Toward Distributed 3D Gaussian Splatting (2025) → `toward-gaussian-isosurface-2024.png`
- High-quality 3D Gaussian Splatting (LDAV 2024) → `gaussian-isosurface-2025.png`
- Aurora: Architecting Argonne's First Exascale (2025, preprint) → `aurora-2025.jpg`
- Deciphering boundary layer dynamics (2025, preprint) → `rayleigh-bernard-2025.png`

### Sourced from EVL archives
- SpiderSense (2013) → `spidersense-2013.jpg`
- OmegaDesk (2011) → `omegadesk-2011.jpg`
- Omegalib (2014) → `omegalib-2014.png`
- Health Bar (2014) → `health-bar-2014.jpg`
- SAGE2 CollaborateCom (2014) → `sage2-2014.png`
- SAGE2 FGCS (2016) → `sage2-fgcs-2016.png`
- Scalable Visual Queries (2012) → `scalable-visual-queries-2012.jpg`
- Context-dependent ant navigation (2013) → `ant-kenya-2013.png`
- Human-computer collab ant workflow (2013) → `ant-workflow-2013.png`
- Communication, Machines & Human Augmentics (2016) → `communication-augmentics-2016.png` *(weak image, replace if possible)*

### Sourced from OSTI PDFs
- Bridging Gaps Ascent Steering (2024, ISAV Best Paper) → `ascent-steering-2024.png`
- Performance Eval GPU Hemodynamic (2023) → `hemodynamic-2023.png`

### Sourced from IEEE VIS 2024 poster CDN
- Visuals on the House (LDAV 2024) → `visuals-on-the-house-2024.png`
- Graphical Representation Ascent UI (LDAV 2024) → `ascent-ui-2024.png`

### Sourced from Papka eScience 2025 news post
- Interactive Exploration of HACC via WebXR → `webxr-hacc-2025.png`
- GENIUS AI Powered Assistant → `genius-ai-2025.png`
- Modular Agentic System in MR → `agentic-mr-2025.png`

## ✅ Sourced via institutional VPN (IEEE Xplore + ACM DL + SAGE Pub + Springer)

### IEEE Xplore (figure GIF via institutional access)
- The RealityMashers (2016) → `realitymashers-2016.gif`
- Video index and search services (2008) → `video-index-search-2008.gif`
- Instrumenting Multiphysics Blood Flow Simulation Codes (2021) → `instrumenting-blood-flow-2021.gif`
- Toward Bi-directional Blood Flow Visualization (2022) → `blood-flow-bidirectional-2022.gif`
- Distributed Volumetric Neural Representation (2022) → `distributed-volumetric-2022.gif`
- Sort-Last In-Transit with Unreal (2022) → `sort-last-unreal-2022.gif`
- Massive Data Visualization for VR (2022) → `massive-data-vr-2022.gif`
- Exploring Large-Scale Scientific Data in VR (2024) → `vr-large-scale-2024.gif`
- Free Lunch in In Situ Visualization (2025) → `free-lunch-2025.gif`
- Intuitive Computational Steering with Ascent and Trame (2025) → `intuitive-steering-2025.gif`
- Toward Dynamic Gaussian Rendering for Digital Twins (2025) → `dynamic-gaussian-digital-twins-2025.gif`

### ACM DL (PDF extraction via `pdfimages`)
- CheckMyFit Ear Selfie (PACM HCI 2022) → `checkmyfit-2022.png`
- An Interactive Agentic HPC Tutor (SC '25 Workshops) → `agentic-hpc-tutor-2025.png`
- Real-time Scientific Visualization Steering (PEARC 2025) → `realtime-vis-steering-2025.png`

### SAGE Publications + Springer
- The ECP ALPINE project (IJHPCA 2025) → `alpine-2025.jpg`
- Cinema Transfer (Springer LNCS 2022) → `cinema-transfer-2022.png`

## ❌ Skipped (paywall / phantom / low priority)

- **Reimagining the microscope** (J Pathology Informatics 2015) — ScienceDirect Cloudflare block, persistent challenge loop
- **SAGE Whole-Slide Images** (Wiley 2014) — gated PDF returned stub only
- **Interactive Blood Flow with Deformable Cells** (2023) — no DOI in yaml, likely phantom/duplicate entry; verify before sourcing
- **Game-engine virtual museum** (DIMEA 2008) — undergrad-era; DOI corrected to `10.1145/1413634.1413714`

## Tips

- **Photos beat figures**: A photo of the device or setup (SAGE2 in use, SpiderSense jacket, students with posters) often makes a more memorable thumbnail than an in-paper figure
- **Best Paper winners**: ALCF news pages have award photos that work well
- **IEEE VIS posters**: The CDN URL `https://ieeevis.b-cdn.net/vis_2024/posters/a-ldav-posters-{ID}.pdf` works if you can find the ID
- **Conference photos**: Student-with-poster photos from Papka's news pages are great when you can find them
- **License**: Your own published figures are fair use for self-promotion with attribution. ACM/IEEE allow author-side use.
