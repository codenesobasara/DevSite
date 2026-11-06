import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TalkButton from "@/components/local/TalkButton"
import ProofCard from "@/components/local/ProofCard"
import ProcessSteps from "@/components/local/ProcessSteps"
import IncludedGrid from "@/components/local/IncludedGrid"
import FaqSection from "@/components/local/FaqSection"
import { customWebsitesFaq } from "@/data/customWebsitesFaq"

const proof = [
  {
    title: "Basara",
    result: "Kitchener-Waterloo real estate platform: 7 cities, 50+ neighbourhoods, runs for under $25 a month.",
    href: "/case-study/basara",
    image: "/images/basara-hero.webp",
    alt: "Basara real estate platform website",
  },
  {
    title: "Focus Point Media",
    result: "Photography studio rebuilt off WordPress: SEO score 5.5 to 10.0, broken pages 6 to 0.",
    href: "/case-study/focuspoint",
    image: "/images/focuspoint-hero.webp",
    alt: "Focus Point Media website",
  },
  {
    title: "Jason Hartog Photography",
    result: "Guelph photographer's portfolio: CMS-managed galleries, edge-deployed, form straight into the CRM.",
    href: "/case-study/jasonhartog",
    image: "/images/jasonhartog-hero.webp",
    alt: "Jason Hartog Photography website",
  },
]

function CustomWebsitesPage({ service, relatedServices, otherCategories }) {
  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        {service.category}
      </p>

      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">
        Web Design Company in Kitchener-Waterloo
      </h1>
      <p className="text-xl xl:text-2xl text-white/70 mb-12">
        Custom-coded websites for businesses in Waterloo Region. Fast, built to
        rank, and yours to own.
      </p>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">Recent work</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {proof.map((item) => (
            <ProofCard key={item.href} {...item} />
          ))}
        </div>
      </section>

      <ProcessSteps />

      <IncludedGrid />

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Serving Kitchener, Waterloo, Cambridge and Guelph
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            <strong className="text-white font-medium">Kitchener.</strong> We
            work with businesses downtown, in the innovation district and across
            the city. Basara, the real estate platform we built and run, covers
            every Kitchener neighbourhood, so we know the market our clients
            sell into.
          </p>
          <p>
            <strong className="text-white font-medium">Waterloo.</strong> Basara
            and Transcribatron were both designed and built here. Read more
            about{" "}
            <Link href="/web-design/waterloo" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
              web design in Waterloo
            </Link>
            .
          </p>
          <p>
            <strong className="text-white font-medium">Cambridge.</strong> Galt,
            Preston and Hespeler businesses get the same build-and-handoff
            model: a hand-coded site you own outright, with no monthly platform
            fee.
          </p>
          <p>
            <strong className="text-white font-medium">Guelph.</strong> Jason
            Hartog Photography and Focus Point Media are both Guelph studios we
            built for. Read more about{" "}
            <Link href="/web-design/guelph" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
              web design in Guelph
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqSection items={customWebsitesFaq} />

      <section className="mb-12 xl:mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
        <h2 className="text-xl xl:text-2xl font-medium mb-3">Ready to talk?</h2>
        <p className="text-white/50 mb-6">
          Every project starts with a conversation. Tell us what you&apos;re trying
          to build and we&apos;ll tell you honestly whether we&apos;re the right fit.
        </p>
        <div className="flex flex-wrap gap-4">
          <TalkButton />
          <Link href="/case-study">
            <Button variant="white-outline" size="lg">
              See Our Work <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-xl xl:text-2xl font-medium mb-6">
            More {service.category} Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
    </>
  )
}

export default CustomWebsitesPage
