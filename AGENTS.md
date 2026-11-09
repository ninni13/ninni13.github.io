# AGENTS.md — Chengni Yang Personal Website

> Read this file **before editing anything** in this repository. This is the project's ongoing development contract for AI coding assistants.

## 1. Mission and audience

Build and maintain an **English-only, public, job-search-ready personal website** for Chengni Yang, a software engineer. It should make it easy for recruiters to understand her work, roles, contributions, and technology choices. The site must be maintainable by AI without rethinking the design for every new project or role.

Project success means: someone can browse the site on desktop and mobile, open its real external links, read detailed portfolio highlights, and understand what the owner did. Future changes should only require editing structured content unless a new visual component is genuinely needed.

## 2. Non-negotiable content rules

- Display name: **Chengni Yang**. Public-facing content is **English only**.
- **Never display NTUNHS or an Interests section.** Education has **no dates**, but degree and appropriate academic achievements may appear.
- Hero primary button: **GitHub** (`https://github.com/ninni13`); secondary button: **LinkedIn** (`https://www.linkedin.com/in/cheng-ni-yang`). They are external links, not links to private projects.
- Hero GitHub and LinkedIn buttons use the approved brand SVG marks in `assets/`, with the icon before its text. Keep `target="_blank"` and `rel="noopener noreferrer"` on both links; do not replace them with project links.
- External-link affordances use the Lucide `external-link` inline SVG at 16px with a 2px stroke; never use Unicode arrows or emoji for them. Keep GitHub and LinkedIn brand marks as their leading icons. Render confirmed website or repository actions as understated text links, not filled pills.
- Featured Projects MomWeight, Cheap.Guide, and Grouplet are **private**. Never invent repositories, demos, downloadable assets, credentials, proprietary screenshots, or internal architectural details for them. The owner has explicitly approved the public MomWeight product website `https://momweight.com/`; this is a product website, not a repository or demo.
- Do not display a general privacy disclaimer below Featured Projects. Enforce private-link restrictions through the data and renderer instead.
- Other Projects are public technical implementations. Link only to a repository verified under `https://github.com/ninni13/` after reading its README, primary implementation files, and dependency/configuration files. The current entries are MoodJournal and **PaperMind — Research Paper RAG**.
- Use **Software Engineer** for Chengni's Mackay role in MomWeight and Experience. Do not label the Mackay role as Full-Stack Engineer or Full-Stack Developer.
- Featured Project descriptions must have: name, subtitle, role, category, homepage overview, **two or three concrete homepage contributions**, core technologies, and complete detail-page content using the shared structure below. Other Projects must have a verified repository, overview, highlights, and stack. Prefer facts grounded in the resume, repository, or separately confirmed by the owner. Do not embellish metrics or claim project screenshots exist.
- Do not use a `highlights.json` floating panel. The project showcase is named **Portfolio Highlights**.
- Never add the owner's portrait or a photo placeholder of the owner without explicit approval.
- Only use publishable personal contact details explicitly supplied by the owner. Do not include private addresses, phone numbers, secrets, tokens, or sensitive hospital/patient information.
- Homepage cards are text-only and do not render project screenshots or conceptual-art columns. Detail-page screenshots must be real, reviewed for confidential data, and explicitly cleared for public use; architecture diagrams must be accurate, publishable representations of the confirmed system. Never create conceptual art or AI-generated mock screens and label them as real product visuals.

## 3. Visual design system

