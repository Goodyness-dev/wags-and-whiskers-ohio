import React from 'react';

export default function WhyAttendantComparison({ onOpenWizard }) {
  const withoutPoints = [
    'Your parents or bridesmaids get stuck holding the leash during cocktail hour',
    'A close family member has to leave the reception before dinner to drive the dog home',
    'Groomsmen stressing over potty breaks, messy mud paws, and wedding clothes',
    'No one behind the photographer getting your pup to look at the lens for family portraits',
    'Worrying about summer heat, thirst, or your pet getting overstimulated by wedding music',
  ];

  const withPoints = [
    '100% of your friends, bridal party, and family remain fully present celebrating with you',
    'Dedicated professional caregiver managing leashes, floral collar dressing, and hydration',
    'Aisle escort timed perfectly with ceremony music and zero jumping on guests',
    'Expert squeakers, duck calls, and high-value treats for picture-perfect wedding photography',
    'Air-conditioned safe pet taxi ride home, dinner service, medication, and bedtime tuck-in',
  ];

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#EFE9DF] dark:bg-[#161612] transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#89917B] dark:text-[#C9A96E] block mb-2">
            // 05 · The Wedding Day Difference
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#171713] dark:text-[#F5F0E8] leading-tight">
            WHY HIRE A <br />
            <span className="italic text-[#89917B] dark:text-[#C9A96E]">WEDDING PET ATTENDANT?</span>
          </h2>
        </div>

        {/* Split Screen Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Without an Attendant */}
          <div className="p-8 sm:p-12 rounded-[2rem] bg-white/70 dark:bg-[#1C1C18] border border-[#E2DBD0] dark:border-[#2E2E28] space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DBD0] dark:border-[#2E2E28]">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#89917B]">
                  The Reality
                </span>
                <span className="text-xs font-mono text-red-700 dark:text-red-400">
                  WITHOUT AN ATTENDANT
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#171713] dark:text-[#F5F0E8] mt-6 mb-2">
                Someone you love becomes the dog sitter.
              </h3>
              <p className="text-xs sm:text-sm text-[#171713]/60 dark:text-[#F5F0E8]/60 font-sans leading-relaxed mb-6">
                When you ask a family member or wedding party member to "just keep an eye on the dog," they spend the celebration on duty instead of making memories.
              </p>

              <div className="space-y-3.5">
                {withoutPoints.map((pt, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#171713]/70 dark:text-[#F5F0E8]/70">
                    <span className="text-red-600 dark:text-red-400 text-sm font-bold">✕</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2DBD0] dark:border-[#2E2E28] text-xs font-sans italic text-[#89917B]">
              Missed cocktail hours, wrinkled formal wear, and rushed goodbyes.
            </div>
          </div>

          {/* Right: With Wags & Whiskers */}
          <div className="p-8 sm:p-12 rounded-[2rem] bg-[#171713] text-[#F5F0E8] border-2 border-[#C9A96E] shadow-2xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C9A96E]">
                  The Experience
                </span>
                <span className="text-xs font-mono text-[#C9A96E]">
                  WITH WAGS & WHISKERS
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F0E8] mt-6 mb-2">
                Everyone gets to be a guest.
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F0E8]/70 font-sans leading-relaxed mb-6 font-light">
                Your dog is safe, relaxed, and treated like royalty by a seasoned professional with 14+ years of animal care.
              </p>

              <div className="space-y-3.5">
                {withPoints.map((pt, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#F5F0E8]/85">
                    <span className="text-[#C9A96E] text-sm font-bold">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-sans text-[#C9A96E] uppercase tracking-wider">
                Full Wedding Day Peace of Mind
              </span>
              <button
                onClick={() => onOpenWizard('Wedding Attendant', 'Why Hire An Attendant')}
                className="text-xs font-sans uppercase tracking-[0.2em] text-[#F5F0E8] underline hover:text-[#C9A96E] cursor-pointer"
              >
                Check Date →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}