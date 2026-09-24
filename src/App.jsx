import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import EditorialStatement from './components/home/EditorialStatement';
import WeddingDayStory from './components/home/WeddingDayStory';
import MeetLacie from './components/home/MeetLacie';
import PersonalityBreak from './components/home/PersonalityBreak';
import ServicesSection from './components/home/ServicesSection';
import WhyAttendantComparison from './components/home/WhyAttendantComparison';
import SocialProofStrip from './components/home/SocialProofStrip';
import AmenitiesSection from './components/home/AmenitiesSection';
import ReviewsSection from './components/home/ReviewsSection';
import LocationHoursSection from './components/home/LocationHoursSection';
import Footer from './components/layout/Footer';
import AllServicesPage from './components/services/AllServicesPage';
import QuoteWizardModal from './components/wizard/QuoteWizardModal';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';
import { BUSINESS_INFO } from './data/businessData';
import { authApi, getStoredToken } from './services/api';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'services' | 'admin'
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardCategory, setWizardCategory] = useState(null);
  const [wizardService, setWizardService] = useState(null);

  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('wags_theme');
      if (saved) return saved === 'dark';
      return false; // Default to warm ivory editorial palette
    } catch {
      return false;
    }
  });

  // Check stored auth token on mount
  useEffect(() => {
    const token = getStoredToken();
    if (token) {
      authApi.verify()
        .then(res => {
          if (res.authenticated) {
            setIsAdminAuthenticated(true);
            setAdminUser(res.user);
          }
        })
        .catch(() => {
          setIsAdminAuthenticated(false);
        });
    }
  }, []);

  // Apply dark class to <html> and <body>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode || currentPage === 'admin') {
      root.classList.add('dark');
      document.body.classList.add('dark');
      if (currentPage !== 'admin') {
        localStorage.setItem('wags_theme', 'dark');
      }
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('wags_theme', 'light');
    }
  }, [darkMode, currentPage]);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
      return next;
    });
  };

  // Sync with browser URL hash for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/admin' || hash === '#admin') {
        setCurrentPage('admin');
      } else if (hash === '#/services' || hash === '#services-all') {
        setCurrentPage('services');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'services') {
      window.location.hash = '#/services';
    } else if (page === 'admin') {
      window.location.hash = '#/admin';
    } else {
      if (window.location.hash.startsWith('#/services') || window.location.hash.startsWith('#/admin')) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWizard = (category = null, service = null) => {
    setWizardCategory(category);
    setWizardService(service);
    setWizardOpen(true);
  };

  const handleCloseWizard = () => {
    setWizardOpen(false);
    setWizardCategory(null);
    setWizardService(null);
  };

  // If on Admin route, render full-screen Admin portal
  if (currentPage === 'admin') {
    return isAdminAuthenticated ? (
      <AdminLayout
        user={adminUser}
        onLogout={() => {
          setIsAdminAuthenticated(false);
          setAdminUser(null);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    ) : (
      <AdminLogin
        onLoginSuccess={(user) => {
          setIsAdminAuthenticated(true);
          setAdminUser(user);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#11110E] text-[#F5F0E8]' : 'bg-[#F5F0E8] text-[#171713]'} flex flex-col font-sans transition-colors duration-300`}>
      {/* Global Minimalist Editorial Navigation */}
      <Navbar 
        onOpenWizard={() => handleOpenWizard()} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main View: Landing Page OR All Services Page */}
      <main className="flex-grow">
        {currentPage === 'services' ? (
          <AllServicesPage 
            onOpenWizard={handleOpenWizard}
            onBackToHome={() => handleNavigate('home')}
          />
        ) : (
          <>
            {/* 01. Cinematic Editorial Hero */}
            <Hero onOpenWizard={handleOpenWizard} />

            {/* 02. "THEY'RE FAMILY" Editorial Statement */}
            <EditorialStatement />

            {/* 03. "YOUR DOG'S BIG DAY" Chronological Wedding Narrative */}
            <WeddingDayStory onOpenWizard={handleOpenWizard} />

            {/* 04. Meet Lacie Kern Section */}
            <MeetLacie onOpenWizard={handleOpenWizard} />

            {/* 05. Personality Typography Break (Full Black Section) */}
            <PersonalityBreak />

            {/* 06. 3 Curated Primary Experiences */}
            <ServicesSection 
              onOpenWizard={handleOpenWizard}
              onViewAllServices={() => handleNavigate('services')}
            />

            {/* 07. "Why Hire A Pet Attendant" Split Screen */}
            <WhyAttendantComparison onOpenWizard={handleOpenWizard} />

            {/* 08. Social Proof Credibility Strip */}
            <SocialProofStrip />

            {/* 09. Editorial Gallery Collage */}
            <AmenitiesSection />

            {/* 10. Couple Reviews Magazine Spreads */}
            <ReviewsSection onOpenWizard={handleOpenWizard} />

            {/* 11. Availability Lead Bar + Journal + FAQ + Service Area */}
            <LocationHoursSection onOpenWizard={handleOpenWizard} />
          </>
        )}
      </main>

      {/* Global Dramatic Editorial Footer */}
      <Footer 
        onOpenWizard={() => handleOpenWizard()} 
        onNavigate={handleNavigate}
      />

      {/* Wedding Booking Wizard Modal */}
      <QuoteWizardModal
        isOpen={wizardOpen}
        onClose={handleCloseWizard}
        initialCategory={wizardCategory}
        initialService={wizardService}
      />

      {/* Sticky Mobile Bottom Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-30 sm:hidden ${darkMode ? 'bg-[#11110E]/95 border-white/10' : 'bg-[#F5F0E8]/95 border-[#E6E0D4]'} backdrop-blur-md border-t p-2.5 flex items-center gap-2.5 shadow-lg`}>
        <a
          href={BUSINESS_INFO.social.facebookPage}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 py-3 px-3.5 rounded-full ${darkMode ? 'bg-[#191915] text-[#F5F0E8] border-white/10' : 'bg-white text-[#171713] border-[#E6E0D4]'} font-sans text-xs tracking-wider uppercase flex items-center justify-center space-x-1.5 border active:scale-95 transition shadow-xs`}
        >
          <span>Message Lacie</span>
        </a>
        <button
          onClick={() => handleOpenWizard()}
          className="flex-1 py-3 px-3.5 rounded-full bg-[#171713] hover:bg-[#2A2A24] dark:bg-white dark:hover:bg-[#EFE9DF] text-white dark:text-[#171713] font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition cursor-pointer"
        >
          <span>Check My Date →</span>
        </button>
      </div>
    </div>
  );
}