# AGENTS.md — Chengni Yang Personal Website

> Read this file **before editing anything** in this repository. This is the project's ongoing development contract for AI coding assistants.

## 1. Mission and audience

Build and maintain an **English-only, public, job-search-ready personal website** for Chengni Yang, a full-stack developer. It should make it easy for recruiters to understand her work, roles, contributions, and technology choices. The site must be maintainable by AI without rethinking the design for every new project or role.

Project success means: someone can browse the site on desktop and mobile, open its real external links, read detailed portfolio highlights, and understand what the owner did. Future changes should only require editing structured content unless a new visual component is genuinely needed.

## 2. Non-negotiable content rules

- Display name: **Chengni Yang**. Public-facing content is **English only**.
- **Never display NTUNHS or an Interests section.** Education has **no dates**, but degree and appropriate academic achievements may appear.
- Hero primary button: **GitHub** (`https://github.com/ninni13`); secondary button: **LinkedIn** (`https://www.linkedin.com/in/cheng-ni-yang`). They are external links, not links to private projects.
- Projects MomWeight, Grouplet, Cheap.Guide are **private**. Never invent public repositories, demos, live URLs, downloadable assets, credentials, proprietary screenshots, or internal architectural details.
- All project descriptions must have: name, role, summary, **at least two concrete Key Contributions**, and Tech Stack. Prefer facts grounded in the resume or separately confirmed by the owner. Do not embellish metrics or claim project screenshots exist.
- Do not use a `highlights.json` floating panel. The project showcase is named **Portfolio Highlights**.
- Never add the owner's portrait or a photo placeholder of the owner without explicit approval.
- Only use publishable personal contact details explicitly supplied by the owner. Do not include private addresses, phone numbers, secrets, tokens, or sensitive hospital/patient information.
- Decorative project art is **conceptual**; do not label it as screenshots. If real screenshots are supplied and cleared for public use, use them only with the owner's approval.

## 3. Visual design system

- Direction: **bright Japanese-inspired freshness × restrained paper texture × macOS window UI**. Professional enough for recruiting; warm and personal rather than futuristic or cartoon-heavy.
- Base: warm white `#fbf8f6`; ink `#313037`; accents pastel pink `#f0bfc8`, pale pink `#f9e2e5`, sage `#dbe3d4`, soft yellow `#f9df9c`.
- Use pink instead of blue as the main decorative accent. Paper-edge/tape texture is a minor background accent, never a substitute for content.
- Mac windows use a thin border, subtle shadow, a title bar and three traffic-light circles. Keep content windows **non-overlapping**; no important text may be hidden by another window at any viewport size.
- Use DM Sans for body and DM Serif Display (Georgia fallback) for display headings. Keep high contrast and legible sizes; the site should not resemble a colorful generative-AI template.
- Use the existing `.mac-window`, `.window-bar`, `.traffic`, `.window-name`, `.highlight-heading` patterns instead of inventing new styles.
- Content hierarchy: Hero with GitHub/LinkedIn → About Me → Portfolio Highlights → Experience / Education / Skills → Contact.

## 4. File organization

```text
chengni-yang/
├── AGENTS.md                # AI contributor rules
├── README.md                # Project overview, preview/deployment, update guide
├── index.html               # One-page semantic structure and anchor targets
├── .nojekyll                # GitHub Pages support
├── css/style.css            # Design tokens, layouts, responsive rules
├── js/app.js                # Reusable render functions, navigation behavior
├── data/content.js          # ALL editable profile, projects, skills, links
├── assets/
│   ├── desk-doodle.svg      # Original decorative illustration
│   └── favicon.svg
└── scripts/validate_content.py # Structured content validation
```

`data/content.js` exposes `window.PORTFOLIO_DATA = { ... };` so `index.html` also works when opened directly via `file://`. **Do not introduce `fetch()` for these data files**, or local double-click preview will fail. Make edits to its values with valid JSON-compatible types; preserve the wrapper assignment. Do not duplicate the same prose in `index.html` or `app.js`.

