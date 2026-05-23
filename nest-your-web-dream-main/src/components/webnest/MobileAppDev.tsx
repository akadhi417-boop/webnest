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
  Cpu, 
  ShieldCheck, 
  SmartphoneIcon,
  Zap,
  Activity
} from "lucide-react";

// Service details list
const features = [
  {
    icon: Smartphone,
    title: "Android App Development",
    desc: "High-performance native Android apps built with Kotlin and Modern Jetpack architectures. Fully optimized for speed and Android OS integrations.",
    tag: "Native Kotlin",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20"
  },
  {
    icon: Apple,
    title: "iOS App Development",
    desc: "Premium iOS applications written in Swift and SwiftUI. Designed to match Apple's Human Interface Guidelines with fluid animations and premium responsiveness.",
    tag: "Native Swift",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    icon: Layers,
    title: "Cross-Platform Apps",
    desc: "Versatile hybrid applications built with React Native and Flutter. Get single-codebase efficiency that runs natively on both platforms to cut down your market release time.",
    tag: "RN & Flutter",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-first interface designs and interactive prototypes. We construct responsive wireframes and visually stunning mockups tailored to maximize retention.",
    tag: "Figma Prototyping",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20"
  },
  {
    icon: Database,
    title: "API Integration",
    desc: "Flawless connections with payment systems, CRM solutions, push notifications, and custom GraphQL/REST backends with secure encryption standards.",
    tag: "Secure Endpoints",
    tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  },
  {
    icon: Wrench,
    title: "App Maintenance & Support",
    desc: "24/7 post-launch upkeep, quick bug fixes, continuous server monitoring, and updates to support the newest iOS and Android operating system releases.",
    tag: "Ongoing SLA",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  }
];

