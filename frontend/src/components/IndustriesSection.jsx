import React from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { Building, Shield } from 'lucide-react';

export const IndustriesSection = () => {
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

        {/* 8 Industries Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_CONFIG.industries.map((ind) => (
            <div
              key={ind.id}
              className="group relative h-80 rounded-2xl overflow-hidden border border-brand-border/60 hover:border-brand-cyan/80 transition-all duration-500 shadow-card hover:shadow-[0_15px_35px_rgba(0,212,255,0.25)] flex flex-col justify-end p-6 cursor-pointer"
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/75 to-brand-bg/30 group-hover:from-brand-bg group-hover:via-brand-bg/85 transition-all duration-300" />
              <div className="absolute inset-0 bg-brand-bgSecondary/20 group-hover:bg-brand-bgSecondary/40 transition-colors" />

              <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-bg/80 border border-brand-border/50 text-[11px] font-semibold text-brand-cyan mb-2.5">
                  <Shield className="w-3 h-3" />
                  <span>Sector</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {ind.name}
                </h3>

                <p className="text-xs text-brand-textMuted line-clamp-2 leading-relaxed mb-3 group-hover:text-white/90 transition-colors">
                  {ind.description}
                </p>

                <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {ind.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[10px] font-medium text-brand-cyan bg-brand-bg/90 border border-brand-cyan/30 px-2 py-0.5 rounded"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 h-[2px] w-12 group-hover:w-full bg-gradient-to-r from-brand-electric to-brand-cyan rounded-full transition-all duration-500" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
