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
    let scrollListener: (() => void) | null = null

    const handleContactNavigation = () => {
      // Set up scroll listener to trigger animation when we reach contact section
      const handleScroll = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect()
          const isVisible = rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0

          if (isVisible) {
            // Add small delay so eyes can focus on the button first
            setTimeout(() => {
              scrambleText()
            }, 200) // 0.2 seconds delay

            // Clean up scroll listener
            if (scrollListener) {
              window.removeEventListener('scroll', scrollListener)
              scrollListener = null
            }
          }
        }
      }

      scrollListener = handleScroll
      // Add scroll listener immediately
      window.addEventListener('scroll', handleScroll, { passive: true })

      // Fallback: trigger animation after expected scroll duration if scroll detection fails
      setTimeout(() => {
        if (scrollListener) {
          // If listener still exists, scroll detection didn't work, so trigger animation manually
          scrambleText()

          // Clean up listener
          window.removeEventListener('scroll', scrollListener)
          scrollListener = null
        }
      }, 1000) // Fallback after 1 second
    }

    window.addEventListener('contactNavClicked', handleContactNavigation)

    return () => {
      window.removeEventListener('contactNavClicked', handleContactNavigation)
      // Clean up any remaining scroll listener
      if (scrollListener) {
        window.removeEventListener('scroll', scrollListener)
      }
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