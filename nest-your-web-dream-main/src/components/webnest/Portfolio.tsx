import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    img: p1,
    title: "Bloom Outfits",
    tag: "E-commerce",
    desc: "A premium fashion store with seamless checkout and 3x conversion lift.",
  },
  {
    img: p2,
    title: "Synapse Analytics",
    tag: "SaaS Dashboard",
    desc: "Realtime data visualization platform built for enterprise teams.",
  },
  {
    img: p3,
    title: "Hestia Restaurant",
    tag: "Hospitality",
    desc: "Elegant booking experience with menu showcase and online orders.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Selected Work
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Crafted with care, built to perform
            </h2>
          </div>
          <p className="text-foreground/70 md:max-w-sm">
            A few recent projects we're proud of — every one designed and
            developed in-house.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-2xl border border-border bg-background transition-smooth hover:-translate-y-1 hover:shadow-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:gap-3">
                  View Project <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}