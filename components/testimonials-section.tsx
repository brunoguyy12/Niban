"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Jean-Pierre Niyonzima",
    role: "Software Developer",
    location: "Now working in South Korea",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote: "Niban made my dream of working abroad a reality. Their team guided me through every step, from visa applications to job interviews. I am now thriving in my career in Seoul!",
    rating: 5,
  },
  {
    id: 2,
    name: "Marie Claire Uwimana",
    role: "Medical Student",
    location: "Studying in India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    quote: "Thanks to Niban, I secured admission to one of India's top medical universities with a scholarship. Their education consultants were incredibly knowledgeable and supportive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emmanuel Ndayisaba",
    role: "Construction Engineer",
    location: "Working in UAE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    quote: "The professionalism and dedication of the Niban team is unmatched. They helped me navigate the complex visa process and found me an excellent position in Dubai within weeks.",
    rating: 5,
  },
  {
    id: 4,
    name: "Grace Iradukunda",
    role: "Business Graduate",
    location: "Studying in Canada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    quote: "From university selection to student visa approval, Niban was there every step of the way. I am now pursuing my MBA in Toronto thanks to their expert guidance.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest">Testimonials</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Success stories from our clients
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Testimonial */}
          <div className="relative bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-sm">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
              "{testimonials[activeIndex].quote}"
            </p>
            
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            
            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-foreground">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                <p className="text-sm text-primary">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "text-left p-6 rounded-2xl border transition-all duration-300",
                  activeIndex === index
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary/50"
                )}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className={cn(
                      "font-semibold",
                      activeIndex === index ? "text-primary-foreground" : "text-foreground"
                    )}>
                      {testimonial.name}
                    </h4>
                    <p className={cn(
                      "text-sm",
                      activeIndex === index ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}>
                      {testimonial.location}
                    </p>
                  </div>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                    activeIndex === index 
                      ? "bg-primary-foreground text-primary" 
                      : "bg-muted text-muted-foreground"
                  )}>
                    {index + 1}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
