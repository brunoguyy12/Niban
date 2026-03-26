"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const teamMembers = [
  {
    name: "Jean-Pierre Niyonzima",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in international recruitment and a passion for connecting Burundian talent with global opportunities.",
    image:
      // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      "/images/ceo.jpeg",
  },
  {
    name: "Marie-Claire Ndayisaba",
    role: "Director of Operations",
    bio: "Expert in visa processing and immigration services with connections across 25+ countries.",
    image:
      // "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
      "/images/team1.jpg",
  },
  {
    name: "Emmanuel Hakizimana",
    role: "Head of Education Services",
    bio: "Former university advisor helping students achieve their academic dreams abroad for over a decade.",
    image:
      // "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      "/images/team2.jpg",
  },
  {
    name: "Diane Uwimana",
    role: "Travel & Logistics Manager",
    bio: "Certified travel consultant ensuring smooth journeys for all our clients worldwide.",
    image:
      // "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      "/images/team3.jpg",
  },
];

const sdgGoals = [
  {
    number: 4,
    title: "Quality Education",
    description:
      "We provide access to quality education globally by connecting students with top universities worldwide, offering scholarships guidance and educational counseling.",
    color: "bg-[#C5192D]",
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    description:
      "By facilitating international employment, we create pathways to decent work and contribute to economic growth both in Burundi and destination countries.",
    color: "bg-[#A21942]",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description:
      "We bridge opportunity gaps by enabling people from Burundi to access global job markets and educational institutions regardless of their background.",
    color: "bg-[#DD1367]",
  },
  {
    number: 17,
    title: "Partnerships for Goals",
    description:
      "We build strong partnerships with international organizations, universities, and employers to create sustainable pathways for our clients.",
    color: "bg-[#19486A]",
  },
];

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in all our dealings.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Every decision we make prioritizes the wellbeing and success of our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description:
      "We embrace diversity and think globally while acting locally.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e56a008_1px,transparent_1px),linear-gradient(to_bottom,#1e56a008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="animate-fade-up animation-delay-200 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Building Bridges to{" "}
              <span className="text-primary">Global Success</span>
            </h1>
            <p className="animate-fade-up animation-delay-400 mt-6 text-lg text-muted-foreground leading-relaxed">
              Since 2018, Niban Recruitment Agency has been at the forefront of
              connecting talented individuals from Burundi with life-changing
              opportunities across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl" />
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=900&fit=crop"
                  src="/images/ceo.jpeg"
                  alt="Jean-Pierre Niyonzima - CEO"
                  width={600}
                  height={700}
                  className="object-cover w-full aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-background">
                    Jean-Pierre Niyonzima
                  </h3>
                  <p className="text-background/80">
                    Founder & Chief Executive Officer
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
                Message from the CEO
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Empowering Dreams, One Journey at a Time
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  "When I founded Niban Recruitment Agency in 2018, I had a
                  simple but powerful vision: to give every talented individual
                  in Burundi the chance to realize their full potential on the
                  global stage."
                </p>
                <p>
                  "Having experienced the transformative power of international
                  opportunities firsthand, I understood both the challenges and
                  the immense rewards that come with working and studying
                  abroad."
                </p>
                <p>
                  "Today, I'm proud to lead a team of dedicated professionals
                  who share this vision. Every successful placement, every
                  student who achieves their academic dreams, every family
                  reunited - these are the moments that drive us forward."
                </p>
                <p className="font-medium text-foreground">
                  "At Niban, we don't just process applications - we transform
                  lives."
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-0.5 bg-secondary" />
                <span className="text-muted-foreground italic">
                  Jean-Pierre Niyonzima
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-background rounded-3xl p-8 md:p-12 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals from Burundi by providing comprehensive,
                reliable, and personalized services that enable them to access
                global employment opportunities, world-class education, and
                seamless travel experiences. We are committed to being the
                trusted bridge between local talent and international
                possibilities.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Facilitate legal international employment",
                  "Guide students to top universities",
                  "Ensure safe and affordable travel",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To become East Africa's leading recruitment and education
                consultancy, recognized globally for our integrity, success
                rate, and positive impact on the lives of thousands of
                individuals and families.
              </p>
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 italic">
                  "By 2030, we envision having facilitated over 10,000
                  successful international placements and educational
                  enrollments, creating a ripple effect of prosperity and
                  knowledge transfer for Burundi and beyond."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Niban.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-2xl bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
              The People Behind Niban
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leadership Team
            </h3>
            <p className="text-muted-foreground">
              A dedicated team of professionals committed to your success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover aspect-square w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Contribution */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
              Our Global Impact
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Contributing to the UN Sustainable Development Goals
            </h3>
            <p className="text-muted-foreground">
              At Niban, we align our work with the United Nations' vision for a
              better world. Here's how we contribute to the SDGs:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {sdgGoals.map((goal) => (
              <div
                key={goal.number}
                className="flex gap-6 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`${goal.color} w-16 h-16 rounded-xl flex items-center justify-center shrink-0`}
                >
                  <span className="text-2xl font-bold text-white">
                    {goal.number}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Image
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=400&fit=crop"
              alt="UN SDG Goals"
              width={1200}
              height={400}
              className="rounded-3xl object-cover w-full h-64"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join the hundreds of successful individuals who have transformed
            their lives with Niban Recruitment Agency.
          </p>
          <Link href="/get-started">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-base group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
