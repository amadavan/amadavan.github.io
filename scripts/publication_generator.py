from pathlib import Path
import bibtexparser
import yaml

# Get the directory one level up (parent directory)
ROOT_DIR = Path(__file__).parent.parent

BIB_FILE = ROOT_DIR / 'assets' / 'papers' / 'references.bib'
LINKS_FILE = ROOT_DIR / 'assets' / 'papers' / 'references_links.yml'
YAML_FILE = ROOT_DIR / '_data' / 'publications.yml'

# Ensure _data directory exists
YAML_FILE.parent.mkdir(exist_ok=True)

with open(BIB_FILE) as bib_file:
    bib_db = bibtexparser.load(bib_file)

with open(LINKS_FILE) as links_file:
    yaml_links = yaml.safe_load(links_file)

for entry in bib_db.entries:
    key = entry['ID']
    if key in yaml_links:
        entry.update(yaml_links[key])

with open(YAML_FILE, 'w') as yaml_file:
    yaml.dump(bib_db.entries, yaml_file)

print(f"✅ Converted BibTeX to YAML")
print(f"📄 Input: {BIB_FILE}")
print(f"📄 Output: {YAML_FILE}")