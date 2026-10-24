import React from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { ShieldCheck, Building2, Settings2, Users } from 'lucide-react';

export const TrustHighlights = () => {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-cyan" />,
    Building2: <Building2 className="w-6 h-6 text-brand-cyan" />,
    Settings2: <Settings2 className="w-6 h-6 text-brand-cyan" />,
    Users: <Users className="w-6 h-6 text-brand-cyan" />
  };

  return (
    <section id="highlights" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-brand-border/80 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-brand-border/30">
          {COMPANY_CONFIG.trustHighlights.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 group transition-all duration-300 ${
                index > 0 ? 'pt-5 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <div className="p-3 rounded-xl bg-brand-bgSecondary border border-brand-border/50 group-hover:border-brand-cyan/70 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.25)] transition-all duration-300 flex-shrink-0">
                {iconMap[item.iconName] || <ShieldCheck className="w-6 h-6 text-brand-cyan" />}
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-brand-textMuted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  );
};
