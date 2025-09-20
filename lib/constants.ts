/**
 * Application-wide constants
 * Centralizes magic numbers and configuration for better maintainability
 */

// Site configuration
export const SITE_CONFIG = {
  name: 'Superoptimised',
  description: 'Passionate about AI products and beautiful UI/UX design',
  url: 'https://superoptimised.com',
  email: 'connect@superoptimised.com',
  ogImage: '/og.jpg',
  links: {
    twitter: 'https://twitter.com/superoptimised',
    github: 'https://github.com/superoptimised',
  },
}

// Navigation items
export const NAV_ITEMS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

// Animation constants
export const ANIMATION = {
  // Scale values for interactive elements
  SCALE: {
    LOGO_CLICK: 0.4,
    NAV_ITEM_CLICK: 0.7,
    HOME_NAV_CLICK: 0.4,
    CONTACT_NAV_CLICK: 0.5,
  },
  // Duration values in seconds
  DURATION: {
    QUICK: 0.2,
    STANDARD: 0.6,
  },
  // Easing functions
  EASING: {
    DEFAULT: 'easeInOut',
  },
} as const

// Layout constants
export const LAYOUT = {
  // Navigation height
  NAV_HEIGHT: '4.5rem', // 72px
  // Container widths
  MAX_CONTENT_WIDTH: '42rem', // 672px
  // Spacing values
  NAV_GAP: '3.375rem', // 54px - Based on design system Perfect Fifth
} as const

// Typography constants
export const TYPOGRAPHY = {
  // Letter spacing values
  LETTER_SPACING: {
    HERO_DESKTOP: '-0.05em',
    HERO_TABLET: '-0.04em',
    HERO_MOBILE: '-0.03em',
    DEFAULT: '-0.01em',
  },
  // Line height values
  LINE_HEIGHT: {
    HERO_DESKTOP: 0.85,
    HERO_TABLET: 0.87,
    HERO_MOBILE: 0.9,
  },
} as const

// Breakpoints (matching Tailwind config but as constants for JS usage)
export const BREAKPOINTS = {
  XS: 320,
  MOBILE_MD: 384,
  MOBILE_LG: 368,
  SM: 576,
  MD: 768,
  LG: 1024,
  XL: 1440,
  '2XL': 1920,
  '4K': 2560,
} as const

// Z-index values for layering
export const Z_INDEX = {
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  POPOVER: 60,
  TOOLTIP: 70,
  CURSOR: 9999,
} as const

// Contact button animation constants
export const CONTACT_BUTTON = {
  CHARS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
  SCRAMBLE_INTERVAL: 50, // milliseconds
  TARGET_TEXT: 'connect@superoptimised.com',
} as const