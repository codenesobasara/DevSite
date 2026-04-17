import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/Context/DrawerContext"

function WebAppsPage({ service, relatedServices, otherCategories }) {
  const { setIsOpen } = useDrawer()

  return (
    <>
      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
        {service.category}
      </p>

      <h1 className="sr-only">Custom Web Application Development in Kitchener-Waterloo</h1>
      <p className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4" aria-hidden="true">
        Custom Web Application Development
      </p>
      <p className="text-xl xl:text-2xl text-white/70 mb-12">
        Full-stack applications built from the ground up to solve real business
        problems. Not a website with a login page bolted on.
      </p>

      {/* SECTION 1: What is a web application? */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          What is a web application?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            A web application is software that runs in a browser. It's not a
            website with some forms on it. It's a tool people use to get work
            done: manage data, run workflows, serve customers, or automate
            processes that would otherwise take hours by hand.
          </p>
          <p>
            Think of the difference between a restaurant's marketing site and
            the system their staff uses to manage reservations, inventory, and
            shift schedules. The marketing site is a website. The management
            system is a web application. Different purpose, different
            architecture, different build.
          </p>
          <p>
            Web applications have user authentication, databases, APIs, business
            logic, and real-time data. They need to handle multiple users at
            once, keep data consistent, and stay fast under load. A WordPress
            plugin can't do this. A page builder can't do this. It takes
            full-stack engineering.
          </p>
        </div>
      </section>

      {/* SECTION 2: How this differs from a website */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          How does this differ from a website?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4 mb-10">
          <p>
            A website presents information. A web application processes it. If
            your users are logging in, creating records, uploading files,
            managing other users, or interacting with data in any meaningful
            way, you need an application, not a website.
          </p>
          <p>
            The tech stack is different too. Websites can get away with static
            HTML and a CMS. Applications need a backend: a server, a database,
            authentication, API endpoints, and often real-time features like
            notifications or live updates. The frontend is more complex because
            it's managing state, handling forms, and responding to user actions
            instead of just displaying pages.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Website
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Presents information to visitors</li>
              <li>Static or CMS-driven content</li>
              <li>No user accounts or authentication</li>
              <li>Minimal backend requirements</li>
              <li>Success measured by traffic and conversions</li>
              <li>Built for reading, not for doing</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Web Application
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Lets users interact with data and workflows</li>
              <li>Dynamic content driven by a database</li>
              <li>User accounts, roles, and permissions</li>
              <li>Full backend with APIs and business logic</li>
              <li>Success measured by adoption and efficiency</li>
              <li>Built for working, not just browsing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why invest in a custom application */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">
          Why build custom instead of buying off the shelf?
        </h2>
        <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
          <p>
            Off-the-shelf software solves generic problems. If your business
            works the way the software was designed to work, that's fine. But
            the moment your workflow doesn't fit the tool, you're either
            changing how you operate to match the software, or you're paying for
            workarounds that never quite work right.
          </p>
          <p>
            A custom application fits your process, not the other way around. It
            does exactly what you need, nothing more, nothing less. There are no
            monthly per-seat fees that scale with your team. There are no
            features you're paying for but never using. And there's no risk of
            the vendor sunsetting the product and leaving you scrambling.
          </p>
          <p>
            The math works out faster than most people think. A team of five
            paying $50 per seat per month for a SaaS tool is $3,000 a year. A
            team of twenty is $12,000. Over three years that's $36,000 spent on
            software you don't own and can't modify. A custom build costs more
            upfront but you own it forever.
          </p>
        </div>
      </section>

      {/* SECTION 4: How we build it */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-8">
          How we build your application
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Full-Stack Architecture</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We build the frontend and the backend. A modern frontend framework
              on the client side, a production-grade backend on the server, and
              a relational database for your data. One team owns the entire stack, which
              means no finger-pointing between a "frontend agency" and a
              "backend freelancer."
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Authentication & Roles</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              User accounts, role-based access control, team invitations, and
              permission management. Whether you need three admin users or three
              thousand end users across multiple organizations, we build the
              auth layer to match.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Database & API Design</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We design the data model, build the API endpoints, and handle
              migrations. Your data is structured, queryable, and owned by you.
              Not trapped in a third-party platform you can't export from.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
            <h3 className="text-lg font-medium mb-3">Real-Time & Integrations</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Real-time connections for live updates, webhook integrations with
              your existing tools, third-party API connections, and automated
              workflows. If your application needs to talk to other systems, we
              wire it up.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: What you get */}
      <section className="mb-10 xl:mb-16">
        <h2 className="text-2xl xl:text-3xl font-medium mb-6">What's included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            "Custom frontend built with a modern framework",
            "Production-grade backend API",
            "Relational database design and management",
            "User authentication and role management",
            "Admin dashboards and analytics",
            "Third-party API integrations",
            "Deployment and infrastructure setup",
            "Full code ownership on handoff",
            "Post-launch support and maintenance",
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
          <Link to="/case-study/medleads">
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

export default WebAppsPage
