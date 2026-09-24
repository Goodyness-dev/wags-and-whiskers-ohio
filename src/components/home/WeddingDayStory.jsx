import React, { useState } from 'react';

export default function WeddingDayStory({ onOpenWizard }) {
  const [activeScene, setActiveScene] = useState(0);

  const scenes = [
    {
      time: '8:30 AM',
      phase: 'Scene 01 — Getting Ready',
      headline: 'SOMEONE HAS A WEDDING TO ATTEND.',
      copy: 'We arrive at the bridal suite, settle them in calmly, handle breakfast, hydration, custom accessories, and burn off pre-wedding jitters.',
      image: '/images/blonde-pup-portrait.jpg',
      tag: 'Pre-Ceremony Prep'
    },
    {
      time: '2:15 PM',
      phase: 'Scene 02 — The Entrance',
      headline: 'TIME TO WALK THE AISLE.',
      copy: 'We handle timing, leash control, ring bearer positioning, and reassuring guidance so your pup walks the aisle without a single distraction or jump.',
      image: '/images/white-doodle-lawn.jpg',
      tag: 'The Vows'
    },
    {
      time: '3:00 PM',
      phase: 'Scene 03 — Portraits',
      headline: 'PICTURE PERFECT.',
      copy: 'Standing right behind your photographer with sound makers, squeakers, and high-value treats to create joyful, camera-focused smiles.',
      image: '/images/smiling-heeler.jpg',
      tag: 'Formal Portraits'
    },
    {
      time: '4:30 PM',
      phase: 'Scene 04 — Cocktail Hour',
      headline: 'PARTY TIME.',
      copy: 'Supervised lawn mingling, guest hugs, hydration, and clean paws so your friends get to celebrate your pet without messy dresses.',
      image: '/images/happy-schnauzer.jpg',
      tag: 'Social Hour'
    },
    {
      time: '6:30 PM',
      phase: 'Scene 05 — Safe Ride Home',
      headline: 'YOUR GUESTS KEEP CELEBRATING.',
      copy: 'Chauffeured pet taxi ride in a climate-controlled vehicle directly to your home or hotel room while your family stays on the dance floor.',
      image: '/images/black-retriever-home.jpg',
      tag: 'Chauffeured Taxi'
    },
    {
      time: '8:00 PM',
      phase: 'Scene 06 — Goodnight',
      headline: 'HOME SAFE & SOUND.',
      copy: 'Dinner served, bedtime walk, scheduled medication administered, and photo confirmation sent to your phone while you dance.',
      image: '/images/white-lab-relaxing.jpg',
      tag: 'Bedtime Routine'
    }
  ];

  return (
    <section id="story" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#171713] text-[#F5F0E8] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C9A96E] block mb-2">
              // 02 · The Chronological Narrative
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight">
              YOUR DOG'S <br />
              <span className="italic text-[#C9A96E]">BIG DAY.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-sans font-light max-w-md leading-relaxed">
            Every moment choreographed from morning prep to bedtime tuck-in. See how we care for your four-legged guest of honor across the entire wedding day timeline.
          </p>
        </div>

        {/* Chronological Story Line Grid */}
        <div className="space-y-16 sm:space-y-24">
          {scenes.map((scene, idx) => (
            <div 
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Frame with Double-Bezel */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="p-2 bg-white/5 border border-white/10 rounded-[2rem] group">
                  <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-4/3 sm:aspect-16/10 relative">
                    <img
                      src={scene.image}
                      alt={scene.headline}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-sans uppercase tracking-[0.2em] text-[#C9A96E]">
                      {scene.time}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Narrative */}
              <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center space-x-3 text-xs font-sans tracking-[0.2em] uppercase text-[#89917B]">
                  <span>{scene.phase}</span>
                  <span>·</span>
                  <span className="text-[#C9A96E]">{scene.tag}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                  {scene.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#F5F0E8]/75 font-sans font-light leading-relaxed max-w-lg">
                  {scene.copy}
                </p>

                <div className="pt-2">
                  <div className="h-[1px] w-24 bg-[#C9A96E]/40" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Climax Statement & Action */}
        <div className="mt-24 sm:mt-32 pt-16 border-t border-white/10 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#C9A96E]">
            The Core Value
          </span>
          <h3 className="font-serif text-4xl sm:text-6xl font-normal leading-tight">
            YOU NEVER HAD TO <br />
            <span className="italic text-[#C9A96E]">LEAVE THE PARTY.</span>
          </h3>
          <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-sans font-light leading-relaxed max-w-xl mx-auto">
            No parents stuck driving, no bridesmaids managing leashes, no leaving before the sparkler send-off. Your pet is asleep at home, and you're dancing with everyone you love.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenWizard('Wedding Attendant', 'Timeline Inquiry')}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#F5F0E8] hover:bg-white text-[#171713] text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              <span>Check Your Wedding Date →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}