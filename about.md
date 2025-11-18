---
layout: default.liquid
title: About
description: "Avinash Madavan - PhD in Electrical Engineering specializing in optimization theory, machine learning, and power systems. Professional background and resume."
---

{% include "about.liquid" %}

---

<div class="quick-links">
  <i class="fas fa-link"></i>
  <strong>Quick Links:</strong>
  <a href="#what-i-do">What I Do</a> •
  <a href="#research-interests">Research Interests</a> •
  <a href="#technical-approach">Technical Approach</a> •
  <a href="#what-i-believe">What I Believe</a> •
  <a href="#resume">Resume</a>
</div>

---

I build algorithms that solve hard optimization problems and deploy them in production systems. My PhD research achieved **20-30x speedups** on power grid optimization and formed the foundation for an NSF CAREER award. Since then, I've shipped ML models for logistics, built risk-aware trading systems for energy markets, and contributed to open-source optimization tools.

<div class="section-header" id="what-i-do">
  <i class="fas fa-briefcase"></i>
  <h2>What I Do</h2>
  <div class="header-line"></div>
</div>

I specialize in **optimization under uncertainty** - problems where you need both mathematical guarantees and practical performance at scale.

**Academic work (UIUC, 2017-2022)**: Developed decomposition algorithms for risk-sensitive power grid optimization. Published in *IEEE Transactions on Power Systems* and *Journal of Optimization Theory and Applications*. My algorithms cut solve times from hours to minutes, enabling real-time decision-making for grid operators.

**Industry applications**: Designed Terminal49's first container ETA prediction model (logistics ML). Built risk-aware portfolio optimization for Equinor's power trading desk (energy markets). The common thread: taking methods with provable properties and making them work on real data with real constraints.

The interesting problems aren't purely theoretical or purely applied - they're at the boundary where mathematical rigor meets production reliability.

<div class="section-header" id="research-interests">
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

<div class="section-header" id="technical-approach">
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

<div class="section-header" id="what-i-believe">
  <i class="fas fa-lightbulb"></i>
  <h2>What I Believe</h2>
  <div class="header-line"></div>
</div>

**The best ideas are simple ones, rigorously executed.** Complexity is often a sign of unclear thinking. Breaking systems down into their fundamental pieces - whether those systems are mathematical models or social structures - is how we understand them and improve them.

**Open source is non-negotiable.** If your method only works when you're the one running it, it's not a method - it's a performance. I publish code alongside papers because reproducibility matters and gatekeeping knowledge helps no one.

**Impact requires deployment, not just discovery.** A brilliant algorithm that never leaves academia is a missed opportunity. A mediocre algorithm running in production and making better decisions every day is a success.

---

<div class="section-header" id="resume">
  <i class="fas fa-file-text"></i>
  <h2>Resume</h2>
  <div class="header-line"></div>
</div>

<div class="resume-download">
    <a href="/assets/resume/avinash_madavan_resume.pdf" target="_blank" class="project-link">
        <i class="fas fa-file-pdf"></i>Download PDF Version
    </a>
</div>

<div id="pdf-viewer" class="pdf-container">
    <div id="pdf-loading" class="pdf-loading">
        <p>Loading resume...</p>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
// Configure PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Load and render PDF as high-quality canvas (vector-like rendering)
async function renderPDF() {
    try {
        const loadingDiv = document.getElementById('pdf-loading');
        const container = document.getElementById('pdf-viewer');

        // Load the PDF
        const pdf = await pdfjsLib.getDocument('/assets/resume/avinash_madavan_resume.pdf').promise;

        // Clear loading message
        loadingDiv.remove();

        // Render each page
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const scale = 2.0; // High DPI for crisp rendering
            const viewport = page.getViewport({ scale: scale });

            // Create canvas
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render page to canvas
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            await page.render(renderContext).promise;
            container.appendChild(canvas);
        }
    } catch (error) {
        console.error('Error loading PDF:', error);
        document.getElementById('pdf-viewer').innerHTML =
            '<p class="pdf-loading">Failed to load resume. <a href="/assets/resume/avinash_madavan_resume.pdf" target="_blank">Download PDF</a></p>';
    }
}

// Load PDF when page loads
document.addEventListener('DOMContentLoaded', renderPDF);
</script>

