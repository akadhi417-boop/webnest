import { Instagram, Mail, Phone, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/webnest/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" aria-label="WebNest — Back to top" className="inline-flex items-center">
              <BrandLogo size={40} wordmark wordmarkSize="lg" tone="light" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              We design and build fast, modern websites that help businesses
              grow online. Premium quality, every time.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:-translate-y-0.5"
            >
              Start a project <ArrowRight size={14} />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#about", "About"],
                ["#services", "Services"],
                ["#process", "Process"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="tel:9562829885" className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors">
                  <Phone size={14} />
                  <span>+91 9562829885</span>
                </a>
              </li>
              <li>
                <a href="mailto:webnest417@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors">
                  <Mail size={14} />
                  <span>webnest417@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/webnest_studioo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
                >
                  <Instagram size={14} /> @webnest_studioo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} WebNest. All rights reserved.</span>
          <span>Crafted with care in India.</span>
        </div>
      </div>
    </footer>
  );
}