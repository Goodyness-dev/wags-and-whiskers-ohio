/**
 * Services and Wedding Packages for Wags and Whiskers
 */

export const SERVICES = [
  {
    id: 'ceremony-and-portraits',
    title: 'The Ceremony & Portraits Package',
    category: 'Wedding Attendant',
    subType: 'Aisle & Formal Photos',
    duration: '2.5 – 3 Hours on Venue Site',
    description: 'Our most requested wedding service. Your pup gets dressed, walks down the aisle as your ring bearer or honorary attendant, poses for stunning portraits, and is safely transported home.',
    highlight: 'Includes $50 OFF Booking Special',
    popular: true,
    inclusions: [
      'Pre-ceremony styling (floral wreath, bowtie, or tuxedo bandana)',
      'Aisle escort (ring bearer pup, flower dog, or couple escort)',
      'Continuous ceremony supervision, hydration, and potty breaks',
      'Professional photographer assistant (eye contact, squeakers, high-value treats)',
      'Safe, climate-controlled ride home or to hotel venue',
      'Evening tuck-in with fresh water, food, and photo confirmation'
    ],
    idealFor: 'Couples wanting their dog featured in the vows and family portraits without asking bridal party members to babysit.'
  },
  {
    id: 'full-day-vip-attendant',
    title: 'The Full Wedding Day VIP Experience',
    category: 'Wedding Attendant',
    subType: 'Getting Ready to Cocktail Hour',
    duration: '5 – 6 Hours Comprehensive Venue Care',
    description: 'Complete luxury coverage from morning getting-ready photos to ceremony, portrait sessions, and supervised cocktail hour mingling, concluding with safe pet taxi transport.',
    highlight: 'Complete Hands-Off Luxury',
    popular: true,
    inclusions: [
      'Arrival at bridal suite / groom prep for first look photos',
      'Pre-wedding walk, energy burnout, and calming brush-out',
      'Ceremony escort & rings handling',
      'Cocktail hour meet-and-greets (carefully supervised to prevent jumping)',
      'Extended photo support with bride, groom, and wedding party',
      'Safe ride home + dinner service, evening walk, and bedtime tuck-in',
      'Continuous photo and video updates sent straight to your phone'
    ],
    idealFor: 'Couples who want their pet with them throughout the day from getting ready through cocktail hour.'
  },
  {
    id: 'wedding-weekend-package',
    title: 'The Rehearsal & Wedding Weekend',
    category: 'Wedding Attendant',
    subType: 'Rehearsal Run-Through + Wedding Day',
    duration: '2-Day Extended Wedding Care',
    description: 'Eliminate all pet stress for the entire celebration. We attend your venue rehearsal to practice the aisle walk, provide full wedding day care, and offer next-morning pet sitting.',
    highlight: 'Zero Stress for Out-of-Town Guests',
    popular: false,
    inclusions: [
      'Venue rehearsal walk-through practice with your pet',
      'Full Wedding Day VIP Attendant service on wedding day',
      'Medication administration & custom dietary routines',
      'Overnight or late-night tuck-in visit at your home',
      'Next-morning breakfast visit and walk while you enjoy morning-after brunch',
      'Pet taxi between venue, hotel, and residence'
    ],
    idealFor: 'Couples with destination or weekend weddings whose immediate family and wedding party are all celebrating.'
  },
  {
    id: 'daily-pet-sitting-ohio',
    title: 'Daily In-Home Pet Sitting & Routine Visits',
    category: 'Daily Pet Care',
    subType: 'Central Ohio Drop-In Care',
    duration: '30 to 60 Minute Visits',
    description: 'Loving, attentive in-home visits for dogs and cats across Columbus and surrounding Central Ohio suburbs. 14+ years of trusted care, medication administration, and routines.',
    highlight: '14+ Years Experience',
    popular: false,
    inclusions: [
      'Punctual feeding and fresh water replenishment',
      'Brisk neighborhood dog walk or supervised yard playtime',
      'Medication administration (oral pills, drops, treats as directed)',
      'Litter box maintenance and habitat cleanup',
      'Affectionate companionship and real-time photo updates'
    ],
    idealFor: 'Busy workdays, weekend getaways, and senior pets needing dependable routine care.'
  }
];

export const SERVICE_CATEGORIES = [
  'All Packages',
  'Wedding Attendant',
  'Daily Pet Care'
];
