import { useCallback, useEffect, useState } from "react";

/** True when the visitor has asked the OS for reduced motion. */
export const usePrefersReducedMotion = () => {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia(query);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
};

/**
 * How far an element has travelled through the viewport:
 * 0 = its top just entered at the bottom, 1 = its bottom just left at the top.
 * Updates at most once per animation frame. Returns 0.5 (neutral) when disabled.
 */
export const useScrollProgress = (ref, enabled = true) => {
  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    if (!enabled) {
      setProgress(0.5);
      return;
    }
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const p = (vh - rect.top) / (vh + rect.height);
        setProgress(Math.min(1, Math.max(0, p)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, enabled]);

  return progress;
};

/**
 * Slideshow index that auto-advances every `interval` ms.
 * Pauses while `paused` is true, when the tab is hidden, or with reduced motion.
 */
export const useCarousel = (count, { interval = 4000, paused = false } = {}) => {
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  // Start from the first screen whenever the set of screens changes
  useEffect(() => setIndex(0), [count]);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (count < 2 || paused || reducedMotion) return;
    const timer = setInterval(() => {
      if (!document.hidden) next();
    }, interval);
    return () => clearInterval(timer);
  }, [count, paused, reducedMotion, interval, next, index]);

  return { index, setIndex, next, prev };
};
