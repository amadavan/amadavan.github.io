from pathlib import Path
import requests
import yaml

# Get the directory one level up (parent directory)
ROOT_DIR = Path(__file__).parent.parent

PROJECTS_FILE = ROOT_DIR / '_data' / 'projects.yml'
COLORS_FILE = ROOT_DIR / '_data' / 'github_colors.yml'

with open(PROJECTS_FILE) as projects_file:
    projects_data = yaml.safe_load(projects_file)

for project in projects_data:
    if 'github' in project:
        github_url = project['github']
        if 'github.com/' in github_url:

            print(f'Fetching languages for: {project["title"]}... ', end='')

            languages_url = github_url.rstrip('/') + '/languages'
            # Need to add /repos before github.com with api.github.com/repos
            languages_url = languages_url.replace('github.com/', 'api.github.com/repos/')
            headers = {
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28"
            }
            response = requests.get(languages_url, headers=headers)
            if response.status_code != 200:
                print(f'[FAILED] Status code: {response.status_code}')
                continue

            project['languages'] = response.json()
            print('[DONE]')

with open(PROJECTS_FILE, 'w') as projects_file:
    yaml.dump(projects_data, projects_file)

# Download project language colors
colors_url = 'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
response = requests.get(colors_url)
if response.status_code == 200:
    colors_data = response.json()
    COLORS_FILE = ROOT_DIR / '_data' / 'github_colors.yml'
    with open(COLORS_FILE, 'w') as cf:
        yaml.dump(colors_data, cf)
    print('Downloaded GitHub language colors.')
