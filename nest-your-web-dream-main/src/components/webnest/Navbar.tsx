import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/webnest/BrandLogo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#mobile-app", label: "Mobile Apps" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="WebNest — Home" className="flex items-center">
          <BrandLogo size={36} priority wordmark wordmarkSize="md" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
                {l.href === "#mobile-app" && (
                  <span className="absolute -top-2.5 -right-4 px-1 py-0.2 text-[8px] font-bold text-white bg-primary rounded-full scale-90 animate-pulse">
                    NEW
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-glow hover:-translate-y-0.5 md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-lg p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex justify-between items-center rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
                >
                  <span>{l.label}</span>
                  {l.href === "#mobile-app" && (
                    <span className="px-1.5 py-0.5 text-[8px] font-bold text-white bg-primary rounded-full scale-90 animate-pulse">
                      NEW
                    </span>
                  )}
                </a>
              </li>
            ))}
            <a
              href="https://wa.me/919562829885?text=Hi%20WebNest%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Let's Talk
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}