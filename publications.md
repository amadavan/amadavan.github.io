---
layout: default.liquid
title: Publications
description: "Avinash Madavan's academic publications in optimization theory, power systems, and machine learning. Published in IEEE Transactions and JOTA."
---

---

<div class="quick-links">
  <i class="fas fa-link"></i>
  <strong>Quick Links:</strong>
  <a href="#journal-publications">Journal</a> •
  <a href="#conference-proceedings">Conference</a> •
  <a href="#dissertations">Dissertations</a> •
  <a href="#book-chapters">Book Chapters</a> •
  <a href="#presentations">Presentations</a>
</div>

---

<!-- Journal Publications -->
<div id="journal-publications">
{% include "publication_list_header.liquid" title:"Journal Publications", icon:"book" %}

{% assign articles = site.data.publications | where: 'ENTRYTYPE', 'article' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in articles -%}
	{% include "publications.liquid" pub:pub, type:"article" %}
{%- endfor -%}
</div>
</div>

<!-- Conference Publications -->
<div id="conference-proceedings">
{% include "publication_list_header.liquid" title:"Conference Proceedings", icon:"users" %}

{% assign conferences = site.data.publications | where: 'ENTRYTYPE', 'inproceedings' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in conferences -%}
	{% include "publications.liquid" pub:pub, type:"inproceedings" %}
{%- endfor -%}
</div>
</div>


<!-- Dissertations -->
<div id="dissertations">
{% include "publication_list_header.liquid" title:"Dissertations", icon:"graduation-cap" %}

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
</div>

<!-- Book Chapters -->
<div id="book-chapters">
{% include "publication_list_header.liquid" title:"Book Chapters", icon:"book-open" %}

{% assign chapters = site.data.publications | where: 'ENTRYTYPE', 'incollection' | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pub in chapters -%}
	{% include "publications.liquid" pub:pub, type:"incollection" %}
{%- endfor -%}
</div>
</div>

<!-- Presentations -->
<div id="presentations">
{% include "publication_list_header.liquid" title:"Presentations", icon:"person-chalkboard" %}

{% assign presentations = site.data.presentations | sort: 'year' | reverse -%}
<div class="publications-list">
{%- for pres in presentations -%}
	{% include "publications.liquid" pub:pres, type:"presentation" %}
{%- endfor -%}
</div>
</div>
