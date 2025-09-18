'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ContactButtonProps {
  className?: string
}

export const ContactButton = ({ className = '' }: ContactButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayText, setDisplayText] = useState('')

  const targetText = 'connect@superoptimised.com'
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789@.'

  // Initialize with random characters on component mount
  useEffect(() => {
    const randomText = targetText
      .split('')
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join('')
    setDisplayText(randomText)
  }, [])

  // Enhanced scramble animation - progressive decryption effect
  const scrambleText = () => {
    setIsAnimating(true)
    let iteration = 0
    const scramblePhase = 4 // Frames of full scrambling
    const totalIterations = scramblePhase + targetText.length // 4 + 26 = 30 total

    const interval = setInterval(() => {
      setDisplayText((current) =>
        current
          .split('')
          .map((char, index) => {
            // Phase 1: Full scrambling for first few frames
            if (iteration < scramblePhase) {
              return chars[Math.floor(Math.random() * chars.length)]
            }

            // Phase 2: Progressive reveal from left to right
            const revealedCount = iteration - scramblePhase + 1
            if (index < revealedCount) {
              return targetText[index] // Show correct character
            }

            // Still scrambling unrevealed characters
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
    }, 20) // 20ms per frame for 0.6 second animation
  }

  // Trigger animation when contact section becomes visible
  useEffect(() => {
    let hasTriggered = false

    const handleScroll = () => {
      if (hasTriggered) return

      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0

        if (isVisible) {
          hasTriggered = true

          // Add small delay so eyes can focus on the button first
          setTimeout(() => {
            scrambleText()
          }, 200) // 0.2 seconds delay

          // Clean up scroll listener
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }

    // Add scroll listener immediately
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Also check immediately in case section is already visible
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
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