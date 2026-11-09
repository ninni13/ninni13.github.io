# Chengni Yang — Software Engineer Portfolio

A public, English-language portfolio presenting Chengni Yang's software engineering experience, selected projects, education, and technical skills.

## Live Website

- Website: [https://ninni13.github.io/chengni-yang/](https://ninni13.github.io/chengni-yang/)
- GitHub repository: [https://github.com/ninni13/chengni-yang](https://github.com/ninni13/chengni-yang)

## Project Overview

This portfolio is designed for software engineering job searches. It combines a warm, Japanese-inspired visual style with macOS-inspired content windows, pastel pink highlights, responsive layouts, and structured project data. The content is kept separate from the rendering logic so profile and project updates can be made consistently.

## Features

- About Me introduction and external contact links
- Featured Projects with dedicated detail pages
- Other Projects linked to confirmed public GitHub repositories
- Experience and Education sections
- Data-driven Skills & Tools presentation
- Fixed, responsive navigation and mobile-friendly layouts
- Secure external links for GitHub, LinkedIn, email, and approved project websites

## Tech Stack

The portfolio itself uses:

- Semantic HTML5
- Custom CSS with responsive layouts and reusable macOS-window components
- Vanilla JavaScript for data rendering and navigation behavior
- Structured JavaScript data in `data/content.js`
- SVG icons, masks, and paper-texture assets
- Python 3 for structured-content validation
- Google Fonts: DM Sans and DM Serif Display
- GitHub Pages for static hosting

Technologies listed inside project cards and detail pages describe those individual projects; they are not dependencies of this portfolio website.

## Project Structure

```text
chengni-yang/
├── AGENTS.md
├── README.md
├── index.html
├── .nojekyll
├── assets/
│   ├── favicon.svg
│   ├── github-mark.svg
│   ├── linkedin-in.svg
│   ├── paper-fibers.svg
│   └── torn-paper-mask.svg
├── css/
│   ├── style.css
│   └── project-detail.css
├── data/
│   └── content.js
├── js/
│   ├── app.js
│   └── project-detail.js
├── projects/
│   ├── momweight.html
│   ├── cheap-guide.html
│   └── grouplet.html
└── scripts/
    └── validate_content.py
```

## Getting Started

Clone the repository and start a local static server:

```bash
git clone https://github.com/ninni13/chengni-yang.git
cd chengni-yang
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

The home page can also be opened directly from `index.html`. Portfolio data is exposed through `window.PORTFOLIO_DATA`, so the site does not require `fetch()` or a backend for local preview.

## Updating Content

Profile information, experience, education, skills, links, and project records are maintained in `data/content.js`.

- Featured Projects use the shared renderer in `js/project-detail.js` and the shared styles in `css/project-detail.css`.
- Each Featured Project requires a thin HTML shell in `projects/` that supplies the project slug to the shared renderer.
- Other Projects link directly to confirmed public GitHub repositories and do not require detail pages.
- `publicLinks`, `screenshots`, `architectureDiagrams`, and `technicalDeepDive` are optional fields inside a Featured Project's `detail` object.
- Optional sections must be omitted when their information, URLs, or images have not been verified for public use.

For the complete content schema, naming conventions, privacy rules, and project-extension workflow, read [AGENTS.md](./AGENTS.md).

Run the available checks after making changes:

```bash
python3 scripts/validate_content.py
node --check data/content.js
node --check js/app.js
node --check js/project-detail.js
git diff --check
```

Preview changes at desktop and mobile widths before publishing.

## Deployment

The site is published with GitHub Pages using these settings:

- Repository: [`ninni13/chengni-yang`](https://github.com/ninni13/chengni-yang)
- Branch: `main`
- Publishing folder: `/(root)`
- Published URL: [https://ninni13.github.io/chengni-yang/](https://ninni13.github.io/chengni-yang/)

Pushes to `main` are republished by GitHub Pages. Assets and internal links must remain relative so the site continues to work from the `/chengni-yang/` project subdirectory rather than only from a domain root.

## AI Development Guidelines

[AGENTS.md](./AGENTS.md) is the development contract for AI-assisted changes. It defines the design system, structured-content schema, verified-content and privacy limits, workflows for adding projects or updating profile sections, and the required validation process. AI contributors should read it before editing any repository file.

## Privacy & Attribution

MomWeight, Cheap.Guide, and Grouplet are private projects. Their descriptions include only approved public information; private repositories, credentials, internal materials, sensitive healthcare data, and unapproved screenshots must not be published. Public project links and visual assets are included only after verification.

The site uses [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) from Google Fonts. The interface, custom CSS, and repository SVG assets are maintained as part of this portfolio. Product and platform names remain the property of their respective owners.
