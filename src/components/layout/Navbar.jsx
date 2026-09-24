import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Navbar({ onOpenWizard, currentPage, onNavigate, darkMode, onToggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { label: 'The Experience', target: '#story' },
    { label: 'Packages', target: '#packages' },
    { label: 'Meet Lacie', target: '#meet-lacie' },
    { label: 'Gallery', target: '#gallery' },
    { label: 'Reviews', target: '#reviews' },
    { label: 'Journal', target: '#journal' },
    { label: 'FAQ', target: '#faq' },
  ];

  return (
    <>
      {/* 1. Subtle Editorial Promo Strip (Section 7 in Brief: Not loud, refined detail) */}
      <div className="bg-[#171713] text-[#F5F0E8] text-[11px] sm:text-xs py-2 px-4 text-center tracking-[0.2em] uppercase font-sans border-b border-white/10 flex items-center justify-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
        <span>2026 / 2027 Wedding Dates · $50 Reservation Credit</span>
        <button
          onClick={() => onOpenWizard('Wedding Attendant', '$50 Reservation Credit')}
          className="text-[#C9A96E] hover:text-white underline underline-offset-4 ml-1 cursor-pointer font-medium"
        >
          Check My Date →
        </button>
      </div>

      {/* 2. Floating Minimalist Navigation (Section 6 in Brief) */}
      <header className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#F5F0E8]/90 dark:bg-[#11110E]/90 backdrop-blur-md border-b border-[#E6E0D4] dark:border-[#2E2E28] shadow-xs' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Brand Wordmark: Editorial luxury */}
          <button 
            onClick={() => handleNavClick('#hero')} 
            className="text-left group cursor-pointer"
          >
            <div className="flex items-baseline space-x-2">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#171713] dark:text-[#F5F0E8]">
                Wags & Whiskers
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-semibold text-[#89917B] dark:text-[#C9A96E]">
                Central Ohio
              </span>
            </div>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#171713]/60 dark:text-[#F5F0E8]/60 block font-sans">
              The Four-Legged Guest of Honor
            </span>
          </button>

          {/* Desktop Navigation Links: Editorial Spacing */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-sans tracking-[0.15em] uppercase text-[#171713] dark:text-[#F5F0E8]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-[#89917B] dark:hover:text-[#C9A96E] transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-full border border-[#E6E0D4] dark:border-[#2E2E28] text-[#171713] dark:text-[#F5F0E8] hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg className="w-4 h-4 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Primary Editorial CTA with Button-in-Button Arrow */}
            <button
              onClick={() => onOpenWizard()}
              className="group pl-6 pr-3 py-3 rounded-full bg-[#171713] hover:bg-[#2A2A24] dark:bg-white dark:hover:bg-[#EFE9DF] text-white dark:text-[#171713] font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 flex items-center space-x-3 cursor-pointer shadow-sm active:scale-[0.98]"
            >
              <span>Check My Date</span>
              <span className="w-7 h-7 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full border border-[#E6E0D4] dark:border-[#2E2E28] text-[#171713] dark:text-[#F5F0E8]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg className="w-4 h-4 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-[#E6E0D4] dark:border-[#2E2E28] text-[#171713] dark:text-[#F5F0E8]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Full-Screen Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E6E0D4] dark:border-[#2E2E28] bg-[#F5F0E8] dark:bg-[#11110E] px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="w-full text-left py-2 font-serif text-2xl text-[#171713] dark:text-[#F5F0E8] hover:text-[#89917B] transition"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#E6E0D4] dark:border-[#2E2E28]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWizard();
                }}
                className="w-full py-4 rounded-full bg-[#171713] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold text-center"
              >
                Check My Date →
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}