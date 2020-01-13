#! /usr/bin/env sh

INPUT="db/publications.bib"
OUTPUT="db/publications"

citation-js -i $INPUT -o $OUTPUT -f json -s csl
