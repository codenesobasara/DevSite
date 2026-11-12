import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { DrawerProvider } from "@/context/DrawerContext"
import ContactDrawer from "@/components/ContactDrawer"
import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"

export const metadata = {
  metadataBase: new URL("https://www.ponterastudios.com"),
  title: {
    default: "Web Design & Custom Software in Kitchener-Waterloo | Pontera Studios",
    template: "%s | Pontera Studios",
  },
  description:
    "Custom web design and software development studio serving Kitchener, Waterloo, Cambridge and Guelph. Websites, full-stack applications, AI integration and automation, all coded from scratch.",
  openGraph: {
    title: "Web Design & Custom Software in Kitchener-Waterloo | Pontera Studios",
    description:
      "Custom web design and software development studio serving Kitchener, Waterloo, Cambridge and Guelph.",
    type: "website",
    siteName: "Pontera Studios",
    locale: "en_CA",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.ponterastudios.com",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="font" type="font/woff2" href="/fonts/dm-sans-latin.woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd data={schemas.localBusiness} />
        <DrawerProvider>
          {children}
          <ContactDrawer />
        </DrawerProvider>
        <GoogleAnalytics gaId="G-YQD14C49NW" />
      </body>
    </html>
  )
}
