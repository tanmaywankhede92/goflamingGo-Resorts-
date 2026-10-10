import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import WelcomeManifesto from './components/WelcomeManifesto';
import AccommodationsShowcase from './components/AccommodationsShowcase';
import AmenitiesInteractive from './components/AmenitiesInteractive';
import PenchDestinationChapter from './components/PenchDestinationChapter';
import EventsCelebrations from './components/EventsCelebrations';
import CuratedGalleryJournal from './components/CuratedGalleryJournal';
import ClosingCallToAction from './components/ClosingCallToAction';

/**
 * HomePage Component — Creative Editorial Redesign
 * 
 * Inspired by the design confidence, expressive typography, and visual restraint of NOTH,
 * translated into a world-class luxury wilderness resort experience for Go Flamingo Resort
 * (Sillari Gate, Pench, Maharashtra).
 * 
 * Flow:
 * 01. Cinematic Hero — "Your Escape. Your Kind of Wild." (GSAP choreographed opening)
 * 02. Welcome Manifesto — "Some places are visited. Pench settles into your pulse." (Senses of Sillari)
 * 03. Accommodations Portfolio — Deluxe Rooms, Super Deluxe Cottages & Group Dormitory
 * 04. Amenities Explorer — Pool, Rain Dance, Dining, Lawns, Kids Zone, Game Zone & Conference Hall
 * 05. Pench & Sillari Destination Story — Kipling's Forest, Responsible Wildlife & Safari Timings
 * 06. Events & Celebrations — Forest Weddings, Executive Conclaves & Milestones
 * 07. Curated Gallery & Trust Credentials — Authentic property mosaic & transparent contact
 * 08. Closing Call to Action — "The forest does not rush. Neither should you."
 */
export default function HomePage() {
  useEffect(() => {
    // Ensure smooth scroll position reset on load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full bg-ivory-pure text-charcoal font-sans antialiased selection:bg-gold/30 selection:text-forest-deep overflow-x-hidden">
      
      {/* 01. Cinematic Hero with GSAP Entrance & Coordinates */}
      <HeroSection />

      {/* 02. Welcome to Go Flamingo & Senses of Sillari Manifesto */}
      <WelcomeManifesto />

      {/* 03. Accommodations Portfolio (Deluxe, Super Deluxe Cottages & Group Dormitory) */}
      <AccommodationsShowcase />

      {/* 04. Immersive Amenities Showcase (Pool, Rain Dance, Dining, Games & Conference) */}
      <AmenitiesInteractive />

      {/* 05. Pench & Sillari Destination Chapter */}
      <PenchDestinationChapter />

      {/* 06. Weddings, Corporate Offsites & Celebrations */}
      <EventsCelebrations />

      {/* 07. Curated Gallery & Guest Trust Credentials */}
      <CuratedGalleryJournal />

      {/* 08. Monumental Closing Chapter & High-Intent Conversion */}
      <ClosingCallToAction />

    </div>
  );
}
