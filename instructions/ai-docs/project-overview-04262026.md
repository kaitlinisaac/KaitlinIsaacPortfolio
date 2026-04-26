# Project Overview — Kaitlin Isaac Site
*Last updated: April 26, 2026*

This document is a reference for AI assistants working on this codebase. It covers how the site is built, how content is structured, what the instructions folder contains, and a few things to watch out for.

---

## What This Site Is

A personal portfolio website for **Kaitlin Isaac** — a flutist, music educator, and UX designer. The site serves two audiences:
1. Hiring managers / schools looking at her **teaching portfolio** (lessons, videos, philosophy)
2. Anyone curious about her **design and tech work** (projects, blog)

Live at: `https://kaitlinisaac.com`

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Astro | 4.16.13 | Static site framework |
| Tailwind CSS | 3.4.15 | Styling |
| @astrojs/tailwind | 5.1.2 | Astro/Tailwind integration |
| @tailwindcss/typography | 0.5.x | Prose styling for Markdown content |
| date-fns | 4.x | Date formatting in blog |
| Node | 23.x | Runtime |

No JavaScript framework (no React, Vue, or Svelte). Everything is plain `.astro` components.

**Dev commands:**
```bash
npm run dev      # Start dev server → http://localhost:4321
npm run build    # Build for production → /dist
npm run preview  # Preview production build locally
```

---

## Project Structure

