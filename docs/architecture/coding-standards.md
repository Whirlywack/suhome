# Frontend Developer Standards

## Critical Coding Rules

### Universal Standards for Beautiful Results

1. **Perfect Spacing**: All spacing must use 8px base unit system (0.5rem increments) for visual harmony
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

### Brutalist Design System for Visual Excellence

11. **5-Color Limit**: Strictly adhere to defined color palette for maximum visual impact
12. **Typography Scale**: Use only defined font sizes (mega, hero, display, base) for beautiful hierarchy
13. **Spacing Consistency**: Apply spacing scale systematically for visual perfection
14. **Beautiful Layouts**: Align all layouts to systematic grid patterns for stunning presentation
15. **Visual Flow**: Structure layouts for optimal visual experience and readability

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