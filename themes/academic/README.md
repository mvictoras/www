# Hugo Academic Theme

A clean, modern Hugo theme for academic and professional personal websites.

## Features

- **Experience Carousel** — Splide-powered carousel on the homepage showcasing work experience
- **Conference Deadlines** — Countdown timers for paper submission deadlines with dayjs
- **Updates Timeline** — Personal/professional updates displayed by year
- **Press Coverage** — Organized display of books, print, and web press mentions
- **WebP Images** — Automatic WebP generation with `<picture>` element fallbacks
- **Selective Bootstrap** — Only imports used Bootstrap components (~70% smaller)
- **Dart Sass + PurgeCSS** — Modern CSS pipeline with unused style removal in production
- **esbuild Bundling** — Per-page JS bundles with SRI integrity and fingerprinting
- **PhotoSwipe 5** — Lightbox gallery for image content
- **Prism.js** — Syntax highlighting for code blocks
- **404 Page** — GSAP-powered glitch animation

## Requirements

- [Hugo](https://gohugo.io/) >= 0.131.0 (extended edition)
- [Dart Sass](https://sass-lang.com/install) (`brew install sass/sass/sass`)
- [Node.js](https://nodejs.org/) >= 18

## Quick Start

1. Clone with themes:

```bash
git clone --recurse-submodules https://github.com/mvictoras/www.git my-site
cd my-site
```

2. Install dependencies:

```bash
npm install
```

3. Copy example site content:

```bash
cp -r exampleSite/config/* config/
cp -r exampleSite/content/* content/
cp -r exampleSite/data/* data/
```

4. Start the dev server:

```bash
npm start
```

## Configuration

### Site Parameters (`config/_default/params.toml`)

| Parameter | Description |
|-----------|-------------|
| `title` | Site title shown in header |
| `titleAddition` | Tagline appended to title |
| `description` | SEO meta description |
| `twitterSite` | Twitter handle for cards |
| `schemaType` | JSON-LD type (`Person`, `Organization`) |
| `schemaName` | Name for structured data |
| `footer` | Footer HTML content |
| `email_domain` | Domain for the email shortcode |
| `custom_css` | Array of additional CSS files |

### Data Files (`data/`)

| File | Purpose | Required |
|------|---------|----------|
| `social.yaml` | Social media links (header + sidebar) | Yes |
| `experience.yaml` | Homepage experience carousel items | Yes |
| `updates.yaml` | Personal updates timeline | No |
| `conferences.yaml` | Conference deadlines with countdowns | No |
| `press.yaml` | Press coverage (books/print/web) | No |
| `videos.yaml` | Video embeds (YouTube/SoundCloud) | No |
| `events.yaml` | Upcoming events sidebar | No |
| `tilt.yaml` | "Things I Learned Today" links | No |

See `exampleSite/data/` for example files with the expected YAML structure.

### Content Types

**News posts** — Page bundles in `content/news/`:
```
content/news/my-post/
  index.md          # Post content
  featured.jpg      # Featured image (referenced in front matter)
```

Front matter:
```yaml
title: "Post Title"
date: 2024-01-15T12:00:00-06:00
images: ["featured.jpg"]
image_credits: "Photo credit"
draft: false
```

**Homepage** — `content/_index.md` with front matter for hero section:
```yaml
skills: [Skill1, Skill2, Skill3]    # Glitch text display
hero_image: |                        # Hero section HTML
  <div>...</div>
about_image: "images/bg.jpg"         # About section background
contact_image: "images/bg2.jpg"      # Contact section background
contact: |                           # Contact section HTML
  <p>...</p>
```

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Dev server with live reload |
| `npm run build` | Production build (minified, PurgeCSS) |
| `npm test` | Lint SCSS, JS, and Markdown |
| `npm run lint:styles` | Check SCSS for errors |
| `npm run lint:scripts` | Check JS for errors |
| `npm run clean` | Remove generated files |

## License

MIT
