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
            className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-whatsapp-pulse animate-page-enter animate-whatsapp-pulse sm:px-5 sm:py-3.5"
          >
            <span className="relative grid h-7 w-7 place-items-center">
              <MessageCircle size={24} className="relative" />
            </span>
            <span className="hidden text-sm font-bold tracking-wide sm:inline">
              Chat with us
            </span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-whatsapp text-white font-semibold">
          <p>Chat with us</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}