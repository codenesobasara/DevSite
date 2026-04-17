import { Link } from "react-router-dom"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/ui/NavBar"
import SEO, { schemas } from "@/components/SEO"

const techStack = [
  "Custom Frontend Framework",
  "Headless CMS",
  "CRM Integration",
  "Booking System",
  "Edge Deployment",
  "Automated Emails",
  "Bot Protection",
  "Scroll Animations",
]

const features = [
  {
    title: "Dual-Market Portfolio System",
    description:
      "Separate portfolio experiences for product photography and architectural photography, each with category tabs, responsive grids, and a full lightbox viewer with keyboard navigation.",
  },
  {
    title: "Intelligent Image Preloading",
    description:
      "Custom preloading logic that anticipates which images the user will view next. Hover-triggered on desktop, swipe-triggered on mobile. Reduced perceived gallery load times by roughly 40%.",
  },
  {
    title: "Composable Story Blocks",
    description:
      "A modular content system for case studies and project pages. Title blocks, text sections, image grids, pull quotes, and full-width images that the client can assemble into any layout from the CMS.",
  },
  {
    title: "Integrated Lead Capture",
    description:
      "A two-step form flow: contact details first, then an embedded booking widget. Protected by bot protection and a honeypot field. Leads go straight into the CRM.",
  },
  {
    title: "CMS-Managed SEO",
    description:
      "Every page has editable SEO titles, meta descriptions, and a hidden H1 override field for keyword targeting. Structured data covers 7 schema types including LocalBusiness, FAQPage, and CreativeWork.",
  },
  {
    title: "Edge Deployment",
    description:
      "Deployed to edge servers worldwide. Static assets served from a global CDN, server functions run at the edge. No traditional server infrastructure to manage.",
  },
]

const results = [
  { label: "SEO score", value: "5.5 → 10.0" },
  { label: "Security score", value: "7.0 → 10.0" },
  { label: "Overall quality", value: "7.0 → 9.4" },
  { label: "Broken pages", value: "6 → 0" },
  { label: "Content management", value: "Fully client-managed through a custom CMS" },
  { label: "Lead capture", value: "CRM integration + embedded booking" },
  { label: "Deployment", value: "Edge-deployed globally" },
]

