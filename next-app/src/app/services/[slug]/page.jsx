import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import NavBar from "@/components/ui/NavBar"
import { serviceCategories, getAllServiceSlugs, getServiceBySlug } from "@/data/serviceDetails"
import { notFound } from "next/navigation"
import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"
import CustomWebsitesPage from "./custom-pages/CustomWebsites"
import WebAppsPage from "./custom-pages/WebApps"
import LandingPagesPage from "./custom-pages/LandingPages"
import SEOPage from "./custom-pages/SEO"
import IntegrationsPage from "./custom-pages/Integrations"
import IOSPage from "./custom-pages/iOS"
import DefaultServicePage from "./DefaultServicePage"

const CUSTOM_PAGES = {
  "custom-websites": CustomWebsitesPage,
  "web-apps": WebAppsPage,
  "landing-pages": LandingPagesPage,
  "seo": SEOPage,
  "integrations": IntegrationsPage,
  "automation": IntegrationsPage,
  "ios": IOSPage,
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Pontera Studios`,
      description: service.description,
    },
    alternates: {
      canonical: `https://www.ponterastudios.com/services/${params.slug}`,
    },
  }
}

export default function ServiceDetailPage({ params }) {
  const { slug } = params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const category = serviceCategories.find((c) => c.id === service.categoryId)
  const relatedServices = category
    ? category.tabs.filter((t) => t.id !== service.id)
    : []
  const otherCategories = serviceCategories.filter(
    (c) => c.id !== service.categoryId
  )

  const CustomPage = CUSTOM_PAGES[slug]

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <JsonLd data={schemas.service(service.title, service.description, `/services/${slug}`)} />
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full max-w-6xl mx-auto px-5 xl:px-8 pt-24 xl:pt-50">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          All Services
        </Link>

        {CustomPage ? (
          <CustomPage
            service={service}
            relatedServices={relatedServices}
            otherCategories={otherCategories}
          />
        ) : (
          <DefaultServicePage
            service={service}
            relatedServices={relatedServices}
            otherCategories={otherCategories}
          />
        )}
      </main>
    </div>
  )
}
