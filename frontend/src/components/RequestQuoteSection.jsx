import React, { useState, useEffect } from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { Shield, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RequestQuoteSection = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: 'Security Guard Services',
    siteLocation: '',
    estimatedRequirement: '5-10 Security Personnel',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: preselectedService.title
      }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+-\s()]{7,15}$/.test(formData.phone)) {
      errs.phone = 'Valid contact number is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid corporate or business email is required';
    }
    if (!formData.siteLocation.trim()) errs.siteLocation = 'Property or site location is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));

      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 }
      });

      setFormData({
        fullName: '',
        companyName: '',
        phone: '',
        email: '',
        serviceRequired: 'Security Guard Services',
        siteLocation: '',
        estimatedRequirement: '5-10 Security Personnel',
        message: ''
      });
    } catch (err) {
      setErrors({ form: 'Enquiry dispatch failed. Please call our direct helpline.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-bgSecondary/60 via-brand-bg to-brand-bg scroll-mt-20">
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-brand-cyan/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-electric/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
            <Shield className="w-3.5 h-3.5 text-brand-cyan" />
            <span>DIRECT ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Let's Secure What <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-brand-cyan to-[#70e0ff]">
              Matters Most.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            Tell us about your security or facility management requirements. Our team will review your enquiry and discuss a suitable solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Operations & Headquarters
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed mb-8">
                Connect directly with our security management desk for commercial proposals, site surveys, and emergency operational deployment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-bgSecondary border border-brand-border/60 text-brand-cyan flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-textMuted uppercase tracking-wider block">
                      Direct Helplines
                    </span>
                    <a
                      href={`tel:${COMPANY_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      {COMPANY_CONFIG.contact.phoneDisplay}
                    </a>
                    <span className="text-xs text-brand-cyan block mt-0.5 font-medium">
                      {COMPANY_CONFIG.contact.workingHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-bgSecondary border border-brand-border/60 text-brand-cyan flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-textMuted uppercase tracking-wider block">
                      Enquiries & Proposals
                    </span>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.email}`}
                      className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      {COMPANY_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-bgSecondary border border-brand-border/60 text-brand-cyan flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-textMuted uppercase tracking-wider block">
                      Corporate Address
                    </span>
                    <p className="text-sm font-medium text-white/90 leading-snug">
                      {COMPANY_CONFIG.contact.headquarters}
                    </p>
                    <p className="text-xs text-brand-textMuted mt-1">
                      Regional: {COMPANY_CONFIG.contact.regionalOffice}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-bgSecondary border border-brand-border/60 text-brand-cyan flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-textMuted uppercase tracking-wider block">
                      Administrative Hours
                    </span>
                    <p className="text-sm font-medium text-white/90">
                      {COMPANY_CONFIG.contact.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border/40">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest">
                  Brand Promise
                </p>
                <p className="text-sm font-extrabold text-white mt-1 italic">
                  "{COMPANY_CONFIG.tagline}"
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 sm:p-10 border border-brand-border shadow-2xl relative">
              
              {isSuccess ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-electric/20 border border-brand-cyan text-brand-cyan mx-auto flex items-center justify-center mb-6 shadow-glow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    Thank You for Your Enquiry
                  </h3>
                  <p className="text-sm text-brand-textMuted max-w-md mx-auto leading-relaxed mb-8">
                    Your requirement has been routed directly to our operations team. A representative will contact you shortly to arrange a site evaluation or provide a structured proposal.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-brand-cyan bg-brand-card border border-brand-border hover:border-brand-cyan transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {errors.form && (
                    <div className="p-4 rounded-xl bg-red-900/30 border border-red-500/50 text-red-200 text-xs flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Full Name <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Malhotra"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border ${
                          errors.fullName ? 'border-red-500' : 'border-brand-border focus:border-brand-cyan'
                        } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Logistics Ltd."
                        className="w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border border-brand-border focus:border-brand-cyan text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Phone Number <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border ${
                          errors.phone ? 'border-red-500' : 'border-brand-border focus:border-brand-cyan'
                        } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Email Address <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="director@apexcorp.com"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border ${
                          errors.email ? 'border-red-500' : 'border-brand-border focus:border-brand-cyan'
                        } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Service Required <span className="text-brand-cyan">*</span>
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border border-brand-border text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors cursor-pointer"
                      >
                        {COMPANY_CONFIG.services.map((svc) => (
                          <option key={svc.id} value={svc.title} className="bg-brand-bgSecondary text-white">
                            {svc.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Estimated Requirement
                      </label>
                      <select
                        name="estimatedRequirement"
                        value={formData.estimatedRequirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border border-brand-border text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors cursor-pointer"
                      >
                        <option value="1-4 Security Personnel" className="bg-brand-bgSecondary text-white">1–4 Security Personnel</option>
                        <option value="5-10 Security Personnel" className="bg-brand-bgSecondary text-white">5–10 Security Personnel</option>
                        <option value="11-25 Security Personnel" className="bg-brand-bgSecondary text-white">11–25 Security Personnel</option>
                        <option value="25+ Large Enterprise Force" className="bg-brand-bgSecondary text-white">25+ Large Enterprise Force</option>
                        <option value="Facility Management Contract" className="bg-brand-bgSecondary text-white">Facility Management Contract</option>
                        <option value="Single Event / Short-term Deployment" className="bg-brand-bgSecondary text-white">Single Event / Short-term Deployment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Property / Site Location <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      name="siteLocation"
                      value={formData.siteLocation}
                      onChange={handleChange}
                      placeholder="e.g. Commercial Hub, Cyber City, Gurugram / Industrial Area, Greater Noida"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border ${
                        errors.siteLocation ? 'border-red-500' : 'border-brand-border focus:border-brand-cyan'
                      } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.siteLocation && (
                      <p className="text-red-400 text-xs mt-1">{errors.siteLocation}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Specific Requirements / Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention any specific shift timings, armed guard requirements, or key concerns..."
                      className="w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border border-brand-border focus:border-brand-cyan text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan hover:from-[#0070E0] hover:to-brand-cyan shadow-glow-sm hover:shadow-glow-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </span>
                      ) : (
                        <>
                          <span>Request a Consultation</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-brand-textMuted mt-3">
                      Your details will remain strictly confidential and will only be used to formulate your security proposal.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