- Direction: **bright Japanese-inspired freshness × restrained paper texture × macOS window UI**. Professional enough for recruiting; warm and personal rather than futuristic or cartoon-heavy.
- Base: warm white `#fbf8f6`; ink `#313037`; accents pastel pink `#f0bfc8`, pale pink `#f9e2e5`, sage `#dbe3d4`, soft yellow `#f9df9c`.
- Use pink instead of blue as the main decorative accent. Paper-edge/tape texture is a minor background accent, never a substitute for content.
- Hero background paper uses the reusable `assets/torn-paper-mask.svg` and `assets/paper-fibers.svg`: edges should have fine, uneven torn-paper variation and texture should remain low-contrast and organic. Do not recreate these decorations with low-point `clip-path: polygon()` shapes, regular dot grids, or large geometric zigzags. Keep the pink, cream-yellow, and sage pieces modest in scale, behind all content, and contained without horizontal overflow.
- Mac windows use a thin border, subtle shadow, a title bar and three traffic-light circles. Keep content windows **non-overlapping**; no important text may be hidden by another window at any viewport size.
- Hero uses one centered `chengni.yang` Mac window, no Current Focus/secondary information window, and no desk illustration or illustration backdrop. Keep the Hero window aligned to the same shared `.wrap` width as the other primary Mac windows. Its content uses the same horizontal inset as the adjacent primary reading windows: 48px desktop, 38px tablet, and 28px mobile; do not add a centered narrow wrapper that changes the text edges. Keep the name on one line where desktop space permits and allow natural wrapping on mobile. Use the title **Software Engineer** and 64–72px desktop name type at regular serif weight. Hero body copy is approximately 18px/1.65 and uses the full available content width on desktop; do not impose an arbitrary character-width maximum that leaves unused space. Keep one shared button row ordered GitHub → LinkedIn → Email. The Email button is data-driven from the confirmed `mailto:` entry and uses a simple inline mail SVG, not a brand mark or external-link icon.
- Use DM Sans for body and DM Serif Display (Georgia fallback) for display headings. Keep high contrast and legible sizes; the site should not resemble a colorful generative-AI template.
- Keep core reading sizes consistent: About copy 18px, project overview 18px, Project Role and Key Contributions labels 17px, Key Contributions copy 17px, Experience 17px, Education 16–17px, Skills 16px, Tech Stack tags 15px, project names 34–38px, and primary section headings 38–44px. Use at least 1.6 line-height for body copy and do not use page-level `transform: scale()` or `zoom` to increase size. Verify final values with browser computed styles at desktop and mobile widths.
- About Me uses one full-width reading column inside the window padding: the highlighted section heading followed directly by the data-driven paragraphs. Do not constrain the copy to a narrow character-based maximum, or restore a separate introductory quote or two-column heading/copy layout, unless the owner explicitly requests it.
- Portfolio homepage cards use a single text column with generous padding; do not restore the former left-side conceptual-art region unless the owner explicitly requests it. Allow technology lists to wrap and cards to grow with their content. Cards sharing a desktop grid row must stretch to the same natural row height without fixed pixel heights.
- Featured Projects use a two-column desktop grid: MomWeight appears on the left and Cheap.Guide on the right, followed by Grouplet. MomWeight and Cheap.Guide must stretch to equal height in their shared desktop row, with `View Details` aligned at the bottom; achieve this through grid/flex stretching rather than filler, fixed heights, or smaller text. Switch to one column below 901px, where every card returns to its natural content height. Each card uses the same structure: a shared title row containing the project name and plain-text role, subtitle, a 40–60 word overview, two or three contributions, three to five technologies, and View Details. Keep the unhighlighted role beside the project name whenever space permits, allow the title row to wrap safely on narrow screens, and never place the role in a permanently separate row or add a separate role label.
- Other Projects use a separate two-column grid and stack on mobile. Cards in the same desktop row stretch to the same natural row height, with Repository links aligned at the bottom; do not use fixed pixel heights. Each card contains the repository's formal name, a 40–70 word overview, two or three highlights, Tech Stack, and a secure GitHub repository link with the official GitHub mark.
- Project-group supporting copy should use the available horizontal space and remain on one line when it fits; do not constrain it with a narrow arbitrary maximum width. Allow natural wrapping only when the viewport genuinely lacks space.
- Featured detail pages use one wide macOS window and whitespace rather than cards or horizontal rules between content sections. Preserve the macOS title-bar border, window outline, and shadow, but do not draw separators between Header, Overview, Key Engineering Contributions, Tech Stack, Technical Deep Dive, or Project Visuals. Use approximately 48–64px of effective vertical separation on desktop and 32–40px on mobile. The header uses one wrapping flex row for the 56–64px serif Project Title and the plain 16–18px medium-weight sans-serif Role; keep the Role to the title's right when space permits and never apply a marker, italic style, or pill treatment. Keep the window-body top padding near 48–56px. Body copy is 17–18px with 1.6–1.75 line height. Overview paragraphs use the full available content width and must not retain an arbitrary `ch`-based maximum that leaves unused space; contribution items use two columns on desktop and one on mobile. Never add per-item rules beneath Contributions or Tech Stack groups. Every page includes one Back to Projects link above the shared project window and no duplicate bottom link.
- Portfolio order is fixed as Featured **MomWeight → Cheap.Guide → Grouplet**, then Other **MoodJournal → PaperMind**, unless the owner explicitly requests another order. Featured repositories remain private; Other repository links must be verified and public.
- Experience order is **MomWeight → Cheap.Guide → Grouplet → TibaMe**. Grouplet is a web platform, so its macOS title-bar label is `grouplet.web`, not `.app`.
- The single `skills.json` Mac window renders `PORTFOLIO_DATA.skills` as clean Category / Technologies rows: two text columns on desktop and stacked labels plus technology text on mobile. Do not add nested category cards, proficiency indicators, or skill pills.
- The lower Experience column and the Education / Skills column use an equal 50/50 desktop split. Below the existing tablet breakpoint they stack into one column.
- Homepage primary sections share one hierarchy outside their Mac windows: eyebrow plus large highlighted heading. Use `01 / GET TO KNOW ME` + `About Me`, `02 / WORK I'M PROUD OF` + `Portfolio Highlights`, and `03 / HOW I GOT HERE` + `The Story So Far`. All three headings use `.primary-section-heading` and the same `.marker-highlight--heading` size, weight, stroke, and spacing, aligned to the left edge of their windows. On mobile the text may wrap naturally, but the inline marker must wrap with the text rather than fill the container.
- Use the existing `.mac-window`, `.window-bar`, `.traffic`, `.window-name`, and `.marker-highlight` patterns instead of inventing new styles.
- Keep the primary top navigation fixed to the viewport at every breakpoint. Homepage and every Featured detail page use the same four options in the same order: About, Projects, Experience, Skills. Do not add Contact while no standalone Contact section exists. Detail-page links point to the matching `../index.html#...` anchors. Preserve the warm-white translucent backdrop, ensure page content is offset by the header height, and use the same accessible hamburger behavior on mobile rather than hiding navigation options.
- Keep explicit `index.html` in detail-page source links so local `file://` preview remains reliable. On HTTP(S), the homepage renderer uses `history.replaceState()` to normalize `/index.html#section` to `/#section` without a reload. Preserve the deployment subpath, query string, and hash; never hardcode the domain or root `/`.
- All existing pink text emphasis uses `.marker-highlight` with either `.marker-highlight--heading` or `.marker-highlight--label`. The shared linear-gradient stroke covers only the lower 30–40% of text, remains nearly horizontal, and uses `box-decoration-break: clone` for safe multiline wrapping. At the homepage section-heading level, apply the large marker only to the three primary headings; keep About Me out of its window and leave Featured Projects, Other Projects, Experience, Education, and Skills & Tools as unhighlighted secondary headings. Within Featured cards, apply the smaller label marker to Project Overview, Key Contributions, and Core Technologies; keep the Role beside the project name as plain, unhighlighted text. Do not apply markers to ordinary copy or technology names, and do not restore polygon strokes or full-height pink label backgrounds.
- Content hierarchy: single-window Hero with GitHub/LinkedIn and Email → About Me → Portfolio Highlights → Experience / Education / Skills → compact neutral footer. Do not restore the Current Focus window, desk illustration, large “Say Hello” section, or standalone Contact section unless explicitly requested.
- Homepage and Featured detail pages share the same neutral footer: warm-white background, one faint top border, `Chengni Yang.` on the left, and `© {current year} Chengni Yang` plus `Back to top` on the right. `Back to top` uses the same inline Lucide-style arrow-up SVG; never use a Unicode arrow. Do not place Email, GitHub, LinkedIn, cards, Mac windows, or a large pink background in the footer.

