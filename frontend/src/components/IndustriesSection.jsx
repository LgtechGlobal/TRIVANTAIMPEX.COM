import React from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { Building, Shield } from 'lucide-react';

export const IndustriesSection = ({ onRequestQuote }) => {
  return (
    <section id="industries" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
            <Building className="w-3.5 h-3.5 text-brand-cyan" />
            <span>SPECIALIZED SECTORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Industries We Serve
          </h2>

          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            From critical manufacturing infrastructure to executive corporate towers, our security and facility frameworks adapt seamlessly to every sector.
          </p>
        </div>

        {/* 8 Industries Card Grid - High Clarity Visible Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_CONFIG.industries.map((ind) => (
            <div
              key={ind.id}
              onClick={onRequestQuote}
              className="group rounded-2xl overflow-hidden bg-brand-card/70 border border-brand-border/60 hover:border-brand-cyan/70 transition-all duration-300 shadow-card hover:shadow-[0_15px_35px_rgba(0,212,255,0.22)] flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Photo Showcase - 100% Clear & Visible */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-brand-bgSecondary">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle bottom edge gradient only - leaving the photo completely clear */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-brand-card/90 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#061426]/90 backdrop-blur-md border border-brand-cyan/40 text-[11px] font-semibold text-brand-cyan shadow-sm">
                    <Shield className="w-3 h-3" />
                    <span>Sector</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-brand-textMuted leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {ind.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[10px] font-medium text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/25 px-2 py-0.5 rounded"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between text-xs">
                  <span className="text-brand-textMuted text-[11px]">Deployments Available</span>
                  <span className="text-brand-cyan font-semibold group-hover:translate-x-1 transition-transform">
                    Inquire →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
