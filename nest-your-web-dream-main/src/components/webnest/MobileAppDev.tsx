import { 
  Smartphone, 
  Apple, 
  Layers, 
  Palette, 
  Database, 
  Wrench, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  Cpu,
  Code2
} from "lucide-react";

// Service details list
const features = [
  {
    icon: Smartphone,
    title: "Android App Development",
    desc: "High-performance native Android applications built with Kotlin and Jetpack Compose. Fully optimized for speed, security, and hardware integration.",
    tag: "Native Kotlin",
  },
  {
    icon: Apple,
    title: "iOS App Development",
    desc: "Premium iOS applications written in Swift and SwiftUI. Designed to match Apple's Human Interface Guidelines with fluid animations and responsiveness.",
    tag: "Native Swift",
  },
  {
    icon: Layers,
    title: "Cross-Platform Apps",
    desc: "Versatile hybrid apps built with React Native and Flutter. Single codebase efficiency running natively on both iOS and Android to accelerate launch.",
    tag: "RN & Flutter",
  },
  {
    icon: Palette,
    title: "Mobile UI/UX Design",
    desc: "User-centric interface designs and interactive prototypes. We build wireframes and visually stunning mockups tailored to maximize retention.",
    tag: "UI/UX & Figma",
  },
  {
    icon: Database,
    title: "API & Backend Integration",
    desc: "Seamless integration with cloud backends, secure payment gateways, real-time databases, authentication, and push notifications.",
    tag: "Cloud & APIs",
  },
  {
    icon: Wrench,
    title: "App Store Launch & Maintenance",
    desc: "End-to-end publishing support on Google Play and Apple App Store, regular OS compatibility updates, performance tuning, and 24/7 SLA.",
    tag: "Store Launch & SLA",
  }
];

const highlights = [
  {
    icon: Zap,
    title: "Ultra-Fast Performance",
    desc: "Optimized 60/120 FPS fluid interactions & zero lag"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Encrypted data storage and secure API communication"
  },
  {
    icon: Palette,
    title: "Modern Bespoke UI",
    desc: "Designed to match your brand and convert users"
  },
  {
    icon: Cpu,
    title: "End-to-End Delivery",
    desc: "From architecture & design to Play Store & App Store"
  }
];