## 4. File organization

```text
chengni-yang/
├── AGENTS.md                # AI contributor rules
├── README.md                # Project overview, preview/deployment, update guide
├── index.html               # One-page semantic structure and anchor targets
├── .nojekyll                # GitHub Pages support
├── css/style.css            # Homepage design tokens, layouts, responsive rules
├── css/project-detail.css   # Shared Featured detail-page styles
├── js/app.js                # Homepage render functions, navigation behavior
├── js/project-detail.js     # Shared Featured detail-page renderer
├── data/content.js          # ALL editable profile, projects, skills, links
├── projects/                # Thin slug-specific detail-page shells
│   ├── momweight.html
│   ├── cheap-guide.html
│   └── grouplet.html
├── assets/
│   ├── github-mark.svg      # Official GitHub social-link mark
│   ├── linkedin-in.svg      # Official LinkedIn social-link mark
│   ├── paper-fibers.svg     # Low-contrast organic paper texture
│   ├── torn-paper-mask.svg  # Reusable natural torn-edge mask
│   └── favicon.svg
└── scripts/validate_content.py # Structured content validation
```

`data/content.js` exposes `window.PORTFOLIO_DATA = { ... };` so `index.html` also works when opened directly via `file://`. **Do not introduce `fetch()` for these data files**, or local double-click preview will fail. Make edits to its values with valid JSON-compatible types; preserve the wrapper assignment. Do not duplicate the same prose in `index.html` or `app.js`.

