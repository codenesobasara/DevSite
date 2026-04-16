import NavBar from "@/components/ui/NavBar"
import ServicesTabs from "@/components/ServicesTabs"

export const metadata = {
  title: "Software Development Services in Kitchener-Waterloo | Slate Studio",
  description:
    "Custom web development, iOS apps, system integrations, workflow automation, and SEO services in Kitchener-Waterloo, Ontario. No templates, no page builders.",
  openGraph: {
    title: "Software Development Services | Slate Studio — Kitchener-Waterloo",
    description:
      "Web development, mobile apps, integrations, automation, and SEO. Custom software services in Kitchener-Waterloo.",
  },
  alternates: {
    canonical: "https://slatecode.dev/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <main className="w-full px-5 md:px-8 pt-20 md:pt-50 md:pl-25 md:pr-25">
        {/* Page header */}
        <div className="mb-16">
          <h1 className="text-5xl font-medium mb-4">Our Services</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Everything we build is custom, full-service, and built to last. No
            templates, no shortcuts.
          </p>
        </div>

        <ServicesTabs />
      </main>
    </div>
  )
}
