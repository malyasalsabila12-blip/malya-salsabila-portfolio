# QA Automation Engineer Portfolio

An evidence-driven engineering portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Included Routes

- `/` — Overview portfolio (midnight hero, stats strip, tooling cloud, featured projects, experience timeline, and background)
- `/projects/[slug]` — Deep-dive case studies (Executive summary, Problem & constraints, Ownership, Quality engineering dimensions, Results, Lessons learned, Related projects)
- `/contact` — Interactive email composer + direct links

## How to Customize With Your CV & Projects

All content lives in three typed files under `src/data/`:

1. **`src/data/profile.ts`** — Update your `name`, `initials`, `email`, `location`, `githubUrl`, `linkedinUrl`, `stats`, `technologies`, `experience`, and `topResults`.
2. **`src/data/projects.ts`** — Edit or add your shipped projects (`kind: "shipped"`), internal systems (`kind: "engineering-case-study"`), and planned builds (`kind: "planned-build"`).
   - **Screenshots**: Drop `.webp` or `.png` images into `public/images/` and set `image: "/images/your-file.webp"` on any project. When omitted, each project renders an automatic technical pipeline diagram.
   - **Resume PDF**: Place your PDF inside `public/resume/` (e.g. `public/resume/your-name-qa.pdf`) and update `defaultResumePath` in `src/data/profile.ts`.

## Local Development & Deployment

```bash
npm run dev     # Start local server at http://localhost:3000
npm run build   # Production build & static verification
```

Push this folder to GitHub and import into [Vercel](https://vercel.com/new) for zero-config deployment.
