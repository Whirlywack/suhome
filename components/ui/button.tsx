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
export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, className, variant = 'primary', size = 'md', disabled = false, ...props }, ref) => {
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
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary-dark': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10': variant === 'outline',
          'text-primary hover:bg-primary/5 active:bg-primary/10': variant === 'ghost',
        },
        // Size variations - mathematical 8px base unit progression
        {
          'px-4 py-2 text-sm min-h-[36px]': size === 'sm',   // 8px * 4.5 = architectural precision
          'px-6 py-3 text-base min-h-[44px]': size === 'md', // 8px * 5.5 = systematic sizing
          'px-8 py-4 text-lg min-h-[52px]': size === 'lg',   // 8px * 6.5 = perfect spacing
        },
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button