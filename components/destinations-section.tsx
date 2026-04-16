"use client";

import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    country: "South Korea",
    flag: "KR",
    type: "Study & Work",
    opportunities: "120+",
    image:
      // "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
      // another picture with a white background for South Korea in the city
      // GIve me a better picture for city life
      "images/korea.jpg",
  },
  {
    country: "India",
    flag: "IN",
    type: "Study",
    opportunities: "200+",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  },
  {
    country: "United Arab Emirates",
    flag: "AE",
    type: "Work",
    opportunities: "85+",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
  {
    country: "Italy",
    flag: "IT",
    type: "Study",
    opportunities: "150+",
    image:
      // "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
      // "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
      "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    country: "Kosovo",
    flag: "XK",
    type: "Study & Work",
    opportunities: "90+",
    image:
      // "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
      "images/kosovo.jpg",
  },
  {
    country: "Malaysia",
    flag: "MY",
    type: "Study",
    opportunities: "75+",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
  },
];

export function DestinationsSection() {
  return (
    <section
      id="destinations"
      className="py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Destinations
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Popular destinations
              <br />
              for our clients
            </h2>
          </div>
          <p className="text-background/70 max-w-md">
            Explore opportunities in these top destinations where we have helped
            hundreds of clients achieve their dreams.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={destination.country}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={destination.image}
                alt={destination.country}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top */}
                <div className="flex justify-between items-start">
                  <span className="inline-block bg-background/20 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-medium">
                    {destination.type}
                  </span>
                  <div className="w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-background" />
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  <h3 className="text-2xl font-bold text-background">
                    {destination.country}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-background/70 text-sm">
                      {destination.opportunities} opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-secondary font-medium group">
            View all destinations
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
