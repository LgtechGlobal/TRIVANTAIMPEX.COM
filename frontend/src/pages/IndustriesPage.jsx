import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { IndustriesSection } from '../components/IndustriesSection';
import { COMPANY_CONFIG } from '../config/company';
import { MapPin, Building, Shield } from 'lucide-react';

export const IndustriesPage = ({ onRequestQuote }) => {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="04 | SECTORS & FOOTPRINT"
        title="Industries We Serve &"
        highlight="Pan India Presence"
        subtitle="Protecting corporate parks, manufacturing plants, educational campuses, and residential infrastructure across Odisha, Chhattisgarh, and nationwide."
        breadcrumb={[{ label: 'Industries & Presence' }]}
      />

      {/* Industries We Serve Section (Transferred from Home, 100% visible images) */}
      <IndustriesSection onRequestQuote={onRequestQuote} />

      {/* PDF Page 10: Our Presence (Odisha, Chhattisgarh and Pan India) */}
      <section className="py-20 bg-gradient-to-b from-[#040D1A] via-[#061426] to-[#040D1A] border-y border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>PDF Page 10 Official Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              OUR PRESENCE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">Serving Across Odisha, Chhattisgarh &amp; Pan India</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              Strategically deployed command nodes, on-ground mobile supervisors, and rapid incident response teams across key industrial, commercial, and mining hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_CONFIG.presence.keyLocations.map((loc) => (
              <div
                key={loc.name}
                className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all duration-300 flex items-start justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan group-hover:scale-125 transition-transform" />
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {loc.name}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-textMuted">{loc.state}</p>
                  <p className="text-[11px] font-semibold text-brand-cyan pt-2">
                    {loc.highlight}
                  </p>
                  {loc.address && (
                    <p className="text-[11px] text-brand-textMuted/80 pt-1 leading-snug">
                      {loc.address}
                    </p>
                  )}
                </div>

                <div className="w-8 h-8 rounded-lg bg-brand-bgSecondary border border-brand-border/40 flex items-center justify-center text-brand-cyan flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Registered Office Callout Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-brand-card/80 border border-brand-cyan/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-1">
                  Official Registered Office (PDF Page 10)
                </p>
                <h3 className="text-lg font-bold text-white">
                  {COMPANY_CONFIG.legalName}
                </h3>
                <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
                  {COMPANY_CONFIG.contact.registeredOffice}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onRequestQuote}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-xs sm:text-sm font-bold shadow-glow-sm hover:shadow-glow transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>Contact Headquarters</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