## 5. Data conventions

### New project

Append one object to `PORTFOLIO_DATA.projects`:

```js
{
  "slug": "sample-project",               // unique lowercase kebab-case
  "windowTitle": "sample.app",            // title bar label
  "name": "Sample Project",
  "subtitle": "Clear project category",
  "role": "My actual role",
  "category": "Domain · Platform",
  "summary": "One or two factual sentences about the problem and product.",
  "contributions": [
    "A concrete implementation or responsibility.",
    "A verified result or engineering decision."
  ],
  "stack": ["Verified technology", "Another verified technology"],
  "art": "momweight"
}
```

The `art` field selects one of the existing *decorative* conceptual-art templates: `momweight`, `grouplet`, `cheap-guide`. A genuinely different project visual requires adding an explicit case in `js/app.js` and CSS in `css/style.css`; do not silently reuse an inappropriate conceptual image. Do **not** add `repoUrl` or `demoUrl` for private projects. All user-supplied factual data should be verified before publishing.

### New experience

Append `{ "role": "...", "organization": "...", "period": "...", "note": "..." }` to `PORTFOLIO_DATA.experience` in the order the owner requests. Experience may show time periods. If a date is unverified, ask or omit it instead of inventing one.

### Education

Append `{ "school": "...", "degree": "...", "detail": "..." }` to `PORTFOLIO_DATA.education`. **No graduation/admission years or months** anywhere in this category. Do not add excluded institutions.

### Skills

Append a category to `PORTFOLIO_DATA.skills` or add a string to `items` in an existing category. Categories are: Programming Languages, Backend & APIs, Frontend & Mobile, Databases, Cloud & DevOps, Testing. Group skills logically; no proficiency stars or unsupported claims. Use the existing Mac skills panel.

### About and links

`PORTFOLIO_DATA.about` is an array of paragraphs. `PORTFOLIO_DATA.currently` contains factual current roles. `PORTFOLIO_DATA.contact` accepts `https://` and `mailto:` URLs only. External links must be confirmed and should open securely with `rel="noopener noreferrer"` where applicable.

## 6. Workflow when an AI assistant receives a change request

1. **Read** `AGENTS.md`, `README.md`, then `data/content.js` and relevant layout code. Identify the exact section to update.
2. **Plan** the smallest safe edit. Preserve existing layout, tone, colors, and all unrelated content.
3. **Update structured data first**. Add renderer/template code only when the requested change cannot be expressed with current structures.
4. **Do not fabricate** metrics, product capabilities, credentials, role titles, screenshots, public URLs, academic history, or project access permissions. Flag missing information clearly.
5. **Validate** with `python3 scripts/validate_content.py` and `node --check data/content.js && node --check js/app.js` when Node is available.
6. **Preview** by opening `index.html` or running `python3 -m http.server 8000`; check desktop and mobile viewport, overlap, overflow, anchor navigation, and external links.
7. **Report** changed files, new entries, tests performed, and anything requiring owner confirmation.

## 7. Definition of done

- [ ] English copy is accurate, readable and grounded in approved source material.
- [ ] Existing palette / fonts / Mac-window component conventions are preserved.
- [ ] No overlap, horizontal overflow, missing assets or broken anchor targets at 375px, 768px and 1280px widths.
- [ ] Important text remains visible even without animation or hover.
- [ ] Headings are semantic; links are keyboard accessible and focus states visible.
- [ ] New project lists role, overview, contributions and tech stack.
- [ ] Personal/healthcare/project data is safe to publish; private repositories are not linked.
- [ ] Content validator and JavaScript checks pass; browser has no uncaught runtime errors.
- [ ] GitHub Pages works using relative asset paths and the `main` branch root.

## 8. Example reusable instruction

> Please read `AGENTS.md` and add a fourth portfolio project using the facts I provide. Edit `data/content.js`, preserve the current Mac-window visual design, keep private project links absent, run the validator, and tell me which files changed.

This is the core of the assignment: a new AI session can repeat the same extension workflow with consistent outcomes, without an extended design conversation.
