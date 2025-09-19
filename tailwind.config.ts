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
        display: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'sf-pro': [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
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
        // Perfect Typography Scale - Musical Harmony + Golden Ratio
        xs: ['0.75rem', { lineHeight: '1.4' }], // 12px - Captions, fine print
        sm: ['0.875rem', { lineHeight: '1.5' }], // 14px - Small text, UI labels
        base: ['1rem', { lineHeight: '1.6' }], // 16px - Body text baseline
        lg: ['1.125rem', { lineHeight: '1.6' }], // 18px - Large body text
        xl: ['1.25rem', { lineHeight: '1.5' }], // 20px - Subheadings
        '2xl': ['1.5rem', { lineHeight: '1.4' }], // 24px - Section headings (Perfect Fifth)
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px - Major headings (Golden Ratio)
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px - Page headings (Perfect Fifth from 2xl)
        '5xl': ['3rem', { lineHeight: '1.1' }], // 48px - Hero headings (Perfect Fifth from 3xl)
        '6xl': ['3.75rem', { lineHeight: '1.05' }], // 60px - Display headings (Golden Ratio)
        '7xl': ['4.5rem', { lineHeight: '1' }], // 72px - Mega headings (Perfect Fifth)
        '8xl': ['6rem', { lineHeight: '0.95' }], // 96px - Ultra display (Perfect Fifth)
        '9xl': ['8rem', { lineHeight: '0.9' }], // 128px - Maximum impact (Perfect Fifth)

        // Responsive clamp versions for fluid scaling
        hero: [
          'clamp(2.25rem, 1rem + 3vw, 4.5rem)',
          { lineHeight: '1.1', letterSpacing: '-0.01em' },
        ],
        display: [
          'clamp(1.5rem, 0.75rem + 2vw, 3rem)',
          { lineHeight: '1.2', letterSpacing: 'normal' },
        ],
        mega: [
          'clamp(3rem, 1rem + 3vw, 4.5rem)',
          { lineHeight: '0.95', letterSpacing: '-0.02em' },
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
