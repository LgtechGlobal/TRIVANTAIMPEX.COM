import React from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { Shield, CheckCircle, ArrowRight, Award, Compass, Eye } from 'lucide-react';

export const AboutSection = ({ onRequestQuote }) => {
  const pillars = [
    {
      title: "Professional Approach",
      desc: "Disciplined personnel, immaculate uniform standards, and an organized chain of command across all premises.",
      icon: <Award className="w-5 h-5 text-brand-cyan" />
    },
    {
      title: "Reliable Service Delivery",
      desc: "Dependable guard deployments, active shift oversight, and continuous vigilance ensuring uninterrupted security.",
      icon: <Eye className="w-5 h-5 text-brand-cyan" />
    },
    {
      title: "Client-Centric Solutions",
      desc: "Customized protocols designed to meet the exact architectural, commercial, and operational realities of your facility.",
      icon: <Compass className="w-5 h-5 text-brand-cyan" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-electric/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Team Photography & Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-brand-border/70 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <img
                  src="/images/trivanta-security-team-lineup.jpg"
                  alt="Trivanta Impex uniformed security personnel in formation"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/40 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-brand-bgSecondary/90 border border-brand-cyan/40 backdrop-blur-md shadow-glow-sm">
                  <Shield className="w-4 h-4 text-brand-cyan fill-brand-cyan/20" />
                  <span className="text-xs font-bold tracking-wider text-white uppercase">
                    COMMITTED TO YOUR SAFETY
                  </span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 max-w-xs z-20 hidden sm:block">
                <div className="glass-card rounded-xl p-4 border border-brand-border shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-brand-electric/20 border border-brand-electric/40 text-brand-cyan">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Trained Personnel
                      </p>
                      <p className="text-[11px] text-brand-textMuted mt-0.5">
                        Strict verification & protocol readiness
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-3">
              <span className="w-6 h-[2px] bg-brand-cyan rounded-full"></span>
              <span>{COMPANY_CONFIG.aboutEyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {COMPANY_CONFIG.aboutHeadline}
            </h2>

            <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed mb-8">
              {COMPANY_CONFIG.aboutDescription}
            </p>

            <div className="space-y-5 mb-10">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-brand-card/40 border border-brand-border/40 hover:border-brand-border transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-brand-bgSecondary border border-brand-border/60 group-hover:border-brand-cyan/60 transition-colors flex-shrink-0 mt-0.5">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-textMuted mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan shadow-glow-sm hover:shadow-glow-md transition-all duration-300 group"
              >
                <span>Discover Our Company</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-brand-textMuted hover:text-white bg-brand-card/60 border border-brand-border hover:border-brand-border/80 transition-all duration-300"
              >
                <span>View All Services</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
