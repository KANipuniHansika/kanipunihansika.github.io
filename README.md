# Hansi — React Portfolio

Nipuni Hansika's academic portfolio, rebuilt with React + Vite.

This is a direct React recreation of the original HTML/CSS portfolio.
The rose-and-plum colour theme, layout, accessibility features (skip link,
aria labels, semantic HTML), and responsive breakpoints are all preserved.

## Quick start

### 1. Install Node.js

If you don't have Node.js installed, download it from
https://nodejs.org/ (the LTS version is recommended).

### 2. Install dependencies

```bash
cd portfolio-react
npm install
```

### 3. Copy your existing assets

Your images, papers, and résumé from the original portfolio need to be
in the `public/` folder so Vite serves them at the right paths.

Run this PowerShell command from the `Portfolio_HTML` folder:

```powershell
# Copy images, papers, and files into the React project's public folder
New-Item -ItemType Directory -Path portfolio-react\public -Force
Copy-Item -Recurse images portfolio-react\public\images -Force
Copy-Item -Recurse papers portfolio-react\public\papers -Force
Copy-Item -Recurse files portfolio-react\public\files -Force
```

### 4. Start the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 5. Build for production

```bash
npm run build
```

This creates a `dist/` folder with static files you can deploy to
GitHub Pages, Netlify, Vercel, or any static host.

## Project structure

```
portfolio-react/
├── index.html              Vite entry HTML
├── package.json            Dependencies (React, React Router, Vite)
├── vite.config.js          Vite configuration
├── public/                 Static assets (images, papers, résumé)
│   ├── images/             ← copy from original portfolio
│   ├── papers/             ← copy from original portfolio
│   └── files/              ← copy from original portfolio
└── src/
    ├── main.jsx            React entry point (BrowserRouter)
    ├── App.jsx             Route table
    ├── styles/
    │   └── index.css       All CSS (consolidated from 6 files → 1)
    ├── data/               ← ALL CONTENT LIVES HERE
    │   ├── site.js         Name, email, social links, nav items
    │   ├── highlights.js   Homepage timeline entries
    │   ├── publications.js Conference papers
    │   ├── experience.js    Employment history
    │   ├── teaching.js      Teaching roles
    │   ├── education.js     Degrees and qualifications
    │   └── projects.js      Research projects + detail page content
    ├── components/         ← REUSABLE UI COMPONENTS
    │   ├── Layout.jsx      Header + main + footer wrapper
    │   ├── Header.jsx      Brand + navigation
    │   ├── Footer.jsx      Social links + copyright
    │   ├── SocialLinks.jsx  Email/GitHub/LinkedIn/Scholar icons
    │   ├── NavIcons.jsx     SVG icons for nav items
    │   ├── Seo.jsx          Per-page title + meta description
    │   ├── Tag.jsx          Pill-style tag
    │   ├── Figure.jsx       Image + caption (clickable to enlarge)
    │   ├── Gallery.jsx      Grid of Figure components
    │   ├── Disclosure.jsx   Collapsible <details> section
    │   ├── RichText.jsx     Renders paragraphs with inline formatting
    │   ├── InstitutionEntry.jsx  Experience/Education entry
    │   ├── PublicationRow.jsx     Publication entry
    │   ├── ProjectCard.jsx       Research overview card
    │   ├── FeaturedProject.jsx    Featured research card
    │   ├── BackLink.jsx           "← All research projects"
    │   └── BlockRenderer.jsx      Renders research detail page blocks
    ├── pages/              ← PAGE COMPONENTS
    │   ├── Home.jsx
    │   ├── Research.jsx         Overview page
    │   ├── ResearchDetail.jsx   /research/:slug (dynamic)
    │   ├── Publications.jsx
    │   ├── Experience.jsx
    │   ├── Teaching.jsx
    │   ├── Education.jsx
    │   ├── Contact.jsx
    │   └── NotFound.jsx
    └── hooks/
        └── useScrollToTop.js  Scrolls to top on route change
```

## How to update content

Everything you need to edit is in `src/data/`:

| To change...              | Edit this file              |
| ------------------------- | --------------------------- |
| Your name, email, socials | `data/site.js`              |
| Homepage highlights      | `data/highlights.js`        |
| Publications             | `data/publications.js`      |
| Experience / jobs         | `data/experience.js`        |
| Teaching roles           | `data/teaching.js`          |
| Education / degrees      | `data/education.js`        |
| Research projects        | `data/projects.js`          |
| Colours / theme           | `styles/index.css` (`:root`)|
| Navigation items          | `data/site.js` (`navItems`) |

Each data file has comments explaining the shape of each entry and how
to add new ones.

## How to add a new page

1. Create a page component in `src/pages/` (copy an existing one).
2. Add a `<Route>` in `src/App.jsx`.
3. Add a nav entry in `data/site.js` → `navItems`.
4. Add an icon in `src/components/NavIcons.jsx`.

## How to add a new research project

1. Add a project object to `data/projects.js` (copy an existing one).
2. Place project images in `public/images/research/<slug>/`.
3. Add any PDF to `public/papers/`.
4. The route `/research/<slug>` works automatically.

## Deployment

### GitHub Pages

```bash
npm run build
# Push the contents of dist/ to your gh-pages branch or
# use a GitHub Action to deploy automatically.
```

For client-side routing to work on GitHub Pages, you may need to
add a `404.html` that redirects to `index.html`, or configure the
host to serve `index.html` for all routes.

### Netlify / Vercel

Both platforms handle SPA routing automatically. Just deploy the
`dist/` folder.
