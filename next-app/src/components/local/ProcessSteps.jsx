import { processSteps } from "@/data/processSteps"

export default function ProcessSteps({ heading = "How we build your website" }) {
  return (
    <section className="mb-10 xl:mb-16">
      <h2 className="text-2xl xl:text-3xl font-medium mb-8">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="p-6 rounded-lg bg-white/[0.03] border border-white/5"
          >
            <span className="text-white/20 text-xs font-mono">{step.number}</span>
            <h3 className="text-lg font-medium mt-2 mb-3">{step.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
