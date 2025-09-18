# Component Standards

## Component Template

```typescript
import React from 'react'
import { cn } from '@/lib/utils'

// Visual Principle: Every component follows systematic typing for beautiful results
interface ComponentNameProps {
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  // Mathematical precision in prop definitions for perfect spacing
}

// Beautiful Pattern: Consistent component structure for visual excellence
export const ComponentName = React.forwardRef<
  HTMLDivElement,
  ComponentNameProps
>(
  (
    { children, className, variant = 'default', size = 'md', ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base visual styles - beautiful foundation
          'relative',
          // Mathematical spacing using Perfect Fifth progression for harmonious alignment
          'p-lg', // 1rem - Perfect base unit spacing
          // Variant styles - beautiful visual organization
          {
            'bg-primary text-primary-foreground': variant === 'primary',
            'bg-secondary text-secondary-foreground': variant === 'secondary',
            'bg-background text-foreground': variant === 'default',
          },
          // Size variations - Perfect Fifth mathematical progression for visual harmony
          {
            'text-sm min-h-[2rem]': size === 'sm', // Perfect Fifth: small scale
            'text-base min-h-[2.5rem]': size === 'md', // Perfect Fifth: base scale
            'text-lg min-h-[3rem]': size === 'lg', // Perfect Fifth: large scale
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ComponentName.displayName = 'ComponentName'

export default ComponentName
```

## Naming Conventions

**Files and Directories:**

- **Components**: PascalCase for component files (`HeroSection.tsx`, `ProductCard.tsx`)
- **Directories**: kebab-case for folders (`ui-components/`, `page-sections/`)
- **Utilities**: camelCase for utility files (`mathUtils.ts`, `spacingHelpers.ts`)
- **Constants**: UPPER_SNAKE_CASE for constant values (`VISUAL_SPACING`, `GRID_BREAKPOINTS`)

**Component Architecture:**

- **Props interfaces**: ComponentNameProps pattern
- **Variants**: Systematic naming (`primary`, `secondary`, `outline`, `ghost`)
- **Sizes**: Mathematical progression (`sm`, `md`, `lg`, `xl`)
- **State**: Descriptive prefixes (`isLoading`, `hasError`, `isVisible`)

**CSS Classes:**

- **Utilities**: Tailwind utility classes following Perfect Fifth mathematical progression (see [`/design-system-architecture.md`](../../design-system-architecture.md))
- **Custom**: BEM methodology when needed (`hero__title--primary`)
- **Components**: Scoped to component name (`hero-section`, `product-card`)

## Design System Reference

**All spacing and typography examples follow the Perfect Fifth mathematical progression.**

📖 **Complete Design System**: [`/design-system-architecture.md`](../../design-system-architecture.md)

### Spacing Examples (Perfect Fifth Progression)

```typescript
// Perfect Fifth spacing system
<div className="p-xs">     {/* 0.25rem */}
<div className="p-sm">     {/* 0.5rem */}
<div className="p-md">     {/* 0.75rem */}
<div className="p-lg">     {/* 1rem */}
<div className="p-xl">     {/* 1.5rem */}
<div className="p-2xl">    {/* 2.25rem */}
<div className="p-3xl">    {/* 3.375rem */}
<div className="p-4xl">    {/* 5rem */}
<div className="p-5xl">    {/* 7.5rem */}
<div className="p-6xl">    {/* 11.25rem */}
```

### Typography Examples (Perfect Fifth + Golden Ratio)

```typescript
// Mathematical typography scale
<h1 className="text-5xl">  {/* 3rem - Hero headings */}
<h2 className="text-3xl">  {/* 1.875rem - Major headings */}
<h3 className="text-2xl">  {/* 1.5rem - Section headings */}
<p className="text-base">  {/* 1rem - Body text */}
<small className="text-sm">{/* 0.875rem - Small text */}
```
