import Link from "next/link"
import { Plane, Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground border-t border-border/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand info */}
          <div className="md:col-span-2 lg:pr-8">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md shadow-accent/20">
                <Plane className="h-5 w-5 rotate-45" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Jet<span className="text-accent">Route</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Verifiable, authentic flight reservations created for visa applications, temporary entry permits, and digital nomad proof of travel. Fast, secure, and 100% legal.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-colors text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-colors text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-colors text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="mailto:support@example.com" aria-label="Email support" className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-colors text-muted-foreground">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Help links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">Support & Help</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#faq" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  FAQ & Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  24/7 Human Live Chat
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  Refund Guarantee Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  Verify Your Reservation
                </Link>
              </li>
            </ul>
          </div>

          {/* About links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#how-it-works" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  Benefits & Use Cases
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        {/* Lower row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} JetRoute. All rights reserved. Disclaimer: We provide flight reservations for verification purposes. Users are responsible for confirming requirements with embassies.
          </p>
          
          {/* Language Switcher UI only */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
            <Globe className="h-3.5 w-3.5" />
            <span>English (USD)</span>
            <span className="text-[10px]">▼</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
