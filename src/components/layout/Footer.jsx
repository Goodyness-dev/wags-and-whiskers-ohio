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
    <footer className="bg-[#12261E] text-[#C5D8CC] text-sm sm:text-base pb-16 sm:pb-0 border-t border-[#1E382D]" role="contentinfo">
      {/* Pre-footer Callout Banner */}
      <div className="bg-[#1E3D2F] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#2A5240]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#A7D1BD] font-semibold block mb-1">
              Central Ohio Wedding Pet Attendant
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to include your pup in your big day?
            </h3>
            <p className="text-[#D2E2D7] mt-2 text-sm sm:text-base max-w-xl">
              Lock in your wedding date today and receive $50 OFF your attendant package with zero future rate increases.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenWizard('Wedding Attendant', '$50 OFF Booking Special')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#1E3D2F] font-semibold text-sm hover:bg-[#FAF8F5] transition shadow-md active:scale-95 text-center cursor-pointer"
            >
              Check Wedding Date ($50 OFF)
            </button>
            <a
              href={BUSINESS_INFO.social.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#12261E] hover:bg-black text-white font-medium text-sm transition border border-white/20 flex items-center justify-center space-x-2 active:scale-95 text-center"
            >
              <span>Message on Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#1E3D2F] text-white flex items-center justify-center font-bold shadow-sm border border-white/10">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9c0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9 0 2.12-.74 4.07-1.97 5.61L12 21z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
              </svg>
            </div>
            <div>
              <span className="font-serif font-bold text-white text-xl block tracking-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] text-[#A7D1BD] uppercase tracking-wider font-semibold block">
                Central Ohio Wedding Pet Attendant
              </span>
            </div>
          </div>
          <p className="text-[#8EAFA0] text-xs sm:text-sm leading-relaxed">
            Professional wedding pet attendant services by Lacie Kern. 14+ years of dedicated pet care experience ensuring joyful, calm wedding celebrations.
          </p>
          <div className="pt-1">
            <a
              href={BUSINESS_INFO.social.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#A7D1BD] hover:text-white transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Connect with Lacie on Facebook</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-white font-bold text-base mb-4">Explore Care</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {[
              { label: 'Why Choose Lacie', target: '#why-us' },
              { label: 'Signature Packages', target: '#packages' },
              { label: 'The Wedding Experience', target: '#experience' },
              { label: 'Bride Reviews', target: '#reviews' },
              { label: 'Pet Care Journal & FAQ', target: '#journal' },
            ].map(link => (
              <li key={link.label}>
                <button 
                  onClick={(e) => handleLinkClick(e, link.target)} 
                  className="hover:text-white transition text-[#8EAFA0] hover:underline text-left cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Venue Coverage */}
        <div>
          <h4 className="font-serif text-white font-bold text-base mb-4">Service Area</h4>
          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1.5 border-b border-[#1E382D]">
              <span className="text-[#8EAFA0]">Primary Hub</span>
              <span className="text-white font-medium">Columbus Metro</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-[#1E382D]">
              <span className="text-[#8EAFA0]">Suburbs</span>
              <span className="text-[#A7D1BD] font-medium">Dublin, Powell, New Albany</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-[#1E382D]">
              <span className="text-[#8EAFA0]">Venues</span>
              <span className="text-white font-medium">Statewide Ohio Travel</span>
            </div>
            <p className="text-[11px] text-[#6E8F7F] pt-2 leading-relaxed">
              Available 7 days a week for rehearsals, ceremonies, and receptions.
            </p>
          </div>
        </div>

        {/* Community & Contact */}
        <div>
          <h4 className="font-serif text-white font-bold text-base mb-4">Vendor Community</h4>
          <address className="not-italic space-y-3 text-xs sm:text-sm">
            <div className="flex items-start space-x-2.5">
              <svg className="w-5 h-5 text-[#A7D1BD] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-[#D2E2D7]">
                Central Ohio & Surrounding Areas<br />
                <span className="text-[11px] text-[#6E8F7F]">Westerville • Upper Arlington • Delaware</span>
              </span>
            </div>
            <div className="flex items-center space-x-2.5">
              <svg className="w-5 h-5 text-[#A7D1BD] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <a
                href={BUSINESS_INFO.social.vendorGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#A7D1BD] hover:underline"
              >
                OHIO wedding couples & vendors member
              </a>
            </div>
            <p className="text-[11px] text-[#6E8F7F] pt-1">
              Active vendor recommended by Central Ohio wedding planners and couples.
            </p>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E382D] py-6 px-4 text-center text-xs text-[#6E8F7F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <span>Central Ohio Wedding Pet Attendant Services</span>
            <span>•</span>
            <button
              onClick={() => onNavigate('admin')}
              className="text-[#6E8F7F] hover:text-[#A7D1BD] transition underline underline-offset-2 cursor-pointer"
            >
              Attendant Admin Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}