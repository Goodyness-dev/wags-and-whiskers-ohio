import React from 'react';

export default function PersonalityBreak() {
  const items = [
    { word: 'TREATS', note: 'High-value hypoallergenic portrait incentives' },
    { word: 'SQUEAKERS', note: 'Photographer eye-contact magic behind the lens' },
    { word: 'PAW WIPES', note: 'Clean white dress preservation after outdoor lawns' },
    { word: 'FRESH WATER', note: 'Continuous summer hydration & cool-down breaks' },
    { word: 'PATIENCE', note: 'Calm nervous-pet reassurance for timid rescues' },
    { word: 'PERFECT TIMING', note: 'Down the aisle at the exact measure of music' },
    { word: 'AN UNREASONABLE AMOUNT OF LOVE', note: 'Because they are family, plain and simple' },
  ];

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#11110E] text-[#F5F0E8] overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C9A96E] block mb-2">
            // 03 · The Tool Kit
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#F5F0E8]">
            THINGS WE BRING TO YOUR WEDDING
          </h3>
        </div>

        {/* Large Editorial Typographic Words Flow */}
        <div className="space-y-6 sm:space-y-10">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="group flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-6 hover:border-[#C9A96E] transition-colors duration-300"
            >
              <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight group-hover:text-[#C9A96E] group-hover:translate-x-2 transition-all duration-300">
                {item.word}
              </span>
              <span className="text-xs sm:text-sm font-sans font-light text-[#F5F0E8]/60 uppercase tracking-widest mt-2 sm:mt-0">
                {item.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}