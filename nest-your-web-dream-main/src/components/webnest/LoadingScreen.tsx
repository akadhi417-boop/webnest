import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/webnest/BrandLogo";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if user already saw the loading screen in this session
    const hasSeenIntro = sessionStorage.getItem("webnest_intro_seen");
    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    // Prevent scrolling while loading screen is active
    document.body.style.overflow = "hidden";

    // Show loading screen for 800ms, then fade out smoothly
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 850);

    // Completely remove from DOM after fade out completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("webnest_intro_seen", "true");
      document.body.style.overflow = "";
    }, 1250);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Decorative rotating rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/20 border-t-primary animate-spin duration-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-dashed border-primary/20 animate-spin-slow reverse" />
        
        {/* Brand Logo with pulse effect */}
        <div className="animate-pulse drop-shadow-2xl">
          <BrandLogo size={64} priority wordmark wordmarkSize="lg" />
        </div>
      </div>
      
      {/* Loading bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-1.5 overflow-hidden rounded-full bg-primary/10">
        <div className="h-full bg-primary rounded-full animate-[loading_2s_ease-in-out_forwards]" />
      </div>
    </div>
  );
}
