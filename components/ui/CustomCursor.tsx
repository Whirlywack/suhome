'use client'

import { useEffect, useState } from 'react'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      const isTouchDevice =
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches
      setIsMobile(isTouchDevice || hasCoarsePointer)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Check if mouse is already in viewport
    setIsVisible(true)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Don't render the cursor at all on mobile devices
  if (isMobile) return null

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom dot cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      >
        <div
          className="w-3 h-3 rounded-full bg-foreground"
          style={{
            boxShadow: '0 0 0 1px hsl(var(--background))',
          }}
        />
      </div>
    </>
  )
}

export default CustomCursor
