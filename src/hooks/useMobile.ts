"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the window is currently at mobile resolution (<= 767px).
 */
export function useMobile(breakpoint = 767): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    
    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Event listener callback
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Support both modern and older browsers for media query listeners
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleResize);
      return () => mediaQuery.removeEventListener("change", handleResize);
    } else {
      // Fallback for older Safari/browsers
      mediaQuery.addListener(handleResize);
      return () => mediaQuery.removeListener(handleResize);
    }
  }, [breakpoint]);

  return isMobile;
}
