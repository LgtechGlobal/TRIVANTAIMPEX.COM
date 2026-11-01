import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield } from 'lucide-react';

export const PageHeader = ({
  badge = 'TRIVANTA IMPEX',
  title,
  subtitle,
  breadcrumb = [],
  highlight
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#040E1B] via-[#061426] to-[#040E1B] border-b border-brand-border/40">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-electric/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00d4ff0a_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6 flex flex-wrap items-center gap-1.5 sm:space-x-2 text-xs text-brand-textMuted">
          <Link to="/" className="hover:text-brand-cyan transition-colors flex items-center gap-1">
            <span>Home</span>
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-brand-textMuted/60" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-brand-cyan transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-cyan font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-electric/10 border border-brand-electric/30 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <Shield className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
        )}

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] max-w-4xl">
          {title}{' '}
          {highlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-brand-cyan to-white">
              {highlight}
            </span>
          )}
        </h1>

        {/* Subtitle / Description */}
        {subtitle && (
          <p className="mt-5 text-base sm:text-lg text-brand-textMuted max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
