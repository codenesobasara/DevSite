import { Link } from "react-router-dom"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/ui/NavBar"
import SEO, { schemas } from "@/components/SEO"

const techStack = [
  "Custom Frontend Framework",
  "Server-Side Rendering",
  "Full-Stack Backend",
  "Relational Database",
  "AI-Generated Content",
  "Cloud Hosting",
  "Dedicated Server",
  "Reverse Proxy",
]

const features = [
  {
    title: "Neighbourhood-Level Market Data",
    description:
      "Over 50 neighbourhoods across 7 cities in the Waterloo Region, each with freehold and condo segments showing average prices, days on market, sale-to-list ratios, and year-over-year trends.",
  },
  {
    title: "AI-Generated Market Narratives",
    description:
      "Each neighbourhood and city gets an automatically generated description explaining what the numbers mean. Supply, demand, pricing trends, and affordability context written by AI and reviewed through an admin approval workflow.",
  },
  {
    title: "Monthly Market Reports",
    description:
      "Tabbed regional dashboards covering overview, detached, condo, supply, demand, price, and affordability. Monthly snapshots stored as JSONB for fast retrieval and historical comparison.",
  },
  {
    title: "Hyperlocal News Feed",
    description:
      "City-specific article feeds with scraped candidates scored for relevance. An admin approval interface lets the agent publish only what matters, building a compounding SEO asset.",
  },
  {
    title: "Automated Data Pipeline",
    description:
      "Custom scripts parse MLS sold records from PDF exports, normalize the data, and ingest it through protected API endpoints. The pipeline runs monthly with daily article ingestion.",
  },
  {
    title: "Admin Content Workflow",
    description:
      "A gated admin panel for approving article candidates and AI-generated narratives before they go live. Bearer token authentication protects all ingest and approval endpoints.",
  },
]

const results = [
  { label: "Cities covered", value: "7" },
  { label: "Neighbourhoods tracked", value: "50+" },
  { label: "Data segments per neighbourhood", value: "Freehold + Condo" },
  { label: "Content refresh", value: "Daily articles, monthly data" },
  { label: "Infrastructure cost", value: "Under $25/month" },
]

function CaseStudyBasara() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <SEO
        title="Basara Case Study"
        description="How we built a hyperlocal real estate market intelligence platform covering 7 cities and 50+ neighbourhoods in the Waterloo Region."
        path="/case-study/basara"
        schema={schemas.breadcrumbs([{name: 'Home', path: '/'}, {name: 'Case Studies', path: '/case-study'}, {name: 'Basara', path: '/case-study/basara'}])}
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
          Web Application
        </p>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">Basara</h1>
        <p className="text-xl xl:text-2xl text-white/70 mb-6">
          Hyperlocal real estate market intelligence for the Waterloo Region
        </p>

        <a
          href="https://basara.ca"
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
            src="/images/basara-hero.webp"
            alt="Basara real estate market dashboard"
            className="w-full object-cover"
          />
        </div>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">The Problem</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              Real estate market data in the Waterloo Region is available, but
              it is not accessible. MLS boards publish aggregate numbers at the
              city level, usually months after the fact, and only to agents who
              know where to look. For consumers, the picture is even worse:
              vague headlines about "the market" with no way to see what is
              happening in their specific neighbourhood.
            </p>
            <p>
              A local real estate agent wanted to change that. The goal was to
              build a platform that takes raw MLS data and turns it into
              neighbourhood-level intelligence that anyone can use. Not a
              generic listing site, but a purpose-built market data tool that
              establishes authority through depth and transparency.
            </p>
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">What We Built</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              Basara is a full-stack market intelligence platform that covers
              7 cities and over 50 neighbourhoods in the Waterloo Region. Each
              neighbourhood page breaks down sold data into freehold and condo
              segments with average prices, median prices, days on market,
              sale-to-list ratios, and year-over-year changes.
            </p>
            <p>
              The data pipeline starts with monthly MLS PDF exports. Custom
              scripts parse the sold records, normalize them against a
              neighbourhood taxonomy, and push the data into a relational
              database through protected API endpoints on a custom backend.
              Once ingested, AI generates plain-language narratives explaining
              what the numbers mean for each neighbourhood and market segment.
            </p>
            <p>
              The frontend is built on a modern framework that uses incremental
              rebuilding to keep pages fresh without rebuilding the entire
              site. City pages revalidate
              daily, the homepage revalidates hourly, and article pages refresh
              every hour. The result is a fast, always-current site that costs
              almost nothing to operate.
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
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">How We Approached It</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              The biggest challenge was the data pipeline. MLS boards export
              sold records as PDFs, not APIs. We built custom parsing scripts
              that extract structured data from these exports, map each record
              to the correct neighbourhood using board codes, and push
              normalized summaries into the database through authenticated
              ingest endpoints.
            </p>
            <p>
              The backend uses a minimal API pattern with direct SQL queries
              instead of an ORM. Public endpoints serve market data and
              articles without authentication. Protected endpoints handle data
              ingestion and content approval, secured with bearer tokens. The
              database schema uses idempotent upserts so the pipeline can be
              re-run safely.
            </p>
            <p>
              AI-generated narratives were a key differentiator. Raw numbers
              are useful but context matters. We integrated AI to generate
              plain-language explanations of what the data means for
              each neighbourhood. An admin approval workflow ensures nothing
              publishes without human review.
            </p>
            <p>
              The SEO strategy was designed for compounding returns. Seven
              city pages, fifty-plus neighbourhood breakdowns, and a growing
              article feed create a crawlable surface area that builds Google
              trust over time. Structured data, dynamic sitemaps, and
              semantic HTML round out the technical SEO foundation.
            </p>
          </div>
        </section>

        <section className="mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-white/30 text-xs uppercase tracking-wider mb-3">
            Project Status
          </p>
          <h3 className="text-2xl font-medium mb-3">Live</h3>
          <p className="text-white/50 leading-relaxed">
            Basara is live and serving daily market data across the Waterloo
            Region. The data pipeline runs monthly with daily article ingestion.
            A home valuation engine using comparable sales analysis is planned
            as the next major feature.
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

export default CaseStudyBasara
