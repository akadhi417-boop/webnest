const steps = [
  { n: "01", title: "Discuss", desc: "We listen, learn your goals, and shape the vision." },
  { n: "02", title: "Design", desc: "Wireframes and pixel-perfect designs you'll love." },
  { n: "03", title: "Develop", desc: "Clean, scalable code built with modern best practices." },
  { n: "04", title: "Launch", desc: "Go live confidently with full support post-launch." },
];

export function Process() {
  return (
    <section id="process" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Process
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            From idea to impact in 4 steps
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
          />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full bg-background text-base font-bold text-primary shadow-soft ring-2 ring-primary animate-pulse-ring transition-smooth group-hover:scale-110">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}