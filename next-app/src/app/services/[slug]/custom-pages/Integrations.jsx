"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/context/DrawerContext"

function IntegrationsPage({ service, relatedServices, otherCategories }) {
  const { setIsOpen } = useDrawer()

  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        AI, Integrations &amp; Automation
      </p>

      <h1 className="sr-only">AI Integration &amp; Automation in Kitchener-Waterloo</h1>
      <p className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4" aria-hidden="true">
        AI Integration &amp; Automation
      </p>
      <p className="text-xl xl:text-2xl text-white/70 mb-12">
        Connect your tools, automate your workflows, and put AI to work on the
        parts of your business that eat up time but don&apos;t need a human.
      </p>

      {/* Section 1: What is AI integration? */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What is AI integration?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            AI integration means embedding artificial intelligence into the tools
            and workflows your business already uses. It&apos;s not about replacing
            your software stack or building something from scratch. It&apos;s about
            making the systems you already rely on smarter, faster, and more
            capable.
          </p>
          <p>
            That might look like a chatbot on your website that actually
            understands your services and can answer customer questions at 2 AM.
            Or it might be a retrieval system that lets your team search internal
            documents using natural language instead of digging through folder
            structures. Or it might be an automated pipeline that takes a form
            submission, enriches it with data, and routes it to the right person
            without anyone lifting a finger.
          </p>
          <p>
            The goal is never to replace people. It&apos;s to free them from the
            repetitive, low-value tasks that burn hours every week so they can
            focus on the work that actually moves the business forward.
          </p>
        </div>
      </section>

      {/* Section 2: What does this look like in practice? */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What does this look like in practice?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
          <p>
            Every business has different pain points, but the solutions tend to
            fall into three categories. Here&apos;s what each one means and how we
            approach it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Card 1: AI Integration */}
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-4">AI Integration</h3>
            <div className="text-white/50 text-sm leading-relaxed space-y-3">
              <p>
                AI integration is about adding intelligence to your existing
                tools. This could mean building a chatbot that&apos;s trained on your
                specific business data, so it gives accurate answers instead of
                generic ones. It could mean setting up a retrieval-augmented
                generation system that lets your team ask questions about internal
                documents and get real answers, with sources.
              </p>
              <p>
                We work with large language models, embedding pipelines, and
                vector databases to build AI features that are grounded in your
                data. No hallucinations about services you don&apos;t offer. No vague
                responses. Just useful, accurate output that saves your team time
                and gives your customers better answers.
              </p>
              <p>
                Every AI integration we build respects your data privacy. Your
                business data stays under your control. We don&apos;t send it through
                third-party training pipelines, and we design architectures that
                keep sensitive information where it belongs.
              </p>
            </div>
          </div>

          {/* Card 2: API Integration */}
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-4">API Integration</h3>
            <div className="text-white/50 text-sm leading-relaxed space-y-3">
              <p>
                Most businesses run on a collection of software that doesn&apos;t talk
                to each other. Your CRM doesn&apos;t know about your invoicing tool.
                Your email platform doesn&apos;t sync with your project management
                system. Your payment processor sends data to one place while your
                reporting dashboard pulls from another.
              </p>
              <p>
                API integration solves that. We connect your tools so data flows
                between them automatically. When a new lead comes in through your
                website, it gets added to your CRM, triggers a Slack
                notification, and starts an email sequence, all without manual
                input. When a payment clears in Stripe, it updates your
                accounting software and marks the project as paid.
              </p>
              <p>
                We&apos;ve integrated with CRMs, payment platforms like Stripe,
                communication tools like Slack and email, project management
                software, accounting systems, and custom internal tools. If it
                has an API, we can connect it.
              </p>
            </div>
          </div>

          {/* Card 3: Automation */}
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-4">Automation</h3>
            <div className="text-white/50 text-sm leading-relaxed space-y-3">
              <p>
                Automation is about eliminating the repetitive tasks that eat
                your day. Data entry, status updates, report generation, follow-up
                emails, file organization, the stuff that has to happen but
                doesn&apos;t require creative thinking or decision-making.
              </p>
              <p>
                We build automations using platforms like Zapier and n8n when
                they&apos;re the right fit, and custom scripts when they&apos;re not.
                Sometimes a simple Zapier workflow handles the job perfectly.
                Other times, you need a custom-built automation that runs on a
                schedule, processes data in a specific way, or handles edge cases
                that no-code platforms can&apos;t manage.
              </p>
              <p>
                The result is the same either way: work that used to take hours
                happens in seconds, without errors, without oversight, and
                without anyone wondering if they forgot to do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why invest in integration and automation? */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Why invest in integration and automation?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            Time is the most expensive resource in any business. Every minute
            your team spends on a task that could be automated is a minute they&apos;re
            not spending on revenue-generating work, client relationships, or
            strategic thinking.
          </p>
          <p>
            Here&apos;s the math. If your team saves 30 minutes a day through
            automation, that&apos;s 2.5 hours a week. Over a year, that&apos;s roughly 130
            hours, more than three full work weeks of time returned to your
            business. And that&apos;s a conservative estimate for a single workflow.
            Most businesses have dozens of processes that can be streamlined.
          </p>
          <p>
            Integration and automation also let you scale without scaling your
            headcount. When your systems handle the routine work, you can take on
            more clients, process more orders, and manage more complexity without
            hiring more people to do manual tasks. That&apos;s how small teams punch
            above their weight.
          </p>
        </div>
      </section>

      {/* Section 4: How we build it */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-8">
          How we build it
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Workflow Audit</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We start by mapping your current workflows. Where does data move
              manually? What tasks repeat daily or weekly? Where do things fall
              through the cracks? This audit identifies the highest-value
              automation opportunities.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">AI That Fits Your Data</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              If AI is part of the solution, we design it around your actual
              data. We build retrieval pipelines, fine-tune prompts, and set up
              guardrails so the AI gives useful, accurate results instead of
              generic output.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Custom Connectors</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We build the integrations that connect your tools. Whether
              it&apos;s syncing your CRM with your email platform or connecting
              your payment processor to your accounting system, we write the
              code that makes your tools work together.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Deploy &amp; Monitor</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We deploy your automations and integrations with monitoring and
              alerting built in. If something fails, you know about it
              immediately. We also provide documentation so your team understands
              exactly what&apos;s running and how it works.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: What's included */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">What&apos;s included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            "Workflow audit and opportunity mapping",
            "AI chatbots and conversational assistants",
            "Internal knowledge search systems",
            "CRM and email platform integrations",
            "Payment and accounting connections",
            "Custom scripts and scheduled automations",
            "Workflow automation platform setup",
            "Monitoring and error alerting",
            "Full documentation and handoff",
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
          Every project starts with a conversation. Tell us what you&apos;re trying
          to build and we&apos;ll tell you honestly whether we&apos;re the right fit.
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-xl xl:text-2xl font-medium mb-6">
            More Services
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

export default IntegrationsPage
