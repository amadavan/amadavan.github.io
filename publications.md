---
layout: default.liquid
title: Publications
description: "Avinash Madavan's academic publications in optimization theory, power systems, and machine learning. Published in IEEE Transactions and JOTA."
---

## Journal Publications

{% assign articles = site.data.publications | where: 'ENTRYTYPE', 'article' %}
<ul>
{% for pub in articles %}
{% if pub.year %}
<li>
<p style="margin-bottom: 1rem; text-indent: -1rem; margin-left: 1rem; margin-right:1em;">
{{ pub.author | replace: ' and ', ' & ' }} ({{ pub.year }}). {{ pub.title | remove: '"' | remove: '{' | remove: '}' }}. <em>{{ pub.journal | default: "Manuscript" }}</em>{% if pub.volume %}, <em>{{ pub.volume }}</em>{% endif %}{% if pub.number %}({{ pub.number }}){% endif %}{% if pub.pages %}, {{ pub.pages | replace: '--', '–' }}{% endif %}.
<div class="pub-links">
{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank"><i class="fas fa-external-link-alt"></i>DOI</a>{% endif %}
{% if pub.url %}<a href="{{ pub.url }}" target="_blank"><i class="fas fa-link"></i>Link</a>{% elsif pub.arXiv %}<a href="{{ pub.arXiv }}" target="_blank"><i class="fab fa-arxiv"></i>arXiv</a>{% endif %}
{% if pub.pdf %}<a href="/assets/papers/{{ pub.pdf }}" target="_blank"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
</div>
</p>
</li>
{% endif %}
{% endfor %}
</ul>

## Conference Proceedings

{% assign conferences = site.data.publications | where: 'ENTRYTYPE', 'inproceedings' %}
<ul>
{% for pub in conferences %}
{% if pub.year %}
<li>
<p style="margin-bottom: 1rem; text-indent: -1rem; margin-left: 1rem; margin-right: 1rem">
{{ pub.author | replace: ' and ', ' & ' }} ({{ pub.year }}). {{ pub.title | remove: '"' | remove: '{' | remove: '}' }}. In <em>{{ pub.booktitle | remove: '"' | remove: '{' | remove: '}' }}</em>{% if pub.pages %} (pp. {{ pub.pages | replace: '--', '–' }}){% endif %}. {% if pub.organization %}{{ pub.organization }}{% elsif pub.publisher %}{{ pub.publisher }}{% endif %}.
<div class="pub-links">
{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank"><i class="fas fa-external-link-alt"></i>DOI</a>{% endif %}
{% if pub.url %}<a href="{{ pub.url }}" target="_blank"><i class="fas fa-link"></i>Link</a>{% endif %}
{% if pub.arXiv %}<a href="{{ pub.arXiv }}" target="_blank"><i class="fab fa-arxiv"></i>arXiv</a>{% endif %}
{% if pub.slides %}<a href="/assets/presentations/{{ pub.slides }}" target="_blank"><i class="fas fa-chalkboard-teacher"></i>Slides</a>{% endif %}
{% if pub.poster %}<a href="/assets/presentations/{{ pub.poster }}" target="_blank"><i class="fas fa-image"></i>Poster</a>{% endif %}
{% if pub.presentation %}<a href="{{ pub.presentation }}" target="_blank"><i class="fas fa-video"></i>Presentation</a>{% endif %}
</div>
</p>
</li>
{% endif %}
{% endfor %}
</ul>

## Dissertations

{% assign theses = site.data.publications | where: 'ENTRYTYPE', 'phdthesis' %}
<ul>
{% for pub in theses %}
<li>
<p style="margin-bottom: 1rem; text-indent: -1rem; margin-left: 1rem; margin-right: 1rem;">
{{ pub.author }} ({{ pub.year }}). <em>{{ pub.title | remove: '"' | remove: '{' | remove: '}' }}</em> [Doctoral dissertation, {{ pub.school }}].
<div class="pub-links">
{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank"><i class="fas fa-external-link-alt"></i>DOI</a>{% endif %}
{% if pub.url %}<a href="{{ pub.url }}" target="_blank"><i class="fas fa-link"></i>Link</a>{% endif %}
{% if pub.pdf %}<a href="/assets/papers/{{ pub.pdf }}" target="_blank"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
</div>
</p>
</li>
{% endfor %}
</ul>

## Book Chapters

{% assign chapters = site.data.publications | where: 'ENTRYTYPE', 'incollection' %}
<ul>
{% for pub in chapters %}
<li>
<p style="margin-bottom: 1rem; text-indent: -1rem; margin-left: 1rem; margin-right: 1rem;">
{{ pub.author | replace: ' and ', ' & ' }} ({{ pub.year }}). {{ pub.title | remove: '"' | remove: '{' | remove: '}' }}. In <em>{{ pub.booktitle | remove: '"' | remove: '{' | remove: '}' }}</em>{% if pub.pages %} (pp. {{ pub.pages | replace: '--', '–' }}){% endif %}. {% if pub.publisher %}{{ pub.publisher }}{% endif %}.
<div class="pub-links">
{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank"><i class="fas fa-external-link-alt"></i>DOI</a>{% endif %}
{% if pub.url %}<a href="{{ pub.url }}" target="_blank"><i class="fas fa-link"></i>Link</a>{% endif %}
{% if pub.pdf %}<a href="/assets/papers/{{ pub.pdf }}" target="_blank"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
</div>
</p>
</li>
{% endfor %}
</ul>

## Presentations

{% assign presentations = site.data.presentations %}
<ul>
{% for pres in presentations %}
<li>
<p style="margin-bottom: 1rem; text-indent: -1rem; margin-left: 1rem; margin-right: 1em;">
{{ pres.title }}. {% if pres.presented_at %}Presented at <em>{{ pres.presented_at }}</em>{% if pres.presented_by %} by {{ pres.presented_by }}{% endif %}.{% endif %}
<div class="pub-links">
{% if pres.pptx %}<a href="/assets/presentations/{{ pres.pptx }}" target="_blank"><i class="fas fa-file-powerpoint"></i>PowerPoint</a>{% endif %}
{% if pres.pdf %}<a href="/assets/presentations/{{ pres.pdf }}" target="_blank"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
{% if pres.url %}<a href="{{ pres.url }}" target="_blank"><i class="fas fa-link"></i>Link</a>{% endif %}
</div>
</p>
</li>
{% endfor %}
</ul>
