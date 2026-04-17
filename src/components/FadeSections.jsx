import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function FadeSection({ children }) {
  const ref = useRef(null)
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1280
  )

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1280)
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0])
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 12])
  const filter = useTransform(blur, (v) => `blur(${v}px)`)

  if (!isDesktop) {
    return <div>{children}</div>
  }

  return (
    <motion.div ref={ref} style={{ opacity, filter }}>
      {children}
    </motion.div>
  )
}

export default FadeSection
