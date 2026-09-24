import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0D1914] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading in Serif matching GreenNest */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] tracking-tight">
            Our Happy Brides & Couples Say It Best
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#799885] dark:text-[#8EAFA0] mt-3 italic">
            Verified reviews from Central Ohio brides and pet parents.
          </p>
        </div>

        {/* 2 Wide Side-by-Side Cards (Exact Match to GreenNest Testimonials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {BUSINESS_INFO.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F5F7F5] dark:bg-[#14251E] rounded-3xl border border-[#E2EAE4] dark:border-[#1E382D] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Left Photo of Bride / Pet Parent */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shrink-0 border border-[#E2EAE4] dark:border-[#1E382D] bg-white dark:bg-[#0D1914]">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Right Review Content */}
              <div className="space-y-3 text-center sm:text-left">
                {/* 5 Gold Stars */}
                <div className="flex items-center justify-center sm:justify-start space-x-1 text-amber-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#465A4F] dark:text-[#C5D8CC] leading-relaxed italic">
                  "{rev.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-1">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#1E3D2F] dark:text-[#E8F0EA]">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-[#799885] dark:text-[#8EAFA0] block font-medium">
                    {rev.role} · {rev.venue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proof Link to Ohio Wedding Couples & Vendors Facebook Group */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.social.vendorGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#1E3D2F] dark:text-[#A7D1BD] hover:underline"
          >
            <span>Verified active vendor on OHIO wedding couples & vendors group</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}