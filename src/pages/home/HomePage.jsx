import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import WelcomeManifesto from './components/WelcomeManifesto';
import AccommodationsShowcase from './components/AccommodationsShowcase';
import AmenitiesInteractive from './components/AmenitiesInteractive';
import CuratedGalleryJournal from './components/CuratedGalleryJournal';
import ClosingCallToAction from './components/ClosingCallToAction';

/**
 * HomePage Component — Redesigned Luxury Hospitality Experience
 * 
 * Concise, Photography-Led & Video-Integrated Storytelling:
 * Section 1 — Cinematic Hero (Real resort aerial footage, memorable headline & direct actions)
 * Section 2 — Meet the Resort (Real haveli architecture, arched corridors & garden courtyard)
 * Section 3 — Stay at Go Flamingo (Actual Deluxe bedrooms, Super Deluxe & Dormitory with direct links)
 * Section 4 — Resort Experiences & Facilities (Turquoise pool video, chandelier dining & game zone)
 * Section 5 — Gallery Preview (Compact authentic property mosaic with interactive lightbox & link to /gallery)
 * Section 6 — Booking CTA (Twilight property backdrop, concise invitation & direct booking / WhatsApp actions)
 */
export default function HomePage() {
  useEffect(() => {
    // Ensure smooth scroll position reset on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full bg-ivory-pure text-charcoal font-sans antialiased selection:bg-gold/30 selection:text-forest-deep overflow-x-hidden">
      
      {/* Section 1 — Cinematic Hero */}
      <HeroSection />

      {/* Section 2 — Meet the Resort */}
      <WelcomeManifesto />

      {/* Section 3 — Stay at Go Flamingo */}
      <AccommodationsShowcase />

      {/* Section 4 — Resort Experiences & Facilities */}
      <AmenitiesInteractive />

      {/* Section 5 — Gallery Preview */}
      <CuratedGalleryJournal />

      {/* Section 6 — Booking CTA */}
      <ClosingCallToAction />

    </div>
  );
}
