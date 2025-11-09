---
layout: default.liquid
title: Publications
description: "Avinash Madavan's academic publications in optimization theory, power systems, and machine learning. Published in IEEE Transactions and JOTA."
---

## Journal Publications

{% assign articles = site.data.publications | where: 'ENTRYTYPE', 'article' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in articles %}
<div class="publication-card">
<div class="pub-timeline">
<div class="pub-year-badge">{{ pub.year }}</div>
<div class="timeline-line"></div>
</div>
<div class="pub-card-content">
<h3 class="pub-card-title">{{ pub.title | remove: '"' | remove: '{' | remove: '}' }}</h3>
<div class="pub-authors">{{ pub.author | replace: ' and ', ', ' | replace: 'Madavan, Avinash N', '<strong>Madavan, Avinash N</strong>' }}</div>
<div class="pub-venue">
<i class="fas fa-book"></i>
<em>{{ pub.journal | default: "Manuscript" }}</em>{% if pub.volume %}, Vol. {{ pub.volume }}{% endif %}{% if pub.number %}({{ pub.number }}){% endif %}{% if pub.pages %}, pp. {{ pub.pages | replace: '--', '–' }}{% endif %}
</div>
<div class="pub-card-links">
{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" class="pub-link doi"><i class="fas fa-external-link-alt"></i>DOI</a>{% endif %}
{% if pub.url %}<a href="{{ pub.url }}" target="_blank" class="pub-link"><i class="fas fa-link"></i>Link</a>{% elsif pub.arXiv %}<a href="{{ pub.arXiv }}" target="_blank" class="pub-link arxiv"><i class="fab fa-arxiv"></i>arXiv</a>{% endif %}
{% if pub.pdf %}<a href="/assets/papers/{{ pub.pdf }}" target="_blank" class="pub-link pdf"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
</div>
</div>
</div>
{% endfor -%}
</div>

## Conference Proceedings

{% assign conferences = site.data.publications | where: 'ENTRYTYPE', 'inproceedings' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in conferences %}
<div class="publication-card">
<div class="pub-timeline">
<div class="pub-year-badge">{{ pub.year }}</div>
<div class="timeline-line"></div>
</div>
<div class="pub-card-content">
<h3 class="pub-card-title">{{ pub.title | remove: '"' | remove: '{' | remove: '}' }}</h3>
<div class="pub-authors">{{ pub.author | replace: ' and ', ', ' | replace: 'Madavan, Avinash N', '<strong>Madavan, Avinash N</strong>' }}</div>
<div class="pub-venue">
<i class="fas fa-users"></i>
<em>{{ pub.booktitle | remove: '"' | remove: '{' | remove: '}' }}</em>{% if pub.pages %}, pp. {{ pub.pages | replace: '--', '–' }}{% endif %}
</div>
{% if pub.organization %}
<div class="pub-organization">{{ pub.organization }}</div>
{% endif %}
<div class="pub-card-links">
{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" class="pub-link doi"><i class="fas fa-external-link-alt"></i>DOI</a>{% endif %}
{% if pub.url %}<a href="{{ pub.url }}" target="_blank" class="pub-link"><i class="fas fa-link"></i>Link</a>{% endif %}
{% if pub.arXiv %}<a href="{{ pub.arXiv }}" target="_blank" class="pub-link arxiv"><i class="fab fa-arxiv"></i>arXiv</a>{% endif %}
{% if pub.slides %}<a href="/assets/presentations/{{ pub.slides }}" target="_blank" class="pub-link slides"><i class="fas fa-chalkboard-teacher"></i>Slides</a>{% endif %}
{% if pub.poster %}<a href="/assets/presentations/{{ pub.poster }}" target="_blank" class="pub-link poster"><i class="fas fa-image"></i>Poster</a>{% endif %}
{% if pub.presentation %}<a href="{{ pub.presentation }}" target="_blank" class="pub-link video"><i class="fas fa-video"></i>Presentation</a>{% endif %}
</div>
</div>
</div>
{% endfor -%}
</div>

## Dissertations

{% assign theses = site.data.publications | where: 'ENTRYTYPE', 'phdthesis' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in theses %}
<div class="publication-card">
<div class="pub-timeline">
<div class="pub-year-badge">{{ pub.year }}</div>
<div class="timeline-line"></div>
</div>
<div class="pub-card-content">
<h3 class="pub-card-title">{{ pub.title | remove: '"' | remove: '{' | remove: '}' }}</h3>
<div class="pub-authors">{{ pub.author | replace: 'Madavan, Avinash N', '<strong>Madavan, Avinash N</strong>' }}</div>
<div class="pub-venue">
<i class="fas fa-graduation-cap"></i>
{{ pub.school }}
</div>
<div class="pub-card-links">
{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" class="pub-link doi"><i class="fas fa-external-link-alt"></i>DOI</a>{% endif %}
{% if pub.url %}<a href="{{ pub.url }}" target="_blank" class="pub-link"><i class="fas fa-link"></i>Link</a>{% endif %}
{% if pub.pdf %}<a href="/assets/papers/{{ pub.pdf }}" target="_blank" class="pub-link pdf"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
</div>
</div>
</div>
{% endfor -%}
</div>

## Book Chapters

{% assign chapters = site.data.publications | where: 'ENTRYTYPE', 'incollection' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in chapters %}
<div class="publication-card">
<div class="pub-timeline">
<div class="pub-year-badge">{{ pub.year }}</div>
<div class="timeline-line"></div>
</div>
<div class="pub-card-content">
<h3 class="pub-card-title">{{ pub.title | remove: '"' | remove: '{' | remove: '}' }}</h3>
<div class="pub-authors">{{ pub.author | replace: ' and ', ', ' | replace: 'Madavan, Avinash N', '<strong>Madavan, Avinash N</strong>' }}</div>
<div class="pub-venue">
<i class="fas fa-book-open"></i>
In <em>{{ pub.booktitle | remove: '"' | remove: '{' | remove: '}' }}</em>{% if pub.pages %}, pp. {{ pub.pages | replace: '--', '–' }}{% endif %}{% if pub.publisher %}. {{ pub.publisher }}{% endif %}
</div>
<div class="pub-card-links">
{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" class="pub-link doi"><i class="fas fa-external-link-alt"></i>DOI</a>{% endif %}
{% if pub.url %}<a href="{{ pub.url }}" target="_blank" class="pub-link"><i class="fas fa-link"></i>Link</a>{% endif %}
{% if pub.pdf %}<a href="/assets/papers/{{ pub.pdf }}" target="_blank" class="pub-link pdf"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
</div>
</div>
</div>
{% endfor -%}
</div>

## Presentations

{% assign presentations = site.data.presentations | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pres in presentations %}
<div class="publication-card">
<div class="pub-timeline">
<div class="pub-year-badge">{{ pres.year }}</div>
<div class="timeline-line"></div>
</div>
<div class="pub-card-content">
<h3 class="pub-card-title">{{ pres.title }}</h3>
{% if pres.presented_at %}
<div class="pub-venue">
<i class="fas fa-chalkboard-teacher"></i>
<em>{{ pres.presented_at }}</em>
</div>
{% endif %}
{% if pres.presented_by %}
<div class="pub-authors">Presented by {{ pres.presented_by }}</div>
{% endif %}
<div class="pub-card-links">
{% if pres.pptx %}<a href="/assets/presentations/{{ pres.pptx }}" target="_blank" class="pub-link ppt"><i class="fas fa-file-powerpoint"></i>PowerPoint</a>{% endif %}
{% if pres.pdf %}<a href="/assets/presentations/{{ pres.pdf }}" target="_blank" class="pub-link pdf"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
{% if pres.url %}<a href="{{ pres.url }}" target="_blank" class="pub-link"><i class="fas fa-link"></i>Link</a>{% endif %}
</div>
</div>
</div>
{% endfor -%}
</div>
