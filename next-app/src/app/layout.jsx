import "./globals.css"
import { DrawerProvider } from "@/context/DrawerContext"
import ContactDrawer from "@/components/ContactDrawer"
import ChatWidget from "@/components/ui/ChatWidget"

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
    icon: "/favicon.svg",
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
          <ChatWidget />
        </DrawerProvider>
      </body>
    </html>
  )
}
