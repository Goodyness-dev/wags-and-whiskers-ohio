import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BUSINESS_INFO } from '../../data/businessData';
import { IMAGES } from '../../data/imageManifest';

export default function Hero({ onOpenWizard }) {
  const headlineRef = useRef(null);
  const badgeRef = useRef(null);
  const imageCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(badgeRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      gsap.fromTo(imageCardRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Delicate romantic champagne gradient orb */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-[#F7ECE6] dark:bg-[#38261F]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column (5 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow & Promo Chip */}
          <div ref={badgeRef} className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center space-x-1.5 bg-[#F7ECE6] dark:bg-[#3D2C24] text-[#8E5B47] dark:text-[#E8A58B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>🐾</span>
              <span>Central Ohio Wedding Pet Attendant</span>
            </span>
            <span className="inline-flex items-center space-x-1 bg-[#EBF2EE] dark:bg-[#203129] text-[#5B7566] dark:text-[#A7D1BD] px-3 py-1.5 rounded-full text-xs font-bold">
              <span>$50 OFF Special</span>
            </span>
          </div>

          {/* Primary Headline */}
          <h1 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2B2623] dark:text-[#F5EFEB] leading-[1.12]">
            Your dog belongs at your wedding. <span className="text-[#8E5B47] dark:text-[#E8A58B]">We handle every detail.</span>
          </h1>

          {/* Value Prop Description */}
          <p className="text-base sm:text-lg text-[#5C534E] dark:text-[#C5BCB6] leading-relaxed max-w-xl">
            From walking down the aisle and holding treats for your photographer to potty breaks, greeting guests, and a chauffeured ride home—Lacie handles your pet's complete care so you and your loved ones can celebrate completely stress-free.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenWizard('Wedding Attendant', 'Ceremony & Portraits ($50 OFF)')}
              className="px-8 py-4 rounded-2xl bg-[#8E5B47] hover:bg-[#724534] text-white font-bold text-base transition shadow-wedding hover:shadow-wedding-lg active:scale-95 text-center flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <span>Check Your Wedding Date</span>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <a
              href="#services"
              className="px-7 py-4 rounded-2xl bg-white dark:bg-[#262220] border-2 border-[#EFE6DD] dark:border-[#3D3733] text-[#2B2623] dark:text-[#F5EFEB] hover:border-[#8E5B47] dark:hover:border-[#8E5B47] font-bold text-base transition text-center shadow-xs active:scale-95"
            >
              View Packages
            </a>
          </div>

          {/* Proof Strip */}
          <div className="pt-4 border-t border-[#EFE6DD] dark:border-[#3D3733] grid grid-cols-3 gap-4">
            <div>
              <span className="text-2xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] block">14+</span>
              <span className="text-xs text-[#736760] dark:text-[#A89F99] font-medium">Years Experience</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#8E5B47] dark:text-[#E8A58B] block">$50 OFF</span>
              <span className="text-xs text-[#736760] dark:text-[#A89F99] font-medium">Promo Available</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] block">100%</span>
              <span className="text-xs text-[#736760] dark:text-[#A89F99] font-medium">Safe Ride Home</span>
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols) - Large Photography with Tactile Badges */}
        <div ref={imageCardRef} className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden card-thick border-4 border-white dark:border-[#262220] shadow-wedding-lg">
            <img
              src={IMAGES.hero.src}
              alt={IMAGES.hero.alt}
              className="w-full h-[430px] sm:h-[520px] object-cover object-center"
              loading="eager"
              fetchpriority="high"
            />
            {/* Soft subtle photo gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Photo Caption */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F7ECE6] block mb-1">
                Central Ohio Weddings
              </span>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                No family member left behind on your big day.
              </h3>
            </div>
          </div>

          {/* Floating Pill 1: Safe Ride Home Guarantee */}
          <div className="absolute -top-4 -right-3 sm:-right-6 bg-white dark:bg-[#262220] border-2 border-[#EFE6DD] dark:border-[#3D3733] rounded-2xl p-3 sm:p-4 shadow-wedding flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] dark:bg-[#203129] text-[#5B7566] dark:text-[#A7D1BD] flex items-center justify-center font-bold">
              🚗
            </div>
            <div>
              <span className="text-xs font-bold text-[#2B2623] dark:text-[#F5EFEB] block leading-tight">
                Safe Ride Home
              </span>
              <span className="text-[11px] text-[#736760] dark:text-[#A89F99]">
                Pet taxi back to house/hotel
              </span>
            </div>
          </div>

          {/* Floating Pill 2: 14+ Years Trust */}
          <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white dark:bg-[#262220] border-2 border-[#EFE6DD] dark:border-[#3D3733] rounded-2xl p-3 sm:p-4 shadow-wedding flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#F7ECE6] dark:bg-[#3D2C24] text-[#8E5B47] dark:text-[#E8A58B] flex items-center justify-center font-bold">
              💍
            </div>
            <div>
              <span className="text-xs font-bold text-[#2B2623] dark:text-[#F5EFEB] block leading-tight">
                Aisle & Photo Pro
              </span>
              <span className="text-[11px] text-[#736760] dark:text-[#A89F99]">
                14+ yrs pet sitting experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