function CaseStudyFocusPoint() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <SEO
        title="Focus Point Media Case Study"
        description="How we rebuilt a photography studio's WordPress site into a high-performance marketing platform. SEO score improved from 5.5 to 10.0."
        path="/case-study/focuspoint"
        schema={schemas.breadcrumbs([{name: 'Home', path: '/'}, {name: 'Case Studies', path: '/case-study'}, {name: 'Focus Point Media', path: '/case-study/focuspoint'}])}
      />
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full max-w-4xl mx-auto px-5 xl:px-8 pt-24 xl:pt-50">
        <Link
          to="/case-study"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          All Case Studies
        </Link>

        <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
          Web Platform
        </p>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">Focus Point Media</h1>
        <p className="text-xl xl:text-2xl text-white/70 mb-6">
          A photography studio's digital storefront, built to convert
        </p>

        <a
          href="https://focuspointmedia.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="white-outline" size="sm" className="mb-10">
            <ExternalLink className="size-4" />
            Visit Live Site
          </Button>
        </a>

        <div className="rounded-lg overflow-hidden border border-white/10 mb-10 xl:mb-16">
          <img
            src="/images/focuspoint-hero.webp"
            alt="Focus Point Media website"
            className="w-full object-cover"
          />
        </div>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">The Problem</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              Focus Point Media is a commercial photography studio in Guelph,
              Ontario serving two distinct markets: product photography for
              performance brands and architectural photography for design firms
              across the GTA and Southern Ontario.
            </p>
            <p>
              Their previous online presence didn't reflect the quality of their
              work. Portfolio browsing was clunky, there was no way for
              prospects to book directly, and the site couldn't be updated
              without a developer. They needed something that matched the
              caliber of their photography and actually generated leads.
            </p>
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">What We Built</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              A full marketing platform that doubles as a high-performance lead
              generation engine. The site serves both market segments with
              dedicated portfolio experiences, each with category filtering,
              responsive grids, and a lightbox viewer with smart image
              preloading.
            </p>
            <p>
              Content is fully managed through a headless CMS. The client can
              publish new projects, rearrange portfolio images, update FAQ
              sections, and edit SEO metadata without touching code. Case
              studies use a composable block system so complex layouts can be
              assembled from simple building blocks.
            </p>
            <p>
              The lead capture flow is a two-step process: a contact form
              protected by bot protection, followed by an embedded booking
              widget. Submissions go directly into the CRM and trigger
              automated email confirmations. The entire pipeline runs without
              manual intervention.
            </p>
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-8">Key Features</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">Built With</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm border border-white/10 text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-8">The Impact</h2>
          <div className="space-y-0">
            {results.map((result) => (
              <div
                key={result.label}
                className="flex justify-between items-center py-5 border-t border-white/10"
              >
                <span className="text-white/50">{result.label}</span>
                <span className="text-white font-medium">{result.value}</span>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">
            SEO: Rebuilding from a 5.5 to Production-Grade
          </h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
            <p>
              The original site was a WordPress build running a bloated theme
              with Visual Composer, RevSlider, and WPBakery. A full site crawl
              revealed the damage: an SEO score of 5.5 out of 10, 273 URLs
              totaling 66MB, 6 broken pages, and 18 pages with critical
              security findings. Every single page had the same empty meta
              description. Fifteen pages had no H1 heading at all, and another
              fifteen had skipped heading levels.
            </p>
            <p>
              For an image-heavy photography site, the performance picture was
              worse. No WebP or AVIF images anywhere. No Brotli compression on
              most pages. Font files shipped in every format (EOT, TTF, WOFF,
              WOFF2, SVG), including 2MB+ SVG font files that no modern browser
              needs. The page weight made it nearly impossible to rank for
              competitive search terms.
            </p>
            <p>
              The rebuild addressed every finding from the crawl report:
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-lg bg-white/[0.03] border border-red-500/20">
              <p className="text-red-400/70 text-xs uppercase tracking-wider mb-3">Before — WordPress</p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li>Overall quality: <span className="text-white">7.0 / 10</span></li>
                <li>SEO score: <span className="text-white">5.5 / 10</span></li>
                <li>Security: <span className="text-white">7.0 / 10</span></li>
                <li>Accessibility: <span className="text-white">5.0 / 10</span></li>
                <li>273 URLs crawled, 66MB total weight</li>
                <li>100% duplicate (empty) meta descriptions</li>
                <li>15 pages missing H1 headings</li>
                <li>6 broken 404 pages</li>
                <li>18 pages with critical security findings</li>
                <li>No WebP or AVIF images</li>
                <li>No IPv6 support</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-white/[0.03] border border-emerald-500/20">
              <p className="text-emerald-400/70 text-xs uppercase tracking-wider mb-3">After — Custom Build</p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li>Overall quality: <span className="text-white">9.4 / 10</span></li>
                <li>SEO score: <span className="text-white">10.0 / 10</span></li>
                <li>Security: <span className="text-white">10.0 / 10</span></li>
                <li>Accessibility: <span className="text-white">7.6 / 10</span></li>
                <li>All unique titles and meta descriptions</li>
                <li>Every page has a proper H1 heading</li>
                <li>Zero broken pages, zero skipped heading levels</li>
                <li>7 structured data schemas</li>
                <li>Full security headers (CSP, HSTS, X-Frame-Options)</li>
                <li>AVIF + WebP via an image CDN with format negotiation</li>
                <li>IPv6 supported, edge-deployed globally</li>
              </ul>
            </div>
          </div>

          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              The H1 override pattern was critical for a photography site. The
              visual heading on the portfolio page says "Our Work" because that
              is what visitors expect. But the hidden H1 reads "Product
              Photography for Performance Brands" because that is what Google
              needs to see. Every page has this dual-heading system, editable
              from the CMS.
            </p>
            <p>
              Image delivery was rethought from scratch. An image CDN handles
              format negotiation (AVIF when supported, WebP as fallback) and
              dynamic resizing (500px grid thumbnails, 1600px lightbox images,
              2400px heroes). The 31-day cache TTL and smart preloading system
              means returning visitors load galleries almost instantly.
            </p>
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">How We Approached It</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              The core challenge was performance. Photography sites live or die
              by how fast images load. We built a custom preloading system that
              anticipates which images the user is about to view, preloading
              two images ahead on hover (desktop) or three ahead on swipe
              (mobile). A ref-based tracking set prevents duplicate requests,
              and the cache resets on category switches.
            </p>
            <p>
              For content management, we designed 8 document types in the CMS
              with validation rules, required alt text on every image, and
              drag-to-reorder on portfolios, FAQs, and process steps. The
              composable story block system lets the client build rich project
              pages from simple pieces without ever seeing markup.
            </p>
            <p>
              Security was baked into the middleware layer. CSP headers with
              granular directives for each third-party service. HSTS with
              preload. X-Frame-Options DENY. The full stack runs on edge
              servers worldwide, eliminating traditional server infrastructure
              entirely.
            </p>
            <p>
              SEO was treated as a first-class feature. Every page has
              CMS-editable metadata, a hidden H1 override for keyword
              targeting, and structured data. Seven schema types cover
              LocalBusiness, FAQPage, Service, CreativeWork, and more. A
              dynamic sitemap pulls slugs from the CMS on build.
            </p>
          </div>
        </section>

        <section className="mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-white/30 text-xs uppercase tracking-wider mb-3">
            Project Status
          </p>
          <h3 className="text-2xl font-medium mb-3">Live</h3>
          <p className="text-white/50 leading-relaxed">
            Focus Point Media is live and actively being used by the client to
            manage their portfolio and capture leads. The site is edge-deployed
            globally with a headless CMS powering all content.
          </p>
        </section>

        <div className="mb-20 border-t border-white/10 pt-8">
          <Link
            to="/case-study"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            &larr; Back to all case studies
          </Link>
        </div>
      </main>
    </div>
  )
}

export default CaseStudyFocusPoint
