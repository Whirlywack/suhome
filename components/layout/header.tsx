'use client'

// useState removed - no longer needed for mobile menu state
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'
// cn import removed - no longer needed after hamburger menu removal
import ThemeToggle from '@/components/ui/theme-toggle'

// Navigation - scroll-based for single page
const navigation = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
]

// Header component with smooth scroll navigation
export function Header() {
  // Mobile menu state removed - using minimal scroll-to-top approach

  // Logo click animation handler
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Smooth scroll to section
  const handleScrollToSection = (href: string) => {
    // Trigger contact animation if clicking contact
    if (href === '#contact') {
      window.dispatchEvent(new CustomEvent('contactNavClicked'))
    }

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
        {/* Logo/Brand - architectural precision with Framer Motion */}
        <motion.button
          onClick={handleLogoClick}
          className="flex items-center space-x-sm cursor-pointer"
          whileTap={{ scale: 0.4 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div
            className="text-lg font-bold"
            style={{ letterSpacing: '-0.01em' }}
          >
            {SITE_CONFIG.name}
          </div>
        </motion.button>

        {/* Desktop Navigation - smooth scroll */}
        <div className="hidden md:flex items-center" style={{ gap: '3.375rem' }}>
          <nav className="flex items-center" style={{ gap: '3.375rem' }}>
            {navigation.map(item => {
              // Set different scale values based on target
              const getScale = () => {
                if (item.href === '#home') return 0.4
                if (item.href === '#contact') return 0.5
                return 0.7 // about and others
              }

              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleScrollToSection(item.href)}
                  className="text-sm font-medium uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  style={{ letterSpacing: '0.1em' }}
                  whileTap={{ scale: getScale() }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {item.label}
                </motion.button>
              )
            })}
          </nav>

          {/* Theme toggle for desktop */}
          <ThemeToggle className="ml-md" />
        </div>

        {/* Mobile Navigation - Minimal approach with just theme toggle */}
        <div className="md:hidden">
          {/* Theme toggle for mobile */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Panel removed - using minimal scroll-to-top approach */}
    </header>
  )
}

export default Header
