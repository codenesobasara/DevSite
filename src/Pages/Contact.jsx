import { useState } from "react"
import { Send, Loader2, ChevronDown, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NavBar from "@/components/ui/NavBar"
import SEO, { schemas } from "@/components/SEO"

const SERVICE_OPTIONS = [
  "Web Application Development",
  "Custom Website Development",
  "Landing Pages",
  "SEO & Web Optimization",
  "iOS Development",
  "AI Integration & Automation",
  "Other",
]

const CAL_LINK = "neso-basara-5ze3dv/discovery-call"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("https://api.ponterastudios.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || null,
          service: form.service,
          message: form.message,
        }),
      })

      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <SEO
        title="Contact"
        description="Get in touch with Pontera Studios. Send a message or book a discovery call. We'll get back to you within 24 hours."
        path="/contact"
        schema={schemas.breadcrumbs([{name: 'Home', path: '/'}, {name: 'Contact', path: '/contact'}])}
      />
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full px-4 xl:px-24 pt-24 xl:pt-50">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">Contact</h1>
        <p className="text-white/50 text-base xl:text-lg max-w-2xl mb-8 xl:mb-16">
          Have a project in mind? Send us a message or book a call directly.
          We'll get back to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center">
          {/* Left — Contact Form */}
          <div>
            <h2 className="text-xl xl:text-2xl font-medium mb-8">Send a Message</h2>

            {status === "sent" ? (
              <div className="py-12">
                <p className="text-xl font-medium mb-2">Message sent.</p>
                <p className="text-white/50">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm text-white/60 mb-1.5">
                      Name
                    </label>
                    <Input
                      id="c-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm text-white/60 mb-1.5">
                      Email
                    </label>
                    <Input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-company" className="block text-sm text-white/60 mb-1.5">
                      Company <span className="text-white/30">(optional)</span>
                    </label>
                    <Input
                      id="c-company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-service" className="block text-sm text-white/60 mb-1.5">
                      What are you inquiring about?
                    </label>
                    <div className="relative">
                      <select
                        id="c-service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="appearance-none w-full h-11 rounded-md border border-white/10 bg-white/5 px-2.5 text-sm text-white outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&:invalid]:text-white/30"
                      >
                        <option value="" disabled hidden>Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-[#1f1e1e] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-sm text-white/60 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-sm text-white placeholder:text-white/30 outline-none resize-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="white"
                  size="lg"
                  className="w-full xl:w-auto"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Send className="size-4" />
                  )}
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Right — Discovery Call CTA */}
          <div className="p-6 xl:p-10 rounded-lg bg-white/[0.03] border border-white/5">
            <Calendar className="size-8 text-white/40 mb-6" />
            <h2 className="text-xl xl:text-2xl font-medium mb-3">
              Prefer to talk it through?
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Skip the form and book a quick discovery call. 15 minutes, no
              pressure. We'll talk about what you're trying to build and whether
              we're the right fit.
            </p>
            <a
              href={`https://cal.com/${CAL_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="white" size="lg">
                Book a Discovery Call <ArrowRight className="size-4" />
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
