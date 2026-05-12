"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/context/DrawerContext"

export default function DefaultServicePage({ service, relatedServices, otherCategories }) {
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

      <h2 className="text-xl xl:text-2xl font-medium mb-6">What&apos;s Included</h2>
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
          Let&apos;s Talk <ArrowRight className="h-4 w-4" />
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
