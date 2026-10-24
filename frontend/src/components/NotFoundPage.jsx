import React from 'react';
import { Logo } from './Logo';
import { ShieldAlert, Home } from 'lucide-react';

export const NotFoundPage = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-electric/15 blur-[140px] rounded-full pointer-events-none" />

      <header className="max-w-7xl mx-auto w-full pt-4">
        <Logo size="md" />
      </header>

      <main className="max-w-lg mx-auto text-center py-16 relative z-10">
        <div className="w-20 h-20 rounded-2xl bg-brand-bgSecondary border border-brand-border mx-auto flex items-center justify-center mb-6 shadow-glow-sm">
          <ShieldAlert className="w-10 h-10 text-brand-cyan" />
        </div>

        <span className="text-xs font-black tracking-widest text-brand-cyan font-mono uppercase bg-brand-card/80 px-3 py-1 rounded-md border border-brand-border">
          ERROR 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          Restricted Perimeter
        </h1>

        <p className="text-sm text-brand-textMuted leading-relaxed mb-8">
          The requested location does not exist or has been relocated within the facility network. Return to the main command center below.
        </p>

        <button
          type="button"
          onClick={onReturnHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan shadow-glow-sm hover:shadow-glow-md transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </main>

      <footer className="text-center text-xs text-brand-textMuted/60 pb-4">
        Trivanta Impex Facility and Management Pvt. Ltd.
      </footer>
    </div>
  );
};
