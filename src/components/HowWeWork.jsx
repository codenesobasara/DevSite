import { motion } from "framer-motion"
import { MessageCircle, ClipboardList, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a conversation. You tell us what you're trying to solve, we ask the right questions, and we figure out together whether we're the right fit.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Scope & Plan",
    description:
      "We break down the project into clear deliverables with timelines and costs. No surprises, no scope creep. You know exactly what you're getting before we write a line of code.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our senior developers build your project from scratch. You get regular updates and access to a staging environment so you can see progress in real time.",
    icon: Code,
  },
  {
    number: "04",
    title: "Handoff",
    description:
      "We deploy, walk you through everything, and hand over full ownership. Your code, your infrastructure, your project. We stick around for support if you need us.",
    icon: Rocket,
  },
]

function HowWeWork() {
  return (
    <section className="w-full px-4 xl:px-24 py-8 phone-ls:py-4 xl:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl xl:text-5xl phone-ls:text-2xl font-medium tracking-tight mb-4 phone-ls:mb-2">How We Work</h2>
        <p className="text-white/50 text-sm sm:text-base xl:text-lg phone-ls:text-xs max-w-xl mb-8 phone-ls:mb-4 xl:mb-16">
          Four steps from first conversation to full ownership. No black boxes, no
          hand-waving.
        </p>

        <div className="grid grid-cols-2 phone-ls:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-3 phone-ls:mb-1 xl:mb-4">
                <span className="text-white/20 text-xs xl:text-sm font-mono">{step.number}</span>
                <step.icon className="size-4 xl:size-5 text-white/40" />
              </div>
              <h3 className="text-base xl:text-xl phone-ls:text-sm font-medium mb-2 phone-ls:mb-1 xl:mb-3">{step.title}</h3>
              <p className="text-white/50 text-xs xl:text-sm phone-ls:text-[11px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default HowWeWork
