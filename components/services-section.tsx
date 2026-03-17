"use client";

import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Plane,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "work",
    icon: Briefcase,
    number: "01",
    title: "Work Abroad",
    subtitle: "Visa & Recruitment",
    description:
      "We connect talented professionals from Burundi with employment opportunities worldwide. Our comprehensive service includes job matching, visa processing, document preparation, and relocation support.",
    features: [
      "Job placement in 25+ countries",
      "Work visa processing & guidance",
      "Document preparation & verification",
      "Pre-departure orientation",
      "Employer partnerships",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    id: "study",
    icon: GraduationCap,
    number: "02",
    title: "Study Abroad",
    subtitle: "Education Guidance",
    description:
      "Turn your academic dreams into reality. We guide students through the entire process of studying abroad, from university selection to visa acquisition and beyond.",
    features: [
      "University selection & applications",
      "Scholarship assistance",
      "Student visa processing",
      "Accommodation guidance",
      "Partner universities in Korea, India & more",
    ],
    // image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  },
  {
    id: "travel",
    icon: Plane,
    number: "03",
    title: "Flight Booking",
    subtitle: "Travel Services",
    description:
      "Seamless travel arrangements for your journey abroad. We handle all your flight bookings with competitive rates and personalized service to ensure a smooth travel experience.",
    features: [
      "Competitive flight rates",
      "Multi-destination bookings",
      "Travel insurance options",
      "24/7 support",
      "Group booking discounts",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);
  const active = services.find((s) => s.id === activeService) || services[0];

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Our Services
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Comprehensive solutions for your global journey
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Tabs */}
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-300 group border",
                  activeService === service.id
                    ? "bg-card shadow-lg border-primary/20"
                    : "bg-transparent border-transparent hover:bg-card/50",
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "p-3 rounded-xl transition-colors",
                      activeService === service.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
                    )}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">
                        {service.number}
                      </span>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 transition-transform",
                          activeService === service.id
                            ? "text-primary rotate-90"
                            : "text-muted-foreground",
                        )}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mt-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Image */}
              <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    <active.icon className="w-4 h-4" />
                    {active.subtitle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {active.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-8 inline-flex items-center gap-2 text-primary font-medium group">
                Learn more about {active.title.toLowerCase()}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
