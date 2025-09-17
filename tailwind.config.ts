import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'lexend': ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brutalist Color System - Architectural Precision
        'off-black': '#1a1a1a',
        'off-white': '#fafafa',
        'warm-gray': '#6b7280',
        'light-gray': '#f3f4f6',

        // Systematic variations
        'primary-light': '#94a3b8',
        'primary-dark': '#475569',

        // Design system token mapping
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      fontSize: {
        'mega': ['clamp(4rem, 8vw, 7.5rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'hero': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },

      // Mathematical Spacing System - 8px base architecture
      spacing: {
        '18': '4.5rem',   // 72px - architectural intermediate
        '22': '5.5rem',   // 88px - systematic progression
        '26': '6.5rem',   // 104px - mathematical precision
        '30': '7.5rem',   // 120px - architectural spacing
      },

      // Architectural Animation System
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(1rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(2rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },

      // Systematic breakpoints
      screens: {
        'xs': '475px',
        '3xl': '1680px',
      },
    },
  },
  plugins: [],
}

export default config