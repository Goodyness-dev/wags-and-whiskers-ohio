import React, { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ServicesSection({ onOpenWizard, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All Packages');

  const filteredServices = activeCategory === 'All Packages'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0D1914] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 4: Signature Packages (Exact Match to "Our Favorite Plants" in GreenNest) */}
        <div>
          {/* Centered Heading in Serif */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] tracking-tight">
              Our Signature Wedding Packages
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#799885] dark:text-[#8EAFA0] mt-3 italic">
              Tailored pet attendant packages for every bridal vision — customized for your pet's personality.
            </p>

            {/* Category Filter Pills (Exact Match to Template Tabs) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#1E3D2F] text-white shadow-xs'
                      : 'bg-[#F5F7F5] dark:bg-[#14251E] text-[#5A6A61] dark:text-[#A7B8AF] hover:text-[#1E3D2F] dark:hover:text-[#E8F0EA] border border-[#E2EAE4] dark:border-[#1E382D]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 8-Card Botanical Grid (4 cols on lg, 2 cols on sm) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#F5F7F5] dark:bg-[#14251E] rounded-2xl p-5 border border-[#E2EAE4] dark:border-[#1E382D] hover:border-[#1E3D2F] dark:hover:border-[#799885] shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Framed Image */}
                  <div className="relative rounded-xl overflow-hidden aspect-4/3 mb-4 bg-white dark:bg-[#0D1914]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    {service.highlight && (
                      <span className="absolute top-2.5 right-2.5 bg-[#1E3D2F]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  {/* Title in Serif */}
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E3D2F] dark:text-[#E8F0EA] text-center leading-snug mb-1">
                    {service.title}
                  </h3>

                  {/* Duration / Price Note */}
                  <p className="text-xs text-[#799885] dark:text-[#8EAFA0] text-center font-medium mb-3">
                    {service.priceNote || service.duration}
                  </p>

                  {/* Brief Inclusions / Description */}
                  <p className="text-xs text-[#5A6A61] dark:text-[#A7B8AF] text-center leading-relaxed line-clamp-2 mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Dark Forest Green Action Button */}
                <button
                  onClick={() => onOpenWizard(service.category, service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1E3D2F] hover:bg-[#152C22] text-white text-xs font-semibold tracking-wide transition shadow-xs flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Reserve Package</span>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Centered Outline Button below Grid */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate ? onNavigate('services') : onOpenWizard('Wedding Attendant', 'Custom Package Inquiry')}
              className="px-8 py-3 rounded-full border border-[#1E3D2F] dark:border-[#799885] text-[#1E3D2F] dark:text-[#E8F0EA] hover:bg-[#1E3D2F] hover:text-white dark:hover:bg-[#799885] dark:hover:text-[#0D1914] text-xs sm:text-sm font-semibold tracking-wide transition cursor-pointer"
            >
              Explore Full Package Catalog & Add-ons
            </button>
          </div>
        </div>

        {/* Section 5: Promo Banner (Exact Match to "Spring Into Green - 15% Off..." Banner) */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E2EAE4] dark:border-[#1E382D] bg-[#E8F0EA] dark:bg-[#14251E] shadow-wedding">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-5">
              <div className="inline-flex items-center space-x-2 bg-[#1E3D2F] text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                <span>SPRING SPECIAL</span>
                <span>·</span>
                <span>$50 OFF</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] tracking-tight leading-tight">
                Spring Into Wedding Season — <br className="hidden sm:inline" />
                <span className="italic font-light">$50 Off</span> Any Attendant Package!
              </h3>

              <p className="text-sm sm:text-base text-[#465A4F] dark:text-[#A7B8AF] leading-relaxed max-w-xl">
                Lock in your 2026 or 2027 wedding date with Lacie Kern today. Lock in current rates with zero annual price increases, plus an instant $50 booking voucher for Central Ohio couples.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenWizard('Wedding Attendant', 'Spring $50 OFF Special')}
                  className="px-8 py-3.5 rounded-full bg-[#1E3D2F] hover:bg-[#152C22] text-white font-medium text-sm transition shadow-md cursor-pointer flex items-center space-x-2"
                >
                  <span>Claim Your $50 Credit</span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Photo (5 Cols) */}
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden">
              <img
                src="/images/greenhouse-wedding.jpg"
                alt="Spring into wedding season with Wags and Whiskers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-[#E8F0EA]/30 dark:to-[#14251E]/50 pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}