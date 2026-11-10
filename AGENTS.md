# AGENTS.md — Chengni Yang Personal Website

> Read this file and `README.md` before editing the repository. This document is the implementation contract for AI coding assistants. Treat the current code and structured data as the source of truth, preserve unrelated work, and report any mismatch before changing behavior.

## 1. Project Overview & Goals

This repository contains Chengni Yang’s English-language, public, job-search portfolio. It is a static website with a warm Japanese-inspired paper aesthetic and macOS-style content windows. Its primary audience is recruiters and engineering collaborators.

The site should let visitors quickly understand:

- Chengni’s Software Engineer profile and contact links.
- Her project roles, engineering contributions, and technology choices.
- Her experience, education, and skills.
- Which projects have private source code and which public repositories can be opened.

Maintainability goal: ordinary content changes should be made in `data/content.js`. Shared layout behavior belongs in the existing renderers and stylesheets, not duplicated across HTML pages.

The current public project order is:

1. Featured Projects: MomWeight, Cheap.Guide, Grouplet.
2. Other Projects: MoodJournal, PaperMind.

## 2. Content & Privacy Rules

### Public copy

- All public-facing website copy is English. A project may factually describe a non-English product, but the portfolio description remains English.
- Display the name **Chengni Yang** and the professional title **Software Engineer** in the Hero.
- Do not display NTUNHS, an Interests section, or Education dates. Education may include degree, location, distinction, and GPA when verified.
- Experience entries may include verified date ranges.
- Use only facts supplied by the owner, verified public repositories, the approved resume, or another confirmed source. Never invent features, metrics, roles, technologies, outcomes, screenshots, links, or access permissions.

### Privacy and project access

- MomWeight, Cheap.Guide, and Grouplet are private projects. Do not publish or infer repository URLs, credentials, internal assets, proprietary screenshots, patient data, hospital data, or confidential architecture details.
- The owner has approved `https://momweight.com/` as MomWeight’s public product website. It is not a repository or demo link.
- Other Projects must link to a real public repository under `https://github.com/ninni13/`. Verify the repository’s README, primary source files, and dependency/configuration files before publishing or revising its description.
- Publish personal contact details only when explicitly approved. Never add private addresses, phone numbers, tokens, secrets, or credentials.
- Real product screenshots must be reviewed for confidential information and explicitly approved. Architecture diagrams must be accurate, publishable representations of the confirmed system. Never present AI-generated mock screens or conceptual artwork as real product visuals.

### Links

- Hero GitHub: `https://github.com/ninni13`.
- Hero LinkedIn: `https://www.linkedin.com/in/cheng-ni-yang`.
- External links open with `target="_blank"` and `rel="noopener noreferrer"` where applicable.
- External-link affordances use the existing Lucide-style `external-link` SVG. GitHub and LinkedIn retain their official brand icons.
- Private Featured Projects have no repository or demo links unless the owner explicitly approves a specific public URL.

## 3. Design System

### 3.1 Design Tokens

The effective tokens are defined in `css/style.css`:

| Purpose | Value |
| --- | --- |
| Warm background | `#fbf8f6` |
| Primary ink | `#313037` |
| Muted text | `#59535a` effective override |
| Pink accent | `#f0bfc8` |
| Pale pink | `#f9e2e5` |
| Sage | `#dbe3d4` |
| Soft yellow | `#f9df9c` |
| Body font | DM Sans, Arial fallback |
| Display font | DM Serif Display, Georgia fallback |

Maintain strong text contrast. Body copy is generally 17–18px with at least 1.6 line-height. Do not use page-level `zoom` or `transform: scale()` to increase readability.

### 3.2 Components

#### macOS windows

- Reuse `.mac-window`, `.window-bar`, `.traffic`, and `.window-name`.
- Keep the thin outer border, subtle shadow, title-bar divider, rounded corners, and red/yellow/green traffic lights.
- Windows do not overlap, and content must remain visible at every supported viewport.

#### Pink marker

