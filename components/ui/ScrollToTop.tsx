'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled more than 300px
      setIsVisible(window.scrollY > 300)
    }

    // Add passive scroll listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={cn(
            'fixed z-40 flex items-center justify-center',
            'text-foreground hover:text-primary',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            'transition-colors duration-200'
          )}
          style={{
            // Perfect Fifth positioning system - pure minimalist positioning
            bottom: '1.5rem', // xl spacing (Perfect Fifth)
            right: '1.5rem',   // xl spacing (Perfect Fifth)
            // Just enough space for touch target around the arrow
            width: '2.5rem',   // 40px - minimal touch target
            height: '2.5rem'   // 40px - square touch area
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25
          }}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          {/* Geometric line art arrow - minimal, architectural */}
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
          >
            {/* Geometric upward arrow - clean lines */}
            <path d="M9 1 L15 7 M9 1 L3 7 M9 1 L9 11" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop