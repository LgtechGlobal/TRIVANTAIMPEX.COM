import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProcessPage } from './pages/ProcessPage';
import { GalleryPage } from './pages/GalleryPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './components/NotFoundPage';

import { COMPANY_CONFIG } from './config/company';
import { Phone, X, Send } from 'lucide-react';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [waMessage, setWaMessage] = useState('Hello! I am interested in your security and facility management services. Could you please provide more information?');

  const handleOpenQuoteModal = (service = null) => {
    setSelectedService(service);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectServiceFromCard = (service) => {
    setSelectedService(service);
    setIsQuoteModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-electric selection:text-white relative flex flex-col justify-between">
        
        {/* Sticky Premium Centered Navigation Bar */}
        <Navbar onRequestQuote={() => handleOpenQuoteModal()} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onRequestQuote={() => handleOpenQuoteModal()}
                  onSelectService={handleSelectServiceFromCard}
                  selectedService={selectedService}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onRequestQuote={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onSelectService={handleSelectServiceFromCard}
                  onRequestQuote={() => handleOpenQuoteModal()}
                />
              }
            />
            <Route
              path="/why-us"
              element={<WhyUsPage onRequestQuote={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/industries"
              element={<IndustriesPage onRequestQuote={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/process"
              element={<ProcessPage onRequestQuote={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onRequestQuote={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/careers"
              element={<CareersPage />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>

        {/* Large Dark Navy Footer */}
        <Footer />

        {/* Interactive Global Quote & Consultation Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          selectedService={selectedService}
        />

        {/* WhatsApp Chat Popup */}
        {whatsappOpen && (
          <div className="fixed bottom-36 right-6 z-50 w-72 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#075E54]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.1 1.514 5.823L.057 23.516a.5.5 0 0 0 .612.612l5.638-1.456A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 0 1-5.002-1.37l-.36-.213-3.724.961.986-3.614-.234-.372A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-none">Trivanta Impex</p>
                  <p className="text-green-200 text-[10px] mt-0.5">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setWhatsappOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat body */}
            <div className="bg-[#ECE5DD] px-4 py-4">
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-sm max-w-[90%]">
                <p className="text-[#303030] text-xs leading-relaxed">
                  👋 Hi! Welcome to Trivanta Impex. How can we help you with security or facility management today?
                </p>
                <p className="text-[#999] text-[10px] text-right mt-1">Trivanta Impex</p>
              </div>
            </div>

            {/* Input area */}
            <div className="bg-[#F0F0F0] px-3 py-3 flex items-end gap-2">
              <textarea
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                rows={2}
                placeholder="Type a message..."
                className="flex-1 resize-none rounded-xl px-3 py-2 text-xs text-[#303030] bg-white border-0 outline-none shadow-sm leading-relaxed"
              />
              <a
                href={`https://wa.me/${COMPANY_CONFIG.contact.primaryPhone.replace(/\D/g, '')}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-md hover:bg-[#20c05a] transition-colors flex-shrink-0"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        )}

        {/* Floating Action Buttons — Bottom Right Column */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
          {/* WhatsApp Button */}
          <button
            onClick={() => setWhatsappOpen(!whatsappOpen)}
            aria-label="Chat on WhatsApp"
            className="w-[52px] h-[52px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_8px_28px_rgba(37,211,102,0.65)] transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.1 1.514 5.823L.057 23.516a.5.5 0 0 0 .612.612l5.638-1.456A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 0 1-5.002-1.37l-.36-.213-3.724.961.986-3.614-.234-.372A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
          </button>

          {/* Call Button */}
          <a
            href={`tel:${COMPANY_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
            aria-label="Call Trivanta Impex"
            className="w-[52px] h-[52px] rounded-full bg-brand-electric flex items-center justify-center shadow-[0_6px_24px_rgba(7,136,255,0.5)] hover:scale-110 hover:shadow-[0_8px_28px_rgba(7,136,255,0.65)] transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-white" />
          </a>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
