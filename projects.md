---
layout: default.liquid
title: Projects
---

<div class="projects-grid">
{% for project in site.data.projects -%}
<div class="project-box">
    {%- if project.banner %}
    <img src="{{ project.banner }}" alt="{{ project.title }} banner" class="project-banner">
    {%- else %}
    <div class="project-banner-fake">{{ project.title }}</div>
    {%- endif %}
    <div class="project-content">
        <p class="project-description">{{ project.description }}</p>
        <div class="project-links">
            {%- if project.github -%}
            <a href="{{ project.github }}" target="_blank" class="project-link">
                <i class="fab fa-github"></i>GitHub
            </a>
            {%- endif -%}
            {%- if project.paper -%}
            <a href="{{ project.paper }}" target="_blank" class="project-link">
                <i class="fas fa-file-text"></i>Paper
            </a>
            {%- endif -%}
            {%- if project.demo -%}
            <a href="{{ project.demo }}" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i>Demo
            </a>
            {%- endif -%}
            {%- if project.documentation -%}
            <a href="{{ project.documentation }}" target="_blank" class="project-link">
                <i class="fas fa-book"></i>Docs
            </a>
            {%- endif -%}
            {%- if project.website -%}
            <a href="{{ project.website }}" target="_blank" class="project-link">
                <i class="fas fa-globe"></i>Website
            </a>
            {%- endif %}
        </div>
    </div>
</div>
{%- endfor %}
</div>

---
