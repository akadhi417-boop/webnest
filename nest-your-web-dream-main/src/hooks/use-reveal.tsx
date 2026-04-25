import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in-view)")
        .forEach((el) => {
          if (prefersReduced) {
            el.classList.add("in-view");
          } else {
            io.observe(el);
          }
        });
    };

    observeAll();

    // Re-scan on DOM mutations (handles dynamically rendered sections)
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}