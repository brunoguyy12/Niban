"use client"

import { MessageCircle, FileSearch, FileCheck, Plane } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    description: "Schedule a free consultation to discuss your goals, preferences, and requirements. We'll understand your unique situation and aspirations.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Assessment & Planning",
    description: "Our experts evaluate your profile and create a personalized plan. We identify the best opportunities that match your qualifications.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Documentation & Processing",
    description: "We guide you through all paperwork, applications, and visa processes. Our team ensures every document is perfectly prepared.",
  },
  {
    number: "04",
    icon: Plane,
    title: "Departure & Support",
    description: "Final preparations, flight bookings, and pre-departure briefing. We stay connected to support you even after you reach your destination.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest">How It Works</p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Your journey in four simple steps
          </h2>
          <p className="mt-6 text-muted-foreground">
            We have simplified the process to make your transition as smooth as possible. Here is how we help you achieve your global dreams.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Step Number */}
                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 bg-card border-2 border-border rounded-2xl flex items-center justify-center shadow-sm group-hover:border-primary group-hover:shadow-md transition-all">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-3 text-border">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
