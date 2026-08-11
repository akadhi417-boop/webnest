import { Instagram, Mail, Phone, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/webnest/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" aria-label="WebNest — Back to top" className="inline-flex items-center">
              <BrandLogo size={38} wordmark wordmarkSize="lg" tone="light" />
            </a>
            <p className="mt-4 sm:mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-white/60">
              We design and build fast, modern websites and mobile applications that help businesses
              grow online. Premium quality, every time.
            </p>
            <a
              href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-smooth hover:-translate-y-0.5 active:scale-95"
            >
              Start a project <ArrowRight size={14} />
            </a>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80">
              Quick Links
            </h4>
            <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              {[
                ["#about", "About"],
                ["#services", "Services"],
                ["#mobile-app", "Mobile Apps"],
                ["#portfolio", "Our Works"],
                ["#process", "Process"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-1 text-white/60 transition-colors hover:text-primary active:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80">
              Get in touch
            </h4>
            <ul className="mt-4 sm:mt-5 space-y-3 text-xs sm:text-sm">
              <li>
                <a href="tel:9562829885" className="flex items-center gap-2.5 text-white/60 hover:text-primary transition-colors py-1">
                  <Phone size={14} className="shrink-0 text-primary" />
                  <span>+91 95628 29885</span>
                </a>
              </li>
              <li>
                <a href="mailto:webnest417@gmail.com" className="flex items-center gap-2.5 text-white/60 hover:text-primary transition-colors py-1 truncate">
                  <Mail size={14} className="shrink-0 text-primary" />
                  <span className="truncate">webnest417@gmail.com</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://instagram.com/webnest_studioo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3.5 py-1.5 text-xs font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
                >
                  <Instagram size={14} /> @webnest_studioo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] sm:text-xs text-white/50 md:flex-row text-center sm:text-left">
          <span>© {new Date().getFullYear()} WebNest. All rights reserved.</span>
          <span>Crafted with precision &amp; modern web standards.</span>
        </div>
      </div>
    </footer>
  );
}