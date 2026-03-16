import { useDrawer } from '@/Context/DrawerContext'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ContactDrawer() {
  const { isOpen, setIsOpen } = useDrawer()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
       
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-40"
          />

       
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#1f1e1e] z-[90] p-8 overflow-y-auto"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold">Let's Talk</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-white/60 hover:text-white transition-colors" />
              </button>
            </div>

          
            <p className="text-white/50">Form goes here</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactDrawer