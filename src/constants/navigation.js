/**
 * GO FLAMINGO RESORT — PLANNED CONTENT & NAVIGATION ARCHITECTURE
 * 
 * Note: These represent future routes and menu hierarchies.
 * They are documented here to establish system structure without prematurely
 * rendering unbuilt views.
 */

export const NAVIGATION_STRUCTURE = {
  primary: [
    { label: "Home", path: "/" },
    { 
      label: "Stay", 
      path: "/stay",
      children: [
        { label: "All Rooms & Cottages", path: "/stay" },
        { label: "Room Details", path: "/stay#details" },
      ]
    },
    { 
      label: "Experiences", 
      path: "/experiences",
      children: [
        { label: "Jungle Safari", path: "/experiences/safari" },
        { label: "Wildlife & Birding", path: "/experiences/wildlife" },
        { label: "Forest Trails & Nature", path: "/experiences/nature" },
        { label: "Pool & Relaxation", path: "/experiences/pool" },
        { label: "Family Stays", path: "/experiences/family" },
        { label: "Couples Escape", path: "/experiences/couples" },
        { label: "Regional Dining", path: "/experiences/dining" },
      ]
    },
    { 
      label: "Pench Guide", 
      path: "/pench",
      children: [
        { label: "About Pench", path: "/pench/about" },
        { label: "Sillari Gate", path: "/pench/sillari-gate" },
        { label: "Safari Guide & Booking", path: "/pench/safari-guide" },
        { label: "Best Time to Visit", path: "/pench/best-time" },
        { label: "How to Reach", path: "/pench/how-to-reach" },
        { label: "Things to Do", path: "/pench/things-to-do" },
        { label: "Nearby Attractions", path: "/pench/nearby" },
      ]
    },
    { 
      label: "Packages", 
      path: "/packages",
      children: [
        { label: "Weekend Escape", path: "/packages/weekend" },
        { label: "Wildlife Escape", path: "/packages/wildlife" },
        { label: "Family Escape", path: "/packages/family" },
        { label: "Couple Escape", path: "/packages/couple" },
        { label: "Seasonal Offers", path: "/packages/seasonal" },
      ]
    },
    { label: "Gallery", path: "/gallery" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact", path: "/contact" },
  ],
  actions: {
    checkAvailability: { label: "Check Availability", action: "open_booking_modal" },
    bookNow: { label: "Book Your Stay", action: "direct_booking" },
    whatsapp: { label: "WhatsApp", action: "external_whatsapp" },
    call: { label: "Call Us", action: "tel_resort" },
  },
  utility: [
    { label: "FAQ", path: "/faq" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Cancellation Policy", path: "/cancellation-policy" },
  ]
};
