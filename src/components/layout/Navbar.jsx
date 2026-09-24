import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Navbar({ onOpenWizard, currentPage, onNavigate, darkMode, onToggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate && currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Wedding Packages', target: '#services' },
    { label: 'Meet Lacie', target: '#about' },
    { label: 'Day-Of Care', target: '#amenities' },
    { label: 'Bride Reviews', target: '#reviews' },
    { label: 'Venues & FAQ', target: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 dark:bg-[#1C1917]/90 backdrop-blur-md border-b border-[#EFE6DD] dark:border-[#3D3733] transition-colors">
      {/* Top Wedding Promo Banner */}
      <div className="bg-[#8E5B47] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
          Ohio Wedding Special
        </span>
        <span>
          <strong>$50 OFF</strong> Wedding Pet Attendant Services for upcoming dates!
        </span>
        <button
          onClick={() => onOpenWizard('Wedding Attendant', 'Special Promo ($50 OFF)')}
          className="underline ml-1 font-bold hover:text-[#F7ECE6] transition cursor-pointer"
        >
          Reserve Your Date →
        </button>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button 
          onClick={() => handleNavClick('#hero')} 
          className="flex items-center space-x-3 text-left group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#8E5B47] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            {/* Heart & Pet Paw Monoline SVG */}
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-[#2B2623] dark:text-[#F5EFEB] text-lg sm:text-xl tracking-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] font-bold text-[#8E5B47] bg-[#F7ECE6] dark:bg-[#3D2C24] dark:text-[#E8A58B] px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block">
                Central Ohio
              </span>
            </div>
            <span className="text-xs text-[#736760] dark:text-[#A89F99] block font-medium">
              Wedding Pet Attendant & Day-Of Care
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-[#473F3A] dark:text-[#D5CDC6]">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className="hover:text-[#8E5B47] dark:hover:text-[#E8A58B] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center space-x-3.5">
          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-xl border border-[#EFE6DD] dark:border-[#3D3733] text-[#736760] dark:text-[#A89F99] hover:bg-[#F5EFEB] dark:hover:bg-[#262220] transition cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenWizard()}
            className="px-5 py-2.5 rounded-xl bg-[#8E5B47] hover:bg-[#724534] text-white font-bold text-sm transition shadow-sm active:scale-95 cursor-pointer flex items-center space-x-2"
          >
            <span>Check Wedding Date</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl border border-[#EFE6DD] dark:border-[#3D3733] text-[#736760] dark:text-[#A89F99]"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-[#EFE6DD] dark:border-[#3D3733] text-[#2B2623] dark:text-[#F5EFEB]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EFE6DD] dark:border-[#3D3733] bg-[#FAF8F5] dark:bg-[#1C1917] px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className="w-full text-left py-2.5 px-3 rounded-xl text-base font-semibold text-[#2B2623] dark:text-[#F5EFEB] hover:bg-[#F5EFEB] dark:hover:bg-[#262220] transition"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWizard();
              }}
              className="w-full py-3.5 rounded-xl bg-[#8E5B47] text-white font-bold text-base transition shadow-sm text-center"
            >
              Check Wedding Date ($50 OFF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
