# Typography Scaling System

## Overview
We keep typography in one place: CSS custom properties declare the scale, a root font-size ladder provides the large-screen lift, and Tailwind utilities read those tokens. That mirrors the proportions of production while keeping mobile and accessibility behaviour intact.

## Root Tokens (`app/globals.css`)
```css
:root {
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  --font-size-display: clamp(1.5rem, 0.75rem + 2vw, 3rem);
  --font-size-hero: clamp(2.25rem, 1rem + 4vw, 5rem);
  --font-size-mega: clamp(3.5rem, 1rem + 10vw, 8rem);

  --line-height-body: 1.65;
  --line-height-tight: 1.15;
  --line-height-snug: 1.2;
  --line-height-dense: 1.05;

  --letter-spacing-tight: -0.015em;
  --letter-spacing-display: -0.02em;
  --letter-spacing-mega: -0.05em;
}
```
- Media queries lift `:root` from 100 % up to 137.5 % (`24rem` → `160rem`), so tokens inherit the same desktop scale as production (16 px → 21–22 px without redefining components).
- The hero tiers now carry steeper `vw` slopes, capped at the same `8rem` ceiling the container queries delivered, so the “Superoptimised” heading lands around 168 px at ≥1440 px.

## Tailwind Mapping (`tailwind.config.ts`)
```ts
fontSize: {
  xs: ['var(--font-size-xs)', { lineHeight: '1.4' }],
  sm: ['var(--font-size-sm)', { lineHeight: '1.45' }],
  base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-body)' }],
  lg: ['var(--font-size-lg)', { lineHeight: '1.6' }],
  xl: ['var(--font-size-xl)', { lineHeight: '1.5' }],
  '2xl': ['var(--font-size-2xl)', { lineHeight: '1.4' }],
  '3xl': ['var(--font-size-3xl)', { lineHeight: '1.3' }],
  '4xl': ['var(--font-size-4xl)', { lineHeight: '1.2' }],
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
    { lineHeight: '0.95', letterSpacing: 'var(--letter-spacing-mega)' },
  ],
}
```
- Base utilities mirror production pixel sizes once the root ladder kicks in.
- Display variants reuse the clamp tokens, so both the hero (`variant="hero"`) and mega headline (`variant="mega"`) align with the live site without extra CSS.

## Testing Checklist
- Mobile (320–414 px): hero locks to 3.5 rem (≈56 px) and avoids clipping.
- Tablet (~768 px): root ladder lifts to 118.75 %, hero sits around 110–120 px.
- Desktop (≥1440 px): hero hits the 8 rem (≈168 px) ceiling, header spacing matches production.
- Ultra-wide (≥2560 px): clamp cap prevents headings from exceeding 8 rem.

The system stays single-sourced—tweak the tokens and the entire page moves in sync across breakpoints.
