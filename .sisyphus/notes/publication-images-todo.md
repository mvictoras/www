# Publication Hero Images — Curation Guide

This is the punch-list for finishing publication thumbnails. The infrastructure is built and 6 papers already have images. This guide tracks the remaining ~37.

## How to add an image

1. Drop the image file in `assets/publications/` using the suggested filename (lowercase-with-dashes-year.png|jpg).
2. Open `data/publications.yaml` and find the entry by title.
3. Add `    image: "your-filename.png"` as the last field of that entry (after `doi:` or `url:`).
4. Hugo auto-rebuilds. Refresh `/publications/` to verify.

Images are auto-cropped to square 200×200 thumbnails (displayed at 120×120). Best results from figures that work centered. Avoid pure text/equation figures.

## Sourcing strategies (in order of effort)

1. **ALCF page**: Many ANL papers have a "highlight image" on https://www.alcf.anl.gov/publications/<slug>
2. **arXiv HTML version**: `https://arxiv.org/html/<id>` lets you right-click any figure → save image
3. **Paper PDF**: open in any PDF viewer, screenshot a hero figure, crop square
4. **Author copy / your project repo**: if you have render outputs from the project, those work great
5. **Skip**: if no good image exists, leave the entry text-only — the layout handles it gracefully

## ✅ Already done (6/45)

- [x] **Scaling Computational Fluid Dynamics: In Situ Visualization of NekRS using SENSEI** — `nekrs-sensei-2023.png` (from arXiv 2312.09888)
- [x] **Science in a Blink** — `science-in-a-blink-2024.png` (from arXiv 2406.14452)
- [x] **VisAnywhere: Developing Multiplatform Scientific Visualization Applications** — `visanywhere-2024.png` (arXiv 2404.17619)
- [x] **Distributed Neural Representation for Reactive In Situ Visualization** — `distributed-neural-2024.png` (arXiv 2304.10516)
- [x] **Toward Distributed 3D Gaussian Splatting for High-Resolution Isosurface Visualization** — `toward-gaussian-isosurface-2024.png` (arXiv 2509.05216)
- [x] **High-quality Approximation of Scientific Data using 3D Gaussian Splatting** — `gaussian-isosurface-2025.png` (arXiv 2509.12138)

## 🟡 Likely sourceable from arXiv (verify ID, may need to find the right figure)

- [ ] **Aurora: Architecting Argonne's First Exascale Supercomputer** — arXiv 2509.08207. Fig1.jpg is a beautiful photo of the Aurora machine. Use as `aurora-2025.jpg`. **NOTE: not currently in publications.yaml — add as a new entry first.**
- [ ] **Deciphering boundary layer dynamics in high-Rayleigh-number convection using 3360 GPUs** — arXiv 2501.13240. **NOTE: not currently in publications.yaml — add as a new entry first.**

## 🟠 Recent 2024/2025 papers — likely have ALCF or eScience images

