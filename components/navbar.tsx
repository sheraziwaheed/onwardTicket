"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plane, HelpCircle, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-md transition-all duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center gap-2.5 transition-transform hover:opacity-90 active:scale-[0.98]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md shadow-accent/20">
            <Plane className="h-5 w-5 rotate-45" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-primary">
            Jet<span className="text-accent">Route</span>
          </span>
        </Link>

        {/* Action Elements */}
        <div className="flex items-center gap-4">
          <Link
            href="/#faq"
            className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
          >
            <HelpCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Get Support</span>
          </Link>

          {pathname !== "/order" && (
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/order">Book Now</Link>
            </Button>
          )}
          
          {pathname !== "/order" && (
            <Link href="/order" className="sm:hidden">
              <Button size="sm">Book</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
