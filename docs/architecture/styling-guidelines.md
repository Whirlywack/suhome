# Styling Guidelines

## ⚠️ **SYSTEM UPDATED**

**This styling approach has been superseded by the new mathematically perfect design system.**

👉 **New authoritative source**: [`/design-system-architecture.md`](../../design-system-architecture.md)

---

## New Styling Approach

The frontend architecture implements a **Mathematically Perfect Brutalist Design System** through Tailwind CSS with Perfect Fifth mathematical progression and multi-screen optimization.

### Advanced Styling Principles

1. **Perfect Fifth Progression**: All spacing uses 1.5x mathematical ratio (0.25rem → 11.25rem)
2. **Multi-Screen Excellence**: 7-breakpoint responsive root font scaling (16px → 22px)
3. **Typography Harmony**: Perfect Fifth + Golden Ratio mathematical relationships
4. **HSL Design Tokens**: Theme-aware color architecture (no direct colors)
5. **Reading Optimization**: Container widths optimized for comfort on all screen sizes
6. **Accessibility First**: Respects user preferences with rem-based scaling

### Current Tailwind Configuration

⚠️ **The configuration shown previously has been completely rewritten with mathematical precision.**

**New system features**:

- **Perfect Fifth spacing progression** (0.25rem → 11.25rem in 1.5x steps)
- **Multi-screen responsive breakpoints** (7 breakpoints from mobile to 4K)
- **HSL design tokens only** (direct colors completely removed)
- **Reading-optimized containers** (mathematically determined widths)
- **Responsive root font scaling** (16px → 22px across screen sizes)

📖 **Current implementation**: See `/tailwind.config.ts` in the project root
📖 **Complete specification**: [`/design-system-architecture.md`](../../design-system-architecture.md)

## Implementation Details

**All styling implementation details are now specified in the comprehensive design system architecture:**

📖 **Complete specification**: [`/design-system-architecture.md`](../../design-system-architecture.md)

### Key Implementation Files

1. **Tailwind Config**: `/tailwind.config.ts` - Complete Perfect Fifth system configuration
2. **Global Styles**: `/app/globals.css` - HSL design tokens and base layer implementation
3. **Component System**: Typography and UI components enforce consistency

### Spacing System Usage

```typescript
// Perfect Fifth progression examples
<div className="p-sm">      {/* 0.5rem */}
<div className="p-md">      {/* 0.75rem */}
<div className="p-lg">      {/* 1rem */}
<div className="p-xl">      {/* 1.5rem */}
<div className="p-2xl">     {/* 2.25rem */}
<div className="p-3xl">     {/* 3.375rem */}
<div className="p-4xl">     {/* 5rem */}
<div className="p-5xl">     {/* 7.5rem */}
<div className="p-6xl">     {/* 11.25rem */}
```

### Typography Usage

```typescript
// Perfect Fifth + Golden Ratio typography scale
<h1 className="text-5xl">   {/* Hero headings */}
<h2 className="text-3xl">   {/* Major headings */}
<h3 className="text-2xl">   {/* Section headings */}
<p className="text-base">   {/* Body text */}
<small className="text-sm"> {/* Small text */}
```

### Color System Usage

```typescript
// HSL design tokens only
<div className="bg-background text-foreground">
<div className="bg-primary text-primary-foreground">
<div className="bg-muted text-muted-foreground">
```
