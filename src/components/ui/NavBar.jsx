import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link } from 'react-router-dom'
import { ArrowRight } from "lucide-react"
import { useDrawer } from "@/Context/DrawerContext"
import { serviceCategories } from "@/Data/serviceDetails"

const serviceLinks = [
  { to: "/services", label: "Our Services" },
  ...serviceCategories.flatMap((cat) =>
    cat.tabs.map((tab) => ({ to: `/services/${tab.id}`, label: tab.title }))
  ),
]

function NavBar({agencyName}){
    const { setIsOpen } = useDrawer()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const dropdownRef = useRef(null)
    const navRef = useRef(null)

    // Close menus on outside click
    useEffect(() => {
      function handleClick(e) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsServicesOpen(false)
        }
        if (navRef.current && !navRef.current.contains(e.target)) {
          setIsMenuOpen(false)
          setMobileServicesOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClick)
      return () => document.removeEventListener("mousedown", handleClick)
    }, [])

    return(
  <nav ref={navRef} className="fixed top-4 phone-ls:top-2 left-4 right-4 xl:top-6 xl:left-24 xl:right-24 z-50">
  <div className="px-5 xl:px-24 h-14 phone-ls:h-11 xl:h-15 flex items-center justify-between bg-[#1f1e1e] border-b border-zinc-900 backdrop-blur-sm rounded-2xl xl:rounded-none">
        {/* LOGO*/}
         <Link to="/" className="text-lg xl:text-xl font-bold tracking-tight">{agencyName}</Link>
          <ul className="hidden xl:flex items-center gap-8">
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Services
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-[#1f1e1e] border border-zinc-800 rounded-xl py-2 shadow-2xl">
                {serviceLinks.map((link, i) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsServicesOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      i === 0
                        ? "text-white font-medium border-b border-zinc-800 mb-1"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/case-study" className="text-zinc-400 hover:text-white transition-colors text-sm">Case Studies</Link></li>
          <li><Link to="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact</Link></li>
        </ul>
 <div className="hidden xl:block">
          <Button variant="white"size="sm" onClick={()=> setIsOpen(true)} ><ArrowRight />Let's Talk </Button>
        </div>
            <button
          className="xl:hidden text-zinc-400 hover:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
         {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile/tablet menu */}
      {isMenuOpen && (
        <div className="xl:hidden border-t border-zinc-800 bg-[#1f1e1e] rounded-b-2xl px-6 py-4 flex flex-col gap-1">
          {/* Services dropdown */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between py-3 text-zinc-400 hover:text-white text-sm"
          >
            Services
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col pl-4 pb-2 gap-1">
              {serviceLinks.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-2 text-sm transition-colors ${
                    i === 0 ? "text-white font-medium" : "text-zinc-500 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/case-study" className="py-3 text-zinc-400 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link to="/contact" className="py-3 text-zinc-400 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Button size="sm" className="w-full mt-2" onClick={() => { setIsOpen(true); setIsMenuOpen(false) }}>Let's Talk</Button>
        </div>
      )}
    </nav>
  )
}
export default NavBar
