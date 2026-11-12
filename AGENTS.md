# AGENTS.md — Chengni Yang Personal Website

> Read this file and `README.md` before editing. Treat the current code and `data/content.js` as the source of truth, preserve unrelated work, and report a mismatch before changing established behavior.

## 1. Project Overview

This repository is Chengni Yang’s public, English-language Software Engineer portfolio. It is a static site for recruiters and engineering collaborators, using a warm Japanese-inspired paper aesthetic, macOS-style content windows, responsive layouts, and data-driven project content.

Keep the site easy to maintain:

- Store portfolio copy and records in `data/content.js` whenever the existing schema can express the change.
- Keep homepage rendering in `js/app.js` and Featured Project detail rendering in the shared `js/project-detail.js`.
- Reuse existing CSS components and JavaScript modules instead of adding page-specific copies.
- Use the array order in `data/content.js` as display order. Do not duplicate current project, experience, education, or skill lists in this document.
- Preserve direct `index.html` preview and GitHub Pages deployment at the User Site root `/`; no build step or backend is required.

## 2. Content & Privacy Rules

- All public-facing copy is English. The Hero identifies Chengni Yang as a **Software Engineer**.
- Publish only facts supplied by the owner or confirmed through an approved resume, profile, or public repository. Never invent roles, features, technologies, metrics, outcomes, links, screenshots, or access permissions.
- Education may show verified degree, location, distinction, and GPA, but never dates. Do not add NTUNHS or an Interests section. Experience may include verified dates.
- MomWeight, Cheap.Guide, and Grouplet are private projects. Never expose or infer their repositories, credentials, internal assets, confidential architecture, healthcare data, or proprietary screenshots. `https://momweight.com/` is an approved public product website, not a repository or demo.
- Other Projects must link to real public repositories under `https://github.com/ninni13/`. Before adding or revising one, verify its README, primary source, and dependency/configuration files.
- Add personal contact information only with explicit approval. Never commit addresses, phone numbers, secrets, tokens, or credentials.
- Show product screenshots only when they are real, reviewed for sensitive information, and explicitly approved. Architecture diagrams must accurately represent confirmed, publishable systems. Never present generated mockups as real product visuals.
- External links use `target="_blank"` and `rel="noopener noreferrer"` where applicable. Keep official GitHub/LinkedIn icons and the existing external-link SVG convention. Private projects receive no repository or demo link without explicit approval.

## 3. Architecture & File Structure

```text
ninni13.github.io/
├── index.html
├── data/content.js
├── css/
│   ├── style.css
│   └── project-detail.css
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── reveal.js
│   └── project-detail.js
├── projects/                 # Thin Featured Project HTML shells
├── assets/                   # Icons and paper assets
├── scripts/validate_content.py
├── README.md
└── AGENTS.md
```

`data/content.js` must remain a JSON-compatible object assigned directly as follows; do not replace it with `fetch()`:

```js
window.PORTFOLIO_DATA = {
  about: [String],
  featuredProjects: [FeaturedProject],
  otherProjects: [OtherProject],
  experience: [Experience],
  education: [Education],
  skills: [SkillGroup],
  contact: [Contact]
};
```

### Featured Project schema

```js
{
  slug: "sample-project",            // unique lowercase kebab-case
  windowTitle: "sample.app",
  name: "Sample Project",
  subtitle: "Verified product description",
  role: "Verified role",
  category: "Domain · Platform",
  detailPath: "./projects/sample-project.html",
  home: {
    overview: "Verified 40–60 word summary.",
    contributions: ["Two or three verified contributions."],
    stack: ["Three to five core technologies"]
  },
  detail: {
    overview: ["Two or three factual paragraphs."],
    contributions: [
      { title: "Engineering area", detail: "Specific verified work or outcome." }
    ], // four to six distinct entries
    stack: [
      { category: "Backend", items: ["Verified technology"] }
    ],

    // Optional fields belong inside detail and are omitted when unavailable.
    publicLinks: [
      { label: "Visit Website", url: "https://confirmed.example/" }
    ],
    screenshots: [
      { src: "../assets/approved-image.png", alt: "Specific description", caption: "Optional factual caption" }
    ],
    architectureDiagrams: [
      { src: "../assets/approved-diagram.png", alt: "Accurate description", caption: "Optional factual caption" }
    ],
    technicalDeepDive: [
      { title: "Technical case", detail: "Verified detail not repeated elsewhere." }
    ]
  }
}
```

Featured rules:

- `slug` must match `[a-z0-9]+(?:-[a-z0-9]+)*` and be unique across both project arrays.
- `detailPath` must be exactly `./projects/{slug}.html` and the file must exist.
- Do not introduce legacy detail fields such as `background`, `responsibilities`, `challenges`, `externalLinks`, or optional fields outside `detail`.
- Optional arrays must be non-empty when present. Public URLs must be confirmed HTTPS URLs; image records require non-empty `src` and `alt`.
- `scripts/validate_content.py` does not currently validate `architectureDiagrams`; extend the validator when adding the first one.

