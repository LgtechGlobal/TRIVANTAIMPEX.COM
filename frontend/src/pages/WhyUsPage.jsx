import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_CONFIG } from '../config/company';
import { Zap, UserCheck, LayoutDashboard, FileCheck, Shield, CheckCircle2, XCircle, ArrowRight, Award, Clock, Users, Building, Flame, Check } from 'lucide-react';

export const WhyUsPage = ({ onRequestQuote }) => {
  const promiseIcons = [Zap, UserCheck, LayoutDashboard, FileCheck];

  const differentiators = [
    {
      title: 'Trained & Verified Manpower',
      desc: 'Stringent multi-tier background screening, police verification, and continuous training in etiquette and emergency response.',
      icon: UserCheck
    },
    {
      title: 'Quality Service & Reliability',
      desc: 'Structured operations, automated shift registers, strict supervisor checks, and dedicated post reliefs.',
      icon: Award
    },
    {
      title: 'Customised Solutions',
      desc: 'No generic templates. Site security and facility blueprints designed strictly around your premise risks and traffic patterns.',
      icon: Building
    },
    {
      title: 'Experienced Management Team',
      desc: '15+ years of combined industry expertise across industrial, corporate, mining, and institutional security.',
      icon: Users
    },
    {
      title: 'Cost Effective & Transparent',
      desc: 'Itemized billing with zero hidden charges, complete statutory compliance (EPF, ESIC), and transparent wage structures.',
      icon: FileCheck
    },
    {
      title: '24x7 Support & Quick Response',
      desc: 'Guaranteed 15-minute emergency response in urban areas backed by an active 24/7 Smart Command Center.',
      icon: Clock
    }
  ];

  const comparison = [
    { feature: 'Emergency Incident Mobilization', trivanta: 'Guaranteed 15-minute quick response', others: 'Delayed or uncommitted response' },
    { feature: 'Personnel Background Verification', trivanta: '100% Police verification & address audit', others: 'Surface checks or unverified guards' },
    { feature: 'Client Digital Dashboard', trivanta: 'Real-time attendance & electronic logs', others: 'Manual, easily altered paper registers' },
    { feature: 'Statutory Payroll (EPF / ESIC)', trivanta: '100% compliant with challans provided', others: 'Frequent compliance gaps & liabilities' },
    { feature: 'Dedicated Training Facility', trivanta: 'Permanent center with live fire & self-defence drills', others: 'Minimal on-site verbal briefing' },
    { feature: 'Supervisory Night Checks', trivanta: 'Unannounced regular inspections with GPS logs', others: 'Irregular or absent supervision' }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="03 | VALUE PROPOSITION"
        title="Why Choose"
        highlight="Trivanta Impex"
        subtitle="When you partner with Trivanta Impex, you get more than manpower or machines — you get peace of mind backed by structured discipline, quick response, and full transparency."
        breadcrumb={[{ label: 'Why Choose Us' }]}
      />

      {/* PDF Page 8: More Than a Service — A Promise */}
      <section className="py-20 border-b border-brand-border/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>PDF Page 8 Commitments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              More Than a Service — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">A Promise</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              Four fundamental pillars that distinguish Trivanta Impex from conventional security vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_CONFIG.promises.map((promise, idx) => {
              const IconComp = promiseIcons[idx] || Shield;

              return (
                <div
                  key={promise.title}
                  className="p-8 rounded-3xl bg-brand-card/60 border border-brand-border/60 hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-electric/20 to-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center mb-6 text-brand-cyan group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                      {promise.title}
                    </h3>
                    <p className="text-xs font-bold text-brand-cyan mb-4 uppercase tracking-wider">
                      {promise.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                      {promise.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center gap-2 text-xs font-semibold text-brand-cyan">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Active Guarantee</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 Key Differentiators (PDF Page 10) */}
      <section className="py-20 bg-gradient-to-b from-[#040D1A] via-[#061426] to-[#040D1A] border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>PDF Page 10 Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">TRIVANTA IMPEX?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              Built on 15+ years of seasoned leadership and operational discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <div
                  key={diff.title}
                  className="p-6 rounded-2xl bg-brand-card/50 border border-brand-border/50 hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-electric/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Trivanta Impex <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">vs. Conventional Vendors</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              See why leading corporate hubs, manufacturing plants, and educational institutes trust our operational model.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-brand-border/60 bg-brand-card/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brand-border/60 bg-brand-bgSecondary/80">
                  <th className="p-5 text-sm font-bold text-white">Performance Parameter</th>
                  <th className="p-5 text-sm font-bold text-brand-cyan bg-brand-electric/10">Trivanta Impex Facility &amp; Management</th>
                  <th className="p-5 text-sm font-bold text-brand-textMuted">Conventional Security Vendors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/40 text-xs sm:text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-card/80 transition-colors">
                    <td className="p-5 font-semibold text-white">{row.feature}</td>
                    <td className="p-5 text-brand-cyan font-bold bg-brand-electric/5 flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                      <span>{row.trivanta}</span>
                    </td>
                    <td className="p-5 text-brand-textMuted flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400/70 flex-shrink-0" />
                      <span>{row.others}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-brand-electric/20 via-brand-cyan/10 to-brand-electric/20 border border-brand-cyan/40 shadow-glow">
            <h2 className="text-3xl font-black text-white mb-4">
              Experience the Trivanta Impex Difference Today
            </h2>
            <p className="text-brand-textMuted text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Get an uncompromised site assessment and an all-inclusive, fully compliant service proposal.
            </p>
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Request a Site Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
