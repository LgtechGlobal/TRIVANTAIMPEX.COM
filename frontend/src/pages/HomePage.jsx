import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustHighlights } from '../components/TrustHighlights';
import { AboutSection } from '../components/AboutSection';
import { SecurityFirstSection } from '../components/SecurityFirstSection';
import { WorkingProcess } from '../components/WorkingProcess';
import { RequestQuoteSection } from '../components/RequestQuoteSection';
import { COMPANY_CONFIG } from '../config/company';
import { Zap, UserCheck, LayoutDashboard, FileCheck, ArrowRight, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HomePage = ({ onRequestQuote, onSelectService, selectedService }) => {
  return (
    <div>
      {/* Cinematic Hero with Autoplay Background Video */}
      <Hero onRequestQuote={onRequestQuote} />

      {/* Trust Highlights Bar directly below Hero */}
      <TrustHighlights />

      {/* About Section snippet */}
      <AboutSection onRequestQuote={onRequestQuote} />

      {/* PDF Page 8: More Than a Service — A Promise */}
      <section className="relative py-20 bg-gradient-to-b from-[#061426] via-[#040D1A] to-[#061426] border-y border-brand-border/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-electric/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PDF Official Guarantee</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              More Than a Service — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">A Promise</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-textMuted">
              When you partner with Trivanta Impex, you get more than manpower or machines — you get peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_CONFIG.promises.map((promise, idx) => {
              const icons = [Zap, UserCheck, LayoutDashboard, FileCheck];
              const IconComp = icons[idx] || ShieldCheck;

              return (
                <div
                  key={promise.title}
                  className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-electric/20 to-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center mb-5 text-brand-cyan group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                    {promise.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-cyan mb-3 uppercase tracking-wider">
                    {promise.subtitle}
                  </p>
                  <p className="text-xs text-brand-textMuted leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/why-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-card hover:bg-brand-card/80 border border-brand-cyan/30 text-brand-cyan hover:text-white font-semibold text-sm transition-all duration-300 group"
            >
              <span>Explore Why Clients Choose Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* PDF Page 10: Our Presence (Odisha, Chhattisgarh and Pan India) */}
      <section className="relative py-20 bg-gradient-to-b from-[#040D1A] via-[#061426] to-[#040D1A] border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Geographic Footprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                OUR PRESENCE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">Serving Across Odisha, Chhattisgarh &amp; Pan India</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-brand-textMuted max-w-2xl">
                Registered office in Millennium City, Bhubaneswar with rapid response capabilities across key industrial, corporate, mining, and educational sectors.
              </p>
            </div>

            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white transition-colors group flex-shrink-0"
            >
              <span>View All Locations &amp; Sectors</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {COMPANY_CONFIG.presence.keyLocations.map((loc) => (
              <div
                key={loc.name}
                className="p-4 rounded-xl bg-brand-card/50 border border-brand-border/40 hover:border-brand-cyan/40 transition-all duration-300 text-center group"
              >
                <div className="w-2 h-2 rounded-full bg-brand-cyan mx-auto mb-2 group-hover:scale-125 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {loc.name}
                </h3>
                <p className="text-[11px] text-brand-textMuted mt-0.5">{loc.state}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-medium bg-brand-bgSecondary text-brand-cyan/90 border border-brand-border/30">
                  {loc.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security First Visual Split Section */}
      <SecurityFirstSection onRequestQuote={onRequestQuote} />

      {/* 4-Step Working Process */}
      <WorkingProcess />

      {/* High-Conversion Request a Quote & Contact Desk */}
      <RequestQuoteSection preselectedService={selectedService} />
    </div>
  );
};
