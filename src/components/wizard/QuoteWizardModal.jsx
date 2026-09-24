import React, { useState, useEffect } from 'react';
import { submitQuoteRequest } from '../../services/quoteService';

export default function QuoteWizardModal({ isOpen, onClose, initialCategory, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venueLocation: '',
    petNamesAndBreed: '',
    petRole: 'Ring Bearer Dog',
    temperament: 'Friendly & Outgoing',
    packageChoice: initialService || 'The Aisle Escort & Formal Portraits',
    notes: '',
    promoApplied: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, packageChoice: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.weddingDate.trim()) {
      setError('Please provide your name, email, and wedding/event date.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.venueLocation || 'Central Ohio',
        petTypesAndCount: `${formData.petNamesAndBreed} (${formData.petRole})`,
        careNeeded: formData.packageChoice,
        dates: formData.weddingDate,
        details: `Temperament: ${formData.temperament}. Notes: ${formData.notes}. Promo: $50 OFF Applied`,
        isFlexible: false
      };

      const result = await submitQuoteRequest(payload);
      setSubmittedData({ ...formData, id: result.id });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or reach out on Facebook!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setSubmittedData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-[#FAF8F5] dark:bg-[#14251E] rounded-3xl max-w-xl w-full border border-[#E2EAE4] dark:border-[#1E382D] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1E3D2F] text-white p-6 sm:p-7 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="text-[11px] uppercase tracking-widest text-[#A7D1BD] font-bold block mb-1">
            Wags & Whiskers • Date Reservation
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Check Your Wedding Date
          </h3>
          <p className="text-xs sm:text-sm text-[#D2E2D7] mt-1">
            Receive a personalized timeline proposal + <strong>$50 OFF</strong> your attendant package.
          </p>
        </div>

        {submitted ? (
          /* Success Receipt Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#E8F0EA] dark:bg-[#1E382D] text-[#1E3D2F] dark:text-[#A7D1BD] mx-auto flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3D2F] dark:text-[#A7D1BD] block mb-1">
                Reservation Request Received!
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#1E3D2F] dark:text-[#E8F0EA]">
                We're So Excited For You, {submittedData.name}!
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6A61] dark:text-[#A7B8AF] mt-2 max-w-md mx-auto leading-relaxed">
                Lacie has received your wedding date inquiry for <strong>{submittedData.weddingDate}</strong>. She will review venue logistics and confirm availability shortly with your $50 discount applied!
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1914] p-5 rounded-2xl border border-[#E2EAE4] dark:border-[#1E382D] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-[#799885]">Package:</span>
                <span className="font-bold text-[#1E3D2F] dark:text-[#E8F0EA]">{submittedData.packageChoice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#799885]">Pet:</span>
                <span className="font-bold text-[#1E3D2F] dark:text-[#E8F0EA]">{submittedData.petNamesAndBreed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#799885]">Promotion:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">$50 OFF Confirmed (SPRING50)</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full max-w-md py-3.5 rounded-full bg-[#1E3D2F] hover:bg-[#152C22] text-white font-semibold text-sm transition shadow-sm cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Form Body */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-semibold">
                {error}
              </div>
            )}

            {/* Names & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                  Bride & Groom / Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah & Michael"
                  className="input-calibrated text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@gmail.com"
                  className="input-calibrated text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(614) 000-0000"
                  className="input-calibrated text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                  Wedding / Event Date *
                </label>
                <input
                  type="text"
                  required
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  placeholder="e.g. October 17, 2026"
                  className="input-calibrated text-xs"
                />
              </div>
            </div>

            {/* Venue Location */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                Venue Name & City (Ohio)
              </label>
              <input
                type="text"
                value={formData.venueLocation}
                onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                placeholder="e.g. The Estate at New Albany or Columbus, OH"
                className="input-calibrated text-xs"
              />
            </div>

            {/* Pet Name & Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                  Pet Name(s) & Breed
                </label>
                <input
                  type="text"
                  value={formData.petNamesAndBreed}
                  onChange={(e) => setFormData({ ...formData, petNamesAndBreed: e.target.value })}
                  placeholder="e.g. Copper, 2 yr Golden Retriever"
                  className="input-calibrated text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                  Role on Wedding Day
                </label>
                <select
                  value={formData.petRole}
                  onChange={(e) => setFormData({ ...formData, petRole: e.target.value })}
                  className="input-calibrated text-xs"
                >
                  <option value="Ring Bearer Dog">Ring Bearer Dog</option>
                  <option value="Flower Pup">Flower Pup</option>
                  <option value="Aisle Escort / Entrance">Aisle Escort / Entrance</option>
                  <option value="Portraits & Cocktail Guest">Portraits & Cocktail Guest</option>
                  <option value="Honorary Family Mascot">Honorary Family Mascot</option>
                </select>
              </div>
            </div>

            {/* Package Selection */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                Preferred Wedding Package
              </label>
              <select
                value={formData.packageChoice}
                onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                className="input-calibrated text-xs"
              >
                <option value="The Aisle Escort & Formal Portraits">The Aisle Escort & Formal Portraits (2.5 – 3 hrs)</option>
                <option value="The First Look & Bridal Suite Companion">The First Look & Bridal Suite Companion (3 – 4 hrs)</option>
                <option value="The Cocktail Hour Socialite & Greeter">The Cocktail Hour Socialite & Greeter (4 – 5 hrs)</option>
                <option value="The Full Day VIP Wedding Experience">The Full Day VIP Wedding Experience (6 – 8 hrs)</option>
                <option value="The Rehearsal & Wedding Weekend">The Rehearsal & Wedding Weekend (2-Day Concierge)</option>
                <option value="Chauffeured Safe Ride Home & Tuck-In">Chauffeured Safe Ride Home & Tuck-In</option>
                <option value="Daily In-Home Pet Sitting & Routine Visits">Daily In-Home Pet Sitting & Routine Visits</option>
              </select>
            </div>

            {/* Temperament & Notes */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#465A4F] dark:text-[#A7B8AF] mb-1">
                Pet Temperament & Special Notes
              </label>
              <textarea
                rows="2"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell Lacie about your pup's personality, excitement level, favorite treats, or medication needs..."
                className="input-calibrated text-xs resize-none"
              />
            </div>

            {/* Promo Badge Note */}
            <div className="p-3 rounded-xl bg-[#E8F0EA] dark:bg-[#1E382D] border border-[#1E3D2F]/20 flex items-center justify-between text-xs">
              <span className="font-bold text-[#1E3D2F] dark:text-[#A7D1BD]">
                🎉 $50 OFF Special Promo Applied
              </span>
              <span className="font-mono font-bold text-[#1E3D2F] dark:text-[#E8F0EA]">
                SPRING50
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-[#1E3D2F] hover:bg-[#152C22] disabled:opacity-60 text-white font-semibold text-sm transition shadow-sm active:scale-95 cursor-pointer text-center"
            >
              {isSubmitting ? 'Checking Availability...' : 'Reserve Date & Claim $50 OFF'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}