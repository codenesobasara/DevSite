import { Button } from "@/components/ui/button"
import NavBar from "../components/ui/NavBar"
import { Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import TrustStatement from "@/components/TrustStatement"
import { ArrowRight } from "lucide-react"
import ServicesApproach from "@/components/ServicesApproach"
import FadeSection from "@/components/FadeSections"

function HeroSection(){

    return(
          <main className="w-full px-8 pt-35">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="col-span-1 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl pt-10 pl-15">
                  Software Development Studio Based in Kitchener-Waterloo
                </h1>
              </div>
              <div className="pt-24 text-left pl-24">
                <h2 className="text-7xl font-medium tracking-tight">Built For Tomorrow</h2>
                <p className="text-white/60 text-lg mt-6 max-w-lg leading-relaxed">
                  We help businesses move faster with custom software, automation,
                  and strategy. No templates, no shortcuts — just real solutions
                  built by developers who understand your goals.
                </p>
              </div>
            </div>

            <div className="col-span-1 pl-25">
              <div className="flex flex-col md:flex-row gap-8">

                <div className="w-full md:w-1/2 pt-0 md:pt-106">
                  <Card>
                    <img src="src/assets/MedLeadsScreenSHot.png" alt="Project preview" className="w-full object-cover h-48" />
                    <CardHeader>MedLeads</CardHeader>
                    <CardContent>Translating complex open banking infrastructure into clear, accessible design across web and marketing materials for enterprise clients.</CardContent>
                    <CardFooter>
                      <Button variant="white"><ArrowRight />View Case Study</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="w-full md:w-1/2 pt-0 md:pt-106">
                  <Card>
                    <img src="src/assets/transcribeAtron.png" alt="Project preview" className="w-full object-cover h-48" />
                    <CardHeader>Transcriber App</CardHeader>
                    <CardContent>Translating complex open banking infrastructure into clear, accessible design across web and marketing materials for enterprise clients.</CardContent>
                    <CardFooter>
                      <Button variant="white"><ArrowRight />View Case Study</Button>
                    </CardFooter>
                  </Card>
                </div>

              </div>
            </div>

          </div>
        </main>
    )

}

export default HeroSection