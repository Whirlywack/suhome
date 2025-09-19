import React from 'react'
import { cn } from '@/lib/utils'

// Typography component interfaces following architectural precision
interface HeadingProps {
  children: React.ReactNode
  className?: string
  variant?: 'mega' | 'hero' | 'display' | 'h1' | 'h2' | 'h3' | 'h4'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

interface TextProps {
  children: React.ReactNode
  className?: string
  variant?: 'body' | 'large' | 'small' | 'muted'
  as?: 'p' | 'span' | 'div'
}

// Heading component with architectural typography hierarchy
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { children, className, variant = 'h1', as: Component = 'h1', ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          // Base heading styles - architectural foundation
          'font-display tracking-tight',
          // Variant styles - beautiful visual hierarchy using semantic tokens
          {
            'text-mega font-extralight leading-none': variant === 'mega',
            'text-hero font-bold leading-tight': variant === 'hero',
            'text-display font-semibold leading-tight': variant === 'display',
            'text-4xl font-bold leading-tight': variant === 'h1', // Maps to semantic 4xl
            'text-3xl font-semibold leading-tight': variant === 'h2', // Maps to semantic 3xl
            'text-2xl font-semibold leading-tight': variant === 'h3', // Maps to semantic 2xl
            'text-xl font-medium leading-tight': variant === 'h4', // Maps to semantic xl
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

// Text component with mathematical precision
export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { children, className, variant = 'body', as: Component = 'p', ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className={cn(
          // Base text styles - Inter font with architectural features
          'font-sans',
          // Variant styles - systematic text hierarchy
          {
            'text-base leading-relaxed': variant === 'body',
            'text-lg leading-relaxed': variant === 'large',
            'text-sm leading-normal': variant === 'small',
            'text-sm text-muted-foreground leading-normal': variant === 'muted',
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'

const Typography = { Heading, Text }
export default Typography