export function MobileAppDev() {
  return (
    <section 
      id="mobile-app" 
      className="relative overflow-hidden py-24 md:py-32 bg-[#0B0F17] text-slate-100 border-y border-white/5"
    >
      {/* Decorative Glow Elements */}
      <div 
        aria-hidden
        className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, oklch(0.6 0.25 240) 0%, transparent 70%)" // Blue glow
        }}
      />
      <div 
        aria-hidden
        className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, oklch(0.6 0.25 300) 0%, transparent 70%)" // Purple/Violet glow
        }}
      />
      <div 
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full opacity-10 blur-[90px]"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.2 45) 0%, transparent 70%)" // Brand orange highlight
        }}
      />

      {/* Grid Pattern overlay */}
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] dots-bg"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Header Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-center mb-20">
          <div className="lg:col-span-7 reveal reveal-left space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-[0_0_15px_rgba(255,109,31,0.15)] animate-bounce-subtle">
                NEW SERVICE 🚀
              </span>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/30 px-3.5 py-1 rounded-full">
                iOS & Android
              </span>
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Mobile App Development
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-bold text-3xl md:text-4xl lg:text-5xl">
                Custom Android & iOS Applications Built for Modern Businesses
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              We design and develop high-performance mobile applications for startups, businesses, and brands. 
              From UI/UX design to deployment, WebNest creates scalable, secure, and user-friendly Android 
              and iOS apps tailored to your business goals.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-sm font-semibold text-slate-400 mr-2">Core Tech Stack:</span>
              <span className="px-3 py-1 text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200 rounded-lg hover:border-blue-400 transition-colors">React Native</span>
              <span className="px-3 py-1 text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200 rounded-lg hover:border-sky-400 transition-colors">Flutter</span>
              <span className="px-3 py-1 text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200 rounded-lg hover:border-violet-400 transition-colors">Kotlin</span>
              <span className="px-3 py-1 text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200 rounded-lg hover:border-orange-400 transition-colors">Swift</span>
            </div>
          </div>

          <div className="lg:col-span-5 reveal reveal-right flex justify-center">
            {/* Tagline Box - Callout UI */}
            <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="absolute -right-3 -top-3 h-10 w-10 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                💡
              </div>
              <p className="text-xl font-medium italic text-slate-100 leading-relaxed">
                “Turning Ideas Into Powerful Mobile Experiences”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  WN
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">WebNest Mobile Lab</div>
                  <div className="text-xs text-slate-400">Design. Build. Scale.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Layout: Cards & Mockup Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start mt-12">
          
          {/* Left: Features Cards */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2 stagger">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal reveal-zoom card-tilt group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-smooth hover:border-white/20 hover:bg-white/[0.04]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Neon bottom glow line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500/40 via-purple-500/60 to-pink-500/40 opacity-0 transition-smooth group-hover:opacity-100" />
                
                {/* Glow dot in the corner */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/10 blur-xl opacity-0 transition-smooth group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-slate-300 transition-smooth group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-115 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                    <f.icon size={22} />
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded border ${f.tagColor} font-mono uppercase tracking-wider`}>
                    {f.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white transition-smooth group-hover:text-cyan-300">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {f.desc}
                </p>

                <ArrowUpRight
                  size={16}
                  className="absolute right-4 top-4 text-slate-600 transition-smooth group-hover:text-cyan-400 group-hover:rotate-12 group-hover:scale-120"
                />
              </div>
            ))}
          </div>

          {/* Right: Floating Interactive Mobile Mockup */}
          <div className="lg:col-span-5 relative flex justify-center py-8 lg:py-0 reveal reveal-right">
            
            {/* Soft backdrop glow rings */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl opacity-80" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-500/10 animate-spin-slow" />
            
            {/* Phone Container */}
            <div className="animate-float relative w-[300px] h-[600px] rounded-[48px] border-4 border-slate-700/80 bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col p-3 z-10">
              
              {/* iPhone Dynamic Island notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-full flex items-center justify-between px-3 z-20">
                <div className="w-2.5 h-2.5 bg-slate-800 rounded-full border border-slate-700/50" />
                <div className="w-4 h-1 bg-blue-500/50 rounded-full blur-[1px]" />
              </div>

              {/* Internal Screen Area */}
              <div className="flex-1 rounded-[38px] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 flex flex-col p-4 relative">
                
                {/* Screen Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 bg-purple-500/20 rounded-full blur-2xl" />
                <div className="absolute -left-20 -bottom-20 h-40 w-40 bg-cyan-500/20 rounded-full blur-2xl" />

                {/* Status Bar */}
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium px-2 pt-1 pb-4">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1">
                    <span>5G</span>
                    <div className="w-4 h-2 bg-slate-400 rounded-sm" />
                  </div>
                </div>

                {/* App Content Header */}
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">WebNest Studio</span>
                    <h4 className="text-sm font-bold text-white">App Sandbox</h4>
                  </div>
                  <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
                    🚀
                  </div>
                </div>

                {/* Stat Display Panel inside Screen */}
                <div className="mt-5 rounded-2xl bg-white/[0.05] border border-white/10 p-3.5 backdrop-blur-md">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Live Traffic</span>
                    <span className="text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded font-bold">+28%</span>
                  </div>
                  <div className="text-xl font-bold text-white mt-1">12,480 users</div>
                  <div className="mt-3 flex gap-1 items-end h-8">
                    <div className="w-full bg-indigo-500/20 h-3 rounded-sm" />
                    <div className="w-full bg-indigo-500/40 h-5 rounded-sm" />
                    <div className="w-full bg-indigo-500/60 h-4 rounded-sm animate-pulse" />
                    <div className="w-full bg-indigo-500/80 h-7 rounded-sm" />
                    <div className="w-full bg-cyan-400 h-8 rounded-sm shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  </div>
                </div>

                {/* Features List inside Screen */}
                <div className="mt-4 flex-1 space-y-2.5 overflow-hidden">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-1">Active Modules</div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="h-6 w-6 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                      Kotlin
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold text-white truncate">Android Core</div>
                      <div className="text-[9px] text-slate-400">Jetpack Compose UI</div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="h-6 w-6 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs">
                      Swift
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold text-white truncate">iOS Swift</div>
                      <div className="text-[9px] text-slate-400">SwiftUI framework</div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="h-6 w-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                      Cross
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold text-white truncate">React Native</div>
                      <div className="text-[9px] text-slate-400">Single Codebase App</div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Bottom interactive action button */}
                <div className="mt-4 pt-1">
                  <a
                    href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(255,109,31,0.3)] transition-transform active:scale-95"
                  >
                    Interactive Demo <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating floating tech badges outside phone */}
            <div className="absolute top-12 -left-12 p-3 bg-[#111622]/90 border border-white/10 rounded-2xl shadow-lg flex items-center gap-2 backdrop-blur-md animate-float" style={{ animationDelay: "1s" }}>
              <div className="h-6 w-6 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold font-mono">RN</div>
              <span className="text-[10px] text-slate-200 font-semibold">React Native</span>
            </div>
            
            <div className="absolute bottom-24 -right-12 p-3 bg-[#111622]/90 border border-white/10 rounded-2xl shadow-lg flex items-center gap-2 backdrop-blur-md animate-float" style={{ animationDelay: "2s" }}>
              <div className="h-6 w-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold font-mono">FL</div>
              <span className="text-[10px] text-slate-200 font-semibold">Flutter SDK</span>
            </div>

            <div className="absolute top-1/2 -right-8 p-2.5 bg-slate-900/90 border border-white/10 rounded-full shadow-lg flex items-center justify-center text-primary backdrop-blur-md animate-bounce-subtle">
              <Sparkles size={16} />
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-px bg-white/5 my-20" />

        {/* Statistics & CTAs Dashboard */}
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left: Statistics */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="reveal p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="text-3xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 inline-block">10+</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Apps Delivered</div>
              <div className="text-[10px] text-slate-500 mt-1 leading-tight">Concept to production</div>
            </div>

            <div className="reveal p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors" style={{ transitionDelay: "70ms" }}>
              <div className="text-3xl font-extrabold text-white flex items-center gap-1">
                <Zap size={20} className="text-yellow-400 animate-pulse" /> Fast
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Deployment</div>
              <div className="text-[10px] text-slate-500 mt-1 leading-tight">Iterative agile releases</div>
            </div>

            <div className="reveal p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors" style={{ transitionDelay: "140ms" }}>
              <div className="text-3xl font-extrabold text-white flex items-center gap-1">
                <Palette size={20} className="text-pink-400" /> Modern
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">UI/UX Layouts</div>
              <div className="text-[10px] text-slate-500 mt-1 leading-tight">Built to optimize engagement</div>
            </div>

            <div className="reveal p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors" style={{ transitionDelay: "210ms" }}>
              <div className="text-3xl font-extrabold text-white flex items-center gap-1">
                <ShieldCheck size={20} className="text-green-400" /> Secure
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Architecture</div>
              <div className="text-[10px] text-slate-500 mt-1 leading-tight">Encrypted data vaults</div>
            </div>
          </div>

          {/* Right: CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-4 reveal">
            <a
              href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_rgba(255,109,31,0.3)] transition-smooth hover:shadow-[0_8px_40px_rgba(255,109,31,0.5)] hover:-translate-y-0.5"
            >
              Start Your App Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/15 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-smooth hover:border-white hover:bg-white hover:text-[#0B0F17]"
            >
              View Portfolio
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
