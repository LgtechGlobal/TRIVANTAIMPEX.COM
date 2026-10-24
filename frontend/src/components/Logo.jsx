import React from 'react';

export const Logo = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'full'
}) => {
  const shieldSizes = {
    sm: 30,
    md: 40,
    lg: 52,
    xl: 70
  };

  const s = shieldSizes[size] || 40;

  return (
    <a 
      href="#hero" 
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg transition-transform duration-300 flex-shrink-0 ${className}`}
      aria-label="Trivanta Impex Home"
    >
      {/* Trivanta Impex Official Shield Emblem */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          width={s}
          height={s * 1.15}
          viewBox="0 0 100 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(7,136,255,0.45)]"
        >
          <defs>
            <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="50%" stopColor="#0788FF" />
              <stop offset="100%" stopColor="#0B2B54" />
            </linearGradient>
            
            <linearGradient id="shieldFill" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#102641" />
              <stop offset="60%" stopColor="#071930" />
              <stop offset="100%" stopColor="#040D1A" />
            </linearGradient>

            <linearGradient id="trivantaFlame" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D4D" />
              <stop offset="40%" stopColor="#FF8533" />
              <stop offset="100%" stopColor="#FFC72C" />
            </linearGradient>

            <linearGradient id="wingsBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#0788FF" />
            </linearGradient>

            <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAD961" />
              <stop offset="100%" stopColor="#F76B1C" />
            </linearGradient>
            
            <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00D4FF" floodOpacity="0.6"/>
            </filter>
          </defs>

          {/* Outer Shield Border */}
          <path
            d="M50 4L92 20C92 68 50 108 50 108C50 108 8 68 8 20L50 4Z"
            fill="url(#shieldFill)"
            stroke="url(#shieldBorder)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Inset Rim */}
          <path
            d="M50 12L85 25C85 64 50 98 50 98C50 98 15 64 15 25L50 12Z"
            fill="none"
            stroke="#00D4FF"
            strokeOpacity="0.3"
            strokeWidth="1.2"
          />

          {/* Golden Security Star at Top Vertex */}
          <polygon
            points="50,15 52.5,21 58.5,21.5 54,25.5 55.5,31.5 50,28 44.5,31.5 46,25.5 41.5,21.5 47.5,21"
            fill="url(#goldAccent)"
          />

          {/* Left Wing / Chevron */}
          <path
            d="M24 38L42 38L30 64L19 46C18 42 21 38 24 38Z"
            fill="url(#wingsBlue)"
            opacity="0.9"
          />

          {/* Right Wing / Chevron */}
          <path
            d="M76 38L58 38L70 64L81 46C82 42 79 38 76 38Z"
            fill="url(#wingsBlue)"
            opacity="0.9"
          />

          {/* Central Stylized "T" Crest */}
          <path
            d="M32 35C32 33.5 33.5 32 35.5 32H64.5C66.5 32 68 33.5 68 35V39C68 40.5 66.5 42 64.5 42H35.5C33.5 42 32 40.5 32 39V35Z"
            fill="#FFFFFF"
            filter="url(#blueGlow)"
          />

          <path
            d="M45 42H55V68C55 74 50 82 50 82C50 82 45 74 45 68V42Z"
            fill="#FFFFFF"
          />

          {/* Internal Security Torch Flame / Sword Accent */}
          <path
            d="M50 26C47 34 46 45 47 52C48.5 48 51.5 48 53 52C54 45 53 34 50 26Z"
            fill="url(#trivantaFlame)"
          />

          {/* Bottom Banner Ribbon with "IMPEX" Accent line */}
          <path
            d="M22 84H78L72 91H28L22 84Z"
            fill="#0788FF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Typography Section */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-lg sm:text-xl xl:text-2xl font-extrabold tracking-wider text-white uppercase font-sans">
              TRIVANTA
            </span>
            <span className="text-lg sm:text-xl xl:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan uppercase font-sans">
              IMPEX
            </span>
          </div>
          {variant === 'full' && (
            <div className="hidden sm:flex items-center gap-1.5 mt-0.5">
              <span className="text-[9px] xl:text-[10px] font-semibold tracking-[0.14em] uppercase text-brand-textMuted/90">
                Facility & Management
              </span>
              <span className="w-1 h-1 rounded-full bg-brand-cyan/70"></span>
              <span className="text-[8px] xl:text-[9px] font-medium tracking-wider text-brand-cyan/90 uppercase">
                Pvt. Ltd.
              </span>
            </div>
          )}
        </div>
      )}
    </a>
  );
};
