import React, { useState } from 'react';

export default function ServicesSection({ onOpenWizard, onViewAllServices }) {
  const [selectedRange, setSelectedRange] = useState('full'); // 'ceremony' | 'full' | 'weekend'

  const packages = [
    {
      id: 'the-aisle',
      tier: '01',
      title: 'THE AISLE',
      subtitle: 'Ceremony & Formal Portraits',
      duration: '2.5 – 3 Hours on Venue Site',
      price: 'From $299',
      promo: '$50 Credit Applicable',
      isSignature: false,
      description: 'Our focused ceremony service. Your pup gets dressed, walks down the aisle as your ring bearer, poses for photos, and is safely handed off or transported home.',
      inclusions: [
        'Pre-ceremony styling (floral wreath, bowtie, or bandana)',
        'Aisle escort & ring bearer dog management',
        'Continuous ceremony supervision & hydration',
        'Photographer co-pilot (squeakers & high-value treats)',
        'Safe handoff or chauffeured ride home'
      ],
      cta: 'EXPLORE THE AISLE →'
    },
    {
      id: 'the-day',
      tier: '02 · SIGNATURE EXPERIENCE',
      title: 'THE DAY',
      subtitle: 'Full Wedding Day Concierge',
      duration: '6 – 8 Hours Comprehensive Care',
      price: 'From $599',
      promo: '$50 Credit Applicable',
      isSignature: true,
      description: 'Complete hands-off luxury from morning bridal suite candid photos through vows, formal portrait sessions, cocktail hour mingling, and evening bedtime tuck-in.',
      inclusions: [
        'Bridal suite / groom prep candid companion',
        'Pre-ceremony stroll & calming brush-out',
        'Ceremony escort & ring bearer handling',
        'Cocktail hour meet-and-greets & guest supervision',
        'Chauffeured ride home + dinner service & bedtime walk',
        'Continuous photo/video updates sent to your phone'
      ],
      cta: 'EXPLORE THE FULL DAY →'
    },
    {
      id: 'the-weekend',
      tier: '03',
      title: 'THE WEEKEND',
      subtitle: 'Rehearsal + Wedding Weekend',
      duration: 'Multi-Day Extended Care',
      price: 'Custom Quote',
      promo: 'Weekend Concierge',
      isSignature: false,
      description: 'Total peace of mind for you and out-of-town guests. Rehearsal practice walk-through, full wedding day care, and next-morning breakfast check-ins.',
      inclusions: [
        'Venue rehearsal walk-through practice with your pet',
        'Full Wedding Day VIP Attendant service',
        'Scheduled medication & custom dietary routines',
        'Late-night tuck-in at your home or hotel',
        'Morning-after walk during post-wedding brunch',
        'Comprehensive pet taxi across all locations'
      ],
      cta: 'PLAN THE WEEKEND →'
    }
  ];

  return (
    <section id="packages" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F5F0E8] dark:bg-[#11110E] transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E6E0D4] dark:border-[#2E2E28] gap-6">
          <div>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#89917B] dark:text-[#C9A96E] block mb-2">
              // 04 · Curated Experiences
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#171713] dark:text-[#F5F0E8]">
              HOW MUCH OF <br />
              <span className="italic text-[#89917B] dark:text-[#C9A96E]">THE DAY SHOULD WE HANDLE?</span>
            </h2>
          </div>

          {/* Interactive Range Visual requested in Brief */}
          <div className="space-y-2 text-right">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#89917B] dark:text-[#C9A96E] block">
              Flexible Timeline Coverage
            </span>
            <div className="inline-flex items-center space-x-3 text-xs font-sans tracking-wider uppercase bg-white dark:bg-[#191915] px-4 py-2 rounded-full border border-[#E6E0D4] dark:border-[#2E2E28]">
              <span className="text-[#89917B]">Just The Ceremony</span>
              <span className="text-[#C9A96E]">────●────</span>
              <span className="font-bold text-[#171713] dark:text-[#F5F0E8]">The Whole Day</span>
            </div>
          </div>
        </div>

        {/* 3 Core Packages Cards (Double-Bezel Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-2 rounded-[2rem] transition-all duration-500 flex flex-col justify-between ${
                pkg.isSignature
                  ? 'bg-[#171713] text-white shadow-2xl scale-[1.02] border-2 border-[#C9A96E]'
                  : 'bg-[#EFE9DF] dark:bg-[#1C1C18] border border-[#E2DBD0] dark:border-[#2E2E28] text-[#171713] dark:text-[#F5F0E8]'
              }`}
            >
              {/* Inner Core */}
              <div className={`p-8 sm:p-9 rounded-[calc(2rem-0.5rem)] flex-1 flex flex-col justify-between ${
                pkg.isSignature
                  ? 'bg-[#171713]'
                  : 'bg-white dark:bg-[#151512]'
              }`}>
                <div>
                  {/* Tier Label & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-sans font-semibold ${
                      pkg.isSignature ? 'text-[#C9A96E]' : 'text-[#89917B]'
                    }`}>
                      {pkg.tier}
                    </span>
                    <span className="text-xs font-sans uppercase tracking-wider text-[#89917B]">
                      {pkg.promo}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-sans uppercase tracking-wider text-[#89917B] mb-4">
                    {pkg.subtitle}
                  </p>

                  <div className="py-3 border-y border-current/10 my-4 flex items-baseline justify-between">
                    <span className="font-serif text-2xl font-normal">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-sans text-current/60">
                      {pkg.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-sans font-light leading-relaxed mb-6 text-current/75">
                    {pkg.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-2.5 mb-8">
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs font-sans text-current/80">
                        <span className="text-[#C9A96E] font-serif">✦</span>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenWizard('Wedding Attendant', pkg.title)}
                  className={`w-full py-4 rounded-full font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 text-center cursor-pointer active:scale-[0.98] ${
                    pkg.isSignature
                      ? 'bg-[#C9A96E] hover:bg-[#B8975D] text-[#171713]'
                      : 'bg-[#171713] hover:bg-[#2A2A24] text-white dark:bg-white dark:text-[#171713]'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Experiences Link */}
        <div className="pt-6 text-center">
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-[#171713] dark:text-[#F5F0E8] hover:text-[#89917B] dark:hover:text-[#C9A96E] transition cursor-pointer"
          >
            <span>View Complete Service Catalog & In-Home Sitting</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}