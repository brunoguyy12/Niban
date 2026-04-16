import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";

const footerLinks = {
  services: [
    { label: "Work Abroad", href: "/get-started" },
    { label: "Study Abroad", href: "/get-started" },
    { label: "Flight Booking", href: "/get-started" },
    { label: "Visa Assistance", href: "/get-started" },
    { label: "Career Guidance", href: "/get-started" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Mission & Vision", href: "/about#mission" },
    { label: "SDG Goals", href: "/about#sdg" },
  ],
  destinations: [
    { label: "South Korea", href: "/#destinations" },
    { label: "India", href: "/#destinations" },
    { label: "UAE", href: "/#destinations" },
    { label: "Canada", href: "/#destinations" },
    { label: "Germany", href: "/#destinations" },
  ],
  support: [
    { label: "Contact Us", href: "/#contact" },
    { label: "Get Started", href: "/get-started" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=100082982454607#",
    label: "Facebook",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/25766662326?text=Hello%20I%20would%20like%20more%20information%20on%20NIBAN%20Recruitment",
    label: "Whatsapp",
  },
  // { icon: Twitter, href: "#", label: "Twitter" },
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to take the next step?
              </h3>
              <p className="text-background/70 mt-2">
                Let us help you start your journey today.
              </p>
            </div>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary/90 transition-colors group"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Image
              src="/images/niban-logo.png"
              alt="NIBAN Recruitment Agency"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-background/70 max-w-xs leading-relaxed">
              Connecting talent from Burundi to global opportunities. Your
              trusted partner for work visas, study abroad, and travel services.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-background mb-4">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>
              &copy; {new Date().getFullYear()} NIBAN Recruitment Agency. All
              rights reserved.
            </p>
            <p>Connecting Talent Globally</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
