import React, { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera, Sparkles, Shield, Flame, Car, Building2, GraduationCap } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: '/images/trivanta-security-team-lineup.jpg',
    alt: 'Trivanta Impex uniformed security personnel in disciplined formation',
    label: 'Uniformed Guard Force Lineup',
    category: 'Security Personnel',
  },
  {
    id: 2,
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.18 PM.jpeg',
    alt: 'Trivanta Impex firefighters in formal lineup — professional fire safety team',
    label: 'Professional Fire Safety Brigade',
    category: 'Fire & Safety',
  },
  {
    id: 3,
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.37 PM.jpeg',
    alt: 'Trivanta PATROL Mahindra Bolero SUV — rapid response vehicle',
    label: 'Mobile Patrol SUV (Front)',
    category: 'Fleet Operations',
  },
  {
    id: 4,
    src: '/images/security-checkpoint-screening.jpg',
    alt: 'Security checkpoint with baggage scanner and metal detector arch',
    label: 'Checkpoint Baggage & Walkthrough Screening',
    category: 'Access Control',
  },
  {
    id: 5,
    src: '/images/traffic-gate-security.jpg',
    alt: 'Heavy truck and vehicle inward gate barrier and security verification',
    label: 'Industrial Truck Gate & Consignment Check',
    category: 'Access Control',
  },
  {
    id: 6,
    src: '/images/fire-safety-training.jpg',
    alt: 'Guards undergoing live fire extinguisher training drill',
    label: 'Live Fire Extinguisher Training Drill',
    category: 'Fire & Safety',
  },
  {
    id: 7,
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.41 PM (1).jpeg',
    alt: 'Guards on night perimeter patrol along fenced boundary',
    label: 'Night Perimeter & Fence Patrol',
    category: 'Security Personnel',
  },
  {
    id: 8,
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.17 PM (1).jpeg',
    alt: 'Firefighters in navy and yellow turnout suits in professional formation',
    label: 'Emergency Fire & Rescue Team',
    category: 'Fire & Safety',
  },
  {
    id: 9,
    src: '/images/WhatsApp Image 2026-10-24 at 7.26.29 PM (1).jpeg',
    alt: 'Licensed armed security guards on duty',
    label: 'Armed Guard Escort & Protection Unit',
    category: 'Security Personnel',
  },
  {
    id: 10,
    src: '/images/WhatsApp Image 2026-10-24 at 7.26.29 PM.jpeg',
    alt: 'Executive corporate protection officers in sharp suits',
    label: 'Executive Protection & Event Officers',
    category: 'Security Personnel',
  },
  {
    id: 11,
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.40 PM.jpeg',
    alt: 'Security officer checking gate pass and ID at facility entrance',
    label: 'Visitor Pass & ID Verification Desk',
    category: 'Access Control',
  },
  {
    id: 12,
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.36 PM.jpeg',
    alt: 'Trivanta PATROL vehicle rear perspective',
    label: 'Mobile Patrol SUV (Rear)',
    category: 'Fleet Operations',
  },
  {
    id: 13,
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.16 PM.jpeg',
    alt: 'Fire safety procedures and PPE training',
    label: 'PPE & Safety Equipment Protocols',
    category: 'Training Academy',
  },
  {
    id: 14,
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.17 PM.jpeg',
    alt: 'Fire hydrant valves and pump room inspection operations',
    label: 'Hydrant Valve & Pump Room Inspection',
    category: 'Fire & Safety',
  },
  {
    id: 15,
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.18 PM (1).jpeg',
    alt: 'CPR and emergency medical simulation drills',
    label: 'Emergency First Aid & CPR Drills',
    category: 'Training Academy',
  },
  {
    id: 16,
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.42 PM.jpeg',
    alt: 'Biometric time and attendance roster audit',
    label: 'Biometric Attendance & Shift Audit',
    category: 'Access Control',
  },
  {
    id: 17,
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.42 PM (1).jpeg',
    alt: 'Security supervisor briefing and shift muster',
    label: 'Shift Briefing & Turnout Inspection',
    category: 'Training Academy',
  },
  {
    id: 18,
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.44 PM.jpeg',
    alt: 'Personnel documentation and uniform compliance muster',
    label: 'Guard Force Parade Muster',
    category: 'Security Personnel',
  },
  {
    id: 19,
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.41 PM.jpeg',
    alt: 'Walkthrough metal detector and frisking protocol',
    label: 'Metal Detector Frisking Protocols',
    category: 'Access Control',
  },
  {
    id: 20,
    src: '/images/WhatsApp Image 2026-10-24 at 7.27.38 PM.jpeg',
    alt: 'Warehouse facility and supply dispatch verification',
    label: 'Warehouse Dock Dispatch Inspection',
    category: 'Access Control',
  },
  {
    id: 21,
    src: '/images/WhatsApp Image 2026-10-24 at 7.26.27 PM.jpeg',
    alt: 'Industrial plant compound patrolling',
    label: 'Industrial Plant Grounds Patrol',
    category: 'Security Personnel',
  },
  {
    id: 22,
    src: '/images/WhatsApp Image 2026-10-24 at 7.26.28 PM.jpeg',
    alt: 'Facility utilities and technical maintenance check',
    label: 'Facility Plant & Utilities Inspection',
    category: 'Fleet Operations',
  },
  {
    id: 23,
    src: '/images/WhatsApp Image 2026-10-24 at 8.01.49 PM.jpeg',
    alt: 'Live fire hose and hydrant water discharge training',
    label: 'Hydrant Hose Reel Water Discharge Drill',
    category: 'Fire & Safety',
  },
  {
    id: 24,
    src: '/images/WhatsApp Image 2026-10-24 at 8.01.54 PM.jpeg',
    alt: 'Security training center classroom and self defence ground',
    label: 'Trivanta Impex Academy Training Ground',
    category: 'Training Academy',
  },
];