- Reuse `.marker-highlight` with `.marker-highlight--heading` or `.marker-highlight--label`.
- The effective implementation is a nearly horizontal `linear-gradient()` covering only the lower portion of the text, with `box-decoration-break: clone` for wrapping.
- Large markers appear on the three homepage primary headings and the Hero title label.
- Featured homepage cards use the small marker on `Project Overview`, `Key Contributions`, and `Core Technologies` only. Project Role is plain text beside the project name.
- Detail-page Role and section headings are unhighlighted.
- Marker width follows text width; it must not stretch across a flex container.

#### Paper decoration

- Use `assets/torn-paper-mask.svg` and `assets/paper-fibers.svg` for the effective torn-paper background treatment.
- Decorations remain low contrast, behind content, and contained without horizontal overflow.
- Do not add regular dot grids, large geometric teeth, or low-point polygon shapes as the visible final effect.

#### Icons and actions

- Reuse the existing inline SVG conventions and `assets/github-mark.svg` / `assets/linkedin-in.svg`.
- Keep visible keyboard focus states.
- Use understated text links for project websites, repositories, Back to Projects, and Back to top; do not convert them into large filled cards.

### 3.3 Page Layouts

#### Navigation and Hero

- The fixed top navigation contains exactly: About, Projects, Experience, Skills.
- Detail-page navigation uses the same labels and points to `../index.html#...` anchors.
- Reuse `js/navigation.js` for fixed-navigation scroll state and mobile-menu behavior on the homepage and every detail page; do not duplicate this logic in page renderers.
- At the top of a page, the navigation background, divider, and shadow are absent. After scrolling more than 20px, `.is-scrolled` uses a highly transparent Liquid Glass treatment: `rgba(251, 248, 246, 0.12)`, low-contrast radial/linear highlights, and `blur(20px) saturate(165%) contrast(104%)`. The glass layer extends about 30px below the header and fades out through a vertical mask, with no bottom divider or external drop shadow; the state transition remains approximately 200ms.
- Opening the mobile menu uses a more opaque `rgba(251, 248, 246, 0.52)` version of the same glass treatment for contrast. `prefers-reduced-motion` disables the transition through the global reduced-motion rule.
- The Hero is one full-width `.mac-window` inside the shared `.wrap`. It contains the name, highlighted `Software Engineer`, one short description, and buttons ordered GitHub, LinkedIn, Email.
- GitHub and LinkedIn URLs/icons are currently authored in `index.html`. Email is selected from `PORTFOLIO_DATA.contact` by `js/app.js`. If a social URL changes, update both the visible HTML link and the matching contact record.

#### Homepage sections

- Primary headings are outside their windows and use this exact hierarchy:
  - `01 / GET TO KNOW ME` — `About Me`
  - `02 / WORK I'M PROUD OF` — `Portfolio Highlights`
  - `03 / HOW I GOT HERE` — `The Story So Far`
- About renders `PORTFOLIO_DATA.about` as one full-width reading column inside `about-me.md`.
- Featured Projects use a two-column desktop grid. MomWeight and Cheap.Guide share the first row and stretch to the same natural height; `View Details` aligns at the bottom. Grouplet follows in source order.
- Featured cards are text-only: category, title plus plain Role, subtitle, overview, 2–3 contributions, 3–5 core technologies, and `View Details`.
- Featured `Core Technologies` are plain 15px text separated visually with `·`, not chips.
- Other Projects use two equal-height desktop cards with bottom-aligned repository links. Their stack currently uses compact tags.
- Experience and the Education/Skills column use a 50/50 desktop split. Skills render as Category / Technologies text rows from structured data.
- Experience follows the current data order: MomWeight, Cheap.Guide, Grouplet, TibaMe. Education follows NTUST, then QUT.
- The neutral Footer contains `Chengni Yang.`, the dynamic copyright year, and an SVG `Back to top` link. It does not repeat social/contact links.

#### Featured Project detail pages

