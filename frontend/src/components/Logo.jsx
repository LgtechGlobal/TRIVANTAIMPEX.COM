import React from 'react';

/**
 * Logo component — uses the official Trivanta Impex TI logo SVG.
 *
 * Props:
 *  size     — 'sm' | 'md' | 'lg' | 'xl'  (controls image height)
 *  variant  — 'full' | 'compact'          (full = logo + wordmark, compact = logo only)
 *  className — extra class names on the anchor
 *  showText  — override to hide wordmark regardless of variant
 */
export const Logo = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'full'
}) => {
  // Logo mark height in px per size
  const heights = { sm: 38, md: 52, lg: 68, xl: 92 };
  const h = heights[size] || 52;

  // Show text wordmark only when showText=true AND not compact variant
  const showWordmark = showText && variant !== 'compact';

  return (
    <a
      href="#hero"
      className={`inline-flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg transition-transform duration-300 flex-shrink-0 ${className}`}
      aria-label="Trivanta Impex Home"
    >
      {/* Official TI Logo mark — SVG scales perfectly at all resolutions */}
      <div
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ height: h, width: 'auto' }}
      >
        <img
          src="/images/logo.png"
          alt="Trivanta Impex TI Logo"
          height={h}
          style={{
            height: h,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
            // White background so the navy letters are visible on dark site backgrounds
            backgroundColor: 'white',
            borderRadius: '6px',
            padding: '2px 4px',
          }}
          loading="eager"
          draggable={false}
        />
      </div>

      {/* Wordmark — scales proportionally with logo height */}
      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline gap-1">
            <span
              className="font-extrabold tracking-wider text-white uppercase"
              style={{ fontSize: h * 0.36 }}
            >
              TRIVANTA
            </span>
            <span
              className="font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan uppercase"
              style={{ fontSize: h * 0.36 }}
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
