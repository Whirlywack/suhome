# Frontend Developer Standards

## Critical Coding Rules

### Universal Standards for Beautiful Results

1. **Perfect Mathematical Spacing**: All spacing must use Perfect Fifth progression (1.5x ratio) for visual harmony
2. **Type Safety**: Every component must have complete TypeScript interfaces
3. **Visual Performance**: Sub-2-second load times ensure beautiful user experiences
4. **Accessibility Excellence**: WCAG AA compliance is essential for inclusive design
5. **Component Independence**: Each component must render independently for clean architecture

### Framework-Specific Rules for Beautiful Rendering

6. **Next.js App Router**: Use app directory structure for clean organization
7. **Server Components First**: Default to Server Components, use 'use client' only when necessary
8. **Static Generation**: Leverage generateStaticParams for optimal beautiful rendering
9. **Image Optimization**: Use Next.js Image component with perfect sizing
10. **Font Loading**: Use next/font with display: swap for beautiful typography

### Mathematical Design System for Visual Excellence

11. **HSL Design Tokens**: Use only HSL design tokens, never direct colors
12. **Perfect Fifth Typography**: Use mathematically precise font sizes with Golden Ratio relationships
13. **Perfect Fifth Spacing**: Apply 1.5x ratio spacing progression systematically (0.25rem → 11.25rem)
14. **Multi-Screen Optimization**: Ensure responsive root font scaling across 7 breakpoints (16px → 22px)
15. **Reading Width Optimization**: Use container widths optimized for all screen sizes (320px → 4K)

📖 **Complete specification**: [`/design-system-architecture.md`](../../design-system-architecture.md)

### Code Organization for Clean Architecture

16. **File Naming**: PascalCase for components, kebab-case for directories
17. **Import Order**: External libraries → Internal utilities → Components → Types
18. **Component Structure**: Props interface → Component → Default export
19. **CSS Architecture**: Tailwind utilities preferred, custom CSS in global stylesheets only
20. **Error Boundaries**: Implement clean error handling for beautiful user experiences
21. **Component Size Limit**: Maximum 200 lines per component file for maintainability
22. **Security-First Development**: Validate all inputs, sanitize outputs, leverage Next.js security features

## Quick Reference

### Essential Commands - Beautiful Workflow

```bash
# dev commands go here
```