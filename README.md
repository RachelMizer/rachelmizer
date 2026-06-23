# Rachel Mizer — Portfolio Site

Personal portfolio site for Rachel Mizer, Full-Stack Developer & UI/UX Designer based in Clayton, NC. Built to showcase projects, work history, and professional background for prospective employers and collaborators.

## Stack

- **React 19** with React Router v7 (client-side SPA)
- **Vite** for dev server and bundling
- **Plain CSS** — global stylesheets per page/component, no CSS modules or preprocessors
- **Google Fonts** — Source Sans 3
- **Local fonts** — Farmhouse (display), Gentle Hearts (serif headers)

## Pages

| Route | Description |
|---|---|
| `/` | Hero with profile photo, skills overview, and CTA |
| `/about` | Bio, Prospective Employer FAQ, and full résumé |
| `/portfolio` | Project tiles for Orderly, MakeAWay, and FlyWheel |
| `/contact` | Email and LinkedIn contact cards with availability badge |

## Project Structure

```
src/
├── assets/
│   ├── fonts/          # Farmhouse.ttf, GentleHearts-Regular.otf
│   └── img/            # Profile photos
├── components/
│   ├── Navbar.jsx/.css
│   └── Footer.jsx/.css
├── pages/
│   ├── Home.jsx/.css
│   ├── About.jsx/.css
│   ├── Portfolio.jsx/.css
│   └── Contact.jsx/.css
├── App.jsx             # Router setup
├── App.css             # Layout (sticky footer, page content)
├── index.css           # Design tokens, global resets, font-face
└── main.jsx
```

## Design Tokens

All colors, spacing, typography, and shadows are defined as CSS custom properties in `src/index.css`:

- `--color-accent` — terracotta (`#b36a64`)
- `--color-bg` — warm off-white (`#fdf7f5`)
- `--font-serif` — Gentle Hearts
- `--font-sans` — Source Sans 3

## Running Locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```
