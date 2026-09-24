import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function LocationHoursSection({ onOpenWizard }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [searchZip, setSearchZip] = useState('');
  const [zipResult, setZipResult] = useState(null);

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

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF8F5] dark:bg-[#1C1917] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Step-by-Step Flow: How Wedding Care Works */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E5B47] dark:text-[#E8A58B] bg-[#F7ECE6] dark:bg-[#3D2C24] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] tracking-tight">
            How Wedding Day Care Works
          </h2>
          <p className="text-[#5C534E] dark:text-[#C5BCB6] mt-3 text-base sm:text-lg">
            We make including your pet the easiest part of your wedding planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-[#262220] p-8 rounded-3xl border-2 border-[#EFE6DD] dark:border-[#3D3733] card-thick">
            <span className="w-12 h-12 rounded-2xl bg-[#F7ECE6] dark:bg-[#3D2C24] text-[#8E5B47] dark:text-[#E8A58B] font-extrabold text-lg flex items-center justify-center mb-6">
              01
            </span>
            <h3 className="text-xl font-bold text-[#2B2623] dark:text-[#F5EFEB] mb-2">
              Reserve Date & Timeline Chat
            </h3>
            <p className="text-sm text-[#5C534E] dark:text-[#C5BCB6] leading-relaxed">
              Tell Lacie your wedding date, venue, and pet routine. We map out arrival times, photo schedules, and lock in your $50 OFF promo.
            </p>
          </div>

          <div className="bg-white dark:bg-[#262220] p-8 rounded-3xl border-2 border-[#EFE6DD] dark:border-[#3D3733] card-thick">
            <span className="w-12 h-12 rounded-2xl bg-[#EBF2EE] dark:bg-[#203129] text-[#5B7566] dark:text-[#A7D1BD] font-extrabold text-lg flex items-center justify-center mb-6">
              02
            </span>
            <h3 className="text-xl font-bold text-[#2B2623] dark:text-[#F5EFEB] mb-2">
              Ceremony & Photo Management
            </h3>
            <p className="text-sm text-[#5C534E] dark:text-[#C5BCB6] leading-relaxed">
              Lacie arrives to dress your pet, manage walks, escort them down the aisle, and assist your photographer for flawless, smiling portraits.
            </p>
          </div>

          <div className="bg-white dark:bg-[#262220] p-8 rounded-3xl border-2 border-[#EFE6DD] dark:border-[#3D3733] card-thick">
            <span className="w-12 h-12 rounded-2xl bg-[#F7ECE6] dark:bg-[#3D2C24] text-[#8E5B47] dark:text-[#E8A58B] font-extrabold text-lg flex items-center justify-center mb-6">
              03
            </span>
            <h3 className="text-xl font-bold text-[#2B2623] dark:text-[#F5EFEB] mb-2">
              Safe Ride Home & Tuck-In
            </h3>
            <p className="text-sm text-[#5C534E] dark:text-[#C5BCB6] leading-relaxed">
              Your pup is chauffeured home, fed, given medication, and tucked into bed with photo confirmation so you can party all night worry-free.
            </p>
          </div>
        </div>

        {/* Coverage & Interactive Venue Checker */}
        <div className="bg-[#F5EFEB] dark:bg-[#262220] rounded-3xl p-8 sm:p-12 border-2 border-[#EFE6DD] dark:border-[#3D3733] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B7566] dark:text-[#A7D1BD]">
              Venue & Service Area
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB]">
              Serving Central Ohio & Beyond
            </h3>
            <p className="text-sm sm:text-base text-[#5C534E] dark:text-[#C5BCB6] leading-relaxed">
              Primary service hub includes Columbus, Dublin, Powell, New Albany, Westerville, Upper Arlington, Delaware, and surrounding venues. We also travel to destination venues throughout Ohio!
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {BUSINESS_INFO.location.cities.map((city) => (
                <span
                  key={city}
                  className="text-xs font-semibold bg-white dark:bg-[#1C1917] px-3 py-1 rounded-full text-[#473F3A] dark:text-[#D5CDC6] border border-[#EFE6DD] dark:border-[#3D3733]"
                >
                  {city}
                </span>
              ))}
              <span className="text-xs font-bold text-[#8E5B47] dark:text-[#E8A58B] bg-[#F7ECE6] dark:bg-[#3D2C24] px-3 py-1 rounded-full">
                + Statewide Travel
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-[#1C1917] p-6 rounded-2xl border-2 border-[#EFE6DD] dark:border-[#3D3733]">
            <h4 className="font-bold text-base text-[#2B2623] dark:text-[#F5EFEB] mb-2">
              Check Your Venue Location
            </h4>
            <p className="text-xs text-[#736760] dark:text-[#A89F99] mb-4">
              Enter your venue city or ZIP code to confirm coverage:
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
                className="w-full py-2.5 rounded-xl bg-[#8E5B47] hover:bg-[#724534] text-white font-bold text-xs transition shadow-sm cursor-pointer"
              >
                Verify Venue Coverage
              </button>
            </form>

            {zipResult && (
              <div className="mt-3 p-3 rounded-xl bg-[#EBF2EE] dark:bg-[#203129] text-[#2F4F3E] dark:text-[#A7D1BD] text-xs font-medium leading-relaxed">
                {zipResult.message}
              </div>
            )}
          </div>
        </div>

        {/* Bride FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E5B47] dark:text-[#E8A58B]">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] mt-1">
              Everything Brides Ask Us
            </h3>
          </div>

          <div className="space-y-3">
            {BUSINESS_INFO.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#262220] rounded-2xl border-2 border-[#EFE6DD] dark:border-[#3D3733] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full p-5 text-left font-bold text-base text-[#2B2623] dark:text-[#F5EFEB] flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#8E5B47] dark:text-[#E8A58B] text-xl font-mono ml-4">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-[#5C534E] dark:text-[#C5BCB6] leading-relaxed border-t border-[#EFE6DD] dark:border-[#3D3733] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final Conversion Callout */}
        <div className="bg-[#8E5B47] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-wedding-lg">
          <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3.5 py-1.5 rounded-full inline-block">
            Limited Availability
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Reserve Your Wedding Date & Save $50
          </h3>
          <p className="text-[#F7ECE6] text-sm sm:text-base max-w-xl mx-auto">
            Popular wedding weekends in Ohio fill months in advance. Reach out today to lock in your date with Lacie.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenWizard('Wedding Attendant', '$50 OFF Special')}
              className="px-8 py-4 rounded-xl bg-white text-[#8E5B47] hover:bg-[#FAF8F5] font-bold text-base transition shadow-md active:scale-95 cursor-pointer"
            >
              Check Date Availability Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
