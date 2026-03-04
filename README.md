# Sandy Portfolio (Astro)

Personal portfolio site for **Sandesh Patel**, built with Astro and Tailwind CSS.

Live site: [sandeshpatel06.github.io/SandyPortfolio](https://sandeshpatel06.github.io/SandyPortfolio/)

## Tech Stack

- Astro 5
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Typed.js (hero text animation)
- GitHub Actions (deploy to GitHub Pages)

## Current Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml                 # Build + deploy workflow for GitHub Pages
├── public/
│   ├── favicon.svg
│   ├── script.js                      # Scroll-to-top + certificate modal behavior
│   └── img/                           # Portfolio images/certificates/logos
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── GitHubContributions.astro  # Present in repo, not used on index page
│   │   ├── GitHubRepos.astro          # Present in repo, not used on index page
│   │   ├── Hero.astro
│   │   ├── Icon.astro
│   │   ├── Projects.astro
│   │   ├── Services.astro
│   │   ├── Skills.astro
│   │   └── Timeline.astro
│   ├── layouts/
│   │   └── Layout.astro               # Global layout, SEO/meta, nav/footer, theme + typed init
│   ├── pages/
│   │   └── index.astro                # Composes all visible home sections
│   └── styles/
│       └── global.css                 # Tailwind import + theme variables + shared styles
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## How This Project Works

### 1. Page Composition

`src/pages/index.astro` imports section components and renders them inside `Layout.astro`:

- Hero
- Services
- About
- Education
- Skills
- Experience
- Projects
- Timeline

This keeps each section independent and easy to edit.

### 2. Layout and Global UI

`src/layouts/Layout.astro` provides:

- Shared `<head>` metadata (SEO, Open Graph, structured data)
- Header/navigation and footer
- Theme toggle (dark/light with `localStorage` persistence)
- Typed.js initialization for hero text
- Mobile menu toggle logic

### 3. Styling

`src/styles/global.css`:

- Imports Tailwind (`@import "tailwindcss"`)
- Defines CSS variables for dark/light themes
- Adds shared utility styles (skip link, scroll-to-top button, etc.)

### 4. Client-Side Script

`public/script.js` handles:

- Scroll behavior and sticky nav class handling
- Floating scroll-to-top button
- Timeline certificate modal open/close behavior (`showImage`, `showImag`, `closeImage`)

### 5. Build and Deployment

- `npm run build` generates static output in `dist/`
- `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages
- Workflow now runs `npm install` before build to ensure dependencies (including CSS build tooling) are installed

## Local Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Deployment Workflow Summary

GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on push to `main` and `new-dev`:

1. Checkout code
2. Setup Node.js 20
3. Run `npm install`
4. Run `npm run build`
5. Upload `dist/`
6. Deploy to GitHub Pages

## License

MIT (`license.txt`)
