"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactForm from "@/components/forms/contactForm";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Bujumbura, Burundi",
    detail: "Avenue Patrice Lumumba, Galerie IRIHO, 1st Floor, A01",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+257 66 662 326",
    detail: "Monday - Friday, 8am - 6pm",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "niban.agence@gmail.com",
    detail: "We reply within 24 hours",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri: 8:00 - 17:00",
    detail: "Saturday: 10:00 - 15:00",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Contact
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Ready to start your journey?
          </h2>
          <p className="mt-6 text-muted-foreground">
            Get in touch with our team. We are here to answer your questions and
            help you take the first step towards your global adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.detail}</p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="h-48 bg-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Bujumbura, Burundi
                  </p>

                </div> */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2102.925301855899!2d29.36380682698364!3d-3.3862170226850608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c183f018f82823%3A0xe2f2543b43d41e9a!2sNIBAN%20RECRUITMENT%20AGENCY!5e1!3m2!1sen!2sbi!4v1776340429192!5m2!1sen!2sbi"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
