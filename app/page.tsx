"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Plane,
  Zap,
  CheckCircle2,
  Headphones,
  MapPin,
  CreditCard,
  Download,
  Star,
  Quote,
  Send,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Clock,
  Compass,
  AlertCircle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() && email.includes("@")) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  // Dummy Testimonials Data
  const testimonials = [
    {
      name: "Marcus Vance",
      country: "🇺🇸",
      rating: 5,
      handle: "@marcusnomad",
      text: "Absolutely flawless service. Used JetRoute for my Schengen visa application in Spain, and the reservation was accepted without any questions. Received the PDF in under 90 seconds!",
    },
    {
      name: "Elena Rostova",
      country: "🇩🇪",
      rating: 5,
      handle: "@elena_travels",
      text: "As a digital nomad, I constantly need proof of onward travel at immigration counters. JetRoute saves me hundreds of dollars on booking refundable flights. The support is fast and friendly!",
    },
    {
      name: "Kenji Sato",
      country: "🇯🇵",
      rating: 5,
      handle: "@kenji_explorer",
      text: "Simple website, lightning fast service. I entered my route, paid, and instantly got my booking reference. Checked it on the airline's website and my name was right there. Highly recommended!",
    },
    {
      name: "Sarah Jenkins",
      country: "🇬🇧",
      rating: 5,
      handle: "@sarah_j_nomad",
      text: "First-rate experience! The support team answered my question about validation timeframe in less than 5 minutes. The ticket itself was valid for my 10-day application period.",
    },
    {
      name: "Mateo Silva",
      country: "🇧🇷",
      rating: 5,
      handle: "@mateosilva",
      text: "Was skeptical at first, but it works exactly as described. Used it for a tourist visa to Germany, reservation was verified and visa approved! Truly a lifesaver.",
    }
  ]

  // Embassy Quotes Data
  const embassyQuotes = [
    {
      embassy: "Schengen Visa Guidelines",
      quote: "A round-trip flight reservation or itinerary showing the traveler's name, dates of entry and exit, and a valid reservation code (PNR) must be submitted. Do not purchase actual tickets until visa approval.",
      source: "Schengen Embassy Directive"
    },
    {
      embassy: "US Department of State",
      quote: "Applicants are advised not to make non-refundable travel arrangements or buy tickets until they have their visa in hand. A flight itinerary is sufficient for the interview.",
      source: "Visa Interview Manual"
    },
    {
      embassy: "UK Visas & Immigration",
      quote: "Do not book non-refundable travel tickets before you receive your visa. Submit details of the accommodation and a planned flight itinerary showing travel dates.",
      source: "Gov.uk Travel Advisory"
    }
  ]

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-primary/2 to-transparent py-20 lg:py-28">
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col text-center lg:col-span-7 lg:text-left">
              <p className="mb-3 text-sm font-semibold text-muted-foreground lg:mx-0">
                Traveling is hard enough. Make it easier.
              </p>
              <Badge variant="accent" className="mx-auto mb-4 w-fit px-3 py-1 text-xs uppercase tracking-wide lg:mx-0">
                ⚡ Instant Email Delivery
              </Badge>
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-primary leading-[1.1] mb-6">
                Get a verifiable flight reservation in <span className="text-accent relative inline-block">
                  2 minutes
                  <span className="absolute left-0 bottom-1 h-2 w-full bg-accent/20 -z-10 rounded" />
                </span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Perfect for visa applications, digital nomads and flexible travelers. Real tickets with authentic PNR codes from major global airlines.
              </p>
              <p className="text-sm font-bold text-primary mb-6">Booking from just $16</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button asChild size="lg" className="w-full sm:w-auto text-base">
                  <Link href="/order">
                    Book Your Reservation Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Link href="#how-it-works" className="text-sm font-semibold text-primary hover:text-accent flex items-center gap-1.5 transition-colors p-2">
                  See how it works
                </Link>
              </div>

              {/* Row of 4 Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/50 text-left">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-lg bg-accent/10 p-1 text-accent">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">From $16</h4>
                    <p className="text-[11px] text-muted-foreground">No hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-lg bg-accent/10 p-1 text-accent">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">100% Verifiable</h4>
                    <p className="text-[11px] text-muted-foreground">With real PNR code</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-lg bg-accent/10 p-1 text-accent">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">2 Min Delivery</h4>
                    <p className="text-[11px] text-muted-foreground">Directly to email</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-lg bg-accent/10 p-1 text-accent">
                    <Headphones className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">24/7 Support</h4>
                    <p className="text-[11px] text-muted-foreground">Real humans online</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mock Ticket Animation Visual */}
            <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-6 shadow-2xl shadow-primary/10">
                {/* Header Ticket Decorator */}
                <div className="flex items-center justify-between border-b border-dashed border-border/80 pb-5">
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 rotate-45 text-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Boarding Pass / Flight Reservation</span>
                  </div>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 uppercase text-[10px] tracking-wide">
                    Confirmed PNR
                  </Badge>
                </div>

                {/* Ticket Details */}
                <div className="py-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-3xl font-extrabold text-primary">JFK</span>
                      <span className="text-xs text-muted-foreground">New York, USA</span>
                    </div>
                    <div className="relative flex flex-1 items-center justify-center">
                      <div className="absolute w-full border-t border-dashed border-border" />
                      <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Plane className="h-3.5 w-3.5 rotate-45" />
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-3xl font-extrabold text-primary">CDG</span>
                      <span className="text-xs text-muted-foreground">Paris, France</span>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-2 border-t border-border/50 pt-5 text-sm">
                    <div>
                      <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Passenger</span>
                      <span className="font-bold text-primary">Jane Doe</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">PNR Code</span>
                      <span className="font-mono font-bold text-accent">LH789X</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Flight Class</span>
                      <span className="font-bold text-primary">Economy (Y)</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Valid Untill</span>
                      <span className="font-bold text-primary">Active Verified</span>
                    </div>
                  </div>
                </div>

                {/* Barcode Mock */}
                <div className="mt-4 border-t border-dashed border-border/80 pt-5">
                  <div className="h-10 w-full bg-[repeating-linear-gradient(90deg,currentColor,currentColor_2px,transparent_2px,transparent_6px)] text-muted-foreground/30" />
                  <div className="mt-2 text-center text-[10px] tracking-[0.2em] font-mono text-muted-foreground">
                    JETROUTE98374829374
                  </div>
                </div>
              </div>
              
              {/* Extra Floating Card badge */}
                  <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-primary p-4 shadow-xl border border-white/5 text-white max-w-50">
                <div className="h-9 w-9 rounded-xl bg-accent flex items-center justify-center">
                  <Zap className="h-4 w-4 fill-white text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Delivery Speed</div>
                  <div className="text-sm font-bold">1 min 42 sec avg.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES GRID (4 cards with icons) */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              Designed for Smart Travelers & Visas
            </h2>
            <p className="text-muted-foreground text-base">
              Why pay hundreds of dollars for a ticket before you obtain your visa? JetRoute gives you everything embassies need for a fraction of the price.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-border/50">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">Fast reservations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Submit your route details in under a minute and get your verifiable PDF via email in under 2 minutes.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-border/50">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">Simple booking</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No complex registration, accounts or password setup. Just input names, dates, flights and pay securely.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-border/50">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">Real reservations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our bookings have real PNR codes valid on airline systems (Lufthansa, Emirates, Delta, etc.).
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-border/50">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Headphones className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">24/7 human support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Got visa changes, delayed flights, or typos? Our round-the-clock support handles corrections instantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS CAROUSEL */}
      <section className="py-20 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              Loved by 15,000+ Nomads & Travelers
            </h2>
            <p className="text-muted-foreground text-base">
              Here is what our global customers are saying about using JetRoute for visa verification and boundary checks.
            </p>
          </div>

          <div className="px-6 sm:px-12 relative max-w-4xl mx-auto">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-2">
                    <Card className="h-full border-border/40 shadow-sm bg-card hover:shadow-md transition-shadow">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                            ))}
                          </div>
                          <Quote className="h-8 w-8 text-accent/10 mb-2 -ml-2" />
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                            &ldquo;{item.text}&rdquo;
                          </p>
                        </div>
                        <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{item.country}</span>
                            <div>
                              <h4 className="font-bold text-sm text-primary">{item.name}</h4>
                              <span className="text-xs text-accent font-semibold">{item.handle}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* 4. "PERFECT FOR" SECTION */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              Who is JetRoute Perfect For?
            </h2>
            <p className="text-muted-foreground text-base">
              Travel should be flexible. Check our primary use-cases and see how our service can work for your travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <span className="inline-block rounded-xl bg-accent/10 p-3 text-accent group-hover:scale-110 transition-transform mb-6">
                <Compass className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-lg text-primary mb-2">Digital nomads</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Stay flexible. Book onward tickets to show immigration officers at border control without locking in travel dates.
              </p>
            </div>

            <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <span className="inline-block rounded-xl bg-accent/10 p-3 text-accent group-hover:scale-110 transition-transform mb-6">
                <TrendingUp className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-lg text-primary mb-2">Frequent travelers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Save money by avoiding expensive refundable flights. Keep your itineraries open-ended until ready.
              </p>
            </div>

            <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <span className="inline-block rounded-xl bg-accent/10 p-3 text-accent group-hover:scale-110 transition-transform mb-6">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-lg text-primary mb-2">Visa applicants</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fulfill embassy application requirements that mandate a roundtrip itinerary before issuing a visa.
              </p>
            </div>

            <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <span className="inline-block rounded-xl bg-accent/10 p-3 text-accent group-hover:scale-110 transition-transform mb-6">
                <Zap className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-lg text-primary mb-2">Last-minute trips</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Emergency border crossings or spontaneous trips requiring proof of transport upon entry to your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AIRLINE LOGOS STRIP */}
      <section className="py-12 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-8">
            Reservations generated from major global alliance airlines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary select-none grayscale">
              <span className="text-xl">⚪</span> AERO_GLOBE
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary select-none grayscale">
              <span className="text-xl">▲</span> STRATO_FLY
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary select-none grayscale">
              <span className="text-xl">♦</span> PACIFIC_JET
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary select-none grayscale">
              <span className="text-xl">■</span> NOVA_AIRLINE
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary select-none grayscale">
              <span className="text-xl">◆</span> SUMMIT_AIR
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary select-none grayscale">
              <span className="text-xl">●</span> APEX_FLIGHTS
            </div>
          </div>
        </div>
      </section>

      {/* 6. "HOW IT WORKS" — 3 NUMBERED STEPS */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              Get Your Reservation in 3 Easy Steps
            </h2>
            <p className="text-muted-foreground text-base">
              The entire process is fully automated, instant, and secure. Follow these steps to obtain your tickets.
            </p>
          </div>

          <div className="relative">
            {/* Connector Line for Desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-border/60 -translate-y-1/2 z-0 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
              {/* Step 1 */}
              <div className="bg-card border border-border/40 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-extrabold text-xl shadow-lg shadow-accent/20 mb-6">
                  1
                </div>
                <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">Enter your route</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fill in your departure airport, arrival airport, and date of travel. Supports one-way and round trips.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-card border border-border/40 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-extrabold text-xl shadow-lg shadow-accent/20 mb-6">
                  2
                </div>
                <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">Make the reservation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Review your route details, complete payment securely via our payment gateway (PayPal or credit cards).
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-card border border-border/40 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-extrabold text-xl shadow-lg shadow-accent/20 mb-6">
                  3
                </div>
                <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">Download your reservation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Receive the PDF reservation inside your email box within 2 minutes. Download and print for your applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BENEFITS LIST (4 items) */}
      <section id="benefits" className="py-20 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphics */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-4/3 rounded-3xl bg-primary/5 border border-border/50 p-8 flex flex-col justify-between overflow-hidden shadow-inner">
                <div className="flex justify-between items-start">
                  <Badge className="bg-accent hover:bg-accent text-white border-0">Flight Confirmed</Badge>
                  <span className="text-2xl">✈️</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-24 bg-primary/20 rounded" />
                  <div className="h-2 w-48 bg-primary/10 rounded" />
                  <div className="h-2 w-36 bg-primary/10 rounded" />
                </div>
                <div className="flex justify-between border-t border-border/50 pt-4 text-xs font-bold text-muted-foreground uppercase">
                  <span>JetRoute Co.</span>
                  <span>Validated</span>
                </div>
              </div>
              
              {/* Overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border/50 rounded-2xl p-5 shadow-lg max-w-60">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Passed Verification
                </div>
                <p className="text-xs text-muted-foreground">Accepted by Schengen, US, UK, and Canadian embassies worldwide.</p>
              </div>
            </div>

            {/* Right List */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-8">
                Enjoy Stress-Free Travel Planning
              </h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="shrink-0 h-6 w-6 rounded-full bg-accent/15 text-accent flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Less stress while traveling</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Avoid nervous encounters with airlines or immigration. Always have your return or onward flight documentation ready to display.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="shrink-0 h-6 w-6 rounded-full bg-accent/15 text-accent flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Better chance of visa approval</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Embassy guidelines recommend submitting itineraries rather than purchasing full-price tickets. Increase your odds of success.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="shrink-0 h-6 w-6 rounded-full bg-accent/15 text-accent flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Save money</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Refundable tickets cost an arm and a leg. Booking with us costs only $16, letting you reserve your funds for your actual trip.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="shrink-0 h-6 w-6 rounded-full bg-accent/15 text-accent flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">More flexible plans</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Don&apos;t tie yourself to a date. Travel freely as a nomad and only purchase tickets when you are absolutely sure of your schedule.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EMBASSY QUOTES SECTION */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-3 px-3 py-1 border-accent/30 text-accent">Embassy Rules</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              What Embassies Actually Recommend
            </h2>
            <p className="text-muted-foreground text-base">
              Leading consulates and visa processing services explicitly advise against buying full flight tickets before a visa is issued.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {embassyQuotes.map((item, index) => (
              <Card key={index} className="border-border/50 bg-card hover:shadow-md transition-shadow relative overflow-hidden">
                {/* Decorative border top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                <CardContent className="p-6 pt-8 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-3">
                      {item.embassy}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-border/50 pt-4">
                    <span className="text-[11px] font-bold text-primary block">
                      Source: {item.source}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 bg-accent/5 rounded-xl border border-accent/15 p-4 max-w-2xl mx-auto">
            <AlertCircle className="h-5 w-5 text-accent shrink-0" />
            <p className="text-xs text-muted-foreground">
              <strong>Tip:</strong> Embassies request flight reservations to verify that you intend to leave the country before your visa expires. JetRoute satisfies this.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section id="faq" className="py-20 bg-muted/30 border-y border-border/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-base">
              Got questions about flight reservations? Find answers to the most common queries below.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this a real ticket?</AccordionTrigger>
              <AccordionContent>
                Yes, it is a real flight reservation made with an active booking system. It contains a valid Passenger Name Record (PNR) code that can be verified directly on the website of major airlines. It is not a fake document; it is a temporary reservation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does the reservation remain valid?</AccordionTrigger>
              <AccordionContent>
                Our reservations are guaranteed to remain active and valid on airline systems for a minimum of 48 hours, and often up to 14 days, depending on airline policies. This is typically plenty of time for embassy checks or board control approvals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use it for visa applications?</AccordionTrigger>
              <AccordionContent>
                Absolutely! This is the primary use case. Visas require proof of transit/flight itinerary. Using JetRoute allows you to submit a verifiable reservation showing dates, route, and names without risking the cost of a full plane ticket.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How fast will I receive the PDF?</AccordionTrigger>
              <AccordionContent>
                Our booking generator works automatically. Once payment is processed, the system schedules and executes the reservation on the airline booking database and immediately sends the PDF to your email address, which takes approximately 2 minutes on average.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What if I need to cancel or change details?</AccordionTrigger>
              <AccordionContent>
                No cancellation is needed, as the reservation expires automatically. If you notice a typo in your name or need to adjust your departure date, please reach out to our 24/7 support immediately. We will generate a corrected itinerary for free.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-8 md:p-16 shadow-xl border border-white/5">
            {/* Background decorative path */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl -z-10" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
              <div className="text-center md:text-left max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  Traveling is hard enough. Make it easier with JetRoute.
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Reserve your flight ticket today for $16. Keep your money in your wallet and travel plans completely flexible.
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <Button asChild size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/20">
                  <Link href="/order" className="inline-flex items-center justify-center font-bold">
                    Book Now
                    <Plane className="ml-2 h-4 w-4 rotate-45" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NEWSLETTER SIGNUP */}
      <section className="py-16 bg-muted/20 border-t border-border/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border/40 rounded-3xl p-8 sm:p-12 shadow-sm text-center">
            <h3 className="font-extrabold text-2xl text-primary mb-2">Not ready to book, but want to stay in touch?</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
              Subscribe for travel tips, inspiration, and occasional discounts. No spam, cancel anytime.
            </p>

            {subscribed ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl p-4 flex items-center justify-center gap-2 max-w-md mx-auto">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-semibold">Thank you for subscribing! Please check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-xl bg-background"
                />
                <Button type="submit" className="rounded-xl shrink-0 font-bold">
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
