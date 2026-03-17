"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Plane,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// =============================================================================
// GOOGLE FORM CONFIGURATION
// =============================================================================
//
// HOW TO SET UP:
// 1. Create a Google Form with these fields:
//    - Service Type (Short answer or Dropdown)
//    - Full Name (Short answer)
//    - Email (Short answer)
//    - Phone (Short answer)
//    - Destination (Short answer or Dropdown)
//    - Education Level (Short answer or Dropdown)
//    - Experience/Field of Study (Short answer)
//    - Message (Paragraph)
//
// 2. Get your form URL:
//    - Open your Google Form
//    - Click the three dots menu > Get pre-filled link
//    - Or use the form URL: https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
//
// 3. Get your entry IDs:
//    - Open the form in preview mode
//    - Right-click > Inspect > Find input fields
//    - Each field has a name like "entry.1234567890"
//    - Copy the numbers after "entry."
//
// 4. Replace the values below with your actual form URL and entry IDs:
// =============================================================================

const GOOGLE_FORM_CONFIG = {
  // Replace with your Google Form URL (use formResponse, not viewform)
  formUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",

  // Replace with your entry IDs from the Google Form
  entryIds: {
    serviceType: "entry.XXXXXXXXXX", // e.g., "entry.1234567890"
    fullName: "entry.XXXXXXXXXX",
    email: "entry.XXXXXXXXXX",
    phone: "entry.XXXXXXXXXX",
    destination: "entry.XXXXXXXXXX",
    education: "entry.XXXXXXXXXX",
    experience: "entry.XXXXXXXXXX",
    message: "entry.XXXXXXXXXX",
  },
};

const services = [
  {
    id: "work",
    label: "Work Abroad",
    icon: Briefcase,
    title: "Work Abroad",
    description: "Find international employment opportunities",
    color: "primary",
  },
  {
    id: "study",
    label: "Study Abroad",
    icon: GraduationCap,
    title: "Study Abroad",
    description: "Pursue your degree at top universities",
    color: "secondary",
  },
  {
    id: "travel",
    label: "Flight Booking",
    icon: Plane,
    title: "Flight Booking",
    description: "Book your travel arrangements",
    color: "primary",
  },
];

const workDestinations = [
  "South Korea",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Canada",
  "Germany",
  "Malaysia",
  "Other",
];

const studyDestinations = [
  "South Korea",
  "India",
  "China",
  "Turkey",
  "Malaysia",
  "Russia",
  "Germany",
  "Canada",
  "Other",
];

