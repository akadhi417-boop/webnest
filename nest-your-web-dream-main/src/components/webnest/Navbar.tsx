import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/webnest/BrandLogo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#mobile-app", label: "Mobile Apps", isNew: true },
  { href: "#portfolio", label: "Our Works" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled || open
          ? "backdrop-blur-md bg-background/90 border-b border-border/70 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        <a 
          href="#top" 
          aria-label="WebNest — Home" 
          className="flex items-center active:scale-95 transition-transform"
          onClick={() => setOpen(false)}
        >
          <BrandLogo size={34} priority wordmark wordmarkSize="md" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
                {l.isNew && (
                  <span className="absolute -top-2.5 -right-4 px-1.5 py-0.2 text-[8px] font-bold text-white bg-primary rounded-full scale-90 animate-pulse">
                    NEW
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-glow hover:-translate-y-0.5 md:inline-flex"
        >
          Let's Talk
        </a>

        {/* Mobile Hamburger Button */}
        <button
          aria-label={open ? "Close menu" : "Open navigation menu"}
          aria-expanded={open}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-surface border border-border text-foreground transition-transform active:scale-95"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[61px] bottom-0 z-40 bg-background/98 backdrop-blur-xl border-t border-border flex flex-col justify-between overflow-y-auto px-6 py-6 md:hidden animate-page-enter">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-base font-semibold text-foreground transition-all hover:border-border hover:bg-surface active:bg-surface/80"
                >
                  <span className="flex items-center gap-2">
                    {l.label}
                    {l.isNew && (
                      <span className="px-2 py-0.5 text-[9px] font-extrabold uppercase text-white bg-primary rounded-full">
                        NEW
                      </span>
                    )}
                  </span>
                  <ArrowRight size={16} className="text-foreground/30" />
                </a>
              </li>
            ))}
          </ul>

          {/* Quick Action Drawer Footer */}
          <div className="mt-8 pt-6 border-t border-border space-y-3 pb-8">
            <a
              href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-glow active:scale-95 transition-transform"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <div className="flex items-center justify-between gap-3">
              <a
                href="tel:9562829885"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-border bg-surface py-3 text-xs font-semibold text-foreground active:scale-95 transition-transform"
              >
                <Phone size={14} className="text-primary" />
                +91 95628 29885
              </a>
              <a
                href="mailto:webnest417@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-border bg-surface py-3 text-xs font-semibold text-foreground active:scale-95 transition-transform truncate"
              >
                webnest417@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}