# Styling Guidelines

## Styling Approach

The frontend architecture implements a **Brutalist Design System** with mathematical precision through Tailwind CSS. Every spacing decision follows an 8px base unit system, creating visual perfection and stunning results that demonstrate capabilities.

### Core Styling Principles

1. **Perfect Spacing**: All margins, padding, and sizing use multiples of 8px (0.5rem base unit) for visual harmony
2. **Beautiful Layouts**: Components align to systematic grid structures for stunning presentation
3. **Typography Excellence**: Dramatic scale relationships creating beautiful hierarchies
4. **Minimal Color Palette**: Strict 5-color system for maximum visual impact
5. **Visual Perfection**: CSS optimized for stunning rendering and beautiful results

### Tailwind Configuration Architecture

```typescript
// tailwind.config.ts - Architectural Design System Implementation
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Architectural Container System
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px', // Maximum architectural width
      },
    },
    extend: {
      // Brutalist Color System - Architectural Precision
      colors: {
        // Primary architectural colors
        'off-black': '#1a1a1a',
        'off-white': '#fafafa',
        'warm-gray': '#6b7280',
        'light-gray': '#f3f4f6',
        'primary': '#64748b',

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

      // Architectural Typography Scale
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

      // Typography precision
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      // Systematic breakpoints
      screens: {
        'xs': '475px',
        '3xl': '1680px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // Custom architectural utilities
    function({ addUtilities }) {
      addUtilities({
        // Z-pattern layout utilities
        '.z-pattern-grid': {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'center',
        },

        // Architectural spacing utilities
        '.section-spacing': {
          paddingTop: '6rem',
          paddingBottom: '6rem',
        },

        '.component-spacing': {
          marginBottom: '2rem',
        },

        // Brutalist focus architecture
        '.brutalist-focus': {
          '&:focus-visible': {
            outline: '3px solid hsl(var(--primary))',
            outlineOffset: '2px',
          },
        },
      });
    },
  ],
} satisfies Config;

export default config;
```

## Global Theme Variables

```css
/* globals.css - Architectural Design System Foundation */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Architectural CSS Custom Properties */
@layer base {
  :root {
    /* Brutalist Color System - Light Mode Architecture */
    --background: 0 0% 98%;          /* off-white */
    --foreground: 0 0% 10.2%;        /* off-black */
    --muted: 220 14% 96%;            /* light-gray */
    --muted-foreground: 220 9% 46%;  /* warm-gray */
    --border: 220 14% 96%;           /* light-gray */
    --input: 0 0% 98%;               /* off-white */
    --ring: 212 12% 47%;             /* primary */
    --primary: 212 12% 47%;          /* architectural primary */
    --primary-foreground: 0 0% 98%;  /* off-white */
    --secondary: 220 14% 96%;        /* light-gray */
    --secondary-foreground: 0 0% 10.2%; /* off-black */

    /* Architectural spacing variables */
    --radius: 0.5rem;                /* 8px base radius */
    --section-spacing: 6rem;         /* 96px systematic spacing */
    --component-spacing: 2rem;       /* 32px component separation */

    /* Typography architectural variables */
    --font-feature-settings: "cv01", "cv02", "cv03", "cv04", "cv05", "cv06", "cv09", "cv10", "cv11";
  }

  .dark {
    /* Dark Mode Architectural Inversion */
    --background: 0 0% 10.2%;        /* off-black */
    --foreground: 0 0% 98%;          /* off-white */
    --muted: 0 0% 20%;               /* dark muted */
    --muted-foreground: 220 9% 46%;  /* warm-gray */
    --border: 0 0% 20%;              /* dark border */
    --input: 0 0% 15%;               /* dark input */
    --ring: 212 12% 47%;             /* primary (consistent) */
    --primary: 212 12% 47%;          /* primary (consistent) */
    --primary-foreground: 0 0% 98%;  /* off-white */
    --secondary: 0 0% 15%;           /* dark secondary */
    --secondary-foreground: 0 0% 98%; /* off-white */
  }
}

/* Base architectural styles */
@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    /* Inter font architectural features */
    font-feature-settings: var(--font-feature-settings);
  }

  /* Architectural typography hierarchy */
  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-tight;
  }

  /* Mathematical line height system */
  .text-mega { line-height: 0.9; }
  .text-hero { line-height: 1.1; }
  .text-display { line-height: 1.2; }
}

/* Architectural component styles */
@layer components {
  /* Grid-based section architecture */
  .architectural-section {
    @apply py-24 px-4;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Z-pattern layout implementation */
  .z-pattern-hero {
    @apply grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh];
  }

  .z-pattern-content {
    @apply grid grid-cols-1 md:grid-cols-2 gap-8 items-start;
  }

  /* Brutalist button architecture */
  .btn-brutalist {
    @apply inline-flex items-center justify-center px-6 py-3 text-base font-medium;
    @apply border-2 border-transparent transition-all duration-200;
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary;
    @apply focus-visible:ring-offset-2 focus-visible:ring-offset-background;
    min-height: 44px; /* Architectural touch target */
  }

  .btn-primary {
    @apply btn-brutalist bg-primary text-primary-foreground;
    @apply hover:bg-primary/90 active:bg-primary-dark;
  }

  .btn-outline {
    @apply btn-brutalist border-primary text-primary;
    @apply hover:bg-primary/5 active:bg-primary/10;
  }

  /* Mathematical spacing utilities */
  .space-architectural > * + * {
    margin-top: var(--component-spacing);
  }

  /* Performance-optimized animation */
  .fade-in {
    animation: fadeIn 0.3s ease-out forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(1rem); }
    to { opacity: 1; transform: translateY(0); }
  }
}

/* Architectural utilities */
@layer utilities {
  /* Hide scrollbar while maintaining functionality */
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Mathematical precision utilities */
  .aspect-golden {
    aspect-ratio: 1.618;
  }

  .aspect-silver {
    aspect-ratio: 1.414;
  }

  /* Architectural focus visible utilities */
  .focus-architectural {
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary;
    @apply focus-visible:ring-offset-2 focus-visible:ring-offset-background;
  }
}
```
