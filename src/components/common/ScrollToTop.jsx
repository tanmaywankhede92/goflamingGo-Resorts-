import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Universal ScrollToTop Handler
 * 
 * Ensures that whenever a user navigates anywhere across the application
 * (clicking links in header, footer, cards, or internal redirects),
 * the newly loaded page immediately and reliably starts from the top (0, 0).
 * 
 * If a URL contains a specific hash anchor (e.g. #reservation-form-card),
 * it smoothly navigates to that designated target element.
 */
export default function ScrollToTop() {
  const { pathname, search, hash, key } = useLocation();

  const performInstantScrollToTop = () => {
    if (typeof window === 'undefined') return;

    // 1. Force auto scroll-behavior during route transitions to prevent smooth glide delays
    const root = document.documentElement;
    const body = document.body;

    if (root) {
      root.style.scrollBehavior = 'auto';
      root.scrollTop = 0;
    }
    if (body) {
      body.style.scrollBehavior = 'auto';
      body.scrollTop = 0;
    }

    // Standard Window scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  };

  // Immediate synchronous execution before browser paint
  useLayoutEffect(() => {
    if (!hash) {
      performInstantScrollToTop();
    }
  }, [pathname, key]);

  // Post-render confirmation & hash anchor resolution
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      const t1 = setTimeout(scrollToHash, 60);
      const t2 = setTimeout(scrollToHash, 240);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      performInstantScrollToTop();
      // Tick once more on requestAnimationFrame & microtask to prevent layout jumps
      const raf = requestAnimationFrame(performInstantScrollToTop);
      const timer = setTimeout(performInstantScrollToTop, 50);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    }
  }, [pathname, search, hash, key]);

  return null;
}
