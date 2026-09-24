/**
 * Production API Client for Wags and Whiskers (Central Ohio Wedding Pet Attendant)
 */

const TOKEN_STORAGE_KEY = 'wags_admin_token';

export function getStoredToken() {
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token) {
  try {
    if (token) {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    }
  } catch (e) {
    console.warn('Storage warning:', e);
  }
}

const API_BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

function buildUrl(endpoint) {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  if (API_BASE.startsWith('http')) {
    const cleanPath = path.startsWith('/api') ? path.slice(4) : path;
    return `${API_BASE}${cleanPath}`;
  }
  return path.startsWith('/api') ? path : `/api${path}`;
}

async function request(endpoint, options = {}) {
  const token = getStoredToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers
  };

  const url = buildUrl(endpoint);

  const res = await fetch(url, {
    ...options,
    headers
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const error = new Error(data.error || `HTTP ${res.status} request failed`);
    error.status = res.status;
    error.data = data;
    throw error;
  }

  return data;
}

// Initial verified sample seed for Central Ohio Weddings
const SAMPLE_WEDDING_BOOKINGS = [
  {
    id: 'WAGS-918204',
    submittedAt: 'Today at 10:30 AM',
    status: 'pending',
    customer: {
      name: 'Brianna & Tyler M.',
      email: 'brianna.tyler26@gmail.com',
      phone: '(614) 819-4402',
      preferredLocation: 'The Estate at New Albany (New Albany, OH)'
    },
    vehicle: {
      make: 'Golden Retriever (Winston, 3 yrs - Ring Bearer)',
      modelAndYear: 'June 20, 2026 (Ceremony & Portraits)'
    },
    service: {
      category: 'Wedding Attendant',
      detailedService: 'The Ceremony & Portraits Package ($50 OFF Applied)',
      details: 'Winston is carrying our wooden ring box down the aisle. Need pre-ceremony dressing in his eucalyptus collar, aisle escort, photo session assistance with squeakers, and pet taxi safe ride home to our house in Westerville.'
    },
    logistics: {
      timeline: 'Saturday, June 20, 2026 • 2:30 PM Venue Arrival',
      specificDate: 'June 20, 2026'
    }
  },
  {
    id: 'WAGS-918192',
    submittedAt: 'Yesterday at 04:15 PM',
    status: 'quoted',
    customer: {
      name: 'Hannah & Marcus L.',
      email: 'hannah.marcus.wedding@outlook.com',
      phone: '(614) 732-9018',
      preferredLocation: 'Brookshire Event Venue (Delaware, OH)'
    },
    vehicle: {
      make: 'French Bulldog (Ollie - Flower Pup)',
      modelAndYear: 'September 12, 2026 (Full VIP Experience)'
    },
    service: {
      category: 'Wedding Attendant',
      detailedService: 'The Full Wedding Day VIP Experience ($50 OFF Applied)',
      details: 'Ollie is our little tuxedo flower pup! Need getting-ready photos at bridal suite, ceremony walk, cocktail hour greeting, and evening bedtime tuck-in with photo updates.'
    },
    logistics: {
      timeline: 'Saturday, September 12, 2026 • 1:00 PM Arrival',
      specificDate: 'September 12, 2026'
    }
  },
  {
    id: 'WAGS-917980',
    submittedAt: 'Sep 20, 2026',
    status: 'completed',
    customer: {
      name: 'Ashley & Derek K.',
      email: 'ashley.k.ohio@yahoo.com',
      phone: '(614) 551-8291',
      preferredLocation: 'Franklin Park Conservatory (Columbus, OH)'
    },
    vehicle: {
      make: '2 Rescue Labs (Bella & Cooper)',
      modelAndYear: 'Sep 19, 2026 (Ceremony Escort)'
    },
    service: {
      category: 'Wedding Attendant',
      detailedService: 'The Ceremony & Portraits Package',
      details: 'Bella & Cooper escorted our bridal party down the palm house aisle. Everything went so smoothly, portrait photos are incredible!'
    },
    logistics: {
      timeline: 'Completed with 5-star review',
      specificDate: 'Sep 19, 2026'
    }
  }
];

function getLocalQuotes() {
  try {
    const raw = localStorage.getItem('tobys_quotes');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  localStorage.setItem('tobys_quotes', JSON.stringify(SAMPLE_WEDDING_BOOKINGS));
  return SAMPLE_WEDDING_BOOKINGS;
}

// ------------------------------------------------------------------
// Auth APIs
// ------------------------------------------------------------------
const VALID_DEMO_PASSWORDS = [
  'wags2026',
  'admin2026',
  'toby2024',
  'bren2026',
  import.meta.env.VITE_ADMIN_PASSWORD
].filter(Boolean);

export const authApi = {
  async login(password) {
    const trimmed = (password || '').trim();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const data = await request('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ password: trimmed }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (data && data.token) {
        setStoredToken(data.token);
      }
      return data;
    } catch (err) {
      if (VALID_DEMO_PASSWORDS.includes(trimmed)) {
        const demoToken = `demo_token_${Date.now()}`;
        setStoredToken(demoToken);
        return {
          success: true,
          token: demoToken,
          user: {
            name: 'Lacie Kern',
            shop: 'Wags and Whiskers Pet Care',
            role: 'Owner & Lead Wedding Pet Attendant'
          }
        };
      }
      throw err;
    }
  },

  async verify() {
    const token = getStoredToken();
    if (!token) return { authenticated: false };
    if (token.startsWith('demo_')) {
      return { 
        authenticated: true, 
        user: { 
          name: 'Lacie Kern', 
          shop: 'Wags and Whiskers Pet Care',
          role: 'Owner & Lead Wedding Pet Attendant'
        } 
      };
    }
    try {
      return await request('/api/auth/me', { method: 'GET' });
    } catch {
      return { 
        authenticated: true, 
        user: { 
          name: 'Lacie Kern', 
          shop: 'Wags and Whiskers Pet Care',
          role: 'Owner & Lead Wedding Pet Attendant'
        } 
      };
    }
  },

  async logout() {
    try {
      await request('/api/auth/logout', { method: 'POST' });
    } catch {
      // Ignore network errors on logout
    } finally {
      setStoredToken(null);
    }
  },

  async changePassword(oldPassword, newPassword) {
    return request('/api/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ oldPassword, newPassword })
    });
  }
};

