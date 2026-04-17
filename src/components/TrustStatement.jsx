import { motion } from "framer-motion"


function TrustStatement(){
  return(
    <div className="w-full xl:w-4/5 px-4 xl:px-24 py-0 xl:py-12">

      <div className="hidden xl:block space-y-2">
        <motion.h2
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5, delay: 1.8}}
          className="text-5xl font-bold max-w-4xl pb-6"
        >
          Software Solutions for Growing Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="text-3xl leading-snug"
        >
          We partner with businesses to find what's <span className="text-zinc-500">holding them back.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="text-3xl leading-snug"
        >
          We identify the gaps. Then we <span className="text-zinc-500">build the software</span> to close them.
        </motion.p>

      </div>
      <div className="block xl:hidden space-y-4 --phone-ls:space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl --phone-ls:text-xl font-bold">
          Software Solutions for Growing Businesses
        </h2>

        <p className="text-sm sm:text-base --phone-ls:text-sm text-zinc-400 leading-relaxed">
          We partner with businesses to find what's holding them back. A digital presence that isn't generating leads. Manual processes burning hours. Systems that don't connect. We identify the gaps — then build the software to close them. Custom applications, SEO-driven platforms, and AI-powered automation. Whatever moves the needle.
        </p>
      </div>

    </div>
  )
}

export default TrustStatement