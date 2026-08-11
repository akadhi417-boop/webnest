import { ExternalLink, Sparkles, CheckCircle, Globe } from "lucide-react";
import pVsTraders from "@/assets/portfolio-vstraders.png";
import pExcella from "@/assets/portfolio-excella.png";
import pZorVisuals from "@/assets/portfolio-zorvisuals.png";

const projects = [
  {
    img: pVsTraders,
    title: "VS Traders & VS Rental",
    domain: "vstraders.in",
    url: "https://vstraders.in/",
    category: "Building Materials & Machinery Hire",
    desc: "A comprehensive digital platform engineered for a premier building materials merchant and heavy machinery hire agency in Kerala. Features live product ledgers, machinery rental dockets, and direct WhatsApp quote automation.",
    tags: ["Commercial Portal", "Material Ledgers", "Instant Hire Booking", "SEO Optimized"],
    accentColor: "border-orange-500/30 text-orange-600 bg-orange-500/10"
  },
  {
    img: pZorVisuals,
    title: "ZOR VISUALS",
    domain: "zorvisuals.vercel.app",
    url: "https://zorvisuals.vercel.app/",
    category: "Cinematic Media & Branding Studio",
    desc: "A luxury visual experience created for an elite creative studio. Built with bespoke editorial aesthetics, cinematic video embeds, smooth animations, and tailored service booking workflows.",
    tags: ["Luxury UI/UX", "Cinematic Portfolio", "Dynamic Animations", "High Conversion"],
    accentColor: "border-amber-500/30 text-amber-700 bg-amber-500/10"
  },
  {
    img: pExcella,
    title: "Excella Academy",
    domain: "excellaacademy.co.in",
    url: "https://excellaacademy.co.in/",
    category: "Education & Career Academy",
    desc: "A modern academic web portal built for Excella Academy to present professional and skill-based learning programs, manage admissions inquiries, and connect prospective students directly with advisors.",
    tags: ["Course Catalog", "Admissions Inquiries", "Clean Architecture", "Fast Response"],
    accentColor: "border-blue-500/30 text-blue-700 bg-blue-500/10"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-background py-16 sm:py-24 md:py-32">
      {/* Soft Ambient Background Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.7 0.2 45 / 0.3), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.7 0.2 45 / 0.25), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="reveal flex flex-col items-start justify-between gap-5 md:flex-row md:items-end mb-10 sm:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              <Sparkles size={13} className="text-primary" />
              Featured Client Projects
            </span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Real Work. Real Impact.
              <span className="block text-primary mt-1">
                Built to Elevate Brands.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-foreground/70 md:max-w-md leading-relaxed">
            Take a look at live websites and digital experiences designed, engineered, and delivered in-house by WebNest.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal card-tilt group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface/60 backdrop-blur-sm transition-smooth hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Browser Window Header Mockup */}
              <div className="flex items-center justify-between border-b border-border bg-background px-3.5 sm:px-4 py-2.5 sm:py-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-surface px-2 py-0.5 text-[10px] sm:text-[11px] font-mono text-foreground/60 border border-border">
                  <Globe size={11} className="text-primary" />
                  <span className="truncate max-w-[130px] sm:max-w-[150px]">{p.domain}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </div>
              </div>

              {/* Preview Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted/40 border-b border-border">
                <img
                  src={p.img}
                  alt={`${p.title} website preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating Category Badge */}
                <div className="absolute left-2.5 top-2.5 sm:left-3 sm:top-3">
                  <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold backdrop-blur-md shadow-sm ${p.accentColor}`}>
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/75">
                    {p.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border bg-background/80 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-medium text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-border/80 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground shadow-soft active:scale-95"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>

                  <a
                    href={`https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%20saw%20your%20work%20on%20${encodeURIComponent(p.title)}%20and%20want%20something%20similar.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-center xs:text-left text-foreground/60 hover:text-primary transition-colors py-1"
                  >
                    Request Similar →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="reveal mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl border border-border bg-surface/50 p-6 sm:p-8 md:p-10 shadow-soft">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3 items-center text-left">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <CheckCircle size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="font-bold text-foreground text-xs sm:text-sm">100% Custom Engineered</div>
                <div className="text-[10px] sm:text-xs text-foreground/60">No generic templates or bloat</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <CheckCircle size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="font-bold text-foreground text-xs sm:text-sm">Sub-second Page Speeds</div>
                <div className="text-[10px] sm:text-xs text-foreground/60">Optimized for maximum conversion</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <CheckCircle size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="font-bold text-foreground text-xs sm:text-sm">Post-Launch Support</div>
                <div className="text-[10px] sm:text-xs text-foreground/60">Continuous maintenance &amp; updates</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}