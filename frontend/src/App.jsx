import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { IndustriesSection } from './components/IndustriesSection';
import { SecurityFirstSection } from './components/SecurityFirstSection';
import { WorkingProcess } from './components/WorkingProcess';
import { CareersSection } from './components/CareersSection';
import { RequestQuoteSection } from './components/RequestQuoteSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { NotFoundPage } from './components/NotFoundPage';
import { COMPANY_CONFIG } from './config/company';
import { Phone } from 'lucide-react';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [is404, setIs404] = useState(false);

  const handleOpenQuoteModal = (service) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectServiceFromCard = (service) => {
    setSelectedService(service);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  if (is404) {
    return <NotFoundPage onReturnHome={() => setIs404(false)} />;
  }

  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-electric selection:text-white relative">
      
      {/* Sticky Premium Navigation Bar */}
      <Navbar onRequestQuote={() => handleOpenQuoteModal()} />

      {/* Main Page Layout */}
      <main>
        {/* Cinematic Hero with Autoplay Background Video */}
        <Hero onRequestQuote={() => handleOpenQuoteModal()} />

        {/* Company Highlights Bar directly below Hero */}
        <TrustHighlights />

        {/* About Trivanta Impex */}
        <AboutSection onRequestQuote={() => handleOpenQuoteModal()} />

        {/* What We Do: 6 Service Cards with Modals */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* Why Choose Trivanta Impex (6 Differentiators) */}
        <WhyChooseUs />

        {/* Industries We Serve (8 Dynamic Sectors) */}
        <IndustriesSection />

        {/* Security-First Visual Split Section */}
        <SecurityFirstSection onRequestQuote={() => handleOpenQuoteModal()} />

        {/* Our 4-Step Working Process */}
        <WorkingProcess />

        {/* Careers & Recruitment Form */}
        <CareersSection />

        {/* High-Conversion Request a Quote & Contact Desk */}
        <RequestQuoteSection preselectedService={selectedService} />
      </main>

      {/* Large Dark Navy Footer */}
      <Footer />

      {/* Interactive Global Quote & Consultation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        selectedService={selectedService}
      />

      {/* Floating 24/7 Hotline Badge on Bottom-Left */}
      <aside
        aria-label="Direct Security Operations Hotline"
        className="fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-3 p-2.5 pr-4 rounded-full bg-brand-bgSecondary/90 border border-brand-border/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-brand-cyan transition-all group"
      >
        <div className="w-8 h-8 rounded-full bg-brand-electric/20 border border-brand-cyan/60 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
          <Phone className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">
            24/7 Operations Desk
          </span>
          <a
            href={`tel:${COMPANY_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
            className="text-xs font-extrabold text-white group-hover:text-brand-cyan transition-colors"
          >
            {COMPANY_CONFIG.contact.primaryPhone}
          </a>
        </div>
      </aside>

    </div>
  );
}

export default App;
