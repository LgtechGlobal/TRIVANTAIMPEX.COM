import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WorkingProcess } from '../components/WorkingProcess';
import { Shield, Eye, Flame, CheckCircle2, ArrowRight, Zap, Clock, ShieldCheck, FileCheck } from 'lucide-react';

export const ProcessPage = ({ onRequestQuote }) => {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="05 | OPERATIONAL METHODOLOGY"
        title="Our Methodology &"
        highlight="Working Process"
        subtitle="A proven 4-stage operational blueprint engineered for seamless deployment, disciplined post execution, and unyielding 24/7 supervisory control."
        breadcrumb={[{ label: 'Methodology' }]}
      />

      {/* Main Working Process Component */}
      <WorkingProcess />

      {/* Command Center & Operational Safeguards (PDF Page 6 & 8) */}
      <section className="py-20 bg-gradient-to-b from-[#040D1A] via-[#061426] to-[#040D1A] border-y border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <Eye className="w-3.5 h-3.5" />
              <span>Supervisory Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              24/7 Smart Command Center{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
                Supervision
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              How our central command operations seamlessly integrate with ground security personnel for instant emergency response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">15-Min Quick Response Unit</h3>
              <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                Dedicated motorized response vehicles on standby in designated urban corridors ready to mobilize immediately upon panic alarm or escalation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-electric/20 border border-brand-electric/40 flex items-center justify-center text-brand-electric mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Electronic Video Audits</h3>
              <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                Command center controllers perform scheduled random video checks of gate posts, guard turnouts, and perimeter camera feeds every 45 minutes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-6">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Digital Client Incident Logs</h3>
              <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                Transparent daily digital shift summaries, attendance clock-ins, visitor logs, and supervisor inspection stamps delivered directly to your portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-brand-card/80 border border-brand-cyan/30 shadow-glow">
            <h2 className="text-3xl font-black text-white mb-4">
              Schedule a Site Security Risk Audit
            </h2>
            <p className="text-brand-textMuted text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Our seasoned security assessors will conduct a zero-obligation on-site vulnerability analysis of your premises.
            </p>
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Request Operational Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
