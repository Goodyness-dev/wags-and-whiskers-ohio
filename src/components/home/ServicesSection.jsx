import React from 'react';
import { SERVICES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ServicesSection({ onOpenWizard, onViewAllServices }) {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8E5B47] dark:text-[#E8A58B] bg-[#F7ECE6] dark:bg-[#3D2C24] px-3.5 py-1.5 rounded-full inline-block mb-3">
          Custom Wedding Care
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] tracking-tight">
          Wedding Pet Attendant Packages
        </h2>
        <p className="text-base sm:text-lg text-[#5C534E] dark:text-[#C5BCB6] mt-4 leading-relaxed">
          Every wedding is unique. Choose a curated package or customize your day to fit your exact timeline and venue vision.
        </p>

        {/* Promo Ribbon */}
        <div className="mt-6 inline-flex items-center space-x-2 bg-[#EBF2EE] dark:bg-[#203129] border-2 border-[#5B7566]/20 px-5 py-2.5 rounded-2xl text-xs sm:text-sm text-[#2F4F3E] dark:text-[#A7D1BD] font-bold">
          <span>✨</span>
          <span>Special Offer: <strong>$50 OFF</strong> your booking for upcoming brides!</span>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.slice(0, 3).map((pkg, idx) => (
          <article
            key={pkg.id}
            className={`group bg-white dark:bg-[#262220] rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 card-thick-hover ${
              pkg.popular ? 'border-2 border-[#8E5B47] relative ring-2 ring-[#8E5B47]/10' : ''
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3.5 right-6 bg-[#8E5B47] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Most Popular
              </span>
            )}

            <div>
              {/* Category & Duration */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E5B47] dark:text-[#E8A58B] bg-[#F7ECE6] dark:bg-[#3D2C24] px-3 py-1 rounded-md">
                  0{idx + 1} • {pkg.category}
                </span>
                <span className="text-xs font-semibold text-[#736760] dark:text-[#A89F99]">
                  {pkg.duration}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#2B2623] dark:text-[#F5EFEB] group-hover:text-[#8E5B47] dark:group-hover:text-[#E8A58B] transition-colors mb-3">
                {pkg.title}
              </h3>
              <p className="text-[#5C534E] dark:text-[#C5BCB6] text-sm leading-relaxed mb-6">
                {pkg.description}
              </p>

              {/* Inclusions */}
              <div className="space-y-2.5 bg-[#FAF8F5] dark:bg-[#1C1917] p-4 rounded-2xl border border-[#EFE6DD] dark:border-[#3D3733] mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2B2623] dark:text-[#F5EFEB] block mb-2">
                  What's Included:
                </span>
                {pkg.inclusions.map((item, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#473F3A] dark:text-[#D5CDC6]">
                    <svg className="w-4 h-4 text-[#8E5B47] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Ideal For Note */}
              <div className="text-xs text-[#736760] dark:text-[#A89F99] italic mb-6">
                💡 <strong>Best for:</strong> {pkg.idealFor}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenWizard(pkg.category, pkg.title)}
              className="w-full py-3.5 px-5 rounded-xl bg-[#8E5B47] hover:bg-[#724534] text-white text-sm font-bold transition-all flex items-center justify-between shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Reserve Date ($50 OFF)</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </article>
        ))}
      </div>

      {/* Catalog & Custom Inquiry Callout */}
      <div className="mt-14 bg-[#F5EFEB] dark:bg-[#262220] rounded-3xl p-7 sm:p-10 border-2 border-[#EFE6DD] dark:border-[#3D3733] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <h4 className="text-xl sm:text-2xl font-bold text-[#2B2623] dark:text-[#F5EFEB]">
            Need daily in-home pet sitting or a custom wedding timeline?
          </h4>
          <p className="text-sm text-[#5C534E] dark:text-[#C5BCB6] max-w-xl">
            We also provide daily drop-in pet visits across Central Ohio, and custom wedding packages for multiple pets or multi-venue celebrations.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => onOpenWizard('Wedding Attendant', 'Custom Wedding Inquiry')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#8E5B47] hover:bg-[#724534] text-white font-bold text-sm transition shadow-sm active:scale-95 text-center cursor-pointer"
          >
            Custom Wedding Request
          </button>
          <button
            onClick={onViewAllServices}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-[#1C1917] border-2 border-[#EFE6DD] dark:border-[#3D3733] text-[#2B2623] dark:text-[#F5EFEB] font-bold text-sm hover:border-[#8E5B47] transition text-center cursor-pointer"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