Each Featured Project needs a thin `projects/{slug}.html` shell copied from an existing page. Change only its metadata and `data-project-slug`; retain shared navigation, footer, scripts, relative `../` paths, and version queries. Project prose belongs only in `data/content.js`.

### Other Project schema

```js
{
  slug: "public-project",
  windowTitle: "public-project.repo",
  name: "Repository’s formal name",
  overview: "Verified 40–70 word summary.",
  highlights: ["Two or three verified technical points."],
  stack: ["Verified technology"],
  repositoryUrl: "https://github.com/ninni13/public-project"
}
```

Other Projects render only on the homepage and never receive detail shells.

Other record shapes are:

```js
{ role: String, organization: String, period: String, note: String } // Experience
{ school: String, degree: String, location: String, detail?: String } // Education; no dates
{ category: String, items: [String] }                                // Skills
{ label: String, display: String, url: String }                       // Contact
```

## 4. Design Guidelines

- Preserve the existing palette, DM Sans/DM Serif Display typography, paper textures, pink marker treatment, spacing hierarchy, and macOS-window appearance. Use tokens and components already defined in `css/style.css` and `css/project-detail.css`; do not reproduce values in new selectors without need.
- Reuse `.mac-window`, `.window-bar`, `.traffic`, and `.window-name`. All red/yellow/green dots are decorative only: keep `.traffic` hidden from assistive technology, use non-interactive elements, and never add Close, Minimize, Maximize, Focus Mode, tooltips, or button semantics. Existing subtle pointer animation is visual only.
- Reuse `.marker-highlight` variants only where the current renderers apply them. Markers follow text width; project action links and detail-page headings stay unhighlighted.
- Reuse `js/navigation.js` for fixed navigation/mobile-menu behavior and `js/reveal.js` for progressive scroll reveals. Do not duplicate observers or navigation handlers. Content must remain visible without JavaScript animation, and nonessential motion must respect `prefers-reduced-motion`.
- Preserve the existing homepage information hierarchy, two-column desktop project layouts, equal-height paired cards, bottom-aligned project links, data-driven Skills rows, neutral footer, and shared detail-page template. Detail pages render Header, Overview, Key Engineering Contributions, Tech Stack, then optional sections only when data exists.
- Maintain semantic HTML, visible keyboard focus, descriptive image alt text, secure external links, and accessible mobile navigation. Hover effects cannot be the only way to access information.
- Validate at 1440px, 1024px, 768px, and 375px. Layouts must reflow without horizontal scrolling, overlap, clipped text, or fixed-height content loss. Long titles, roles, links, and technology lists must wrap naturally.

## 5. Development Workflow

1. Read this file, `README.md`, `data/content.js`, and the relevant renderer/style files. Inspect `git status` and preserve unrelated changes.
2. Confirm content and URLs before editing. Prefer a data-only update; change shared rendering or styles only when the existing schema/component cannot satisfy the request.
3. For a Featured Project, add the complete data object and matching thin HTML shell. Keep optional fields inside `detail`, then test both its homepage card and detail page.
4. For an Other Project, verify the public repository and add only its data object. Do not create a detail page.
5. For Experience, Education, Skills, or existing project copy, update the appropriate record in `data/content.js`; do not hardcode rendered rows into HTML.
6. For shared detail layout changes, edit `js/project-detail.js` and/or `css/project-detail.css` once and verify every Featured detail page.
7. Increment version query parameters in every HTML consumer when changing shared CSS, data, or JavaScript so browsers do not retain stale resources. Keep all paths relative and valid both locally and at `https://ninni13.github.io/`.
8. Run relevant static and browser checks. Report changed files, completed checks, and anything not verified.

## 6. Validation & Definition of Done

Run the required static checks:

```bash
python3 scripts/validate_content.py
node --check data/content.js
node --check js/navigation.js
node --check js/reveal.js
node --check js/app.js
node --check js/project-detail.js
git diff --check
```

Preview directly through `index.html` when appropriate or run:

```bash
python3 -m http.server 8000
```

Before completion, confirm:

- Structured data passes validation; slugs, counts, word ranges, paths, and optional-field placement match the schema.
- Copy is English, factual, readable, and privacy-safe. Private repositories, confidential data, unapproved visuals, and unsupported claims are absent.
- Homepage navigation, anchors, hamburger menu, project links, Back to Projects, Back to top, and external links work. Detail pages use the shared renderer and omit empty optional sections.
- CSS, JavaScript, data, fonts, SVGs, and textures load without network failures or uncaught JavaScript errors.
- The site is keyboard accessible, readable without hover/animation, and respects reduced motion. Traffic lights remain decorative.
- At all required widths there is no horizontal overflow, overlap, clipped content, or layout collision, and GitHub Pages relative paths remain correct.
- Only intended files changed, unrelated work was preserved, version queries were updated where required, and `git diff --check` passes.
