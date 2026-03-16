import { motion } from "framer-motion"


function TrustStatement(){
  return(
    <div className="w-4/5 px-8 md:px-24 py-16 md:py-32">

      <div className="hidden md:block space-y-2">
        <motion.h2
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="text-6xl font-bold max-w-4xl pb-10"
        >
          Software Solutions for Growing Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-4xl leading-snug"
        >
          We partner with businesses to find what's <span className="text-zinc-500">holding them back.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl leading-snug"
        >
          We identify the gaps. Then we <span className="text-zinc-500">build the software</span> to close them.
        </motion.p>

      </div>
      <div className="block md:hidden space-y-6">
        <motion.h2
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="text-3xl font-bold"
        >
          Software Solutions for Growing Businesses
        </motion.h2>

        <motion.p
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6, delay:0.1}}
          className="text-base text-zinc-400 leading-relaxed"
        >
          We partner with businesses to find what's holding them back. A digital presence that isn't generating leads. Manual processes burning hours. Systems that don't connect. We identify the gaps — then build the software to close them. Custom applications, SEO-driven platforms, and AI-powered automation. Whatever moves the needle.
        </motion.p>
      </div>

    </div>
  )
}

export default TrustStatement