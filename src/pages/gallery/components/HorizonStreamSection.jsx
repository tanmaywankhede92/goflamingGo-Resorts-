import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Play, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../../../components/common';
import { cn } from '../../../utils/cn';

/**
 * HorizonStreamSection
 * 
 * Continuous Luxury Filmstrip Carousel:
 * - Smooth auto-scroll luxury glide (~40px/s)
 * - Full native touch/finger scrolling on mobile (swiping left or right)
 * - Mouse drag-to-scroll on desktop
 * - Left/Right navigation arrow buttons
 * - Infinite wrap-around in both directions (zero dead ends)
 * - Intelligent pause while touching/hovering, auto-resuming after finger release
 */
export default function HorizonStreamSection({ mediaItems, onSelectMedia }) {
  const streamRef = useRef(null);
  const isInteractingRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Mouse drag state for desktop
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollStartRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Triplicate the items for continuous, infinite wrap-around in both directions
  const streamItems = useMemo(() => {
    if (!mediaItems || mediaItems.length === 0) return [];
    return [...mediaItems, ...mediaItems, ...mediaItems];
  }, [mediaItems]);

  useEffect(() => {
    const el = streamRef.current;
    if (!el) return;

    // Start in the center set so swiping left (backward) or right (forward) works immediately
    const initTimer = setTimeout(() => {
      if (el && el.scrollWidth > 0) {
        el.scrollLeft = el.scrollWidth / 3;
      }
    }, 150);

    let lastTime = performance.now();
    const autoSpeed = 0.65; // ~40px per second, elegant luxury drift

    const step = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isInteractingRef.current && el) {
        const oneSet = el.scrollWidth / 3;
        if (oneSet > 0) {
          el.scrollLeft += (autoSpeed * delta) / 16.67;

          // Infinite forward loop
          if (el.scrollLeft >= oneSet * 2) {
            el.scrollLeft -= oneSet;
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      clearTimeout(initTimer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [streamItems]);

  // Native scroll handler to seamlessly wrap infinite loop during finger swipe / inertia
  const handleScroll = () => {
    const el = streamRef.current;
    if (!el) return;
    const oneSet = el.scrollWidth / 3;
    if (oneSet <= 0) return;

    // If scrolled into the 3rd set, wrap back to the 2nd set
    if (el.scrollLeft >= oneSet * 2.1) {
      el.scrollLeft -= oneSet;
    }
    // If scrolled into the 1st set, wrap forward to the 2nd set
    else if (el.scrollLeft <= oneSet * 0.3) {
      el.scrollLeft += oneSet;
    }
  };

  // Touch event handlers for mobile devices
  const handleTouchStart = () => {
    isInteractingRef.current = true;
    hasMovedRef.current = false;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
  };

  const handleTouchMove = () => {
    hasMovedRef.current = true;
  };

  const handleTouchEnd = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    // Resume auto-scroll 1.8 seconds after finger release
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      hasMovedRef.current = false;
    }, 1800);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    const el = streamRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    isInteractingRef.current = true;
    hasMovedRef.current = false;
    dragStartXRef.current = e.pageX - el.offsetLeft;
    dragScrollStartRef.current = el.scrollLeft;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const el = streamRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - dragStartXRef.current;
    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true;
    }
    el.scrollLeft = dragScrollStartRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      hasMovedRef.current = false;
    }, 1800);
  };

  // Smooth scroll using navigation buttons
  const handleScrollBy = (amount) => {
    const el = streamRef.current;
    if (!el) return;
    isInteractingRef.current = true;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2400);
  };

  const handleCardClick = (item) => {
    // If the user was swiping or dragging, ignore the click
    if (hasMovedRef.current) {
      hasMovedRef.current = false;
      return;
    }
    if (onSelectMedia) {
      onSelectMedia(item);
    }
  };

  return (
    <section
      id="horizon-stream-section"
      className="py-10 sm:py-16 bg-gradient-to-b from-[#FAF6F0] via-[#F4EDE2] to-[#EFE7D8] text-[#1A2E22] overflow-hidden border-y border-[#E2D6C0] relative scroll-mt-20"
      onMouseEnter={() => { isInteractingRef.current = true; }}
      onMouseLeave={() => {
        if (!isDraggingRef.current) {
          isInteractingRef.current = false;
        }
      }}
    >
      {/* Stream Header with Title and Left/Right Navigation */}
      <Container size="xl" className="mb-5 sm:mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#10251B] font-normal tracking-tight">
            A Visual Odyssey Across GoFlamingo
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6E63] mt-1 font-light flex items-center gap-2">
            <span>Swipe left or right to explore</span>
            <span className="text-[#C5A880]">·</span>
            <span>Tap card to view</span>
          </p>
        </div>

        {/* Navigation Arrow Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleScrollBy(-320)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D8CEBE] bg-white/90 hover:bg-[#F2EADB] text-[#10251B] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleScrollBy(320)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D8CEBE] bg-white/90 hover:bg-[#F2EADB] text-[#10251B] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </Container>

      {/* The Scrollable Stream Canvas: Auto-scroll + Finger Touch Swipe */}
      <div
        ref={streamRef}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="w-full overflow-x-auto overflow-y-hidden flex py-2 select-none cursor-grab active:cursor-grabbing touch-pan-x"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex shrink-0 px-3 sm:px-6">
          {streamItems.map((item, idx) => (
            <div
              key={`stream-${item.id}-${idx}`}
              onClick={() => handleCardClick(item)}
              className={cn(
                "group relative h-[320px] sm:h-[400px] md:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 cursor-pointer shadow-[0_12px_36px_rgba(16,37,27,0.10)] border border-[#DFD5C2] hover:border-[#C5A880] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(16,37,27,0.18)] mx-2.5 sm:mx-3.5 bg-white select-none",
                item.ribbonWidth || 'w-72 sm:w-80 md:w-96'
              )}
            >
              {/* Media Image / Video Poster */}
              <img
                src={item.src || item.poster}
                alt={item.title}
                draggable={false}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-[0.98] contrast-[1.02] pointer-events-none"
                loading="lazy"
              />

              {/* Subtle Luxury Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08130B]/95 via-[#08130B]/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Video Play Badge if Video */}
              {item.type === 'video' && (
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 pointer-events-none">
                  <span className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md text-[#10251B] border border-[#E5DAC7] flex items-center justify-center shadow-lg group-hover:bg-[#C5A880] group-hover:text-[#08130B] transition-colors">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                </div>
              )}

              {/* Minimal Elegant Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 sm:p-6 z-10 pointer-events-none">
                <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-white tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EAE2D5] font-light truncate mt-1 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {item.subtitle}
                </p>
              </div>

              {/* Hover Center Magnifier */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C5A880] text-[#08130B] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  {item.type === 'video' ? (
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#08130B] text-[#08130B] ml-0.5" />
                  ) : (
                    <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#08130B]" />
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
