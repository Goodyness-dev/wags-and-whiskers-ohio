import React from 'react';

export default function SocialProofStrip() {
  const credentials = [
    '14+ Years Animal Care Experience',
    '5-Star Central Ohio Bridal Rating',
    '50+ Ohio Venues & Estate Barns',
    'Central Ohio & Statewide Travel',
    'Bonded & Medication Experienced',
    'Chauffeured Safe Pet Taxi',
  ];

  return (
    <div className="py-6 px-4 bg-[#171713] text-[#F5F0E8] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase font-light text-[#F5F0E8]/75">
        {credentials.map((cred, idx) => (
          <React.Fragment key={idx}>
            <span className="hover:text-[#C9A96E] transition-colors">{cred}</span>
            {idx < credentials.length - 1 && (
              <span className="text-[#C9A96E] font-serif select-none hidden md:inline">✦</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}