- All three pages use the thin shells in `projects/`, the shared renderer `js/project-detail.js`, and `css/project-detail.css`.
- Header order: category, a wrapping flex row with 56–64px serif Project Title and plain 16–18px medium-weight Role, subtitle, then confirmed public links.
- The shared content order is Overview, Key Engineering Contributions, Tech Stack, then optional Technical Deep Dive and optional Project Visuals.
- Overview uses the full available content width. Contributions use two columns on desktop and one on tablet/mobile. Tech Stack is a borderless two-column grid of category headings and plain `·`-separated text, becoming one column on tablet/mobile.
- Separate major sections with whitespace rather than horizontal rules: approximately 48–64px desktop and 32–40px mobile. Preserve the macOS window/title-bar borders.
- Render one SVG `Back to Projects` link above the window, targeting `../index.html#projects`.
- Optional sections are omitted entirely when their data is absent; do not render empty headings or placeholder messages.

### 3.4 Responsive Rules

Validate at 1440px, 1024px, 768px, and 375px.

- Shared content width uses `.wrap`; no page may produce horizontal scrolling.
- Featured Projects switch to one column below 901px.
- Other Projects switch to one column below 701px.
- Experience/Education/Skills and detail-page Contributions/Tech Stack become one column at 850px and below.
- At 640px and below, the fixed navigation uses the accessible hamburger menu, typography wraps naturally, cards use reduced padding, and project title/Role rows may wrap.
- Long technology lists and link text must wrap or reflow without clipping.
- Preserve `prefers-reduced-motion` behavior.

## 4. Project Structure

```text
ninni13.github.io/
├── AGENTS.md
├── README.md
├── index.html
├── .nojekyll
├── css/
│   ├── style.css                 # Homepage tokens, components, and responsive rules
│   └── project-detail.css        # Shared Featured detail-page styles
├── js/
│   ├── app.js                    # Homepage data renderers and URL cleanup
│   ├── navigation.js             # Shared fixed navigation and mobile-menu behavior
│   └── project-detail.js         # Shared Featured detail-page renderer
├── data/
│   └── content.js                # All structured portfolio content
├── projects/
│   ├── momweight.html
│   ├── cheap-guide.html
│   └── grouplet.html
├── assets/
│   ├── favicon.svg
│   ├── github-mark.svg
│   ├── linkedin-in.svg
│   ├── paper-fibers.svg
│   └── torn-paper-mask.svg
├── artifacts/screenshots/        # Checked visual-validation captures
└── scripts/validate_content.py
```

`data/content.js` must retain the assignment wrapper:

```js
window.PORTFOLIO_DATA = { ... };
```

Use JSON-compatible values inside the object. Do not replace it with `fetch()`; direct `file://` preview must continue to work. Keep relative paths compatible with deployment at the GitHub Pages User Site root `/`.

## 5. Content Schema & Naming Conventions

### 5.1 Root data

`PORTFOLIO_DATA` contains these non-empty arrays:

```js
{
  about: [String],
  featuredProjects: [FeaturedProject],
  otherProjects: [OtherProject],
  experience: [Experience],
  education: [Education],
  skills: [SkillGroup],
  contact: [Contact]
}
```

Array order controls display order.

### 5.2 Featured Project

```js
{
  slug: "sample-project",                 // unique lowercase kebab-case
  windowTitle: "sample.app",
  name: "Sample Project",
  subtitle: "Clear product description",
  role: "Verified role",
  category: "Domain · Platform",
  detailPath: "./projects/sample-project.html",
  home: {
    overview: "Verified 40–60 word summary.",
    contributions: [
      "First concise verified contribution.",
      "Second concise verified contribution."
    ],
    stack: ["Technology A", "Technology B", "Technology C"]
  },
  detail: {
    overview: [
      "Factual background and purpose paragraph.",
      "Factual system scope and role paragraph."
    ],
    contributions: [
      { title: "Engineering area", detail: "Concrete verified implementation or outcome." },
      { title: "Reliability", detail: "Distinct verified engineering work." },
      { title: "Testing", detail: "Verified testing responsibility or result." },
      { title: "Collaboration", detail: "Verified collaboration responsibility." }
    ],
    stack: [
      { category: "Backend", items: ["Verified technology"] }
    ],

    // Optional fields belong inside detail and are omitted when unavailable:
    publicLinks: [
      { label: "Visit Website", url: "https://confirmed.example/" }
    ],
    screenshots: [
      { src: "../assets/approved-image.png", alt: "Specific description", caption: "Optional factual caption" }
    ],
    architectureDiagrams: [
      { src: "../assets/approved-architecture.png", alt: "Accurate diagram description", caption: "Optional factual caption" }
    ],
    technicalDeepDive: [
      { title: "Specific technical case", detail: "New verified detail not repeated in Contributions." }
    ]
  }
}
```

