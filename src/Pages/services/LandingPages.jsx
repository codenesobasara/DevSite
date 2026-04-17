import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/Context/DrawerContext"

function LandingPagesPage({ service, relatedServices, otherCategories }) {
  const { setIsOpen } = useDrawer()

  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        {service.category}
      </p>

      <h1 className="sr-only">Landing Page Development in Kitchener-Waterloo</h1>
      <p className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4" aria-hidden="true">
        Landing Page Development
      </p>
      <p className="text-xl xl:text-2xl text-white/70 mb-12">
        One page. One goal. Built to convert visitors into customers, not just
        look good.
      </p>

      {/* SECTION 1: What is a landing page? */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What is a landing page?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            A landing page is a standalone page built for a single purpose.
            That purpose is usually to get someone to take one action: sign up,
            book a call, buy a product, or request a quote. It's not your
            homepage. It's not your about page. It's one page with one job.
          </p>
          <p>
            Businesses use landing pages for ad campaigns, product launches,
            event registrations, and lead generation. When you're paying for
            traffic through Google Ads or social media, you don't want to send
            people to your homepage and hope they figure out what to do. You
            send them to a page designed to convert that specific audience into
            that specific action.
          </p>
          <p>
            The best landing pages remove distractions. No navigation menu
            pulling people away. No sidebar. No footer links to your blog.
            Everything on the page exists to support the one action you want the
            visitor to take.
          </p>
        </div>
      </section>

      {/* SECTION 2: How this differs from a regular page */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          How does this differ from a regular website page?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
          <p>
            A website page serves your whole audience. It has navigation,
            multiple sections, links to other pages, and tries to serve
            everyone who lands on it. That's fine for organic traffic, but it's
            terrible for paid campaigns where you need a specific conversion.
          </p>
          <p>
            A landing page is built for a specific audience arriving from a
            specific source with a specific intent. The copy matches the ad
            they clicked. The offer matches the promise that brought them there.
            There's one clear action and everything on the page pushes toward
            it.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Regular Website Page
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Serves multiple audiences and intents</li>
              <li>Full navigation and links to other pages</li>
              <li>Multiple calls to action competing for attention</li>
              <li>Designed for exploration and browsing</li>
              <li>Conversion rate typically 2-5%</li>
              <li>Built for long-term organic traffic</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Landing Page
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Built for one audience with one intent</li>
              <li>No navigation or exit links</li>
              <li>One clear call to action, repeated</li>
              <li>Designed for conversion, not exploration</li>
              <li>Conversion rate typically 10-25%+</li>
              <li>Built for campaigns, launches, and paid traffic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why it's worth the investment */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Why invest in a custom landing page?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            If you're spending money on ads and sending traffic to your
            homepage, you're burning budget. Your homepage wasn't designed to
            convert ad traffic. It was designed to introduce your business to
            everyone. A landing page is designed to close the deal with the
            specific person who clicked your ad.
          </p>
          <p>
            The difference in conversion rate is not marginal. A well-built
            landing page can convert at 3 to 5 times the rate of a generic
            homepage. On a $2,000 monthly ad spend, that's the difference
            between 20 leads and 100. Same budget, same ads, different page.
          </p>
          <p>
            Page builders like Unbounce and Leadpages can get you a landing
            page fast, but they come with monthly fees, limited customization,
            and performance tradeoffs. A custom-built landing page loads faster,
            matches your brand exactly, and doesn't cost you $100 a month
            forever to keep live.
          </p>
        </div>
      </section>

      {/* SECTION 4: How we build it */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-8">
          How we build your landing page
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Conversion-First Design</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Every element on the page earns its place. The headline matches
              the ad copy. The social proof sits above the fold. The form is
              short enough that people actually fill it out. We design for the
              action, not for aesthetics.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Fast Load Times</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Every second of load time costs you conversions. We build landing
              pages that load in under a second on mobile. No bloated page
              builder scripts, no unnecessary frameworks. Just the code the page
              actually needs.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Analytics & Tracking</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Google Analytics, conversion pixels, UTM parameter tracking, and
              event tracking on every form submission and button click. You'll
              know exactly where your leads are coming from and what they did
              before they converted.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">A/B Testing Ready</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We build landing pages so you can test variations. Different
              headlines, different offers, different layouts. The page structure
              supports running experiments without rebuilding from scratch every
              time you want to try something new.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: What you get */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">What's included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            "Custom design matched to your campaign",
            "Mobile responsive and fast-loading",
            "Lead capture form with CRM integration",
            "Analytics and conversion tracking",
            "A/B testing infrastructure",
            "Social proof and trust elements",
            "Fast turnaround for campaign deadlines",
            "Full code ownership on handoff",
            "Post-launch optimization support",
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
          <Link to="/case-study">
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

export default LandingPagesPage
