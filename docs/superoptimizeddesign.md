# SuperOptimised Design System

## Overview

This document outlines the complete design system for the SuperOptimised web application, including colors, typography, spacing, components, and design patterns. The system follows a **Brutalist Design Philosophy** with a strict 5-color palette and dramatic typography ratios.

## Brand Colors

### Core 5-Color Brutalist System (Active)

This is the **primary and only color system** used throughout the application:

| Color | Hex Code | HSL | RGB | Usage |
|-------|----------|-----|-----|-------|
| **Off-Black** | `#1a1a1a` | `0 0% 10.2%` | `26, 26, 26` | Primary text, dark mode background |
| **Off-White** | `#fafafa` | `0 0% 98%` | `250, 250, 250` | Light mode background, dark mode text |
| **Warm Gray** | `#6b7280` | `220 9% 46%` | `107, 114, 128` | Secondary text, muted content |
| **Light Gray** | `#f3f4f6` | `220 14% 96%` | `243, 244, 246` | Borders, subtle backgrounds |
| **Primary** | `#64748b` | `212 12% 47%` | `100, 116, 139` | Interactive elements, links, focus states |

### Primary Color Variations (Only Allowed Variations)

| Variation | Hex Code | Usage |
|-----------|----------|-------|
| **Primary Light** | `#94a3b8` | Hover states, disabled elements |
| **Primary Dark** | `#475569` | Active states, pressed buttons |

### shadcn/ui Compatibility Colors

These colors map directly to the 5-color system for component library compatibility:

| Token | Maps To | Usage |
|-------|---------|-------|
| `background` | `off-white` | Component backgrounds |
| `foreground` | `off-black` | Component text |
| `muted` | `light-gray` | Muted backgrounds |
| `muted-foreground` | `warm-gray` | Muted text |
| `border` | `light-gray` | Component borders |
| `input` | `off-white` | Input backgrounds |
| `ring` | `primary` | Focus rings |

**Design Rule**: Stick strictly to the 5-color system above. The design system has been simplified to use only these core colors for maximum consistency and brutalist aesthetic.

## Typography

### Font Families

| Font | Purpose | CSS Declaration |
|------|---------|----------------|
| **Inter** | Primary sans-serif font | `font-family: ["Inter var", "Inter", "system-ui", "sans-serif"]` |
| **JetBrains Mono** | Monospace/code font | `font-family: ["JetBrains Mono", "monospace"]` |
| **Lexend** | Display text | `font-family: ["Lexend", "sans-serif"]` |
| **Figtree** | Alternative sans-serif | `font-family: ["Figtree", "sans-serif"]` |
| **Crimson Text** | Serif font | `font-family: ['"Crimson Text"', "serif"]` |

### Typography Scale (Brutalist System)

| Size | Font Size | Line Height | Font Weight | Letter Spacing | Usage |
|------|-----------|-------------|-------------|----------------|-------|
| **mega** | `clamp(4rem, 8vw, 7.5rem)` | `0.9` | `800` | `-0.02em` | Largest headings |
| **hero** | `clamp(3rem, 6vw, 5rem)` | `1.1` | `700` | `-0.01em` | Hero sections |
| **display** | `clamp(1.5rem, 3vw, 2.5rem)` | `1.2` | `600` | `normal` | Display text |
| **lg** | `1.25rem` | `1.4` | `500` | `normal` | Large text |
| **base** | `1rem` | `1.6` | `400` | `normal` | Body text |
| **sm** | `0.875rem` | `1.5` | `400` | `normal` | Small text |
| **xs** | `0.75rem` | `1.4` | `400` | `normal` | Captions |

### Legacy Typography Scale

| Element | Font Size | Line Height | Font Weight | Usage |
|---------|-----------|-------------|-------------|-------|
| **h1** | `2.25rem` | `1.2` | `700` | Page headings |
| **h2** | `1.875rem` | `1.3` | `600` | Section headings |
| **h3** | `1.5rem` | `1.4` | `600` | Subsection headings |
| **h4** | `1.25rem` | `1.4` | `500` | Component headings |
| **body** | `1rem` | `1.6` | `400` | Body text |
| **small** | `0.875rem` | `1.5` | `400` | Small text |
| **code** | `0.875rem` | `1.4` | `400` | Code blocks |

### Font Features

Inter font is configured with advanced OpenType features:
```css
font-feature-settings: "cv01", "cv02", "cv03", "cv04", "cv05", "cv06", "cv09", "cv10", "cv11";
```

## Spacing System

### Brutalist Spacing Scale

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| **xs** | `0.5rem` | `8px` | Inner component spacing |
| **sm** | `1rem` | `16px` | Related element spacing |
| **md** | `2rem` | `32px` | Component separation |
| **lg** | `3rem` | `48px` | Section boundaries |
| **xl** | `4rem` | `64px` | Major section spacing |
| **2xl** | `6rem` | `96px` | Page section divisions |

### Legacy Spacing

| Token | Value | Usage |
|-------|-------|-------|
| **section** | `3rem` | Between major sections |
| **component** | `2rem` | Between components |
| **paragraph** | `1rem` | Between paragraphs |
| **list** | `0.5rem` | Between list items |

### Layout Constraints

- **Max Width**: `1200px` for main content areas
- **Reading Width**: `65ch` for optimal text readability
- **Grid Gap**: `24px` for layout grids

## Border Radius

| Size | Value | Usage |
|------|-------|-------|
| **lg** | `var(--radius)` | Large components (cards, modals) |
| **md** | `calc(var(--radius) - 2px)` | Medium components (buttons) |
| **sm** | `calc(var(--radius) - 4px)` | Small components (inputs) |

