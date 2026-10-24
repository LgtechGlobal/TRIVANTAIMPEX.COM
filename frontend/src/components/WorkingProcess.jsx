import React from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { Search, Compass, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

export const WorkingProcess = () => {
  const stepIcons = [
    <Search className="w-5 h-5 text-brand-cyan" />,
    <Compass className="w-5 h-5 text-brand-cyan" />,
    <FileSpreadsheet className="w-5 h-5 text-brand-cyan" />,
    <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
  ];

  const stepPhotos = [
    { src: "/images/WhatsApp Image 2026-10-24 at 6.55.40 PM.jpeg", alt: "Guard checking gate pass at factory entrance" },
    { src: "/images/security-checkpoint-screening.jpg",             alt: "Security checkpoint with metal detector and screening" },
    { src: "/images/trivanta-security-team-lineup.jpg",             alt: "Trivanta Impex security team deployment" },
    { src: "/images/WhatsApp Image 2026-10-24 at 6.55.41 PM (1).jpeg", alt: "Guards on night perimeter patrol monitoring" }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-electric/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
            <span>METHODOLOGY & EXECUTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Our Working Process
          </h2>

          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            A structured four-stage deployment cycle engineered to eliminate vulnerabilities and establish seamless operational control.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-brand-electric/30 via-brand-cyan to-brand-electric/30 z-0" />

          {/* Vertical Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-8 bottom-8 left-8 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-electric to-brand-cyan/20 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {COMPANY_CONFIG.processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="flex flex-row lg:flex-col items-start gap-6 lg:gap-0 group"
              >
                <div className="relative flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-brand-bgSecondary border-2 border-brand-border group-hover:border-brand-cyan group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 flex items-center justify-center relative">
                    {stepIcons[idx]}

                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-[11px] font-black px-2 py-0.5 rounded-full shadow-sm font-mono">
                      {step.number}
                    </span>
                  </div>
                  {/* Step photo thumbnail */}
                  <div className="hidden lg:block w-14 h-14 rounded-full overflow-hidden border-2 border-brand-border/60 group-hover:border-brand-cyan/60 transition-all duration-300 shadow-md">
                    <img
                      src={stepPhotos[idx].src}
                      alt={stepPhotos[idx].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="lg:mt-8 flex-1">
                  <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase font-mono">
                    {step.step}
                  </span>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mt-1 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-brand-textMuted leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="inline-block text-[11px] font-semibold text-white/90 bg-brand-card/80 border border-brand-border/40 px-3 py-1.5 rounded-lg">
                    {step.actionPoint}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

