import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { services } from "@/Data/services"
import { Link } from "react-router-dom"
import { useDrawer } from "@/Context/DrawerContext"

function ServicesApproach() {
  const [activeService, setActiveService] = useState(0)
  const { setIsOpen } = useDrawer()

  const handleToggle = (id) => {
    setActiveService(activeService === id ? -1 : id)
  }

  return (
    <>
      {/* ── Mobile / Tablet accordion ── */}
      <section className="block xl:hidden w-full px-4">
        <div className="flex flex-col">
          {services.map((service) => (
            <div key={service.id} className="border-t border-white/10">
              <button
                onClick={() => handleToggle(service.id)}
                className={`flex justify-between items-center w-full py-4 --phone-ls:py-2 cursor-pointer transition-colors duration-200 ${
                  activeService === service.id ? "text-white" : "text-white/40"
                }`}
              >
                <span className="text-base sm:text-lg font-medium">{service.name}</span>
                <span className={`text-xl transition-transform duration-200 ${
                  activeService === service.id ? "rotate-45" : ""
                }`}>+</span>
              </button>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 --phone-ls:pb-3 space-y-4 --phone-ls:space-y-2">
                      <p className="text-white/60 text-sm sm:text-base --phone-ls:text-xs leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="white" size="lg" onClick={() => setIsOpen(true)}>
                          Book a Consultation <ArrowRight />
                        </Button>
                        <Link to="/services">
                          <Button variant="white-outline" size="lg" className="w-full sm:w-auto">
                            View Services <ArrowRight />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* ── Desktop layout ── */}
      <motion.section
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        className="hidden xl:grid w-full px-24 grid-cols-2 gap-8"
      >
        <div className="flex flex-col justify-center gap-8">
          <p className="text-white/70 text-lg leading-relaxed">
            {services[activeService]?.description}
          </p>
          <div className="flex gap-4">
            <Button variant="white" size="lg" onClick={() => setIsOpen(true)}>
              Book a Consultation <ArrowRight />
            </Button>
            <Link to="/services">
              <Button variant="white-outline" size="lg">
                View Services <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex justify-between items-center py-5 border-t border-white/10 cursor-pointer transition-colors duration-200 ${
                activeService === service.id ? "text-white" : "text-white/40"
              }`}
            >
              <span className="text-lg">{service.name}</span>
              <span className={`text-xl transition-transform duration-200 ${
                activeService === service.id ? "rotate-45" : ""
              }`}>+</span>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </motion.section>
    </>
  )
}

export default ServicesApproach
