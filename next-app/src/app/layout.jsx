import "./globals.css"
import { DrawerProvider } from "@/context/DrawerContext"
import ContactDrawer from "@/components/ContactDrawer"
import ChatWidget from "@/components/ui/ChatWidget"

export const metadata = {
  metadataBase: new URL("https://slatecode.dev"),
  title: {
    default: "Slate Studio — Custom Software Development Agency | Kitchener-Waterloo",
    template: "%s | Slate Studio",
  },
  description:
    "Custom software development agency in Kitchener-Waterloo, Ontario. Web apps, mobile apps, integrations, automation, and SEO built by real developers. No templates, no shortcuts.",
  openGraph: {
    title: "Slate Studio — Custom Software Development | Kitchener-Waterloo",
    description:
      "Custom software agency in Kitchener-Waterloo. Web development, iOS apps, integrations, automation, and SEO.",
    type: "website",
    siteName: "Slate Studio",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://slatecode.dev",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DrawerProvider>
          {children}
          <ContactDrawer />
          <ChatWidget />
        </DrawerProvider>
      </body>
    </html>
  )
}
