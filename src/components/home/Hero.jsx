import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
      );
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.35, ease: 'power2.out' }
      );
      gsap.fromTo(statsRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, delay: 0.45, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative pt-12 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[640px] lg:min-h-[720px] flex flex-col justify-between">
      {/* Botanical Background Image with Deep Sage/Green Tint Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/botanical-hero-backdrop.jpg"
          alt="Lush botanical greenhouse wedding pet ambiance"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95"
          fetchpriority="high"
          loading="eager"
        />
        {/* Soft atmospheric gradient mimicking GreenNest natural studio light */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12261E]/95 via-[#1E3D2F]/85 to-[#2D5A46]/60 dark:from-[#08120E]/98 dark:via-[#0D1C16]/90 dark:to-[#12261E]/75" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full pt-10 sm:pt-16 pb-12">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Subtle Eyebrow */}
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/20 text-[#E8F0EA] px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#A7D1BD] animate-pulse" />
            <span>Central Ohio Wedding Pet Attendant & Day-Of Care</span>
          </div>

          {/* Large Serif Headline matching GreenNest template */}
          <h1
            ref={headlineRef}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12] tracking-tight"
          >
            Discover peaceful, <br className="hidden sm:inline" />
            <span className="italic font-light text-[#E8F0EA]">picture-perfect</span> wedding moments with your pets
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg text-[#D2E2D7] font-light leading-relaxed max-w-xl"
          >
            14+ years of professional animal care. Lacie Kern ensures your dog's aisle escort, photographer handling, hydration, and chauffeured safe ride home are completely stress-free.
          </p>

          {/* CTAs matching GreenNest Button Aesthetics */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => onOpenWizard('Wedding Attendant', 'Ceremony & Portraits ($50 OFF)')}
              className="px-8 py-3.5 rounded-full bg-[#0E2019] hover:bg-black text-white font-medium text-sm sm:text-base transition shadow-lg active:scale-95 text-center flex items-center justify-center space-x-2.5 cursor-pointer border border-white/10"
            >
              <span>Check Date & Lock $50 Off</span>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <a
              href="#why-us"
              className="px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-medium text-sm sm:text-base transition text-center flex items-center justify-center space-x-2 active:scale-95"
            >
              {/* Play / Explore Circle */}
              <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span>Why Choose Lacie</span>
            </a>
          </div>
        </div>
      </div>

      {/* The 4 Frosted Glass Stat Cards (Exact 1:1 match to GreenNest template bottom bar) */}
      <div className="max-w-7xl mx-auto w-full pt-6">
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {BUSINESS_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 dark:bg-[#14251E]/80 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-2xl p-4 sm:p-5 text-center shadow-frosted hover:-translate-y-1 transition duration-300"
            >
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] block">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#242826] dark:text-[#C5D8CC] block mt-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#799885] dark:text-[#8EAFA0] block mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}