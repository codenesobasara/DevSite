import { customWebsiteIncludes } from "@/data/customWebsiteIncludes"

export default function IncludedGrid({ heading = "What's included" }) {
  return (
    <section className="mb-10 xl:mb-16">
      <h2 className="text-2xl xl:text-3xl font-medium mb-6">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {customWebsiteIncludes.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/5"
          >
            <div className="h-2 w-2 rounded-full bg-white/40 mt-2 shrink-0" />
            <span className="text-white/70 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
