/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#061426",
          bgSecondary: "#0B1F3A",
          card: "#102641",
          cardHover: "#163456",
          electric: "#0788FF",
          cyan: "#00D4FF",
          textMuted: "#AAB8CA",
          border: "rgba(0, 212, 255, 0.18)",
          borderGlow: "rgba(7, 136, 255, 0.4)",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 212, 255, 0.2)',
        'glow-md': '0 0 25px rgba(7, 136, 255, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 212, 255, 0.35)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, rgba(6, 20, 38, 0.75) 0%, rgba(6, 20, 38, 0.92) 80%, #061426 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(16, 38, 65, 0.85) 0%, rgba(11, 31, 58, 0.6) 100%)',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