```
KaitlinIsaacSite/
├── src/
│   ├── components/       # Reusable UI components
│   ├── content/          # Content collections (blog, lessons, videos, projects)
│   ├── layouts/          # Page wrapper templates
│   ├── pages/            # File-based routes
│   └── styles/global.css # Global CSS
├── public/               # Static assets (images, fonts)
│   ├── fonts/
│   └── images/
│       ├── lessons/thumbnails/
│       └── videos/
│           ├── student-concerts/
│           └── flute-performances/
├── instructions/         # Human + AI process docs
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Pages / Routes

| URL | File | Description |
|-----|------|-------------|
| `/` | `src/pages/index.astro` | Homepage — hero illustration, about me, quick links |
| `/music-education` | `src/pages/music-education/index.astro` | Teaching portfolio hub — features 2 lessons + 2 videos |
| `/music-education/lessons` | `src/pages/music-education/lessons.astro` | All lessons (split: main lessons vs. tools) |
| `/music-education/lessons/[category]/[id]` | `src/pages/music-education/lessons/[category]/[id].astro` | Individual lesson page |
| `/music-education/videos` | `src/pages/music-education/videos.astro` | All videos, grouped by category |
| `/music-education/videos/[category]/[id]` | `src/pages/music-education/videos/[category]/[id].astro` | Individual video page |
| `/design` | `src/pages/design.astro` | UX/design portfolio |
| `/private-lessons` | `src/pages/private-lessons.astro` | Private flute lessons info |
| `/blog` | `src/pages/blog/index.astro` | Blog index (labeled "Writing" in nav) |
| `/blog/[...slug]` | `src/pages/blog/[...slug].astro` | Individual blog post |
| `/blog/category/[category]` | `src/pages/blog/category/[category].astro` | Posts filtered by category |
| `/projects` | `src/pages/projects/index.astro` | Projects list |
| `/contact` | `src/pages/contact.astro` | Contact page |
| `/artifacts` | `src/pages/artifacts/index.astro` | Creative artifacts |

---

## Content Collections

All content lives in `src/content/` and is defined in `src/content/config.ts`. Astro's content collections give each type a validated schema.

### `blog`
Posts stored in `src/content/blog/` as `.md` files.

| Field | Required | Type |
|-------|----------|------|
| title | yes | string |
| publishDate | yes | date |
| category | yes | string |
| description | no | string |
| tags | no | string[] |
| draft | no | boolean |

### `lessons`
Lesson plans in `src/content/lessons/`. The optional `type` field separates main lessons from tools — if `type: "tool"` the item appears in the "Tools and Additional Materials" section, not the main "Lessons" section.

| Field | Required | Notes |
|-------|----------|-------|
| title | yes | |
| description | yes | |
| category | yes | Used in URL: `/music-education/lessons/[category]/[id]` |
| thumbnail | no | Path from `/public/`, e.g. `/images/lessons/thumbnails/name.jpeg` |
| tags | no | string[] |
| embedUrl | no | Full `<iframe>` HTML (Google Slides or YouTube) |
| downloadUrl | no | Link to downloadable resource |
| imageUrl | no | Used only if no embedUrl |
| type | no | Set to `"tool"` to route to the Tools section |
| draft | no | boolean |

### `videos`
Video pages in `src/content/videos/`. The `category` field drives the URL and determines which group the video appears in on the videos listing page.

| Field | Required | Notes |
|-------|----------|-------|
| title | yes | |
| description | yes | |
| category | yes | e.g. `student-concerts`, `flute-performances`, `classroom-videos` |
| embedUrl | no | Full `<iframe>` HTML from YouTube |
| thumbnail | no | Path from `/public/` |
| tags | no | string[] |
| draft | no | boolean |

### `projects`
Project entries in `src/content/projects/`. Featured projects sort to the top.

| Field | Required | Notes |
|-------|----------|-------|
| title | yes | |
| description | yes | |
| tags | yes | string[] |
| image | no | |
| link | no | |
| featured | no | boolean — featured items sort first |

### `artifacts`
In `src/content/artifacts/`. Requires `title`, `type` (one of: `image`, `audio`, `video`, `link`), and `content`.

---

## Components

| Component | Purpose |
|-----------|---------|
| `Layout.astro` | Base HTML shell — loads fonts, sets OG meta tags, dark mode init script, wraps everything in `<body>` with Footer |
| `Header.astro` | Sticky nav bar. Has a `showHamburgerMenu` prop — the homepage passes `false` to hide it on desktop (no ToC needed there) |
| `Footer.astro` | Site footer |
| `BlogLayout.astro` | Wrapper for blog post pages |
| `Section.astro` | Reusable section block with an optional `backgroundColor` prop (`"accent"`, `"primary"`, `"secondary"`, `"iconColor"`) |
| `Heading.astro` | Semantic heading (`level` prop: 1–6) with consistent typography |
| `PillButton.astro` | Pill-shaped CTA button/link. Has a `backgroundColor` prop |
| `ArrowLink.astro` | Link with an arrow — used for "back" navigation and inline links |
| `Card.astro` | Generic card |
| `BlogPost.astro` | Blog post list item (title, date, description, category) |
| `Tag.astro` | Colored tag badge — `colorIndex` prop cycles through colors |
| `ThemeToggle.astro` | Light/dark mode toggle button |
| `TableOfContents.astro` | Auto-generated ToC that lives in the header sidebar. Has an `enabled` prop |
| `EmailCTA.astro` | Email call-to-action block |

---

## Design System

Defined in `tailwind.config.mjs`.

**Colors:**
- `primary` — #754689 (purple) — headings, links, buttons
- `accent` — #F7DC6F (yellow) — section backgrounds, highlights
- `iconColor` — #DEC7E7 (light lavender) — icon circles, pill buttons
- `surface` — #FFFFFF light / #2D2A33 dark
- `content` — #56505F (body text)

Dark mode is enabled via Tailwind's `class` strategy. The `Layout.astro` script reads from `localStorage` and adds/removes the `dark` class on `<html>`. Default is light mode.

**Fonts:**
- Body / sans: `Glacial Indifference` (loaded from `public/fonts/glacial-indifference.css`)
- Headings / display: `Lovelace Text` (serif — set via `font-lovelace` Tailwind class)
- Handwritten accent: `Kaitlin-Regular` (used only on the homepage illustration credit)

**Typography scale** (custom Tailwind classes): `text-display`, `text-h1` through `text-h4`, `text-body`, `text-small`

**Spacing scale**: `xs` (8px) through `2xl` (64px)

---

## Image & Asset Conventions

All static assets live in `public/` and are referenced from root `/`:
- Lesson thumbnails: `public/images/lessons/thumbnails/name.jpeg` → `/images/lessons/thumbnails/name.jpeg`
- Video thumbnails: `public/images/videos/[category]/name.jpg` → `/images/videos/[category]/name.jpg`
- Fonts: `public/fonts/`
- Homepage illustration: `public/images/Homepage-illustration.svg`

Recommended thumbnail size: **1280×720px** (16:9), under 200KB. Use TinyPNG or Squoosh to compress.

---

## Deployment

- GitHub repo → auto-deploys to **Netlify** on push to `main`
- Working branch is `dev` — merge to `main` to publish
- Manual deploy: `npx netlify deploy --prod` (after `npm run build`)
- Rollback: use the Netlify dashboard → Deploys → "Publish deploy" on a previous version

---

## The `instructions/` Folder

This folder contains human-readable process docs. Here's a quick map:

| File | What it covers |
|------|---------------|
| `README.md` | Index / table of contents |
| `blog-posts.md` | How to add blog posts ⚠️ *partially outdated — see note below* |
| `projects.md` | How to add projects ⚠️ *partially outdated — see note below* |
| `adding-videos.md` | How to add video content pages — detailed and accurate |
| `adding-lessons.md` | How to add lesson content — detailed and accurate |
| `thumbnail-images.md` | Image specs, naming conventions, tools for compression |
| `design-changes.md` | How to make visual changes; how to work with AI on design |
| `updating-featured-content.md` | How to feature specific lessons/videos on the Music Education hub page |
| `deployment.md` | Dev → build → deploy workflow |
| `maintenance.md` | Quarterly/monthly maintenance checklist |
| `ai-docs/` | AI-specific reference documents (like this one) |

### ⚠️ Known Outdated Instructions

**`blog-posts.md`** says posts go in `src/pages/blog/` — this is **wrong**. Blog posts are now content collection entries in `src/content/blog/` as `.md` files using the schema in `config.ts`.

**`projects.md`** describes creating `.astro` files per project with a `ProjectLayout` — this is **wrong**. Projects are now content collection entries in `src/content/projects/` as `.md` files.

When adding either content type, ignore the template in those docs and follow the same pattern as existing files in their respective `src/content/` directories.

---

## Things to Watch For

1. **Port conflict**: Astro defaults to port 4321. If something is already running there (e.g., a forgotten dev server), it silently falls back to 4322. Use `lsof -i :4321` to check and `kill <PID>` to clear it.

2. **ID extraction pattern**: When working with content collection entries in `.astro` files, the entry's `.id` includes the collection path and file extension (e.g., `lessons/tier-list-listening-assignment.md`). The site extracts just the base slug with `entry.id.split('/').pop().split('.')[0]`. This is used for building URLs.

3. **`projects/index.astro` has a typo**: The page title reads `"Projects | Dylan Isaac"` — it should be `"Projects | Kaitlin Isaac"`.

4. **Lessons `type` field**: The `type` field on lessons is how you separate "Tools" from main lessons on the lessons page. Set `type: "tool"` in the frontmatter to route a lesson to the Tools section.

5. **Featured content on Music Education hub**: The two featured lessons and two featured videos shown on `/music-education` are hardcoded by slug in `src/pages/music-education/index.astro`. To change which items are featured, update those `getEntry` calls. See `instructions/updating-featured-content.md` for details.
