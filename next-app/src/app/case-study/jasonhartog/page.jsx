import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/ui/NavBar"
import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"

const techStack = [
  "Next.js",
  "Sanity CMS",
  "Cloudflare Edge",
  "Resend Email",
  "HubSpot CRM",
  "Responsive Images",
]

const features = [
  {
    title: "CMS-Managed Galleries",
    description:
      "Four gallery sections (Interior, Editorial, Exterior, Personal Projects) with horizontal sliders. Every image, caption and ordering is edited in Sanity, so new work goes live without a developer.",
  },
  {
    title: "Responsive Image Delivery",
    description:
      "Large architectural photographs are served from Sanity's CDN in sizes matched to the visitor's screen, so galleries load quickly on a phone and stay sharp on a large monitor.",
  },
  {
    title: "Lead Capture to Inbox and CRM",
    description:
      "The contact form emails the studio through Resend and creates the contact in HubSpot at the same time. Nothing to copy across, nothing to miss.",
  },
  {
    title: "Edge Deployment",
    description:
      "Deployed to Cloudflare's edge network through OpenNext. Pages are served close to the visitor and there is no server for the client to maintain.",
  },
]

const results = [
  { label: "Content management", value: "Client edits every gallery from the CMS" },
  { label: "Image delivery", value: "Responsive sizes from a global CDN" },
  { label: "Lead capture", value: "Form to inbox and CRM" },
  { label: "Hosting", value: "Edge-deployed, no server to maintain" },
]

export const metadata = {
  title: "Jason Hartog Photography Case Study",
  description:
    "A portfolio site for a Guelph architectural photographer: Sanity-managed galleries, responsive images from a global CDN, a contact form wired into HubSpot, and edge deployment on Cloudflare.",
  openGraph: {
    title: "Jason Hartog Photography Case Study | Pontera Studios",
    description:
      "A Guelph photographer's portfolio, managed without a developer. Sanity CMS, responsive images, HubSpot lead capture, Cloudflare edge.",
  },
  alternates: {
    canonical: "https://www.ponterastudios.com/case-study/jasonhartog",
  },
}

export default function JasonHartogCaseStudy() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <JsonLd
        data={schemas.breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-study" },
          { name: "Jason Hartog Photography", path: "/case-study/jasonhartog" },
        ])}
      />
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full max-w-4xl mx-auto px-5 xl:px-8 pt-24 xl:pt-50">
        {/* Breadcrumb */}
        <Link
          href="/case-study"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          All Case Studies
        </Link>

        {/* Header */}
        <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
          Web Platform
        </p>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">Jason Hartog Photography</h1>
        <p className="text-xl xl:text-2xl text-white/70 mb-6">
          A Guelph photographer&apos;s portfolio, managed without a developer
        </p>

        <a
          href="https://jasonhartog.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="white-outline" size="sm" className="mb-10">
            <ExternalLink className="size-4" />
            Visit Live Site
          </Button>
        </a>

        {/* Hero image */}
        <div className="rounded-lg overflow-hidden border border-white/10 mb-10 xl:mb-16">
          <img
            src="/images/jasonhartog-hero.webp"
            alt="Jason Hartog Photography website"
            className="w-full object-cover"
          />
        </div>

        {/* The Problem */}
        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">The Problem</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              Jason Hartog is an architectural interior and exterior photographer
              based in Guelph, Ontario. Over about fifteen years he has shot for
              consumer publications including OUR HOMES Media Group, and for
              architects, designers and retailers across the region. He also
              teaches in Fanshawe College&apos;s Advanced Photography Program.
            </p>
            <p>
              His work is large, detailed and image-heavy. He needed a portfolio
              that shows those photographs at full quality without slow page
              loads, and that he could update himself whenever a new project
              wrapped, without waiting on a developer.
            </p>
          </div>
        </section>

        {/* What We Built */}
        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">What We Built</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              A Next.js site with Sanity as the content layer. The portfolio is
              split into four gallery sections, Interior, Editorial, Exterior
              and Personal Projects, each presented as a horizontal slider so
              the photographs read the way they would in a printed spread.
            </p>
            <p>
              Every image is uploaded once to Sanity and served from its CDN in
              responsive sizes, so the browser only downloads what the screen
              needs. Jason adds, reorders and captions work from the CMS, and
              the site rebuilds itself.
            </p>
            <p>
              The contact form sends an email through Resend and creates the
              contact in HubSpot in the same request. The whole site is deployed
              to Cloudflare&apos;s edge network through OpenNext, so there is no
              server to patch or pay for.
            </p>
          </div>
        </section>

        {/* Key Features */}
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

        {/* Built With */}
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

        {/* The Impact */}
        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-8">The Impact</h2>
          <div className="space-y-0">
            {results.map((result) => (
              <div
                key={result.label}
                className="flex justify-between items-center gap-6 py-5 border-t border-white/10"
              >
                <span className="text-white/50 shrink-0">{result.label}</span>
                <span className="text-white font-medium text-right">{result.value}</span>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </section>

        {/* Project Status */}
        <section className="mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-white/30 text-xs uppercase tracking-wider mb-3">
            Project Status
          </p>
          <h3 className="text-2xl font-medium mb-3">Live</h3>
          <p className="text-white/50 leading-relaxed">
            jasonhartog.com is live. Jason manages galleries and content from
            Sanity, enquiries land in his inbox and HubSpot, and the site runs on
            Cloudflare&apos;s edge with nothing for him to maintain.
          </p>
        </section>

        {/* Back link */}
        <div className="mb-20 border-t border-white/10 pt-8">
          <Link
            href="/case-study"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            &larr; Back to all case studies
          </Link>
        </div>
      </main>
    </div>
  )
}
