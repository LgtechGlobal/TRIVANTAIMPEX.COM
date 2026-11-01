import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_CONFIG } from '../config/company';
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Compass,
  Award,
  Clock,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const AboutSection = ({ onRequestQuote }) => {
  const valueIcons = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-brand-cyan" />,
    UserCheck: <UserCheck className="w-5 h-5 text-brand-cyan" />,
    Award: <Award className="w-5 h-5 text-brand-cyan" />,
    Clock: <Clock className="w-5 h-5 text-brand-cyan" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-brand-cyan" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-electric/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split: Left Image Showcase / Right Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column - Real Team Photography & Visual Highlights */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-border/70 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <img
                  src="/images/trivanta-security-team-lineup.jpg"
                  alt="Trivanta Impex uniformed security personnel in disciplined formation"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/40 to-transparent" />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-brand-bgSecondary/90 border border-brand-cyan/40 backdrop-blur-md shadow-glow-sm">
                  <Shield className="w-4 h-4 text-brand-cyan fill-brand-cyan/20" />
                  <span className="text-xs font-bold tracking-wider text-white uppercase">
                    COMMITTED TO YOUR SAFETY
                  </span>
                </div>
              </div>

              {/* Patrol Vehicle Inset Card — bottom-right overlapping */}
              <div className="absolute -bottom-5 -right-4 sm:right-4 z-20 hidden sm:block w-44 sm:w-56">
                <div className="rounded-xl overflow-hidden border-2 border-brand-cyan/50 shadow-[0_8px_30px_rgba(0,212,255,0.25)]">
                  <img
                    src="/images/WhatsApp Image 2026-10-24 at 6.54.37 PM.jpeg"
                    alt="Trivanta Impex patrol vehicle — Mahindra Bolero marked SUV"
                    className="w-full h-28 sm:h-32 object-cover"
                    loading="lazy"
                  />
                  <div className="bg-brand-bgSecondary/95 backdrop-blur-md px-3 py-2">
                    <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Patrol Vehicle</p>
                    <p className="text-[10px] text-brand-textMuted mt-0.5">Mobile rapid-response fleet</p>
                  </div>
                </div>
              </div>

              {/* 15+ Years Experience Floating Card — bottom-left */}
              <div className="absolute -bottom-6 left-4 max-w-xs z-20 hidden sm:block">
                <div className="glass-card rounded-xl p-4 border border-brand-border shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-brand-electric/20 border border-brand-electric/40 text-brand-cyan">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        15+ Years Experience
                      </p>
                      <p className="text-[11px] text-brand-textMuted mt-0.5">
                        Senior management & field leadership
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Company Narrative & Management Philosophy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-3">
              <span className="w-6 h-[2px] bg-brand-cyan rounded-full"></span>
              <span>{COMPANY_CONFIG.aboutEyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {COMPANY_CONFIG.aboutHeadline}
            </h2>

            <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed mb-6">
              {COMPANY_CONFIG.aboutDescription}
            </p>

            {/* Management Expertise Callout Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-electric/10 via-brand-card to-brand-card/80 border border-brand-cyan/30 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-brand-electric/20 border border-brand-electric/40 text-brand-cyan flex-shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    15+ Years of Industry Expertise
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                    {COMPANY_CONFIG.managementExperience}
                  </p>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-brand-card/50 border border-brand-border/60 hover:border-brand-cyan/60 transition-colors">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 rounded-lg bg-brand-bgSecondary text-brand-cyan">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Our Vision</h3>
                </div>
                <p className="text-xs text-brand-textMuted leading-relaxed">
                  {COMPANY_CONFIG.vision}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-card/50 border border-brand-border/60 hover:border-brand-cyan/60 transition-colors">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 rounded-lg bg-brand-bgSecondary text-brand-cyan">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Our Mission</h3>
                </div>
                <p className="text-xs text-brand-textMuted leading-relaxed">
                  {COMPANY_CONFIG.mission}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan shadow-glow-sm hover:shadow-glow-md transition-all duration-300 group"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-brand-textMuted hover:text-white bg-brand-card/60 border border-brand-border hover:border-brand-border/80 transition-all duration-300"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-brand-cyan" />
              </Link>
            </div>

          </div>

        </div>

        {/* ── OUR CORE VALUES (PDF Page 2 Grid) ── */}
        <div className="pt-12 border-t border-brand-border/40">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border/60 text-[11px] font-bold tracking-[0.2em] text-brand-cyan uppercase mb-3">
              <span>PRINCIPLES THAT DEFINE US</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-brand-textMuted mt-2">
              Every deployment and customer relationship is anchored in these six foundational tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPANY_CONFIG.coreValues.map((val) => (
              <div
                key={val.title}
                className="p-5 rounded-2xl bg-brand-card/40 border border-brand-border/50 hover:border-brand-cyan/60 hover:bg-brand-card/70 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-brand-bgSecondary border border-brand-border/60 group-hover:border-brand-cyan/60 transition-colors">
                    {valueIcons[val.icon] || <ShieldCheck className="w-5 h-5 text-brand-cyan" />}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
