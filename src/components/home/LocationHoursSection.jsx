import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function LocationHoursSection({ onOpenWizard }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [quickDate, setQuickDate] = useState('');
  const [quickVenue, setQuickVenue] = useState('');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenWizard('Wedding Attendant', `Date: ${quickDate || 'Upcoming Date'} | Venue: ${quickVenue || 'Central Ohio Venue'}`);
  };

  return (
    <section id="journal" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F5F0E8] dark:bg-[#11110E] transition-colors">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Section 21 & 22: Date Availability CTA ("ONE QUESTION") */}
        <div className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-16 lg:p-20 bg-[#171713] text-[#F5F0E8] border border-white/10 shadow-2xl text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C9A96E] block">
              2026 / 2027 Central Ohio Weddings
            </span>

            <h2 className="font-serif text-5xl sm:text-7xl font-normal leading-tight text-[#F5F0E8]">
              ONE QUESTION. <br />
              <span className="italic text-[#C9A96E]">IS YOUR BEST FRIEND COMING?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E8]/75 font-sans font-light max-w-xl mx-auto leading-relaxed">
              Dates in Central Ohio fill 6–12 months in advance. Check Lacie's calendar now to lock in your date and claim your $50 reservation credit.
            </p>

            {/* Large Elegant Inline Lead Bar */}
            <form onSubmit={handleQuickSubmit} className="pt-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                placeholder="Wedding Date (e.g. Oct 2026)"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-[#F5F0E8] placeholder-white/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C9A96E]"
              />
              <input
                type="text"
                value={quickVenue}
                onChange={(e) => setQuickVenue(e.target.value)}
                placeholder="Venue / City"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-[#F5F0E8] placeholder-white/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C9A96E]"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-[#C9A96E] hover:bg-[#B8975D] text-[#171713] font-sans text-xs uppercase tracking-[0.2em] font-semibold transition cursor-pointer shrink-0 shadow-md active:scale-[0.98]"
              >
                Check My Date →
              </button>
            </form>
          </div>
        </div>

        {/* Section 23: Notes From Wedding Days (Journal) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E6E0D4] dark:border-[#2E2E28] gap-6 mb-16">
            <div>
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#89917B] dark:text-[#C9A96E] block mb-2">
                // 08 · Advice & Preparation
              </span>
              <h3 className="font-serif text-4xl sm:text-6xl font-normal leading-tight text-[#171713] dark:text-[#F5F0E8]">
                NOTES FROM <br />
                <span className="italic text-[#89917B] dark:text-[#C9A96E]">WEDDING DAYS.</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#171713]/60 dark:text-[#F5F0E8]/60 font-sans max-w-sm">
              Venue guides, training tips, and logistics insights drawn from 14+ years of professional animal care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BUSINESS_INFO.blogPosts.map((post) => (
              <div 
                key={post.id}
                onClick={() => onOpenWizard('Wedding Attendant', `Inquiry re: ${post.title}`)}
                className="group cursor-pointer space-y-4"
              >
                <div className="aspect-4/3 rounded-2xl overflow-hidden bg-[#EFE9DF] dark:bg-[#1C1C18] border border-[#E2DBD0] dark:border-[#2E2E28]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#89917B] dark:text-[#C9A96E] block">
                    {post.category} · {post.readTime}
                  </span>
                  <h4 className="font-serif text-lg font-normal text-[#171713] dark:text-[#F5F0E8] group-hover:text-[#89917B] transition leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-xs font-sans text-[#171713]/60 dark:text-[#F5F0E8]/60 font-light leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 24: Minimalist Line FAQ (Section 24 in Brief: No boxed accordion cards!) */}
        <div id="faq" className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#89917B] dark:text-[#C9A96E] block mb-2">
              // 09 · Clarifications
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl font-normal text-[#171713] dark:text-[#F5F0E8]">
              FREQUENTLY ASKED
            </h3>
          </div>

          <div className="divide-y divide-[#E6E0D4] dark:divide-[#2E2E28] border-y border-[#E6E0D4] dark:border-[#2E2E28]">
            {BUSINESS_INFO.faqs.map((faq, idx) => (
              <div key={idx} className="py-6 sm:py-8">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group"
                >
                  <div className="flex items-baseline space-x-4">
                    <span className="font-mono text-xs text-[#89917B] dark:text-[#C9A96E]">
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-normal text-[#171713] dark:text-[#F5F0E8] group-hover:text-[#89917B] transition">
                      {faq.q.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-2xl font-serif text-[#89917B] dark:text-[#C9A96E] shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {openFaq === idx && (
                  <div className="mt-4 pl-8 sm:pl-10 pr-6 text-sm sm:text-base font-sans font-light text-[#171713]/70 dark:text-[#F5F0E8]/70 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 25: Service Area (Section 25 in Brief: Simple, elegant list) */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-8 border-t border-[#E6E0D4] dark:border-[#2E2E28]">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#89917B] dark:text-[#C9A96E]">
            Coverage & Travel
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#171713] dark:text-[#F5F0E8]">
            CENTRAL OHIO & BEYOND
          </h3>
          <p className="text-xs sm:text-sm font-sans font-light text-[#171713]/60 dark:text-[#F5F0E8]/60 leading-relaxed">
            Columbus · Dublin · Powell · New Albany · Westerville · Upper Arlington · Worthington · Delaware · Grove City · Gahanna · Pickerington
          </p>
          <div className="inline-block bg-white dark:bg-[#191915] border border-[#E6E0D4] dark:border-[#2E2E28] px-5 py-2 rounded-full text-xs font-sans text-[#89917B] uppercase tracking-wider">
            Statewide Ohio Travel Available for Destination Venues
          </div>
        </div>

      </div>
    </section>
  );
}