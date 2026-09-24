import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  const reviews = [
    {
      id: 1,
      author: "Brianna & Tyler M.",
      location: "Wedding in Dublin, OH",
      pet: "Golden Retriever (Winston)",
      role: "Bride & Groom",
      text: "Hiring Lacie was hands down the best vendor decision we made. Winston walked down the aisle with our ring bearer, looked directly at the camera with her squeakers, and she had him tucked in safely at home before dinner. Zero stress!",
      date: "August 2026"
    },
    {
      id: 2,
      author: "Jessica & Cole R.",
      location: "Wedding in New Albany, OH",
      pet: "Rescue Beagle Mix (Penny)",
      role: "Bride",
      text: "Penny is super shy around loud noise. Lacie came early to bond with her, kept her comfortable away from the speakers, and administered her evening eye drops right on schedule. The photo of Penny with my bridal bouquet is my favorite photo of the entire wedding.",
      date: "August 2026"
    },
    {
      id: 3,
      author: "Megan & David S.",
      location: "Wedding in Westerville, OH",
      pet: "Australian Shepherd (Milo)",
      role: "Bride & Groom",
      text: "Our families were so grateful they didn't have to leave the reception early to take Milo home. Lacie handled the ceremony walk, cocktail hour greetings without a single dress jump, and drove him home safely. Total lifesaver!",
      date: "July 2026"
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F5EFEB] dark:bg-[#262220] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-[#F7ECE6] dark:bg-[#3D2C24] px-4 py-1.5 rounded-full text-xs font-bold text-[#8E5B47] dark:text-[#E8A58B] mb-3">
            <span>💍</span>
            <span>Ohio Wedding Couples & Vendors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] tracking-tight">
            Loved by Central Ohio Couples
          </h2>
          <p className="text-base sm:text-lg text-[#5C534E] dark:text-[#C5BCB6] mt-4 leading-relaxed">
            Real feedback from brides and grooms who included their furry family members without missing a single moment of celebration.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-[#1C1917] p-8 rounded-3xl border-2 border-[#EFE6DD] dark:border-[#3D3733] flex flex-col justify-between card-thick-hover"
            >
              <div>
                {/* Proof Stars */}
                <div className="flex items-center space-x-1 text-[#8E5B47] dark:text-[#E8A58B] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#473F3A] dark:text-[#D5CDC6] text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE6DD] dark:border-[#3D3733]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#2B2623] dark:text-[#F5EFEB]">
                      {rev.author}
                    </h4>
                    <span className="text-xs text-[#736760] dark:text-[#A89F99] block">
                      {rev.location} • {rev.pet}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8E5B47] dark:text-[#E8A58B]">
                    {rev.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Outbound Link */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.social.facebookPage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#8E5B47] dark:text-[#E8A58B] hover:underline bg-white dark:bg-[#1C1917] px-6 py-3 rounded-2xl border border-[#EFE6DD] dark:border-[#3D3733] shadow-xs"
          >
            <span>Connect with Lacie on Facebook</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
