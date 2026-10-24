import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

/* ─── Keyframe animations ────────────────────────────────────────────────── */
const HERO_STYLES = `
  @keyframes orbDrift1 {
    0%   { transform: translate(0px,  0px)   scale(1);    }
    33%  { transform: translate(50px,-40px)  scale(1.1);  }
    66%  { transform: translate(-25px,35px)  scale(0.96); }
    100% { transform: translate(0px,  0px)   scale(1);    }
  }
  @keyframes orbDrift2 {
    0%   { transform: translate(0px,  0px)   scale(1);    }
    33%  { transform: translate(-60px,25px)  scale(1.08); }
    66%  { transform: translate(35px,-50px)  scale(1.12); }
    100% { transform: translate(0px,  0px)   scale(1);    }
  }
  @keyframes orbDrift3 {
    0%   { transform: translate(0px, 0px)  scale(1);   }
    50%  { transform: translate(40px,40px) scale(1.08);}
    100% { transform: translate(0px, 0px)  scale(1);   }
  }
  @keyframes rayShift {
    0%   { opacity:0.04; transform:skewX(-18deg) translateX(-10px); }
    50%  { opacity:0.08; transform:skewX(-18deg) translateX(10px);  }
    100% { opacity:0.04; transform:skewX(-18deg) translateX(-10px); }
  }
  @keyframes gridPulse {
    0%,100% { opacity:0.035; }
    50%      { opacity:0.06;  }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  .hero-fade-1 { animation: fadeUp 0.7s ease forwards; }
  .hero-fade-2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity:0; }
  .hero-fade-3 { animation: fadeUp 0.7s 0.3s  ease forwards; opacity:0; }
  .hero-fade-4 { animation: fadeUp 0.7s 0.45s ease forwards; opacity:0; }
  .hero-fade-5 { animation: fadeUp 0.7s 0.6s  ease forwards; opacity:0; }
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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden scroll-mt-24"
      style={{ paddingTop: 'clamp(6rem, 14vw, 9rem)', paddingBottom: 'clamp(4rem, 8vw, 5rem)' }}
    >
      {/* ── Keyframes ── */}
      {!reducedMotion && <style>{HERO_STYLES}</style>}

      {/* ══════════════════════════════════════════
          CLASSY ANIMATED BACKGROUND
      ══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* 1. Deep dark luxury base */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg,#020a14 0%,#04111f 40%,#060d1c 70%,#02080f 100%)' }}
        />

        {/* 2. Gold / amber orb — top-left */}
        {!reducedMotion && (
          <div className="absolute pointer-events-none" style={{
            width:'min(700px,90vw)', height:'min(700px,90vw)',
            top:'-15%', left:'-10%',
            borderRadius:'50%',
            background:'radial-gradient(circle,rgba(200,140,30,0.18) 0%,rgba(180,100,10,0.10) 40%,transparent 70%)',
            filter:'blur(60px)',
            animation:'orbDrift1 18s ease-in-out infinite',
          }} />
        )}

        {/* 3. Electric blue orb — bottom-right */}
        {!reducedMotion && (
          <div className="absolute pointer-events-none" style={{
            width:'min(800px,95vw)', height:'min(700px,85vw)',
            bottom:'-20%', right:'-10%',
            borderRadius:'50%',
            background:'radial-gradient(circle,rgba(7,136,255,0.22) 0%,rgba(0,212,255,0.12) 40%,transparent 68%)',
            filter:'blur(70px)',
            animation:'orbDrift2 22s ease-in-out infinite',
          }} />
        )}

        {/* 4. Teal accent orb — center */}
        {!reducedMotion && (
          <div className="absolute pointer-events-none" style={{
            width:'min(500px,80vw)', height:'min(400px,65vw)',
            top:'30%', left:'50%',
            transform:'translateX(-50%)',
            borderRadius:'50%',
            background:'radial-gradient(circle,rgba(0,180,200,0.12) 0%,transparent 70%)',
            filter:'blur(90px)',
            animation:'orbDrift3 14s ease-in-out infinite',
          }} />
        )}

        {/* 5. Diagonal light ray */}
        {!reducedMotion && (
          <div className="absolute inset-0 pointer-events-none" style={{
            background:'linear-gradient(105deg,transparent 30%,rgba(7,136,255,0.07) 48%,rgba(0,212,255,0.04) 52%,transparent 70%)',
            animation:'rayShift 8s ease-in-out infinite',
          }} />
        )}

        {/* 6. Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:'radial-gradient(circle at 1px 1px,rgba(0,212,255,0.45) 1px,transparent 0)',
          backgroundSize:'36px 36px',
          animation: reducedMotion ? 'none' : 'gridPulse 6s ease-in-out infinite',
          opacity:0.04,
        }} />

        {/* 7. Top + bottom vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background:'linear-gradient(to bottom,rgba(2,10,20,0.88) 0%,transparent 22%,transparent 72%,rgba(2,10,20,0.95) 100%)',
        }} />

        {/* 8. Side vignettes */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background:'linear-gradient(to right,rgba(2,10,20,0.55) 0%,transparent 16%,transparent 84%,rgba(2,10,20,0.55) 100%)',
        }} />
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Eyebrow pill */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-5 sm:mb-7 ${!reducedMotion ? 'hero-fade-1' : ''}`}>
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-cyan">
            {COMPANY_CONFIG.eyebrow}
          </span>
        </div>

        {/* ── Headline — 3 lines ──────────────────────────────────
            Mobile  (<640px) : stacked naturally, bigger than before
            sm+     (≥640px) : line 1 forced nowrap via whitespace
            Font uses clamp so it never wraps unexpectedly           */}
        <h1
          className={`font-extrabold tracking-tight text-white text-center leading-[1.08] mb-5 sm:mb-7 ${!reducedMotion ? 'hero-fade-2' : ''}`}
          style={{ fontSize: 'clamp(2.1rem, 6.5vw, 3.75rem)' }}
        >
          {/* Line 1 */}
          <span className="block sm:whitespace-nowrap">
            SECURITY THAT{' '}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(90deg,#0788FF,#38b6ff,#00D4FF)',
            }}>
              BUILDS TRUST.
            </span>
          </span>

          {/* Line 2 */}
          <span className="block">PROTECTION THAT</span>

          {/* Line 3 + underline accent */}
          <span className="relative inline-block">
            NEVER COMPROMISES.
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 sm:-bottom-2 w-3/4 h-[3px] rounded-full"
              style={{ background: 'linear-gradient(90deg,#0788FF,#00D4FF)' }} />
          </span>
        </h1>

        {/* Description */}
        <p className={`text-sm sm:text-base lg:text-lg text-white/55 leading-relaxed max-w-xs sm:max-w-md lg:max-w-xl mx-auto mb-8 sm:mb-10 ${!reducedMotion ? 'hero-fade-3' : ''}`}>
          Professional security and facility management solutions designed to protect
          people, properties, and businesses with discipline, reliability, and excellence.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto ${!reducedMotion ? 'hero-fade-4' : ''}`}>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white border border-white/15 group transition-all duration-300"
            style={{ background:'linear-gradient(135deg,#0788FF,#0092FF)', boxShadow:'0 0 28px rgba(7,136,255,0.4)' }}
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-cyan/60 backdrop-blur-md transition-all duration-300 group"
          >
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
            <span>Request a Consultation</span>
          </button>
        </div>

        {/* Trust signals — single row on mobile, spaced on desktop */}
        <div className={`mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 w-full max-w-2xl mx-auto ${!reducedMotion ? 'hero-fade-5' : ''}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            {[
              'Disciplined Armed & Unarmed Guards',
              'Rigorous Site Access Protocols',
              'Trained Emergency Response',
            ].map((label) => (
              <div key={label} className="flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span className="text-xs font-medium text-white/75">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <a
        href="#highlights"
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5 text-white/35 hover:text-brand-cyan transition-colors group focus:outline-none"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>

      {/* ── Mobile sticky CTA bar — only visible on xs/sm, sticks above bottom ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden flex items-center gap-2 px-4 py-3 bg-[#020a14]/90 backdrop-blur-md border-t border-white/10">
        <a
          href="#services"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold text-white border border-white/10"
          style={{ background: 'linear-gradient(135deg,#0788FF,#0092FF)' }}
        >
          Our Services
        </a>
        <button
          type="button"
          onClick={onRequestQuote}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-brand-cyan bg-white/5 border border-brand-cyan/40"
        >
          <Shield className="w-4 h-4" />
          Get a Quote
        </button>
      </div>
    </section>
  );
};
