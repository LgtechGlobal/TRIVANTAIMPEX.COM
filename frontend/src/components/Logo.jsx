import React from 'react';

/**
 * Logo component — uses the official Trivanta Impex TI logo image.
 *
 * Props:
 *  size     — 'sm' | 'md' | 'lg' | 'xl'  (controls image height)
 *  variant  — 'full' | 'compact'          (full = image + wordmark text, compact = image only)
 *  className — extra class names
 *  showText  — override to hide wordmark regardless of variant
 */
export const Logo = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'full'
}) => {
  // Image height in px for each size
  const heights = {
    sm: 36,
    md: 48,
    lg: 64,
    xl: 88,
  };

  const h = heights[size] || 48;

  // Show text wordmark only when showText=true AND not compact variant
  const showWordmark = showText && variant !== 'compact';

  return (
    <a
      href="#hero"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg transition-transform duration-300 flex-shrink-0 ${className}`}
      aria-label="Trivanta Impex Home"
    >
      {/* Official TI Logo mark */}
      <div
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ height: h, width: 'auto' }}
      >
        <img
          src="/images/trivanta-logo.png"
          alt="Trivanta Impex Logo"
          height={h}
          style={{
            height: h,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
            // Drop shadow to make it pop on dark backgrounds
            filter: 'drop-shadow(0 0 8px rgba(7,136,255,0.35))',
          }}
          loading="eager"
          draggable={false}
        />
      </div>

      {/* Wordmark text — shown alongside the logo mark */}
      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline gap-1">
            <span
              className="font-extrabold tracking-wider text-white uppercase"
              style={{ fontSize: h * 0.37 }}
            >
              TRIVANTA
            </span>
            <span
              className="font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan uppercase"
              style={{ fontSize: h * 0.37 }}
            >
              IMPEX
            </span>
          </div>
          {variant === 'full' && size !== 'sm' && (
            <span
              className="font-medium tracking-[0.14em] uppercase text-brand-textMuted/80 mt-0.5 hidden sm:block"
              style={{ fontSize: h * 0.155 }}
            >
              Facility &amp; Management Pvt. Ltd.
            </span>
          )}
        </div>
      )}
    </a>
  );
};
