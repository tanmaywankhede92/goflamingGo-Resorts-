/**
 * GO FLAMINGO RESORT — INFORMATION & FACT SHEET
 * Location: Pench – Sillari Gate, Madhya Pradesh, India
 * 
 * STRICT BUSINESS ACCURACY RULE:
 * Never invent room types, room counts, prices, facilities, safari services,
 * timings, packages, policies, distances, ratings, awards, certifications, or
 * sustainability claims.
 * 
 * Fields marked with `isVerified: false` are placeholders pending authentic resort verification.
 */

export const RESORT_METADATA = {
  name: "Go Flamingo Resort",
  tagline: "Where the forest slows time.",
  location: {
    region: "Pench Tiger Reserve",
    gate: "Sillari Gate",
    state: "Madhya Pradesh",
    country: "India",
    fullAddress: "Go Flamingo Resort, Near Sillari Gate, Pench Tiger Reserve, Madhya Pradesh, India",
    // Coordinates/Distance placeholders - to be verified
    coordinates: {
      latitude: null, // [VERIFICATION_REQUIRED]
      longitude: null, // [VERIFICATION_REQUIRED]
    },
    nearestHubs: {
      nagpurAirport: "[VERIFICATION_REQUIRED: Distance from Dr. Babasaheb Ambedkar International Airport, Nagpur ~80-95km]",
      nagpurRailwayStation: "[VERIFICATION_REQUIRED: Distance from Nagpur Junction ~75-90km]",
    }
  },
  contact: {
    phone: "[VERIFICATION_REQUIRED: Resort reservation phone number]",
    whatsapp: "[VERIFICATION_REQUIRED: WhatsApp business number]",
    email: "[VERIFICATION_REQUIRED: Official bookings email]",
  },
  operatingHours: {
    checkInTime: "[VERIFICATION_REQUIRED: Standard check-in time, e.g. 13:00 / 14:00]",
    checkOutTime: "[VERIFICATION_REQUIRED: Standard check-out time, e.g. 11:00]",
    reception: "24-hour guest assistance",
  },
  safariZones: {
    primaryGate: "Sillari Gate",
    governingAuthority: "Pench Tiger Reserve (Maharashtra / MP border zone)",
    notes: "Safari bookings are strictly subject to Forest Department permits and seasonal schedules.",
  }
};

/**
 * Information Architecture - Future Room Placeholders
 * DO NOT INVENT SPECIFIC ROOM NAMES OR RATES WITHOUT CLIENT APPROVAL
 */
export const ROOM_PLACEHOLDERS = [
  {
    id: "room-category-1",
    isVerified: false,
    label: "[CATEGORY 1 — Pending client room taxonomy, e.g. Luxury Cottage / Safari Villa]",
    status: "PLACEHOLDER_AWAITING_CLIENT_DATA",
  },
  {
    id: "room-category-2",
    isVerified: false,
    label: "[CATEGORY 2 — Pending client room taxonomy, e.g. Family Suite / Forest View Room]",
    status: "PLACEHOLDER_AWAITING_CLIENT_DATA",
  }
];
