import NavBar from "@/components/ui/NavBar"
import TrustStatement from "@/components/TrustStatement"
import ServicesApproach from "@/components/ServicesApproach"
import HowWeWork from "@/components/HowWeWork"
import FadeSection from "@/components/FadeSections"
import HeroSection from "@/components/HeroSection"
export const metadata = {
  title: "Web Design & Custom Software in Kitchener-Waterloo | Pontera Studios",
  description:
    "Custom web design and software development studio serving Kitchener, Waterloo, Cambridge and Guelph. Websites, full-stack applications, AI integration and automation, all coded from scratch.",
  openGraph: {
    title: "Web Design & Custom Software in Kitchener-Waterloo | Pontera Studios",
    description:
      "Custom web design and software development studio serving Kitchener, Waterloo, Cambridge and Guelph.",
  },
  alternates: {
    canonical: "https://www.ponterastudios.com",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
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
