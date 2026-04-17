import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/ui/NavBar"
import { serviceCategories, getServiceBySlug } from "@/Data/serviceDetails"
import { useDrawer } from "@/Context/DrawerContext"
import CustomWebsitesPage from "@/Pages/services/CustomWebsites"
import WebAppsPage from "@/Pages/services/WebApps"
import LandingPagesPage from "@/Pages/services/LandingPages"
import SEOPage from "@/Pages/services/SEO"
import IntegrationsPage from "@/Pages/services/Integrations"
import iOSPage from "@/Pages/services/iOS"
import SEO, { schemas } from "@/components/SEO"

const CUSTOM_PAGES = {
  "custom-websites": CustomWebsitesPage,
  "web-apps": WebAppsPage,
  "landing-pages": LandingPagesPage,
  "seo": SEOPage,
  "integrations": IntegrationsPage,
  "automation": IntegrationsPage,
  "ios": iOSPage,
}

function DefaultServicePage({ service, relatedServices, otherCategories }) {
  const { setIsOpen } = useDrawer()

  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        {service.category}
      </p>

      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">{service.title}</h1>
      <p className="text-xl xl:text-2xl text-white/70 mb-8">{service.headline}</p>

      <div className="text-white/60 text-base xl:text-lg leading-relaxed mb-12">
        {service.description}
      </div>

      <h2 className="text-xl xl:text-2xl font-medium mb-6">What's Included</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10 xl:mb-16">
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

      <div className="flex gap-4">
        <Button variant="white" size="lg" onClick={() => setIsOpen(true)}>
          Let's Talk <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {relatedServices.length > 0 && (
        <div className="mt-20 border-t border-white/10 pt-12">
          <h2 className="text-xl xl:text-2xl font-medium mb-6">
            More {service.category} Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                to={`/services/${related.id}`}
                className="group p-5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
              >
                <h3 className="text-lg font-medium mb-1">{related.title}</h3>
                <p className="text-white/40 text-sm">{related.headline}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 border-t border-white/10 pt-12 mb-20">
        <h2 className="text-xl xl:text-2xl font-medium mb-6">Explore Other Services</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {otherCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-lg font-medium mb-3">{cat.name}</h3>
              <ul className="space-y-2">
                {cat.tabs.map((tab) => (
                  <li key={tab.id}>
                    <Link
                      to={`/services/${tab.id}`}
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
    </>
  )
}

function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
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
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full max-w-6xl mx-auto px-5 xl:px-8 pt-24 xl:pt-50">
        <SEO
          title={service.title}
          description={service.description}
          path={`/services/${slug}`}
          schema={schemas.service(service.title, service.description, `/services/${slug}`)}
        />
        <Link
          to="/services"
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

export default ServiceDetail
