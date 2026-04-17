import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/Context/DrawerContext"

function CustomWebsitesPage({ service, relatedServices, otherCategories }) {
  const { setIsOpen } = useDrawer()

  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        {service.category}
      </p>

      <h1 className="sr-only">Custom Website Development in Kitchener-Waterloo</h1>
      <p className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4" aria-hidden="true">
        Custom Website Development
      </p>
      <p className="text-xl xl:text-2xl text-white/70 mb-12">
        Your business deserves more than a template. We build websites from
        scratch that are fast, rankable, and yours to own.
      </p>

      {/* SECTION 1: What is a custom website? */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What is a custom website?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            A custom website is one that's designed and coded specifically for
            your business. There's no pre-built theme underneath it. No page
            builder dragging boxes around. No plugin holding the whole thing
            together. Every line of code exists because your site needs it, and
            nothing else.
          </p>
          <p>
            Most websites in the Waterloo Region are built on WordPress with a
            purchased theme and a stack of plugins. That works for a while, until
            the theme stops getting updates, a plugin breaks after an update, or
            your site scores a 40 on Google's speed test because it's loading
            scripts for features you don't even use.
          </p>
          <p>
            A custom site doesn't have those problems. It loads only what it
            needs. It's built on a modern framework that renders pages in
            milliseconds instead of seconds. And because there's no theme or
            plugin layer between you and the code, everything on the page is
            intentional.
          </p>
        </div>
      </section>

      {/* SECTION 2: How custom differs from WordPress */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          How does this differ from WordPress?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
          <p>
            WordPress powers a lot of the internet. It's a fine tool for blogs
            and simple content sites. But when a WordPress site is used as a
            business platform, the cracks show up fast: slow load times, constant
            plugin updates, security vulnerabilities, and layouts constrained by
            whatever the theme allows.
          </p>
          <p>
            Custom websites built on modern web frameworks don't carry that
            baggage. There's no admin panel to hack, no plugins to
            patch, and no database query running on every page load. The site is
            pre-built and served from a CDN, which means it loads faster from
            anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              WordPress
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Theme-dependent design with limited flexibility</li>
              <li>Plugin updates that can break your site overnight</li>
              <li>Database-driven pages that slow down under traffic</li>
              <li>Regular security patches required</li>
              <li>Lighthouse scores typically 40-70 on mobile</li>
              <li>SEO limited by theme structure and plugin conflicts</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Custom Build
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Every element designed for your brand and goals</li>
              <li>No plugins, no theme dependencies, nothing to break</li>
              <li>Pre-rendered pages served from a global CDN</li>
              <li>No admin panel to hack, no attack surface</li>
              <li>Lighthouse scores 90+ on mobile, out of the box</li>
              <li>SEO built into the architecture, not bolted on</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why it's worth the investment */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Why is it worth the investment?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            A cheap website costs you twice. Once when you pay for it, and again
            when you pay to replace it 18 months later because it's slow, it
            can't rank, and it doesn't represent your business anymore.
          </p>
          <p>
            A custom site compounds in value. It loads fast from day one, which
            means Google ranks it higher, which means more people find you, which
            means more leads. The performance advantage isn't a nice-to-have, it
            directly affects how much business your site generates.
          </p>
          <p>
            And you own it completely. No license fees, no vendor lock-in, no
            monthly charges to keep your own site running. When we hand it off,
            it's yours. Your code, your hosting, your decision.
          </p>
        </div>
      </section>

      {/* SECTION 4: How we do it */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-8">
          How we build your website
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Modern Frameworks</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We build on modern web frameworks used by some of the largest
              companies in the world. Server-side rendering for SEO, static
              generation for speed, and a component architecture that scales
              with your business.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Custom Design</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Every page is designed for your brand. No themes, no templates, no
              dragging boxes around a page builder. Your site looks like your
              business, not like every other site on the internet.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">CMS & Database Integration</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Need to update your own content? We integrate a headless CMS
              so you can edit text, images, and pages
              without touching code. Need structured data? We build the database
              and the interface to manage it.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">SEO is Not an Add-On</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Every site we build is SEO-optimized from the ground up. Structured
              data, semantic HTML, proper heading hierarchy, fast load times, and
              Core Web Vitals performance. There is no point building a site that
              can't rank. We don't treat SEO as a separate service, it's part of
              every build.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: What you get */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">What's included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            "Fully custom design and development",
            "Mobile responsive across all devices",
            "Server-side rendering for SEO",
            "Structured data and schema markup",
            "Headless CMS integration (optional)",
            "Performance optimized — 90+ Lighthouse scores",
            "Security headers and best practices",
            "Full code ownership on handoff",
            "Post-launch support",
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
        <h2 className="text-xl xl:text-2xl font-medium mb-3">Ready to talk?</h2>
        <p className="text-white/50 mb-6">
          Every project starts with a conversation. Tell us what you're trying
          to build and we'll tell you honestly whether we're the right fit.
        </p>
        <div className="flex gap-4">
          <Button variant="white" size="lg" onClick={() => setIsOpen(true)}>
            Let's Talk <ArrowRight className="h-4 w-4" />
          </Button>
          <Link to="/case-study/focuspoint">
            <Button variant="white-outline" size="lg">
              See Our Work <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-xl xl:text-2xl font-medium mb-6">
            More {service.category} Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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

export default CustomWebsitesPage
