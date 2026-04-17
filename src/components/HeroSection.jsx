import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const caseStudies = [
  {
    slug: "focuspoint",
    title: "Focus Point Media",
    image: "/images/focuspoint-hero.webp",
    description:
      "A dual-market portfolio and lead generation platform for a commercial photography studio. Custom CMS, CRM integration, and global edge deployment.",
    brief: "Portfolio & lead gen platform for a commercial photography studio.",
  },
  {
    slug: "basara",
    title: "Basara",
    image: "/images/basara-hero.webp",
    description:
      "A hyperlocal real estate market intelligence platform covering 7 cities and 50+ neighbourhoods with automated data pipelines and AI narratives.",
    brief: "Real estate market intelligence across 7 cities and 50+ neighbourhoods.",
  },
  {
    slug: "medleads",
    title: "MedLeads",
    image: "/images/MedLeadsScreenSHot.webp",
    description:
      "A full-stack event analytics platform with real-time lead capture, sales rep performance tracking, and territory management for healthcare trade shows.",
    brief: "Real-time lead capture and analytics for healthcare trade shows.",
  },
  {
    slug: "transcribatron",
    title: "Transcribatron",
    image: "/images/transcribeAtron.webp",
    description:
      "A native iOS app that transcribes speech entirely on-device, then polishes the text with the user's choice of AI provider.",
    brief: "On-device speech transcription with AI polish. Native iOS.",
  },
]

const FULL_TEXT = "Build Something Great\nFor Your Business"
const TYPE_SPEED = 40 // ms per character

function HeroSection({ mobileInsert }) {
  const [charCount, setCharCount] = useState(0)
  const typingDone = charCount >= FULL_TEXT.length

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setCharCount(i)
      if (i >= FULL_TEXT.length) {
        clearInterval(interval)
      }
    }, TYPE_SPEED)
    return () => clearInterval(interval)
  }, [])

  const displayedText = FULL_TEXT.slice(0, charCount)

  return (
    <>
      {/* ── Mobile / Tablet layout (up to xl) ── */}
      <main className="block xl:hidden w-full px-4 pt-24 --phone-ls:pt-16 pb-8 --phone-ls:pb-4">
        <div className="flex flex-col --phone-ls:flex-row --phone-ls:items-start gap-4 --phone-ls:gap-6">
          {/* Hero heading */}
          <div className="px-2 sm:px-4 --phone-ls:flex-1">
            <h1 className="text-[8vw] sm:text-[6vw] md:text-[5vw] --phone-ls:text-[4vw] font-medium tracking-tight leading-[1.05] whitespace-pre-line">
              {displayedText}
            </h1>
            {typingDone && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-white/50 text-sm sm:text-base mt-4 --phone-ls:mt-2 max-w-md"
              >
                Custom software, web platforms, and AI integration for growing businesses.
              </motion.p>
            )}
          </div>

          {/* Case studies */}
          {typingDone && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-2 sm:px-4 --phone-ls:flex-1"
          >
            <div className="flex items-center justify-between mb-5 --phone-ls:mb-3">
              <h2 className="text-lg sm:text-xl font-medium">Our Work</h2>
              <Link to="/case-study" className="text-white/40 text-xs hover:text-white transition-colors">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:max-w-md md:mx-auto">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  to={`/case-study/${study.slug}`}
                  className="group"
                >
                  <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 sm:p-5 md:p-4 aspect-square md:aspect-[4/3] --phone-ls:aspect-[4/3] flex flex-col justify-between transition-all duration-200 group-hover:border-white/25">
                    <p className="text-white/40 text-[11px] sm:text-xs leading-snug">
                      {study.brief}
                    </p>
                    <span className="text-white font-medium text-sm sm:text-base md:text-sm leading-tight">
                      {study.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
          )}

          {/* Mobile insert (TrustStatement + ServicesApproach) */}
          {typingDone && mobileInsert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              {mobileInsert}
            </motion.div>
          )}
        </div>
      </main>

      {/* ── Desktop layout (xl and up) ── */}
      <main className="hidden xl:block w-full px-8 pt-28">
        <div className="grid grid-cols-2 items-start gap-[3vw]">
          <div>
            <h1 className="text-[5vw] font-medium tracking-tight leading-[1.05] pt-10 pl-15 whitespace-pre-line">
              {displayedText}
            </h1>
          </div>

          <motion.div
            className="pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={typingDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-[1.5vw]">
              {caseStudies.filter(s => s.slug === "focuspoint" || s.slug === "medleads").map((study, i) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={typingDone ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                >
                  <Card>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={study.image}
                        alt={`${study.title} project preview`}
                        className="w-full h-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : "auto"}
                      />
                    </div>
                    <CardHeader>{study.title}</CardHeader>
                    <CardContent>{study.description}</CardContent>
                    <CardFooter>
                      <Link to={`/case-study/${study.slug}`} aria-label={`View ${study.title} case study`}>
                        <Button variant="white">
                          <ArrowRight />
                          View Case Study
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              animate={typingDone ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link to="/case-study">
                <Button variant="white-outline" className="w-full">
                  See All Case Studies <ArrowRight />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default HeroSection
