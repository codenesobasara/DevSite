import { useState, useEffect } from 'react'
import { useDrawer } from '@/Context/DrawerContext'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, ChevronDown, Loader2, Calendar } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SERVICE_OPTIONS = [
  'Web Application Development',
  'Custom Website Development',
  'Landing Pages',
  'SEO & Web Optimization',
  'iOS Development',
  'System Integrations',
  'Workflow Automation',
  'Other',
]

const CAL_LINK = 'neso-basara-5ze3dv/discovery-call'

function CalEmbed({ name, email }) {
  const params = new URLSearchParams()
  if (name) params.set('name', name)
  if (email) params.set('email', email)
  params.set('theme', 'dark')
  const query = params.toString()

  const src = `https://cal.com/${CAL_LINK}?embed=true&${query}`

  return (
    <iframe
      src={src}
      className="w-full border-0 rounded-lg"
      style={{ height: '550px' }}
      title="Book a Discovery Call"
    />
  )
}

function ContactModal() {
  const { isOpen, setIsOpen } = useDrawer()
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  // idle | sending | sent | booking | error
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.ponterastudios.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || null,
          service: form.service,
          message: form.message,
        }),
      })

      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  function handleClose() {
    setIsOpen(false)
    setTimeout(() => {
      setForm({ name: '', email: '', company: '', service: '', message: '' })
      setStatus('idle')
    }, 300)
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
            className="fixed inset-0 bg-black/60 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          >
            <div className={`bg-[#1f1e1e] rounded-xl w-full p-8 overflow-y-auto max-h-[90vh] ${
              status === 'booking' ? 'max-w-3xl' : 'max-w-lg'
            }`}>
              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {status === 'booking' ? 'Book a Discovery Call' : "Let's Talk"}
                </h2>
                <button onClick={handleClose}>
                  <X className="text-white/60 hover:text-white transition-colors" />
                </button>
              </div>

              {/* STEP 1: Form */}
              {(status === 'idle' || status === 'sending' || status === 'error') && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-white/60 mb-1.5">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm text-white/60 mb-1.5">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-sm text-white/60 mb-1.5">
                      Company <span className="text-white/30">(optional)</span>
                    </label>
                    <Input
                      id="contact-company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm text-white/60 mb-1.5">
                      What are you inquiring about?
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="appearance-none w-full h-10 rounded-md border border-white/10 bg-white/5 px-2.5 text-sm text-white outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&:invalid]:text-white/30"
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

                  <div>
                    <label htmlFor="contact-message" className="block text-sm text-white/60 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-sm text-white placeholder:text-white/30 outline-none resize-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="white"
                    size="lg"
                    className="mt-2 w-full"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}

              {/* STEP 2: Book a call prompt */}
              {status === 'sent' && (
                <div className="text-center py-8">
                  <p className="text-lg font-medium mb-2">Message sent!</p>
                  <p className="text-white/50 text-sm mb-8">
                    Want to skip the back-and-forth and book a quick call right now?
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button
                      variant="white"
                      size="lg"
                      onClick={() => setStatus('booking')}
                    >
                      <Calendar className="size-4" />
                      Yes, book a call
                    </Button>
                    <Button
                      variant="white-outline"
                      size="lg"
                      onClick={handleClose}
                    >
                      No thanks, I'll wait
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: Cal.com embed */}
              {status === 'booking' && (
                <CalEmbed name={form.name} email={form.email} />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal
