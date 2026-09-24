import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function LocationHoursSection({ onOpenWizard }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [searchZip, setSearchZip] = useState('');
  const [zipResult, setZipResult] = useState(null);
  const [quickDate, setQuickDate] = useState('');

  const handleZipCheck = (e) => {
    e.preventDefault();
    if (!searchZip.trim()) return;

    const term = searchZip.toLowerCase();
    const isOhioMatch = BUSINESS_INFO.location.cities.some(c => c.toLowerCase().includes(term)) ||
                        ['430', '431', '432', 'columbus', 'dublin', 'powell', 'new albany', 'westerville', 'delaware', 'ohio'].some(k => term.includes(k));

    if (isOhioMatch) {
      setZipResult({
        found: true,
        message: `Great news! ${searchZip.toUpperCase()} is in our primary Central Ohio wedding service zone. Travel is fully included!`
      });
    } else {
      setZipResult({
        found: true,
        message: `We travel across all of Ohio! ${searchZip.toUpperCase()} is accessible with our standard venue travel arrangement.`
      });
    }
  };

  const handleQuickLead = (e) => {
    e.preventDefault();
    onOpenWizard('Wedding Attendant', quickDate ? `Wedding Date: ${quickDate}` : 'Wedding Availability Inquiry');
  };

  return (
    <section id="journal" className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0D1914] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 7: Lead Ingestion Banner (Exact Match to "Get the Green in Your Inbox" in Template) */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center bg-gradient-to-br from-[#1E3D2F] via-[#162E23] to-[#0E2019] text-white shadow-wedding-lg">
          {/* Subtle botanical glow */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <img
              src="/images/botanical-hero-backdrop.jpg"
              alt="Lush botanical backdrop"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A7D1BD] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Check Your 2026 / 2027 Date
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Check Availability for Your Wedding Date
            </h2>
            <p className="text-sm sm:text-base text-[#D2E2D7] font-light max-w-lg mx-auto">
              Enter your wedding date or venue below to check Lacie's calendar and lock in your $50 booking voucher.
            </p>

            {/* Inline Input Bar with Dark Green Button matching Template */}
            <form onSubmit={handleQuickLead} className="pt-4 max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                placeholder="Enter Wedding Date or Venue (e.g. Oct 2026)"
                className="w-full px-5 py-3.5 rounded-full bg-white text-[#242826] placeholder-[#799885] text-sm focus:outline-none focus:ring-2 focus:ring-[#A7D1BD] shadow-inner"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0E2019] hover:bg-black text-white text-sm font-semibold whitespace-nowrap transition shadow-md cursor-pointer border border-white/15"
              >
                Check Date
              </button>
            </form>
          </div>
        </div>

        {/* Section 8: Blog / Wedding Pet Care Journal (Exact Match to "From the GreenVibe Blog") */}
        <div>
          {/* Centered Heading in Serif */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] tracking-tight">
              From the Wedding Pet Care Journal
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#799885] dark:text-[#8EAFA0] mt-3 italic">
              Expert advice, venue guides, and wedding day preparation from 14+ years of pet care.
            </p>
          </div>

          {/* 4 Cards in a Row matching GreenNest Template */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_INFO.blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#F5F7F5] dark:bg-[#14251E] rounded-2xl overflow-hidden border border-[#E2EAE4] dark:border-[#1E382D] hover:border-[#1E3D2F] dark:hover:border-[#799885] shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="aspect-4/3 overflow-hidden bg-white dark:bg-[#0D1914]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3D2F] dark:text-[#A7D1BD] bg-[#E8F0EA] dark:bg-[#1E382D] px-2.5 py-0.5 rounded-full inline-block">
                      {post.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-[#1E3D2F] dark:text-[#E8F0EA] leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-[#5A6A61] dark:text-[#A7B8AF] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read Button */}
                <div className="px-5 pb-5">
                  <button
                    onClick={() => onOpenWizard('Wedding Attendant', `Inquiry re: ${post.title}`)}
                    className="w-full py-2 px-3 rounded-lg bg-[#1E3D2F] hover:bg-[#152C22] text-white text-xs font-semibold tracking-wide transition text-center cursor-pointer"
                  >
                    Read Guide
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenWizard('Wedding Attendant', 'Wedding Planning Questions')}
              className="px-6 py-2.5 rounded-full border border-[#1E3D2F] dark:border-[#799885] text-[#1E3D2F] dark:text-[#E8F0EA] hover:bg-[#1E3D2F] hover:text-white dark:hover:bg-[#799885] dark:hover:text-[#0D1914] text-xs font-semibold tracking-wide transition cursor-pointer"
            >
              Explore More Articles
            </button>
          </div>
        </div>

        {/* Coverage & Interactive Venue Checker */}
        <div id="contact" className="bg-[#E8F0EA] dark:bg-[#14251E] rounded-3xl p-8 sm:p-12 border border-[#E2EAE4] dark:border-[#1E382D] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E3D2F] dark:text-[#A7D1BD]">
              Central Ohio Venues & Travel
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA]">
              Serving Central Ohio & Beyond
            </h3>
            <p className="text-xs sm:text-sm text-[#465A4F] dark:text-[#A7B8AF] leading-relaxed">
              Our core hub covers Columbus, Dublin, Powell, New Albany, Westerville, Upper Arlington, Delaware, and surrounding venues. We also travel to destination estate and farm venues across Ohio!
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {BUSINESS_INFO.location.cities.map((city) => (
                <span
                  key={city}
                  className="text-xs font-medium bg-white dark:bg-[#0D1914] px-3 py-1 rounded-full text-[#242826] dark:text-[#E8F0EA] border border-[#E2EAE4] dark:border-[#1E382D]"
                >
                  {city}
                </span>
              ))}
              <span className="text-xs font-bold text-white bg-[#1E3D2F] px-3 py-1 rounded-full">
                + Statewide Travel
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-[#0D1914] p-6 rounded-2xl border border-[#E2EAE4] dark:border-[#1E382D] shadow-sm">
            <h4 className="font-serif font-bold text-base text-[#1E3D2F] dark:text-[#E8F0EA] mb-1">
              Check Your Venue Location
            </h4>
            <p className="text-xs text-[#799885] dark:text-[#8EAFA0] mb-4">
              Enter your wedding venue city or ZIP code to confirm travel:
            </p>
            <form onSubmit={handleZipCheck} className="space-y-3">
              <input
                type="text"
                value={searchZip}
                onChange={(e) => setSearchZip(e.target.value)}
                placeholder="e.g. Dublin, OH or 43017"
                className="input-calibrated text-xs"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-[#1E3D2F] hover:bg-[#152C22] text-white font-medium text-xs transition shadow-xs cursor-pointer"
              >
                Verify Venue Coverage
              </button>
            </form>

            {zipResult && (
              <div className="mt-3 p-3 rounded-xl bg-[#E8F0EA] dark:bg-[#1E382D] text-[#1E3D2F] dark:text-[#A7D1BD] text-xs font-medium leading-relaxed">
                {zipResult.message}
              </div>
            )}
          </div>
        </div>

        {/* Bride FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#799885] dark:text-[#8EAFA0]">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] mt-1">
              Everything Couples Ask Us
            </h3>
          </div>

          <div className="space-y-3">
            {BUSINESS_INFO.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F5F7F5] dark:bg-[#14251E] rounded-2xl border border-[#E2EAE4] dark:border-[#1E382D] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full p-5 text-left font-serif font-bold text-base text-[#1E3D2F] dark:text-[#E8F0EA] flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#1E3D2F] dark:text-[#A7D1BD] text-lg font-mono ml-4">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#5A6A61] dark:text-[#A7B8AF] leading-relaxed border-t border-[#E2EAE4] dark:border-[#1E382D] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}