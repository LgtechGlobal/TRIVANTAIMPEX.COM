import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, Upload, AlertCircle, FileText, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CareersSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredPosition: 'Security Officer (Armed / Unarmed)',
    location: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const positions = [
    'Security Officer (Armed / Unarmed)',
    'Site Security Supervisor',
    'Facility Operations Executive',
    'Control Room & CCTV Operator',
    'Fire & Safety Marshall',
    'Customer Reception & Screening Attendant'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: 'File size must be under 5MB' }));
        return;
      }
      setResumeFile(file);
      setErrors((prev) => ({ ...prev, resume: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+-\s()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) newErrors.location = 'Current location is required';
    if (!resumeFile) newErrors.resume = 'Please attach your CV/Resume (PDF or Word)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitSuccess(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({
        fullName: '',
        phone: '',
        email: '',
        preferredPosition: 'Security Officer (Armed / Unarmed)',
        location: '',
      });
      setResumeFile(null);
    } catch (err) {
      setErrors({ form: 'An unexpected error occurred. Please try again or email careers@trivantaimpex.com.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-24 relative overflow-hidden bg-brand-bgSecondary/40 scroll-mt-20">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-electric/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
            <span>JOIN OUR FORCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Build Your Future With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
              Trivanta Impex
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            We welcome applications from responsible, motivated individuals interested in professional security and facility management opportunities.
          </p>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl border border-brand-border p-6 sm:p-10 shadow-2xl relative">
            
            {submitSuccess ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-electric/20 border border-brand-cyan text-brand-cyan mx-auto flex items-center justify-center mb-6 shadow-glow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  Application Submitted Successfully
                </h3>
                <p className="text-sm text-brand-textMuted max-w-md mx-auto leading-relaxed mb-8">
                  Thank you for your interest in Trivanta Impex. Our human resources recruitment cell reviews every application against active field and operational openings.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-brand-cyan bg-brand-card border border-brand-border hover:border-brand-cyan transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {errors.form && (
                  <div className="p-4 rounded-xl bg-red-900/30 border border-red-500/50 text-red-200 text-xs flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                    <span>{errors.form}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Full Name <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-brand-border focus:border-brand-cyan'
                      } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Phone Number <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border ${
                        errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-brand-border focus:border-brand-cyan'
                      } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Email Address <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-brand-border focus:border-brand-cyan'
                      } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Preferred Position <span className="text-brand-cyan">*</span>
                    </label>
                    <select
                      name="preferredPosition"
                      value={formData.preferredPosition}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border border-brand-border text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors cursor-pointer"
                    >
                      {positions.map((pos) => (
                        <option key={pos} value={pos} className="bg-brand-bgSecondary text-white">
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Current City / Location <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Noida / New Delhi / Greater Noida"
                    className={`w-full px-4 py-3 rounded-xl bg-brand-bgSecondary border ${
                      errors.location ? 'border-red-500' : 'border-brand-border'
                    } text-white placeholder-brand-textMuted/50 text-sm focus:outline-none focus:border-brand-cyan transition-colors`}
                  />
                  {errors.location && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.location}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Upload Resume (PDF, DOC, DOCX up to 5MB) <span className="text-brand-cyan">*</span>
                  </label>

                  <div className="relative border-2 border-dashed border-brand-border/70 hover:border-brand-cyan/70 rounded-xl p-6 text-center transition-colors bg-brand-bgSecondary/50">
                    <input
                      type="file"
                      id="resumeUpload"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <FileText className="w-6 h-6 text-brand-cyan" />
                        <span className="text-sm font-semibold text-white">{resumeFile.name}</span>
                        <span className="text-xs text-brand-textMuted">
                          ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setResumeFile(null);
                          }}
                          className="p-1 hover:text-red-400 text-brand-textMuted"
                          title="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Upload className="w-8 h-8 text-brand-cyan/80" />
                        <p className="text-sm font-semibold text-white">
                          Click to browse or drag and drop your file here
                        </p>
                        <p className="text-xs text-brand-textMuted">
                          Accepted formats: PDF, DOC, DOCX
                        </p>
                      </div>
                    )}
                  </div>
                  {errors.resume && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.resume}</p>
                  )}
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
                        <span>Processing Application...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-brand-textMuted mt-3">
                    Your application data is transmitted securely to our recruitment operations team. Trivanta Impex follows equal opportunity hiring.
                  </p>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
