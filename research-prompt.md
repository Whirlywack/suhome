# Deep Research Prompt: Scroll Bouncing Conflict with Framer Motion

## Problem Description

I'm experiencing persistent scroll bouncing at page boundaries (top/bottom) in a Next.js 14.2.25 application that uses Framer Motion for smooth scroll navigation. The bouncing occurs even when manually dragging the scrollbar directly, suggesting a deep browser/JavaScript conflict that persists despite multiple fixes.

**Critical Issue**: When scrolling up and reaching the top, continued scrolling automatically bounces back down. When scrolling down and reaching the bottom, it bounces back up. This happens even with direct scrollbar manipulation, not just programmatic scrolling.

## Current Implementation

### Technology Stack
- Next.js 14.2.25 with App Router
- React 18.3.1 with TypeScript 5.6.3
- Framer Motion 10.18.0 for smooth scroll animations
- Tailwind CSS 3.4.14
- Intersection Observer API for section detection

### Framer Motion Smooth Scroll Implementation
```typescript
// /lib/hooks/useScrollToSection.ts
import { animate } from 'framer-motion'

const navigationState = {
  lastNavigationTime: 0,
  targetSection: '',
  isNavigating: false
}

export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string) => {
    // Set navigation state BEFORE scrolling
    navigationState.lastNavigationTime = Date.now()
    navigationState.targetSection = sectionId
    navigationState.isNavigating = true

    // Store in window for global access
    if (typeof window !== 'undefined') {
      (window as any).__navState = navigationState
    }

    // Handle home section with Framer Motion
    if (sectionId === 'home') {
      animate(window.scrollY, 0, {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (value) => {
          window.scrollTo(0, Math.round(value))
        },
        onComplete: () => {
          window.scrollTo(0, 0) // Ensure exactly at top
          navigationState.isNavigating = false
        }
      })
      return
    }

    // Handle other sections
    const element = document.querySelector(`#${sectionId}`)
    if (!element) {
      navigationState.isNavigating = false
      return
    }

    const targetPosition = element.getBoundingClientRect().top + window.scrollY
    const headerOffset = 72
    const finalPosition = targetPosition - headerOffset

    animate(window.scrollY, finalPosition, {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (value) => {
        window.scrollTo(0, Math.round(value))
      },
      onComplete: () => {
        window.scrollTo(0, finalPosition)
        navigationState.isNavigating = false
      }
    })
  }, [duration, prefersReducedMotion])

  return { scrollToSection }
}
```

### Intersection Observer Implementation
```typescript
// /lib/hooks/useActiveSection.ts
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check navigation state to prevent conflicts
        const navState = (window as any).__navState
        const isRecentNavigation = navState && (Date.now() - navState.lastNavigationTime) < 700

        if (isRecentNavigation && navState.isNavigating) {
          return // Don't update during navigation
        }

        // Find most visible section
        let mostVisibleSection = activeSection
        let maxVisibilityRatio = 0

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibilityRatio) {
            maxVisibilityRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })

        if (mostVisibleSection !== activeSection && maxVisibilityRatio > 0.2) {
          setActiveSection(mostVisibleSection)
        }
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 1.0],
        rootMargin: '-72px 0px -40% 0px'
      }
    )

    // Observe sections
    const sectionIds = ['home', 'about', 'contact']
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [threshold, rootMargin, activeSection, sectionIds])

  return activeSection
}
```

### CSS Configuration
```css
/* /app/globals.css */
/* Smooth scrolling behavior handled by Framer Motion */
html {
  scroll-behavior: auto; /* Changed from 'smooth' to prevent conflicts */
}

/* Anchor scrolling configuration for fixed header */
[id] {
  scroll-margin-top: var(--nav-h); /* 72px */
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## Attempts Made to Fix the Issue

1. **Removed CSS `scroll-behavior: smooth`** - Changed to `auto` to prevent browser native smooth scroll conflicts with Framer Motion
2. **Implemented timestamp-based navigation blocking** - Prevents Intersection Observer updates during Framer Motion animations
3. **Added pixel rounding with `Math.round()`** - Eliminates sub-pixel precision issues
4. **Used explicit position setting in `onComplete`** - Ensures animations end at exact target positions
5. **Removed all programmatic scroll event listeners** - Eliminated competing scroll detection systems
6. **Simplified navigation state management** - Single global state object instead of complex flag systems

## Research Questions

1. **What causes scroll bouncing at boundaries when using Framer Motion's `animate()` with `window.scrollTo()`?**
2. **Are there known conflicts between Framer Motion scroll animations and browser scroll behavior, especially at document boundaries?**
3. **How should `window.scrollTo()` be properly used within Framer Motion animations to prevent boundary bouncing?**
4. **Are there alternative Framer Motion patterns for smooth scroll that don't conflict with native browser scrolling?**
5. **What are the best practices for combining Intersection Observer API with Framer Motion scroll animations?**
6. **Could the issue be related to viewport/document height calculations or overflow behavior?**
7. **Are there specific browser quirks or known issues with programmatic scrolling at document boundaries?**

## Specific Solutions Needed

1. **Working code example** of smooth scroll with Framer Motion that doesn't cause boundary bouncing
2. **Alternative implementation approach** if the current `animate()` + `window.scrollTo()` pattern is fundamentally flawed
3. **Debugging techniques** to identify the root cause of the bouncing behavior
4. **Configuration options** for Framer Motion or browser APIs that prevent scroll conflicts
5. **Detection methods** to identify if other JavaScript or CSS is interfering with scroll behavior

## Expected Deliverables

- Complete working code solution that eliminates scroll bouncing
- Explanation of why the current implementation causes the issue
- Best practices for Framer Motion smooth scroll in production applications
- Any additional configuration or setup required for stable scroll behavior

Please provide detailed code examples and explanations for any proposed solutions.