import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  const reviews = [
    {
      couple: 'SARAH + MURPHY',
      venue: 'THE ESTATE AT NEW ALBANY',
      role: 'Golden Retriever Ring Bearer Dog',
      quote: 'Having Lacie there was genuinely one of the best decisions we made for our wedding. Our Golden Retriever Murphy walked down the aisle perfectly, posed like a model for portraits, and was tucked in asleep at our home before dinner was served.',
      image: '/images/bride-dog-portrait.jpg',
      date: 'Spring 2026 Celebration'
    },
    {
      couple: 'EMILY & JORDAN + BAILEY',
      venue: 'FRANKLIN PARK CONSERVATORY',
      role: 'Rescue Pup Cocktail Greeter',
      quote: 'We couldn’t imagine getting married without Bailey, but didn’t want our bridesmaids or parents stuck babysitting. Lacie was calm, loving, and completely in control. 10/10 recommend to every Central Ohio bride.',
      image: '/images/wedding-dog-centerpiece.jpg',
      date: 'Garden Conservatory Ceremony'
    }
  ];

  return (
    <section id="reviews" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#171713] text-[#F5F0E8] transition-colors">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C9A96E] block mb-2">
              // 07 · Wedding Memories & Words
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-tight">
              FROM COUPLES WHO <br />
              <span className="italic text-[#C9A96E]">BROUGHT THEIR BEST FRIEND.</span>
            </h2>
          </div>
          <a
            href={BUSINESS_INFO.social.vendorGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] hover:underline"
          >
            Verified on Ohio Wedding Vendors Group ↗
          </a>
        </div>

        {/* Full Editorial Spreads (1 Review per Layout Row) */}
        <div className="space-y-24 sm:space-y-36">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Photo Frame (Double-Bezel) */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="p-2 bg-white/5 border border-white/10 rounded-[2rem] group">
                  <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-4/5">
                    <img
                      src={rev.image}
                      alt={rev.couple}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Editorial Quote Spread */}
              <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center space-x-3 text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E]">
                  <span>{rev.couple}</span>
                  <span>·</span>
                  <span className="text-[#89917B]">{rev.venue}</span>
                </div>

                {/* 5 Delicate Stars */}
                <div className="flex items-center space-x-1.5 text-[#C9A96E] text-xs">
                  <span>★★★★★</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50 ml-2">
                    {rev.role}
                  </span>
                </div>

                {/* Large Editorial Quote */}
                <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#F5F0E8] italic">
                  "{rev.quote}"
                </blockquote>

                <div className="pt-2">
                  <span className="text-[11px] font-sans tracking-widest uppercase text-white/40 block">
                    {rev.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}