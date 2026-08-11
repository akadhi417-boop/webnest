import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PHONE = "9562829885";
const PREFILL = "Hi WebNest, I'm interested in your services.";

export function WhatsAppFloat() {
  const href = `https://wa.me/91${PHONE}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with WebNest on WhatsApp"
            className="group fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-3.5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-whatsapp-pulse sm:px-5 sm:py-3.5"
            style={{
              marginBottom: "env(safe-area-inset-bottom, 0px)",
            }}
          >
            <span className="relative grid h-6 w-6 sm:h-7 sm:w-7 place-items-center">
              <MessageCircle size={22} className="relative sm:w-6 sm:h-6" />
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              Chat with us
            </span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-whatsapp text-white font-semibold hidden sm:block">
          <p>Chat with us</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}