import React from 'react';
import { ArrowRight, Users, Shield, Cpu } from 'lucide-react';

export const SecurityFirstSection = ({ onRequestQuote }) => {
  const triad = [
    {
      label: "People",
      subtext: "Selected, verified, and systematically trained guards maintaining discipline, vigilance, and executive courtesy.",
      icon: <Users className="w-5 h-5 text-brand-cyan" />
    },
    {
      label: "Process",
      subtext: "Clear access-control checkpoints, methodical visitor validation, and consistent supervisory patrols.",
      icon: <Cpu className="w-5 h-5 text-brand-cyan" />
    },
    {
      label: "Protection",
      subtext: "Proactive defense against unauthorized intrusions, material losses, and unforeseen emergency contingencies.",
      icon: <Shield className="w-5 h-5 text-brand-cyan" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-bgSecondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Checkpoint Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-brand-border/80 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              <img
                src="/images/security-checkpoint-screening.jpg"
                alt="Security officers conducting screening and checkpoint verification at entrance"
                className="w-full h-[480px] sm:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/30 opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="glass-card rounded-xl p-4 border border-brand-cyan/40 backdrop-blur-xl shadow-glow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white uppercase tracking-wider">
                          Access Control & Screening Point
                        </p>
                        <p className="text-[11px] text-brand-textMuted">
                          Walkthrough metal detection & baggage inspection
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] font-bold text-brand-cyan uppercase bg-brand-bg/80 px-2 py-1 rounded border border-brand-border">
                      Verified Security
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Protection Manifesto */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
              <span className="w-6 h-[2px] bg-brand-cyan rounded-full" />
              <span>THE TRIAD OF VIGILANCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Every Detail Matters.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
                Every Property Deserves Protection.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed mb-8">
              Effective security begins with professional people, clear processes, and a responsible approach to protecting the environments where people live and work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {triad.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-brand-card/50 border border-brand-border/60 hover:border-brand-cyan/60 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-brand-bgSecondary border border-brand-border/40 inline-flex mb-3 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors mb-1.5">
                    {item.label}
                  </h3>
                  <p className="text-xs text-brand-textMuted leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan shadow-glow-sm hover:shadow-glow-md transition-all duration-300 group"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
