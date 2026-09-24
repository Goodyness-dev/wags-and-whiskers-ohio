/**
 * Wedding Care Request Service for Wags and Whiskers
 */

import { quotesApi } from './api';

export const formatQuoteSummary = (data) => {
  return {
    submittedAt: new Date().toLocaleString(),
    id: `WAGS-${Date.now().toString().slice(-6)}`,
    status: 'New',
    customer: {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      location: data.location || 'Central Ohio',
    },
    pets: {
      typesAndCount: data.petTypesAndCount || '1 Dog',
      careNeeded: data.careNeeded || 'The Ceremony & Portraits Package',
      details: data.details || 'None provided',
    },
    schedule: {
      dates: data.dates || 'To be discussed',
      isFlexible: data.isFlexible ? 'Dates flexible' : 'Firm wedding date',
      notes: data.notes || '',
    }
  };
};

export const submitQuoteRequest = async (rawData) => {
  const requestSummary = formatQuoteSummary(rawData);

  console.group('%c 🐾 WAGS & WHISKERS — WEDDING RESERVATION INQUIRY RECEIVED! ', 'background: #8E5B47; color: #ffffff; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;');
  console.log('Request Summary:', requestSummary);
  console.log('Raw Form Data:', rawData);
  console.groupEnd();

  try {
    const existing = JSON.parse(localStorage.getItem('wags_requests') || '[]');
    existing.unshift(requestSummary);
    localStorage.setItem('wags_requests', JSON.stringify(existing.slice(0, 50)));

    const legacy = JSON.parse(localStorage.getItem('tobys_quotes') || '[]');
    const adminAdapter = {
      id: requestSummary.id,
      submittedAt: requestSummary.submittedAt,
      status: 'pending',
      customer: {
        name: requestSummary.customer.name,
        email: requestSummary.customer.email,
        phone: requestSummary.customer.phone,
        preferredLocation: requestSummary.customer.location,
      },
      vehicle: {
        make: requestSummary.pets.typesAndCount,
        modelAndYear: requestSummary.schedule.dates,
      },
      service: {
        category: 'Wedding Attendant',
        detailedService: requestSummary.pets.careNeeded,
        details: requestSummary.pets.details,
      },
      logistics: {
        timeline: requestSummary.schedule.isFlexible,
        specificDate: requestSummary.schedule.dates,
      }
    };
    legacy.unshift(adminAdapter);
    localStorage.setItem('tobys_quotes', JSON.stringify(legacy.slice(0, 50)));
  } catch (e) {
    console.warn('Could not save to localStorage', e);
  }

  return { success: true, id: requestSummary.id };
};
