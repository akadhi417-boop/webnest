const steps = [
  { n: "01", title: "Discuss & Strategy", desc: "We listen to your business goals, target audience, and shape the architecture." },
  { n: "02", title: "UI/UX Design", desc: "Custom prototypes and responsive mockups tailored for maximum user retention." },
  { n: "03", title: "Develop & Test", desc: "Clean, blazing-fast code engineered with rigorous quality checks and SEO." },
  { n: "04", title: "Launch & Support", desc: "Smooth production deployment with continuous performance updates and 24/7 SLA." },
];

export function Process() {
  return (
    <section id="process" className="bg-surface py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
            Our Process
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            From idea to impact in 4 steps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            A battle-tested workflow designed for rapid delivery and zero friction.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />
          
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-0 p-4 sm:p-0 rounded-2xl bg-background sm:bg-transparent border border-border sm:border-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10 shrink-0 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-background text-sm sm:text-base font-bold text-primary shadow-soft ring-2 ring-primary animate-pulse-ring transition-smooth">
                {s.n}
              </div>
              <div>
                <h3 className="sm:mt-5 text-base sm:text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}