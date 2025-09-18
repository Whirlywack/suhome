'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/ui/theme-toggle'

// Navigation - scroll-based for single page
const navigation = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
]

// Header component with smooth scroll navigation
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Smooth scroll to section
  const handleScrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between" style={{ height: '4.5rem' }}>
        {/* Logo/Brand - architectural precision */}
        <Link href="/" className="flex items-center space-x-sm">
          <div
            className="text-lg font-bold"
            style={{ letterSpacing: '-0.01em' }}
          >
            {SITE_CONFIG.name}
          </div>
        </Link>

        {/* Desktop Navigation - smooth scroll */}
        <div className="hidden md:flex items-center" style={{ gap: '3.375rem' }}>
          <nav className="flex items-center" style={{ gap: '3.375rem' }}>
            {navigation.map(item => (
              <button
                key={item.href}
                onClick={() => handleScrollToSection(item.href)}
                className="text-sm font-medium uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                style={{ letterSpacing: '0.1em' }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme toggle for desktop */}
          <ThemeToggle className="ml-md" />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-md">
          {/* Theme toggle for mobile */}
          <ThemeToggle />

          {/* Hamburger menu button */}
          <button
            type="button"
            className={cn(
              'inline-flex items-center justify-center p-sm rounded-md',
              'text-foreground/80 hover:text-foreground hover:bg-accent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              'focus-visible:ring-offset-2 focus-visible:ring-offset-background'
            )}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={cn('h-lg w-lg transition-transform', {
                'rotate-45': isMobileMenuOpen,
              })}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
        >
          <div className="container py-lg space-y-md">
            {/* Mobile smooth scroll navigation */}
            {navigation.map(item => (
              <button
                key={item.href}
                onClick={() => handleScrollToSection(item.href)}
                className={cn(
                  'block text-sm font-medium uppercase tracking-wider transition-colors w-full text-left',
                  'text-foreground/80 hover:text-foreground py-sm cursor-pointer',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
