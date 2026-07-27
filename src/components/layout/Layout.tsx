import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLenis } from '../../hooks/useLenis';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const lenisRef = useLenis();

  useEffect(() => {
    // Handle hash navigation for projects section
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }

    // Refresh ScrollTrigger after Lenis is ready
    const refreshScrollTrigger = () => {
      // @ts-ignore - ScrollTrigger might not be loaded yet
      if (window.ScrollTrigger) {
        // @ts-ignore
        window.ScrollTrigger.refresh();
      }
    };

    // Refresh after a small delay
    const timer = setTimeout(refreshScrollTrigger, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-300">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};