import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function MeetLacie({ onOpenWizard }) {
  const proofPoints = [
    '14+ Years Pet Care',
    'Medication Experienced',
    'Central Ohio Native',
    'Wedding-Day Handling',
    'Safe Pet Transport',
  ];

  return (
    <section id="meet-lacie" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F5F0E8] dark:bg-[#11110E] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Candid Portrait with Double Bezel */}
          <div className="lg:col-span-6 relative">
            <div className="card-bezel group">
              <div className="card-bezel-inner p-2 aspect-4/5 overflow-hidden">
                <img
                  src="/images/lacie-attendant.jpg"
                  alt="Lacie Kern caring for dogs in Central Ohio"
                  className="w-full h-full object-cover object-top rounded-[calc(2rem-0.75rem)] group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Experience Stamp */}
            <div className="absolute -bottom-5 right-6 sm:right-10 bg-[#171713] text-[#F5F0E8] px-6 py-4 rounded-2xl shadow-xl text-center border border-white/10">
              <span className="font-serif text-3xl font-normal block leading-none text-[#C9A96E]">14+</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-medium text-white/70 block mt-1">
                Years of Care
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Italic Annotation requested in Brief */}
            <div className="inline-block">
              <span className="font-serif italic text-lg sm:text-xl text-[#89917B] dark:text-[#C9A96E] block">
                ← the human your dog will probably fall in love with
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#171713] dark:text-[#F5F0E8] leading-[0.98] tracking-tight">
              MEET <br />
              <span className="italic text-[#89917B] dark:text-[#C9A96E]">LACIE.</span>
            </h2>

            {/* Body Copy */}
            <p className="font-sans text-base sm:text-lg text-[#171713]/75 dark:text-[#F5F0E8]/75 font-light leading-relaxed max-w-xl">
              14+ years of professional animal care combined with calm wedding-day handling, thoughtful routines, and genuine attention to each pet's unique personality.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#171713]/65 dark:text-[#F5F0E8]/65 font-light leading-relaxed max-w-xl">
              "Animals have been my entire life's calling. When you're walking down the aisle, the last thing on your mind should be whether your pup got water, if they're panting in the summer heat, or who has to take off early to feed them dinner."
            </p>

            {/* Proof Points Strip */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {proofPoints.map((point, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase font-medium bg-white dark:bg-[#191915] border border-[#E6E0D4] dark:border-[#2E2E28] text-[#171713] dark:text-[#F5F0E8]"
                >
                  {point}
                </span>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4 flex items-center space-x-6">
              <button
                onClick={() => onOpenWizard('Wedding Attendant', 'Chat with Lacie')}
                className="group pl-7 pr-3 py-3.5 rounded-full bg-[#171713] hover:bg-[#2A2A24] dark:bg-white dark:hover:bg-[#EFE9DF] text-white dark:text-[#171713] font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all flex items-center space-x-3 cursor-pointer shadow-sm active:scale-[0.98]"
              >
                <span>Schedule a Chat</span>
                <span className="w-7 h-7 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>

              <a
                href={BUSINESS_INFO.social.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans tracking-wider uppercase font-semibold text-[#89917B] dark:text-[#C9A96E] hover:underline"
              >
                View Facebook Profile ↗
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}