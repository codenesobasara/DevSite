import NavBar from "@/components/ui/NavBar"
import TrustStatement from "@/components/TrustStatement"
import ServicesApproach from "@/components/ServicesApproach"
import FadeSection from "@/components/FadeSections"
import HeroSection from "@/components/HeroSection"

export const metadata = {
  title: "Slate Studio — Custom Software Development Agency | Kitchener-Waterloo, Ontario",
  description:
    "Custom software development agency in Kitchener-Waterloo, Ontario. We build web apps, websites, iOS apps, integrations, and automation. No templates, no shortcuts.",
  openGraph: {
    title: "Slate Studio — Custom Software Development | Kitchener-Waterloo",
    description:
      "Software agency in Kitchener-Waterloo building custom web apps, mobile apps, integrations, and automation for growing businesses.",
  },
  alternates: {
    canonical: "https://slatecode.dev",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <FadeSection>
        <HeroSection />
      </FadeSection>

      <FadeSection>
        <TrustStatement />
      </FadeSection>

      <FadeSection>
        <ServicesApproach />
      </FadeSection>
    </div>
  )
}
