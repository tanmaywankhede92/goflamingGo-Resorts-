import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import StickyBookingBar from '../components/navigation/StickyBookingBar';
import { FloatingWhatsApp, LuxuryPreloader } from '../components/common';

/**
 * MainLayout
 * 
 * Global multi-page layout wrapper providing persistent navigation,
 * sticky conversion bar, and hospitality footer.
 */
export default function MainLayout() {

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
