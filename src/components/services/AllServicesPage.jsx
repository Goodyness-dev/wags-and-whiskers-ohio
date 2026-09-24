import React, { useState, useEffect } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AllServicesPage({ onOpenWizard, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All Packages');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'All Packages' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0D1914] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 pb-28 sm:pb-20 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Navigation & Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E2EAE4] dark:border-[#1E382D] mb-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-[#242826] dark:text-[#E8F0EA] hover:text-[#1E3D2F] bg-white dark:bg-[#14251E] border border-[#E2EAE4] dark:border-[#1E382D] hover:border-[#1E3D2F] px-5 py-2.5 rounded-full text-sm font-medium transition shadow-xs cursor-pointer"
            aria-label="Back to Homepage"
          >
            <svg className="w-4 h-4 text-[#1E3D2F] dark:text-[#A7D1BD]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Home</span>
          </button>

          <div className="flex items-center space-x-3 text-sm">
            <span className="text-[#799885] dark:text-[#8EAFA0] hidden sm:inline">Questions for Lacie?</span>
            <a
              href={BUSINESS_INFO.social.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E3D2F] dark:text-[#A7D1BD] font-bold hover:underline flex items-center space-x-1.5 transition"
            >
              <span>Message on Facebook</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1E3D2F] dark:text-[#A7D1BD] bg-[#E8F0EA] dark:bg-[#1E382D] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Central Ohio • Wedding & Pet Care
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] tracking-tight">
            Complete Wedding & Pet Care Packages
          </h1>
          <p className="text-[#5A6A61] dark:text-[#A7B8AF] mt-4 text-base sm:text-lg leading-relaxed">
            From ceremony vows and photographer handling to chauffeured safe rides home and daily check-ins. All wedding packages include our <strong>$50 OFF</strong> early reservation credit.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1E3D2F] text-white shadow-xs'
                    : 'bg-[#F5F7F5] dark:bg-[#14251E] text-[#5A6A61] dark:text-[#A7B8AF] hover:text-[#1E3D2F] border border-[#E2EAE4] dark:border-[#1E382D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search packages, e.g. aisle, taxi..."
              className="input-calibrated text-xs py-2.5"
            />
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#F5F7F5] dark:bg-[#14251E] rounded-2xl p-6 border border-[#E2EAE4] dark:border-[#1E382D] hover:border-[#1E3D2F] dark:hover:border-[#799885] shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-4/3 mb-4 bg-white dark:bg-[#0D1914]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {service.highlight && (
                    <span className="absolute top-2.5 right-2.5 bg-[#1E3D2F]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {service.highlight}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3D2F] dark:text-[#A7D1BD] bg-[#E8F0EA] dark:bg-[#1E382D] px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-xs text-[#799885] dark:text-[#8EAFA0] font-medium">
                    {service.duration}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1E3D2F] dark:text-[#E8F0EA] mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-[#5A6A61] dark:text-[#A7B8AF] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Inclusions Checklist */}
                {service.inclusions && (
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#E2EAE4] dark:border-[#1E382D]">
                    <span className="text-[11px] font-bold text-[#1E3D2F] dark:text-[#E8F0EA] block uppercase tracking-wider mb-2">
                      Package Includes:
                    </span>
                    {service.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-[#5A6A61] dark:text-[#A7B8AF]">
                        <span className="text-[#1E3D2F] dark:text-[#A7D1BD] font-bold">✓</span>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E2EAE4] dark:border-[#1E382D]">
                <button
                  onClick={() => onOpenWizard(service.category, service.title)}
                  className="w-full py-3 rounded-full bg-[#1E3D2F] hover:bg-[#152C22] text-white text-xs font-semibold tracking-wide transition shadow-xs cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Reserve Date ({service.priceNote || '$50 OFF'})</span>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}