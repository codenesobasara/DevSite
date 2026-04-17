import NavBar from "../components/ui/NavBar"
import TrustStatement from "@/components/TrustStatement"
import ServicesApproach from "@/components/ServicesApproach"
import HowWeWork from "@/components/HowWeWork"
import FadeSection from "../components/FadeSections"
import HeroSection from "@/components/HeroSection"
import SEO, { schemas } from "@/components/SEO"

function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        description="Custom software development and web development studio in the Waterloo Region, Ontario. Full-stack applications, websites, AI integration, and automation."
        path="/"
        schema={schemas.localBusiness}
      />
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

export default Home