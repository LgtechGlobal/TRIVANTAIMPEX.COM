import React, { useState, useEffect } from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { X, Shield, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuoteModal = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: selectedService?.title || 'SECURITY GUARD SERVICES',
    siteLocation: '',
    estimatedRequirement: '5-10 Security Personnel',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: selectedService.title
      }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

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
      errs.phone = 'Valid phone number is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid business email is required';
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
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSuccess(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (err) {
      setErrors({ form: 'Submission error. Please call our 24/7 hotline directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-brand-bgSecondary border border-brand-border rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-brand-border/40 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-brand-cyan">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">
                Request a Security Quote
              </h3>
              <p className="text-xs text-brand-textMuted mt-0.5">
                Trivanta Impex Facility and Management Pvt. Ltd.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-brand-textMuted hover:text-white border border-transparent hover:border-brand-border transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-electric/20 border border-brand-cyan text-brand-cyan mx-auto flex items-center justify-center mb-6 shadow-glow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-extrabold text-white mb-2">
              Consultation Request Received
            </h4>
            <p className="text-sm text-brand-textMuted max-w-md mx-auto leading-relaxed mb-8">
              Our operations supervisor will evaluate your requirements and contact you with a tailored site proposal.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-brand-cyan bg-brand-card border border-brand-border hover:border-brand-cyan transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            {errors.form && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                <span>{errors.form}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Vikram Malhotra"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-card border ${
                    errors.fullName ? 'border-red-500' : 'border-brand-border focus:border-brand-cyan'
                  } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors`}
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Corporation"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-card border border-brand-border focus:border-brand-cyan text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-card border ${
                    errors.phone ? 'border-red-500' : 'border-brand-border focus:border-brand-cyan'
                  } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-card border ${
                    errors.email ? 'border-red-500' : 'border-brand-border focus:border-brand-cyan'
                  } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                  Service Required <span className="text-brand-cyan">*</span>
                </label>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                >
                  {COMPANY_CONFIG.services.map((svc) => (
                    <option key={svc.id} value={svc.title} className="bg-brand-bgSecondary text-white">
                      {svc.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                  Estimated Requirement
                </label>
                <select
                  name="estimatedRequirement"
                  value={formData.estimatedRequirement}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                >
                  <option value="1-4 Security Personnel" className="bg-brand-bgSecondary text-white">1–4 Personnel</option>
                  <option value="5-10 Security Personnel" className="bg-brand-bgSecondary text-white">5–10 Personnel</option>
                  <option value="11-25 Security Personnel" className="bg-brand-bgSecondary text-white">11–25 Personnel</option>
                  <option value="25+ Large Enterprise Force" className="bg-brand-bgSecondary text-white">25+ Enterprise Force</option>
                  <option value="Facility Management Contract" className="bg-brand-bgSecondary text-white">Facility Management</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                Site Location <span className="text-brand-cyan">*</span>
              </label>
              <input
                type="text"
                name="siteLocation"
                value={formData.siteLocation}
                onChange={handleChange}
                placeholder="e.g. Sector 62, Noida / Okhla Industrial Area"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-card border ${
                  errors.siteLocation ? 'border-red-500' : 'border-brand-border focus:border-brand-cyan'
                } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors`}
              />
              {errors.siteLocation && <p className="text-red-400 text-xs mt-1">{errors.siteLocation}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                Additional Notes
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Specific operational instructions..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-card border border-brand-border focus:border-brand-cyan text-white placeholder-brand-textMuted/50 text-sm focus:outline-none transition-colors"
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan hover:from-[#0070E0] hover:to-brand-cyan shadow-glow-sm hover:shadow-glow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting...</span>
                  </span>
                ) : (
                  <>
                    <span>Request a Security Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
