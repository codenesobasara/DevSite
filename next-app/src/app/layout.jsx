import "./globals.css"
import { DrawerProvider } from "@/context/DrawerContext"
import ContactDrawer from "@/components/ContactDrawer"

export const metadata = {
  metadataBase: new URL("https://www.ponterastudios.com"),
  title: {
    default: "Pontera Studios — Custom Software & Web Development",
    template: "%s | Pontera Studios",
  },
  description:
    "Custom software development and web development studio in the Waterloo Region, Ontario. Full-stack applications, websites, AI integration, and automation.",
  openGraph: {
    title: "Pontera Studios — Custom Software & Web Development",
    description:
      "Custom software development and web development studio in the Waterloo Region, Ontario.",
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
        <DrawerProvider>
          {children}
          <ContactDrawer />
        </DrawerProvider>
      </body>
    </html>
  )
}
