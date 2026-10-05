/**
 * GO FLAMINGO RESORT — PHASE 2 DESIGN TOKENS
 * Location: Pench – Sillari Gate, Madhya Pradesh, India
 * 
 * Aesthetic Philosophy:
 * - Premium Indian Wildlife Hospitality
 * - Cinematic, warm, natural, authentic, modern, welcoming, experiential
 * - 70% visual storytelling, 30% typography/interface
 * - Avoid pale/empty agency look; ground in Pench forest, warm earth, and Indian care
 */

export const colors = {
  // Deep Forest & Jungle (Wilderness & Nocturnal Luxury)
  forest: {
    dark: '#0B1912',
    deep: '#10251B',     // Primary Deep Forest (Brand)
    jungle: '#294735',   // Jungle Green (Canopy)
    light: '#3D644D',    // Wild Sal / Teak Leaf
    sage: '#5F856F',
    pale: '#EAF0EC',
  },

  // Warm Sand (Warmth, Dune, Natural Textiles)
  sand: {
    light: '#EFE7DA',
    DEFAULT: '#D8C6A5',  // Warm Sand (Brand)
    dark: '#B5A07C',
    deep: '#857150',
  },

  // Terracotta & Warm Indian Earth (Warmth, Hospitality, Clay)
  terracotta: {
    pale: '#F8ECE6',
    light: '#C47954',
    DEFAULT: '#A85F3B',  // Terracotta (Brand)
    dark: '#87492B',
    deep: '#61321C',
  },

  // Muted Sun Gold & Brass (Sunlit Canopy & Prestige Booking CTAs)
  gold: {
    pale: '#FBF5EB',
    light: '#CFAB67',
    DEFAULT: '#B58A45',  // Muted Sun Gold (Brand)
    dark: '#936E30',
  },

  // Warm Ivory (Primary Canvas & Light Hospitality Surfaces)
  ivory: {
    pure: '#FBF8F3',
    DEFAULT: '#F4EFE5',  // Warm Ivory (Brand)
    warm: '#EAE3D5',
    dark: '#D8D0C0',
  },

  // Charcoal & Editorial Inks (Crisp High-Legibility Typography)
  charcoal: {
    DEFAULT: '#1B1B18',  // Charcoal (Brand)
    soft: '#2D2D29',
    muted: '#595852',
    light: '#8E8D86',
    border: '#D8D4CA',
  },

  // Semantic Overlay & Shadows
  overlay: {
    hero: 'linear-gradient(180deg, rgba(16, 37, 27, 0.45) 0%, rgba(16, 37, 27, 0.8) 100%)',
    cinematic: 'linear-gradient(180deg, rgba(11, 25, 18, 0.2) 0%, rgba(11, 25, 18, 0.85) 100%)',
    soft: 'rgba(16, 37, 27, 0.35)',
    card: 'linear-gradient(180deg, rgba(27, 27, 24, 0.02) 0%, rgba(27, 27, 24, 0.85) 100%)',
  }
};

export const typography = {
  fontFamilies: {
    serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
    sans: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  // Scale optimized for Indian resort experience (not design agency minimalist)
  scales: {
    hero: 'clamp(2.75rem, 5.5vw, 4.75rem)',        // 44px - 76px
    h1: 'clamp(2.25rem, 4vw, 3.5rem)',             // 36px - 56px
    h2: 'clamp(1.75rem, 3vw, 2.75rem)',            // 28px - 44px
    h3: 'clamp(1.35rem, 2vw, 2rem)',               // 21px - 32px
    h4: 'clamp(1.15rem, 1.4vw, 1.4rem)',           // 18px - 22px
    eyebrow: '0.75rem',                            // 12px tracked uppercase
    lead: 'clamp(1.1rem, 1.25vw, 1.3rem)',         // 17px - 21px
    body: '1rem',                                  // 16px standard
    bodySm: '0.875rem',                            // 14px
    caption: '0.75rem',                            // 12px
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
    wider: '0.12em',
    editorial: '0.18em',
  }
};

export const containers = {
  sm: '640px',
  md: '860px',
  lg: '1160px',
  xl: '1340px',
  wide: '1560px',
  full: '100%',
};

export const radiuses = {
  none: '0px',
  sm: '3px',
  md: '6px',
  lg: '10px',
  full: '9999px',
};

export const transitions = {
  slow: '700ms cubic-bezier(0.22, 1, 0.36, 1)',
  standard: '400ms cubic-bezier(0.22, 1, 0.36, 1)',
  fast: '200ms ease-out',
};
