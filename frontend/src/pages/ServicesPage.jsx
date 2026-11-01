import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { Shield, ArrowRight } from 'lucide-react';

export const ServicesPage = ({ onSelectService, onRequestQuote }) => {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="02 | CORE DIVISIONS"
        title="Our Services &"
        highlight="Solutions"
        subtitle="End-to-end security guarding, integrated facility management, and workforce payroll management tailored to your operational needs."
        breadcrumb={[{ label: 'Our Services' }]}
      />

      {/* Complete Integrated Solutions Matrix Section */}
      <ServicesSection onSelectService={onSelectService} />

      {/* Global Consultation CTA */}
      <section className="py-20 border-t border-brand-border/40 bg-gradient-to-b from-[#061426] via-[#040D1A] to-[#040D1A] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-brand-card/80 border border-brand-cyan/30 shadow-glow">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Need a Custom Integrated Deployment Plan?
            </h2>
            <p className="text-brand-textMuted text-sm sm:text-base max-w-2xl mx-auto mb-8">
              We package integrated security guarding, mechanized housekeeping, and compliant workforce payroll into a single seamless SLA.
            </p>
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Get an Integrated Proposal</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
