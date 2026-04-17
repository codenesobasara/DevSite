import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/Context/DrawerContext"
import { serviceCategories } from "@/Data/serviceDetails"

function iOSPage({ service, relatedServices, otherCategories }) {
  const { setIsOpen } = useDrawer()

  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        {service.category}
      </p>

      <h1 className="sr-only">iOS Development in Kitchener-Waterloo</h1>
      <p className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4" aria-hidden="true">
        iOS Development
      </p>
      <p className="text-xl xl:text-2xl text-white/70 mb-12">
        Native iOS apps from concept to the App Store.
      </p>

      <div className="py-20 text-center">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-4">Coming Soon</p>
        <p className="text-white/50 text-base xl:text-lg max-w-md mx-auto mb-8">
          We're putting the finishing touches on this page. In the meantime,
          let's talk about your project directly.
        </p>
        <Button variant="white" size="lg" onClick={() => setIsOpen(true)}>
          Let's Talk <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-xl xl:text-2xl font-medium mb-6">
            More {service.category} Services
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-cols-3 gap-6">
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

      <div className="mt-16 border-t border-white/10 pt-12 mb-12 xl:mb-20">
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

export default iOSPage
