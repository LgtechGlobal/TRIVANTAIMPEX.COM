import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_CONFIG } from '../config/company';
import { Menu, X, ArrowRight, Phone, Shield } from 'lucide-react';

export const Navbar = ({ onRequestQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'services', 'industries', 'careers', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 pt-2 transition-all duration-300 ${
          scrolled
            ? 'bg-[#061426]/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[rgba(0,212,255,0.18)]'
            : 'bg-gradient-to-b from-[#061426]/95 via-[#061426]/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 min-w-0">
            
            {/* Left: Official Logo */}
            <div className="flex-shrink-0">
              <Logo size="md" variant="full" />
            </div>


            {/* Center: Desktop Navigation Links (Responsive spacing) */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5" aria-label="Main Navigation">
              {COMPANY_CONFIG.navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-md text-[13px] xl:text-sm font-medium tracking-wide transition-all duration-200 relative group whitespace-nowrap ${
                      isActive
                        ? 'text-brand-cyan font-semibold'
                        : 'text-brand-textMuted hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-brand-electric to-brand-cyan rounded-full transition-all duration-200 ${
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right: Quick Hotline & Primary Quote CTA */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
              <a
                href={`tel:${COMPANY_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-brand-textMuted hover:text-brand-cyan transition-colors py-2 px-2.5 xl:px-3 rounded-lg border border-brand-border/40 hover:border-brand-border whitespace-nowrap"
                title="Call Trivanta Impex 24/7 Operations Desk"
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span className="hidden xl:inline">{COMPANY_CONFIG.contact.primaryPhone}</span>
                <span className="xl:hidden">24/7 Desk</span>
              </a>

              <button
                type="button"
                onClick={onRequestQuote}
                className="relative inline-flex items-center justify-center gap-2 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-lg text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-brand-electric to-[#0095FF] hover:from-[#0070E0] hover:to-brand-cyan transition-all duration-300 shadow-[0_0_18px_rgba(7,136,255,0.4)] hover:shadow-[0_0_26px_rgba(0,212,255,0.55)] group border border-white/10 whitespace-nowrap"
              >
                <Shield className="w-3.5 h-3.5 text-white/90" />
                <span className="hidden xl:inline">Request a Security Quote</span>
                <span className="xl:hidden">Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onRequestQuote}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-brand-electric to-brand-cyan text-white shadow-sm flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Quote</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-brand-textMuted hover:text-white bg-brand-card/70 border border-brand-border/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Slide-over Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-brand-bgSecondary border-l border-brand-border shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 z-50 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-brand-border/40">
              <Logo size="sm" variant="compact" />
              <button
                type="button"
                onClick={closeMenu}
                className="p-1.5 rounded-lg text-brand-textMuted hover:text-white border border-brand-border/40"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-1">
              {COMPANY_CONFIG.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-brand-textMuted hover:text-white hover:bg-brand-card/70 transition-colors flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-brand-border/40 space-y-3">
            <a
              href={`tel:${COMPANY_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-brand-card border border-brand-border/40 text-xs font-semibold text-brand-cyan hover:border-brand-cyan transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_CONFIG.contact.primaryPhone}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                onRequestQuote();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-sm font-bold shadow-glow-sm"
            >
              <Shield className="w-4 h-4" />
              <span>Request a Security Quote</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
