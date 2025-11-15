---
layout: default.liquid
title: About Me
description: "Learn about Avinash Madavan's background in optimization theory, machine learning, and power systems. PhD in Electrical Engineering from UIUC."
---
<!-- # About Me -->

---

{% include "about.liquid" %}

---


I build algorithms that solve hard optimization problems and deploy them in production systems. My PhD research achieved **20-30x speedups** on power grid optimization and formed the foundation for an NSF CAREER award. Since then, I've shipped ML models for logistics, built risk-aware trading systems for energy markets, and contributed to open-source optimization tools.

<div class="section-header">
  <i class="fas fa-briefcase"></i>
  <h2>What I Do</h2>
  <div class="header-line"></div>
</div>

I specialize in **optimization under uncertainty** - problems where you need both mathematical guarantees and practical performance at scale.

**Academic work (UIUC, 2017-2022)**: Developed decomposition algorithms for risk-sensitive power grid optimization. Published in *IEEE Transactions on Power Systems* and *Journal of Optimization Theory and Applications*. My algorithms cut solve times from hours to minutes, enabling real-time decision-making for grid operators.

**Industry applications**: Designed Terminal49's first container ETA prediction model (logistics ML). Built risk-aware portfolio optimization for Equinor's power trading desk (energy markets). The common thread: taking methods with provable properties and making them work on real data with real constraints.

The interesting problems aren't purely theoretical or purely applied - they're at the boundary where mathematical rigor meets production reliability.

<div class="section-header">
  <i class="fas fa-flask"></i>
  <h2>Research Interests</h2>
  <div class="header-line"></div>
</div>

Right now, I'm focused on:

- **Scalable optimization** with convergence guarantees that work on real problem sizes
- **Uncertainty quantification** for high-stakes decisions (energy, infrastructure, logistics)
- **Open-source tools** that make advanced methods accessible to practitioners
- **Systems design** for algorithms that need to run reliably in production

I'm particularly interested in problems where getting it wrong has real consequences - power grids going down, supply chains breaking, critical resources being misallocated. These domains demand both mathematical rigor and practical robustness.

<div class="section-header">
  <i class="fas fa-code"></i>
  <h2>Technical Approach</h2>
  <div class="header-line"></div>
</div>

Good optimization isn't just about finding the best answer - it's about finding answers you can trust, compute in reasonable time, and deploy in systems that won't break when data gets messy.

This means caring about:

- **What you can prove**: Convergence guarantees, complexity bounds, statistical validity
- **What actually runs**: Algorithms that scale to real problem sizes without requiring a supercomputer
- **What stays reliable**: Methods that degrade gracefully when assumptions break
- **What others can use**: Clean APIs, clear documentation, reproducible examples

I write code that goes into production, not just papers. All my research implementations are open source because I believe good methods should be accessible to anyone who needs them, not locked behind paywalls or institutional access.

<div class="section-header">
  <i class="fas fa-lightbulb"></i>
  <h2>What I Believe</h2>
  <div class="header-line"></div>
</div>

**The best ideas are simple ones, rigorously executed.** Complexity is often a sign of unclear thinking. Breaking systems down into their fundamental pieces - whether those systems are mathematical models or social structures - is how we understand them and improve them.

**Open source is non-negotiable.** If your method only works when you're the one running it, it's not a method - it's a performance. I publish code alongside papers because reproducibility matters and gatekeeping knowledge helps no one.

**Impact requires deployment, not just discovery.** A brilliant algorithm that never leaves academia is a missed opportunity. A mediocre algorithm running in production and making better decisions every day is a success.

