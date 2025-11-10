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

{% assign presentations = site.data.presentations | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pres in presentations -%}
	{% include "publications.liquid" pub:pres, type:"presentation" %}
{%- endfor -%}
</div>
