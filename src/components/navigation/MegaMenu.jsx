import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { Container } from '../common';
import { cn } from '../../utils/cn';

/**
 * Desktop MegaMenu Dropdown Component — Luxury Heritage Palette
 * 
 * - Uncluttered, balanced two-column navigation on warm ivory linen surface
 * - High-contrast editorial spotlight card on right with rich imagery and crisp typography
 * - Smooth hover transitions and clear visual hierarchy (Zero chaotic elements)
 */
export default function MegaMenu({
  item,
  isOpen,
  onClose,
  isPinned,
  onMouseEnter,
  onMouseLeave,
}) {
  if (!isOpen || !item?.sections) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'absolute top-full left-0 w-full bg-[#FAF7F2] text-[#0E2718] border-b border-[#E3D7C3] shadow-https://127.0.0.1:55792/static/artifacts/f7ac385c-1559-4882-a419-2155fabbff8d/.user_uploaded/media_1792005202339.png?csrf=2ef02639-7f8e-4e43-8116-d77656bb69b2[0_25px_60px_-15px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 z-50',
        'animate-in fade-in-0 slide-in-from-top-1',
        'before:content-[\'\'] before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:pointer-events-auto'
      )}
    >
      <Container size="xl" className="py-7 lg:py-8 relative">
        
        {/* Pinned status badge & explicit close button */}
        <div className="absolute top-4 right-4 sm:right-6 flex items-center gap-2 z-10">
          {isPinned && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0E2718]/8 text-[#0E2718] text-[10px] uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B38E5D] animate-pulse" />
              Menu Pinned
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            title="Close menu"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EDE5D6] hover:bg-[#DFD3C0] text-[#0E2718] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-1">
          
          {/* Categorized Link Sections (7 cols on desktop for balanced breathing room) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {item.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                {/* Section Header */}
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#E8DDCD]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B38E5D]" />
                  <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#0E2718] font-bold font-sans">
                    {sec.title}
                  </h3>
                </div>

                {/* Section Links */}
                <ul className="space-y-1">
                  {sec.items.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        to={sub.path}
                        onClick={onClose}
                        className="group block p-2.5 -mx-2.5 rounded-xl hover:bg-[#F2ECE1] border border-transparent hover:border-[#E4D7C2] transition-all duration-200"
                      >
                        <div className="text-[13.5px] font-semibold text-[#0E2718] group-hover:text-[#8E6D3E] transition-colors flex items-center justify-between">
                          <span>{sub.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#8E6D3E] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 shrink-0" />
                        </div>
                        {sub.desc && (
                          <p className="text-xs text-[#5C6E61] font-light mt-0.5 leading-relaxed line-clamp-1">
                            {sub.desc}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Editorial Visual Preview Card (5 cols — Luxury Spotlight) */}
          {item.preview && (
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#E5DAC7] pt-6 lg:pt-0 lg:pl-8 flex">
              <Link
                to={item.preview.path}
                onClick={onClose}
                className="group relative w-full rounded-2xl overflow-hidden bg-[#0E2718] text-white border border-[#C5A880]/30 shadow-xl flex flex-col justify-between hover:border-[#DFBF8E] transition-all duration-300"
              >
                {/* Upper Photo with Vignette */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-black">
                  <img
                    src={item.preview.image}
                    alt={item.preview.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2718] via-transparent to-black/30" />
                  
                  {/* Top Spotlight Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#DFBF8E] text-[10px] uppercase font-bold tracking-[0.16em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]" />
                      Featured Spotlight
                    </span>
                  </div>
                </div>

                {/* Lower Information Area */}
                <div className="p-5 bg-[#0E2718] flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-serif text-lg font-normal text-white group-hover:text-[#DFBF8E] transition-colors leading-snug">
                      {item.preview.title}
                    </h4>
                    <p className="text-xs text-sand-light/80 font-light mt-1.5 leading-relaxed">
                      {item.preview.description}
                    </p>
                  </div>

                  {/* Clean CTA Button */}
                  <div className="pt-3.5 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#DFBF8E] font-bold group-hover:text-white transition-colors flex items-center gap-1.5">
                      <span>{item.preview.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

        </div>
      </Container>
    </div>
  );
}
