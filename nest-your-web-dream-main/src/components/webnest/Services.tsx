import { Code2, Palette, ShoppingBag, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom-built, blazing-fast websites with clean code and modern frameworks.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces designed to convert visitors into customers.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    desc: "Powerful online stores that scale with your business and drive sales.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keep your site secure, updated, and performing at its peak — 24/7.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything you need to win online
          </h2>
          <p className="mt-4 text-foreground/70">
            From first sketch to launch and beyond — we handle every pixel and
            line of code.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal reveal-zoom card-tilt group relative overflow-hidden rounded-2xl border border-border bg-surface p-7"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* hover glow strip */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transition-smooth group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
              <ArrowUpRight
                size={18}
                className="absolute right-5 top-5 text-foreground/30 transition-smooth group-hover:text-primary group-hover:rotate-12 group-hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}