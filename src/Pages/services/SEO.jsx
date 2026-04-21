import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, FileSearch, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDrawer } from "@/Context/DrawerContext"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          >
            <div className="bg-[#1f1e1e] rounded-xl w-full max-w-lg p-8 overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Get Your Free SEO Report</h2>
                <button onClick={handleClose}>
                  <X className="text-white/60 hover:text-white transition-colors" />
                </button>
              </div>

              {status === "sent" ? (
                <div className="text-center py-8">
                  <p className="text-lg font-medium mb-2">We're on it.</p>
                  <p className="text-white/50 text-sm">
                    Expect your SEO report within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="seo-name" className="block text-sm text-white/60 mb-1.5">
                      Name
                    </label>
                    <Input
                      id="seo-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-10"
                    />
                  </div>

                  <div>
                    <label htmlFor="seo-email" className="block text-sm text-white/60 mb-1.5">
                      Email
                    </label>
                    <Input
                      id="seo-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-10"
                    />
                  </div>

                  <div>
                    <label htmlFor="seo-company" className="block text-sm text-white/60 mb-1.5">
                      Company <span className="text-white/30">(optional)</span>
                    </label>
                    <Input
                      id="seo-company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-10"
                    />
                  </div>

                  <div>
                    <label htmlFor="seo-website" className="block text-sm text-white/60 mb-1.5">
                      Your Website URL
                    </label>
                    <Input
                      id="seo-website"
                      name="website"
                      type="text"
                      required
                      value={form.website}
                      onChange={handleChange}
                      placeholder="yoursite.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-10"
                    />
                  </div>

                  <div>
                    <label htmlFor="seo-message" className="block text-sm text-white/60 mb-1.5">
                      Anything specific you want us to look at? <span className="text-white/30">(optional)</span>
                    </label>
                    <textarea
                      id="seo-message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. we're not ranking for our main keywords, site feels slow..."
                      className="w-full rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-sm text-white placeholder:text-white/30 outline-none resize-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="white"
                    size="lg"
                    className="mt-2 w-full"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                    {status === "sending" ? "Sending..." : "Get My Free Report"}
                  </Button>
                </form>
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
  const [reportOpen, setReportOpen] = useState(false)

  return (
    <>
      <SEOReportModal isOpen={reportOpen} onClose={() => setReportOpen(false)} />

      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        {service.category}
      </p>

      <h1 className="sr-only">SEO & Web Optimization in Kitchener-Waterloo</h1>
      <p className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4" aria-hidden="true">
        SEO & Web Optimization
      </p>
      <p className="text-xl xl:text-2xl text-white/70 mb-8">
        Get found by the people who are already looking for what you sell. No
        tricks, no shortcuts, just the technical work that makes Google pay
        attention.
      </p>

      <div className="flex gap-4 mb-10 xl:mb-16">
        <Button variant="white" size="lg" onClick={() => setReportOpen(true)}>
          <FileSearch className="size-4" />
          Get a Free SEO Report
        </Button>
      </div>

      {/* SECTION 1: What is SEO? */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What is SEO and why does it matter?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            SEO stands for search engine optimization. It's the work that
            determines whether your website shows up when someone searches for
            what you offer. If your plumbing company doesn't appear when someone
            in Kitchener types "plumber near me," you're invisible to every
            customer who's ready to hire right now.
          </p>
          <p>
            Most businesses treat SEO as something you bolt on after the site is
            built. Install a plugin, fill in some keyword fields, and hope for
            the best. That approach stopped working years ago. Modern SEO is
            technical. It's about how your site is built, how fast it loads, how
            your content is structured, and whether search engines can actually
            understand what your pages are about.
          </p>
          <p>
            The businesses ranking on page one aren't there by accident. They
            have fast sites, clean code, proper structured data, and content
            that directly answers the questions their customers are typing into
            Google.
          </p>
        </div>
      </section>

      {/* SECTION 2: How this differs from "SEO services" */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          How is this different from typical SEO services?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
          <p>
            Most SEO agencies focus on content and backlinks. They'll write blog
            posts, build directory listings, and send you a monthly report with
            keyword rankings. That's one piece of the puzzle, but it ignores the
            foundation: whether your site is technically capable of ranking in
            the first place.
          </p>
          <p>
            We're developers, not marketers. We fix the things that marketing
            agencies can't: your site's architecture, its rendering strategy,
            page speed, structured data, heading hierarchy, Core Web Vitals, and
            the dozens of technical signals that Google uses to decide who gets
            page one and who gets buried.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Typical SEO Agency
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Blog posts and keyword stuffing</li>
              <li>Directory submissions and backlink building</li>
              <li>Monthly ranking reports</li>
              <li>Can't touch your site's code or architecture</li>
              <li>Works around technical problems instead of fixing them</li>
              <li>Results plateau when the foundation is weak</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Developer-Led SEO
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Technical audits that find the real problems</li>
              <li>Code-level fixes for speed, structure, and rendering</li>
              <li>Structured data and schema markup implementation</li>
              <li>Core Web Vitals optimization</li>
              <li>Fixes the foundation so content actually ranks</li>
              <li>Results compound because the architecture is right</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why it's worth the investment */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Why invest in technical SEO?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            You can write the best content in the world, but if your site takes
            four seconds to load on mobile, Google won't rank it. If your
            heading structure is broken, Google can't understand what your page
            is about. If you don't have structured data, you're invisible to AI
            search engines like ChatGPT, Perplexity, and Google's AI Overviews.
          </p>
          <p>
            Technical SEO is the foundation that everything else builds on.
            Content strategy, backlink campaigns, and local SEO all perform
            better when the site underneath them is fast, well-structured, and
            technically sound.
          </p>
          <p>
            The return is compounding. Unlike paid ads that stop generating
            leads the moment you stop paying, organic search traffic grows over
            time. A page that ranks today will still rank next month and next
            year, as long as the technical foundation holds.
          </p>
        </div>
      </section>

      {/* SECTION 4: How we do it */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-8">
          How we optimize your site
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Technical SEO Audits</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We crawl your entire site and identify every technical issue
              holding you back. Broken pages, missing meta tags, duplicate
              content, slow load times, rendering problems, and indexing issues.
              You get a full report with priorities, not a vague list of
              suggestions.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Core Web Vitals</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Google measures three things on every page: how fast the main
              content loads (LCP), how quickly the page responds to interaction
              (INP), and how much the layout shifts while loading (CLS). We
              optimize all three at the code level, not with plugins.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Structured Data & Schema</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We add JSON-LD structured data to every page: Organization,
              LocalBusiness, Service, FAQPage, BreadcrumbList, and more. This
              is how you get rich results in Google and how AI search engines
              understand and cite your business.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">On-Page Optimization</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Proper heading hierarchy, unique meta titles and descriptions on
              every page, semantic HTML, image alt text, internal linking
              strategy, and canonical URLs. The fundamentals that most sites
              get wrong because nobody checked.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: What you get */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">What's included</h2>
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

      {/* CTA */}
      <section className="mb-12 xl:mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
        <h2 className="text-xl xl:text-2xl font-medium mb-3">
          Find out where your site stands
        </h2>
        <p className="text-white/50 mb-6">
          We'll crawl your site, run it through the same tools we use on every
          project, and send you a plain-language report on what's working, what's
          broken, and what to fix first. No cost, no obligation.
        </p>
        <div className="flex gap-4">
          <Button variant="white" size="lg" onClick={() => setReportOpen(true)}>
            <FileSearch className="size-4" />
            Get a Free SEO Report
          </Button>
          <Button variant="white-outline" size="lg" onClick={() => setIsOpen(true)}>
            Let's Talk <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-xl xl:text-2xl font-medium mb-6">
            More {service.category} Services
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                to={`/services/${related.id}`}
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
                      to={`/services/${tab.id}`}
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

export default SEOPage
