import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"

export default function FaqSection({ heading = "Questions we get asked", items }) {
  return (
    <section className="mb-10 xl:mb-16">
      <JsonLd data={schemas.faq(items)} />
      <h2 className="text-2xl xl:text-3xl font-medium mb-8">{heading}</h2>
      <div className="space-y-0">
        {items.map(({ q, a }) => (
          <div key={q} className="py-6 border-t border-white/10">
            <h3 className="text-lg font-medium mb-3">{q}</h3>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">{a}</p>
          </div>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  )
}