- [ ] **Bridging Gaps in Simulation Analysis through a General Purpose, Bidirectional Steering Interface with Ascent** (ISAV 2024, Best Paper) — try ALCF news page (Best Paper award post has a photo), or PDF at https://www.osti.gov/servlets/purl/2477884. Suggested: `ascent-steering-2024.jpg`
- [ ] **Free Lunch in In Situ Visualization** (LDAV 2025) — check LDAV proceedings, paper PDF. Suggested: `free-lunch-2025.png`
- [ ] **Visuals on the House** (LDAV 2024) — IEEE Xplore preview. Suggested: `visuals-on-the-house-2024.png`
- [ ] **Intuitive Computational Steering Using Ascent and Trame** (eScience 2025) — IEEE Xplore. Suggested: `intuitive-steering-2025.png`
- [ ] **Interactive Exploration of HACC Cosmology Data using WebXR** (eScience 2025) — beautiful cosmology visualizations expected. Suggested: `webxr-hacc-2025.png`
- [ ] **Toward Dynamic Gaussian Rendering for Digital Twins** (eScience 2025) — suggested: `dynamic-gaussian-digital-twins-2025.png`
- [ ] **GENIUS: AI Powered Assistant for Scientific Research** (eScience 2025) — possibly UI screenshot. Suggested: `genius-ai-2025.png`
- [ ] **Modular Agentic System for Scientific Visualization in Mixed Reality** (eScience 2025) — Mixed Reality screenshot. Suggested: `agentic-mr-2025.png`
- [ ] **Real-time Scientific Visualization and Interactive Steering for HPC Simulations** (PEARC 2025) — Suggested: `realtime-vis-steering-2025.png`
- [ ] **An Interactive Agentic HPC Tutor for Lesson Planning** (SC '25 Workshops) — Suggested: `agentic-hpc-tutor-2025.png`
- [ ] **The ECP ALPINE project** (IJHPCA 2025) — the canonical paper for the ALPINE ecosystem. ALCF/LLNL likely have hero images. Suggested: `alpine-2025.png`
- [ ] **Graphical Representation Through a User Interface for In Situ Scientific Visualization with Ascent** (LDAV 2024) — UI screenshot. Suggested: `ascent-ui-2024.png`
- [ ] **Exploring Large-Scale Scientific Data in Virtual Reality** (LDAV 2024) — VR scene. Suggested: `vr-large-scale-2024.png`

## 🔵 2021-2023 papers

- [ ] **CheckMyFit: Ear Selfie to Assist User Insertion of Hearing Aids** (PACM HCI 2022) — phone UI screenshot. Try ACM DL. Suggested: `checkmyfit-2022.png`
- [ ] **Cinema Transfer: A Containerized Visualization Workflow** (2022) — Suggested: `cinema-transfer-2022.png`
- [ ] **Toward Bi-directional In Situ Visualization of Blood Flow Simulations** (2022) — Suggested: `bidirectional-blood-flow-2022.png`
- [ ] **Distributed Volumetric Neural Representation for In Situ** (2022) — Suggested: `distributed-volumetric-2022.png`
- [ ] **Sort-Last In-Transit Data Visualization with SENSEI, Catalyst, and Unreal Engine** (2022) — Suggested: `sort-last-unreal-2022.png`
- [ ] **Massive Data Visualization Techniques for use in VR Devices** (2022) — Suggested: `massive-data-vr-2022.png`
- [ ] **Performance Evaluation of Heterogeneous GPU Programming Frameworks for Hemodynamic Simulations** (2023) — Suggested: `gpu-hemodynamic-2023.png`
- [ ] **Interactive Blood Flow Simulation with Deformable Cells and Walls** (2023) — Suggested: `blood-flow-deformable-2023.png`
- [ ] **Instrumenting Multiphysics Blood Flow Simulation Codes** (2021) — Suggested: `instrumenting-blood-flow-2021.png`

## 🟣 Older / pre-Argonne papers (2008-2016)

These will probably need PDF screenshots from your archives or skipped.

- [ ] **The RealityMashers: AR Wide Field-of-View HMDs** (2016) — Suggested: `realitymashers-2016.png`
- [ ] **SAGE2: A Collaboration Portal for Scalable Resolution Displays** (FGCS 2016) — Photo of SAGE2 in use. Suggested: `sage2-fgcs-2016.png`
- [ ] **Communication, Machines & Human Augmentics** (2016) — Probably skip — communication theory paper, no hero figure.
- [ ] **Reimagining the microscope using SAGE** (J Pathology Informatics 2015) — Microscope-on-displays photo. Suggested: `sage-microscope-2015.png`
- [ ] **Scalable Adaptive Graphics Environment: Whole-Slide Images** (Analytical Cellular Pathology 2014) — Pathology slide on display. Suggested: `sage-pathology-2014.png`
- [ ] **SAGE2: A New Approach for Data Intensive Collaboration** (CollaborateCom 2014, Best Paper) — Photo of SAGE2 multi-display. Suggested: `sage2-2014.png`
- [ ] **Omegalib: multi-view application framework for hybrid reality** (2014) — CAVE2 photo. Suggested: `omegalib-2014.png`
- [ ] **The health bar: persuasive ambient display** (2014) — Office display photo. Suggested: `health-bar-2014.png`
- [ ] **Sensing the Environment through SpiderSense** (Augmented Human '13) — Famous SpiderSense jacket photo. Suggested: `spidersense-2013.png`
- [ ] **A human-computer collaborative workflow for terrestrial insect movement** (2013) — Probably skip (biology paper).
- [ ] **Context-dependent navigation in foraging ants** (2013) — Probably skip.
- [ ] **Immunohistochemical Evaluation of Bleeding Control... Dental Laser** (2014) — Definitely skip.
- [ ] **Scalable Visual Queries for Data Exploration on Large 3D Displays** (2012) — CAVE2 photo. Suggested: `scalable-visual-queries-2012.png`
- [ ] **The OmegaDesk: Hybrid 2D and 3D Work Desk** (2011) — Desk photo. Suggested: `omegadesk-2011.png`
- [ ] **A game-engine based virtual museum** (2008) — Undergrad work, skip.
- [ ] **Video index and search services** (2008) — Undergrad work, skip.

## Notes

- **Image processing**: Hugo auto-converts to WebP and resizes to 200×200 square (center-cropped). No need to pre-crop.
- **License**: All your own published figures are fair use for self-promotion with attribution. ACM/IEEE allow author-side use.
- **Resolution**: Source images can be any size — Hugo handles it. 1000px+ on the longest side recommended for retina.
- **Photos vs figures**: A photo of the device/setup (SpiderSense jacket, CAVE2 in use) often makes a more compelling thumbnail than an in-paper figure.
