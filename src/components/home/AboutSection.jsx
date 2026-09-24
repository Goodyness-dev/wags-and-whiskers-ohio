import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0D1914] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading in Serif matching GreenNest */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] tracking-tight">
            Why Choose Wags & Whiskers?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#799885] dark:text-[#8EAFA0] mt-3 italic">
            From ceremony vows to the evening ride home — we're here for your best friend's comfort, security, and joy.
          </p>
        </div>

        {/* 3-Column Feature Layout with Centerpiece Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (2 Features) */}
          <div className="lg:col-span-4 space-y-10 sm:space-y-14">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-[#E2EAE4] dark:border-[#1E382D] bg-[#F5F7F5] dark:bg-[#14251E] flex items-center justify-center shrink-0 text-[#1E3D2F] dark:text-[#A7D1BD] shadow-xs">
                {/* Leash / Aisle Monoline SVG */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E3D2F] dark:text-[#E8F0EA] mb-1.5">
                  Aisle & Ring Bearer Handling
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6A61] dark:text-[#A7B8AF] leading-relaxed">
                  Expert leash control, styling in floral collars or tuxedos, and gentle guidance down the aisle with zero jumping or distraction.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-[#E2EAE4] dark:border-[#1E382D] bg-[#F5F7F5] dark:bg-[#14251E] flex items-center justify-center shrink-0 text-[#1E3D2F] dark:text-[#A7D1BD] shadow-xs">
                {/* Camera / Treat Focus Monoline SVG */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E3D2F] dark:text-[#E8F0EA] mb-1.5">
                  Stress-Free Photo Assistant
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6A61] dark:text-[#A7B8AF] leading-relaxed">
                  We stand behind your photographer with sound makers and high-value treats to capture picture-perfect eyes and happy smiles.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Centerpiece Portrait (Exact Match to Center Plant in GreenNest) */}
          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <div className="relative group max-w-[340px] sm:max-w-[380px]">
              {/* Soft decorative botanical halo */}
              <div className="absolute inset-0 bg-[#E8F0EA] dark:bg-[#1E382D]/40 rounded-full blur-2xl -z-10 transform scale-95" />
              
              <div className="rounded-3xl overflow-hidden border border-[#E2EAE4] dark:border-[#1E382D] shadow-wedding bg-white dark:bg-[#14251E] p-3">
                <img
                  src="/images/blonde-pup-portrait.jpg"
                  alt="Beloved wedding dog companion in Central Ohio"
                  className="w-full h-[380px] sm:h-[440px] object-cover rounded-2xl group-hover:scale-102 transition duration-500"
                  loading="lazy"
                />
              </div>

              {/* Verified Owner Stamp */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1E3D2F] text-white px-5 py-2 rounded-full text-xs font-medium tracking-wide shadow-md whitespace-nowrap">
                Lacie Kern · 14+ Years Pet Experience
              </div>
            </div>
          </div>

          {/* Right Column (2 Features) */}
          <div className="lg:col-span-4 space-y-10 sm:space-y-14">
            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-[#E2EAE4] dark:border-[#1E382D] bg-[#F5F7F5] dark:bg-[#14251E] flex items-center justify-center shrink-0 text-[#1E3D2F] dark:text-[#A7D1BD] shadow-xs">
                {/* Car / Safe Transit Monoline SVG */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75m0 3.75H8.25m8.25 0H20.25M8.25 7.5V3.75M8.25 7.5H3.75m12.75 0v3.75m-12.75 0V7.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E3D2F] dark:text-[#E8F0EA] mb-1.5">
                  Safe Chauffeured Ride Home
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6A61] dark:text-[#A7B8AF] leading-relaxed">
                  Climate-controlled transport back to your home or hotel. Dinner service, walk, and bedtime tuck-in with photo updates so your guests can party all night.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-[#E2EAE4] dark:border-[#1E382D] bg-[#F5F7F5] dark:bg-[#14251E] flex items-center justify-center shrink-0 text-[#1E3D2F] dark:text-[#A7D1BD] shadow-xs">
                {/* Shield / Health & Meds Monoline SVG */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E3D2F] dark:text-[#E8F0EA] mb-1.5">
                  Veterinary-Calibrated Care
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6A61] dark:text-[#A7B8AF] leading-relaxed">
                  Experienced in administering oral pills, eye drops, strict allergy diets, and summer heat hydration routines across outdoor Ohio venues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Consultation Link */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenWizard('Wedding Attendant', 'Consultation with Lacie')}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#1E3D2F] dark:text-[#A7D1BD] hover:underline cursor-pointer"
          >
            <span>Have questions about your dog's temperament or wedding role? Schedule a complimentary chat</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}