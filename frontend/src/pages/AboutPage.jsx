import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_CONFIG } from '../config/company';
import { Shield, Eye, Target, Compass, Award, ShieldCheck, CheckCircle2, ArrowRight, Building2, Flame, Users } from 'lucide-react';

export const AboutPage = ({ onRequestQuote }) => {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="01 | COMPANY PROFILE"
        title="About"
        highlight="Trivanta Impex"
        subtitle="Incorporated in August 2026, Trivanta Impex Facility and Management Private Limited has quickly risen as a trusted emerging leader, protecting businesses, people, and assets across India."
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* Section 1: Executive Overview & Motto */}
      <section className="py-20 border-b border-brand-border/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive Profile</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                We Deliver Peace of Mind and the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
                  Freedom to Focus on Growth.
                </span>
              </h2>

              <p className="text-base text-brand-textMuted leading-relaxed">
                {COMPANY_CONFIG.aboutDescription}
              </p>

              <div className="p-5 rounded-2xl bg-brand-card/70 border border-brand-border/60 border-l-4 border-l-brand-cyan space-y-2">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  Our Corporate Duty
                </p>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  "Our promise is simple: Your growth is our mission. Your safety is our duty."
                </p>
              </div>

              <p className="text-sm text-brand-textMuted leading-relaxed">
                {COMPANY_CONFIG.aboutExtended}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-sm font-bold shadow-glow-sm hover:shadow-glow transition-all flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-brand-border/60 shadow-2xl group">
                <img
                  src="/images/trivanta-security-team-lineup.jpg"
                  alt="Trivanta Impex Guard Force"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#061426]/90 backdrop-blur-md border border-brand-border/40">
                  <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-1">
                    Official Motto
                  </p>
                  <p className="text-sm font-bold text-white italic">
                    "{COMPANY_CONFIG.motto}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission (PDF Page 3) */}
      <section className="py-20 bg-gradient-to-b from-[#040D1A] via-[#061426] to-[#040D1A] border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>PDF Page 3 Mandate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Vision &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Vision Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-brand-card/70 border border-brand-cyan/30 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl rounded-full" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-6">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Our Vision</h3>
                <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                  "{COMPANY_CONFIG.vision}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border/40 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping" />
                <span className="text-xs font-semibold text-brand-cyan tracking-wider uppercase">
                  Future-Ready &amp; Trust-Driven
                </span>
              </div>
            </div>

            {/* Mission Card with 4 PDF Points */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-brand-card/70 border border-brand-border/60 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-brand-electric/20 border border-brand-electric/40 flex items-center justify-center text-brand-cyan mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Our Mission</h3>

              <div className="space-y-4">
                {COMPANY_CONFIG.missionPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-brand-bgSecondary/60 border border-brand-border/40 flex items-start gap-3.5 hover:border-brand-cyan/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Core Values (PDF Page 2 & 10) */}
      <section className="py-20 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">Values</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              The ethical framework and operational standards governing every Trivanta Impex guard and manager.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_CONFIG.coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-brand-card/50 border border-brand-border/50 hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-electric/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What Makes Trivanta Impex Different (PDF Page 9) */}
      <section className="py-20 bg-gradient-to-b from-[#061426] via-[#040D1A] to-[#061426] border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>PDF Page 9 Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">TRIVANTA IMPEX Different?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              Structured operational discipline, live fire drills, self-defence training, and command center vigilance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="h-44 rounded-xl overflow-hidden mb-5">
                <img src="/images/security-classroom-briefing.jpg" alt="Security Classroom Training" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Dedicated Training Center</h3>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Rigorous classroom syllabus covering basic security procedures, access control gates, communication decorum, and duty rosters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="h-44 rounded-xl overflow-hidden mb-5">
                <img src="/images/fire-safety-training-session.jpg" alt="Fire Safety Training Session" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Live Fire Safety &amp; Drills</h3>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Extinguisher handling, fire hose reel operation, emergency evacuation protocols, and active crisis simulation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all">
              <div className="h-44 rounded-xl overflow-hidden mb-5">
                <img src="/images/patrol-guard-monitoring.jpg" alt="Patrol Guard Monitoring" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Physical Fitness &amp; Self Defence</h3>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Regular parade drills, physical fitness routines, unarmed combat basics, and alertness conditioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-brand-electric/20 via-brand-cyan/10 to-brand-electric/20 border border-brand-cyan/40 shadow-glow">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Upgrade Your Site Security &amp; Facility Standards?
            </h2>
            <p className="text-brand-textMuted text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Contact our corporate leadership team today for a custom site threat analysis and transparent quotation.
            </p>
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-base font-bold shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Request a Site Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
