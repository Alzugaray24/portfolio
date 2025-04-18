"use client";

import { useEffect, useState } from "react";

/**
 * Hook that detects if the user prefers reduced motion
 * Uses the prefers-reduced-motion media query
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Check if the browser supports matchMedia
    if (!window.matchMedia) {
      setPrefersReducedMotion(false);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Add listener for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Add event listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // For older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        // For older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Custom hook for memoized animation variants based on motion preferences
 * @param animateVariants - The default animation variants
 * @param reducedVariants - The simplified animation variants for reduced motion
 */
export function useMotionVariants(animateVariants: any, reducedVariants: any) {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? reducedVariants : animateVariants;
}
