import { useEffect, useState, createContext, useContext } from 'react';
import Lenis from 'lenis';

const SmoothScrollContext = createContext(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Handle anchor links for smooth scrolling to sections
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        const hashElement = document.querySelector(target.hash);
        if (hashElement) {
          e.preventDefault();
          lenisInstance.scrollTo(target.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Clean up on unmount
    return () => {
      lenisInstance.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
