# Chengni Yang — Personal Website

A bright, English-language personal portfolio with a soft pink paper aesthetic and macOS-inspired content windows. Built as a lightweight, accessible static website for engineering recruitment and ongoing updates. **The project is an original implementation, not a copy of the visual references.**

## What is included

- About Me, Portfolio Highlights, Experience, Education, Skills, and a concise Hero email contact
- Three private Featured Projects with concise homepage cards and shared detail pages (MomWeight, Cheap.Guide, Grouplet)
- Two verified public Other Projects linked to GitHub (MoodJournal and PaperMind)
- Real GitHub, LinkedIn, email, repository, and approved product links; **no fabricated private project repositories**
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
6. Confirm mobile layout, GitHub / LinkedIn links, all five homepage project cards, and the three Featured detail pages on the live site.

GitHub's instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Update projects

1. Read `AGENTS.md`.
2. Add or update an object in `window.PORTFOLIO_DATA.featuredProjects` or `otherProjects` in `data/content.js`. Featured Projects include complete `home` and `detail` data plus a thin `projects/{slug}.html` shell. Other Projects require a verified public GitHub repository and render only on the homepage.
3. Validate:

```bash
python3 scripts/validate_content.py
node --check data/content.js
node --check js/app.js
node --check js/project-detail.js
```

4. Reload the website. Project cards render automatically from data, while every Featured page uses the shared `js/project-detail.js` and `css/project-detail.css`. To update roles, education or skills, edit corresponding data arrays; do not hardcode cards in `index.html`.

## Privacy and media

Featured project repositories are private and are not linked. Other Project repositories are public and verified from the owner's GitHub account. Publish real screenshots only after reviewing them for confidential details and receiving explicit approval. Detail-page links, screenshots, and Technical Deep Dives are optional and remain completely hidden when no verified content is available.

## Assignment hand-in checklist

- [ ] GitHub repository link verified
- [ ] Live GitHub Pages URL verified
- [ ] `AGENTS.md` committed and visible
- [ ] One extension demo: add another skill or project using only the written conventions
- [ ] Short explanation of how `AGENTS.md` makes future AI edits reproducible

## Attribution

Original site implementation and SVG decorations. Fonts: DM Sans and DM Serif Display via Google Fonts (with system fallbacks). macOS traffic-light controls are a visual reference only; they are not functioning operating-system buttons.
