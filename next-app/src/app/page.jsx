import NavBar from "@/components/ui/NavBar"
import TrustStatement from "@/components/TrustStatement"
import ServicesApproach from "@/components/ServicesApproach"
import HowWeWork from "@/components/HowWeWork"
import FadeSection from "@/components/FadeSections"
import HeroSection from "@/components/HeroSection"
import JsonLd from "@/components/JsonLd"
import { schemas } from "@/lib/schemas"

export const metadata = {
  title: "Pontera Studios — Custom Software & Web Development",
  description:
    "Custom software development and web development studio in the Waterloo Region, Ontario. Full-stack applications, websites, AI integration, and automation.",
  openGraph: {
    title: "Pontera Studios — Custom Software & Web Development",
    description:
      "Custom software development and web development studio in the Waterloo Region, Ontario.",
  },
  alternates: {
    canonical: "https://www.ponterastudios.com",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd data={schemas.localBusiness} />
      <NavBar agencyName="Pontera Studios" />

      <FadeSection>
        <HeroSection mobileInsert={
          <>
            <TrustStatement />
            <ServicesApproach />
          </>
        } />
      </FadeSection>

      <div className="hidden xl:block">
        <FadeSection>
          <TrustStatement />
        </FadeSection>

        <FadeSection>
          <ServicesApproach />
        </FadeSection>
      </div>

      <HowWeWork />
    </div>
  )
}
