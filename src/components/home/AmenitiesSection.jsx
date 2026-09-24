import React, { useState } from 'react';

export default function AmenitiesSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      src: '/images/white-doodle-lawn.jpg',
      title: 'The Ceremony Escort',
      caption: 'Joyful doodle poised on the venue lawn, perfectly paced for the wedding processional.',
      span: 'lg:col-span-8 aspect-16/10'
    },
    {
      src: '/images/blonde-pup-portrait.jpg',
      title: 'Pre-Ceremony Pampering',
      caption: 'Clean, brushed, and relaxed on the sunny terrace before wedding-party photos begin.',
      span: 'lg:col-span-4 aspect-4/5'
    },
    {
      src: '/images/happy-schnauzer.jpg',
      title: 'Cocktail Hour Greeter',
      caption: 'Big smiles and calm greetings with wedding guests during the garden cocktail hour.',
      span: 'lg:col-span-4 aspect-square'
    },
    {
      src: '/images/calico-cat-home.jpg',
      title: 'In-Home Whiskers Care',
      caption: 'Fluffy calico receiving loving daily visits, fresh water, and companionship while family celebrates.',
      span: 'lg:col-span-4 aspect-square'
    },
    {
      src: '/images/smiling-heeler.jpg',
      title: 'Portrait Focus Co-Pilot',
      caption: 'Attentive cues, squeakers, and praise creating razor-sharp portraits with the bride & groom.',
      span: 'lg:col-span-4 aspect-square'
    },
    {
      src: '/images/white-lab-relaxing.jpg',
      title: 'Post-Vows Relaxation',
      caption: 'Calm, contented pup resting peacefully after a memorable day standing with family.',
      span: 'lg:col-span-12 aspect-21/9'
    }
  ];

  return (
    <section id="gallery" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F5F0E8] dark:bg-[#11110E] transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header with Embedded Statement Quote */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E6E0D4] dark:border-[#2E2E28] gap-6">
          <div>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#89917B] dark:text-[#C9A96E] block mb-2">
              // 06 · The Visual Archive
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#171713] dark:text-[#F5F0E8]">
              THE BEST <br />
              <span className="italic text-[#89917B] dark:text-[#C9A96E]">WEDDING GUESTS</span> <br />
              HAVE PAWS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#171713]/60 dark:text-[#F5F0E8]/60 font-sans font-light max-w-sm leading-relaxed">
            Real Central Ohio ceremonies, receptions, and quiet candid moments with our attendants. Click any photograph to view the full resolution archive.
          </p>
        </div>

        {/* Asymmetrical Editorial Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(photo)}
              className={`${photo.span} group relative cursor-pointer overflow-hidden rounded-[2rem] bg-[#EFE9DF] dark:bg-[#1C1C18] border border-[#E2DBD0] dark:border-[#2E2E28] shadow-sm`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 filter brightness-[0.96]"
                loading="lazy"
              />
              
              {/* Subtle Editorial Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 sm:p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A96E]">
                  View Photograph ↗
                </span>
                <h4 className="font-serif text-2xl font-normal mt-1">
                  {photo.title}
                </h4>
                <p className="text-xs font-sans text-white/75 mt-1 max-w-md line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-[#171713] text-[#F5F0E8] max-w-4xl w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-black/50 hover:bg-black text-white transition cursor-pointer"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-[#171713] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="font-serif text-2xl font-normal text-[#F5F0E8]">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F5F0E8]/70 mt-1 font-sans font-light">
                    {selectedPhoto.caption}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] shrink-0">
                  Wags & Whiskers Archive
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}