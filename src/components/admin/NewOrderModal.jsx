import React, { useState } from 'react';
import { X, Plus, Loader2, Check } from './AdminIcons';
import { quotesApi } from '../../services/api';

const PET_TYPES = [
  '1 Dog (Ring Bearer)',
  '1 Dog (Flower Pup)',
  '2 Dogs (Ceremony Escort)',
  'Dog & Cat',
  'Senior Pet',
  'Other / Custom'
];

const PACKAGES = [
  'The Ceremony & Portraits Package',
  'The Full Wedding Day VIP Experience',
  'The Rehearsal & Wedding Weekend',
  'Daily In-Home Pet Sitting',
  'Custom Wedding Timeline'
];

export default function NewOrderModal({ isOpen, onClose, onCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petType: PET_TYPES[0],
    weddingDateAndVenue: '',
    packageChoice: PACKAGES[0],
    details: '',
    promoApplied: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in customer name and email.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.weddingDateAndVenue || 'Central Ohio',
        petTypesAndCount: formData.petType,
        careNeeded: formData.packageChoice,
        dates: formData.weddingDateAndVenue,
        details: formData.details || 'Manually added by attendant',
        isFlexible: false
      };

      await quotesApi.submitPublicQuote(payload);
      if (onCreated) onCreated();
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to create booking.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white dark:bg-[#262220] rounded-3xl max-w-lg w-full border-2 border-[#E2EAE4] dark:border-[#3D3733] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#1E3D2F] text-white p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Add Wedding Booking</h3>
            <p className="text-xs text-[#E8F0EA] mt-0.5">Manually record a client or bridal inquiry</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Couple / Client Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Lauren & Chris"
              className="input-calibrated text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="client@gmail.com"
                className="input-calibrated text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(614) 000-0000"
                className="input-calibrated text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Pet Role & Type
              </label>
              <select
                value={formData.petType}
                onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                className="input-calibrated text-xs"
              >
                {PET_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Package Choice
              </label>
              <select
                value={formData.packageChoice}
                onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                className="input-calibrated text-xs"
              >
                {PACKAGES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Wedding Date & Venue Location
            </label>
            <input
              type="text"
              value={formData.weddingDateAndVenue}
              onChange={(e) => setFormData({ ...formData, weddingDateAndVenue: e.target.value })}
              placeholder="e.g. October 24, 2026 at Brookshire Event Venue"
              className="input-calibrated text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Special Routine / Temperament Notes
            </label>
            <textarea
              rows="2"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Allergy notes, aisle timing, ring carrier details..."
              className="input-calibrated text-xs resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-[#1E3D2F] hover:bg-[#152C22] text-white text-xs font-bold transition shadow-sm cursor-pointer"
            >
              {isSubmitting ? 'Saving...' : 'Create Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
