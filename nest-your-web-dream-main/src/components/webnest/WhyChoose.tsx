import { Zap, Search, Palette, Tag } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "Launch-ready sites in weeks, not months." },
  { icon: Search, title: "SEO Friendly", desc: "Built to rank from day one." },
  { icon: Palette, title: "Modern Design", desc: "Pixel-perfect, on-brand experiences." },
  { icon: Tag, title: "Affordable Pricing", desc: "Premium quality, sensible budgets." },
];

export function WhyChoose() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal reveal-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why WebNest
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              The smart choice for ambitious brands
            </h2>
            <p className="mt-5 text-foreground/70">
              We obsess over the details so your business can focus on growth.
              Every WebNest site is engineered for speed, designed for
              conversion, and built to last.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal reveal-right rounded-2xl border border-border bg-surface p-6 transition-smooth hover:-translate-y-1 hover:shadow-soft"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <r.icon size={20} />
                </div>
                <h3 className="mt-4 font-bold text-foreground">{r.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/70">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}