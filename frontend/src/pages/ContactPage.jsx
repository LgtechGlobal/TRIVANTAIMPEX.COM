import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { RequestQuoteSection } from '../components/RequestQuoteSection';
import { COMPANY_CONFIG } from '../config/company';
import { MapPin, Phone, Mail, Clock, Building, ShieldCheck } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="08 | DIRECT CONTACT"
        title="Contact Us &"
        highlight="Operations Desk"
        subtitle="Connect with our 24/7 central command desk for service inquiries, site surveys, or immediate quick response coordination."
        breadcrumb={[{ label: 'Contact Us' }]}
      />

      {/* Official Registered Office & Direct Cards (PDF Page 10) */}
      <section className="py-16 border-b border-brand-border/40 bg-gradient-to-b from-[#040D1A] via-[#061426] to-[#040D1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Registered Office */}
            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-brand-cyan uppercase tracking-wider mb-1">
                Registered Office
              </h3>
              <p className="text-xs font-semibold text-white mb-2">
                Millenium City, Bhubaneswar
              </p>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                {COMPANY_CONFIG.contact.registeredOffice}
              </p>
            </div>

            {/* Direct Phone Lines */}
            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-electric/20 border border-brand-electric/40 flex items-center justify-center text-brand-electric mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-brand-electric uppercase tracking-wider mb-1">
                24/7 Support Hotline
              </h3>
              <p className="text-xs font-semibold text-white mb-2">
                Direct Operations Desk
              </p>
              <div className="space-y-1 text-xs">
                <a href={`tel:${COMPANY_CONFIG.contact.primaryPhone}`} className="block text-white hover:text-brand-cyan font-semibold">
                  {COMPANY_CONFIG.contact.primaryPhone}
                </a>
                <a href={`tel:${COMPANY_CONFIG.contact.secondaryPhone}`} className="block text-white hover:text-brand-cyan font-semibold">
                  {COMPANY_CONFIG.contact.secondaryPhone}
                </a>
              </div>
            </div>

            {/* Email Channels */}
            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-brand-cyan uppercase tracking-wider mb-1">
                Official Correspondence
              </h3>
              <p className="text-xs font-semibold text-white mb-2">
                Inquiries &amp; Quotations
              </p>
              <div className="space-y-1 text-xs">
                <a href={`mailto:${COMPANY_CONFIG.contact.email}`} className="block text-white hover:text-brand-cyan">
                  {COMPANY_CONFIG.contact.email}
                </a>
                <a href={`mailto:${COMPANY_CONFIG.contact.supportEmail}`} className="block text-brand-textMuted hover:text-brand-cyan">
                  {COMPANY_CONFIG.contact.supportEmail}
                </a>
              </div>
            </div>

            {/* Operations Coverage */}
            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-electric/20 border border-brand-electric/40 flex items-center justify-center text-brand-electric mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-brand-electric uppercase tracking-wider mb-1">
                Coverage Territory
              </h3>
              <p className="text-xs font-semibold text-white mb-2">
                {COMPANY_CONFIG.contact.regionalPresence}
              </p>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Key nodes across Bhubaneswar, Cuttack, Sambalpur, Jharsuguda, Angul, Paradeep, Raipur, and major Indian cities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Request a Quote & Interactive Contact Form */}
      <RequestQuoteSection />
    </div>
  );
};
