import { notFound } from "next/navigation"
import NavBar from "@/components/ui/NavBar"
import ServiceCTA from "./ServiceCTA"
import {
  getAllServiceSlugs,
  getServiceBySlug,
  serviceCategories,
} from "@/data/serviceDetails"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Pre-generate all service pages at build time
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

// Dynamic metadata per service
export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  const locationMeta = {
    "web-apps": "Custom web application development in Kitchener-Waterloo, Ontario.",
    "custom-websites": "Custom website design and development in Kitchener-Waterloo, Ontario. No WordPress, no templates.",
    "landing-pages": "High-converting landing page design and development in Kitchener-Waterloo, Ontario.",
    "seo": "SEO services and web optimization in Kitchener-Waterloo, Ontario. Technical SEO, on-page optimization, and performance tuning.",
    "ios": "iOS app development in Kitchener-Waterloo, Ontario. Native Swift apps from concept to the App Store.",
    "integrations": "Custom software integrations and API development in Kitchener-Waterloo, Ontario.",
    "automation": "Workflow automation and business process automation in Kitchener-Waterloo, Ontario.",
  }

  const description = locationMeta[params.slug]
    ? `${locationMeta[params.slug]} ${service.description}`
    : service.description

  return {
    title: `${service.title} in Kitchener-Waterloo — Slate Studio | ${service.category}`,
    description,
    openGraph: {
      title: `${service.title} — Slate Studio | Kitchener-Waterloo`,
      description: `${service.headline} Custom ${service.category.toLowerCase()} in Kitchener-Waterloo.`,
    },
    alternates: {
      canonical: `https://slatecode.dev/services/${params.slug}`,
    },
  }
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  // Get other services in the same category for related links
  const category = serviceCategories.find((c) => c.id === service.categoryId)
  const relatedServices = category
    ? category.tabs.filter((t) => t.id !== service.id)
    : []

  // Get services from other categories
  const otherCategories = serviceCategories.filter(
    (c) => c.id !== service.categoryId
  )

  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <main className="w-full max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-50">
        {/* Breadcrumb */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          All Services
        </Link>

        {/* Category label */}
        <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
          {service.category}
        </p>

        {/* Service content — fully server-rendered, fully indexable */}
        <h1 className="text-5xl font-medium mb-4">{service.title}</h1>
        <p className="text-2xl text-white/70 mb-8">{service.headline}</p>

        <div className="text-white/60 text-lg leading-relaxed mb-12">
          {service.description}
        </div>

        {/* Highlights */}
        <h2 className="text-2xl font-medium mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {service.highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-5 rounded-lg bg-white/[0.03] border border-white/5"
            >
              <div className="h-2 w-2 rounded-full bg-white/40 mt-2 shrink-0" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <ServiceCTA />

        {/* Related services in same category */}
        {relatedServices.length > 0 && (
          <div className="mt-20 border-t border-white/10 pt-12">
            <h2 className="text-2xl font-medium mb-6">
              More {service.category} Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/${related.id}`}
                  className="group p-5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
                >
                  <h3 className="text-lg font-medium mb-1">{related.title}</h3>
                  <p className="text-white/40 text-sm">{related.headline}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Other service categories */}
        <div className="mt-16 border-t border-white/10 pt-12 mb-20">
          <h2 className="text-2xl font-medium mb-6">Explore Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCategories.map((cat) => (
              <div key={cat.id}>
                <h3 className="text-lg font-medium mb-3">{cat.name}</h3>
                <ul className="space-y-2">
                  {cat.tabs.map((tab) => (
                    <li key={tab.id}>
                      <Link
                        href={`/services/${tab.id}`}
                        className="text-white/50 hover:text-white text-sm transition-colors"
                      >
                        {tab.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
