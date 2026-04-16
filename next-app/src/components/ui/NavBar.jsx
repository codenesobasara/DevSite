"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useDrawer } from "@/context/DrawerContext"

function NavBar({ agencyName }) {
  const { setIsOpen } = useDrawer()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 md:top-15 md:left-24 md:right-24 z-50">
      <div className="px-5 md:px-24 h-14 md:h-15 flex items-center justify-between bg-[#1f1e1e] border-b border-zinc-900 backdrop-blur-sm">
        <Link href="/">
          <span className="text-xl font-bold tracking-tight">{agencyName}</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/services" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Services
            </Link>
          </li>
          <li>
            <Link href="/case-studies" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Case Studies
            </Link>
          </li>
          <li>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden md:block">
          <Button variant="white" size="sm" onClick={() => setIsOpen(true)}>
            <ArrowRight />
            Let&apos;s Talk
          </Button>
        </div>
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#1f1e1e] px-5 py-4 flex flex-col gap-4">
          <Link href="/services" className="text-zinc-400 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/case-studies" className="text-zinc-400 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>
            Case Studies
          </Link>
          <a href="#contact" className="text-zinc-400 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <Button size="sm" className="w-full" onClick={() => { setIsOpen(true); setIsMenuOpen(false) }}>
            Let&apos;s Talk
          </Button>
        </div>
      )}
    </nav>
  )
}

export default NavBar
