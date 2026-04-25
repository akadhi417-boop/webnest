import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot snaps instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
    };

    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    // Detect hoverable elements
    const addHoverListeners = () => {
      const hoverTargets = document.querySelectorAll<HTMLElement>(
        "a, button, [data-cursor-hover], input, textarea, select, label"
      );
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };
    addHoverListeners();

    // Observe new DOM nodes
    const mo = new MutationObserver(() => addHoverListeners());
    mo.observe(document.body, { childList: true, subtree: true });

    // Ring follows with lag (lerp)
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      animId = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(animId);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      {/* Outer ring — laggy, morphs on hover */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99998,
          pointerEvents: "none",
          width: isHovering ? "48px" : "36px",
          height: isHovering ? "48px" : "36px",
          borderRadius: "50%",
          border: "2px solid oklch(0.7 0.2 45 / 0.6)",
          background: isHovering ? "oklch(0.7 0.2 45 / 0.08)" : "transparent",
          backdropFilter: isHovering ? "blur(2px)" : "none",
          opacity: isHidden ? 0 : isClicking ? 0.4 : 1,
          transition:
            "width 0.25s ease, height 0.25s ease, opacity 0.2s ease, background 0.25s ease, border-color 0.25s ease",
          willChange: "transform",
        }}
      />
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: "none",
          width: isClicking ? "6px" : isHovering ? "5px" : "8px",
          height: isClicking ? "6px" : isHovering ? "5px" : "8px",
          borderRadius: "50%",
          background: "oklch(0.7 0.2 45)",
          boxShadow: isHovering
            ? "0 0 12px 4px oklch(0.7 0.2 45 / 0.5)"
            : "0 0 6px 2px oklch(0.7 0.2 45 / 0.3)",
          opacity: isHidden ? 0 : 1,
          transition:
            "width 0.2s ease, height 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
