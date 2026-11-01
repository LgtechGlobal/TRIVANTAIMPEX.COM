import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_CONFIG } from '../config/company';
import { Building, Factory, Home, GraduationCap, HeartPulse, ShoppingBag, Truck, Calendar, MapPin, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export const IndustriesPage = ({ onRequestQuote }) => {
  const sectors = [
    {
      id: 'corporate-offices',
      title: 'Corporate Offices & IT Parks',
      desc: 'Reception desk security, automated turnstiles, executive floor protection, and visitor badge issuance.',
      icon: Building,
      image: '/images/corporate-office-lobby-security.jpg',
      points: ['Front Desk Decorum', 'Badge Verification', 'After-Hours Patrolling']
    },
    {
      id: 'industrial-units',
      title: 'Industrial Units & Plants',
      desc: 'Material in/out gate passes, perimeter watch towers, CCTV surveillance, and worker frisking.',
      icon: Factory,
      image: '/images/factory-industrial-guard-gate.jpg',
      points: ['Material Gate Pass', 'Weighbridge Audits', 'Safety Gear Enforcement']
    },
    {
      id: 'residential-complexes',
      title: 'Residential Complexes & Societies',
      desc: '24x7 gated security, visitor intercom verification, parcel management, and peaceful community patrols.',
      icon: Home,
      image: '/images/gated-community-security-patrol.jpg',
      points: ['Resident App Sync', 'Vehicle Boom Barriers', 'CCTV Boundary Watch']
    },
    {
      id: 'educational-institutions',
      title: 'Educational Institutions',
      desc: 'School, college and university campuses with strict entry authorization, student safety, and traffic marshaling.',
      icon: GraduationCap,
      image: '/images/WhatsApp Image 2026-10-24 at 6.54.18 PM.jpeg',
      points: ['Student Protection', 'Campus Entry Gates', 'Bus Parking Marshaling']
    },
    {
      id: 'hospitals-healthcare',
      title: 'Hospitals & Healthcare',
      desc: 'Emergency room crowd control, patient family assistance, sensitive medical ward access, and parking management.',
      icon: HeartPulse,
      image: '/images/commercial-deep-cleaning-team.jpg',
      points: ['Emergency Ward Watch', 'Pharmacy Room Control', 'Discreet Assistance']
    },
    {
      id: 'commercial-establishments',
      title: 'Commercial Establishments & Retail',
      desc: 'Shopping malls, multiplexes, retail flagships, and luxury plazas with loss prevention and closing audits.',
      icon: ShoppingBag,
      image: '/images/security-checkpoint-screening.jpg',
      points: ['Loss Prevention', 'Customer Assistance', 'Bag Frisking & Metal Detectors']
    },
    {
      id: 'warehouses-logistics',
      title: 'Warehouses & Logistics Hubs',
      desc: 'Fulfillment centers, container yards, and logistics parks needing truck, container, and consignment verification.',
      icon: Truck,
      image: '/images/traffic-gate-security.jpg',
      points: ['Truck In/Out Verifications', 'Loading Dock Watch', 'Seal Verification']
    },
    {
      id: 'events-venues',
      title: 'Events, Conventions & Venues',
      desc: 'Conventions, corporate seminars, trade expos, concerts, and private gatherings with VIP cordons.',
      icon: Calendar,
      image: '/images/WhatsApp Image 2026-10-24 at 6.54.17 PM (1).jpeg',
      points: ['Ingress/Egress Control', 'Crowd Stewards', 'VIP Escort Cordons']
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="04 | SECTORS & FOOTPRINT"
        title="Industries We Serve &"
        highlight="Pan India Presence"
        subtitle="Protecting corporate parks, manufacturing plants, educational campuses, and residential infrastructure across Odisha, Chhattisgarh, and nationwide."
        breadcrumb={[{ label: 'Industries & Presence' }]}
      />

      {/* Sectors Grid */}
      <section className="py-20 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Specialized Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
                Every Sector
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              Every industry comes with distinct operational hazards. Our protocols are custom-calibrated for your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec) => {
              const Icon = sec.icon;

              return (
                <div
                  key={sec.id}
                  className="rounded-3xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A] via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#061426]/90 backdrop-blur-md border border-brand-border/60 flex items-center justify-center text-brand-cyan">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                        {sec.title}
                      </h3>
                      <p className="text-xs text-brand-textMuted mb-4 leading-relaxed">
                        {sec.desc}
                      </p>

                      <div className="space-y-1.5 border-t border-brand-border/40 pt-3">
                        {sec.points.map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-brand-textMuted">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      type="button"
                      onClick={onRequestQuote}
                      className="w-full py-2 px-3 rounded-xl bg-brand-bgSecondary hover:bg-brand-electric/20 border border-brand-border/60 hover:border-brand-cyan text-brand-cyan hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire for Sector</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PDF Page 10: Our Presence (Odisha, Chhattisgarh and Pan India) */}
      <section className="py-20 bg-gradient-to-b from-[#040D1A] via-[#061426] to-[#040D1A] border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>PDF Page 10 Official Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              OUR PRESENCE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">Serving Across Odisha, Chhattisgarh &amp; Pan India</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-textMuted">
              Strategically deployed command nodes, on-ground mobile supervisors, and rapid incident response teams across key industrial, commercial, and mining hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_CONFIG.presence.keyLocations.map((loc) => (
              <div
                key={loc.name}
                className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-cyan/40 transition-all duration-300 flex items-start justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan group-hover:scale-125 transition-transform" />
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {loc.name}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-textMuted">{loc.state}</p>
                  <p className="text-[11px] font-semibold text-brand-cyan pt-2">
                    {loc.highlight}
                  </p>
                  {loc.address && (
                    <p className="text-[11px] text-brand-textMuted/80 pt-1 leading-snug">
                      {loc.address}
                    </p>
                  )}
                </div>

                <div className="w-8 h-8 rounded-lg bg-brand-bgSecondary border border-brand-border/40 flex items-center justify-center text-brand-cyan flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Registered Office Callout Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-brand-card/80 border border-brand-cyan/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-1">
                  Official Registered Office (PDF Page 10)
                </p>
                <h3 className="text-lg font-bold text-white">
                  {COMPANY_CONFIG.legalName}
                </h3>
                <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
                  {COMPANY_CONFIG.contact.registeredOffice}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onRequestQuote}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-xs sm:text-sm font-bold shadow-glow-sm hover:shadow-glow transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>Contact Headquarters</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
