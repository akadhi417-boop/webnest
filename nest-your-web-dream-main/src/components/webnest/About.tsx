import { ArrowRight, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="reveal reveal-left space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
                About Webnest
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl leading-tight">
                We don't just write code. We build the digital backbone of businesses that mean business.
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Webnest is a freelance IT company specialising in web development, app development, and IT support — crafted for enterprises that need technology that works as hard as they do.
            </p>
            
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              In a world where your website is your first handshake and your systems are your engine, we make sure neither one lets you down. Every project we take on is treated like it's our own — built with precision, delivered with purpose, and supported long after launch.
            </p>
            
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              We've spent years in the trenches of real-world IT — solving problems, shipping products, and keeping businesses running at their best. We're not a faceless agency. We're the team that picks up the phone, understands your problem, and gets it done.
            </p>
            
            <div className="pt-2 sm:pt-4">
              <a
                href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5 active:scale-95"
              >
                Let's build something great
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="reveal reveal-right relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-warm opacity-50 blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl sm:rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5 sm:mb-6">What we do</h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex gap-3 sm:gap-4">
                  <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground">Web Development</h4>
                    <p className="mt-0.5 text-xs sm:text-sm text-foreground/70">Fast, scalable, professional websites that turn visitors into clients</p>
                  </div>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground">App Development</h4>
                    <p className="mt-0.5 text-xs sm:text-sm text-foreground/70">Custom Android and iOS applications built for high retention and speed</p>
                  </div>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground">IT Support &amp; SEO</h4>
                    <p className="mt-0.5 text-xs sm:text-sm text-foreground/70">Reliable, responsive support and local Google SEO ranking strategies</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Why Webnest?</h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  Because average IT is expensive in the long run. We build things right the first time — clean, future-proof, and built to grow with you.
                </p>
                <p className="mt-2.5 text-xs sm:text-sm font-semibold text-foreground">
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
