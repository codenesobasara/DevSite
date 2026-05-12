"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, FileSearch, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDrawer } from "@/context/DrawerContext"
import { motion, AnimatePresence } from "framer-motion"

function SEOReportModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    try {
      let website = form.website.trim()
      if (website && !/^https?:\/\//i.test(website)) {
        website = "https://" + website
      }
      const res = await fetch("https://api.ponterastudios.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || null,
          service: `Free SEO Report - ${website}`,
          message: form.message || `Requesting free SEO report for ${website}`,
        }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  function handleClose() {
    onClose()
    setTimeout(() => {
      setForm({ name: "", email: "", company: "", website: "", message: "" })
      setStatus("idle")
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {status === "sent" ? (
                <div className="text-center py-8">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <FileSearch className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">We&apos;re on it.</h3>
                  <p className="text-white/50">
                    Expect your SEO report within 48 hours.
                  </p>
                  <Button
                    variant="white-outline"
                    size="lg"
                    className="mt-6"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-1">
                      Get a Free SEO Report
                    </h3>
                    <p className="text-white/50 text-sm">
                      We&apos;ll audit your site and send you a detailed report
                      with actionable recommendations.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">
                        Name
                      </label>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">
                        Company{" "}
                        <span className="text-white/30">(optional)</span>
                      </label>
                      <Input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">
                        Website URL
                      </label>
                      <Input
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        required
                        placeholder="www.yoursite.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">
                        Message{" "}
                        <span className="text-white/30">(optional)</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Anything specific you want us to look at?"
                        className="w-full rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-sm text-white placeholder:text-white/30 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 transition-[color,box-shadow]"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    )}

                    <Button
                      variant="white"
                      size="lg"
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Get My Free Report
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function SEOPage({ service, relatedServices, otherCategories }) {
  const { setIsOpen } = useDrawer()
  const [showReportModal, setShowReportModal] = useState(false)

  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        {service.category}
      </p>

      <h1 className="sr-only">SEO &amp; Web Optimization in Kitchener-Waterloo</h1>
      <p className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4" aria-hidden="true">
        SEO &amp; Web Optimization
      </p>
      <p className="text-xl xl:text-2xl text-white/70 mb-8">
        Get found by the people who are already looking for what you do. We
        build SEO into the architecture of your site, not as an afterthought.
      </p>

      <div className="mb-12">
        <Button
          variant="white"
          size="lg"
          onClick={() => setShowReportModal(true)}
        >
          <FileSearch className="h-4 w-4" />
          Get a Free SEO Report
        </Button>
      </div>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What is SEO and why does it matter?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            SEO stands for Search Engine Optimization. It&apos;s the practice of
            making your website easier for search engines to understand, crawl,
            and rank. When done right, it means your business shows up when
            potential customers search for the services you offer.
          </p>
          <p>
            Most businesses in the Waterloo Region rely on referrals and word of
            mouth. That works, but it doesn&apos;t scale. SEO gives you a second
            channel that compounds over time. The content you publish today can
            generate leads for years without ongoing ad spend.
          </p>
          <p>
            But SEO isn&apos;t just about keywords and blog posts. The technical
            foundation of your site, how fast it loads, how it&apos;s structured,
            whether it passes Core Web Vitals, determines whether Google even
            considers ranking it. That&apos;s where most agencies fall short. They
            focus on content and backlinks while ignoring the technical debt
            underneath.
          </p>
        </div>
      </section>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          How is this different from typical SEO services?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
          <p>
            Most SEO agencies focus on content strategy and link building.
            That&apos;s valuable, but it&apos;s only half the picture. If your site
            is slow, poorly structured, or failing Core Web Vitals, no amount of
            content will get you to page one.
          </p>
          <p>
            We approach SEO from the developer&apos;s side. We fix the technical
            problems that prevent your site from ranking, then build the
            infrastructure that makes ongoing optimization possible.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Typical SEO Agency
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Focus on content and backlinks</li>
              <li>Limited technical expertise</li>
              <li>Monthly retainer with vague deliverables</li>
              <li>Reports on rankings without fixing root causes</li>
              <li>Relies on third-party tools and plugins</li>
              <li>Surface-level site audits</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Developer-Led SEO
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Technical foundation first, content second</li>
              <li>Deep expertise in site architecture and performance</li>
              <li>Clear deliverables with measurable outcomes</li>
              <li>Fixes the code-level issues causing poor rankings</li>
              <li>Custom solutions built into your site&apos;s architecture</li>
              <li>Comprehensive audits down to the server response</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Why invest in technical SEO?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            Google&apos;s algorithm uses hundreds of ranking signals, but the
            technical ones are non-negotiable. If your site fails Core Web
            Vitals, loads slowly on mobile, or has crawl errors, you&apos;re
            starting from behind no matter how good your content is.
          </p>
          <p>
            Technical SEO is a one-time investment that keeps paying off. Fix
            your site speed once and every page benefits. Implement structured
            data once and every search result gets richer. Set up proper
            crawling and indexing once and every new page you publish gets
            discovered faster.
          </p>
          <p>
            Most businesses don&apos;t realize their site has technical SEO
            problems until they wonder why their content isn&apos;t ranking.
            The answer is almost always in the foundation, not the content.
          </p>
        </div>
      </section>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-8">
          How we optimize your site
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Technical SEO Audits</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We crawl your entire site and identify every technical issue
              affecting your rankings. Broken links, redirect chains, duplicate
              content, missing meta tags, crawl errors, and indexing problems.
              You get a prioritized list of fixes with clear impact estimates.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Core Web Vitals</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Google measures your site&apos;s real-world performance through
              Core Web Vitals: loading speed, interactivity, and visual
              stability. We optimize all three at the code level, not with
              plugins that add more bloat to an already slow site.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Structured Data & Schema</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Structured data tells search engines exactly what your content
              means. We implement JSON-LD schema markup for your business type,
              services, reviews, FAQs, and more. This enables rich snippets
              that make your search results stand out.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">On-Page Optimization</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Every page gets optimized for its target keywords. Proper heading
              hierarchy, semantic HTML, internal linking structure, image
              optimization, and meta tags that are written for both search
              engines and the humans who read them.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">What&apos;s included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            "Full technical SEO audit",
            "Core Web Vitals optimization",
            "Structured data implementation",
            "Meta tag and heading cleanup",
            "Site speed optimization",
            "Search Console and analytics setup",
            "XML sitemap and robots.txt",
            "Mobile usability fixes",
            "Ongoing monitoring and reporting",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/5"
            >
              <div className="h-2 w-2 rounded-full bg-white/40 mt-2 shrink-0" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 xl:mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
        <h2 className="text-xl xl:text-2xl font-medium mb-3">
          Find out where your site stands
        </h2>
        <p className="text-white/50 mb-6">
          We&apos;ll run a full audit on your site and show you exactly what&apos;s
          holding it back. No commitment, no sales pitch. Just a clear picture
          of what needs fixing.
        </p>
        <div className="flex gap-4">
          <Button
            variant="white"
            size="lg"
            onClick={() => setShowReportModal(true)}
          >
            <FileSearch className="h-4 w-4" />
            Get a Free SEO Report
          </Button>
          <Button
            variant="white-outline"
            size="lg"
            onClick={() => setIsOpen(true)}
          >
            Let&apos;s Talk <ArrowRight className="h-4 w-4" />
          </Button>
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

      <SEOReportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
      />
    </>
  )
}

export default SEOPage
