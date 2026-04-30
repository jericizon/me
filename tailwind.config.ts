import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        // Dark Editorial Luxe Palette
        // Primary: Coral/Salmon - energetic, distinctive
        coral: {
          50:  '#fff5f3',
          100: '#ffe8e4',
          200: '#ffd5cd',
          300: '#ffb8a8',
          400: '#ff8f75',
          500: '#ff6b57',  // Primary accent
          600: '#ed4f3a',
          700: '#c73a28',
          800: '#a33226',
          900: '#872e25',
          950: '#4a1612',
        },
        // Secondary: Soft Gold - luxury touch
        gold: {
          50:  '#fbf8f1',
          100: '#f5eedb',
          200: '#ebdcb8',
          300: '#dec48d',
          400: '#d4a574',  // Secondary accent
          500: '#c68a52',
          600: '#a86d3f',
          700: '#855332',
          800: '#6d452d',
          900: '#5a3927',
          950: '#321e15',
        },
        // Base: Deep Charcoal
        base: {
          50:  '#f5f5f0',  // Off-white text
          100: '#e8e8e0',
          200: '#d0d0c8',
          300: '#888888',  // Secondary text
          400: '#555555',
          500: '#333333',
          600: '#1a1a1a',  // Surface
          700: '#141414',  // Elevated
          800: '#0d0d0d',  // Background
          900: '#080808',
          950: '#000000',
        },
        // Legacy compatibility (mapped to new palette)
        primary: {
          50:  '#fff5f3',
          100: '#ffe8e4',
          200: '#ffd5cd',
          300: '#ffb8a8',
          400: '#ff8f75',
          500: '#ff6b57',
          600: '#ed4f3a',
          700: '#c73a28',
          800: '#a33226',
          900: '#872e25',
          950: '#4a1612',
        },
        // Accent: Coral Rose (for CSS compatibility)
        accent: {
          50:  '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        // Secondary: Soft Gold (for CSS compatibility)
        secondary: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Surface tokens
        surface: {
          DEFAULT: '#0d0d0d',
          elevated: '#141414',
          card: '#1a1a1a',
        }
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover': '0 0 0 1px rgba(255,107,87,0.3), 0 20px 40px -10px rgba(0,0,0,0.5)',
        'glow-coral': '0 0 40px rgba(255,107,87,0.3)',
        'glow-gold': '0 0 40px rgba(212,165,116,0.2)',
        'glow-primary': '0 0 40px rgba(255,107,87,0.35)',
        'glow-accent': '0 0 40px rgba(244,63,94,0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.12)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 10px 20px -2px rgba(0, 0, 0, 0.03)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '12px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 1.5s ease-in-out infinite',
        'line-draw': 'lineDraw 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'grain': 'grain 8s steps(10) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        lineDraw: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'gradient-coral': 'linear-gradient(135deg, #ff6b57 0%, #ed4f3a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4a574 0%, #c68a52 100%)',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'snug': '-0.01em',
        'wide': '0.02em',
        'wider': '0.05em',
      },
      lineHeight: {
        'display': '0.95',
        'heading': '1.0',
        'snug': '1.3',
        'relaxed': '1.7',
      },
    },
  },
  plugins: [],
} satisfies Config
