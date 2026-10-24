import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

/* ─── Keyframe animations injected once ─────────────────────────────────── */
const HERO_STYLES = `
  @keyframes orbDrift1 {
    0%   { transform: translate(0px,   0px)   scale(1);    }
    33%  { transform: translate(60px, -50px)  scale(1.12); }
    66%  { transform: translate(-30px, 40px)  scale(0.95); }
    100% { transform: translate(0px,   0px)   scale(1);    }
  }
  @keyframes orbDrift2 {
    0%   { transform: translate(0px,   0px)   scale(1);    }
    33%  { transform: translate(-70px, 30px)  scale(1.08); }
    66%  { transform: translate(40px, -60px)  scale(1.15); }
    100% { transform: translate(0px,   0px)   scale(1);    }
  }
  @keyframes orbDrift3 {
    0%   { transform: translate(0px, 0px)   scale(1);    }
    50%  { transform: translate(50px, 50px) scale(1.1);  }
    100% { transform: translate(0px, 0px)   scale(1);    }
  }
  @keyframes rayShift {
    0%   { opacity: 0.04; transform: skewX(-18deg) translateX(-10px); }
    50%  { opacity: 0.09; transform: skewX(-18deg) translateX(10px);  }
    100% { opacity: 0.04; transform: skewX(-18deg) translateX(-10px); }
  }
  @keyframes scanline {
    0%   { background-position: 0 0;    }
    100% { background-position: 0 80px; }
  }
  @keyframes gridPulse {
    0%, 100% { opacity: 0.035; }
    50%       { opacity: 0.06;  }
  }
`;

export const Hero = ({ onRequestQuote }) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-44 sm:pt-36 pb-20 lg:pt-32 lg:pb-0 scroll-mt-24"
    >
      {/* ── Inject keyframes ── */}
      {!reducedMotion && <style>{HERO_STYLES}</style>}

      {/* ══════════════════════════════════════════
          CLASSY ANIMATED BACKGROUND
      ══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* 1. Deep dark base — luxury near-black with cold blue undertone */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, #020a14 0%, #04111f 40%, #060d1c 70%, #02080f 100%)' }}
        />

        {/* 2. Gold / amber orb — top-left, slow drift */}
        {!reducedMotion && (
          <div
            className="absolute pointer-events-none"
            style={{
              width: '700px', height: '700px',
              top: '-180px', left: '-140px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,140,30,0.18) 0%, rgba(180,100,10,0.10) 40%, transparent 70%)',
              filter: 'blur(60px)',
              animation: 'orbDrift1 18s ease-in-out infinite',
            }}
          />
        )}

        {/* 3. Electric blue orb — bottom-right, mid drift */}
        {!reducedMotion && (
          <div
            className="absolute pointer-events-none"
            style={{
              width: '800px', height: '700px',
              bottom: '-200px', right: '-160px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(7,136,255,0.22) 0%, rgba(0,212,255,0.12) 40%, transparent 68%)',
              filter: 'blur(70px)',
              animation: 'orbDrift2 22s ease-in-out infinite',
            }}
          />
        )}

        {/* 4. Subtle teal accent orb — center */}
        {!reducedMotion && (
          <div
            className="absolute pointer-events-none"
            style={{
              width: '500px', height: '400px',
              top: '30%', left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,180,200,0.12) 0%, transparent 70%)',
              filter: 'blur(90px)',
              animation: 'orbDrift3 14s ease-in-out infinite',
            }}
          />
        )}

        {/* 5. Diagonal cinematic light ray */}
        {!reducedMotion && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 30%, rgba(7,136,255,0.07) 48%, rgba(0,212,255,0.04) 52%, transparent 70%)',
              animation: 'rayShift 8s ease-in-out infinite',
            }}
          />
        )}

        {/* 6. Fine dot-grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,212,255,0.45) 1px, transparent 0)',
            backgroundSize: '36px 36px',
            animation: reducedMotion ? 'none' : 'gridPulse 6s ease-in-out infinite',
            opacity: 0.04,
          }}
        />

        {/* 7. Top vignette — hides content merging with navbar */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(2,10,20,0.85) 0%, transparent 25%, transparent 75%, rgba(2,10,20,0.92) 100%)' }}
        />

        {/* 8. Side vignettes for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(2,10,20,0.6) 0%, transparent 18%, transparent 82%, rgba(2,10,20,0.6) 100%)' }}
        />
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-glow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
            </span>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-brand-cyan">
              {COMPANY_CONFIG.eyebrow}
            </span>
          </div>

          {/* ── Headline: EXACTLY 3 LINES ──
              Line 1: SECURITY THAT BUILDS TRUST.
              Line 2: PROTECTION THAT
              Line 3: NEVER COMPROMISES.
              Uses clamp() so line 1 never wraps on md+ screens.        */}
          <h1
            className="font-extrabold tracking-tight text-white text-center mb-7 leading-[1.1]"
            style={{ fontSize: 'clamp(1.75rem, 5.5vw, 3.75rem)' }}
          >
            {/* Line 1 — nowrap on sm+ so BUILDS TRUST. stays with SECURITY THAT */}
            <span className="block sm:whitespace-nowrap">
              SECURITY THAT{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #0788FF, #38b6ff, #00D4FF)' }}
              >
                BUILDS TRUST.
              </span>
            </span>

            {/* Line 2 */}
            <span className="block">PROTECTION THAT</span>

            {/* Line 3 */}
            <span className="relative inline-block">
              NEVER COMPROMISES.
              <span
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #0788FF, #00D4FF)' }}
              />
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-xl mx-auto mb-10 text-center">
            Professional security and facility management solutions designed to protect
            people, properties, and businesses with discipline, reliability, and excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white border border-white/15 group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #0788FF, #0092FF)',
                boxShadow: '0 0 28px rgba(7,136,255,0.45)',
              }}
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-cyan/60 backdrop-blur-md transition-all duration-300 group"
            >
              <Shield className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
              <span>Request a Consultation</span>
            </button>
          </div>

          {/* Trust Signals */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 max-w-2xl mx-auto">
            {[
              'Disciplined Armed & Unarmed Guards',
              'Rigorous Site Access Protocols',
              'Trained Emergency Response',
            ].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span className="text-xs font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#highlights"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/40 hover:text-brand-cyan transition-colors group focus:outline-none"
        aria-label="Scroll down to company highlights"
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-brand-cyan transition-colors">
          <div className="w-1.5 h-2.5 rounded-full bg-brand-cyan animate-bounce" />
        </div>
      </a>
    </section>
  );
};
