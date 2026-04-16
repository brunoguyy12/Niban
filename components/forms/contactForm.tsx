"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSchN9ceUbIcOK54EWLpJ4bnIIQgPqm3SeUS9UroYIFYBfudOg/formResponse";

    //Submit the formData to the form url using fetch and add a synch check if passed set formSubmitted to true

    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    console.log("Form Data:", Object.fromEntries(formData.entries()));

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        console.log("Form submitted successfully!!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    // return; // Prevent default form submission behavior

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 10000);

    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="lg:col-span-3">
      {formSubmitted ? (
        <div className="bg-primary/10 border border-primary/35 rounded-lg p-6 text-center">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-gray-700">
            Thank you for your interest in us. Our team will review your
            information and contact you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-card p-8 lg:p-10 rounded-3xl border border-border shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                First Name
              </label>
              <Input
                id="firstName"
                name="entry.2022627467"
                placeholder="John"
                className="rounded-xl"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                name="entry.1300739456"
                placeholder="Doe"
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="entry.1730989862"
              placeholder="john@example.com"
              className="rounded-xl"
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Interested In
            </label>
            <select
              id="service"
              name="entry.1623572686"
              className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select a service</option>
              <option value="Work Abroad">Work Abroad</option>
              <option value="Study Abroad">Study Abroad</option>
              <option value="Flight Booking">Flight Booking</option>
              <option value="English Coaching">English Coaching</option>
              <option value="General Consultation">General Consultation</option>
            </select>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="entry.1946000367"
              placeholder="Tell us about your goals..."
              rows={4}
              className="rounded-xl resize-none"
            />
          </div>

          <Button
            type="submit"
            className="mt-8 w-full bg-primary hover:bg-primary/90 rounded-xl py-6 text-base group"
          >
            Send Message
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      )}
    </div>
  );
}
