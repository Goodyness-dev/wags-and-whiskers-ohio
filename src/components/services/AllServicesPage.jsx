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
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1C1917] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 pb-28 sm:pb-20 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Navigation & Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#EFE6DD] dark:border-[#3D3733] mb-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-[#2B2623] dark:text-[#F5EFEB] hover:text-[#8E5B47] bg-white dark:bg-[#262220] border-2 border-[#EFE6DD] dark:border-[#3D3733] hover:border-[#8E5B47] px-5 py-2.5 rounded-xl text-sm sm:text-base font-bold transition shadow-xs cursor-pointer"
            aria-label="Back to Homepage"
          >
            <svg className="w-5 h-5 text-[#8E5B47]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Home</span>
          </button>

          <div className="flex items-center space-x-3 text-sm sm:text-base">
            <span className="text-[#736760] dark:text-[#A89F99] hidden sm:inline">Questions for Lacie?</span>
            <a
              href={BUSINESS_INFO.social.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E5B47] dark:text-[#E8A58B] font-bold hover:underline flex items-center space-x-1.5 transition"
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E5B47] dark:text-[#E8A58B] bg-[#F7ECE6] dark:bg-[#3D2C24] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Central Ohio • Wedding & Pet Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] tracking-tight">
            Wedding Packages & Services
          </h1>
          <p className="text-[#5C534E] dark:text-[#C5BCB6] mt-4 text-base sm:text-lg leading-relaxed">
            From ceremony aisles and photo sessions to daily drop-in pet visits, Lacie provides loving, attentive care across Central Ohio.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-12 bg-white dark:bg-[#262220] p-4 sm:p-5 rounded-2xl border-2 border-[#EFE6DD] dark:border-[#3D3733] shadow-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#8E5B47] text-white shadow-xs'
                    : 'bg-[#FAF8F5] dark:bg-[#1C1917] text-[#473F3A] dark:text-[#D5CDC6] hover:text-[#8E5B47]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <svg className="w-5 h-5 text-[#A89F99] absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F5] dark:bg-[#1C1917] border-2 border-[#EFE6DD] dark:border-[#3D3733] rounded-xl pl-11 pr-4 py-2.5 text-sm sm:text-base text-[#2B2623] dark:text-[#F5EFEB] placeholder-[#736760] focus:outline-none focus:border-[#8E5B47] transition"
              aria-label="Search wedding services"
            />
          </div>
        </div>

        {/* Count */}
        <div className="flex justify-between items-center text-xs sm:text-sm text-[#736760] dark:text-[#A89F99] mb-6 px-1 font-medium">
          <span>Showing {filteredServices.length} package{filteredServices.length === 1 ? '' : 's'}</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#8E5B47] dark:text-[#E8A58B] underline font-bold cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((pkg, idx) => (
            <article
              key={pkg.id}
              className="group bg-white dark:bg-[#262220] border-2 border-[#EFE6DD] dark:border-[#3D3733] hover:border-[#8E5B47] dark:hover:border-[#8E5B47] rounded-3xl p-7 sm:p-8 transition-all duration-300 card-thick-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E5B47] dark:text-[#E8A58B] bg-[#F7ECE6] dark:bg-[#3D2C24] px-3 py-1 rounded-md">
                    0{idx + 1} • {pkg.category}
                  </span>
                  <span className="text-xs font-semibold text-[#736760] dark:text-[#A89F99]">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#2B2623] dark:text-[#F5EFEB] group-hover:text-[#8E5B47] transition-colors mb-3">
                  {pkg.title}
                </h3>
                <p className="text-[#5C534E] dark:text-[#C5BCB6] text-sm sm:text-base leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Inclusions */}
                <div className="mb-6 space-y-2.5 bg-[#FAF8F5] dark:bg-[#1C1917] p-4 rounded-2xl border border-[#EFE6DD] dark:border-[#3D3733]">
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

                <div className="mb-6 text-xs text-[#736760] dark:text-[#A89F99] italic">
                  💡 <strong>Recommended for:</strong> {pkg.idealFor}
                </div>
              </div>

              <button
                onClick={() => onOpenWizard(pkg.category, pkg.title)}
                className="w-full py-3.5 px-5 rounded-xl bg-[#8E5B47] hover:bg-[#724534] text-white text-sm sm:text-base font-bold transition-all flex items-center justify-between shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Reserve Package ($50 OFF)</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-[#262220] rounded-3xl border-2 border-[#EFE6DD] dark:border-[#3D3733] my-8">
            <p className="text-[#736760] dark:text-[#A89F99] text-base sm:text-lg mb-4">No packages found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Packages'); }}
              className="text-sm sm:text-base text-[#8E5B47] dark:text-[#E8A58B] underline font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Custom Timeline Banner */}
        <div className="mt-16 bg-white dark:bg-[#262220] border-2 border-[#EFE6DD] dark:border-[#3D3733] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-[#2B2623] dark:text-[#F5EFEB]">
              Have multiple pets or an all-day wedding celebration?
            </h4>
            <p className="text-[#5C534E] dark:text-[#C5BCB6] text-sm sm:text-base max-w-xl">
              Lacie customizes care schedules for multi-pet families, out-of-town venues, and complex photography timelines.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenWizard('Wedding Attendant', 'Custom Wedding Timeline')}
              className="px-8 py-3.5 rounded-xl bg-[#8E5B47] hover:bg-[#724534] text-white font-bold text-sm sm:text-base transition shadow-xs active:scale-95 text-center cursor-pointer"
            >
              Request Custom Timeline
            </button>
            <button
              onClick={onBackToHome}
              className="px-6 py-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1917] hover:bg-[#F5EFEB] text-[#2B2623] dark:text-[#F5EFEB] font-bold text-sm sm:text-base transition text-center cursor-pointer border border-[#EFE6DD] dark:border-[#3D3733]"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
