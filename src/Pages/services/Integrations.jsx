import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/Context/DrawerContext"

function IntegrationsPage({ service, relatedServices, otherCategories }) {
  const { setIsOpen } = useDrawer()

  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        AI, Integrations & Automation
      </p>

      <h1 className="sr-only">AI Integration & Automation in Kitchener-Waterloo</h1>
      <p className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4" aria-hidden="true">
        AI Integration & Automation
      </p>
      <p className="text-xl xl:text-2xl text-white/70 mb-12">
        Connect your tools, automate your workflows, and put AI to work on the
        parts of your business that eat up time but don't need a human.
      </p>

      {/* SECTION 1: What is AI integration? */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What is AI integration?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            AI integration is about taking the intelligence behind tools like
            ChatGPT and Claude and putting it to work inside your actual
            business. Not as a novelty, not as a chatbot on a website for the
            sake of having one, but as something that handles real work your
            team is doing manually today.
          </p>
          <p>
            That could be a system that reads incoming emails and routes them to
            the right person based on what they're about. It could be a tool
            that searches your internal documents and gives your team instant
            answers instead of digging through shared drives. It could be a
            customer-facing assistant that qualifies leads while you sleep. The
            chatbot on this site is an example — it has a real conversation,
            understands what the visitor needs, and books meetings without
            anyone on the team lifting a finger.
          </p>
          <p>
            The point isn't to replace people. It's to stop wasting their time
            on things a machine can handle faster and more consistently.
          </p>
        </div>
      </section>

      {/* SECTION 2: What we build — three pillars */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What does this look like in practice?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
          <p>
            This isn't one service — it's three, and most businesses need some
            combination of them. We help you figure out which ones actually
            make sense for your situation.
          </p>
        </div>

        <div className="space-y-8">
          {/* AI Integration */}
          <div className="p-8 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-xl xl:text-2xl font-medium mb-4">AI Integration</h3>
            <div className="text-white/60 text-base leading-relaxed space-y-3">
              <p>
                We look at your workflow and find the places where AI can take
                over repetitive, time-consuming tasks. Then we build it. We work
                with leading AI platforms depending on what the use case needs —
                some tasks need speed, some need depth, some need to run
                entirely on your own systems for privacy reasons.
              </p>
              <p>
                On the simpler end, that's things like the conversational
                chatbot running on this site — it talks to visitors, qualifies
                leads, and handles objections using a system prompt we designed
                around real sales conversations. It works 24/7 and never
                forgets the script.
              </p>
              <p>
                On the more involved end, we build retrieval systems that
                connect AI to your internal data. Your team asks a question in
                plain English, and the system searches your documents, manuals,
                or knowledge base and gives back a real answer with sources.
                Everything stays on your network if it needs to. Nothing gets
                sent to a third party unless you want it to.
              </p>
            </div>
          </div>

          {/* API Integration */}
          <div className="p-8 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-xl xl:text-2xl font-medium mb-4">API Integration</h3>
            <div className="text-white/60 text-base leading-relaxed space-y-3">
              <p>
                An API is how two pieces of software talk to each other. When
                you fill out a form on a website and the data shows up in a CRM
                automatically, that's an API integration. When a payment goes
                through Stripe and your accounting software creates an invoice
                without anyone touching it, that's an API integration.
              </p>
              <p>
                Most modern business tools have APIs — your CRM, your email
                platform, your payment processor, your accounting software, your
                project management tool. The problem is they don't talk to each
                other out of the box. Someone has to build the bridge, and
                that's what we do.
              </p>
              <p>
                Common examples: syncing leads from your website to HubSpot or
                Salesforce. Connecting Stripe payments to QuickBooks. Pushing
                form submissions into Slack. Pulling inventory data from a
                supplier's system into your storefront. If it has an API, we
                can connect it.
              </p>
            </div>
          </div>

          {/* Automation */}
          <div className="p-8 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-xl xl:text-2xl font-medium mb-4">Automation</h3>
            <div className="text-white/60 text-base leading-relaxed space-y-3">
              <p>
                Automation is about eliminating the tasks your team does
                repeatedly that follow the same steps every time. If someone on
                your team is copying data from one spreadsheet to another,
                sending the same follow-up email after every meeting, or
                manually generating reports every Monday morning, that's a
                workflow we can automate.
              </p>
              <p>
                Sometimes that means building workflows in automation platforms
                that connect your existing apps without writing code.
                Sometimes it means writing custom scripts that run on a
                schedule — pulling data, transforming it, and pushing it where
                it needs to go. Sometimes it's a full system we deploy that
                runs in the background and handles an entire process end to end.
              </p>
              <p>
                The goal is always the same: your team spends their time on work
                that actually requires a human, and everything else runs on its
                own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why invest in this */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Why invest in integration and automation?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            Every hour your team spends on manual data entry, copy-pasting
            between tools, or answering the same questions over and over is an
            hour they're not spending on the work that grows your business. The
            cost isn't just the salary — it's the opportunity cost of what they
            could be doing instead.
          </p>
          <p>
            Automation doesn't have to be a massive project. Sometimes the
            highest-impact change is a single integration that saves someone 30
            minutes a day. Over a year, that's 130 hours. Over a team of five,
            that's 650 hours. The math gets real very fast.
          </p>
          <p>
            And unlike hiring, automation scales without adding headcount. A
            workflow that handles 10 leads a day handles 100 the same way. An
            AI assistant that answers questions for 5 people answers them for
            500 without slowing down.
          </p>
        </div>
      </section>

      {/* SECTION 4: How we do it */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-8">
          How we build it
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Workflow Audit</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We start by understanding how your team actually works today.
              Where does data move between systems? What's manual that shouldn't
              be? Where are the bottlenecks? We map it out and identify the
              highest-impact automation opportunities.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">AI That Fits Your Data</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We choose the right AI model for the job — matching the model
              to the task based on reasoning depth, speed, and cost. For
              sensitive data, we can run models locally on
              your infrastructure so nothing leaves your network.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Custom Connectors</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We build the bridges between your tools. Whether it's a direct
              API integration, a webhook listener, or a workflow built on an
              automation platform, we connect your systems so data flows automatically
              where it needs to go.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Deploy & Monitor</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We deploy the automations, test them under real conditions, and
              set up monitoring so you know they're running. If something
              breaks or an API changes, we handle it. You shouldn't have to
              think about it once it's live.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: What you get */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">What's included</h2>
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
          Every project starts with a conversation. Tell us what's eating up
          your team's time and we'll tell you what we can automate.
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
            More Services
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

export default IntegrationsPage
