# Chengni Yang — Personal Website

A bright, English-language personal portfolio with a soft pink paper aesthetic and macOS-inspired content windows. Built as a lightweight, accessible static website for engineering recruitment and ongoing updates. **The project is an original implementation, not a copy of the visual references.**

## What is included

- About Me, Portfolio Highlights, Experience, Education, Skills and Contact
- Three detailed private-project summaries (MomWeight, Grouplet, Cheap.Guide)
- Real GitHub, LinkedIn, and email links; **no fabricated private project repositories**
- Responsive layout, keyboard-accessible navigation, reduced-motion support
- A reusable `AGENTS.md` detailing data format, UI rules, safety constraints, new content workflow, and acceptance checks

## Preview locally

**Simplest:** Unzip and open `index.html` directly in Chrome or Safari. The content is in `data/content.js`, so no server is required.

**Optional local server:**

```bash
cd chengni-yang
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish to GitHub Pages

1. Create a **public** repository named `chengni-yang` in your GitHub account `ninni13` (if desired). Never add hospital data, internal code, or secrets.
2. Upload the **contents of this folder**, not the ZIP and not a nested `chengni-yang` folder. The repository root must contain `index.html`, `AGENTS.md`, `css/`, `js/`, etc.
3. Open the repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, and Save.
5. Once GitHub reports the site published, your URL will normally be `https://ninni13.github.io/chengni-yang/`.
6. Confirm mobile layout, GitHub / LinkedIn links, and all three project descriptions on the live site.

GitHub's instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Update a project

1. Read `AGENTS.md`.
2. Add or update one object inside `window.PORTFOLIO_DATA.projects` in `data/content.js`. Each project must provide a slug, title bar label, name, subtitle, role, category, summary, contributions, stack, and known conceptual-art template.
3. Validate:

```bash
python3 scripts/validate_content.py
node --check data/content.js
node --check js/app.js
```

4. Reload the website. The new project window will render automatically. For a new art template, update renderer and CSS explicitly. To update roles, education or skills, edit corresponding data arrays; do not hardcode cards in `index.html`.

## Privacy and media

The illustrated project panels are **concept art, not actual app screenshots**. The individual projects are private and no deep links to private repos are included. Publish real screenshots only after reviewing them for confidential details and receiving explicit approval.

## Assignment hand-in checklist

- [ ] GitHub repository link verified
- [ ] Live GitHub Pages URL verified
- [ ] `AGENTS.md` committed and visible
- [ ] One extension demo: add another skill or project using only the written conventions
- [ ] Short explanation of how `AGENTS.md` makes future AI edits reproducible

## Attribution

Original site implementation and SVG decorations. Fonts: DM Sans and DM Serif Display via Google Fonts (with system fallbacks). macOS traffic-light controls are a visual reference only; they are not functioning operating-system buttons.
