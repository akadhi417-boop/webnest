import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (desktop mouse / trackpad)
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasPointer) return;

    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Snap inner dot instantly with hardware acceleration
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    // Smooth Lerp tracking for outer ring
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.18);
      ringY = lerp(ringY, mouseY, 0.18);
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    // Event delegation for hoverable interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = Boolean(
        target.closest(
          "a, button, [role='button'], input, textarea, select, label, .card-tilt, [data-cursor-hover]"
        )
      );
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer interactive ring — smooth lerp physics, morphs on hover */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99998,
          pointerEvents: "none",
          width: isHovering ? "52px" : "36px",
          height: isHovering ? "52px" : "36px",
          borderRadius: "50%",
          border: isHovering 
            ? "2px solid oklch(0.7 0.2 45 / 0.85)" 
            : "2px solid oklch(0.7 0.2 45 / 0.55)",
          background: isHovering ? "oklch(0.7 0.2 45 / 0.12)" : "transparent",
          backdropFilter: isHovering ? "blur(1px)" : "none",
          opacity: !isVisible ? 0 : isClicking ? 0.4 : 1,
          transformOrigin: "center center",
          transition:
            "width 0.22s cubic-bezier(0.22, 1, 0.36, 1), height 0.22s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease, background 0.2s ease, border-color 0.2s ease",
          willChange: "transform",
        }}
      />

      {/* Inner dot — snaps instantly with glowing brand accent */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: "none",
          width: isClicking ? "6px" : isHovering ? "4px" : "8px",
          height: isClicking ? "6px" : isHovering ? "4px" : "8px",
          borderRadius: "50%",
          background: "oklch(0.7 0.2 45)",
          boxShadow: isHovering
            ? "0 0 14px 4px oklch(0.7 0.2 45 / 0.6)"
            : "0 0 8px 2px oklch(0.7 0.2 45 / 0.35)",
          opacity: !isVisible ? 0 : 1,
          transformOrigin: "center center",
          transition:
            "width 0.18s ease, height 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
