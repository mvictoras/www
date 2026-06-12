# vmateevitsi.com

> Personal website of [Victor A. Mateevitsi](https://www.vmateevitsi.com) — Computer Scientist at Argonne National Laboratory, Adjunct Research Professor at UIC, General Chair of IEEE VIS 2027.

[![Hugo](https://img.shields.io/badge/Hugo-0.163.1+extended-FF4088?logo=hugo&logoColor=white)](https://gohugo.io/)
[![Node.js](https://img.shields.io/badge/Node.js-22.15+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Netlify](https://img.shields.io/netlify/f4ee6127-6b8e-4780-a7b5-d9d63d396e83)](https://app.netlify.com/sites/vmateevitsi/deploys)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A bespoke Hugo theme + content for an academic personal website. Designed to feel like a researcher's working notebook rather than a static CV.

🌐 **Live site**: [vmateevitsi.com](https://www.vmateevitsi.com)

---

## ✨ Features

### Content
- **Publications** with thumbnail-left layout, project/video/code link badges, and 91% image coverage (41 of 45 papers)
- **Press page** organized as year-grouped collapsible timeline (books + print + web in one chronological feed)
- **Updates** — a 415-entry life-and-work journal spanning 2007–present, with emoji-prefixed entries
- **VIS Deadlines** widget with hero countdown, multi-select topic filters, color-coded urgency, timezone toggle (viewer's local vs. original conference TZ)
- **News** posts with 5 color-coded categories (research/award/talk/personal/meta)
- **Research themes** page, **Talks**, **Videos**, **CV** with PDF download and at-a-glance stats

### Engineering
- ⚡ **Hugo 0.163+** static site generator (extended edition for image processing)
- 🎨 **Bootstrap 5.3** (selective import — only used components for smaller bundle)
- 🖼️ **Automatic WebP** generation with `<picture>` fallbacks; LQIP blur-up via [lazysizes](https://github.com/aFarkas/lazysizes)
- 📦 **esbuild** per-page JS bundles with SRI integrity hashes and fingerprinting
- 🧹 **PurgeCSS** in production to strip unused styles
- 🎭 **Dart Sass** + **PostCSS** + **Autoprefixer** modern CSS pipeline
- 🔍 **Rich JSON-LD structured data** (Person, WebSite, Article, BreadcrumbList) for Knowledge Graph
- 🌐 **Full Open Graph + Twitter Cards** with cascading description fallbacks and proper image dimensions
- 📱 **PWA manifest**, favicons, theme-color, viewport configured
- ✅ **Stylelint** + **ESLint** + **markdownlint** linting

### Pages
| Page | Purpose |
|---|---|
| `/` | Hero bio, latest news/press/updates cards, experience carousel, contact |
| `/about/` | Long-form bio, press bios (short/medium/long), get-in-touch |
| `/research/` | Five thematic research blocks |
| `/publications/` | Filterable list with thumbnails and DOI/Project/Video/Code links |
| `/news/` | Blog posts and announcements with category badges |
| `/talks/` | Invited talks chronology |
| `/press/` | Media coverage timeline (books, print, web) |
| `/cv/` | Slim landing page with PDF download + at-a-glance grid |
| `/updates/` | Personal life feed (415 entries, emoji-prefixed) |
| `/vis-deadlines/` | Live conference deadline tracker with countdown |
| `/videos/` | Talk recordings and demos |

---

## 🚀 Getting Started

### Requirements
- [Hugo](https://gohugo.io/) **≥ 0.163.1** (extended edition — `brew install hugo` on macOS)
- [Node.js](https://nodejs.org/) **≥ 22.15** (current LTS — also declared in `.nvmrc` and `package.json` engines). Hugo 0.163+ requires `node:module` `registerHooks` API (added in 22.15.0).
- [Dart Sass](https://sass-lang.com/install) (`brew install sass/sass/sass`)

### Install + run

```bash
git clone https://github.com/mvictoras/www.git
cd www
npm install
npm start
```

The dev server runs at <http://localhost:1313> with live reload.

### Commands

| Command | What it does |
|---|---|
| `npm start` | Dev server with `--disableFastRender` (so SCSS edits reflect immediately) |
| `npm run build` | Production build (`hugo --gc --minify`) — outputs to `public/` |
| `npm run build:preview` | Build with drafts + future content for staging |
| `npm test` | Lint SCSS + JS + Markdown |
| `npm run lint:styles` | Stylelint only |
| `npm run lint:scripts` | ESLint only |
| `npm run lint:markdown` | markdownlint-cli2 only |
| `npm run clean` | Remove `public/` + `resources/` |

---

## 📂 Content Architecture

Most editable content lives in YAML data files, not markdown.

```
content/
├── _index.md              # Homepage hero bio + experience carousel data
├── about/index.md         # About page (narrative + press bios + get-in-touch)
├── cv/index.md            # CV landing page
├── research/index.md      # Research themes
└── news/<slug>/index.md   # Individual news posts (with featured image)

data/                      # YAML — most updates happen here
├── publications.yaml      # 45 papers with image, DOI, project_url, video_url, etc.
├── press.yaml             # books / print / web sections — homepage card auto-pulls latest 'web'
├── updates.yaml           # 414 personal life entries (date + emoji-prefixed title)
├── talks.yaml             # Invited talks
├── conferences.yaml       # Conference families + year instances → /vis-deadlines/
├── awards.yaml            # CV awards section
├── students.yaml          # Students supervised (graduate/undergraduate/k12)
├── service.yaml           # Professional service entries
├── teaching.yaml          # Courses taught
├── experience.yaml        # Homepage experience carousel
├── education.yaml         # CV education section
├── events.yaml            # Upcoming events
├── videos.yaml            # Video page entries
├── social.yaml            # Social media links (single source of truth)
├── tilt.yaml              # "Things I Learned Today" sidebar widget
└── patents.yaml           # Patents list

themes/academic/
├── layouts/               # Hugo templates (shortcodes, partials, page types)
└── assets/
    ├── scss/              # Sass — Bootstrap selective imports + custom components
    └── js/                # ES modules bundled by esbuild
```

### Adding a publication
Edit `data/publications.yaml`, add to `journals:` or `conferences:` list. Drop the thumbnail in `assets/publications/<slug>.png`. Optional fields: `image:`, `project_url:`, `video_url:`, `code_url:`, `award:`.

### Adding a press piece
Edit `data/press.yaml`. New web entries go at top of `web:` (sorted DESC by `date:`). Image goes in `content/press/<file>.jpg` as a page resource.

### Adding an update
Edit `data/updates.yaml`. Entries are reverse-chronological. Title format: `:emoji_shortcode: Short description` or `🎉 Short description` (unicode emoji also fine).

### Adding a conference to /vis-deadlines/
Edit `data/conferences.yaml`. v2 schema is family-centric — add a new `instances:` entry under the family. Use IANA timezone names (`America/Chicago`, `Etc/GMT+12` for AoE). Tags must be from the canonical set: `vis | hpc | hci | vr-xr | graphics | ai-ml`.

---

## 🎨 Theme Notes

The theme (`themes/academic/`) was originally inspired by [hyas](https://github.com/h-enk/hyas) but has been substantially rewritten:

- Dark-mode-first with terminal-aesthetic accents (`#fc9d00` orange, JetBrains Mono)
- Custom shortcodes for `{{< a >}}`, `{{< figure >}}`, `{{< publications >}}`, `{{< deadlines >}}`, `{{< teaching >}}`, `{{< awards >}}`, etc.
- No jQuery, no Bootstrap JS bundle — components imported individually (`Collapse`, `Dropdown`)
- SCSS organized as `common/`, `components/`, `layouts/`, `vendor/`

---

## 🚢 Deployment

[Netlify](https://app.netlify.com/sites/vmateevitsi/deploys) builds from `main`. Configuration in [`netlify.toml`](netlify.toml).

```toml
[build.environment]
  NODE_VERSION = "22.22.3"
  HUGO_VERSION = "0.163.1"
```

Branch previews work out of the box (`-b $DEPLOY_PRIME_URL` is passed at build time).

---

## 📜 License

[MIT](LICENSE). Feel free to fork the theme or reference the data structures — credit appreciated but not required.

## 🙏 Acknowledgements

- Theme structure originally inspired by [Hugo starter (hyas)](https://github.com/h-enk/hyas)
- Add-to-Calendar JS originally from [add-to-calendar](https://github.com/jasonsalzman/add-to-calendar)
- Conference deadlines page concept inspired by [AI Deadlines](https://aideadlin.es/)
