import ContactContent from "./ContactContent"
import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Pontera Studios. Send a message or book a discovery call. We'll get back to you within 24 hours.",
  openGraph: {
    title: "Contact | Pontera Studios",
    description:
      "Get in touch with Pontera Studios. Send a message or book a discovery call.",
  },
  alternates: {
    canonical: "https://www.ponterastudios.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schemas.breadcrumbs([{name: 'Home', path: '/'}, {name: 'Contact', path: '/contact'}])} />
      <ContactContent />
    </>
  )
}
