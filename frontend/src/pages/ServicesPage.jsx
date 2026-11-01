import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_CONFIG } from '../config/company';
import { Shield, Building2, Eye, Flame, CheckCircle2, ArrowRight, Sparkles, Filter } from 'lucide-react';

export const ServicesPage = ({ onSelectService, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'security', label: 'Security Services (PDF Page 4)', icon: Shield },
    { id: 'facility', label: 'Facility Management (PDF Page 5)', icon: Building2 },
    { id: 'esurveillance', label: 'E-Surveillance (PDF Page 6)', icon: Eye },
    { id: 'specialized', label: 'Specialized & Manpower (PDF Page 7)', icon: Flame },
  ];

  // Map services into the 4 PDF pillars
  const allServices = [
    // 1. Security Services (PDF Page 4 & 10)
    {
      id: 'unarmed-security-guards',
      category: 'security',
      title: 'Armed & Unarmed Guarding',
      shortDesc: 'Reliable 24x7 physical protection, gate vigilance, perimeter patrols, and visitor screening.',
      badge: 'Core Security',
      image: '/images/trivanta-security-team-lineup.jpg',
      scope: [
        'Armed/Unarmed Guarding deployments',
        'Visitor identification & pass logging',
        'Material gate-pass verification',
        'Continuous perimeter patrolling',
        'Daily incident documentation & shift handover'
      ]
    },
    {
      id: 'executive-protection',
      category: 'security',
      title: 'Executive Protection & VIP Escorts',
      shortDesc: 'Discrete personal protection officers, convoy security, and route risk surveys for corporate leaders.',
      badge: 'Executive Safety',
      image: '/images/WhatsApp Image 2026-10-24 at 7.26.29 PM.jpeg',
      scope: [
        'Close protection officers & executive cordons',
        'Route reconnaissance & contingency planning',
        'High-profile VIP movement logistics',
        'Threat assessment & counter-surveillance'
      ]
    },
    {
      id: 'event-security',
      category: 'security',
      title: 'Event Security & Crowd Stewards',
      shortDesc: 'Turnstile access control, crowd management, VIP cordons, and parking logistics for large gatherings.',
      badge: 'Event Operations',
      image: '/images/WhatsApp Image 2026-10-24 at 6.54.17 PM (1).jpeg',
      scope: [
        'Ingress & egress bag screening',
        'Stage & VIP cordon management',
        'Crowd dispersal & emergency exits',
        'Coordination with local law enforcement'
      ]
    },
    {
      id: 'lady-guard-services',
      category: 'security',
      title: 'Lady Guard Services',
      shortDesc: 'Specialized female security officers for corporate offices, schools, hospitals, and residential complexes.',
      badge: 'Specialized Guarding',
      image: '/images/WhatsApp Image 2026-10-24 at 6.54.18 PM (2).jpeg',
      scope: [
        'Female visitor & staff frisking',
        'Hostel, hospital & school wing protection',
        'Reception & front desk decorum',
        'Comfortable & courteous security assistance'
      ]
    },
    {
      id: 'supervisor-site-management',
      category: 'security',
      title: 'Supervisor & Site Management',
      shortDesc: 'Experienced on-ground supervisors ensuring continuous post discipline, surprise checks, and roster coordination.',
      badge: 'Operations Command',
      image: '/images/security-guard-monitoring-screens.jpg',
      scope: [
        'Surprise day & night inspection rounds',
        'Shift muster & immaculate uniform inspection',
        'Client single-point-of-contact coordination',
        'Immediate relief guard provisioning'
      ]
    },
    {
      id: 'bouncers-gunman-dog-squad',
      category: 'security',
      title: 'Bouncers, Gun Man & Dog Squad',
      shortDesc: 'High-deterrence specialized security assets for sensitive industrial perimeters and high-stakes events.',
      badge: 'High Deterrence',
      image: '/images/WhatsApp Image 2026-10-24 at 7.26.29 PM (1).jpeg',
      scope: [
        'Licensed armed security personnel',
        'Physically imposing trained bouncers',
        'Sniffer & tracker canine handler teams',
        'Asset escort & perimeter fortification'
      ]
    },

    // 2. Integrated Facility Management (PDF Page 5 & 10)
    {
      id: 'mechanized-housekeeping',
      category: 'facility',
      title: 'Mechanized Housekeeping',
      shortDesc: 'Industrial floor scrubbers, high-pressure washers, eco-friendly chemicals, and structured hygiene schedules.',
      badge: 'Facility Ops',
      image: '/images/cleaning-floor-scrubber-machine.jpg',
      scope: [
        'Ride-on & walk-behind auto scrubber operations',
        'Washroom deep sanitization cycles',
        'Waste segregation & disposal management',
        'Lobby, corridor & glass façade maintenance'
      ]
    },
    {
      id: 'mep-support',
      category: 'facility',
      title: 'MEP Support (Mechanical, Electrical, Plumbing)',
      shortDesc: 'Qualified technicians ensuring zero operational downtime for pumps, DG sets, HVAC, and power panels.',
      badge: 'Engineering Support',
      image: '/images/building-maintenance-electrical-hvac.jpg',
      scope: [
        'HVAC & ventilation preventive upkeep',
        'Electrical distribution & DG set monitoring',
        'Plumbing network & water treatment audits',
        'Prompt ticket resolution & asset health logs'
      ]
    },
    {
      id: 'horticulture-landscape',
      category: 'facility',
      title: 'Horticulture & Landscape Care',
      shortDesc: 'Lawn maintenance, seasonal plantation, pruning, and green space upkeep for corporate campuses.',
      badge: 'Campus Care',
      image: '/images/landscaping-lawn-maintenance.jpg',
      scope: [
        'Lawn mowing, hedging & weeding',
        'Seasonal flowerbed landscaping',
        'Automated drip & sprinkler care',
        'Indoor plant beautification & rotation'
      ]
    },
    {
      id: 'deep-cleaning-services',
      category: 'facility',
      title: 'Deep Cleaning & Sanitization',
      shortDesc: 'Specialized deep cleaning for post-construction handovers, warehouse flooring, and medical facilities.',
      badge: 'Specialized Cleaning',
      image: '/images/commercial-deep-cleaning-team.jpg',
      scope: [
        'Carpet shampooing & upholstery extraction',
        'High-reach window & wall degreasing',
        'Kitchen exhaust & cafeteria sanitization',
        'Hospital-grade surface disinfection'
      ]
    },
    {
      id: 'pest-control-solutions',
      category: 'facility',
      title: 'Pest Control Solutions',
      shortDesc: 'Certified, safe pest eradication programs targeting rodents, termites, cockroaches, and vectors.',
      badge: 'Hygiene & Health',
      image: '/images/pest-control-fumigation-services.jpg',
      scope: [
        'Odorless chemical treatment sprays',
        'Rodent bait station management',
        'Anti-termite pre/post-construction drilling',
        'Vector fogging for outdoor perimeters'
      ]
    },

    // 3. E-Surveillance (PDF Page 6)
    {
      id: 'virtual-guarding',
      category: 'esurveillance',
      title: 'Virtual Guarding & CCTV Remote Watch',
      shortDesc: '24x7 intelligent remote video surveillance with live audio intervention to deter intrusions before they occur.',
      badge: 'Smart Surveillance',
      image: '/images/cctv-control-room-monitoring.jpg',
      scope: [
        'Continuous high-definition video audit',
        'Two-way audio challenge speaker systems',
        'Virtual perimeter fence tripwire alerts',
        'Daily digital video health check logs'
      ]
    },
    {
      id: 'command-center-monitoring',
      category: 'esurveillance',
      title: '24x7 Smart Command Center',
      shortDesc: 'Centralized operations hub coordinating real-time threat alarms, guard patrols, and rapid dispatch.',
      badge: '24/7 Operations',
      image: '/images/security-guard-monitoring-screens.jpg',
      scope: [
        'Real-time central alarm reception',
        'Immediate 15-minute quick response unit dispatch',
        'GPS patrol tracking verification',
        'Incident report archival & evidence export'
      ]
    },
    {
      id: 'access-control-systems',
      category: 'esurveillance',
      title: 'Alarm & Access Control Monitoring',
      shortDesc: 'Biometric gates, RFID turnstiles, fire alarm integration, and anti-tailgating surveillance.',
      badge: 'Access Systems',
      image: '/images/security-checkpoint-screening.jpg',
      scope: [
        'Biometric & RFID card integration',
        'Fire & intrusion alarm synchronization',
        'Tailgating detection & unauthorized door alarms',
        'Visitor management software coordination'
      ]
    },

    // 4. Specialized Solutions & Manpower (PDF Page 7 & 10)
    {
      id: 'fire-safety-management',
      category: 'specialized',
      title: 'Fire Safety Management & Drills',
      shortDesc: 'Certified fire wardens, hydrant system auditing, smoke detector tests, and mandatory evacuation drills.',
      badge: 'Life Safety',
      image: '/images/fire-safety-training-session.jpg',
      scope: [
        'Fire hydrant & hose reel maintenance checks',
        'Quarterly site evacuation & mock drills',
        'Extinguisher refilling & inspection tagging',
        'Fire warden team training & emergency marshals'
      ]
    },
    {
      id: 'corporate-hospitality',
      category: 'specialized',
      title: 'Corporate & Industrial Hospitality',
      shortDesc: 'Pantry management, executive cafeteria assistance, front desk concierge, and guest protocol handling.',
      badge: 'Hospitality',
      image: '/images/corporate-office-lobby-security.jpg',
      scope: [
        'Executive boardroom meeting assistance',
        'Pantry hygiene & beverage management',
        'Front desk guest welcoming & badge issuance',
        'VIP visit coordination & lounge upkeep'
      ]
    },
    {
      id: 'security-consultancy',
      category: 'specialized',
      title: 'Security Consultancy & Threat Audits',
      shortDesc: 'Vulnerability assessments, security architecture design, loss prevention audits, and crisis protocols.',
      badge: 'Advisory',
      image: '/images/patrol-guard-monitoring.jpg',
      scope: [
        'Comprehensive physical site threat matrix',
        'Standard Operating Procedure (SOP) design',
        'Loss prevention & shrinkage audit for retail/logistics',
        'Statutory compliance & safety certification assistance'
      ]
    },
    {
      id: 'manpower-supply-solutions',
      category: 'specialized',
      title: 'Manpower Supply (Skilled, Semi-Skilled, Unskilled)',
      shortDesc: 'Reliable workforce deployment for industrial plants, warehouses, packaging units, and administrative offices.',
      badge: 'Manpower Solutions',
      image: '/images/industrial-facility-worker-team.jpg',
      scope: [
        'Skilled machine operators & technicians',
        'Semi-skilled warehouse pickers & loaders',
        'Unskilled helpers & material handlers',
        '100% compliant statutory payroll (EPF/ESIC)'
      ]
    }
  ];

  const filteredServices = activeTab === 'all'
    ? allServices
    : allServices.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="02 | CORE DIVISIONS"
        title="Our Core"
        highlight="Services"
        subtitle="End-to-end security guarding, integrated facility management, 24x7 smart e-surveillance, and specialized manpower solutions tailored to your operational needs."
        breadcrumb={[{ label: 'Our Services' }]}
      />

      {/* Pillars Overview Banner */}
      <section className="py-12 bg-gradient-to-r from-brand-electric/15 via-[#061426] to-brand-cyan/15 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-brand-card/70 border border-brand-border/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">01. Security Services</h3>
                <p className="text-xs text-brand-textMuted mt-1">Armed, unarmed, lady guards &amp; site supervisors.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-brand-card/70 border border-brand-border/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-electric/20 border border-brand-electric/40 flex items-center justify-center text-brand-electric flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">02. Facility Management</h3>
                <p className="text-xs text-brand-textMuted mt-1">Mechanized cleaning, MEP, horticulture &amp; pest control.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-brand-card/70 border border-brand-border/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">03. E-Surveillance</h3>
                <p className="text-xs text-brand-textMuted mt-1">Virtual guarding, alarm systems &amp; command center.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-brand-card/70 border border-brand-border/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-electric/20 border border-brand-electric/40 flex items-center justify-center text-brand-electric flex-shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">04. Specialized Solutions</h3>
                <p className="text-xs text-brand-textMuted mt-1">Fire safety drills, consultancy &amp; manpower supply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-electric to-brand-cyan text-white shadow-glow-sm'
                      : 'bg-brand-card/60 hover:bg-brand-card text-brand-textMuted hover:text-white border border-brand-border/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid of Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-[#061426]/90 backdrop-blur-md text-brand-cyan border border-brand-cyan/30">
                      {service.badge}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-textMuted mb-5 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-brand-border/40">
                      <p className="text-[11px] font-bold text-brand-cyan uppercase tracking-wider">
                        Scope of Deployment
                      </p>
                      {service.scope.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-brand-textMuted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-bgSecondary hover:bg-brand-electric/20 border border-brand-border/60 hover:border-brand-cyan text-brand-cyan hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-brand-electric group-hover:to-brand-cyan group-hover:text-white"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Consultation CTA */}
      <section className="py-20 border-t border-brand-border/40 bg-gradient-to-b from-[#061426] via-[#040D1A] to-[#040D1A] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-brand-card/80 border border-brand-cyan/30 shadow-glow">
            <h2 className="text-3xl font-black text-white mb-4">
              Need a Custom Multi-Service Deployment Plan?
            </h2>
            <p className="text-brand-textMuted text-sm sm:text-base max-w-2xl mx-auto mb-8">
              We package integrated security guarding, mechanized housekeeping, and 24x7 e-surveillance into a single compliant SLA.
            </p>
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Get an Integrated Proposal</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
