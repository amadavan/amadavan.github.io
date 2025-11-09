---
layout: default.liquid
title: Projects
description: "Explore Avinash Madavan's projects in optimization, machine learning, and power systems. Real-world applications of rigorous mathematical methods."
---

<div class="projects-grid">
{% for project in site.data.projects -%}
<div class="project-box">
    {%- assign banner_color = "#2d1b69" -%}
    {%- for field in project -%}
        {%- if field[0] == "color" -%}
            {%- assign banner_color = field[1] -%}
        {%- endif -%}
    {%- endfor -%}
    {%- if project.banner %}
    <div class="project-banner-wrapper" style="background: {{ banner_color }};">
        <img src="{{ project.banner }}" alt="{{ project.title }} banner" class="project-banner">
        <div class="project-banner-placeholder">{{ project.title }}</div>
    </div>
    {%- else %}
    <div class="project-banner-fake" style="background: {{ banner_color }};">{{ project.title }}</div>
    {%- endif %}
    <div class="project-content">
        {%- assign display_title = project.title -%}
        {%- for field in project -%}
            {%- if field[0] == "name" -%}
                {%- assign display_title = field[1] -%}
            {%- endif -%}
        {%- endfor -%}
        <h3 class="project-title">{{ display_title }}</h3>
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
