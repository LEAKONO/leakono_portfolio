import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Enable Lenis on all devices for consistent smooth scrolling
    const lenis = new Lenis({
      duration: 1.0, // Reduced from 1.2 for faster, more responsive feel
      easing: (t) => {
        // Custom easing for smoother feel
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced for smoother wheel scrolling
      touchMultiplier: 1.2, // Slightly increased for better touch response
      syncTouch: true, // Better touch handling
      // normalizeWheel removed - not supported in this version
    });

    lenisRef.current = lenis;

    // Use requestAnimationFrame with better performance
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
};