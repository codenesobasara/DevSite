# CLAUDE.md

Guidance for Claude sessions working in this repo.

## What this is

**Pontera Studios** — marketing/portfolio site for a boutique software & web
development studio (Waterloo Region, Ontario), plus a .NET backend that powers an
embedded AI lead-qualification chatbot and the contact form.

Live site: https://www.ponterastudios.com · API: https://api.ponterastudios.com

> Pontera Studios was formerly branded "DevCo". Some older docs/comments may still
> say DevCo or "slate-site" (the package name) — that's the same project.

## Repo layout — read this first

There are **two frontend apps** in this repo. Only one is live:

- **`next-app/`** — ⭐ THE LIVE FRONTEND. Next.js 15 (App Router, SSG). Do all
  frontend work here.
- **`backend/`** — .NET (ASP.NET Core minimal API) backend. The chatbot + contact API.
- `src/`, `index.html`, `vite.config.js`, root `package.json`, `vercel.json`,
  `eslint.config.js`, `components.json`, `jsconfig.json`, `public/`, `dist/` —
  ⚠️ **DEAD pre-migration Vite/React-Router app.** Do NOT edit these expecting them
  to affect the live site. (Slated for removal.)
- `seo-report-*.html` — standalone client SEO report artifacts, unrelated to either app.

## Frontend (`next-app/`)

- **Stack:** Next.js 15 App Router · React 19 · Tailwind v4 (`@tailwindcss/postcss`) ·
  Framer Motion · Radix UI · CVA + clsx + tailwind-merge · Lucide · DM Sans.
- **Run:** `cd next-app && npm install && npm run dev` → http://localhost:3000
- **Build:** `npm run build` (static export-style SSG). `npm run start` to serve prod.
- **Path alias:** `@/` → `next-app/src/`.
- **Routes:** `/`, `/services` + `/services/[slug]`, `/case-study` +
  `/case-study/{focuspoint,basara,medleads,transcribatron}`, `/blog` + `/blog/[slug]`,
  `/contact`. Plus `sitemap.js`, `robots.js`.
- **Service detail pages** (`services/[slug]/page.jsx`): some slugs render bespoke
  components from `custom-pages/` (custom-websites, web-apps, landing-pages, seo,
  integrations/automation, ios); all others fall back to `DefaultServicePage.jsx`.
  Slugs/data come from `data/serviceDetails.js`.
- **Blog:** markdown files parsed via `gray-matter` + `remark` in `lib/blog.js`.
- **SEO:** JSON-LD via `components/JsonLd.jsx` + `lib/schemas.js`; OG/canonical metadata
  in each route. Security headers + CSP are set in `next.config.mjs` (not `vercel.json`).
- **Chat widget:** `components/ui/ChatWidget.jsx` → `services/ChatService.js`, which POSTs
  to `${NEXT_PUBLIC_CHAT_API_URL}/api/chat` (dev fallback `http://localhost:5198`).
- **Contact drawer / forms** post to the backend `/api/contact`.
- **Deploy:** Vercel (Root Directory = `next-app`). Auto-deploys on push to `main`.

## Backend (`backend/`)

- **Stack:** ASP.NET Core minimal API · EF Core + Npgsql (PostgreSQL, db `devco`) ·
  Gemini (chat) · HubSpot (CRM) · Resend (email).
- **Run:** `cd backend && dotnet run` → http://localhost:5198 (port may vary; check output).
- **Endpoints:**
  - `POST /api/chat` — AI chat; manages session state machine
    (`intro → discovery → product_fit → booking → booked/closed`), persists
    sessions/messages, extracts lead data, pushes to HubSpot + emails on name+email,
    creates a `Booking` row on `booked`. Rate limit 10/min/IP.
  - `POST /api/contact` — contact + "Free SEO Report" form; pushes to HubSpot, sends
    notification + auto-reply emails. Rate limit 3/min/IP.
  - (No `/api/availability` or `/api/book` — actual scheduling is a Cal.com embed.)
- **Services:** `GeminiService` (structured-JSON chat, persona Lily/Hannah chosen per
  session), `HubSpotService`, `EmailService`. Prompts in `Prompts/SystemPrompts.cs`.
- **Secrets:** .NET user secrets locally; env vars in prod. Keys include `GeminiApiKey`,
  `ConnectionStrings:DefaultConnection`, HubSpot + Resend keys.
  `appsettings.*.json` (except base `appsettings.json`) and `backend/{bin,obj,publish}`
  are gitignored.
- **Migrations:** EF Core code-first (`backend/Migrations/`).
- **Deploy:** GitHub Actions (`.github/workflows/deploy.yml`) → SSH to a DigitalOcean
  droplet (`167.99.184.49`), runs `/opt/deploy-pontera.sh`. Triggers only on
  `backend/**` changes.

## Conventions & notes

- This is a learning project for the owner (Neso, the founder). For backend/.NET work,
  prefer to guide and explain rather than dump large code; one step at a time.
- Brand voice: boutique, senior local Ontario devs, fully custom, build-and-handoff
  (no subscriptions/lock-in), no offshoring, no WordPress/Wix/templates, no Android.
- Windows dev environment (PowerShell). Default branch is `main`.
- `next.config.mjs` has `eslint.ignoreDuringBuilds: true` — lint won't block builds.
