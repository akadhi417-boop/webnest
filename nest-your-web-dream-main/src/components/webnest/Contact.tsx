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
    // Basic validation handled by inputs; open WhatsApp prefill as primary CTA outcome
    const text = encodeURIComponent(
      `Hi WebNest, I'm ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.open(`https://wa.me/91${PHONE}?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="contact" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal reveal-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Let's build something <span className="text-primary">remarkable</span>
            </h2>
            <p className="mt-5 max-w-md text-foreground/70">
              Tell us about your project. We respond within 24 hours and provide
              a free consultation for every new client.
            </p>

            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-smooth hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Phone size={18} />
                  </span>
                  <div>
                    <div className="text-xs font-medium text-foreground/60">Phone</div>
                    <div className="font-semibold text-foreground">+91 {PHONE}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-smooth hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Mail size={18} />
                  </span>
                  <div>
                    <div className="text-xs font-medium text-foreground/60">Email</div>
                    <div className="font-semibold text-foreground">{EMAIL}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${INSTA}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-smooth hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Instagram size={18} />
                  </span>
                  <div>
                    <div className="text-xs font-medium text-foreground/60">Instagram</div>
                    <div className="font-semibold text-foreground">@{INSTA}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal reveal-right rounded-3xl border border-border bg-background p-8 shadow-card md:p-10"
          >
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground">Name</label>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/95 p-0.5 shadow-sm">
                  <img src={logo} alt="" aria-hidden className="h-full w-full object-contain" />
                </span>
                Let's Build Your Website
                <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              {sent && (
                <p className="text-center text-sm text-foreground/70">
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