import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { COMPANY_CONFIG } from '../config/company';
import { Zap, UserCheck, LayoutDashboard, FileCheck, Shield, CheckCircle2, XCircle, ArrowRight, Award, Check } from 'lucide-react';

export const WhyUsPage = ({ onRequestQuote }) => {
  const promiseIcons = [Zap, UserCheck, LayoutDashboard, FileCheck];

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

      {/* Experience-Led Management • Customer-Focused Service (Transferred from Home) */}
      <WhyChooseUs />

      {/* PDF Page 8: More Than a Service — A Promise */}
      <section className="py-20 border-b border-brand-border/40 relative overflow-hidden bg-gradient-to-b from-[#040D1A] via-[#061426] to-[#040D1A]">
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
              Four fundamental operational commitments that guarantee peace of mind for every client.
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

          <div className="flex items-center justify-between sm:hidden mb-2 px-1">
            <span className="text-[11px] text-brand-textMuted font-medium">Comparison Matrix</span>
            <span className="text-[11px] text-brand-cyan font-medium">← Swipe to compare →</span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-brand-border/60 bg-brand-card/50">
            <table className="w-full min-w-[640px] text-left border-collapse">
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
