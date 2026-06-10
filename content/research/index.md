---
title: "Research"
date: 2026-06-10
type: "research"
subtitle: "Five themes I'm building toward"
draft: false
---

I work at the intersection of **scientific visualization, human-computer interaction, and high-performance computing**. My north star: scientists shouldn't have to fight their tools to understand their data. The five themes below are where I spend my research time today — and where I see the biggest leverage for the decade ahead.

---

## In-Situ Visualization at Exascale {#in-situ}

<p class="research-theme__lead">
Visualizing simulations <em>while they run</em>, on the world's fastest supercomputers, without choking on disk I/O.
</p>

Exascale machines like ALCF's [Aurora](https://www.alcf.anl.gov/aurora) generate data faster than storage can absorb it. Traditional checkpoint-and-render workflows force scientists to either skip frames or lower simulation resolution. My work instruments simulation codes (NekRS, HACC, blood-flow solvers) with in-situ libraries — primarily [SENSEI](https://sensei-insitu.org) and [ASCENT](https://ascent.readthedocs.io) — so visualization happens in-memory, in parallel with the physics. Two-time Best Paper award winner at the ISAV workshops (SC23, SC24).

**Representative work:**
- [Scaling CFD: In Situ Visualization of NekRS using SENSEI](/news/best-paper-award-at-isav-2023/) — ISAV 2023, Best Paper
- Bridging Gaps in Simulation Analysis through a Bidirectional Steering Interface with Ascent — ISAV 2024, Best Paper
- The ECP ALPINE project: In situ infrastructure for exascale — IJHPCA 2025
- [Full publication list →](/publications/)

---

## Immersive XR & Spatial Interfaces for Science {#xr}

<p class="research-theme__lead">
Letting researchers walk through their data. WebXR, VR, mixed reality at HPC scales.
</p>

Once a dataset reaches petabytes, screen-based visualization runs out of pixels. Immersive interfaces (VR, AR, WebXR) restore the spatial reasoning humans actually use to understand 3D phenomena — but only if rendering and interaction keep up with the data scale. I work on Gaussian splatting approximations, distributed rendering, and WebXR for cosmology datasets that wouldn't fit through any conventional pipeline.

**Representative work:**
- Interactive Exploration of HACC Cosmology Data using WebXR — eScience 2025
- Exploring Large-Scale Scientific Data in Virtual Reality — LDAV 2024
- Toward Distributed 3D Gaussian Splatting for High-Resolution Isosurface Visualization — LDAV 2024
- [Full publication list →](/publications/)

---

## Human–AI Collaboration for Discovery {#ai}

<p class="research-theme__lead">
Conversational AI agents that pair-program with scientists at supercomputer scale.
</p>

The next interface for HPC isn't another GUI — it's an AI co-pilot that lives inside the visualization, knows the data, and can suggest hypotheses. I'm building modular agentic systems that integrate with HPC workflows and immersive environments, so scientists can interrogate their simulations in natural language while the AI handles the bookkeeping of fetching, transforming, and rendering.

**Representative work:**
- GENIUS: AI Powered Assistant for Scientific Research — eScience 2025
- Modular Agentic System for Scientific Visualization in Mixed Reality — eScience 2025
- An Interactive Agentic HPC Tutor for Lesson Planning — SC '25 Workshops

---

## Scalable Display & Collaboration Environments {#displays}

<p class="research-theme__lead">
Tools and platforms for groups of scientists working together at ultra-high resolution.
</p>

How do you fit a billion-cell simulation on a screen? You don't — you fit it across 100 of them. I've spent over a decade building software for hybrid-reality environments and tiled display walls, from the [CAVE2](https://www.evl.uic.edu/research/2016) at EVL to [SAGE2](https://sage2.sagecommons.org/) — now deployed at dozens of institutions worldwide.

**Representative work:**
- SAGE2: A Collaboration Portal for Scalable Resolution Displays — Future Generation Computer Systems 2016
- Omegalib: Multi-view application framework for hybrid reality display environments — 2014
- VisAnywhere: Developing Multiplatform Scientific Visualization Applications — IEEE CG&A 2024
- [Full publication list →](/publications/)

---

## Wearables, Haptics & Human Augmentation {#wearables}

<p class="research-theme__lead">
Devices that let us sense, feel, and perceive what our biology can't.
</p>

My PhD research explored haptic interfaces that augment human perception — most visibly [SpiderSense](/news/sensing-the-environment-through-spidersense), a wearable jacket that lets the wearer "feel" their surroundings via ultrasound and pressure pads. Exhibited at Chicago's Museum of Science and Industry, featured in Forbes, Popular Mechanics, and on Discovery's *Daily Planet*. The thread continues through more recent work on hearing-aid HCI at GN Hearing (with a 2025 patent grant).

**Representative work:**
- [Sensing the Environment through SpiderSense](/news/sensing-the-environment-through-spidersense) — Augmented Human '13
- Supporting Navigation with a Torso Wearable Tactile Display — PhD dissertation, 2018
- CheckMyFit: Ear Selfie to Assist User Insertion of Hearing Aids — PACM HCI 2022
- [Patent: Application for Assisting a Hearing Device Wearer](https://patents.google.com/patent/EP3796673B1) — GN Hearing, 2025

---

## How to engage

If you're a domain scientist with a hard visualization problem at HPC scale, or a research group / company working at any of these intersections, [let's talk](/about/#get-in-touch). I'm always interested in collaborations, and currently take on select consulting engagements.

For students considering graduate or internship work in these areas — ALCF runs summer research programs, and I've mentored interns from UIC, Northwestern, and beyond. Reach out.
