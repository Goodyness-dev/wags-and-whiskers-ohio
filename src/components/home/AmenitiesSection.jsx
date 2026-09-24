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
    <section id="amenities" className="py-16 sm:py-24 bg-[#FAF8F5] dark:bg-[#1C1917] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B7566] dark:text-[#A7D1BD] bg-[#EBF2EE] dark:bg-[#203129] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Day-Of Care & Guarantees
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] tracking-tight">
            Wedding Day Peace of Mind
          </h2>
          <p className="text-base sm:text-lg text-[#5C534E] dark:text-[#C5BCB6] mt-4 leading-relaxed">
            Every step of your pet's day is handled with precision, patience, and love so nobody in your family misses a single celebratory moment.
          </p>
        </div>

        {/* 6 Guarantees Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AMENITIES.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#262220] p-7 rounded-3xl border-2 border-[#EFE6DD] dark:border-[#3D3733] hover:border-[#8E5B47] transition-all card-thick-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E5B47] dark:text-[#E8A58B] bg-[#F7ECE6] dark:bg-[#3D2C24] px-3 py-1 rounded-md">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-[#736760] dark:text-[#A89F99]">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2B2623] dark:text-[#F5EFEB] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#5C534E] dark:text-[#C5BCB6] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Wedding Moments Visual Gallery */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8E5B47] dark:text-[#E8A58B]">
                Photo Moments
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2623] dark:text-[#F5EFEB] mt-1">
                How We Make Magic On Wedding Day
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#736760] dark:text-[#A89F99] max-w-md">
              Click any moment below to view the full resolution photograph.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden card-thick border-2 border-[#EFE6DD] dark:border-[#3D3733] hover:border-[#8E5B47] transition-all relative aspect-4/3 sm:aspect-square"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                  <span className="text-xs font-bold tracking-wider text-[#F7ECE6] uppercase block">
                    {item.subtitle}
                  </span>
                  <h4 className="text-base font-bold leading-snug">
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
              className="bg-white dark:bg-[#262220] max-w-3xl w-full rounded-3xl overflow-hidden border-2 border-[#EFE6DD] dark:border-[#3D3733] shadow-2xl relative"
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E5B47] dark:text-[#E8A58B]">
                  {selectedPhoto.subtitle}
                </span>
                <h4 className="text-2xl font-bold text-[#2B2623] dark:text-[#F5EFEB] mt-1">
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
