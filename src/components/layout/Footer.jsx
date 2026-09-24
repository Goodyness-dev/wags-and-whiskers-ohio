import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onOpenWizard, onNavigate }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-[#11110E] text-[#F5F0E8] border-t border-white/10 overflow-hidden" role="contentinfo">
      {/* Dramatic Editorial Final Statement Callout (Section 26 in Brief) */}
      <div className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C9A96E] block">
            Begin The Conversation
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.98] tracking-tight text-[#F5F0E8]">
            LET'S GET <br />
            YOUR BEST FRIEND <br />
            <span className="italic text-[#C9A96E]">ON THE GUEST LIST.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Reserve your 2026 or 2027 wedding date with Lacie Kern and receive a complimentary timeline consultation plus your $50 reservation credit.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenWizard('Wedding Attendant', 'Footer Final CTA')}
              className="group pl-8 pr-3 py-4 rounded-full bg-[#F5F0E8] hover:bg-white text-[#171713] font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 inline-flex items-center space-x-4 cursor-pointer shadow-lg active:scale-[0.98]"
            >
              <span>Check Your Wedding Date</span>
              <span className="w-9 h-9 rounded-full bg-[#171713] text-white flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-xs font-sans">
        {/* Brand Summary */}
        <div className="space-y-4">
          <span className="font-serif text-2xl font-normal block text-[#F5F0E8]">
            {BUSINESS_INFO.name}
          </span>
          <p className="text-white/60 leading-relaxed font-light">
            Central Ohio's dedicated wedding pet attendant and bonded pet care service by Lacie Kern. 14+ years of professional animal care.
          </p>
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.social.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E] hover:underline uppercase tracking-wider text-[11px]"
            >
              Facebook Profile ↗
            </a>
          </div>
        </div>

        {/* Explore Navigation */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#89917B] font-semibold block">
            Navigation
          </span>
          <ul className="space-y-2 text-white/70">
            {[
              { label: 'The Experience', target: '#story' },
              { label: 'Wedding Packages', target: '#packages' },
              { label: 'Meet Lacie Kern', target: '#meet-lacie' },
              { label: 'Photo Archive', target: '#gallery' },
              { label: 'Couple Reviews', target: '#reviews' },
              { label: 'Wedding Journal', target: '#journal' },
              { label: 'Questions & FAQ', target: '#faq' },
            ].map(link => (
              <li key={link.label}>
                <button
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Area */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#89917B] font-semibold block">
            Central Ohio Hub
          </span>
          <div className="space-y-2 text-white/70 leading-relaxed font-light">
            <p>Columbus Metro · Dublin · Powell</p>
            <p>New Albany · Westerville · Upper Arlington</p>
            <p>Worthington · Delaware · Grove City</p>
            <p className="text-[#C9A96E] pt-1">
              Statewide Ohio Travel for All Venues
            </p>
          </div>
        </div>

        {/* Accreditations */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#89917B] font-semibold block">
            Community
          </span>
          <p className="text-white/60 font-light leading-relaxed">
            Proud active vendor on the <em>OHIO wedding couples & vendors</em> group. Recommended by local Columbus and Central Ohio venues.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('admin')}
              className="text-white/40 hover:text-[#C9A96E] transition underline underline-offset-4 text-[10px] uppercase tracking-wider cursor-pointer"
            >
              Attendant Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 px-4 text-center text-[11px] font-sans text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</span>
          <span>The Four-Legged Guest of Honor · Central Ohio</span>
        </div>
      </div>
    </footer>
  );
}