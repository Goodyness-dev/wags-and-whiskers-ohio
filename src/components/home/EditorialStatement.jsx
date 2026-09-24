import React from 'react';

export default function EditorialStatement() {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F5F0E8] dark:bg-[#11110E] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Subtle Micro-Label */}
        <div className="mb-8">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#89917B] dark:text-[#C9A96E]">
            // 01 · The Philosophy
          </span>
        </div>

        {/* Giant Editorial Split Typography with Revealing Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Massive Typography Block */}
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171713] dark:text-[#F5F0E8] font-normal leading-[0.95] tracking-tight">
              <span className="block">THEY'RE FAMILY.</span>
              <span className="block">OF COURSE</span>
              <span className="block italic text-[#89917B] dark:text-[#C9A96E]">THEY'RE COMING.</span>
            </h2>
            <div className="pt-6 max-w-xl">
              <p className="font-sans text-base sm:text-lg text-[#171713]/70 dark:text-[#F5F0E8]/70 leading-relaxed font-light">
                You shouldn't have to choose between having your dog in your wedding photos and wondering who has to leave the reception early to drive them home. We make sure everyone gets to be a guest.
              </p>
            </div>
          </div>

          {/* Editorial Reveal Image with Double Bezel */}
          <div className="lg:col-span-4">
            <div className="card-bezel group">
              <div className="card-bezel-inner p-2 overflow-hidden aspect-3/4">
                <img
                  src="/images/bride-dog-portrait.jpg"
                  alt="Bride and dog quiet moment before ceremony"
                  className="w-full h-full object-cover rounded-[calc(2rem-0.75rem)] group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-3 text-right">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#89917B] dark:text-[#C9A96E]">
                Central Ohio Wedding Memories
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}