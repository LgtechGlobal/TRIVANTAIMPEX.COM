import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { PhotoGallery } from '../components/PhotoGallery';
import { Shield, ArrowRight } from 'lucide-react';

export const GalleryPage = ({ onRequestQuote }) => {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="06 | FIELD DOCUMENTATION"
        title="Field Operations"
        highlight="Gallery"
        subtitle="Explore real photos of Trivanta Impex security personnel, training academy drills, fire safety exercises, and integrated facility operations."
        breadcrumb={[{ label: 'Field Gallery' }]}
      />

      {/* Main Photo Gallery */}
      <PhotoGallery />

      {/* Bottom CTA */}
      <section className="py-20 border-t border-brand-border/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-brand-card/80 border border-brand-cyan/30 shadow-glow">
            <h2 className="text-3xl font-black text-white mb-4">
              Deploy Professional, Immaculate Personnel on Your Site
            </h2>
            <p className="text-brand-textMuted text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Experience the disciplined turnout, punctuality, and responsiveness that defines Trivanta Impex.
            </p>
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Request a Quote for Your Site</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
