#!/usr/bin/env python3
"""Validate the structured content used by the static portfolio."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
raw = (ROOT / 'data/content.js').read_text(encoding='utf8')
match = re.fullmatch(r'/\*.*?\*/\s*window\.PORTFOLIO_DATA\s*=\s*(\{.*\});\s*', raw, re.S)
assert match, 'content.js must contain the PORTFOLIO_DATA object generated from valid JSON'
data = json.loads(match.group(1))

for key in ('about', 'featuredProjects', 'otherProjects', 'experience', 'education', 'skills', 'contact'):
    assert isinstance(data.get(key), list) and data[key], f'Missing/non-list {key}'


def nonempty(value):
    return isinstance(value, str) and value.strip()


def word_count(value):
    return len(re.findall(r"[A-Za-z0-9]+(?:[.+’-][A-Za-z0-9]+)*", value))


def valid_slug(value):
    return nonempty(value) and re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', value)


def validate_string_list(value, message, minimum=1, maximum=None):
    assert isinstance(value, list) and len(value) >= minimum, message
    if maximum is not None:
        assert len(value) <= maximum, message
    assert all(nonempty(item) for item in value), message


slugs = set()
for project in data['featuredProjects']:
    slug = project.get('slug')
    assert valid_slug(slug), f'Bad Featured Project slug {slug}'
    assert slug not in slugs, f'Duplicate slug {slug}'
    slugs.add(slug)
    for field in ('windowTitle', 'name', 'subtitle', 'role', 'category', 'detailPath'):
        assert nonempty(project.get(field)), f'Missing {field} for {slug}'
    expected_path = f'./projects/{slug}.html'
    assert project['detailPath'] == expected_path, f'detailPath must be {expected_path}'
    assert (ROOT / project['detailPath'][2:]).is_file(), f'Missing detail page for {slug}'

    home = project.get('home', {})
    assert nonempty(home.get('overview')), f'Missing home overview for {slug}'
    count = word_count(home['overview'])
    assert 40 <= count <= 60, f'Home overview for {slug} must be 40–60 words (found {count})'
    validate_string_list(home.get('contributions'), f'Featured home card needs 2–3 contributions for {slug}', 2, 3)
    validate_string_list(home.get('stack'), f'Featured home card needs 3–5 core technologies for {slug}', 3, 5)

    detail = project.get('detail', {})
    validate_string_list(detail.get('overview'), f'Detail overview needs 2–3 paragraphs for {slug}', 2, 3)
    for legacy_field in ('background', 'responsibilities', 'challenges', 'externalLinks'):
        assert legacy_field not in detail, f'Legacy detail field {legacy_field} must be removed for {slug}'
    contributions = detail.get('contributions')
    assert isinstance(contributions, list) and 4 <= len(contributions) <= 6, f'Detail page needs 4–6 contributions for {slug}'
    for item in contributions:
        assert isinstance(item, dict) and all(nonempty(item.get(key)) for key in ('title', 'detail')), f'Invalid contribution for {slug}'
    stack = detail.get('stack')
    assert isinstance(stack, list) and stack, f'Missing detail stack for {slug}'
    for group in stack:
        assert isinstance(group, dict) and nonempty(group.get('category')), f'Invalid stack group for {slug}'
        validate_string_list(group.get('items'), f'Invalid stack items for {slug}')
    if 'screenshots' in detail:
        assert isinstance(detail['screenshots'], list) and detail['screenshots'], f'Optional screenshots must be non-empty for {slug}'
        for screenshot in detail['screenshots']:
            assert isinstance(screenshot, dict) and all(nonempty(screenshot.get(key)) for key in ('src', 'alt')), f'Invalid screenshot for {slug}'
    if 'publicLinks' in detail:
        assert isinstance(detail['publicLinks'], list) and detail['publicLinks'], f'Optional publicLinks must be non-empty for {slug}'
        for link in detail['publicLinks']:
            assert nonempty(link.get('label')) and nonempty(link.get('url')) and link['url'].startswith('https://'), f'Invalid public link for {slug}'
    if 'technicalDeepDive' in detail:
        assert isinstance(detail['technicalDeepDive'], list) and detail['technicalDeepDive'], f'Optional technicalDeepDive must be non-empty for {slug}'
        for item in detail['technicalDeepDive']:
            assert isinstance(item, dict) and all(nonempty(item.get(key)) for key in ('title', 'detail')), f'Invalid technical deep dive for {slug}'

for project in data['otherProjects']:
    slug = project.get('slug')
    assert valid_slug(slug), f'Bad Other Project slug {slug}'
    assert slug not in slugs, f'Duplicate slug {slug}'
    slugs.add(slug)
    for field in ('windowTitle', 'name', 'overview', 'repositoryUrl'):
        assert nonempty(project.get(field)), f'Missing {field} for {slug}'
    count = word_count(project['overview'])
    assert 40 <= count <= 70, f'Other Project overview for {slug} must be 40–70 words (found {count})'
    validate_string_list(project.get('highlights'), f'Other Project needs 2–3 highlights for {slug}', 2, 3)
    validate_string_list(project.get('stack'), f'Missing stack for {slug}')
    assert project['repositoryUrl'].startswith('https://github.com/ninni13/'), f'Invalid public repository for {slug}'

for education in data['education']:
    assert all(nonempty(education.get(key)) for key in ('school', 'degree', 'location'))
    if 'detail' in education:
        assert nonempty(education['detail']), 'Optional education detail must be non-empty'
    education_copy = ' '.join(education.get(key, '') for key in ('degree', 'location', 'detail'))
    assert not re.search(r'(19|20)\d{2}', education_copy), 'Education dates must not be shown'
for group in data['skills']:
    assert nonempty(group.get('category'))
    validate_string_list(group.get('items'), f'Invalid skills group {group.get("category")}')
for item in data['contact']:
    assert nonempty(item.get('label')) and nonempty(item.get('display'))
    assert item['url'].startswith(('https://', 'mailto:'))
assert any(item['label'] == 'Email' and item['url'].startswith('mailto:') for item in data['contact']), 'Hero requires a confirmed Email contact'

assert 'NTUNHS' not in raw and 'Interests' not in raw, 'Public page must exclude excluded sections'
print(
    f'PASS: {len(data["featuredProjects"])} featured projects, '
    f'{len(data["otherProjects"])} other projects, '
    f'{len(data["experience"])} experience entries, '
    f'{len(data["skills"])} skill groups'
)
