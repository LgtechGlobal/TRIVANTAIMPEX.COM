import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../config/company';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  X,
  Building,
  Users,
  Check,
  AlertTriangle,
  FileCheck,
  Sparkles
} from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);

  const tabs = [
    { id: 'all', label: 'All Services', icon: <Sparkles className="w-4 h-4" />, count: COMPANY_CONFIG.services.length },
    { id: 'security', label: 'Security Services', icon: <Shield className="w-4 h-4" />, count: 6 },
    { id: 'facility', label: 'Facility Management', icon: <Building className="w-4 h-4" />, count: 6 },
    { id: 'payroll', label: 'Payroll & Workforce', icon: <Users className="w-4 h-4" />, count: 6 }
  ];

  const filteredServices = activeTab === 'all'
    ? COMPANY_CONFIG.services
    : COMPANY_CONFIG.services.filter(s => s.category === activeTab);

  const openServiceModal = (service) => {
    setActiveModalService(service);
  };

  const closeServiceModal = () => {
    setActiveModalService(null);
  };

  return (
    <section id="services" className="py-24 relative bg-brand-bgSecondary/40 scroll-mt-20">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-electric/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
            <Shield className="w-3.5 h-3.5 text-brand-cyan" />
            <span>INTEGRATED SOLUTIONS MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Security • Facility • Payroll <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
              Management Solutions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            A dependable service partner built on experience, professionalism, and customer trust. Explore our comprehensive scope across all three operational divisions.
          </p>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-electric to-brand-cyan text-white shadow-glow-sm scale-105'
                    : 'bg-brand-card/70 text-brand-textMuted hover:text-white border border-brand-border/60 hover:border-brand-cyan/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-brand-bgSecondary text-brand-cyan'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-brand-card/70 border border-brand-border/60 hover:border-brand-cyan/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(7,136,255,0.22)] flex flex-col justify-between overflow-hidden"
            >
              {/* Card Image Banner - Optimized for maximum clarity */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-bgSecondary">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle bottom edge gradient only - leaving image completely clear */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-brand-card/90 to-transparent pointer-events-none" />

                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-xs font-extrabold tracking-widest text-brand-cyan bg-[#061426]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-cyan/40 shadow-md">
                    {service.number}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="text-[11px] font-semibold text-white/95 bg-[#061426]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/30 inline-block">
                      {service.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Scope Checklist Preview */}
                  <div className="space-y-1.5 mb-6">
                    {service.scope.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-white/80 line-clamp-1">{item}</span>
                      </div>
                    ))}
                    {service.scope.length > 3 && (
                      <p className="text-[11px] text-brand-cyan/90 font-medium pt-1">
                        +{service.scope.length - 3} more deliverables
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-brand-border/30 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openServiceModal(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:text-white transition-colors group/btn"
                    >
                      <span>Full Scope Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-bgSecondary hover:bg-brand-electric text-white border border-brand-border/40 hover:border-transparent transition-all"
                    >
                      Inquire
                    </button>
                  </div>
                </div>

              </div>

              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* ── PDF Page 3: Operating Focus & Compliance Assurance ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Operating Focus Box */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-brand-card/60 border border-brand-border/70 shadow-lg">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-3">
              <FileCheck className="w-4 h-4 text-brand-cyan" />
              <span>PDF SECTION 02 | OPERATING FOCUS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
              Disciplined Operational Execution
            </h3>
            <p className="text-xs sm:text-sm text-brand-textMuted mb-6 leading-relaxed">
              Our operating focus combines clear deployment instructions, attendance and shift coordination, incident escalation, professional appearance, and regular communication with the client’s nominated representative.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPANY_CONFIG.operatingFocus.map((focus) => (
                <div key={focus} className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-bgSecondary/60 border border-brand-border/40">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-white/90">{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Authorization Banner */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-brand-bgSecondary/90 to-brand-card/80 border border-brand-cyan/30 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>STATUTORY & REGULATORY ASSURANCE</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Lawful & Responsible Deliveries
              </h3>
              <p className="text-xs text-brand-textMuted leading-relaxed mb-4">
                <strong className="text-white block mb-1">Security Compliance:</strong>
                {COMPANY_CONFIG.complianceNotes.security}
              </p>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                <strong className="text-white block mb-1">Payroll & Statutory Compliance:</strong>
                {COMPANY_CONFIG.complianceNotes.payroll}
              </p>
            </div>

            <div className="pt-6 border-t border-brand-border/40 mt-6 flex items-center justify-between">
              <span className="text-[11px] text-brand-textMuted">Corporate Profile • 2026 Edition</span>
              <span className="text-xs font-bold text-brand-cyan">Trivanta Impex Verified</span>
            </div>
          </div>

        </div>

        {/* ── PDF Page 5: 5-Stage Practical, Transparent Process ── */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-card via-brand-bgSecondary to-brand-card border border-brand-border/70">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold tracking-widest text-brand-cyan uppercase block mb-1">
              PDF SECTION 04 METHODOLOGY
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              A Practical, Transparent Process
            </h3>
            <p className="text-xs text-brand-textMuted mt-1">
              Structured workflow ensuring accuracy, strict confidentiality, and continuous workflow refinement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_CONFIG.payrollProcess.map((step) => (
              <div
                key={step.stepNumber}
                className="p-4 rounded-xl bg-brand-card/70 border border-brand-border/50 hover:border-brand-cyan/60 transition-colors"
              >
                <span className="text-xs font-black text-brand-cyan font-mono block mb-2">
                  STAGE {step.stepNumber}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">{step.title}</h4>
                <p className="text-xs text-brand-textMuted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Comprehensive Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-brand-bgSecondary border border-brand-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Banner Header - Clear high-resolution view */}
            <div className="relative h-48 sm:h-72 w-full flex-shrink-0 bg-brand-bg">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-bgSecondary via-brand-bgSecondary/70 to-transparent pointer-events-none" />

              <button
                type="button"
                onClick={closeServiceModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-brand-bg/85 text-brand-textMuted hover:text-white border border-brand-border hover:border-brand-cyan transition-colors z-20 shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 z-10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-brand-cyan bg-[#061426]/90 px-2.5 py-0.5 rounded border border-brand-cyan/40">
                    SERVICE {activeModalService.number}
                  </span>
                  <span className="text-[10px] font-semibold text-white/95 bg-brand-electric/40 px-2.5 py-0.5 rounded border border-brand-electric/50">
                    {activeModalService.categoryLabel}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto flex-1">
              <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed mb-6">
                {activeModalService.fullDesc}
              </p>

              <h4 className="text-xs font-bold tracking-wider text-brand-cyan uppercase mb-3">
                Key Operational Scope & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {activeModalService.scope.map((item) => (
                  <div key={item} className="flex items-start gap-2 p-2.5 rounded-lg bg-brand-card/60 border border-brand-border/40">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-brand-border/40">
                <button
                  type="button"
                  onClick={closeServiceModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-brand-textMuted hover:text-white border border-brand-border hover:bg-brand-card transition-colors"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const svc = activeModalService;
                    closeServiceModal();
                    onSelectService(svc);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Deployment For This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
