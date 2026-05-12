"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/context/DrawerContext"

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
        One page. One goal. Built to convert visitors into customers, not just look good.
      </p>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What is a landing page?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            A landing page is a standalone web page built for a single purpose.
            Unlike your main website, which serves multiple audiences and goals,
            a landing page exists to get one specific action from one specific
            type of visitor.
          </p>
          <p>
            Businesses use landing pages for ad campaigns, product launches,
            event registrations, lead magnets, and any situation where you need
            to turn traffic into a measurable result. The best ones remove every
            distraction and guide the visitor toward one clear next step.
          </p>
        </div>
      </section>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          How does this differ from a regular website page?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
          <p>
            A regular website page is designed for exploration. A landing page is
            designed for conversion. That distinction changes everything about how
            the page is built, from the layout to the copy to the number of links
            on the page.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Regular Website Page
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Serves multiple audiences and intents</li>
              <li>Full site navigation visible</li>
              <li>Multiple calls to action competing for attention</li>
              <li>Designed for exploration and browsing</li>
              <li>Typical conversion rate of 2-5%</li>
              <li>Built for organic traffic and general discovery</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Landing Page
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>One audience, one intent</li>
              <li>No navigation — nowhere else to go</li>
              <li>One call to action, repeated strategically</li>
              <li>Designed for conversion, not exploration</li>
              <li>Typical conversion rate of 10-25%+</li>
              <li>Built for paid campaigns and targeted traffic</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Why invest in a custom landing page?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            Sending ad traffic to your homepage is burning your budget. Your
            homepage wasn&apos;t built to convert cold traffic from a specific
            campaign. It&apos;s built to introduce your business to a general
            audience. That mismatch costs you conversions every single day
            your ads are running.
          </p>
          <p>
            The difference between a homepage and a dedicated landing page is
            typically 3-5x in conversion rate. If you&apos;re spending $2,000 a
            month on ads and your homepage converts at 2%, that&apos;s 40 leads.
            A landing page converting at 10% gives you 200 leads from the
            same spend. That&apos;s not a marginal improvement, it&apos;s a
            different business.
          </p>
          <p>
            Page builders like Unbounce and Leadpages can get you started, but
            they come with monthly fees, limited customization, and performance
            tradeoffs. A custom-built landing page loads faster, converts better,
            and costs nothing to host after it&apos;s built.
          </p>
        </div>
      </section>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-8">
          How we build your landing page
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Conversion-First Design</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Every element on the page exists to move the visitor toward one
              action. Layout, copy hierarchy, button placement, and visual flow
              are all optimized for conversion, not aesthetics alone.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Fast Load Times</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Every second of load time costs you conversions. We build landing
              pages that load in under two seconds on mobile, using optimized
              assets, minimal code, and edge delivery.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Analytics & Tracking</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              You&apos;ll know exactly what&apos;s working. We set up conversion
              tracking, event monitoring, and analytics integration so you can
              measure ROI from day one and make data-driven decisions.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">A/B Testing Ready</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              The first version is never the final version. We build your landing
              page with testing infrastructure so you can run headline tests,
              layout variations, and CTA experiments without rebuilding.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">What&apos;s included</h2>
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

      <section className="mb-12 xl:mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
        <h2 className="text-xl xl:text-2xl font-medium mb-3">Ready to convert more visitors?</h2>
        <p className="text-white/50 mb-6">
          Tell us about your campaign and we&apos;ll build a landing page that
          turns your ad spend into measurable results.
        </p>
        <div className="flex gap-4">
          <Button variant="white" size="lg" onClick={() => setIsOpen(true)}>
            Let&apos;s Talk <ArrowRight className="h-4 w-4" />
          </Button>
          <Link href="/case-study">
            <Button variant="white-outline" size="lg">
              See Our Work <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
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
    </>
  )
}

export default LandingPagesPage
