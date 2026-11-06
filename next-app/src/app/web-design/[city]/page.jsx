import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import NavBar from "@/components/ui/NavBar"
import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import TalkButton from "@/components/local/TalkButton"
import ProofCard from "@/components/local/ProofCard"
import ProcessSteps from "@/components/local/ProcessSteps"
import IncludedGrid from "@/components/local/IncludedGrid"
import FaqSection from "@/components/local/FaqSection"
import { cityPages, getCityBySlug } from "@/data/cityPages"

export const dynamicParams = false

export function generateStaticParams() {
  return cityPages.map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }) {
  const city = getCityBySlug(params.city)
  if (!city) return {}
  return {
    title: city.title,
    description: city.description,
    openGraph: {
      title: `${city.title} | Pontera Studios`,
      description: city.description,
    },
    alternates: {
      canonical: `https://www.ponterastudios.com/web-design/${city.slug}`,
    },
  }
}

export default function CityWebDesignPage({ params }) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const path = `/web-design/${city.slug}`

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <JsonLd data={schemas.service("Web Design & Development", city.description, path, city.city)} />
      <JsonLd
        data={schemas.breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Design & Development", path: "/services/custom-websites" },
          { name: city.city, path },
        ])}
      />
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full max-w-6xl mx-auto px-5 xl:px-8 pt-24 xl:pt-50">
        <Link
          href="/services/custom-websites"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          Web Design &amp; Development
        </Link>

        <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
          Web Development
        </p>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">{city.h1}</h1>
        <p className="text-xl xl:text-2xl text-white/70 mb-8">
          Custom-coded websites for {city.city} businesses. Fast, built to rank,
          and yours to own.
        </p>

        <section className="mb-10 xl:mb-16">
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 max-w-3xl">
            {city.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">Work from {city.city}</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {city.proof.map((item) => (
              <ProofCard key={item.href} {...item} />
            ))}
          </div>
        </section>

        <ProcessSteps />

        <IncludedGrid />

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">
            Why a {city.city} business picks a local studio
          </h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 max-w-3xl">
            {city.localNotes.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <FaqSection items={city.faq} />

        <section className="mb-12 xl:mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
          <h2 className="text-xl xl:text-2xl font-medium mb-3">Ready to talk?</h2>
          <p className="text-white/50 mb-6">
            Every project starts with a conversation. Tell us what you&apos;re trying
            to build and we&apos;ll tell you honestly whether we&apos;re the right fit.
          </p>
          <div className="flex flex-wrap gap-4">
            <TalkButton />
            <Link href="/services/custom-websites">
              <Button variant="white-outline" size="lg">
                Web Design &amp; Development <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
