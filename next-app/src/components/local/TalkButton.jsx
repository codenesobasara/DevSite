"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrawer } from "@/context/DrawerContext"

export default function TalkButton({ children, variant = "white", size = "lg" }) {
  const { setIsOpen } = useDrawer()
  return (
    <Button variant={variant} size={size} onClick={() => setIsOpen(true)}>
      {children ?? (
        <>
          Let&apos;s Talk <ArrowRight className="h-4 w-4" />
        </>
      )}
    </Button>
  )
}
