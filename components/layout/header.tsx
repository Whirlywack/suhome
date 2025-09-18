'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Heading } from '@/components/ui/typography'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/ui/theme-toggle'

// Desktop navigation - traditional page links
const desktopNav = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
]

// Mobile navigation - anchor-based for one-pager
const mobileNav = [
  { href: '/#about', label: 'ABOUT' },
  { href: '/#contact', label: 'CONTACT' },
]

// Header component with dual navigation behavior
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking on a link
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-2xl items-center justify-between">
        {/* Logo/Brand - architectural precision */}
        <Link href="/" className="flex items-center space-x-sm">
          <Heading
            variant="h3"
            as="h1"
            className="text-xl font-bold tracking-tight"
          >
            {SITE_CONFIG.name}
          </Heading>
        </Link>

        {/* Desktop Navigation - traditional page links */}
        <div className="hidden md:flex items-center space-x-2xl">
          <nav className="flex items-center space-x-2xl">
            {desktopNav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  // Navigation styling - uppercase, letter-spaced
                  'text-xs font-medium uppercase tracking-wider transition-colors hover:text-primary',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  'text-foreground/80 hover:text-foreground'
                )}
              >
                {item.label}
              </Link>
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
            {/* Home link for mobile */}
            <Link
              href="/"
              className={cn(
                'block text-sm font-medium uppercase tracking-wider transition-colors',
                'text-foreground/80 hover:text-foreground py-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-background'
              )}
              onClick={handleMobileNavClick}
            >
              HOME
            </Link>

            {/* Mobile anchor navigation */}
            {mobileNav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block text-sm font-medium uppercase tracking-wider transition-colors',
                  'text-foreground/80 hover:text-foreground py-sm',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                )}
                onClick={handleMobileNavClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
