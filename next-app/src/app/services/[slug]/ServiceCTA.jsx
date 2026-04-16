"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useDrawer } from "@/context/DrawerContext"

export default function ServiceCTA() {
  const { setIsOpen } = useDrawer()

  return (
    <div className="flex gap-4">
      <Button variant="white" size="lg" onClick={() => setIsOpen(true)}>
        Let&apos;s Talk <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
