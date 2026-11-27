# Alex Mwera — Portfolio

A single-page portfolio for an **AI & Data Engineer**, built with **React + Vite**, styled as a faithful recreation of the reference design: white background, red `#EF233C` accent, Montserrat typography, square buttons, red hero + red quote band, alternating timeline, and pricing-style highlight cards.

## Run it locally

```bash
npm install
npm run dev      # → http://localhost:5173
```

## Build for production

```bash
npm run build     # outputs static files to dist/
npm run preview   # optional: preview the production build
```

## Edit your content

**All site content lives in one file: [`src/data/profile.js`](src/data/profile.js)**

| Section on the site                       | Data export            |
| ----------------------------------------- | ---------------------- |
| Name, typed roles, tagline, social links  | `profile`              |
| About bio, skill progress bars, education | `about`                |
| "Career Highlights" number cards           | `networth`             |
| Accomplishments timeline cards             | `experience`           |
| Portfolio cards + filter categories        | `projects`             |
| Quote carousel on the red band             | `quotes`               |
| Blog/article cards (empty `[]` = hidden)   | `articles`             |
| Navigation menu                            | `navLinks`             |

Anything marked `[EDIT]` is placeholder text waiting for your real details.

### Your photo (already set up)
`public/profile-photo.jpg` is used everywhere — the hero box, the about card, and the quote avatar. To swap it, replace that file (or run `node scripts/optimize-photo.mjs <new-photo.jpg> public/profile-photo.jpg` to auto-resize for web). The full-resolution master lives in `assets-src/` (gitignored).

Optional `public/hero-bg.jpg` sits behind the red hero overlay.

### Add your CV
Drop `Alex-Mwera-CV.pdf` into `public/` and set `resumeUrl: '/Alex-Mwera-CV.pdf'` — a "Download CV" button appears in the hero.

## Deploy to Netlify (free, like the reference site)

**Option A — drag & drop (no account linking needed):**
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder onto the page — done, you get a live URL.

**Option B — connect Git (auto-deploys on every push):**
1. Push this folder to a GitHub repository
2. In Netlify: *Add new site → Import an existing project → GitHub*
3. Build command: `npm run build` · Publish directory: `dist`

## Tech stack

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- Plain CSS (no framework) — theme colors live in `:root` of `src/index.css`
- Google Fonts: Montserrat
- No other runtime dependencies
