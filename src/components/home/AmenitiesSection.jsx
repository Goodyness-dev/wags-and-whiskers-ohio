import React, { useState } from 'react';
import { AMENITIES } from '../../data/amenitiesData';
import { IMAGES } from '../../data/imageManifest';

export default function AmenitiesSection({ onOpenWizard }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    { title: 'The Aisle Escort', subtitle: 'Ring Bearer Dog & Ceremony Entry', img: IMAGES.aisle.src },
    { title: 'Photographer Support', subtitle: 'Squeakers, Treats & Flawless Eye Contact', img: IMAGES.photoAssistant.src },
    { title: 'Cocktail Hour Greeting', subtitle: 'Gentle, Supervised Guest Socializing', img: IMAGES.cocktailHour.src },
    { title: 'Chauffeured Ride Home', subtitle: 'Safe Pet Taxi & Bedtime Tuck-In', img: IMAGES.safeRideHome.src },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F5F7F5] dark:bg-[#08120E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 3: Atmospheric Bento Banner (Exact Match to Section 3 in GreenNest Template) */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#1E3D2F] via-[#162E23] to-[#0E2019] text-white shadow-wedding-lg">
          {/* Subtle botanical backdrop glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#799885]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A7D1BD] bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3">
              Curated Wedding Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Calm, effortless moments for your once-in-a-lifetime day
            </h2>
          </div>

          {/* 2 Translucent Frosted Cards with Plant / Pet Photography (Exact Match to Template) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Bento Card 1 */}
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group hover:bg-white/15 transition duration-300">
              <div className="w-full sm:w-1/2 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7D1BD]">
                  Ceremony Focus
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                  The Ceremony & Cocktail Hour Attendant
                </h3>
                <p className="text-xs text-[#D2E2D7] leading-relaxed">
                  Dedicated 3 to 4-hour escort, guest meet-and-greets, potty breaks, and immediate photo handling.
                </p>
                <button
                  onClick={() => onOpenWizard('Wedding Attendant', 'Ceremony & Cocktail Hour')}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider hover:text-[#A7D1BD] transition pt-2 cursor-pointer"
                >
                  <span>Explore Experience</span>
                  <span>→</span>
                </button>
              </div>
              <div className="w-full sm:w-1/2 rounded-xl overflow-hidden aspect-square border border-white/15">
                <img
                  src="/images/aisle-escort.jpg"
                  alt="Ceremony aisle escort dog"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group hover:bg-white/15 transition duration-300">
              <div className="w-full sm:w-1/2 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7D1BD]">
                  Full Day Care
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                  The Complete Wedding Concierge
                </h3>
                <p className="text-xs text-[#D2E2D7] leading-relaxed">
                  Full 6 to 8-hour day-of companion, rehearsal coordination, evening pet taxi transport, and home tuck-in.
                </p>
                <button
                  onClick={() => onOpenWizard('Wedding Attendant', 'Full Day VIP Attendant')}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider hover:text-[#A7D1BD] transition pt-2 cursor-pointer"
                >
                  <span>Explore Experience</span>
                  <span>→</span>
                </button>
              </div>
              <div className="w-full sm:w-1/2 rounded-xl overflow-hidden aspect-square border border-white/15">
                <img
                  src="/images/golden-retriever-suit.jpg"
                  alt="Full day wedding dog VIP"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6 Guarantees Bento Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA]">
              Wedding Day Peace of Mind
            </h3>
            <p className="text-sm text-[#799885] dark:text-[#8EAFA0] mt-2 italic">
              Every detail is handled with precision, patience, and love so your family misses nothing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#14251E] p-8 rounded-2xl border border-[#E2EAE4] dark:border-[#1E382D] hover:border-[#1E3D2F] dark:hover:border-[#799885] transition-all card-thick-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E3D2F] dark:text-[#A7D1BD] bg-[#E8F0EA] dark:bg-[#1E382D] px-3 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#799885] dark:text-[#8EAFA0]">
                    // 0{idx + 1}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1E3D2F] dark:text-[#E8F0EA] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A6A61] dark:text-[#A7B8AF] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wedding Moments Visual Gallery & Lightbox */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#799885] dark:text-[#8EAFA0]">
                Ohio Wedding Gallery
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] mt-1">
                Real Wedding Moments in Central Ohio
              </h3>
            </div>
            <p className="text-xs text-[#799885] dark:text-[#8EAFA0]">
              Click any photo to enlarge and view real ceremony handling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-[#E2EAE4] dark:border-[#1E382D] hover:border-[#1E3D2F] transition-all relative aspect-4/3 sm:aspect-square bg-white dark:bg-[#14251E]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-medium tracking-wider text-[#D2E2D7] uppercase block">
                    {item.subtitle}
                  </span>
                  <h4 className="font-serif text-base font-bold leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white dark:bg-[#14251E] max-w-3xl w-full rounded-2xl overflow-hidden border border-[#E2EAE4] dark:border-[#1E382D] shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedPhoto.img}
                alt={selectedPhoto.title}
                className="w-full max-h-[65vh] object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#799885] dark:text-[#8EAFA0]">
                  {selectedPhoto.subtitle}
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA] mt-1">
                  {selectedPhoto.title}
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}