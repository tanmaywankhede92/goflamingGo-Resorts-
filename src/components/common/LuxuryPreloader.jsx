import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * Pure Minimalist Resort Preloader — Go Flamingo Resort, Pench
 * 
 * Design:
 * - 100% Pure, clean, minimalist full-screen warm ivory canvas (#F6F4E8)
 * - Zero cards, zero boxes, zero borders — pure brand focus
 * - Cropped brand video animation (flamingo art, gold line, "WELCOME TO GO FLAMINGO")
 * - 96% radial feather edge mask + mix-blend-multiply completely eliminates any edge line
 * - Smooth luxury zoom-out fade transition into the live resort website
 */
export default function LuxuryPreloader({ minDuration = 2800, onComplete }) {
  const [isHiding, setIsHiding] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const videoRef = useRef(null);

  const handleDismiss = () => {
    if (isHiding || isDone) return;
    setIsHiding(true);
    setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 700);
  };

  useEffect(() => {
    // Lock body scroll during preloader
    document.body.style.overflow = 'hidden';

    // Play video automatically
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Auto-dismiss smoothly after animation
    const timer = setTimeout(() => {
      handleDismiss();
    }, minDuration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [minDuration]);

  if (isDone) return null;

  return (
    <div
      aria-label="Welcome to Go Flamingo Resort"
      role="status"
      onClick={handleDismiss}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center select-none overflow-hidden cursor-pointer',
        // Pure seamless warm ivory canvas matching the video's exact background
        'bg-[#F6F4E8] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isHiding ? 'opacity-0 scale-[1.04] pointer-events-none' : 'opacity-100 scale-100'
      )}
    >
      {/* Centered Animated Brand Logo with Smooth Edge Feather Mask (Zero Border Artifacts) */}
      <div 
        className={cn(
          'relative z-10 w-full px-6 flex items-center justify-center max-w-[360px] sm:max-w-[480px] md:max-w-[560px]',
          'transition-transform duration-1000 ease-out',
          isHiding ? 'scale-105' : 'scale-100'
        )}
      >
        <div
          className="w-full flex items-center justify-center overflow-hidden"
          style={{
            maskImage: 'radial-gradient(ellipse 96% 96% at 50% 50%, black 80%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 96% 96% at 50% 50%, black 80%, transparent 100%)',
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/assets/goflamingo_loader_poster.jpg"
            onEnded={handleDismiss}
            className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply"
          >
            <source src="/assets/goflamingo_loader_cropped.mp4" type="video/mp4" />
            <source src="/assets/goflamingo_loader.mp4" type="video/mp4" />
            {/* Fallback Animated GIF */}
            <img
              src="/assets/goflamingo_loader_cropped.gif"
              alt="Go Flamingo Resorts"
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
