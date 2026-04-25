import { MessageCircle } from "lucide-react";

const PHONE = "9562829885";
const PREFILL =
  "Hi WebNest! 👋 I'd love to learn more about your web development services and discuss a project for my business.";

export function WhatsAppFloat() {
  const href = `https://wa.me/91${PHONE}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with WebNest on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-glow transition-smooth hover:scale-105 sm:py-3.5"
    >
      <span className="relative grid h-7 w-7 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary-foreground/40" />
        <MessageCircle size={22} className="relative" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}