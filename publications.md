---
layout: default.liquid
title: Publications
description: "Avinash Madavan's academic publications in optimization theory, power systems, and machine learning. Published in IEEE Transactions and JOTA."
---

## Journal Publications

{% assign articles = site.data.publications | where: 'ENTRYTYPE', 'article' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in articles -%}
	{% include "publications.liquid" pub:pub, type:"article" %}
{%- endfor -%}
</div>

## Conference Proceedings

{% assign conferences = site.data.publications | where: 'ENTRYTYPE', 'inproceedings' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in conferences -%}
	{% include "publications.liquid" pub:pub, type:"inproceedings" %}
{%- endfor -%}
</div>

## Dissertations

{% assign theses = site.data.publications | where: 'ENTRYTYPE', 'phdthesis' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in theses -%}
	{% include "publications.liquid" pub:pub, type:"phdthesis" %}
{%- endfor -%}
</div>

{% assign theses = site.data.publications | where: 'ENTRYTYPE', 'mastersthesis' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in theses -%}
	{% include "publications.liquid" pub:pub, type:"mastersthesis" %}
{%- endfor -%}
</div>

## Book Chapters

{% assign chapters = site.data.publications | where: 'ENTRYTYPE', 'incollection' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in chapters -%}
	{% include "publications.liquid" pub:pub, type:"incollection" %}
{%- endfor -%}
</div>

## Presentations

<!-- {% assign presentations = site.data.presentations | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pres in presentations %}
<div class="publication-card">
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
<div class="pub-card-links" style="position: relative;">
{%- assign has_links = false -%}
{%- if pub.doi or pub.url or pub.arXiv or pub.pdf or pub.external %}{% assign has_links = true -%}{%- endif -%}
{% if pres.pptx %}<a href="/assets/presentations/{{ pres.pptx }}" target="_blank" class="pub-link ppt"><i class="fas fa-file-powerpoint"></i>PowerPoint</a>{% endif %}
{% if pres.pdf %}<a href="/assets/presentations/{{ pres.pdf }}" target="_blank" class="pub-link pdf"><i class="fas fa-file-pdf"></i>PDF</a>{% endif %}
{% if pres.url %}<a href="{{ pres.url }}" target="_blank" class="pub-link"><i class="fas fa-link"></i>Link</a>{% endif %}
{% if pres.external %}<a href="{{ pres.external }}" target="_blank" class="pub-link external"><i class="fas fa-external-link-alt"></i>External</a>{% endif %}
{%- unless has_links -%}<span></span>{%- endunless -%}
<div style="position: absolute; right: 0; bottom: 0; font-size: 0.95em; color: #888; padding: 0.2em 0.7em;">{{ pres.year }}</div>
</div>
</div>
</div>
{% endfor -%}
</div> -->

{% assign presentations = site.data.presentations | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pres in presentations -%}
	{% include "publications.liquid" pub:pres, type:"presentation" %}
{%- endfor -%}
</div>
