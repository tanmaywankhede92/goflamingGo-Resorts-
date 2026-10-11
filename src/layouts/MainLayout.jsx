import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import StickyBookingBar from '../components/navigation/StickyBookingBar';
import { FloatingWhatsApp, LuxuryPreloader } from '../components/common';

/**
 * MainLayout
 * 
 * Global multi-page layout wrapper providing persistent navigation,
 * route-change scroll reset, sticky conversion bar, and hospitality footer.
 */
export default function MainLayout() {
  const location = useLocation();

  // Reset scroll on page transitions, but respect hash anchors (e.g. #reservation-form-card)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      const t1 = setTimeout(scrollToHash, 80);
      const t2 = setTimeout(scrollToHash, 260);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash, location.search]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans antialiased selection:bg-gold/30 selection:text-forest-deep">
      <LuxuryPreloader minDuration={2800} />
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <StickyBookingBar />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