const educationLevels = [
  "High School Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "Vocational Training",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+257 79 000 000",
    href: "tel:+25779000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@nibanagency.com",
    href: "mailto:info@nibanagency.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Bujumbura, Burundi",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 8AM - 5PM",
    href: "#",
  },
];

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    education: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getServiceLabel = () => {
    const service = services.find((s) => s.id === selectedService);
    return service?.label || selectedService;
  };

  const submitToGoogleForm = () => {
    // Build the form data for Google Forms
    const googleFormData = new FormData();

    // Map your form fields to Google Form entry IDs
    googleFormData.append(
      GOOGLE_FORM_CONFIG.entryIds.serviceType,
      getServiceLabel(),
    );
    googleFormData.append(
      GOOGLE_FORM_CONFIG.entryIds.fullName,
      formData.fullName,
    );
    googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.email, formData.email);
    googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.phone, formData.phone);
    googleFormData.append(
      GOOGLE_FORM_CONFIG.entryIds.destination,
      formData.destination,
    );
    googleFormData.append(
      GOOGLE_FORM_CONFIG.entryIds.education,
      formData.education,
    );
    googleFormData.append(
      GOOGLE_FORM_CONFIG.entryIds.experience,
      formData.experience,
    );
    googleFormData.append(
      GOOGLE_FORM_CONFIG.entryIds.message,
      formData.message,
    );

    // Convert FormData to URLSearchParams for the URL
    const params = new URLSearchParams();
    googleFormData.forEach((value, key) => {
      params.append(key, value.toString());
    });

    // Submit using fetch with no-cors mode (won't return response but will submit)
    fetch(GOOGLE_FORM_CONFIG.formUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Google Forms
      submitToGoogleForm();

      // Small delay to ensure submission goes through
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Still show success since no-cors doesn't give us response
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDestinations = () => {
    if (selectedService === "work") return workDestinations;
    if (selectedService === "study") return studyDestinations;
    return workDestinations;
  };

  const renderStep = () => {
    if (isSubmitted) {
      return (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Thank you for choosing Niban Recruitment Agency. Our team will
            review your application and contact you within 24-48 hours.
          </p>
          <Link href="/">
            <Button className="rounded-full">Return to Home</Button>
          </Link>
        </div>
      );
    }

    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">
              What service are you interested in?
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all hover:border-primary hover:shadow-lg ${
                    selectedService === service.id
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      service.color === "primary"
                        ? "bg-primary/10"
                        : "bg-secondary/10"
                    }`}
                  >
                    <service.icon
                      className={`w-6 h-6 ${
                        service.color === "primary"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    />
                  </div>
                  <h4 className="font-semibold mb-1">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(3);
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+257 XX XXX XXX"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Destination *
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    aria-label="Preferred Destination"
                    className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm"
                  >
                    <option value="">Select destination</option>
                    {getDestinations().map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button type="submit" className="w-full rounded-xl mt-4">
                Continue
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Additional Details</h3>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Highest Education Level
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    aria-label="Education Level"
                    className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm"
                  >
                    <option value="">Select education level</option>
                    {educationLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {selectedService === "study"
                      ? "Field of Study"
                      : "Work Experience (years)"}
                  </label>
                  <Input
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder={
                      selectedService === "study"
                        ? "e.g., Computer Science"
                        : "e.g., 3 years"
                    }
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tell us more about your goals
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share any additional information about your aspirations, specific requirements, or questions..."
                  rows={4}
                  className="rounded-xl resize-none"
                />
              </div>

              {/* Summary before submission */}
              <div className="bg-muted/50 rounded-xl p-4 mt-4">
                <h4 className="text-sm font-medium mb-2">
                  Application Summary
                </h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <span className="font-medium text-foreground">
                      Service:
                    </span>{" "}
                    {getServiceLabel()}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Name:</span>{" "}
                    {formData.fullName}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Email:</span>{" "}
                    {formData.email}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      Destination:
                    </span>{" "}
                    {formData.destination}
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Submitting...
                    <span className="ml-2 animate-spin">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </span>
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        );
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hidden iframe for form submission (backup method) */}
      <iframe
        ref={iframeRef}
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e56a008_1px,transparent_1px),linear-gradient(to_bottom,#1e56a008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Start Your <span className="text-primary">Journey</span> Today
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Take the first step towards your international career or
              education. Our team is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-3">
              <div className="bg-muted/30 rounded-3xl p-8 md:p-10">
                {/* Progress Steps */}
                {!isSubmitted && (
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                            step >= s
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {s}
                        </div>
                        {s < 3 && (
                          <div
                            className={`w-12 h-0.5 transition-colors ${
                              step > s ? "bg-primary" : "bg-muted"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                    <span className="ml-4 text-sm text-muted-foreground">
                      Step {step} of 3
                    </span>
                  </div>
                )}

                {renderStep()}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                {/* Image */}
                <div className="rounded-3xl overflow-hidden mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
                    alt="Team consultation"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                {/* Contact Info */}
                <div className="bg-foreground text-background rounded-3xl p-8">
                  <h3 className="text-lg font-semibold mb-6">Need Help?</h3>
                  <p className="text-background/70 text-sm mb-6">
                    Our team is available to answer any questions and guide you
                    through the process.
                  </p>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 text-sm hover:text-secondary transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-background/60 text-xs">
                            {item.label}
                          </p>
                          <p className="text-background">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">
                      Placements
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-xs text-muted-foreground">
                      Response
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
