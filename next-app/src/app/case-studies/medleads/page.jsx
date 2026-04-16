import NavBar from "@/components/ui/NavBar"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "MedLeads — Event Lead Intelligence Platform | Slate Studio Case Study",
  description:
    "How Slate Studio built MedLeads, a real-time lead capture and analytics platform for healthcare trade shows. Full-stack web application built in Kitchener-Waterloo with Angular, Node.js, and WebSockets.",
  openGraph: {
    title: "MedLeads Case Study — Slate Studio | Kitchener-Waterloo",
    description:
      "Real-time lead intelligence for medical events. Full-stack platform built by Slate Studio in Kitchener-Waterloo.",
  },
  alternates: {
    canonical: "https://slatecode.dev/case-studies/medleads",
  },
}

const techStack = [
  "Angular",
  "Node.js",
  "Express",
  "PostgreSQL",
  "WebSockets",
  "Material Design",
  "JWT Auth",
  "ApexCharts",
]

const features = [
  {
    title: "Real-Time Lead Capture",
    description:
      "Sales reps scan attendee badges and the data flows instantly across the platform. No more clipboards, no more spreadsheets passed around after the event. Every lead is tracked the moment it happens.",
  },
  {
    title: "Live Booth Analytics",
    description:
      "Vendors see exactly how their booth is performing while the event is still running. Total scans, active reps, unique attendees, peak hours, and top performers, all updating in real time through WebSocket connections.",
  },
  {
    title: "Sales Rep Performance Tracking",
    description:
      "Individual performance dashboards for every rep on the floor. Scans per hour, daily breakdowns, attendee lists, and comparisons against the booth average. Managers know who is producing and who needs support.",
  },
  {
    title: "Territory Management",
    description:
      "Multi-level geographic territory assignment from country down to neighborhood. Vendors assign reps to specific regions so follow-ups are handled by the right person, not whoever grabbed the lead first.",
  },
  {
    title: "Shift Scheduling",
    description:
      "Built-in shift management so vendors can schedule reps across multi-day events. The system tracks who is on the floor and when, tying activity data directly to scheduled hours.",
  },
  {
    title: "Multi-Role Access",
    description:
      "Separate dashboards and permissions for event hosts, vendors, and sales reps. Hosts see event-wide metrics across all vendors. Vendors see their own booth data. Reps see their own performance. Everyone gets exactly what they need.",
  },
]

const results = [
  { label: "Lead capture method", value: "Fully digital" },
  { label: "Data availability", value: "Real-time" },
  { label: "Rep performance visibility", value: "Per-hour granularity" },
  { label: "Follow-up assignment", value: "Territory-based" },
  { label: "Event formats supported", value: "In-person, hybrid, virtual" },
]

export default function MedLeadsCaseStudy() {
  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <main className="w-full max-w-4xl mx-auto px-5 md:px-8 pt-20 md:pt-50">
        {/* Breadcrumb */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          All Case Studies
        </Link>

        {/* Header */}
        <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
          Web Application
        </p>
        <h1 className="text-5xl font-medium mb-4">MedLeads</h1>
        <p className="text-2xl text-white/70 mb-8">
          Real-time lead intelligence for medical events
        </p>

        {/* Hero image */}
        <div className="rounded-lg overflow-hidden border border-white/10 mb-16">
          <Image
            src="/images/MedLeadsScreenSHot.png"
            alt="MedLeads platform dashboard"
            width={900}
            height={500}
            className="w-full object-cover"
          />
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-6">The Problem</h2>
          <div className="text-white/60 text-lg leading-relaxed space-y-4">
            <p>
              Medical trade shows and healthcare conferences are high-stakes
              environments. Pharmaceutical companies and medical device
              manufacturers spend tens of thousands of dollars on booth space,
              travel, and staffing. And most of them walk away with a stack of
              business cards and a spreadsheet someone filled in on the flight
              home.
            </p>
            <p>
              There is no visibility into which reps are actually producing.
              No way to tell if the busiest hours are being staffed properly.
              No system for making sure leads get followed up by the right
              person in the right territory. The data exists, but it is
              scattered, delayed, and mostly useless by the time anyone looks
              at it.
            </p>
            <p>
              Event hosts have the same blind spot. They know vendors paid
              for space, but they have no data on engagement, foot traffic,
              or which parts of the event are driving the most value.
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-6">What We Built</h2>
          <div className="text-white/60 text-lg leading-relaxed space-y-4">
            <p>
              MedLeads is a full-stack event intelligence platform built from
              the ground up. It replaces the entire lead capture workflow with
              a digital system that starts working the moment the first
              attendee walks up to a booth and does not stop until every lead
              has been assigned, tracked, and followed up on.
            </p>
            <p>
              The platform serves three distinct user types, each with their
              own dashboard. Event hosts get a bird&apos;s-eye view of the
              entire event. Vendors get deep analytics on their booth
              performance and sales team. Reps get a clean, focused view of
              their own numbers.
            </p>
            <p>
              Everything updates in real time. When a rep scans a badge, the
              vendor dashboard refreshes. When a vendor&apos;s numbers spike,
              the host sees it. There is no waiting, no batch processing, no
              end-of-day reports. The data is live.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm border border-white/10 text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-8">The Impact</h2>
          <div className="space-y-0">
            {results.map((result) => (
              <div
                key={result.label}
                className="flex justify-between items-center py-5 border-t border-white/10"
              >
                <span className="text-white/50">{result.label}</span>
                <span className="text-white font-medium">{result.value}</span>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </section>

        {/* Architecture decisions */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-6">How We Approached It</h2>
          <div className="text-white/60 text-lg leading-relaxed space-y-4">
            <p>
              The biggest technical challenge was real-time data at scale.
              Medical conferences can have hundreds of vendors and thousands
              of attendees. Every scan needs to propagate instantly to the
              right dashboards without bogging down the system.
            </p>
            <p>
              We built a WebSocket layer that broadcasts scan events to
              connected clients based on their role and permissions. Vendors
              only receive data for their own booth. Hosts receive
              event-wide aggregates. This keeps the payload small and the
              updates fast, even during peak traffic hours.
            </p>
            <p>
              On the backend, we designed the analytics queries to be
              composable. Instead of one monolithic reporting endpoint, each
              metric, scans per hour, top reps, peak days, is its own
              optimized query. The frontend assembles the dashboard from
              these building blocks, which means we can add new KPIs without
              touching existing ones.
            </p>
            <p>
              Authentication uses JWT with refresh tokens and role-based
              access control across five user types. Sales reps are onboarded
              through an email invite system with time-limited tokens, so
              vendors can add their team without sharing credentials.
            </p>
          </div>
        </section>

        {/* Status */}
        <section className="mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-white/30 text-xs uppercase tracking-wider mb-3">
            Project Status
          </p>
          <h3 className="text-2xl font-medium mb-3">
            Currently in Development
          </h3>
          <p className="text-white/50 leading-relaxed">
            MedLeads is actively being built and is not yet publicly available.
            The core platform, including lead capture, real-time analytics, rep
            management, and territory assignment, is functional and undergoing
            testing. We are working toward a launch that coincides with the
            upcoming medical conference season.
          </p>
        </section>

        {/* Back link */}
        <div className="mb-20 border-t border-white/10 pt-8">
          <Link
            href="/case-studies"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            &larr; Back to all case studies
          </Link>
        </div>
      </main>
    </div>
  )
}
