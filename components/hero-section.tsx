"use client";

import Link from "next/link";
import { ArrowRight, Plane, GraduationCap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e56a008_1px,transparent_1px),linear-gradient(to_bottom,#1e56a008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Floating Icons */}
      <div className="absolute top-32 left-[15%] animate-float opacity-20">
        <Plane className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute top-48 right-[20%] animate-float animation-delay-200 opacity-20">
        <GraduationCap className="w-16 h-16 text-secondary" />
      </div>
      <div className="absolute bottom-32 left-[25%] animate-float animation-delay-400 opacity-20">
        <Globe className="w-14 h-14 text-primary" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          Connecting Talent Globally Since 2018
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-up animation-delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] max-w-5xl mx-auto">
          Your Gateway to <span className="text-primary">Global</span>{" "}
          <span className="relative inline-block">
            Opportunities
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8"
                stroke="#D63031"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up animation-delay-400 mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          From Burundi to the world. We help you secure work visas, guide your
          study abroad journey, and book your flights to new horizons.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up animation-delay-600 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-started">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/#services">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-2"
            >
              Explore Services
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-up animation-delay-600 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "500+", label: "Successful Placements" },
            { number: "25+", label: "Partner Countries" },
            { number: "150+", label: "University Partners" },
            { number: "98%", label: "Visa Success Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
