import { ArrowRight, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="reveal reveal-left space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                About Webnest
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                We don't just write code. We build the digital backbone of businesses that mean business.
              </h2>
            </div>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              Webnest is a freelance IT company specialising in web development, app development, and IT support — crafted for enterprises that need technology that works as hard as they do.
            </p>
            
            <p className="text-foreground/70 leading-relaxed">
              In a world where your website is your first handshake and your systems are your engine, we make sure neither one lets you down. Every project we take on is treated like it's our own — built with precision, delivered with purpose, and supported long after launch.
            </p>
            
            <p className="text-foreground/70 leading-relaxed">
              We've spent years in the trenches of real-world IT — solving problems, shipping products, and keeping businesses running at their best. We're not a faceless agency. We're the team that picks up the phone, understands your problem, and gets it done.
            </p>
            
            <div className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5"
              >
                Let's build something great.
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="reveal reveal-right relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-warm opacity-50 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-background p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">What we do</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Web Development</h4>
                    <p className="mt-1 text-sm text-foreground/70">Fast, scalable, professional websites that turn visitors into clients</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">App Development</h4>
                    <p className="mt-1 text-sm text-foreground/70">Custom web and mobile apps built around how your team actually works</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">IT Support</h4>
                    <p className="mt-1 text-sm text-foreground/70">Reliable, responsive support so your business never skips a beat</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">Why Webnest?</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Because average IT is expensive in the long run. We build things right the first time — clean, future-proof, and built to grow with you.
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  If you're ready to stop settling for slow systems and outdated websites, you're in the right place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