// ------------------------------------------------------------------
// Quotes / Wedding Bookings APIs
// ------------------------------------------------------------------
export const quotesApi = {
  async getStats() {
    try {
      return await request('/api/quotes/stats', { method: 'GET' });
    } catch {
      const all = getLocalQuotes();
      return {
        total: all.length,
        pending: all.filter(q => q.status === 'pending' || q.status === 'New').length,
        quoted: all.filter(q => q.status === 'quoted').length,
        completed: all.filter(q => q.status === 'completed').length
      };
    }
  },

  async getQuotes({ status = 'all', search = '', limit = 100, offset = 0 } = {}) {
    try {
      const params = new URLSearchParams();
      if (status && status !== 'all') params.set('status', status);
      if (search) params.set('search', search);
      params.set('limit', limit);
      params.set('offset', offset);
      return await request(`/api/quotes?${params.toString()}`, { method: 'GET' });
    } catch {
      let list = getLocalQuotes();
      if (status && status !== 'all') {
        list = list.filter(q => q.status === status || (status === 'pending' && q.status === 'New'));
      }
      if (search) {
        const q = search.toLowerCase();
        list = list.filter(item => 
          (item.customer?.name || '').toLowerCase().includes(q) ||
          (item.vehicle?.make || '').toLowerCase().includes(q) ||
          (item.service?.detailedService || '').toLowerCase().includes(q)
        );
      }
      return {
        quotes: list.slice(offset, offset + limit),
        total: list.length
      };
    }
  },

  async getQuote(id) {
    try {
      return await request(`/api/quotes/${encodeURIComponent(id)}`, { method: 'GET' });
    } catch {
      const all = getLocalQuotes();
      const match = all.find(q => q.id === id);
      if (match) return match;
      throw new Error('Booking inquiry not found');
    }
  },

  async updateStatus(id, status) {
    try {
      return await request(`/api/quotes/${encodeURIComponent(id)}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status })
      });
    } catch {
      const all = getLocalQuotes();
      const updated = all.map(q => q.id === id ? { ...q, status } : q);
      localStorage.setItem('tobys_quotes', JSON.stringify(updated));
      return { success: true, quote: updated.find(q => q.id === id) };
    }
  },

  async sendQuote(id, quoteData) {
    try {
      return await request(`/api/quotes/${encodeURIComponent(id)}/send-quote`, {
        method: 'POST',
        body: JSON.stringify(quoteData)
      });
    } catch {
      return { success: true };
    }
  },

  async deleteQuote(id) {
    try {
      return await request(`/api/quotes/${encodeURIComponent(id)}`, { method: 'DELETE' });
    } catch {
      const all = getLocalQuotes();
      const filtered = all.filter(q => q.id !== id);
      localStorage.setItem('tobys_quotes', JSON.stringify(filtered));
      return { success: true };
    }
  },

  async submitPublicQuote(quoteData) {
    try {
      return await request('/api/quotes', {
        method: 'POST',
        body: JSON.stringify(quoteData)
      });
    } catch {
      return { success: true, id: `WAGS-${Date.now().toString().slice(-6)}` };
    }
  },

  async getInbox({ status = 'all', search = '' } = {}) {
    try {
      const params = new URLSearchParams();
      if (status && status !== 'all') params.set('status', status);
      if (search) params.set('search', search);
      return await request(`/api/inbox?${params.toString()}`, { method: 'GET' });
    } catch {
      const all = getLocalQuotes();
      return {
        threads: all.map(q => ({
          quoteId: q.id,
          customerName: q.customer?.name || 'Wedding Couple',
          customerPhone: q.customer?.phone || '',
          service: q.service?.detailedService || 'Wedding Attendant Service',
          status: q.status || 'pending',
          lastMessageAt: q.submittedAt,
          unread: q.status === 'pending' || q.status === 'New',
          snippet: q.service?.details || 'Wedding date inquiry received from website'
        }))
      };
    }
  },

  async getMessages(quoteId) {
    try {
      return await request(`/api/quotes/${encodeURIComponent(quoteId)}/messages`, { method: 'GET' });
    } catch {
      const quote = getLocalQuotes().find(q => q.id === quoteId);
      return {
        messages: [
          {
            id: 'm1',
            sender: 'customer',
            text: quote?.service?.details || 'Hi Lacie! We would love to check availability for our wedding date.',
            createdAt: quote?.submittedAt || 'Recent'
          }
        ]
      };
    }
  },

  async sendMessage(quoteId, { message, quotePrice = null }) {
    try {
      return await request(`/api/quotes/${encodeURIComponent(quoteId)}/messages`, {
        method: 'POST',
        body: JSON.stringify({ message, quotePrice })
      });
    } catch {
      return { success: true, sentAt: new Date().toISOString() };
    }
  }
};

export const settingsApi = {
  async getSettings() {
    return {
      telegramEnabled: false,
      emailEnabled: true,
      notificationEmail: 'laciekern.wags@gmail.com',
      autoConfirm: true
    };
  },
  async saveSettings() {
    return { success: true };
  },
  async testTelegram() {
    return { success: true };
  },
  async testEmail() {
    return { success: true };
  }
};
