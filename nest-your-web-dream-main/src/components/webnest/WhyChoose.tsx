import { Zap, Search, Palette, Tag } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "Launch-ready sites and mobile apps in weeks, not months." },
  { icon: Search, title: "SEO Friendly", desc: "Built to rank on Google search and maps from day one." },
  { icon: Palette, title: "Modern Design", desc: "Pixel-perfect, on-brand luxury digital experiences." },
  { icon: Tag, title: "Affordable Pricing", desc: "High-end bespoke quality tailored for sensible budgets." },
];

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal reveal-left">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
              Why WebNest
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              The smart choice for ambitious brands
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-foreground/70 leading-relaxed">
              We obsess over the details so your business can focus on growth.
              Every WebNest project is engineered for speed, designed for
              conversion, and built to scale with your ambitions.
            </p>
          </div>

          <div className="grid gap-3.5 sm:gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal reveal-right rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-smooth hover:-translate-y-1 hover:shadow-soft"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <r.icon size={18} className="sm:w-5 sm:h-5" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-foreground">{r.title}</h3>
                <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}