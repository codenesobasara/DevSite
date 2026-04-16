"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function FadeSection({ children }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0])
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 12])
  const filter = useTransform(blur, (v) => `blur(${v}px)`)

  return (
    <motion.div ref={ref} style={{ opacity, filter }}>
      {children}
    </motion.div>
  )
}

export default FadeSection
