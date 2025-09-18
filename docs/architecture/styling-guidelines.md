# Styling Guidelines

## ⚠️ **SYSTEM UPDATED**

**This styling approach has been superseded by the new mathematically perfect design system.**

👉 **New authoritative source**: [`/design-system-architecture.md`](../../design-system-architecture.md)

---

## New Styling Approach

The frontend architecture implements a **Mathematically Perfect Brutalist Design System** through Tailwind CSS with Perfect Fifth mathematical progression and multi-screen optimization.

### Advanced Styling Principles

1. **Perfect Fifth Progression**: All spacing uses 1.5x mathematical ratio (0.25rem → 11.25rem)
2. **Multi-Screen Excellence**: 7-breakpoint responsive root font scaling (16px → 22px)
3. **Typography Harmony**: Perfect Fifth + Golden Ratio mathematical relationships
4. **HSL Design Tokens**: Theme-aware color architecture (no direct colors)
5. **Reading Optimization**: Container widths optimized for comfort on all screen sizes
6. **Accessibility First**: Respects user preferences with rem-based scaling

### Current Tailwind Configuration

⚠️ **The configuration shown previously has been completely rewritten with mathematical precision.**

**New system features**:
- **Perfect Fifth spacing progression** (0.25rem → 11.25rem in 1.5x steps)
- **Multi-screen responsive breakpoints** (7 breakpoints from mobile to 4K)
- **HSL design tokens only** (direct colors completely removed)
- **Reading-optimized containers** (mathematically determined widths)
- **Responsive root font scaling** (16px → 22px across screen sizes)

📖 **Current implementation**: See `/tailwind.config.ts` in the project root
📖 **Complete specification**: [`/design-system-architecture.md`](../../design-system-architecture.md)

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
