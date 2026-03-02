# Sandy's Portfolio — Astro + Tailwind CSS

Personal developer portfolio for **Sandesh Patel**, a frontend web developer and cybersecurity learner. Built with [Astro](https://astro.build) and styled entirely with [Tailwind CSS](https://tailwindcss.com).

🌐 **Live site:** [sandyportfolio-seven.vercel.app](https://sandyportfolio-seven.vercel.app)

---

## ✨ What's Inside

| Section | What it shows |
|---|---|
| **Hero** | Name, animated typed roles (Typed.js), Resume download & GitHub CTA |
| **Services** | Frontend services offered |
| **About** | Short bio and portrait |
| **Education** | Diploma details at Government Polytechnic College Narshingpur |
| **Skills** | Tech stack, tools, and soft skills |
| **Experience** | Current work and technical background |
| **Projects** | 4 hand-picked projects with screenshots and live links |
| **GitHub Repos** | Live-fetched from GitHub API — top 12 repos with real descriptions, language badges, star/fork counts |
| **Past Experience** | Timeline of certifications and internships with certificate viewer modal |

---

## 🛠 Tech Stack

| Tool | Role |
|---|---|
| [Astro 5](https://astro.build) | Static site framework — zero JS by default, island architecture |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling via `@tailwindcss/vite` Vite plugin |
| [Typed.js](https://github.com/mattboldt/typed.js/) | Animated text in the hero section |
| [GitHub REST API](https://docs.github.com/en/rest) | Fetches live repository data client-side |
| [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | Typography |

---

## 📁 File Structure

```
portfolio/
├── public/                        # Static assets served as-is
│   ├── img/                       # All images (project screenshots, certificates, portrait)
│   │   ├── bg.png                 # Hero illustration
│   │   ├── im.jpg                 # Portrait photo
│   │   ├── rps.png / BMI.png …   # Project screenshots
│   │   └── html.jpg / css.jpg …  # Certificate thumbnails
│   ├── script.js                  # Client-side JS: scroll-to-top, sticky nav, modal logic
│   └── SandeshPatel_Resume.pdf.pdf
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro           # ★ Base layout — <html>, <head>, sticky nav, footer, scripts
│   │
│   ├── components/                # ★ One file per page section
│   │   ├── Hero.astro             # Hero banner — name, Typed.js, CTA buttons
│   │   ├── Services.astro         # Services offered
│   │   ├── About.astro            # Bio + portrait
│   │   ├── Education.astro        # College & diploma info
│   │   ├── Skills.astro           # Technical & soft skills
│   │   ├── Experience.astro       # Work experience summary
│   │   ├── Projects.astro         # Hand-curated project cards (data array driven)
│   │   ├── GitHubRepos.astro      # Live GitHub API fetch + repo cards
│   │   └── Timeline.astro         # Certification & internship timeline + modal
│   │
│   ├── pages/
│   │   └── index.astro            # Entry point — imports Layout + all components
│   │
│   └── styles/
│       └── global.css             # @import "tailwindcss" + custom theme tokens
│
├── astro.config.mjs               # Astro config — registers @tailwindcss/vite plugin
├── package.json
└── tsconfig.json
```

---

## ⚙️ How It Works

### Build & Rendering
Astro renders every page to **static HTML** at build time. There is no server runtime — the output is a folder of plain `.html` files that can be hosted anywhere (GitHub Pages, Vercel, Netlify, etc.).

### Component Architecture
Each visible section of the page lives in its own `.astro` component file under `src/components/`. The `index.astro` page simply imports and composes them all, keeping it to ~20 lines:

```astro
// src/pages/index.astro
<Layout>
  <Hero />
  <Services />
  <About />
  ...
</Layout>
```

Adding or reordering a section means touching only `index.astro`. Editing a section's content means opening only that section's component.

### Styling with Tailwind CSS
`global.css` contains a single `@import "tailwindcss"` (Tailwind v4 syntax) plus an `@theme {}` block that declares the custom color palette as CSS variables. All markup in `.astro` files uses **Tailwind utility classes** directly — no separate CSS files per component.

### GitHub Repos Section
`GitHubRepos.astro` runs a `fetch()` call **in the browser** against the GitHub public REST API:

```
GET https://api.github.com/users/sandeshPatel06/repos?sort=updated&per_page=30
```

It then:
1. Filters out forks and archived repos
2. Sorts by star count descending, then by last push date
3. Takes the top 12
4. Looks up each repo by name in a hardcoded `repoDescriptions` map to surface a meaningful description (since most repos have no description on GitHub)
5. Renders a card with language color dot, star/fork/issue chips, and a Live Demo link when `homepage` is set

### `public/script.js`
Handles three behaviors at runtime:
- **Sticky nav shadow** on scroll
- **Scroll-to-top button** visibility
- **Certificate modal** open/close (`showImage()`, `showImag()`, `closeImage()`)

---

## 🚀 Local Development

```sh
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Production build → ./dist/
npm run build
```

---

## 📬 Contact

**Sandesh Patel** · [sandeshpatel.sp.93@gmail.com](mailto:sandeshpatel.sp.93@gmail.com)  
GitHub: [@sandeshPatel06](https://github.com/sandeshPatel06) · LinkedIn: [sandesh-patel07](https://www.linkedin.com/in/sandesh-patel07)

---

*Distributed under the MIT License — see `license.txt`.*
