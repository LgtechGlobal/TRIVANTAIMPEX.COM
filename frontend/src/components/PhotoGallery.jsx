import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.18 PM.jpeg',
    alt: 'Trivanta Impex firefighters in formal lineup — professional fire safety team',
    label: 'Fire Safety Team',
    category: 'Fire & Safety',
    tall: true,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.41 PM.jpeg',
    alt: 'Security checkpoint with baggage scanner and metal detector arch',
    label: 'Checkpoint Screening',
    category: 'Access Control',
    tall: false,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.41 PM (1).jpeg',
    alt: 'Guards on night perimeter patrol with torches along fenced boundary',
    label: 'Night Perimeter Patrol',
    category: 'Security Operations',
    tall: false,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.55.40 PM.jpeg',
    alt: 'Guard checking gate pass and ID at factory entrance',
    label: 'Gate Pass Verification',
    category: 'Industrial Security',
    tall: true,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.17 PM (1).jpeg',
    alt: '9 firefighters in navy and yellow suits standing in professional lineup',
    label: 'Firefighter Team Formation',
    category: 'Fire & Safety',
    tall: false,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.36 PM.jpeg',
    alt: 'Trivanta PATROL Mahindra Bolero SUV — rear view',
    label: 'Patrol Vehicle (Rear)',
    category: 'Fleet Operations',
    tall: false,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.37 PM.jpeg',
    alt: 'Trivanta PATROL Mahindra Bolero SUV — front view',
    label: 'Patrol Vehicle (Front)',
    category: 'Fleet Operations',
    tall: true,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.16 PM.jpeg',
    alt: 'Fire safety composite collage showing PPE, safety signs, confined space procedures, and fire extinguisher training',
    label: 'Fire Safety Procedures',
    category: 'Safety Training',
    tall: false,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.17 PM.jpeg',
    alt: 'Fire service composite showing hose deployment, pump room, and alarm panel work',
    label: 'Fire Service Operations',
    category: 'Fire & Safety',
    tall: false,
  },
  {
    src: '/images/WhatsApp Image 2026-10-24 at 6.54.18 PM (1).jpeg',
    alt: 'Firefighters in action and CPR training composite',
    label: 'Emergency Response Training',
    category: 'Safety Training',
    tall: true,
  },
  {
    src: '/images/trivanta-security-team-lineup.jpg',
    alt: 'Five uniformed Trivanta Impex guards in grey uniform standing in professional formation',
    label: 'Security Guard Team',
    category: 'Security Personnel',
    tall: false,
  },
  {
    src: '/images/fire-safety-training.jpg',
    alt: 'Guards undergoing fire extinguisher training exercise',
    label: 'Fire Extinguisher Training',
    category: 'Safety Training',
    tall: false,
  },
];

const categoryColors = {
  'Fire & Safety': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Access Control': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Security Operations': 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30',
  'Industrial Security': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Fleet Operations': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Safety Training': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Security Personnel': 'bg-brand-electric/20 text-brand-electric border-brand-electric/30',
};

export const PhotoGallery = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = (src, alt) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
    setLightboxAlt('');
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden scroll-mt-20 bg-brand-bgSecondary/20">
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-brand-electric/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-brand-cyan/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-border/60 text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
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

        {/* Masonry Grid */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          style={{ columnGap: '1rem' }}
        >
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="break-inside-avoid mb-4 group relative rounded-xl overflow-hidden border border-brand-border/50 hover:border-brand-cyan/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.15)] cursor-pointer"
              onClick={() => openLightbox(item.src, item.alt)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.tall ? 'h-72 sm:h-80' : 'h-52 sm:h-60'}`}
                loading="lazy"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-bg/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-1.5 ${categoryColors[item.category] || 'bg-white/10 text-white border-white/20'}`}>
                  {item.category}
                </span>
                <p className="text-sm font-bold text-white leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
