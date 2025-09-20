# Typography Scaling System Documentation

## Overview
This document explains how the hero title and typography scaling works in the Superoptimised website, using modern CSS container queries based on 2025 research.

## Current Implementation (Phase 1 - Working)

### 1. Container Query Setup
The hero section is configured as a container for container queries:

```css
/* app/globals.css */
#home {
  container-type: inline-size;
  container-name: hero;
}
```

This enables the use of container query units (`cqi`) which scale based on the container width, not the viewport.

### 2. Hero Title Scaling Rules

#### Mobile (Default)
```css
h1.hero-title {
  font-size: clamp(3.5rem, 12cqi, 5rem);
  letter-spacing: -0.03em;
  line-height: 0.9;
}
```
- **Minimum**: 3.5rem (56px at 16px base)
- **Scaling**: 12% of container width
- **Maximum**: 5rem (80px)
- **Behavior**: On narrow screens, stays closer to 3.5rem

#### Tablet (576px+ container)
```css
@container hero (min-width: 576px) {
  h1.hero-title {
    font-size: clamp(5rem, 10cqi, 8rem);
    letter-spacing: -0.04em;
    line-height: 0.87;
  }
}
```
- **Minimum**: 5rem (80px)
- **Scaling**: 10% of container width
- **Maximum**: 8rem (128px)
- **Behavior**: Smooth scaling between tablet sizes

#### Desktop (1024px+ container)
```css
@container hero (min-width: 1024px) {
  h1.hero-title {
    font-size: 8rem;
    letter-spacing: -0.05em;
    line-height: 0.85;
  }
}
```
- **Fixed size**: 8rem (128px)
- **No scaling**: Consistent size on all desktop screens
- **Tighter spacing**: Optimized for large text

### 3. How Container Queries Work

#### Container Query Units (cqi)
- `cqi` = Container Query Inline - percentage of container's inline size (width)
- `12cqi` = 12% of the container's width
- Different from `vw` which is viewport width

#### Why Container Queries?
1. **Context-aware**: Scales based on the actual container, not viewport
2. **More predictable**: Container padding is already accounted for
3. **Component-based**: Each section can have its own scaling rules
4. **Modern approach**: Based on 2025 CSS best practices

### 4. The HTML Structure

```tsx
// app/page.tsx
<section id="home" className="architectural-section text-center mt-[4.5rem]">
  <div className="container">
    <Heading
      variant="mega"
      className="relative hero-title mb-2xl"
      as="h1"
    >
      Superoptimised
    </Heading>
  </div>
</section>
```

Key elements:
- `id="home"` - Enables the container query context
- `className="container"` - Applies responsive padding
- `as="h1"` - Renders as h1 element (matches CSS selector)
- `variant="mega"` - Applies Tailwind's base text-mega class
- `className="hero-title"` - Applies our container query overrides

### 5. The Cascade and Specificity

```css
/* Order of application: */
1. Tailwind's text-mega: clamp(3rem, 1rem + 4vw, 8rem)
2. Our h1.hero-title rules override with container queries
3. Media query rules apply at specific breakpoints
```

The `h1.hero-title` selector has higher specificity than `.text-mega`, ensuring our container query rules take precedence.

### 6. Supporting Elements

#### Decorative Line
```css
.hero-title::before {
  content: '';
  position: absolute;
  top: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 2px;
  background: hsl(var(--foreground));
}
```

#### Responsive Root Font Size
The base font size scales with viewport for optimal reading:
```css
/* Mobile */
@media (min-width: 24rem) {
  :root { font-size: 103.125%; } /* 16.5px */
}
/* Tablet */
@media (min-width: 48rem) {
  :root { font-size: 118.75%; } /* 19px */
}
/* Desktop */
@media (min-width: 64rem) {
  :root { font-size: 125%; } /* 20px */
}
```

## Why Phase 2 Failed

### Problems with Single Formula Approach
Tried to use: `clamp(2.75rem, 1.5rem + 7vw, 12rem)`

Mathematical analysis:
- At 1440px: 7vw = 100.8px, total = 7.8rem (not 12rem!)
- At 1920px: 7vw = 134.4px, total = 9.9rem (still not 12rem!)
- Would need 10.5vw to reach 12rem at 1440px
- But then mobile would be too large

### Container Query Removal
- Removed container queries thinking they were "complex"
- Lost the sophisticated scaling behavior
- Created competing systems between Tailwind and custom CSS

### The Lesson
Container queries with breakpoints provide better control than trying to find a "perfect" single formula. Different screen sizes need different scaling approaches.

## Best Practices

1. **Use container queries for component-based scaling**
2. **Set fixed sizes at large breakpoints for consistency**
3. **Test actual pixel values at each breakpoint**
4. **Don't fight the cascade - use specificity intentionally**
5. **Document the system to avoid future confusion**

## Testing Checklist

- [ ] Mobile (390px): Hero ~3.5-4rem, fits width
- [ ] Tablet (768px): Hero ~5-6rem, good hierarchy
- [ ] Desktop (1440px): Hero 8rem, impressive size
- [ ] All breakpoints: Decorative line visible
- [ ] All breakpoints: Text doesn't overflow container

---

*This documentation reflects the stable Phase 1 implementation that is currently working correctly.*