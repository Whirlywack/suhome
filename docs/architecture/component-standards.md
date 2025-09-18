# Component Standards

## Component Template

```typescript
import React from 'react';
import { cn } from '@/lib/utils';

// Visual Principle: Every component follows systematic typing for beautiful results
interface ComponentNameProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  // Mathematical precision in prop definitions for perfect spacing
}

// Beautiful Pattern: Consistent component structure for visual excellence
export const ComponentName = React.forwardRef<
  HTMLDivElement,
  ComponentNameProps
>(({ children, className, variant = 'default', size = 'md', ...props }, ref) => {
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
          'text-sm min-h-[2rem]': size === 'sm',   // Perfect Fifth: small scale
          'text-base min-h-[2.5rem]': size === 'md', // Perfect Fifth: base scale
          'text-lg min-h-[3rem]': size === 'lg',   // Perfect Fifth: large scale
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';

export default ComponentName;
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
- **Utilities**: Tailwind utility classes following mathematical 8px base system
- **Custom**: BEM methodology when needed (`hero__title--primary`)
- **Components**: Scoped to component name (`hero-section`, `product-card`)
