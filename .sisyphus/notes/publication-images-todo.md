# Publication Hero Images — Curation Guide

This is the punch-list for finishing publication thumbnails. The infrastructure is built and **25 of 47 papers (53%)** already have images. This guide tracks the remaining ~22.

## Coverage status

```
[██████████████░░░░░░░░░░░░░] 53%  (25/47)
```

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

## 🟠 TODO — Remaining 22 papers

These are mostly IEEE Xplore/ACM DL paywalled papers where I couldn't find open hero figures.

### 2025 papers (need manual sourcing)
- [ ] **The ECP ALPINE project** (IJHPCA 2025) — try ALPINE GitHub https://github.com/Alpine-DAV/ascent for renderings
- [ ] **Toward Dynamic Gaussian Rendering for Digital Twins** (eScience 2025)
- [ ] **Real-time Scientific Visualization and Interactive Steering** (PEARC 2025)
- [ ] **Intuitive Computational Steering Using Ascent and Trame** (eScience 2025)
- [ ] **Free Lunch in In Situ Visualization** (LDAV 2025)
- [ ] **An Interactive Agentic HPC Tutor** (SC '25 Workshops)

### 2024 papers
- [ ] **Exploring Large-Scale Scientific Data in Virtual Reality** (LDAV 2024) — try VIS poster CDN with a different ID

### 2022-2023 papers
- [ ] **Interactive Blood Flow Simulation with Deformable Cells and Walls** (2023)
- [ ] **Toward Bi-directional In Situ Visualization of Blood Flow** (LDAV 2022)
- [ ] **Sort-Last In-Transit Data Visualization with SENSEI, Catalyst, Unreal Engine** (LDAV 2022)
- [ ] **Massive Data Visualization Techniques for VR Devices** (LDAV 2022)
- [ ] **Distributed Volumetric Neural Representation** (LDAV 2022)
- [ ] **Cinema Transfer: A Containerized Visualization Workflow** (2022)
- [ ] **CheckMyFit: Ear Selfie for Hearing Aids** (PACM HCI 2022) — try ACM DL or screenshot from product page
- [ ] **Instrumenting Multiphysics Blood Flow Simulation Codes** (LDAV 2021)

### Pre-2020 papers
- [ ] **The RealityMashers: AR Wide FoV HMDs** (2016)
- [ ] **Reimagining the microscope using SAGE** (J Pathology Informatics 2015)
- [ ] **Scalable Adaptive Graphics Environment: Whole-Slide Images** (2014)
- [ ] **Video index and search services** (2008) — undergrad, can skip
- [ ] **Game-engine based virtual museum** (2008) — undergrad, can skip

## Tips

- **Photos beat figures**: A photo of the device or setup (SAGE2 in use, SpiderSense jacket, students with posters) often makes a more memorable thumbnail than an in-paper figure
- **Best Paper winners**: ALCF news pages have award photos that work well
- **IEEE VIS posters**: The CDN URL `https://ieeevis.b-cdn.net/vis_2024/posters/a-ldav-posters-{ID}.pdf` works if you can find the ID
- **Conference photos**: Student-with-poster photos from Papka's news pages are great when you can find them
- **License**: Your own published figures are fair use for self-promotion with attribution. ACM/IEEE allow author-side use.
