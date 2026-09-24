import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  const headlineRef = useRef(null);
  const copyRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current?.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: 'power3.out' }
      );
      gsap.fromTo(copyRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.5, ease: 'power2.out' }
      );
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative min-h-[92dvh] lg:min-h-[96dvh] flex flex-col justify-between px-4 sm:px-8 lg:px-16 pt-8 pb-12 overflow-hidden">
      {/* Cinematic Full-Bleed Editorial Background with Soft Film Tone */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/greenhouse-wedding.jpg"
          alt="Luxury botanical estate wedding ceremony with pet"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.72] contrast-[1.05]"
          fetchpriority="high"
          loading="eager"
        />
        {/* Editorial Atmospheric Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110E] via-black/40 to-black/30 pointer-events-none" />
      </div>

      {/* Top Micro Eyebrow */}
      <div className="pt-4 sm:pt-8">
        <span className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-sans font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
          <span>Central Ohio Wedding Pet Attendant</span>
        </span>
      </div>

      {/* Center / Lower Main Typography Block */}
      <div className="max-w-5xl my-auto py-12 sm:py-16">
        {/* Massive Editorial Headline (40-70% viewport coverage) */}
        <h1
          ref={headlineRef}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F5F0E8] font-normal leading-[0.98] tracking-tight"
        >
          <span className="block">YOUR BEST FRIEND</span>
          <span className="block italic text-[#C9A96E]">HAS A SEAT AT</span>
          <span className="block">THE WEDDING.</span>
        </h1>

        {/* Supporting Copy */}
        <p
          ref={copyRef}
          className="mt-8 text-base sm:text-xl text-[#F5F0E8]/80 font-sans font-light leading-relaxed max-w-2xl"
        >
          From first look to final goodnight, Wags & Whiskers handles every detail so your pet can be part of the celebration while everyone you love gets to remain a guest.
        </p>

        {/* Dual Actions with Button-in-Button */}
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={() => onOpenWizard('Wedding Attendant', 'Hero Date Check')}
            className="group pl-8 pr-3 py-4 rounded-full bg-[#F5F0E8] hover:bg-white text-[#171713] font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center justify-between sm:justify-start space-x-4 cursor-pointer shadow-lg active:scale-[0.98]"
          >
            <span>Check My Date</span>
            <span className="w-9 h-9 rounded-full bg-[#171713] text-white flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>

          <a
            href="#story"
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-[#F5F0E8] font-sans text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 text-center"
          >
            Explore The Experience ↓
          </a>
        </div>
      </div>

      {/* Bottom Editorial Meta Strip */}
      <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-sans text-[#F5F0E8]/60 tracking-wider gap-3">
        <div className="flex items-center space-x-3">
          <span className="text-[#C9A96E]">Lacie Kern</span>
          <span>·</span>
          <span>14+ Years Experience</span>
          <span>·</span>
          <span>Central Ohio Venues</span>
        </div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E]">
          Scroll to read your dog's story ↓
        </div>
      </div>
    </section>
  );
}