import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import NavBar from "@/components/ui/NavBar"
import SEO, { schemas } from "@/components/SEO"

const caseStudies = [
  {
    slug: "focuspoint",
    title: "Focus Point Media",
    tagline: "A photography studio's digital storefront, built to convert",
    category: "Web Platform",
    image: "/images/focuspoint-hero.webp",
    summary:
      "A dual-market portfolio and lead generation platform for a commercial photography studio. Custom CMS, CRM integration, embedded booking, and global edge deployment.",
  },
  {
    slug: "basara",
    title: "Basara",
    tagline: "Hyperlocal real estate market intelligence for the Waterloo Region",
    category: "Web Application",
    image: "/images/basara-hero.webp",
    summary:
      "A full-stack market data platform covering 7 cities and 50+ neighbourhoods. Automated MLS data pipeline, AI-generated narratives, and a compounding SEO strategy built on a modern web framework and custom backend.",
  },
  {
    slug: "medleads",
    title: "MedLeads",
    tagline: "Real-time lead intelligence for medical events",
    category: "Web Application",
    image: "/images/MedLeadsScreenSHot.webp",
    summary:
      "A full-stack event analytics platform that replaces clipboards and spreadsheets with real-time lead capture, sales rep performance tracking, and territory management for healthcare trade shows.",
  },
  {
    slug: "transcribatron",
    title: "Transcribatron",
    tagline: "Voice-to-text that actually respects your privacy",
    category: "iOS Application",
    image: "/images/transcribeAtron.webp",
    summary:
      "A native iOS app that transcribes speech entirely on-device, then polishes the text with the user's choice of AI provider. Keyboard extension, meeting intelligence, and zero cloud dependency.",
  },
]

function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <SEO
        title="Case Studies"
        description="Real projects and real results. See how we've helped businesses solve problems with custom software, web platforms, and AI integration."
        path="/case-study"
        schema={schemas.breadcrumbs([{name: 'Home', path: '/'}, {name: 'Case Studies', path: '/case-study'}])}
      />
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full px-4 xl:px-24 pt-24 xl:pt-50">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">Case Studies</h1>
        <p className="text-white/50 text-base xl:text-lg max-w-2xl mb-8 xl:mb-16">
          Real projects. Real results. Here's how we've helped businesses solve
          problems with custom software.
        </p>

        <div className="flex flex-col">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              to={`/case-study/${study.slug}`}
              className="group flex flex-col xl:flex-row gap-6 py-8 border-t border-white/10 items-start"
            >
              <img
                src={study.image}
                alt={`${study.title} project preview`}
                className="w-full xl:w-48 xl:w-64 aspect-video object-cover rounded-md shrink-0"
              />
              <div className="flex-1 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                <div className="flex-1">
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-1">
                    {study.category}
                  </p>
                  <h2 className="text-xl font-medium mb-1 group-hover:text-white transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-white/50 text-sm mb-2">{study.tagline}</p>
                  <p className="text-white/40 text-sm leading-relaxed max-w-2xl">
                    {study.summary}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-white/40 group-hover:text-white text-sm transition-colors shrink-0 xl:pt-5">
                  View <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </main>
    </div>
  )
}

export default CaseStudies