Keep version query parameters on shared CSS, data, and renderer files in `index.html` and every detail-page shell. Increment the relevant values whenever public content or renderer behavior changes so browsers do not keep showing stale roles, project details, or links.

## 5. Data conventions

### Project classification

- `featuredProjects` is for substantial product development or engineering experience that needs a dedicated detail page. Featured repositories remain private unless the owner explicitly confirms otherwise.
- `otherProjects` is for a public technical implementation whose verified GitHub repository is the primary destination. Other Projects do not receive a detail page.
- Array order controls homepage order. Keep the current Featured and Other order described in the visual rules.

### New Featured Project

Append one object to `PORTFOLIO_DATA.featuredProjects`:

```js
{
  "slug": "sample-project",
  "windowTitle": "sample.app",
  "name": "Sample Project",
  "subtitle": "Clear project category",
  "role": "My actual role",
  "category": "Domain · Platform",
  "detailPath": "./projects/sample-project.html",
  "home": {
    "overview": "A factual 40–60 word homepage summary.",
    "contributions": [
      "A concise, verified contribution.",
      "A second concise, verified contribution."
    ],
    "stack": ["Core technology", "Another technology", "Third technology"]
  },
  "detail": {
    "overview": [
      "A factual paragraph covering the project's background and purpose.",
      "A factual paragraph covering the product or system and the problem it solves.",
      "A factual paragraph covering the owner's role and scope."
    ],
    "contributions": [
      {"title": "Contribution area", "detail": "Concrete implementation or responsibility."},
      {"title": "Reliability", "detail": "A distinct verified contribution or engineering decision."},
      {"title": "Testing", "detail": "A third distinct verified contribution."},
      {"title": "Collaboration", "detail": "A fourth distinct verified contribution."}
    ],
    "stack": [
      {"category": "Backend", "items": ["Verified technology"]}
    ]
  }
}
```

Optional detail fields are added only when verified content exists; omit the key entirely when it does not:

```js
{
  "publicLinks": [{"label": "Visit Website", "url": "https://confirmed.example/"}],
  "screenshots": [{"src": "../assets/approved-image.png", "alt": "Specific image description", "caption": "Optional factual caption"}],
  "architectureDiagrams": [{"src": "../assets/approved-architecture.png", "alt": "Accurate system architecture description", "caption": "Optional factual caption"}],
  "technicalDeepDive": [{"title": "Specific technical case", "detail": "A concrete, verifiable case not repeated in Contributions."}]
}
```

