import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
      
      if (elements && elements.length > 0) {
        elements.forEach((el, index) => {
          gsap.fromTo(el,
            { 
              opacity: 0, 
              y: 30,
              scale: 0.98
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
                invalidateOnRefresh: true,
              },
            }
          );
        });
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);

  return containerRef;
};