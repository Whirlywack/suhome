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
      padding: {
        DEFAULT: '1.5rem', // Mobile: Comfortable breathing room (24px each side)
        'mobile-md': '1.5rem', // Standard Mobile: iPhone 12 Pro optimized (24px each side)
        'mobile-lg': '1.5rem', // Large Mobile: Consistent comfortable spacing (24px each side)
        sm: '1.75rem', // Small Tablet: More breathing room
        md: '1.5rem', // Tablet: Comfortable reading
        lg: '2rem', // Desktop: Spacious padding
        xl: '2.5rem', // Large Desktop: Generous padding
        '2xl': '3rem', // Ultra-wide: Maximum padding
        '4k': '3.5rem', // 4K: Maximum comfortable padding
      },
      screens: {
        // Rem-based screens for perfect scaling with reading width optimization
        sm: '34rem', // Mobile landscape: 544px at 16px, grows proportionally
        md: '44rem', // Tablet: 704px at 16px, optimal for tablet reading
        lg: '58rem', // Desktop: 928px at 16px, perfect reading width
        xl: '72rem', // Large desktop: 1152px at 16px, comfortable wide screen
        '2xl': '78rem', // Ultra-wide: 1248px at 16px, max comfortable reading
        '4k': '82rem', // 4K: 1312px at 16px, prevents ultra-wide containers
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        lexend: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          'var(--font-inter)',
          'SF Pro Display',
          'system-ui',
          'sans-serif',
        ],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'sf-pro': [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        // Design system token mapping - HSL-based for theme switching
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
        subtle: 'hsl(var(--subtle))',

        // Note: Direct color values removed to prevent conflicts
        // Use HSL design tokens above for all styling
      },
      fontSize: {
        xs: ['var(--font-size-xs)', { lineHeight: '1.4' }],
        sm: ['var(--font-size-sm)', { lineHeight: '1.45' }],
        base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-body)' }],
        lg: ['var(--font-size-lg)', { lineHeight: '1.55' }],
        xl: ['var(--font-size-xl)', { lineHeight: '1.35' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: '1.25' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: '1.2' }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: '1.15' }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: '1.1' }],
        display: [
          'var(--font-size-display)',
          { lineHeight: '1.2', letterSpacing: 'var(--letter-spacing-tight)' },
        ],
        hero: [
          'var(--font-size-hero)',
          { lineHeight: '1.1', letterSpacing: 'var(--letter-spacing-display)' },
        ],
        mega: [
          'var(--font-size-mega)',
          { lineHeight: '1.05', letterSpacing: 'var(--letter-spacing-mega)' },
        ],
      },

      // Mathematical Spacing System - Perfect Fifth Progression (rem-based)
      spacing: {
        xs: '0.25rem', // Micro spacing - Perfect for tight elements
        sm: '0.5rem', // Base unit - Foundation of all spacing
        md: '0.75rem', // 1.5x base - Harmonious progression
        lg: '1rem', // Font size equivalent - Typography alignment
        xl: '1.5rem', // Perfect Fifth - Musical harmony
        '2xl': '2.25rem', // Perfect Fifth squared - Major sections
        '3xl': '3.375rem', // Perfect Fifth cubed - Hero sections
        '4xl': '5rem', // Perfect Fifth to 4th - Page divisions
        '5xl': '7.5rem', // Perfect Fifth to 5th - Major layouts
        '6xl': '11.25rem', // Perfect Fifth to 6th - Architectural spacing
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

      // Multi-Screen Breakpoints (rem units for perfect scaling)
      screens: {
        xs: '20rem', // 320px - Minimum phone width
        'mobile-md': '24rem', // 384px - Standard phones (iPhone SE, iPhone 14 Pro)
        'mobile-lg': '23rem', // 368px - Ensures iPhone 12 Pro (390px) triggers mobile-lg
        sm: '36rem', // 576px - Mobile landscape/Small tablet
        md: '48rem', // 768px - Tablet portrait
        lg: '64rem', // 1024px - Desktop/Laptop
        xl: '90rem', // 1440px - Large desktop (optimized reading width)
        '2xl': '120rem', // 1920px - Ultra-wide (but container maxes out earlier)
        '4k': '160rem', // 2560px - 4K/Ultra-wide displays
      },
    },
  },
  plugins: [],
}

export default config