Slug and filename rules:

- `slug` is unique lowercase kebab-case.
- `detailPath` is exactly `./projects/{slug}.html`.
- Copy an existing thin detail-page shell, change only its `<title>`, description, and `data-project-slug`, and keep all shared presentation in `js/project-detail.js` and `css/project-detail.css`.
- Adding the data object automatically updates the homepage. The HTML shell only selects the slug; never duplicate project copy in HTML.
- A Featured homepage card requires a 40–60 word overview, two or three contributions, and three to five core technologies. Align cards in the same desktop row with natural grid/flex stretching; do not use filler, fixed height, or smaller type.

Every Featured detail page uses this shared information architecture:

1. **Header:** Project Name, Subtitle, role value, Category, and confirmed public links when present. Public links appear beside the header content rather than in a separate External Links section.
2. **Overview:** two or three natural paragraphs that merge the project's background, purpose, system scope, and the owner's role. Do not repeat the same partner, context, feature, or responsibility across separate background/overview/responsibility sections.
3. **Key Engineering Contributions:** four to six distinct items. Each item has a short technical topic and a concrete implementation or outcome; do not restate one contribution under multiple headings.
4. **Tech Stack:** a borderless two-column desktop grid that becomes one column on mobile. Each group uses a bold category name above plain technology text separated with `·`, with approximately 28px row gap and 40px column gap. Allow long lists to wrap naturally; do not use per-row lines, cards, shadows, or technology pills.
5. **Optional Technical Deep Dive:** only for a concrete, verifiable technical case that adds information not already covered by Contributions.
6. **Optional Project Visuals:** real product screenshots or accurate system architecture diagrams only, with meaningful alt text and project-page-safe relative paths. Render this section only when confirmed, publishable visual data exists.
7. **Back to Projects:** one shared link above the project window, using the standard inline SVG arrow icon and returning to `../index.html#projects`; do not render a duplicate below the window.

Project Visuals are optional. Every screenshot must be a real product image that has been reviewed and explicitly cleared for public use; every architecture diagram must accurately represent the confirmed system and omit private implementation details. Never use AI-generated mock product screens as if they were real screenshots. When no approved visual exists, omit the data and hide the entire visual section without an empty-state message. Galleries and diagrams must remain responsive, preserve aspect ratio, include descriptive alt text, and collapse to a single readable column on mobile.

Do not restore standalone Project Background, My Responsibilities, Technical Challenges & Solutions, or External Links sections. Optional fields are conditional: omit them from data when unavailable, and render no heading or empty-state message. Add external links only when confirmed by the owner and never expose private repository URLs.

### New Other Project

Append one object to `PORTFOLIO_DATA.otherProjects`:

```js
{
  "slug": "public-project",
  "windowTitle": "public-project.repo",
  "name": "Repository's formal project name",
  "overview": "A verified 40–70 word summary.",
  "highlights": ["Two or three verified features or technical points."],
  "stack": ["Verified technology"],
  "repositoryUrl": "https://github.com/ninni13/public-project"
}
```

Before publishing an Other Project, find the public repository and read its README, primary implementation files, and dependency/deployment configuration. Use the repository's formal title and facts supported by that inspection. Adding the object automatically renders its homepage card. Do not create a detail-page shell for an Other Project.

### New experience

Append `{ "role": "...", "organization": "...", "period": "...", "note": "..." }` to `PORTFOLIO_DATA.experience` in the order the owner requests. Experience may show time periods. If a date is unverified, ask or omit it instead of inventing one.

### Education

Append `{ "school": "...", "degree": "...", "location": "...", "detail": "..." }` to `PORTFOLIO_DATA.education`. `location` is required and renders on its own line; `detail` is optional and is reserved for verified academic achievements such as distinction or GPA. **No graduation/admission years or months** anywhere in this category. Do not add excluded institutions.

### Skills

Append a category to `PORTFOLIO_DATA.skills` or add a string to `items` in an existing category. Categories are: Programming Languages, Backend & APIs, Frontend & Mobile, Databases, Cloud & DevOps, Testing. Group skills logically; no proficiency stars or unsupported claims. Use the existing Mac skills panel.

