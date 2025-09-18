'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ContactButtonProps {
  className?: string
}

export const ContactButton = ({ className = '' }: ContactButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayText, setDisplayText] = useState('connect@superoptimised.com')

  const targetText = 'connect@superoptimised.com'
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789@.'

  // Scramble animation function - all characters change simultaneously
  const scrambleText = () => {
    setIsAnimating(true)
    let iteration = 0
    const totalIterations = 15

    const interval = setInterval(() => {
      setDisplayText((current) =>
        current
          .split('')
          .map((char, index) => {
            // All characters change simultaneously until final reveal
            if (iteration === totalIterations - 1) {
              return targetText[index]
            }
            // Show random characters for all positions
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      iteration++

      if (iteration >= totalIterations) {
        clearInterval(interval)
        setDisplayText(targetText)
        setIsAnimating(false)
      }
    }, 60)
  }

  // Listen for contact navigation clicks
  useEffect(() => {
    const handleContactNavigation = () => {
      scrambleText()
    }

    window.addEventListener('contactNavClicked', handleContactNavigation)

    return () => {
      window.removeEventListener('contactNavClicked', handleContactNavigation)
    }
  }, [])

  return (
    <motion.a
      href="mailto:connect@superoptimised.com"
      className={`inline-block font-mono text-background hover:text-background/80 hover:bg-background/10 transition-all duration-200 ${className}`}
      style={{
        fontSize: '1.125rem',
        fontWeight: '500',
        textDecoration: 'none',
        padding: '1rem 1.5rem',
        border: '1px solid hsla(var(--background) / 0.3)',
        minWidth: '280px',
        textAlign: 'center'
      }}
      whileTap={{ scale: 0.98 }}
      data-animating={isAnimating}
    >
      <span>
        {displayText}
      </span>
    </motion.a>
  )
}

export default ContactButton