Default radius value: `0.5rem` (8px)

## Responsive Breakpoints

| Breakpoint | Value | Device Target |
|------------|-------|---------------|
| **mobile** | `320px` | Small mobile devices |
| **tablet** | `768px` | Tablets and large mobile |
| **desktop** | `1024px` | Desktop screens |
| **wide** | `1440px` | Large desktop screens |

### Container Settings

- **Center**: `true`
- **Padding**: `2rem`
- **Max Width (2xl)**: `1400px`

## Component Patterns

### Button System

#### Button Variants

| Variant | Background | Text Color | Border | Hover State |
|---------|------------|------------|---------|-------------|
| **primary** | `bg-primary` | `text-primary-foreground` | None | `bg-primary/90` |
| **outline** | `bg-transparent` | `text-primary` | `border-2 border-transparent` | `bg-primary/[0.05]` |
| **ghost** | `bg-transparent` | `text-primary` | None | `bg-primary/10` |
| **link** | `bg-transparent` | `text-primary` | None | `text-primary/80` |

#### Button Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| **sm** | `h-9` | `px-3` | `text-sm` |
| **md** | `h-11` | `px-4` | `text-base` |
| **lg** | `h-12` | `px-6` | `text-lg` |

### Input System

#### Input Variants

| Variant | Background | Border | Focus State |
|---------|------------|---------|-------------|
| **default** | `bg-off-white` | `border border-light-gray` | `border-primary ring-primary/20` |
| **filled** | `bg-light-gray` | `border-0` | `bg-off-white ring-primary/20` |

#### Input Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| **sm** | `h-9` | `px-3` | `text-sm` |
| **md** | `h-11` | `px-4` | `text-base` |
| **lg** | `h-12` | `px-4` | `text-lg` |

### Typography Components

#### Available Components

- `H1`, `H2`, `H3`, `H4` - Semantic heading components
- `Paragraph` - Body text with variants (default, muted, small)
- `InlineCode` - Inline code styling
- `Link` - Link component with variants and external link support
- `CodeBlock` - Code blocks with language support
- `MonoText` - Monospace text component

## Accessibility

### Focus States

All interactive elements use consistent focus styling:
```css
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
```

### Touch Targets

Minimum touch target size: `44px × 44px` (`min-h-[44px] min-w-[44px]`)

### Color Contrast

The design system ensures WCAG AA compliance:
- **Off-black on Off-white**: High contrast for primary text
- **Warm gray**: Used for secondary text with adequate contrast
- **Primary color**: Tested for accessibility in all contexts

## Dark Mode Support

The system includes comprehensive dark mode support with automatic theme switching:

### Dark Mode Color Mapping

| Light Mode | Dark Mode | Usage |
|------------|-----------|-------|
| `off-white` | `off-black` | Background |
| `off-black` | `off-white` | Text |
| `light-gray` | `warm-gray/20` | Borders |
| `warm-gray` | `warm-gray` | Secondary text |

### Theme Variables

CSS custom properties automatically switch between light and dark modes:
```css
.dark {
  --background: 0 0% 10.2%;
  --foreground: 0 0% 98%;
  --muted: 0 0% 20%;
  --border: 0 0% 20%;
}
```

## Animations & Transitions

### Standard Transitions

- **Duration**: `200ms` for most interactions
- **Easing**: Default browser easing
- **Properties**: `transition-all duration-200`

### Custom Animations

| Animation | Duration | Usage |
|-----------|----------|-------|
| **bounce-fast** | `0.5s` | Loading indicators |
| **accordion-down/up** | `0.2s` | Accordion animations |
| **meteor** | `5s` | Decorative effects |
| **shimmer** | `4s` | Loading states |
| **wave** | `1.5s` | Interactive feedback |

## Shadow System

The system uses minimal shadows following the brutalist philosophy:

| Level | Value | Usage |
|-------|-------|-------|
| **sm** | `hover:shadow-sm` | Subtle hover effects |
| **md** | `shadow-md` | Card components |
| **lg** | `shadow-lg` | Modals, dropdowns |
| **xl** | `shadow-xl` | Elevated components |

## Grid System

### Layout Grid

- **Default gap**: `24px`
- **Responsive**: Adapts to breakpoints
- **Max width**: `1200px` for main content

### Component Grid

Used for responsive component layouts with automatic sizing based on content and screen size.

## Usage Guidelines

### Do's

1. **Stick to the 5-color palette** for primary design elements
2. **Use dramatic typography ratios** for visual hierarchy
3. **Maintain consistent spacing** using the defined scale
4. **Ensure accessibility** with proper focus states and contrast
5. **Follow component patterns** for consistent user experience

### Don'ts

1. **Don't introduce new colors** outside the defined palette
2. **Don't use small, incremental font sizes** - embrace the dramatic scale
3. **Don't ignore dark mode** - ensure all designs work in both themes
4. **Don't compromise accessibility** for aesthetic preferences
5. **Don't create custom components** without following established patterns

## Implementation

### CSS Variables

The system uses CSS custom properties for theme consistency:
```css
:root {
  --off-black: #1a1a1a;
  --off-white: #fafafa;
  --warm-gray: #6b7280;
  --light-gray: #f3f4f6;
  --primary: #64748b;
}
```

### Tailwind Configuration

The design system is implemented through Tailwind CSS with custom configuration in `tailwind.config.ts`.

### Component Library

Reusable components are available in `src/components/ui/` following the established patterns and specifications outlined in this document.

---

*This design system serves as the single source of truth for all visual and interaction design decisions in the SuperOptimised application.*