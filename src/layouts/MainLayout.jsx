import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import StickyBookingBar from '../components/navigation/StickyBookingBar';

/**
 * MainLayout
 * 
 * Global multi-page layout wrapper providing persistent navigation,
 * route-change scroll reset, sticky conversion bar, and hospitality footer.
 */
export default function MainLayout() {
  const { pathname } = useLocation();

  // Reset scroll to top on page transitions
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans antialiased selection:bg-gold/30 selection:text-forest-deep">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <StickyBookingBar />
      <Footer />
    </div>
  );
}
