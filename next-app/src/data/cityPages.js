export const cityPages = [
  {
    slug: "waterloo",
    city: "Waterloo",
    h1: "Web Design in Waterloo",
    title: "Web Design Waterloo",
    subhead: "Custom-coded websites for Waterloo businesses and product companies, built in Waterloo Region. Fast, built to rank, and yours to own.",
    description:
      "Custom-coded websites for Waterloo businesses, built in Waterloo Region. Fast, built to rank, and yours to own. No templates, no lock-in.",
    intro: [
      "Pontera Studios is a small web design and development studio based in Waterloo Region. We hand-code every site, pre-render every page, and hand the whole thing over when it is done: code, hosting account and domain in your name.",
      "Two of the products we build and run ourselves, Basara and Transcribatron, were designed and built here in Waterloo. They are the same stack, the same standards and the same people you get on a client project.",
    ],
    proof: [
      {
        title: "Basara",
        result: "Real estate market platform covering Waterloo neighbourhoods block by block: 7 cities, 50+ neighbourhoods, runs for under $25 a month.",
        href: "/case-study/basara",
        image: "/images/basara-hero.webp",
        alt: "Basara real estate platform website",
      },
      {
        title: "Transcribatron",
        result: "Native iOS app designed and built in Waterloo Region. On-device transcription, so audio never leaves the phone, with a keyboard extension and meeting intelligence.",
        href: "/case-study/transcribatron",
        image: "/images/transcribeAtron.webp",
        alt: "Transcribatron iOS app",
      },
    ],
    localNotes: [
      "Waterloo businesses sit between Uptown, the university corridor and a cluster of tech employers. Your customers compare your site against product companies' sites, not against a template, and a slow or generic site stands out for the wrong reason.",
      "Basara's neighbourhood data covers Waterloo block by block, from Uptown to Lakeshore to Laurelwood. We know the city our clients sell into because we publish market data on it.",
      "Both Basara and Transcribatron were designed and built in Waterloo Region by the owner. There is no offshore team and no handoff to a junior; the person on the discovery call is the person who writes the code.",
    ],
    faq: [
      {
        q: "What does a website cost in Waterloo?",
        a: "There is no fixed menu. A marketing site for a Waterloo product company is scoped differently from a site for a clinic or a trades business: page count, whether you want a CMS, which systems the site connects to, and who writes the content all move the number. Every project is scoped on a discovery call and quoted as a single project fee, with no monthly licence fees after handoff.",
      },
      {
        q: "How long does it take?",
        a: "A typical small business site takes 4 to 8 weeks from kickoff to launch. A startup marketing site that has to be live for a launch or an announcement usually sits at the short end of that; builds with a CMS, integrations or many pages are scoped individually. You get a staging link during the build so your team can review progress before anything goes live.",
      },
      {
        q: "Do you work with Waterloo startups and tech companies?",
        a: "Yes. We build marketing sites and web applications for product companies, and we are comfortable with the stack they expect: a modern framework, a headless CMS, CI deploys and clean handoff into their own repo and hosting. If you have an in-house developer, we hand the code to them.",
      },
      {
        q: "Who owns the site?",
        a: "You do. The code, the hosting account and the domain are in your name when we hand off. If you have an in-house developer, or hire one later, they get a normal repository rather than a proprietary platform, and they can take over without us.",
      },
    ],
  },
  {
    slug: "guelph",
    city: "Guelph",
    h1: "Web Design Company in Guelph",
    title: "Web Design Guelph",
    subhead: "Custom-coded websites for Guelph studios, trades and small businesses, from a Waterloo Region studio a short drive away. Fast, built to rank, and yours to own.",
    description:
      "Custom websites for Guelph businesses from a Waterloo Region studio. Hand-coded, fast, built to rank, and yours to own after handoff.",
    intro: [
      "Pontera Studios is a web design and development studio in Waterloo Region, a short drive from Guelph. We hand-code every site, pre-render every page, and hand over the code, hosting account and domain when the work is done.",
      "Two of our client sites are Guelph studios: Jason Hartog Photography and Focus Point Media. Both are image-heavy portfolio sites that the owners now manage themselves, without a developer.",
    ],
    proof: [
      {
        title: "Jason Hartog Photography",
        result: "Guelph architectural photographer's portfolio: CMS-managed galleries, responsive images from a global CDN, contact form straight into HubSpot, edge-deployed.",
        href: "/case-study/jasonhartog",
        image: "/images/jasonhartog-hero.webp",
        alt: "Jason Hartog Photography website",
      },
      {
        title: "Focus Point Media",
        result: "A Guelph studio serving the GTA: rebuilt off WordPress, SEO score 5.5 to 10.0, broken pages 6 to 0.",
        href: "/case-study/focuspoint",
        image: "/images/focuspoint-hero.webp",
        alt: "Focus Point Media website",
      },
    ],
    localNotes: [
      "Guelph's business community runs from the downtown core to the University of Guelph and out to the design, architecture and build trades that both of our Guelph clients photograph for. Those clients expect a site that shows their work at full quality and loads fast on a phone.",
      "Both Guelph sites we built are managed without a developer. The owner edits galleries, pages and SEO text from a CMS, and the site rebuilds itself. That is the standard we build every site to.",
      "We are close enough to meet in person in Guelph when it helps, and remote enough that you are never paying for travel time you did not ask for.",
    ],
    faq: [
      {
        q: "What does a website cost in Guelph?",
        a: "There is no fixed menu. The two Guelph sites we have built were image-heavy portfolios with a CMS, which is a different scope from a five-page site for a trades business or a clinic. Page count, whether you want a CMS, which systems the site connects to, and who writes the content all move the number. Every project is scoped on a discovery call and quoted as a single project fee, with no monthly licence fees after handoff.",
      },
      {
        q: "How long does it take?",
        a: "A typical small business site takes 4 to 8 weeks from kickoff to launch. A portfolio site with a CMS, like the Guelph studios we have built for, usually sits at the longer end because gallery content takes time to prepare. You get a staging link during the build so you can review progress before anything goes live.",
      },
      {
        q: "Do you come to Guelph for meetings?",
        a: "Yes, when it helps. We are based in Waterloo Region, a short drive away, so a kickoff or a launch walkthrough in person is easy to arrange. Most of the day-to-day during a build happens over a shared staging link and short calls.",
      },
      {
        q: "Who owns the site?",
        a: "You do. The code, the hosting account and the domain are in your name when we hand off. Both Guelph sites we built are run day to day by their owners from a CMS, and if either ever wanted another developer to take over, nothing in the setup would stop them.",
      },
    ],
  },
]

export function getCityBySlug(slug) {
  return cityPages.find((c) => c.slug === slug) ?? null
}
