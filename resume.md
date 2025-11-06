---
layout: default.liquid
title: Resume
description: "Avinash Madavan's professional resume. PhD in Electrical Engineering with experience in optimization, machine learning, and power systems."
---

<div style="text-align: center; margin-bottom: 1rem;">
    <a href="/assets/resume/avinash_madavan_resume.pdf" target="_blank" class="project-link">
        <i class="fas fa-file-pdf"></i>Download PDF Version
    </a>
</div>

<div id="pdf-viewer" class="pdf-container">
    <div id="pdf-loading" style="text-align: center; padding: 2rem;">
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
        
        // Make container height dynamic
        container.style.height = 'auto';
        
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
            
            // Style the canvas - centered, no borders
            canvas.style.width = '100%';
            canvas.style.height = 'auto';
            canvas.style.marginBottom = '1rem';
            canvas.style.background = 'white';
            canvas.style.display = 'block';
            canvas.style.margin = '0 auto 1rem auto';
            
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
            '<p style="text-align: center; padding: 2rem;">Failed to load resume. <a href="/assets/resume/avinash_madavan_resume.pdf" target="_blank">Download PDF</a></p>';
    }
}

// Load PDF when page loads
document.addEventListener('DOMContentLoaded', renderPDF);
</script>