export function MobileAppDev() {
  return (
    <section 
      id="mobile-app" 
      className="relative overflow-hidden py-16 sm:py-24 md:py-32 bg-surface/50 border-y border-border"
    >
      {/* Decorative Glow Elements */}
      <div 
        aria-hidden
        className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.7 0.2 45 / 0.3), transparent)"
        }}
      />
      <div 
        aria-hidden
        className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.7 0.2 45 / 0.25), transparent)"
        }}
      />

      {/* Decorative spinning ring (desktop only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-[12%] hidden h-72 w-72 rounded-full border border-primary/15 animate-spin-slow lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-[12%] hidden h-72 w-72 rounded-full border border-dashed border-primary/10 lg:block"
      />

      {/* Grid Pattern overlay */}
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 dots-bg"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header Grid */}
        <div className="grid gap-10 lg:grid-cols-12 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7 reveal reveal-left space-y-5 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary shadow-soft animate-bounce-subtle">
                <Sparkles size={12} className="text-primary" /> NEW SERVICE
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[11px] sm:text-xs font-semibold text-foreground/80 shadow-soft">
                iOS &amp; Android
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Mobile App Development
              <span className="block mt-1 sm:mt-2 text-primary font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl">
                Custom Android &amp; iOS Applications Built to Scale
              </span>
            </h2>
            
            <p className="text-sm sm:text-lg text-foreground/70 leading-relaxed max-w-2xl">
              We design, build, and deploy high-performance mobile applications for startups, businesses, and enterprises. 
              From intuitive UI/UX design to robust backend integration, WebNest creates scalable, secure, and user-friendly 
              mobile apps tailored to your business goals.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-2">
              <span className="text-xs sm:text-sm font-semibold text-foreground/80 mr-1 w-full sm:w-auto">Core Tech Stack:</span>
              <span className="px-2.5 py-1 text-[11px] sm:text-xs font-medium bg-background border border-border text-foreground/80 rounded-lg shadow-soft">React Native</span>
              <span className="px-2.5 py-1 text-[11px] sm:text-xs font-medium bg-background border border-border text-foreground/80 rounded-lg shadow-soft">Flutter</span>
              <span className="px-2.5 py-1 text-[11px] sm:text-xs font-medium bg-background border border-border text-foreground/80 rounded-lg shadow-soft">Kotlin</span>
              <span className="px-2.5 py-1 text-[11px] sm:text-xs font-medium bg-background border border-border text-foreground/80 rounded-lg shadow-soft">Swift &amp; SwiftUI</span>
              <span className="px-2.5 py-1 text-[11px] sm:text-xs font-medium bg-background border border-border text-foreground/80 rounded-lg shadow-soft">Firebase &amp; APIs</span>
            </div>
          </div>

          <div className="lg:col-span-5 reveal reveal-right flex justify-center">
            {/* Highlight Callout Box */}
            <div className="relative w-full max-w-md rounded-2xl sm:rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  <Smartphone size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">WebNest Mobile Lab</div>
                  <div className="text-xs text-foreground/60">Design • Build • Scale</div>
                </div>
              </div>

              <p className="text-base sm:text-lg font-medium italic text-foreground leading-relaxed">
                “Turning your business ideas into fast, intuitive, and revenue-generating mobile experiences.”
              </p>

              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-border space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Native Kotlin &amp; Swift or Hybrid cross-platform</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Full Google Play &amp; Apple App Store launch</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Custom UI/UX prototypes designed for high retention</span>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <a
                  href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20Mobile%20App%20Development."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5 active:scale-95"
                >
                  Discuss Your App Idea
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Core Layout: Service Cards & Interactive Device Mockup */}
        <div className="grid gap-10 lg:grid-cols-12 items-start mt-6 sm:mt-8">
          
          {/* Left: Features Cards */}
          <div className="lg:col-span-7 grid gap-4 sm:gap-6 sm:grid-cols-2 stagger">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal reveal-zoom card-tilt group relative overflow-hidden rounded-2xl border border-border bg-background p-5 sm:p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1 hover:shadow-card"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Brand bottom accent strip on hover */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 transition-smooth group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <f.icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-border bg-surface font-semibold text-foreground/70 tracking-wider">
                    {f.tag}
                  </span>
                </div>

                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {f.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-foreground/70">
                  {f.desc}
                </p>

                <ArrowUpRight
                  size={16}
                  className="absolute right-4 top-4 sm:right-5 sm:top-5 text-foreground/30 transition-smooth group-hover:text-primary group-hover:rotate-12 group-hover:scale-125"
                />
              </div>
            ))}
          </div>

          {/* Right: Floating Mobile Device Mockup */}
          <div className="lg:col-span-5 relative flex justify-center py-4 lg:py-0 reveal reveal-right overflow-visible">
            
            {/* Soft backdrop warm glow */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 sm:h-80 sm:w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl opacity-70 pointer-events-none" />
            
            {/* Phone Container */}
            <div className="animate-float relative w-[280px] sm:w-[300px] h-[550px] sm:h-[590px] rounded-[42px] sm:rounded-[48px] border-4 border-foreground/80 bg-foreground shadow-card overflow-hidden flex flex-col p-2.5 sm:p-3 z-10">
              
              {/* Dynamic Island notch */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-4.5 sm:h-5 bg-[#111111] rounded-full flex items-center justify-between px-3 z-20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-800 rounded-full border border-slate-700/50" />
                <div className="w-3 sm:w-3.5 h-1 bg-primary/60 rounded-full blur-[1px]" />
              </div>

              {/* Internal Screen Area */}
              <div className="flex-1 rounded-[32px] sm:rounded-[38px] overflow-hidden bg-gradient-to-b from-[#181D26] via-[#10141D] to-[#0A0D14] flex flex-col p-3.5 sm:p-4 relative text-slate-100">
                
                {/* Screen Ambient Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 h-40 w-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Status Bar */}
                <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-slate-400 font-medium px-2 pt-1 pb-2.5">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="w-3.5 h-2 rounded-sm border border-slate-400 flex items-center p-0.5">
                      <div className="w-full h-full bg-slate-300 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* App Content Header */}
                <div className="flex justify-between items-center mt-1.5 px-1">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-primary font-semibold uppercase tracking-wider">WebNest Studio</span>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Client App Showcase</h4>
                  </div>
                  <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/10 flex items-center justify-center text-xs">
                    ⚡
                  </div>
                </div>

                {/* Stat Display Panel inside Screen */}
                <div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/10 p-3 sm:p-3.5 backdrop-blur-md">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Performance</span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold border border-emerald-500/20">99.8% Fast</span>
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-white mt-1">120 FPS Fluid</div>
                  <div className="mt-2.5 sm:mt-3 flex gap-1 items-end h-6 sm:h-7">
                    <div className="w-full bg-primary/20 h-2 rounded-sm" />
                    <div className="w-full bg-primary/40 h-3.5 rounded-sm" />
                    <div className="w-full bg-primary/60 h-3 rounded-sm animate-pulse" />
                    <div className="w-full bg-primary/80 h-5 rounded-sm" />
                    <div className="w-full bg-primary h-6 sm:h-7 rounded-sm shadow-[0_0_8px_rgba(255,109,31,0.5)]" />
                  </div>
                </div>

                {/* Active Modules inside Screen */}
                <div className="mt-3 flex-1 space-y-1.5 sm:space-y-2 overflow-hidden">
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-1">Native Capabilities</div>
                  
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/[0.04] border border-white/5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-md sm:rounded-lg bg-primary/20 flex items-center justify-center text-primary text-[9px] sm:text-[10px] font-bold">
                      KT
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold text-white truncate">Android Native</div>
                      <div className="text-[8px] sm:text-[9px] text-slate-400">Jetpack Compose UI</div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/[0.04] border border-white/5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-md sm:rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-[9px] sm:text-[10px] font-bold">
                      SW
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold text-white truncate">iOS Native</div>
                      <div className="text-[8px] sm:text-[9px] text-slate-400">SwiftUI &amp; Metal Engine</div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  </div>

                  <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/[0.04] border border-white/5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-md sm:rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-[9px] sm:text-[10px] font-bold">
                      HY
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold text-white truncate">React Native &amp; Flutter</div>
                      <div className="text-[8px] sm:text-[9px] text-slate-400">Cross-Platform Sync</div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Bottom interactive action button */}
                <div className="mt-2.5 pt-1">
                  <a
                    href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27d%20like%20to%20request%20a%20mobile%20app%20consultation."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center justify-center gap-1.5 shadow-glow transition-transform active:scale-95 hover:opacity-95"
                  >
                    Start App Build <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating tech badges (positioned safely) */}
            <div className="hidden sm:flex absolute top-10 -left-6 sm:-left-10 p-2.5 sm:p-3 bg-background/95 border border-border rounded-2xl shadow-card items-center gap-2.5 backdrop-blur-md animate-float" style={{ animationDelay: "1s" }}>
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                <Code2 size={14} />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-foreground font-bold leading-tight">React Native</div>
                <div className="text-[9px] sm:text-[10px] text-foreground/60">&amp; Flutter</div>
              </div>
            </div>
            
            <div className="hidden sm:flex absolute bottom-20 -right-6 sm:-right-10 p-2.5 sm:p-3 bg-background/95 border border-border rounded-2xl shadow-card items-center gap-2.5 backdrop-blur-md animate-float" style={{ animationDelay: "2s" }}>
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                <Apple size={14} />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-foreground font-bold leading-tight">Native Swift</div>
                <div className="text-[9px] sm:text-[10px] text-foreground/60">&amp; Kotlin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-px bg-border/80 my-10 sm:my-16" />

        {/* Highlights & CTAs Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          
          {/* Left: 4 Highlights */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((h, i) => (
              <div 
                key={h.title}
                className="reveal p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-background border border-border shadow-soft hover:shadow-card hover:border-primary/40 transition-smooth"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl bg-primary/10 text-primary mb-2.5 sm:mb-3">
                  <h.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-foreground leading-snug">{h.title}</div>
                <div className="text-[10px] sm:text-[11px] text-foreground/60 mt-1 leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>

          {/* Right: CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-4 reveal">
            <a
              href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20building%20a%20Mobile%20App."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5 active:scale-95"
            >
              Start Your App Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/20 bg-background px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-semibold text-foreground transition-smooth hover:border-foreground hover:bg-foreground hover:text-background active:scale-95"
            >
              Get a Quote
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
