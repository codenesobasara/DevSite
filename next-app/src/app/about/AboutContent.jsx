"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/ui/NavBar"
import { useDrawer } from "@/context/DrawerContext"
import { aboutFaq } from "./faq"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base xl:text-lg font-medium">{item.q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="pb-5 text-sm xl:text-base text-zinc-400 leading-relaxed max-w-3xl">
          {item.a}
        </p>
      )}
    </div>
  )
}

export default function AboutContent() {
  const { setIsOpen } = useDrawer()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full px-5 xl:px-24 pt-24 xl:pt-50 pb-24">
        {/* Intro */}
        <motion.section {...fadeIn} className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold leading-tight mb-6">
            Built by someone who&apos;s been on your side of the table
          </h1>
          <p className="text-base xl:text-xl text-zinc-400 leading-relaxed mb-8">
            Pontera comes from the Latin <em>pons</em>, meaning bridge.
            That&apos;s the job: connecting what your business needs with
            technology that does it well, without the jargon or the runaround.
          </p>
          <Button variant="white" onClick={() => setIsOpen(true)}>
            <ArrowRight />
            Start a conversation
          </Button>
        </motion.section>

        {/* Founder story */}
        <motion.section {...fadeIn} className="max-w-4xl mt-20 xl:mt-32">
          <div className="space-y-5 text-base xl:text-lg text-zinc-300 leading-relaxed">
            <p>
              I&apos;m Neso, the founder of Pontera Studios. I&apos;ve been
              building, breaking and fixing things on computers since I was 15.
              Alongside that, I spent more than 15 years in client-facing work:
              as a licensed real estate agent, in SaaS sales, and as a
              commercial photographer with editorial credits. That combination
              is rare in this industry. I understand the technology, and I
              understand that a website isn&apos;t a tech project. It&apos;s
              how customers decide whether to trust you.
            </p>
            <p>
              My formal training comes from Western University&apos;s
              Full-Stack Web Development program, covering modern front-end,
              back-end and database engineering. Today I build fast, modern
              websites and custom software. Everything is coded from scratch:
              no page builders, no bloated templates.
            </p>
          </div>
        </motion.section>

        {/* Small studio, deep bench */}
        <motion.section {...fadeIn} className="max-w-4xl mt-20 xl:mt-32">
          <h2 className="text-2xl xl:text-4xl font-bold mb-5">
            A small studio with a deep bench
          </h2>
          <p className="text-base xl:text-lg text-zinc-300 leading-relaxed">
            When you work with Pontera, you deal with me directly, from first
            call to launch. When a project needs more, I bring in trusted iOS
            developers and full-stack engineers. You get the attention of a
            boutique studio and the capability of a much larger team.
          </p>
        </motion.section>

        {/* Local roots */}
        <motion.section {...fadeIn} className="max-w-4xl mt-20 xl:mt-32">
          <h2 className="text-2xl xl:text-4xl font-bold mb-5">
            Proudly Canadian, rooted in Waterloo Region
          </h2>
          <p className="text-base xl:text-lg text-zinc-300 leading-relaxed">
            Pontera is based in the Waterloo Region and works with businesses
            across Kitchener, Waterloo, Cambridge, Guelph and the rest of
            Ontario and Canada. We understand the local market because
            we&apos;re part of it.
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section {...fadeIn} className="max-w-4xl mt-20 xl:mt-32">
          <h2 className="text-2xl xl:text-4xl font-bold mb-8">
            Common questions
          </h2>
          <div className="border-t border-zinc-800">
            {aboutFaq.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </motion.section>

        {/* Bottom CTA */}
        <motion.section {...fadeIn} className="max-w-4xl mt-20 xl:mt-32">
          <h2 className="text-2xl xl:text-4xl font-bold mb-4">
            Let&apos;s talk about what you&apos;re building
          </h2>
          <p className="text-base xl:text-lg text-zinc-400 leading-relaxed mb-8">
            The first call is just a conversation. We&apos;ll talk about what
            you&apos;re trying to build and whether we&apos;re the right fit to
            build it.
          </p>
          <Button variant="white" onClick={() => setIsOpen(true)}>
            <ArrowRight />
            Get in touch
          </Button>
        </motion.section>
      </main>
    </div>
  )
}
