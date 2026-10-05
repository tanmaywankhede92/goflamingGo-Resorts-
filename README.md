# Go Flamingo Resort — Pench (Sillari Gate)
### Premium Destination Multi-Page Hospitality Platform

> **Location:** Near Sillari Gate, Pench Tiger Reserve, Madhya Pradesh, India  
> **Brand Premise:** *"Where the forest slows time."*  
> **Creative Direction:** Premium Indian Wildlife Hospitality  
> **Visual Ratio:** 70% visual storytelling, 30% typography/interface

---

## 1. Project Identity & Vision

Go Flamingo Resort is envisioned as a world-class destination website representing an authentic wildlife sanctuary at **Sillari Gate, Pench Tiger Reserve**.

Rejecting both generic hotel templates and sterile European design agency minimalism, this platform blends:
- **Cinematic Wilderness:** Royal Bengal Tigers, morning mist, and teak canopies.
- **Warm Indian Hospitality:** Heartfelt care, homestyle and regional frontier dining, and family friendliness.
- **Natural Luxury:** Stone swimming pool, private sit-out verandahs, and starlit bonfire dinners.
- **Multi-Audience Relevance:** Tailored journeys for Indian families, romantic escapes, wildlife photographers, weekenders from Nagpur (~85 km), and international nature travelers.

---

## 2. Information & Multi-Page Route Architecture

```
/                                   # Home (Cinematic preview gateway to all hubs)
├── /resort                         # Resort Hub
│   ├── /resort/about               # About Go Flamingo & Vision
│   ├── /resort/facilities          # Facilities, Lawns & Guest Amenities
│   ├── /resort/pool                # Natural Stone Forest Pool
│   └── /resort/dining              # Forest Dining & Regional Cuisine
├── /rooms                          # Accommodations Overview
│   └── /rooms/:slug                # Individual Room & Cottage Detail Views
├── /experiences                    # Experiences Hub
│   ├── /experiences/safari         # Sillari Gate Core Jungle Safari
│   ├── /experiences/wildlife       # Wildlife & Birding Showcase
│   ├── /experiences/nature         # Forest Buffer Nature Walks
│   ├── /experiences/family         # Family Holidays & Activities
│   └── /experiences/couples        # Couples & Romantic Escapes
├── /weddings                       # Destination Weddings Overview
│   ├── /weddings/celebrations      # Milestones, Anniversaries & Birthdays
│   └── /weddings/events            # Event Lawns & Outdoor Spaces
├── /corporate                      # Corporate Offsites & Team Retreats
│   ├── /corporate/retreats         # Leadership & Executive Retreats
│   └── /corporate/meetings         # Conferences & Meeting Facilities
├── /dining                         # Dedicated Dining & Cuisine
├── /pench                          # Pench Destination Travel Hub
│   ├── /pench/sillari-gate         # Sillari Gate Complete Guide & Advantages
│   ├── /pench/safari-guide         # Safari Permits, Shifts & Timings
│   ├── /pench/things-to-do         # Pottery Villages, Dams & Local Attractions
│   ├── /pench/how-to-reach         # Travel Logistics from Nagpur (Air/Rail/Road)
│   └── /pench/best-time-to-visit   # Seasons, Weather & Wildlife Spotting Guide
├── /packages                       # Curated Itineraries Overview
│   └── /packages/:slug             # Specific Package Details (Weekend, Safari, Family)
├── /gallery                        # Asymmetrical Photography Showcase
├── /contact                        # Location, Map, Inquiries & Assistance
└── /book                           # Multi-Step Direct Availability & Booking Flow
```

---

## 3. Technology Stack

- **Framework:** React 19 (pure JavaScript, ES Modules, no TypeScript overhead).
- **Tooling:** Vite 8 with instant HMR and ~250ms production builds.
- **Routing:** React Router DOM 7 with declarative nested routing, route-change scroll reset, and dynamic parameters.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom `@theme` tokens and zero runtime CSS bloat.
- **Icons:** Lucide React (used with restraint).

---

## 4. Design System & Tokens (Phase 2 Refinement)

### Color Palette (Grounded in Pench & Indian Warmth)
| Token | Hex | Role |
|---|---|---|
| `forest-deep` | `#10251B` | Primary Deep Forest (Brand Dark) |
| `forest-jungle` | `#294735` | Jungle Green Canopy |
| `forest-dark` | `#0B1912` | Nocturnal / Deep Shadow Surface |
| `sand` | `#D8C6A5` | Warm Sand (Warmth, Dune, Canvas) |
| `terracotta` | `#A85F3B` | Indian Terracotta & Soil (Warm Accents) |
| `gold` | `#B58A45` | Muted Sun Gold (Prestige CTAs & Highlights) |
| `ivory` | `#F4EFE5` | Warm Ivory (Default Page Surface, avoids sterile white) |
| `charcoal` | `#1B1B18` | Crisp Editorial Ink (High Contrast Body Copy) |

### Typography System
- **Editorial Serif:** `Playfair Display` (400, 500, 600, 700, italic) — reserved for hero headlines, chapter titles, and emotional statements.
- **Clean Modern Sans:** `Plus Jakarta Sans` (300, 400, 500, 600, 700) — dominant across navigation, buttons, cards, forms, and body prose.
- **Reduced Serif Dominance:** Ensures high legibility on mobile devices while maintaining warmth and editorial prestige.

---

## 5. Component System

All components follow modular architecture in `src/components/`:
- **Navigation:**
  - `Navbar.jsx`: Sticky responsive navbar with scroll elevation.
  - `MegaMenu.jsx`: Categorized desktop menu with sub-routes and photographic preview cards.
  - `MobileMenu.jsx`: Full-screen mobile drawer with accordions and direct contact actions.
  - `StickyBookingBar.jsx`: Persistent conversion trigger docked at the bottom of mobile screens.
  - `Footer.jsx`: Multi-column hospitality footer with verified location notes.
- **Hero System (`PageHero.jsx`):**
  1. `cinematic`: Full-screen 92dvh hero with gradient protection.
  2. `large`: 60–70vh landscape image hero for major landing hubs.
  3. `split`: Asymmetric editorial split (narrative + visual).
  4. `dark`: Deep forest immersive hero for nocturnal/wildlife sections.
  5. `minimal`: Restrained layout for booking and logistics.
- **Primitives:**
  - `Container`, `Heading`, `Text`, `SectionEyebrow`, `Button`, `Badge`, `Card`, `ImageBlock`, `EditorialSplit`, `PlaceholderPage`.

---

## 6. Business Accuracy Rules

- **Zero Fabricated Data:** Room categories, inventories, rack rates, safari costs, venue capacities, and distance claims are strictly verified or labeled as `[VERIFICATION_REQUIRED]`.
- **Sillari Gate Grounding:** Focus on authentic logistics (~85 km from Nagpur via 4-lane NH 44).
