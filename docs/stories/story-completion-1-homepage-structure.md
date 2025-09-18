# Story: Homepage One-Pager Structure & Reusable Components

**Epic:** Implementation Completion - Brownfield Enhancement
**Story ID:** completion-1
**Priority:** High
**Estimate:** TBD

## User Story

As a **website visitor**,
I want **the homepage to be a comprehensive one-pager with About and Contact sections**,
So that **I can get complete information without navigating multiple pages and access content via anchor links**.

## Story Context

**Existing System Integration:**
- Integrates with: Current Next.js homepage, navigation system, About/Contact pages
- Technology: Next.js 15, React 19, TypeScript, Tailwind CSS
- Follows pattern: Existing component structure and Tailwind styling patterns
- Touch points: Homepage route, navigation menu, mobile nav anchor links

## Acceptance Criteria

### Functional Requirements
1. Homepage includes AboutStory section component with content from current About page
2. Homepage includes ContactEmail section component with content from current Contact page
3. Navigation anchor links (/#about, /#contact) work correctly to scroll to sections

### Integration Requirements
4. Existing homepage hero section continues to work unchanged
5. New sections follow existing Tailwind component patterns
6. Integration with navigation maintains current behavior for other links

### Quality Requirements
7. Components are reusable (can be used on About/Contact pages too)
8. Mobile responsiveness matches existing component standards
9. No regression in existing homepage functionality verified

## Technical Notes

- **Integration Approach:** Add sections below existing hero, extract About/Contact content into reusable components
- **Existing Pattern Reference:** Follow Hero component structure and Tailwind utility patterns from existing codebase
- **Key Constraints:** Must maintain existing URLs and navigation behavior, sections need proper scroll anchor IDs

## Definition of Done

- [ ] AboutStory component created and displays on homepage
- [ ] ContactEmail component created and displays on homepage
- [ ] Anchor navigation (/#about, /#contact) scrolls to correct sections
- [ ] Components are reusable across pages
- [ ] Existing hero section functionality unchanged
- [ ] Mobile navigation links work correctly
- [ ] Responsive design matches existing standards

## Risk Assessment

**Primary Risk:** Breaking existing navigation/routing during homepage restructure
**Mitigation:** Gradual refactoring with component extraction, maintaining existing URLs
**Rollback:** Git rollback to current state, all changes are additive/configurable

## Files to Modify

- `app/page.tsx` (homepage)
- `components/` (new AboutStory and ContactEmail components)
- Navigation components (for anchor link behavior)