'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

// Button interface following brutalist design system
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

// Brutalist button component with Framer Motion and architectural precision
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        disabled={disabled}
        className={cn(
          // Base brutalist button architecture
          'border-2 border-transparent transition-all duration-200 min-h-[44px]',
          'inline-flex items-center justify-center font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          // Variant styles - systematic visual hierarchy
          {
            'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary-dark':
              variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80':
              variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10':
              variant === 'outline',
            'text-primary hover:bg-primary/5 active:bg-primary/10':
              variant === 'ghost',
          },
          // Size variations - Perfect Fifth spacing progression
          {
            'px-lg py-sm text-sm min-h-2xl': size === 'sm', // Perfect Fifth: 1rem, 0.5rem
            'px-xl py-md text-base min-h-3xl': size === 'md', // Perfect Fifth: 1.5rem, 0.75rem
            'px-2xl py-lg text-lg min-h-4xl': size === 'lg', // Perfect Fifth: 2.25rem, 1rem
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
