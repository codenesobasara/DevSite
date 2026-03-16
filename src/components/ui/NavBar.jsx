import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link } from 'react-router-dom'
import { ArrowRight } from "lucide-react"
import { useDrawer } from "@/Context/DrawerContext"

function NavBar({agencyName}){
    const { setIsOpen } = useDrawer()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return(
  <nav className="fixed top-15 left-24 right-24 z-50">
  <div className="px-24 h-15 flex items-center justify-between bg-[#1f1e1e] border-b border-zinc-900 backdrop-blur-sm">
        {/* LOGO*/}
         <span className="text-xl font-bold tracking-tight">{agencyName}</span>
          <ul className="hidden md:flex items-center gap-8">
          <li><a href="#services" className="text-zinc-400 hover:text-white transition-colors text-sm">Services</a></li>
          <li><Link to="/case-study" className="text-zinc-400 hover:text-white transition-colors text-sm">Case Studies</Link></li>
          <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact</a></li>
        </ul>
 <div className="hidden md:block">
          <Button variant="white"size="sm" onClick={()=> setIsOpen(true)} ><ArrowRight />Let's Talk </Button>
        </div>
            <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Ternary in JSX = *ngIf in Angular */}
         {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu — only renders when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 flex flex-col gap-4">
          <a href="#services" className="text-zinc-400 hover:text-white text-sm">Services</a>
          <a href="#work" className="text-zinc-400 hover:text-white text-sm">Case Studies</a>
          <a href="#contact" className="text-zinc-400 hover:text-white text-sm">Contact</a>
          <Button size="sm" className="w-full">Let's Talk</Button>
        </div>
      )}
    </nav>
  )
}
export default NavBar
