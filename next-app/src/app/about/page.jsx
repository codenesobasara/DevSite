import AboutContent from "./AboutContent"
import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"
import { aboutFaq } from "./faq"

export const metadata = {
  title: "About",
  description:
    "Pontera Studios is a custom web and software development studio in the Waterloo Region, founded by Neso Basara. Fully custom builds, no templates, no offshoring. Serving Kitchener, Waterloo, Cambridge and Guelph.",
  openGraph: {
    title: "About | Pontera Studios",
    description:
      "A boutique web and software studio in the Waterloo Region. Fully custom builds, no templates, no offshoring.",
  },
  alternates: {
    canonical: "https://www.ponterastudios.com/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={schemas.breadcrumbs([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <JsonLd data={schemas.aboutPage} />
      <JsonLd data={schemas.person} />
      <JsonLd data={schemas.faq(aboutFaq)} />
      <AboutContent />
    </>
  )
}
