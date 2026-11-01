import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CareersSection } from '../components/CareersSection';
import { COMPANY_CONFIG } from '../config/company';
import { ShieldCheck, HeartHandshake, Award, TrendingUp, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export const CareersPage = () => {
  const employeePerks = [
    {
      icon: ShieldCheck,
      title: 'Guaranteed On-Time Salary',
      desc: 'Prompt salary disbursement by the 7th of every month directly to your verified bank account without fail.'
    },
    {
      icon: HeartHandshake,
      title: '100% EPF & ESIC Coverage',
      desc: 'Complete statutory benefits including Provident Fund and Medical insurance coverage with monthly digital challans.'
    },
    {
      icon: Award,
      title: 'Certified Training Academy',
      desc: 'Permanent training center providing PSARA-aligned drills, fire extinguisher operation, crowd control, and emergency protocols.'
    },
    {
      icon: TrendingUp,
      title: 'Clear Promotion Roadmap',
      desc: 'Transparent progression pathways from Security Guard to Shift In-Charge, Field Supervisor, and Operations Manager.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="07 | RECRUITMENT & HIRING"
        title="Careers at"
        highlight="Trivanta Impex"
        subtitle="Join our disciplined security force, specialized facility teams, and command operations across Odisha, Chhattisgarh, and nationwide."
        breadcrumb={[{ label: 'Careers' }]}
      />

      {/* Why Build Your Career with Trivanta Impex */}
      <section className="py-16 border-b border-brand-border/40 relative overflow-hidden bg-gradient-to-b from-[#061426] via-[#040D1A] to-[#061426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase">
              WORKFORCE WELFARE &amp; CULTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">Trivanta Impex?</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-textMuted mt-3">
              We treat our security guards, facility executives, and supervisors as respected frontline professionals with dignity, financial security, and personal growth.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {employeePerks.map((perk) => {
              const IconComp = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="p-6 rounded-2xl bg-brand-card/70 border border-brand-border/60 hover:border-brand-cyan/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-electric/20 to-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-brand-textMuted leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* On-ground photo banners - 100% visible & clear */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-brand-border/60 bg-brand-card">
              <div className="h-52 w-full overflow-hidden">
                <img
                  src="/images/trivanta-security-team-lineup.jpg"
                  alt="Disciplined Security Force Lineup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-white">Uniformed Security Lineup</p>
                <p className="text-[11px] text-brand-textMuted mt-0.5">Strict turnout and military-inspired discipline</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-brand-border/60 bg-brand-card">
              <div className="h-52 w-full overflow-hidden">
                <img
                  src="/images/fire-safety-training.jpg"
                  alt="Live Fire Extinguisher Training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-white">Practical Safety Academy Drills</p>
                <p className="text-[11px] text-brand-textMuted mt-0.5">Live emergency fire &amp; evacuation practice</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-brand-border/60 bg-brand-card">
              <div className="h-52 w-full overflow-hidden">
                <img
                  src="/images/WhatsApp Image 2026-10-24 at 6.54.18 PM.jpeg"
                  alt="Fire Safety & Rescue Brigade"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-white">Fire &amp; Emergency Brigade</p>
                <p className="text-[11px] text-brand-textMuted mt-0.5">Specialized industrial and residential safety teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Careers Section Component (Transferred from Home) */}
      <CareersSection />

      {/* Recruitment Desk Contact Info */}
      <section className="py-16 border-t border-brand-border/40 bg-[#040D1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-brand-card/80 border border-brand-cyan/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-1">
                Direct HR Recruitment Helpline
              </p>
              <h3 className="text-xl font-bold text-white">
                Prefer to Apply in Person or Have Questions?
              </h3>
              <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
                Reach out to our recruitment office or email your updated biodata directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={`tel:${COMPANY_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="px-5 py-2.5 rounded-xl bg-brand-card hover:bg-brand-bgSecondary border border-brand-border hover:border-brand-cyan text-white text-xs font-bold transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span>Call HR Desk</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONFIG.contact.supportEmail}?subject=Job%20Application%20-%20Trivanta%20Impex`}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-xs font-bold shadow-glow-sm hover:shadow-glow transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Your CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
