"use client"

import { useRef, useState } from "react"
import { useDrawer } from "@/context/DrawerContext"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const serviceOptions = [
  "Web Development",
  "Mobile Development",
  "Integrations & Automation",
  "SEO",
]

function ContactModal() {
  const { isOpen, setIsOpen } = useDrawer()
  const [selectedService, setSelectedService] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const openedAt = useRef(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    // Honeypot — bots fill hidden fields, humans don't
    if (form.elements.website.value) return

    // Timing — reject if submitted faster than 3 seconds
    if (Date.now() - openedAt.current < 3000) return

    // TODO: wire up to backend
    setSubmitted(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSubmitted(false)
    setSelectedService("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
          />

          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              onAnimationComplete={() => { openedAt.current = Date.now() }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 relative"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-medium mb-3">We'll be in touch</h2>
                  <p className="text-white/50">
                    Thanks for reaching out. Someone from the team will get back to you shortly.
                  </p>
                  <Button
                    variant="white"
                    className="mt-6"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-medium mb-1">Let's Talk</h2>
                  <p className="text-white/40 text-sm mb-8">
                    Tell us a bit about what you need and we'll get back to you.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Honeypot — invisible to humans, bots auto-fill it */}
                    <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Name</label>
                      <Input
                        name="name"
                        required
                        placeholder="Your name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11"
                      />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11"
                      />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Company</label>
                      <Input
                        name="company"
                        placeholder="Your company (optional)"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11"
                      />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">
                        What are you looking for?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((name) => (
                          <button
                            key={name}
                            type="button"
                            onClick={() => setSelectedService(name)}
                            className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
                              selectedService === name
                                ? "bg-white text-[#111] border-white"
                                : "bg-transparent text-white/60 border-white/15 hover:border-white/40"
                            }`}
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="service" value={selectedService} />
                    </div>

                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">
                        Anything else?
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Brief description of your project or goals"
                        className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 resize-none"
                      />
                    </div>

                    <Button type="submit" variant="white" size="lg" className="w-full mt-1">
                      Send Inquiry <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal
