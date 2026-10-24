import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { Shield, ArrowRight, CheckCircle2, X } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState(null);

  const openServiceModal = (service) => {
    setActiveModalService(service);
  };

  const closeServiceModal = () => {
    setActiveModalService(null);
  };

  return (
    <section id="services" className="py-24 relative bg-brand-bgSecondary/40 scroll-mt-20">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-electric/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
            <Shield className="w-3.5 h-3.5 text-brand-cyan" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Complete Protection. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
              Professional Management.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            Flexible security and facility solutions for businesses, properties, and organizations.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-brand-card/70 border border-brand-border/60 hover:border-brand-cyan/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(7,136,255,0.22)] flex flex-col justify-between overflow-hidden"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-xs font-extrabold tracking-widest text-brand-cyan/90 bg-brand-bg/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-border/50">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-semibold text-white/90 bg-brand-bgSecondary/85 backdrop-blur-md px-3 py-1 rounded-full border border-brand-border/50">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-brand-textMuted leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.scope.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-medium text-brand-textMuted bg-brand-bgSecondary/60 px-2.5 py-1 rounded-md border border-brand-border/30"
                      >
                        {item}
                      </span>
                    ))}
                    {service.scope.length > 2 && (
                      <span className="text-[11px] font-medium text-brand-cyan/80 bg-brand-bgSecondary/60 px-2 py-1 rounded-md border border-brand-border/30">
                        +{service.scope.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-brand-border/30 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openServiceModal(service)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:text-white transition-colors group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-bgSecondary hover:bg-brand-electric text-white border border-brand-border/40 hover:border-transparent transition-all"
                    >
                      Inquire
                    </button>
                  </div>
                </div>

              </div>

              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-brand-bgSecondary border border-brand-border rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 w-full">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bgSecondary via-brand-bgSecondary/60 to-transparent" />

              <button
                type="button"
                onClick={closeServiceModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-brand-bg/80 text-brand-textMuted hover:text-white border border-brand-border hover:border-brand-cyan transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-bold tracking-widest text-brand-cyan bg-brand-card/90 px-3 py-1 rounded-md border border-brand-border">
                  SERVICE {activeModalService.number}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed mb-6">
                {activeModalService.fullDesc}
              </p>

              <h4 className="text-xs font-bold tracking-wider text-brand-cyan uppercase mb-3">
                Key Operational Scope & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {activeModalService.scope.map((item) => (
                  <div key={item} className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-card/60 border border-brand-border/40">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                    <span className="text-xs font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-brand-border/40">
                <button
                  type="button"
                  onClick={closeServiceModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-brand-textMuted hover:text-white border border-brand-border hover:bg-brand-card transition-colors"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const svc = activeModalService;
                    closeServiceModal();
                    onSelectService(svc);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Deployment For This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
