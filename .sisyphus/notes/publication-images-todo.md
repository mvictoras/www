# Publication Hero Images — Curation Guide

This is the punch-list for finishing publication thumbnails. The infrastructure is built and **20 of 47 papers (43%)** already have images. This guide tracks the remaining ~27.

## Coverage status

```
[████████████░░░░░░░░░░░░░░░] 43%  (20/47)
```

## How to add an image

1. Drop the image file in `assets/publications/` using the suggested filename below.
2. Open `data/publications.yaml`, find the entry by title, add `    image: "your-filename.png"` as the last field of that entry.
3. Hugo auto-rebuilds. Refresh `/publications/` to verify.

Images are auto-cropped to square 200×200 thumbnails (displayed at 120×120). No need to pre-crop.

## Sourcing strategies (in priority order)

1. **arXiv preprint** — `https://arxiv.org/html/<id>` lets you right-click any figure → save image
2. **OSTI/PAR PDF** — for DOE-funded papers: `https://www.osti.gov/biblio/<id>`. Open the PDF, screenshot a figure
3. **ALCF news page** — for award-winning papers, ALCF often has a hero photo
4. **EVL pubs** — for pre-Argonne papers: `https://www.evl.uic.edu/pubs/<id>`
5. **Your own slides/repos** — figures from your talk decks, GitHub repos, project pages
6. **Skip** — if no good image exists, leave text-only. The layout handles it gracefully.

## ✅ Already done (20/47)

### Sourced from arXiv preprints
- Scaling CFD: NekRS using SENSEI (2023) → `nekrs-sensei-2023.png`
- Science in a Blink (2024) → `science-in-a-blink-2024.png`
- VisAnywhere (2024) → `visanywhere-2024.png`
- Distributed Neural Representation (2024) → `distributed-neural-2024.png`
- Toward Distributed 3D Gaussian Splatting (2024) → `toward-gaussian-isosurface-2024.png`
- High-quality 3D Gaussian Splatting (2024) → `gaussian-isosurface-2025.png`
- Aurora: Architecting Argonne's First Exascale (2025) → `aurora-2025.jpg`
- Deciphering boundary layer dynamics (2025) → `rayleigh-bernard-2025.png`

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
- Bridging Gaps Ascent Steering (2024) → `ascent-steering-2024.png`
- Performance Eval GPU Hemodynamic (2023) → `hemodynamic-2023.png`

## 🟠 TODO — Remaining 27 papers

### 2025 papers (mostly IEEE Xplore paywalled — need PDFs)
- [ ] **The ECP ALPINE project** (IJHPCA 2025) — official ALPINE has many hero images on https://github.com/Alpine-DAV/ascent
- [ ] **Toward Dynamic Gaussian Rendering for Digital Twins** (eScience 2025)
- [ ] **Real-time Scientific Visualization and Interactive Steering** (PEARC 2025)
- [ ] **Modular Agentic System for SciVis in MR** (eScience 2025) — Mixed Reality screenshot
- [ ] **Intuitive Computational Steering Using Ascent and Trame** (eScience 2025)
- [ ] **Interactive Exploration of HACC Cosmology via WebXR** (eScience 2025) — cosmology renderings
- [ ] **GENIUS: AI Powered Assistant for Scientific Research** (eScience 2025) — UI screenshot
- [ ] **Free Lunch in In Situ Visualization** (LDAV 2025)
- [ ] **An Interactive Agentic HPC Tutor** (SC '25 Workshops)

### 2024 papers
- [ ] **Visuals on the House** (LDAV 2024)
- [ ] **Graphical Representation Through a User Interface for In Situ with Ascent** (LDAV 2024)
- [ ] **Exploring Large-Scale Scientific Data in Virtual Reality** (LDAV 2024) — VR scene photo

### 2022-2023 papers
- [ ] **Interactive Blood Flow Simulation with Deformable Cells and Walls** (2023)
- [ ] **Toward Bi-directional In Situ Visualization of Blood Flow** (LDAV 2022)
- [ ] **Sort-Last In-Transit Data Visualization with SENSEI, Catalyst, Unreal Engine** (LDAV 2022)
- [ ] **Massive Data Visualization Techniques for VR Devices** (LDAV 2022)
- [ ] **Distributed Volumetric Neural Representation** (LDAV 2022)
- [ ] **Cinema Transfer: A Containerized Visualization Workflow** (2022)
- [ ] **CheckMyFit: Ear Selfie for Hearing Aids** (PACM HCI 2022) — phone UI from ACM DL
- [ ] **Instrumenting Multiphysics Blood Flow Simulation Codes** (LDAV 2021)

### Pre-2020 papers
- [ ] **The RealityMashers: AR Wide FoV HMDs** (2016)
- [ ] **Reimagining the microscope using SAGE** (J Pathology Informatics 2015)
- [ ] **Scalable Adaptive Graphics Environment: Whole-Slide Images** (2014)
- [ ] **Video index and search services** (2008) — undergrad, probably skip
- [ ] **Game-engine based virtual museum** (2008) — undergrad, probably skip

## Tips

- **Photos beat figures**: A photo of the device or setup (SAGE2 in use, SpiderSense jacket, CAVE2 wall) often makes a more memorable thumbnail than an in-paper figure
- **Best Paper winners**: ALCF news pages usually have a photo of the award ceremony — those make great thumbnails
- **eScience 2025 batch**: All 7 of your eScience papers were presented as a coordinated session. Group photo from the conference might cover several at once.
- **License**: Your own published figures are fair use for self-promotion with attribution. ACM/IEEE allow author-side use.
