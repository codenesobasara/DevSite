import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProofCard({ title, result, href, image, alt }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all overflow-hidden"
    >
      <img
        src={image}
        alt={alt ?? `${title} website`}
        className="w-full aspect-video object-cover object-top"
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{result}</p>
        <span className="inline-flex items-center gap-2 text-white/40 group-hover:text-white text-sm transition-colors">
          View case study <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
