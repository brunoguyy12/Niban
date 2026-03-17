"use client";

import { Award, Users, Globe2, Clock } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in every placement and service we provide.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building lasting relationships with clients, partners, and the communities we serve.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Connected to opportunities worldwide through our extensive network of partners.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "Consistent, dependable service that you can count on throughout your journey.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
              About Niban
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Bridging Burundi to the World
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to connect talent with opportunity, Niban
                Recruitment Agency has been at the forefront of international
                recruitment and education consulting since 2018. Based in
                Burundi, we understand the dreams and aspirations of our
                community.
              </p>
              <p>
                Our mission is simple: to be the bridge that connects ambitious
                individuals with life-changing opportunities abroad. Whether you
                are seeking employment overseas, dreaming of studying at a
                prestigious international university, or planning your next
                journey, we are here to guide you every step of the way.
              </p>
              <p>
                With partnerships across 25+ countries and over 150 universities
                worldwide, we have the network and expertise to turn your global
                aspirations into reality.
              </p>
            </div>

            {/* Values Grid */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Composition */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-125 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Card */}
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold text-lg">
                      7+
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Years of Experience
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Serving our community
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    +500 happy clients
                  </span>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-12 right-12 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
