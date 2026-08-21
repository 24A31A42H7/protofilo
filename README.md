# Mahesh — Developer Portfolio

A dark, modern, animated developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Where to edit content

Everything content-related lives in `src/data/`, so you can update the site without touching any component code:

- `src/data/config.js` — your name, role, tagline, email, resume link, and social links
- `src/data/skills.js` — skill categories and items
- `src/data/projects.js` — project cards (add a new object to the array to add a project)
- `src/data/timeline.js` — the experience/education timeline
- `src/data/achievements.js` — achievement cards

## Swap in your photo

1. Drop your photo into `src/assets/` (e.g. `src/assets/profile.jpg`).
2. In `src/data/config.js`, change:
   ```js
   photo: "/profile-placeholder.svg",
   ```
   to
   ```js
   import profilePhoto from "../assets/profile.jpg";
   // ...
   photo: profilePhoto,
   ```
   (Vite needs the image imported, not just referenced by string path, when it lives in `src/`.)

Until you do that, an illustrated placeholder avatar is shown in the About section — swap it whenever you're ready.

## Add your resume

Put your resume PDF in `public/resume.pdf` (or any filename), then update `resumeUrl` in `src/data/config.js` to match.

## Deploying

This is a standard Vite app — it deploys as-is to Vercel, Netlify, GitHub Pages, or Cloudflare Pages. Build command: `npm run build`, output directory: `dist`.

## Structure

```
src/
  components/   UI sections (Navbar, Hero, About, Skills, Projects, ...)
  data/         Editable content (projects, skills, achievements, timeline, config)
  pages/        Home.jsx assembles all sections
  assets/       Put your photo/images here
```