const categories = [
  { id: 'all', label: 'All Photos', icon: Sparkles },
  { id: 'Security Personnel', label: 'Security Personnel', icon: Shield },
  { id: 'Fire & Safety', label: 'Fire & Safety', icon: Flame },
  { id: 'Access Control', label: 'Access Control', icon: Building2 },
  { id: 'Fleet Operations', label: 'Patrol Fleet', icon: Car },
  { id: 'Training Academy', label: 'Training Academy', icon: GraduationCap },
];

const categoryBadgeStyles = {
  'Fire & Safety': 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  'Access Control': 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  'Fleet Operations': 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  'Training Academy': 'bg-green-500/20 text-green-300 border-green-500/40',
  'Security Personnel': 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/40',
};

export const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden scroll-mt-20 bg-brand-bgSecondary/20">
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-brand-electric/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-brand-cyan/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-brand-cyan" />
            <span>FIELD OPERATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            OUR OPERATIONS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
              IN ACTION
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            Real images from Trivanta Impex field operations, deployments, and team readiness — documenting our commitment to professional security and safety.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            const count = cat.id === 'all' ? galleryItems.length : galleryItems.filter(i => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-electric to-brand-cyan text-white shadow-glow-sm scale-105'
                    : 'bg-brand-card/70 text-brand-textMuted hover:text-white border border-brand-border/60 hover:border-brand-cyan/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-brand-bgSecondary text-brand-cyan'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* High Clarity Image Grid — 100% Picture Visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group rounded-2xl overflow-hidden bg-brand-card/80 border border-brand-border/60 hover:border-brand-cyan/70 transition-all duration-300 shadow-card hover:shadow-[0_15px_35px_rgba(0,212,255,0.22)] flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Photo Showcase — Bright, Sharp & Visible */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-bgSecondary">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle bottom edge gradient only */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-brand-card/90 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md border shadow-sm ${categoryBadgeStyles[item.category] || 'bg-white/10 text-white border-white/20'}`}>
                    {item.category}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#061426]/85 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-brand-cyan/40 text-brand-cyan shadow-sm">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Information Bar — Always Visible */}
              <div className="p-4 bg-brand-card flex items-center justify-between border-t border-brand-border/40">
                <div className="pr-3">
                  <h3 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                    {item.label}
                  </h3>
                  <p className="text-[11px] text-brand-textMuted mt-0.5">Click to view full photo</p>
                </div>

                <div className="w-7 h-7 rounded-lg bg-brand-bgSecondary border border-brand-border/40 flex items-center justify-center text-brand-cyan flex-shrink-0 group-hover:border-brand-cyan transition-colors">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Full-Screen Lightbox */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div
            className="w-full max-w-6xl flex items-center justify-between text-white pb-3 border-b border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${categoryBadgeStyles[filteredItems[lightboxIndex].category] || 'bg-white/10 text-white border-white/20'}`}>
                {filteredItems[lightboxIndex].category}
              </span>
              <span className="text-xs text-brand-textMuted font-mono">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              type="button"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors cursor-pointer"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image with Previous/Next Controls */}
          <div
            className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-brand-electric/80 border border-white/20 text-white transition-all shadow-2xl hover:scale-110 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Displayed Image */}
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              className="max-w-full max-h-[62vh] sm:max-h-[78vh] object-contain rounded-2xl shadow-2xl border border-white/10 animate-fadeIn"
            />

            {/* Next Button */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-brand-electric/80 border border-white/20 text-white transition-all shadow-2xl hover:scale-110 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="w-full max-w-6xl text-center pt-3 border-t border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
              {filteredItems[lightboxIndex].label}
            </h4>
            <p className="text-xs text-brand-textMuted max-w-2xl mx-auto">
              {filteredItems[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