The renderer joins each category's `items` into the Technologies column. Future skill updates remain data-only; do not hardcode rows in `index.html` or reintroduce nested cards and capsules.

### About and links

`PORTFOLIO_DATA.about` is an array of paragraphs. `PORTFOLIO_DATA.contact` accepts `https://` and `mailto:` URLs only. The confirmed Email entry powers the third Hero button after LinkedIn; social links remain the fixed Hero buttons and are not rendered in the footer. External links must be confirmed and should open securely with `rel="noopener noreferrer"` where applicable.

## 6. Workflow when an AI assistant receives a change request

1. **Read** `AGENTS.md`, `README.md`, then `data/content.js` and relevant layout code. Identify the exact section to update.
2. **Plan** the smallest safe edit. Preserve existing layout, tone, colors, and all unrelated content.
3. **Update structured data first**. A Featured Project also needs one thin `projects/{slug}.html` shell; an Other Project does not. Add shared renderer/template code only when the request cannot be expressed with current structures.
4. **Do not fabricate** metrics, product capabilities, credentials, role titles, screenshots, public URLs, academic history, or project access permissions. Flag missing information clearly.
5. **Validate** with `python3 scripts/validate_content.py` and `node --check data/content.js && node --check js/app.js && node --check js/project-detail.js` when Node is available.
6. **Preview** by opening `index.html` or running `python3 -m http.server 8000`; check the homepage and every Featured detail page at 1440px, 1024px, 768px, and 375px. Verify overlap, overflow, Projects anchor navigation, Back to Projects, internal detail links, public repositories, and confirmed external links.
7. **Report** changed files, new entries, tests performed, and anything requiring owner confirmation.

## 7. Definition of done

- [ ] English copy is accurate, readable and grounded in approved source material.
- [ ] Existing palette / fonts / Mac-window component conventions are preserved.
- [ ] No overlap, horizontal overflow, missing assets or broken anchor targets at 375px, 768px, 1024px and 1440px widths.
- [ ] Browser Network confirms the versioned stylesheet, torn-paper mask, paper texture, and social SVG icons return successfully; computed styles confirm the mask is applied and legacy polygon/dot backgrounds are inactive.
- [ ] Desktop and mobile screenshots are inspected for hero balance, organic paper edges, readable type, project order, simplified skills rows, and the compact footer.
- [ ] Important text remains visible even without animation or hover.
- [ ] Headings are semantic; links are keyboard accessible and focus states visible.
- [ ] New project lists role, overview, contributions and tech stack.
- [ ] Homepage order matches `featuredProjects` then `otherProjects`; Featured cards open the matching slug page and Other cards open verified GitHub repositories.
- [ ] Each Featured page uses the shared renderer and contains Header, Overview, four to six distinct Key Engineering Contributions, Tech Stack, and Back to Projects navigation.
- [ ] Optional public links, Project Visuals (approved screenshots or accurate architecture diagrams), and Technical Deep Dives render only when verified non-empty data exists; unavailable sections and empty-state messages stay hidden.
- [ ] Featured detail pages do not reintroduce standalone Project Background, My Responsibilities, Technical Challenges & Solutions, or External Links sections.
- [ ] Personal/healthcare/project data is safe to publish; private repositories are not linked.
- [ ] Asset, script, stylesheet, and navigation paths work under the GitHub Pages `/chengni-yang/` subpath; detail pages use `../` relative paths.
- [ ] Content validator and JavaScript checks pass; browser has no uncaught runtime errors.
- [ ] GitHub Pages works using relative asset paths and the `main` branch root.

## 8. Example reusable instruction

> Please read `AGENTS.md` and add a Featured Project using the facts I provide. Add its structured data and thin slug page, preserve the shared macOS detail template, keep private links absent, run the validator, and tell me which files changed.

This is the core of the assignment: a new AI session can repeat the same extension workflow with consistent outcomes, without an extended design conversation.
