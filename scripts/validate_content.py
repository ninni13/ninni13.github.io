#!/usr/bin/env python3
"""Validate the single source of truth used by the static portfolio."""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
raw = (ROOT/'data/content.js').read_text(encoding='utf8')
match = re.fullmatch(r'/\*.*?\*/\s*window\.PORTFOLIO_DATA\s*=\s*(\{.*\});\s*', raw, re.S)
assert match, 'content.js must contain the PORTFOLIO_DATA object generated from valid JSON'
data = json.loads(match.group(1))
for key in ('currently','about','projects','experience','education','skills','contact'):
    assert isinstance(data.get(key), list) and data[key], f'Missing/non-list {key}'
slugs = set()
for p in data['projects']:
    for field in ('slug','windowTitle','name','subtitle','role','category','summary','art'):
        assert isinstance(p.get(field),str) and p[field].strip(),f'Missing {field}'
    assert re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',p['slug']),f'Bad slug {p["slug"]}'
    assert p['slug'] not in slugs,f'Duplicate slug {p["slug"]}'
    slugs.add(p['slug'])
    assert p['art'] in ('momweight','grouplet','cheap-guide'), 'Choose an implemented art template or add a new one in app.js and style.css'
    assert len(p.get('contributions',[]))>=2 and p.get('stack'),f'Missing contributions/stack for {p["slug"]}'
for ed in data['education']:
    assert all(isinstance(ed.get(k),str) and ed[k] for k in ('school','degree','detail'))
    assert not re.search(r'(19|20)\d{2}',ed['degree']+' '+ed['detail']), 'Education dates must not be shown'
for group in data['skills']:
    assert group.get('category') and isinstance(group.get('items'),list) and group['items']
for item in data['contact']:
    assert item['url'].startswith(('https://','mailto:'))
assert 'NTUNHS' not in raw and 'Interests' not in raw, 'Public page must exclude excluded sections'
print(f'PASS: {len(data["projects"])} projects, {len(data["experience"])} experience entries, {len(data["skills"])} skill groups')
