"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Plane,
  Calendar,
  User,
  Mail,
  ShieldCheck,
  Zap,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  CreditCard,
  Lock
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface FormValues {
  tripType: "one-way" | "round-trip"
  origin: string
  destination: string
  departureDate: string
  returnDate: string
  passengerName: string
  passengerEmail: string
  extendedHold: boolean
  priorityDelivery: boolean
}

interface FormErrors {
  origin?: string
  destination?: string
  departureDate?: string
  returnDate?: string
  passengerName?: string
  passengerEmail?: string
}

export default function OrderPage() {
  const [form, setForm] = useState<FormValues>({
    tripType: "one-way",
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengerName: "",
    passengerEmail: "",
    extendedHold: false,
    priorityDelivery: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Pricing calculations
  const basePrice = 16
  const extendedHoldPrice = 6
  const priorityDeliveryPrice = 3
  const totalPrice = basePrice + (form.extendedHold ? extendedHoldPrice : 0) + (form.priorityDelivery ? priorityDeliveryPrice : 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleTabChange = (val: string) => {
    setForm((prev) => ({
      ...prev,
      tripType: val as "one-way" | "round-trip",
    }))
    if (errors.returnDate) {
      setErrors((prev) => ({
        ...prev,
        returnDate: undefined,
      }))
    }
  }

  const handleToggle = (name: "extendedHold" | "priorityDelivery") => {
    setForm((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {}
    
    if (!form.origin.trim()) tempErrors.origin = "Origin airport is required"
    if (!form.destination.trim()) tempErrors.destination = "Destination airport is required"
    if (form.origin.trim().toLowerCase() === form.destination.trim().toLowerCase() && form.origin.trim()) {
      tempErrors.destination = "Destination cannot be same as origin"
    }
    
    if (!form.departureDate) {
      tempErrors.departureDate = "Departure date is required"
    } else {
      const today = new Date().setHours(0, 0, 0, 0)
      const depDate = new Date(form.departureDate).getTime()
      if (depDate < today) {
        tempErrors.departureDate = "Departure date cannot be in the past"
      }
    }

    if (form.tripType === "round-trip") {
      if (!form.returnDate) {
        tempErrors.returnDate = "Return date is required for round-trip"
      } else if (form.departureDate) {
        const depDate = new Date(form.departureDate).getTime()
        const retDate = new Date(form.returnDate).getTime()
        if (retDate < depDate) {
          tempErrors.returnDate = "Return date must be after departure date"
        }
      }
    }

    if (!form.passengerName.trim()) tempErrors.passengerName = "Passenger name is required"
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.passengerEmail.trim()) {
      tempErrors.passengerEmail = "Email address is required"
    } else if (!emailRegex.test(form.passengerEmail)) {
      tempErrors.passengerEmail = "Please enter a valid email address"
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate booking reservation creation
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
      }, 2500)
    }
  }

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <Card className="border-emerald-100 shadow-xl bg-card overflow-hidden">
          <div className="h-2 w-full bg-emerald-500" />
          <CardHeader className="text-center pt-8">
            <div className="mx-auto h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-extrabold text-primary">Booking Initiated Successfully!</CardTitle>
            <CardDescription className="text-sm">
              We are processing your flight reservation on the live GDS airline ticketing system.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 px-6 sm:px-10 pb-8">
            <div className="rounded-xl bg-muted/30 p-5 space-y-4 text-sm border border-border/40">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Passenger:</span>
                <span className="font-bold text-primary">{form.passengerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Route:</span>
                <span className="font-bold text-primary">{form.origin.toUpperCase()} ➔ {form.destination.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dates:</span>
                <span className="font-bold text-primary">
                  {form.departureDate} {form.tripType === "round-trip" ? `| ${form.returnDate}` : ""}
                </span>
              </div>
              <div className="flex justify-between border-t border-border/50 pt-3">
                <span className="text-muted-foreground font-semibold">Total Charged:</span>
                <span className="font-extrabold text-accent text-base">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
              <Clock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-800 leading-relaxed">
                <strong>What happens next?</strong> Within 2 minutes, our system will finalize the reservation PNR with the airline and generate your PDF. You will receive an email confirmation at <strong>{form.passengerEmail}</strong> with the download link.
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/10 border-t border-border/50 px-6 py-4 flex justify-between gap-4">
            <Button variant="outline" asChild className="flex-1">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            <Button onClick={() => setIsSuccess(false)} className="flex-1">
              Book Another Ticket
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1">
      {/* Header */}
      <div className="mb-10 flex flex-col items-start gap-4">
        <Link href="/" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">
          Configure Your Reservation
        </h1>
        <p className="text-muted-foreground text-sm">
          Submit your travel itinerary below. We will secure your active flight booking reference with real global airlines.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="border-border/50 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">1. Journey Itinerary</CardTitle>
                <CardDescription>Select trip format and input flight checkpoints.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Trip Type Tabs */}
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Trip Format</label>
                  <Tabs defaultValue="one-way" onValueChange={handleTabChange} className="w-full sm:w-auto">
                    <TabsList className="grid grid-cols-2 w-full sm:w-[260px]">
                      <TabsTrigger value="one-way">One-Way</TabsTrigger>
                      <TabsTrigger value="round-trip">Round-Trip</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Origin and Destination inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="origin" className="block text-xs font-bold text-primary uppercase tracking-wider">
                      Origin Airport
                    </label>
                    <div className="relative">
                      <Plane className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground rotate-45" />
                      <Input
                        id="origin"
                        name="origin"
                        placeholder="e.g. New York (JFK)"
                        value={form.origin}
                        onChange={handleInputChange}
                        className={`pl-10 ${errors.origin ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                    </div>
                    {errors.origin && (
                      <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.origin}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="destination" className="block text-xs font-bold text-primary uppercase tracking-wider">
                      Destination Airport
                    </label>
                    <div className="relative">
                      <Plane className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground rotate-90" />
                      <Input
                        id="destination"
                        name="destination"
                        placeholder="e.g. London (LHR)"
                        value={form.destination}
                        onChange={handleInputChange}
                        className={`pl-10 ${errors.destination ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                    </div>
                    {errors.destination && (
                      <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.destination}</p>
                    )}
                  </div>
                </div>

                {/* Dates inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="departureDate" className="block text-xs font-bold text-primary uppercase tracking-wider">
                      Departure Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="departureDate"
                        name="departureDate"
                        type="date"
                        value={form.departureDate}
                        onChange={handleInputChange}
                        className={`pl-10 ${errors.departureDate ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                    </div>
                    {errors.departureDate && (
                      <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.departureDate}</p>
                    )}
                  </div>

                  {form.tripType === "round-trip" && (
                    <div className="space-y-2">
                      <label htmlFor="returnDate" className="block text-xs font-bold text-primary uppercase tracking-wider">
                        Return Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="returnDate"
                          name="returnDate"
                          type="date"
                          value={form.returnDate}
                          onChange={handleInputChange}
                          className={`pl-10 ${errors.returnDate ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        />
                      </div>
                      {errors.returnDate && (
                        <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.returnDate}</p>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">2. Traveler Information</CardTitle>
                <CardDescription>Enter passenger info for booking reference files.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="passengerName" className="block text-xs font-bold text-primary uppercase tracking-wider">
                      Passenger Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="passengerName"
                        name="passengerName"
                        placeholder="John Doe (matching passport)"
                        value={form.passengerName}
                        onChange={handleInputChange}
                        className={`pl-10 ${errors.passengerName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                    </div>
                    {errors.passengerName && (
                      <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.passengerName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="passengerEmail" className="block text-xs font-bold text-primary uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="passengerEmail"
                        name="passengerEmail"
                        type="email"
                        placeholder="yourname@domain.com"
                        value={form.passengerEmail}
                        onChange={handleInputChange}
                        className={`pl-10 ${errors.passengerEmail ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                    </div>
                    {errors.passengerEmail && (
                      <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.passengerEmail}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">3. Extra Services (Optional)</CardTitle>
                <CardDescription>Add custom features to your reservation.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Hold Time Upsell */}
                <div
                  onClick={() => handleToggle("extendedHold")}
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    form.extendedHold
                      ? "bg-accent/5 border-accent shadow-sm"
                      : "border-border/50 bg-background hover:bg-muted/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.extendedHold}
                    onChange={() => {}} // handled by div onClick
                    className="mt-1 h-4 w-4 accent-accent rounded border-border"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary text-sm">Extended Reservation Hold (14 Days)</span>
                      <Badge variant="secondary" className="text-xs font-semibold">+${extendedHoldPrice}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Our standard flight reservation remains valid for 48 hours. Choose this to guarantee the GDS reservation remains active for 14 days, perfect for long visa processing times.
                    </p>
                  </div>
                </div>

                {/* Priority Delivery Upsell */}
                <div
                  onClick={() => handleToggle("priorityDelivery")}
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    form.priorityDelivery
                      ? "bg-accent/5 border-accent shadow-sm"
                      : "border-border/50 bg-background hover:bg-muted/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.priorityDelivery}
                    onChange={() => {}} // handled by div onClick
                    className="mt-1 h-4 w-4 accent-accent rounded border-border"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary text-sm flex items-center gap-1">
                        Priority Rush Processing <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                      </span>
                      <Badge variant="secondary" className="text-xs font-semibold">+${priorityDeliveryPrice}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Skip the queue. Your flight reservation will be submitted and booked with the airline immediately. Delivery average time under 60 seconds.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button type="submit" size="lg" className="w-full shadow-lg font-bold" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
                  Generating Active Reservation...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Continue to Payment (${totalPrice.toFixed(2)})
                </div>
              )}
            </Button>
          </form>
        </div>

        {/* Right Column: Sticky Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card className="border-border/50 shadow-lg overflow-hidden">
              <div className="h-1.5 w-full bg-accent" />
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-bold text-primary uppercase tracking-wide">
                  Pricing Summary
                </CardTitle>
                <CardDescription>Checkout details for your flight pass.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between pb-3 border-b border-border/50">
                  <span className="text-muted-foreground">
                    Flight Reservation ({form.tripType === "one-way" ? "One-way" : "Round-trip"})
                  </span>
                  <span className="font-bold text-primary">${basePrice.toFixed(2)}</span>
                </div>

                {form.extendedHold && (
                  <div className="flex justify-between pb-3 border-b border-border/50 text-xs">
                    <span className="text-muted-foreground">
                      Extended Hold Upsell (14 Days)
                    </span>
                    <span className="font-semibold text-primary">+${extendedHoldPrice.toFixed(2)}</span>
                  </div>
                )}

                {form.priorityDelivery && (
                  <div className="flex justify-between pb-3 border-b border-border/50 text-xs">
                    <span className="text-muted-foreground">
                      Priority Rush Delivery
                    </span>
                    <span className="font-semibold text-primary">+${priorityDeliveryPrice.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-xs pb-3 border-b border-border/50 text-muted-foreground">
                  <span>Taxes & Booking Fees</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>

                <div className="flex justify-between pt-2">
                  <span className="font-bold text-primary text-base">Total Price</span>
                  <span className="font-extrabold text-accent text-xl">${totalPrice.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/10 border-t border-border/50 p-4 flex flex-col gap-4">
                {/* Security trust badge */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground w-full">
                  <Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <span>Secure 256-bit TLS encrypted transaction</span>
                </div>

                {/* Features confirmation list */}
                <div className="space-y-2 w-full pt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>Real airline PNR code</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>PDF delivered straight to email</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>24/7 human customer service</span>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Assistance card */}
            <Card className="border-border/50 shadow-sm bg-muted/20">
              <CardContent className="p-4 flex gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Need help booking?</strong> Our team of booking operators is online. Start a live chat or email us at support@example.com for instant assistance.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