Rules:

- `slug` is unique across both project arrays and matches `[a-z0-9]+(?:-[a-z0-9]+)*`.
- `detailPath` is exactly `./projects/{slug}.html` and the file must exist.
- Detail overview has 2–3 paragraphs; detail Contributions has 4–6 `{title, detail}` entries.
- `publicLinks` require confirmed HTTPS URLs. Private repository URLs are not allowed.
- `screenshots`, `architectureDiagrams`, `publicLinks`, and `technicalDeepDive` are optional non-empty arrays. `js/project-detail.js` supports all four. `scripts/validate_content.py` currently validates all except `architectureDiagrams`; when adding a diagram, extend the validator in the same task to require non-empty `src` and `alt`.
- The supported detail schema is limited to the fields above; do not introduce standalone `background`, `responsibilities`, `challenges`, or `externalLinks` fields.

### 5.3 Other Project

```js
{
  slug: "public-project",
  windowTitle: "public-project.repo",
  name: "Repository’s formal name",
  overview: "Verified 40–70 word summary.",
  highlights: [
    "First verified feature or technical point.",
    "Second verified feature or technical point."
  ],
  stack: ["Verified technology"],
  repositoryUrl: "https://github.com/ninni13/public-project"
}
```

Other Projects render only on the homepage and do not receive a detail-page shell.

### 5.4 Other content records

```js
// Experience: dates are allowed when verified.
{ role: String, organization: String, period: String, note: String }

// Education: location is required; detail is optional; dates are prohibited.
{ school: String, degree: String, location: String, detail?: String }

// Skills: renderer joins items with ` · `.
{ category: String, items: [String] }

// Contact: validator requires label, display, and an https:// or mailto: URL.
{ label: String, display: String, url: String }
```

Skill categories currently are Programming Languages, Backend & APIs, Frontend & Mobile, Databases, Cloud & DevOps, and Testing. Add technologies to the appropriate existing category unless a genuinely new category is required.

### 5.5 Thin detail-page shell

For each Featured Project, copy an existing `projects/*.html` shell and change only:

- `<title>` and meta description.
- `data-project-slug` on `<body>`.

Keep shared navigation, Footer, relative `../` asset paths, and version query parameters. Do not duplicate project prose in the shell.

## 6. Development Workflow

### General workflow

1. Read `AGENTS.md`, `README.md`, `data/content.js`, and the relevant renderer/style files.
2. Inspect `git status` and preserve unrelated or pre-existing work.
3. Confirm facts and links before publishing them.
4. Prefer a data-only change. Modify shared renderers/templates only when the current schema cannot express the request.
5. Increment version query parameters in every HTML consumer when shared CSS, data, or renderer behavior changes.
6. Run static validation and browser checks proportional to the change.
7. Report changed files, checks performed, and anything not verified.

### Common tasks

#### Add a Featured Project

1. Add one complete object to `PORTFOLIO_DATA.featuredProjects` in `data/content.js`.
2. Add `projects/{slug}.html` by copying a current thin shell.
3. Keep optional fields inside the object’s `detail` property.
4. Update the data version in `index.html` and all detail shells. Update shared renderer/style versions only if those files changed.
5. Run the validator and open the homepage plus the new detail URL.

#### Add an Other Project

1. Inspect and verify the public GitHub repository.
2. Add one object to `PORTFOLIO_DATA.otherProjects`.
3. Do not create a detail page.
4. Validate card order, repository URL, secure external-link attributes, and mobile layout.

