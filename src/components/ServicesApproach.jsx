import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { services } from "@/Data/services"
import { Link } from "react-router-dom"

function ServicesApproach() {
  const [activeService, setActiveService] = useState(0)
return (
    <motion.div 
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}
    >
      <section className="w-full px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center gap-8 order-2 md:order-1">
          <p className="text-white/70 text-lg leading-relaxed">
            {services[activeService].description}
          </p>
          <div className="flex gap-4">
            <Button variant="white" size="lg">
              Book a Consultation <ArrowRight />
            </Button>
            <Link to="/services">
              <Button variant="white-outline" size="lg">
                View Services <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col order-1 md:order-2">
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

      </section>
    </motion.div>
  )}
   

export default ServicesApproach