import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-webnest.jpg";
import logo from "@/assets/logo/webnest-48.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.7 0.2 45 / 0.35), transparent)",
        }}
      />

      {/* Animated dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dots-bg opacity-60"
      />

      {/* Decorative spinning ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[10%] h-64 w-64 rounded-full border border-primary/20 animate-spin-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[10%] h-64 w-64 rounded-full border border-dashed border-primary/10"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: text */}
        <div className="reveal">
          <span className="animate-bounce-subtle inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
            <Sparkles size={14} className="text-primary" />
            Premium Web Development Studio
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-[72px]">
            <span className="animate-word animate-word-1 inline-block">We</span>{" "}
            <span className="animate-word animate-word-2 inline-block">Build</span>{" "}
            <span className="animate-word animate-word-3 inline-block">Websites</span>
            <br />
            That{" "}
            <span className="relative inline-block animate-shimmer animate-word animate-word-4">
              Grow
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full text-primary/60"
                fill="currentColor"
              >
                <path d="M0 6 C 50 0, 150 12, 200 4 L200 12 L0 12 Z" />
              </svg>
            </span>{" "}
            Your Business
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70 animate-word animate-word-4" style={{ animationDelay: "0.45s" }}>
            WebNest creates fast, modern, and scalable digital solutions for
            startups and businesses ready to dominate their market.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5 animate-pulse-ring"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/95 p-0.5 shadow-sm">
                <img src={logo} alt="" aria-hidden className="h-full w-full object-contain" />
              </span>
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground transition-smooth hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right: hero image with float animation */}
        <div className="reveal relative animate-float">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-accent opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
            <img
              src={heroImg}
              alt="WebNest creative web development showcase"
              width={1280}
              height={1280}
              className="h-full w-full object-cover transition-smooth hover:scale-105"
            />
          </div>
          {/* Lightning Fast badge */}
          <div className="animate-slide-up absolute -bottom-6 -left-6 rounded-2xl border border-border bg-background px-5 py-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="animate-pulse-ring grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                ⚡
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Lightning Fast</div>
                <div className="text-xs text-foreground/60">Avg load &lt; 1.2s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}