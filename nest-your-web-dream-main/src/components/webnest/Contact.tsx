import { useState, type FormEvent } from "react";
import { Phone, Mail, Instagram, Send } from "lucide-react";
import logo from "@/assets/logo/webnest-48.png";

const PHONE = "9562829885";
const EMAIL = "webnest417@gmail.com";
const INSTA = "webnest_studioo";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi WebNest, I'm ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.open(`https://wa.me/91${PHONE}?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="contact" className="bg-surface py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="reveal reveal-left">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Let's build something <span className="text-primary">remarkable</span>
            </h2>
            <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-base text-foreground/70 leading-relaxed">
              Tell us about your project. We respond within 24 hours and provide
              a free architecture &amp; pricing consultation for every project.
            </p>

            <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="group flex items-center gap-3.5 sm:gap-4 rounded-xl sm:rounded-2xl border border-border bg-background p-3.5 sm:p-4 transition-smooth hover:shadow-soft active:scale-98"
                >
                  <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Phone size={18} />
                  </span>
                  <div>
                    <div className="text-[11px] sm:text-xs font-medium text-foreground/60">Phone Call</div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">+91 {PHONE}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3.5 sm:gap-4 rounded-xl sm:rounded-2xl border border-border bg-background p-3.5 sm:p-4 transition-smooth hover:shadow-soft active:scale-98"
                >
                  <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Mail size={18} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs font-medium text-foreground/60">Email</div>
                    <div className="text-sm sm:text-base font-semibold text-foreground truncate">{EMAIL}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${INSTA}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3.5 sm:gap-4 rounded-xl sm:rounded-2xl border border-border bg-background p-3.5 sm:p-4 transition-smooth hover:shadow-soft active:scale-98"
                >
                  <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Instagram size={18} />
                  </span>
                  <div>
                    <div className="text-[11px] sm:text-xs font-medium text-foreground/60">Instagram</div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">@{INSTA}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal reveal-right rounded-2xl sm:rounded-3xl border border-border bg-background p-5 sm:p-8 md:p-10 shadow-card"
          >
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="text-xs sm:text-sm font-semibold text-foreground">Your Name</label>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="mt-1.5 sm:mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-semibold text-foreground">Email Address</label>
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="mt-1.5 sm:mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-semibold text-foreground">Project Details</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about what you want to build (website, mobile app, etc.)..."
                  className="mt-1.5 sm:mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 sm:py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5 active:scale-95"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/95 p-0.5 shadow-sm">
                  <img src={logo} alt="" aria-hidden className="h-full w-full object-contain" />
                </span>
                Send Project Request
                <Send size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              {sent && (
                <p className="text-center text-xs sm:text-sm font-medium text-emerald-600">
                  Opening WhatsApp — we'll be in touch shortly!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}