#### Modify an existing project

1. Edit only its object in `data/content.js` when changing copy, role, contributions, stack, or confirmed links.
2. Preserve private/public link rules and required word/count ranges.
3. Increment the data version in every consuming HTML file.
4. Recheck both its homepage card and detail page when it is Featured.

#### Update Experience or Education

1. Edit `PORTFOLIO_DATA.experience` or `PORTFOLIO_DATA.education`.
2. Preserve requested ordering and verified Experience periods.
3. Keep Education free of years and months.
4. Validate desktop and mobile rendering.

#### Update Skills

1. Edit the relevant `PORTFOLIO_DATA.skills[].items` array.
2. Keep the text-row rendering; do not hardcode rows in `index.html`.
3. Confirm long technology lists wrap without overflow.

#### Change a shared detail-page layout

1. Update `js/project-detail.js` and/or `css/project-detail.css` once.
2. Do not copy layout markup or project content into the three shells.
3. Increment the affected shared resource version in every `projects/*.html` file.
4. Check all three detail pages at every required viewport.

## 7. Validation & Definition of Done

### Required static checks

```bash
python3 scripts/validate_content.py
node --check data/content.js
node --check js/navigation.js
node --check js/app.js
node --check js/project-detail.js
git diff --check
```

### Browser checks

Preview with direct `index.html` or:

```bash
python3 -m http.server 8000
```

Check 1440px, 1024px, 768px, and 375px:

- No horizontal overflow, overlap, clipped text, missing assets, or uncaught JavaScript errors.
- Fixed navigation, anchors, hamburger state, focus states, and Back to top work.
- Featured `View Details` opens the matching slug page; Other repository links open the verified GitHub URLs.
- All three detail pages share the same Header/Overview/Contributions/Tech Stack structure and responsive rules.
- Back to Projects returns to `../index.html#projects`.
- Optional sections are absent when their data is absent.
- Versioned CSS/JS/data and SVG/texture requests load successfully.
- GitHub Pages relative paths work from the User Site root `/`.

### Definition of Done

- [ ] Copy is English, accurate, readable, and supported by an approved source.
- [ ] Private repositories, confidential data, secrets, and unapproved visuals are absent.
- [ ] Structured data matches the schema and passes `validate_content.py`.
- [ ] Required project counts, word ranges, slugs, and paths are valid.
- [ ] Existing palette, typography, markers, macOS windows, and responsive hierarchy are preserved unless the task explicitly changes them.
- [ ] Homepage and detail pages remain keyboard accessible and readable without hover or animation.
- [ ] No overflow or layout collision occurs at 1440px, 1024px, 768px, or 375px.
- [ ] Featured and Other project links have the correct privacy behavior.
- [ ] Detail pages use the shared renderer and thin shells; optional sections render only with verified data.
- [ ] Education contains no dates, and excluded sections/institutions remain absent.
- [ ] Relative paths and version query parameters are correct for local preview and GitHub Pages.
- [ ] Static checks pass and browser errors/network failures are reported accurately.

## 8. Example AI Tasks

### Add a Featured Project

> Read `AGENTS.md` and add a Featured Project using the facts I provide. Update `data/content.js`, add a thin `projects/{slug}.html` shell, keep optional fields inside `detail`, preserve private-link rules, increment resource versions, run the validator, and test the homepage and detail page at all required widths.

### Add an Other Project

> Read `AGENTS.md`, inspect the supplied public repository under `github.com/ninni13`, and add it as an Other Project. Update only structured data unless a new shared component is required. Do not create a detail page. Validate the repository link, card order, and responsive layout.

### Update existing content

> Read `AGENTS.md` and update the specified project, Experience entry, Education entry, or Skill group in `data/content.js`. Preserve all unrelated content and privacy constraints, increment the data version, run static validation, and report the affected pages.

### Change the shared detail template

> Read `AGENTS.md` and update the shared Featured detail renderer/style once for all three projects. Keep project copy in `data/content.js`, preserve thin HTML shells and relative paths, update shared resource versions, and validate every detail page on desktop and mobile.
