import React from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { ShieldAlert, Compass, CheckCircle, Scale, Users2, Target } from 'lucide-react';

export const WhyChooseUs = () => {
  const iconList = [
    <ShieldAlert className="w-5 h-5 text-brand-cyan" />,
    <CheckCircle className="w-5 h-5 text-brand-cyan" />,
    <Target className="w-5 h-5 text-brand-cyan" />,
    <Compass className="w-5 h-5 text-brand-cyan" />,
    <Users2 className="w-5 h-5 text-brand-cyan" />,
    <Scale className="w-5 h-5 text-brand-cyan" />
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-bg via-brand-bgSecondary/60 to-brand-bg scroll-mt-20">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-electric/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
            <span>THE TRIVANTA ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            A Higher Standard of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-brand-cyan to-[#70e0ff]">
              Security.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            Our operational methodology bridges rigorous discipline with modern facility supervision to ensure uncompromising standards at every post.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COMPANY_CONFIG.differentiators.map((diff, idx) => (
            <div
              key={diff.number}
              className="glass-card rounded-2xl p-7 relative group hover:border-brand-cyan/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(7,136,255,0.2)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black tracking-tight text-brand-cyan font-mono drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]">
                      {diff.number}
                    </span>
                    <div className="w-8 h-[1px] bg-brand-border/80 group-hover:w-12 group-hover:bg-brand-cyan transition-all duration-300" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-brand-bg/80 border border-brand-border/60 group-hover:border-brand-cyan/60 transition-colors">
                    {iconList[idx % iconList.length]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-wide mb-3 group-hover:text-brand-cyan transition-colors">
                  {diff.title}
                </h3>

                <p className="text-sm text-brand-textMuted leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/30 flex items-center justify-between text-xs">
                <span className="text-brand-textMuted/80 font-medium">Core Tenet</span>
                <span className="text-brand-cyan font-semibold tracking-wide">{diff.focus}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
