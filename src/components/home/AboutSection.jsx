import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { IMAGES } from '../../data/imageManifest';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5EFEB] dark:bg-[#262220] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Credibility Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden card-thick border-4 border-white dark:border-[#1C1917] shadow-wedding-lg">
              <img
                src={IMAGES.attendant.src}
                alt="Lacie Kern caring for dogs in Central Ohio"
                className="w-full h-[420px] sm:h-[480px] object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-6 bg-[#8E5B47] text-white p-5 rounded-3xl shadow-wedding-lg text-center min-w-[170px]">
              <span className="text-3xl font-extrabold block leading-tight">14+</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#F7ECE6] block">
                Years of Pet Care
              </span>
            </div>
          </div>

          {/* Right Column: Personal Story & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E5B47] dark:text-[#E8A58B] bg-[#F7ECE6] dark:bg-[#3D2C24] px-3.5 py-1.5 rounded-full inline-block mb-3">
                Meet Your Lead Wedding Attendant
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] tracking-tight">
                "Your pet is family. They deserve to be part of your happiest day."
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#5C534E] dark:text-[#C5BCB6] leading-relaxed">
              <p>
                Hi, I'm <strong>Lacie Kern</strong>, owner of Wags & Whiskers. I've been caring for pets my entire life and have spent the past 14+ years pet sitting for family, friends, and couples throughout Central Ohio.
              </p>
              <p>
                Animals have always been my true calling. When you get married, the last thing you want is the stress of wondering whether your dog got a bathroom break, if they're panting in the heat, or who has to leave the reception early to drive them home.
              </p>
            </div>

            {/* 3 Core Care Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white dark:bg-[#1C1917] p-5 rounded-2xl border-2 border-[#EFE6DD] dark:border-[#3D3733]">
                <span className="text-2xl mb-2 block">🌿</span>
                <h4 className="font-bold text-sm text-[#2B2623] dark:text-[#F5EFEB] mb-1">Gentle & Calming</h4>
                <p className="text-xs text-[#736760] dark:text-[#A89F99] leading-relaxed">
                  Patient trust-building for outgoing and shy or nervous pets alike.
                </p>
              </div>

              <div className="bg-white dark:bg-[#1C1917] p-5 rounded-2xl border-2 border-[#EFE6DD] dark:border-[#3D3733]">
                <span className="text-2xl mb-2 block">💊</span>
                <h4 className="font-bold text-sm text-[#2B2623] dark:text-[#F5EFEB] mb-1">Medication Skilled</h4>
                <p className="text-xs text-[#736760] dark:text-[#A89F99] leading-relaxed">
                  Experienced in administering pills, allergy treats, and strict diets.
                </p>
              </div>

              <div className="bg-white dark:bg-[#1C1917] p-5 rounded-2xl border-2 border-[#EFE6DD] dark:border-[#3D3733]">
                <span className="text-2xl mb-2 block">💃</span>
                <h4 className="font-bold text-sm text-[#2B2623] dark:text-[#F5EFEB] mb-1">Guests Stay on Floor</h4>
                <p className="text-xs text-[#736760] dark:text-[#A89F99] leading-relaxed">
                  No bridal party or family member has to leave early to babysit.
                </p>
              </div>
            </div>

            {/* Interactive Meet CTA */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenWizard('Wedding Attendant', 'Consultation with Lacie')}
                className="px-7 py-3.5 rounded-xl bg-[#8E5B47] hover:bg-[#724534] text-white font-bold text-sm sm:text-base transition shadow-sm active:scale-95 cursor-pointer"
              >
                Schedule a Complimentary Chat
              </button>
              <a
                href={BUSINESS_INFO.social.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-bold text-[#8E5B47] dark:text-[#E8A58B] hover:underline"
              >
                <span>View Facebook Page</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
