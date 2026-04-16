export function MarqueeSection() {
  const items = [
    "WORK ABROAD",
    "STUDY ABROAD",
    "VISA ASSISTANCE",
    "FLIGHT BOOKING",
    "CAREER GUIDANCE",
    "UNIVERSITY PLACEMENT",
    "ENGLISH COACHING",
  ];

  return (
    <section className="py-8 bg-primary text-primary-foreground overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-md font-medium tracking-widest flex items-center gap-8"
          >
            {item}
            <span className="w-2 h-2 bg-secondary rounded-full" />
          </span>
        ))}
      </div>
    </section>
  );
}
