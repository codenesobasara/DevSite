# Pontera Studios — SEO Lead-Gen Action Plan (drafted Oct 9, 2026)

Companion to `keyword-map.md` (data + clusters). This is the execution order.
Status legend: ☐ not started · ◐ partial · ✓ done

## Phase 0 — GBP (Neso, no code) — IN PROGRESS

- ✓ Profile verified & live (confirmed Oct 9; anchored to Wellesley home address — correct setup,
  do NOT use a fake city address; pack reach in KW proper is partial by design)
- ☐ Send review link to past clients (FocusPoint, Basara, MedLeads, Transcribatron, SEO clients):
  **https://g.page/r/Cf6iqLJbOhcnEBM/review** — ask them to naturally mention service + city.
  Target: 5+ reviews. This is the #1 GBP lever.
- ☐ Complete "Profile Strength" items: full services list (Web Design, Custom Website Development,
  Web App Development, SEO Services, Landing Pages, iOS Development), case-study screenshots as
  photos, secondary categories (Software company, Marketing agency).
- ☐ Add UTM to website link (`?utm_source=gbp`) so GA4 attributes leads.
- ☐ Ongoing: 1 post every ~2 weeks; seed Q&A ("How much does a custom website cost?").
- (Optional, later, only if pack becomes strategic: genuine dedicated desk at a KW coworking
  space as a legit city anchor.)

## Phase 1 — Homepage localization (code, ~1 session)

Files: `next-app/src/app/layout.jsx`, homepage components, `lib/schemas.js`.

- ☐ Title: `Web Design & Custom Software in Kitchener-Waterloo | Pontera Studios`
  (Cluster 1 primary + brand). Meta description with K-W-C-G + custom/no-templates angle.
- ☐ H1/hero copy: add geography ("Kitchener-Waterloo" / "Waterloo Region") without breaking voice.
- ☐ JSON-LD: switch/extend Organization → `ProfessionalService` (LocalBusiness subtype):
  real Wellesley location (can omit street address), `areaServed`: Kitchener, Waterloo,
  Cambridge, Guelph, Wellesley; `sameAs` GBP/socials; phone (519) 575-1573 to match GBP (NAP
  consistency).
- ☐ Footer: "Serving Kitchener, Waterloo, Cambridge & Guelph" line (site-wide local relevance).

## Phase 2 — NEW dedicated page `/web-design-kitchener-waterloo` (the big one)

Target: Cluster 1 (~1,870/mo, KD 7–15) + Cluster 5 Ontario terms + near-me semantics.
Model: tactycs.io/website-design-kitchener-waterloo (ranks 3–8 on a weak domain) — but with
real substance it should beat them and Digital Shift's 20-visit template page (#6).

Outline:
- H1 "Web Design in Kitchener-Waterloo" (+ title tag variant with "Website Design")
- Local proof: Basara + FocusPoint case studies (local clients = unfakeable local relevance)
- Custom-vs-template section (Cluster 6 keywords: custom website development/developers/company)
- "Serving Kitchener, Waterloo, Cambridge & Guelph" blocks with genuinely local copy (not
  city-spam); near-me phrasing naturally in copy
- Transparent pricing teaser → links to cost pillar (Phase 3)
- FAQ section (PAA targets from question data; marked up with FAQPage schema)
- Internal links: homepage ↔ this page ↔ service pages; add to nav/footer
- `Service` + `ProfessionalService` JSON-LD, breadcrumbs

## Phase 3 — Cost pillar page (fastest pure-organic win)

Target: Cluster 7 — "how much does a website cost in canada" 110/KD7,
"website development cost in canada" 90/KD3, "website cost in canada" 50/KD2 + ~40 variants.

- ☐ Route: blog post or standalone `/website-cost-canada` (decide: standalone ranks cleaner)
- ☐ Title: "How Much Does a Website Cost in Canada? (2026 Pricing Guide)"
- ☐ Content: real price ranges (template vs custom vs web app), what drives cost, Pontera's
  build-and-handoff pricing philosophy (no subscriptions = differentiator), FAQ schema
- ☐ CTA → contact. This page doubles as a sales asset to send to prospects.

## Phase 4 — Localize SEO service page

Target: Clusters 2+3 (~3,700/mo combined, KD 8–21). Model: REM's /seo (106/mo, 79 kws, pos 4–7).

- ☐ `/services/seo` title → "SEO Services in Kitchener-Waterloo | Pontera Studios"
- ☐ H2s for: local SEO Kitchener/Waterloo, SEO for Ontario businesses (Cluster 3 terms),
  "seo near me" semantics
- ☐ Add local proof (SEO client results), FAQ, Service schema

## Phase 5 — Off-page basics (no content treadmill)

- ☐ Free Clutch.co profile (Clutch is organic #1 for the money keyword — be inside the top result)
- ☐ Core local citations: Bing Places, Yelp CA, YellowPages.ca, 411.ca — NAP identical to GBP
- ☐ 3–5 easy local links over time (KW chamber/tech community, client footer credits
  "Site by Pontera Studios" with link — FocusPoint/Basara/MedLeads/Transcribatron)

## Phase 6 — Later / conditional

- `/web-design-guelph` page if Cluster 1 traction proves out (110/mo, KD 15)
- Localize software/web-app service pages → Cluster 8 (it company kitchener 90/16,
  software development near me, app developers near me $21 CPC)
- Position Tracking in Semrush (set up before trial ends!) for Cluster 1+2 keywords
- GSC: verify property, monitor impressions as pages index

## Explicitly NOT doing

- Generic SEO-tips blogging (REM's 40 posts + Digital Shift's farm ≈ 0 commercial traffic)
- National heads: "custom website design" KD90, "web design" KD78, "website design" KD91
- Digital marketing keywords (off-brand)
- Fake address / virtual office for GBP (suspension risk)

## Measurement

- GA4 already installed (commit 84ce46a). Watch: GBP-UTM sessions, /contact submissions by
  landing page, GSC impressions for cluster keywords.
- Expectations: KD 7–15 + weak SERP → first page-1 appearances realistically 6–10 weeks after
  pages ship; meaningful lead flow 3–4 months. Few hundred commercial visits/mo at maturity.
