---
title: 'Omegalib: A multi-view application framework for hybrid reality display environments'
date: 2014-04-29T12:00:08+00:00
aliases: [/2014/04/29/omegalib-a-multi-view-application-framework-for-hybrid-reality-display-environments/]
featured_image: cave2-1.jpg
layout: paper
image_credits: "Lance Long, Electronic Visualization Laboratory"
pdf: omegalib-vr14-short.pdf
reference: "Febretti, Alessandro, Arthur Nishimoto, Victor Mateevitsi, Luc Renambot, Andrew Johnson, and Jason Leigh. \"Omegalib: A multi-view application framework for hybrid reality display environments.\" In 2014 IEEE Virtual Reality (VR), pp. 9-14. IEEE, 2014."
draft: false
---

{{< youtube yf0sllpZx3w >}}
In the domain of large-scale visualization instruments, hybrid reality environments (HREs) are a recent innovation that combines the best-in-class capabilities of immersive environments, with the best-in-class capabilities of ultra-high-resolution display walls. HREs create a seamless 2D / 3D environment that supports both information-rich analysis as well as virtual reality simulation exploration at a resolution matching human visual acuity. Co-located research groups in HREs tend to work on a variety of tasks during a research session (sometimes in parallel), and these tasks require 2D data views, 3D views, linking between them and the ability to bring in (or hide) data quickly as needed.

In this paper we present Omegalib, a software framework that facilitates application development on HREs. Omegalib is designed to support dynamic reconfigurability of the display environment, so that areas of the display can be interactively allocated to 2D or 3D work spaces as needed. Compared to existing frameworks and toolkits, Omegalib makes it possible to have multiple immersive applications running on a cluster-controlled display system, have different input sources dynamically routed to applications, and have rendering results optionally redirected to a distributed compositing manager. Omegalib supports pluggable front-ends, to simplify the integration of third-party libraries like OpenGL, OpenSceneGraph, and the Visualization Toolkit (VTK).

We present examples of applications developed with Omegalib for the 74-megapixel, 72-tile CAVE2™ system, and show how a Hybrid Reality Environment proved effective in supporting work for a co-located research group in the environmental sciences.

In the video above you can see example applications that were developed with Omegalib for the 74-megapixel, 72-tile CAVE2™ system.
