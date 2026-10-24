import React, { useState } from 'react';
import { Logo } from './Logo';
import { COMPANY_CONFIG } from '../config/company';
import { ArrowUp, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, X } from 'lucide-react';

export const Footer = () => {
  const [legalModal, setLegalModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#040D1A] text-brand-textMuted pt-20 pb-12 overflow-hidden border-t border-brand-border/40">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent shadow-[0_0_15px_rgba(0,212,255,0.7)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-electric/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-border/30">
            
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-4 space-y-5">
              <Logo size="lg" variant="full" />
              
              <p className="text-sm text-brand-textMuted leading-relaxed pr-4">
                Trivanta Impex Facility and Management Pvt. Ltd. delivers professional security guard services, corporate protection, industrial surveillance, and facility operations engineered for uncompromising safety and discipline.
              </p>

              <div className="p-3.5 rounded-xl bg-brand-bgSecondary border border-brand-border/50 max-w-sm">
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider block">
                  Official Motto
                </span>
                <span className="text-sm font-bold text-white italic">
                  "{COMPANY_CONFIG.tagline}"
                </span>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={COMPANY_CONFIG.contact.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-brand-card hover:bg-brand-electric text-brand-textMuted hover:text-white border border-brand-border/50 hover:border-transparent transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_CONFIG.contact.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-brand-card hover:bg-brand-electric text-brand-textMuted hover:text-white border border-brand-border/50 hover:border-transparent transition-all"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_CONFIG.contact.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-brand-card hover:bg-brand-electric text-brand-textMuted hover:text-white border border-brand-border/50 hover:border-transparent transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_CONFIG.contact.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-brand-card hover:bg-brand-electric text-brand-textMuted hover:text-white border border-brand-border/50 hover:border-transparent transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span>Navigation</span>
              </h4>
              <ul className="space-y-3 text-sm">
                {COMPANY_CONFIG.navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-brand-cyan transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Core Services */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-electric" />
                <span>Core Services</span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-brand-cyan transition-colors">Security Guard Services</a></li>
                <li><a href="#services" className="hover:text-brand-cyan transition-colors">Corporate Security Support</a></li>
                <li><a href="#services" className="hover:text-brand-cyan transition-colors">Industrial Site Protection</a></li>
                <li><a href="#services" className="hover:text-brand-cyan transition-colors">Facility Management Solutions</a></li>
                <li><a href="#services" className="hover:text-brand-cyan transition-colors">Event Security & Access Control</a></li>
                <li><a href="#services" className="hover:text-brand-cyan transition-colors">Trained Manpower Staffing</a></li>
              </ul>
            </div>

            {/* Col 4: Contact Desk */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span>Contact Desk</span>
              </h4>

              <div className="space-y-3 text-xs leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{COMPANY_CONFIG.contact.phoneDisplay}</p>
                    <p className="text-brand-textMuted text-[11px]">{COMPANY_CONFIG.contact.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <a href={`mailto:${COMPANY_CONFIG.contact.email}`} className="font-semibold text-white hover:text-brand-cyan">
                      {COMPANY_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/90">{COMPANY_CONFIG.contact.headquarters}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-textMuted">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_CONFIG.legalName}. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-brand-cyan transition-colors underline-offset-4 hover:underline"
              >
                Terms and Conditions
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-card hover:bg-brand-bgSecondary border border-brand-border/60 hover:border-brand-cyan text-brand-cyan transition-all group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>
      </footer>

      {/* Privacy / Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-brand-bgSecondary border border-brand-border rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border/40">
              <h3 className="text-lg font-bold text-white">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg text-brand-textMuted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 text-xs text-brand-textMuted space-y-3 max-h-96 overflow-y-auto pr-2 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p className="text-white font-medium">Trivanta Impex Facility and Management Pvt. Ltd. Privacy Policy</p>
                  <p>
                    We respect your privacy and are committed to protecting the confidential details shared through this platform. Any contact details, requirements, or resume uploads supplied are used strictly for commercial service quotations or recruitment evaluations.
                  </p>
                  <p>
                    We do not sell, rent, or distribute client or applicant data to third parties. Security records, logs, and communication data are retained solely to fulfill professional compliance and contractual agreements.
                  </p>
                  <p>
                    For questions regarding data handling, please contact contact@trivantaimpex.com.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-white font-medium">Terms and Conditions of Service</p>
                  <p>
                    All security guard deployments, industrial security operations, and facility management agreements provided by Trivanta Impex Facility and Management Pvt. Ltd. are governed by formalized client service agreements (Service Level Agreements).
                  </p>
                  <p>
                    Information presented on this website is for informational and consultation purposes. Final duty rosters, guard allocations, billing schedules, and statutory compliance protocols are detailed in binding execution contracts.
                  </p>
                  <p>
                    Unauthorized reproduction of brand materials, photography, and trademarks is prohibited.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/40 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-brand-card hover:bg-brand-electric border border-brand-border transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
