# Simplified Architecture - No Complex State Management

## Removed Components

**State Management Libraries:**

- Complex state libraries (simple useState for 3 pages)
- React Hook Form (simple mailto: contact approach)
- Complex state stores and hooks

**Testing Infrastructure:**

- Vitest (manual testing for 3 pages)
- Testing Library setup
- E2E testing frameworks

**Component Libraries:**

- Using existing brutalist design system
- Simple, custom components only

## Simple Component State Only

```plaintext
src/components/
├── ui/                         # Base design system components
├── layout/                     # Simple layout components
├── sections/                   # Page section components
└── features/                   # Minimal feature components
    └── navigation/             # Simple navigation only
```

## Simple React State Patterns

```typescript
// Simple component state for navigation
const [isMenuOpen, setIsMenuOpen] = useState(false)

// Simple scroll tracking with useEffect
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { threshold: 0.1 }
  )

  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [])

// Simple contact approach - no form state management
const handleContact = () => {
  window.location.href =
    'mailto:hello@superoptimised.com?subject=Contact from website'
}

// Framer Motion state for animations
const controls = useAnimation()
const [ref, inView] = useInView({ threshold: 0.1 })

useEffect(() => {
  if (inView) {
    controls.start('visible')
  }
}, [controls, inView])
```
