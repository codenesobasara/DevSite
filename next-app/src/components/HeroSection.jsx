import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function HeroSection() {
  return (
    <main className="w-full px-5 md:px-8 pt-20 md:pt-35">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="col-span-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl pt-10 md:pl-15">
              Software Development Studio Based in Kitchener-Waterloo
            </h1>
          </div>
          <div className="pt-12 md:pt-24 text-left md:pl-24">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Built For Tomorrow</h2>
            <p className="text-white/60 text-base md:text-lg mt-4 md:mt-6 max-w-lg leading-relaxed">
              We help businesses move faster with custom software, automation,
              and strategy. No templates, no shortcuts — just real solutions
              built by developers who understand your goals.
            </p>
          </div>
        </div>

        <div className="col-span-1 mt-12 md:mt-0 md:pl-25">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="w-full md:w-1/2 pt-0 md:pt-106">
              <Card>
                <Image
                  src="/images/MedLeadsScreenSHot.png"
                  alt="MedLeads project preview"
                  width={400}
                  height={192}
                  className="w-full object-cover h-48"
                />
                <CardHeader>MedLeads</CardHeader>
                <CardContent>
                  Real-time lead capture and analytics platform for healthcare
                  trade shows. Live dashboards, rep tracking, and territory
                  management built from the ground up.
                </CardContent>
                <CardFooter>
                  <Link href="/case-studies/medleads">
                    <Button variant="white">
                      <ArrowRight />
                      View Case Study
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="w-full md:w-1/2 pt-0 md:pt-106">
              <Card>
                <Image
                  src="/images/transcribeAtron.png"
                  alt="Transcriber app project preview"
                  width={400}
                  height={192}
                  className="w-full object-cover h-48"
                />
                <CardHeader>Transcriber App</CardHeader>
                <CardContent>
                  Audio transcription tool that converts recordings into
                  clean, searchable text. Built for speed and accuracy
                  with a simple, focused interface.
                </CardContent>
                <CardFooter>
                  <Link href="/case-studies/transcribatron">
                    <Button variant="white">
                      <ArrowRight />
                      View Case Study
                    </Button>
                  </Link>
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
