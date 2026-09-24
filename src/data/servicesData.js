/**
 * Services and Wedding Packages for Wags and Whiskers (Central Ohio)
 * Modeled after the 8-card showcase grid in the botanical design template.
 */

export const SERVICES = [
  {
    id: 'ceremony-and-portraits',
    title: 'The Aisle Escort & Formal Portraits',
    category: 'Ceremony & Photos',
    subType: 'Aisle & Formal Photos',
    duration: '2.5 – 3 Hours on Venue Site',
    priceNote: 'From $299 (Save $50)',
    image: '/images/white-doodle-lawn.jpg',
    description: 'Our signature ceremony package. Your pup gets dressed, walks down the aisle as your ring bearer, poses for photos, and is safely transported home.',
    highlight: '$50 OFF Special',
    popular: true,
    inclusions: [
      'Pre-ceremony styling (floral wreath, bowtie, or tuxedo bandana)',
      'Aisle escort (ring bearer pup, flower dog, or couple escort)',
      'Continuous ceremony supervision, hydration, and potty breaks',
      'Photographer assistant (eye contact, squeakers, high-value treats)',
      'Safe, climate-controlled ride home or to hotel venue',
      'Evening tuck-in with fresh water, food, and photo confirmation'
    ],
    idealFor: 'Couples wanting their dog featured in the vows and family portraits without asking bridal party members to babysit.'
  },
  {
    id: 'first-look-companion',
    title: 'The First Look & Bridal Suite Companion',
    category: 'Ceremony & Photos',
    subType: 'Getting Ready & Portraits',
    duration: '3 – 4 Hours Coverage',
    priceNote: 'From $349 (Save $50)',
    image: '/images/blonde-pup-portrait.jpg',
    description: 'Calm morning accompaniment in the bridal suite, first look emotional reveals, family portraits, and post-photo relaxation before guests arrive.',
    highlight: 'Pure Joy & Comfort',
    popular: false,
    inclusions: [
      'Arrival at bridal suite / groom prep location',
      'Calming brush-out, lint roll, and accessory placement',
      'First look photo positioning and leash handling',
      'High-value treat handling for portrait smiles',
      'Immediate quiet space retreat when stimulation gets high'
    ],
    idealFor: 'Brides who want intimate getting-ready morning photos with their pup before ceremony bustle.'
  },
  {
    id: 'cocktail-hour-socialite',
    title: 'The Cocktail Hour Socialite & Greeter',
    category: 'Full Day VIP',
    subType: 'Mingling & Guest Hugs',
    duration: '4 – 5 Hours Coverage',
    priceNote: 'From $420 (Save $50)',
    image: '/images/happy-schnauzer.jpg',
    description: 'Your pup greets wedding guests on the patio during cocktail hour with monitored greeting manners, preventing jumping and keeping formal wear clean.',
    highlight: 'Guest Favorite',
    popular: true,
    inclusions: [
      'Supervised greeting station during cocktail hour',
      'Paw wipe-down and polite greeting reinforcement',
      'Continuous hydration and cool-down breaks',
      'Treat bar coordination for guests wanting to give treats',
      'Chauffeured departure before reception music kicks off'
    ],
    idealFor: 'Social dogs who love mingling with friends and family during outdoor lawn hours.'
  },
  {
    id: 'safe-ride-home-taxi',
    title: 'Chauffeured Safe Ride Home & Tuck-In',
    category: 'Full Day VIP',
    subType: 'Transport & Bedtime',
    duration: '2 – 3 Hours Care & Transit',
    priceNote: 'From $190 (Save $50)',
    image: '/images/black-retriever-home.jpg',
    description: 'Air-conditioned chauffeured pet taxi ride from any Central Ohio venue straight to your home or hotel, with evening dinner, walk, and photo confirmation.',
    highlight: 'Zero Guest Burden',
    popular: false,
    inclusions: [
      'Climate-controlled vehicle secured with pet safety harnesses',
      'Direct transit from venue to your home or hotel room',
      'Dinner service, fresh bowl of cool water, and potty walk',
      'Medication administration if required at bedtime',
      'Relaxation tuck-in with soothing music and photo confirmation text'
    ],
    idealFor: 'Ensuring neither parents nor bridal party members ever have to leave the dance floor early.'
  },
  {
    id: 'full-day-vip-attendant',
    title: 'The Full Day VIP Wedding Experience',
    category: 'Full Day VIP',
    subType: 'Getting Ready to Reception',
    duration: '6 – 8 Hours Comprehensive Care',
    priceNote: 'From $599 (Save $50)',
    image: '/images/hero-dog-shepherd.jpg',
    description: 'Complete luxury wedding companionship from morning preparation through ceremony, formal photos, cocktail hour, and evening tuck-in.',
    highlight: 'All-Inclusive Luxury',
    popular: true,
    inclusions: [
      'Morning arrival for getting-ready candid shots',
      'Pre-ceremony stroll, exercise burnout, and calming brush-out',
      'Aisle escort & ring bearer handling',
      'Cocktail hour meet-and-greets',
      'Chauffeured ride home + dinner service and nighttime tuck-in',
      'Continuous photo and video updates sent to your phone'
    ],
    idealFor: 'Couples who want their pet with them throughout the celebration with 100% peace of mind.'
  },
  {
    id: 'wedding-weekend-package',
    title: 'The Rehearsal & Wedding Weekend',
    category: 'Full Day VIP',
    subType: '2-Day Extended Wedding Care',
    duration: 'Multi-Day Weekend Concierge',
    priceNote: 'Custom Quote Available',
    image: '/images/yorkie-porch-steps.jpg',
    description: 'Complete peace of mind for the entire weekend. We attend rehearsal practice to rehearse the aisle walk, provide full day-of care, and morning-after drop-ins.',
    highlight: 'Weekend Concierge',
    popular: false,
    inclusions: [
      'Venue rehearsal walk-through practice with your pet',
      'Full Wedding Day VIP Attendant service on wedding day',
      'Medication administration & strict dietary schedule',
      'Late-night tuck-in visit at your home or hotel',
      'Next-morning breakfast visit and walk during post-wedding brunch',
      'Full pet taxi transit across all locations'
    ],
    idealFor: 'Couples with weekend celebrations whose immediate family and bridal party are all out-of-town or partying.'
  },
  {
    id: 'photo-assistant-pro',
    title: "The Photographer's Pet Co-Pilot",
    category: 'Ceremony & Photos',
    subType: 'Portrait Focus Specialist',
    duration: '2 – 3 Hours Photo Support',
    priceNote: 'From $250 (Save $50)',
    image: '/images/smiling-heeler.jpg',
    description: 'Dedicated photographic assistance. We stand behind your photographer with sound makers, high-value treats, and gentle positioning for picture-perfect eyes.',
    highlight: 'Picture-Perfect Shots',
    popular: false,
    inclusions: [
      'Coordination with your professional wedding photographer',
      'Variety of sound makers (squeakers, whistles, duck calls)',
      'High-value hypoallergenic treat rewards',
      'Leash tucking and leash removal assistance for photos',
      'Quick paw wipe and coat brushing between shots'
    ],
    idealFor: 'Ensuring your wedding gallery has dozens of joyful, looking-at-the-camera pet moments.'
  },
  {
    id: 'daily-pet-sitting-ohio',
    title: 'Daily In-Home Pet Sitting & Routine Visits',
    category: 'Daily Pet Care',
    subType: 'Central Ohio Drop-In Care',
    duration: '30 to 60 Minute Visits',
    priceNote: 'From $28 / Visit',
    image: '/images/calico-cat-home.jpg',
    description: 'Loving in-home visits for dogs and cats throughout Columbus, Dublin, Powell, New Albany, and Westerville. 14+ years of trusted animal care and medication routine.',
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
  'Ceremony & Photos',
  'Full Day VIP',
  'Daily Pet Care'
];