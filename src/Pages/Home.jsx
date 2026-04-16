import NavBar from "../components/ui/NavBar"
import TrustStatement from "@/components/TrustStatement"
import ServicesApproach from "@/components/ServicesApproach"
import FadeSection from "../components/FadeSections"
import HeroSection from "@/components/HeroSection"

function Home() {
  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <FadeSection>
      <HeroSection/>
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

export default Home