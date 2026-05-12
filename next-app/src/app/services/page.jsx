import ServicesContent from "./ServicesContent"
import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"

export const metadata = {
  title: "Services",
  description:
    "Custom web development, web applications, iOS apps, SEO, AI integration, and automation services. Everything built from scratch, no templates.",
  openGraph: {
    title: "Services | Pontera Studios",
    description:
      "Custom web development, web applications, iOS apps, SEO, AI integration, and automation services.",
  },
  alternates: {
    canonical: "https://www.ponterastudios.com/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={schemas.breadcrumbs([{name: 'Home', path: '/'}, {name: 'Services', path: '/services'}])} />
      <ServicesContent />
    </>
  )
}
