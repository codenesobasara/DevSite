import NavBar from "@/components/ui/NavBar"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Case Studies — Custom Software Projects | Slate Studio, Kitchener-Waterloo",
  description:
    "Custom software case studies from Slate Studio in Kitchener-Waterloo, Ontario. Real projects including web applications, mobile apps, and automation built for real businesses.",
  openGraph: {
    title: "Case Studies | Slate Studio — Kitchener-Waterloo",
    description:
      "See what we've built. Custom software case studies from a Kitchener-Waterloo development agency.",
  },
  alternates: {
    canonical: "https://slatecode.dev/case-studies",
  },
}

const caseStudies = [
  {
    slug: "medleads",
    title: "MedLeads",
    tagline: "Real-time lead intelligence for medical events",
    category: "Web Application",
    image: "/images/MedLeadsScreenSHot.png",
    summary:
      "A full-stack event analytics platform that replaces clipboards and spreadsheets with real-time lead capture, sales rep performance tracking, and territory management for healthcare trade shows.",
  },
  {
    slug: "transcribatron",
    title: "Transcribatron",
    tagline: "Voice-to-text that actually respects your privacy",
    category: "iOS Application",
    image: "/images/transcribeAtron.png",
    summary:
      "A native iOS app that transcribes speech on-device using WhisperKit, then polishes the text with the user's choice of AI provider. Keyboard extension, meeting intelligence, and zero cloud dependency.",
  },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <main className="w-full px-5 md:px-8 pt-20 md:pt-50 md:pl-25 md:pr-25">
        <h1 className="text-5xl font-medium mb-4">Case Studies</h1>
        <p className="text-white/50 text-lg max-w-2xl mb-16">
          Real projects. Real results. Here&apos;s how we&apos;ve helped
          businesses solve problems with custom software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block rounded-lg overflow-hidden bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
            >
              <Image
                src={study.image}
                alt={`${study.title} project preview`}
                width={600}
                height={300}
                className="w-full object-cover h-56"
              />
              <div className="p-6">
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">
                  {study.category}
                </p>
                <h2 className="text-2xl font-medium mb-2 group-hover:text-white transition-colors">
                  {study.title}
                </h2>
                <p className="text-white/40 text-sm mb-1">{study.tagline}</p>
                <p className="text-white/50 text-sm mt-3">{study.summary}</p>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white text-sm mt-6 transition-colors">
                  Read Case Study <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
