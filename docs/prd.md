# Superoptimised Website Product Requirements Document (PRD)

## Goals and Background Context

### Goals
- Create a simple, beautiful website that states what the company actually does
- Implement a brutalist design system with architectural precision and perfect spacing
- Present content clearly and authentically without marketing language
- Build a clean, legally compliant website for a company focused on its own AI products
- Achieve beautiful typography and visual design that makes visitors think "wow, this looks beautiful"

### Background Context

Superoptimised is a company building AI products with beautiful UI/UX as passion projects and innovation work. The website serves as a simple digital presence for legal compliance and authentic representation of what the company does.

This is not a service business seeking clients - leads come from elsewhere. The website should be clean, focused, and beautiful, presenting the company's actual mission without conversion goals or marketing speak. The focus is entirely on beautiful design implementation and proper content presentation.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-09-16 | 1.0 | Initial PRD creation based on project brief | PM Agent |

## Requirements

### Functional

1. **FR1**: The Homepage must display company name and simple statement: "We create AI products with beautiful UI/UX"
2. **FR2**: The website must implement a 3-page structure: Homepage, About, and Contact pages with consistent navigation
3. **FR3**: The About page must present the company as focused on passion projects and innovation, with beautiful UI/UX and AI as core mission
4. **FR4**: The Contact page must provide a friendly paragraph and beautifully presented email, stating openness to exciting projects
5. **FR5**: The website must implement the brutalist design system with architectural precision across all pages
6. **FR6**: All pages must be fully responsive with mobile-first approach ensuring perfect experience across all devices
7. **FR7**: NO portfolio section, NO services selling, NO marketing language anywhere on the site
8. **FR8**: Navigation must be clean and minimal, allowing easy movement between the three main pages

### Non Functional

1. **NFR1**: Average page load time must be under 2 seconds across all pages for optimal user experience
2. **NFR2**: Website must achieve 95%+ Lighthouse performance scores for technical excellence
3. **NFR3**: All pages must meet WCAG 2.1 AA accessibility compliance with zero accessibility barriers
4. **NFR4**: Website must be deployed with automated CI/CD pipeline for efficient updates
5. **NFR5**: Browser compatibility must include modern browsers (Chrome, Firefox, Safari, Edge) with graceful degradation
6. **NFR6**: HTTPS enforcement and basic security headers must be implemented
7. **NFR7**: Typography must be perfect with precise spacing and architectural precision throughout
8. **NFR8**: Visual design must achieve "wow, this looks beautiful" reaction from visitors

## User Interface Design Goals

### Overall UX Vision
Create a brutalist design system with architectural precision that achieves stunning visual beauty. The interface should feel clean, focused, and purposeful, making visitors think "wow, this looks beautiful." Emphasize perfect spacing, beautiful typography, and precise visual hierarchy that serves authentic content presentation.

### Key Interaction Paradigms
- **Architectural Precision**: Every element positioned with mathematical precision and perfect spacing
- **Beautiful Typography**: Typography that is both dramatic and perfectly readable
- **Authentic Presentation**: Simple, honest content without marketing manipulation
- **Performance Excellence**: Every interaction should feel instant and responsive
- **Content Clarity**: Design serves to present information clearly and beautifully

### Core Screens and Views
- **Homepage**: Company name and simple mission statement: "We create AI products with beautiful UI/UX"
- **About Page**: Passion projects, innovation focus, beautiful UI/UX and AI core mission
- **Contact Page**: Friendly paragraph and beautifully presented email, open to exciting projects
- **Navigation Header**: Consistent across all pages with clean, minimal design

### Accessibility: WCAG AA
All interface elements must meet WCAG 2.1 AA standards including proper color contrast ratios, keyboard navigation support, screen reader compatibility, and semantic HTML structure. The brutalist design approach must not compromise accessibility requirements.

### Branding
Implement the brutalist design system with architectural precision featuring:
- Carefully selected color palette applied with mathematical precision
- Beautiful typography that achieves dramatic impact while maintaining perfect readability
- Clean, precise layouts that demonstrate architectural thinking
- Bold visual elements that reflect authentic beauty and technical excellence
- Stunning aesthetic that makes visitors appreciate the craft of beautiful design

### Target Device and Platforms: Web Responsive
Primary focus on web browsers with full mobile responsiveness. Mobile-first design approach ensuring optimal experience on smartphones and tablets while maintaining desktop functionality. No native mobile app requirements for MVP.

## Technical Assumptions

### Repository Structure: Monorepo
Single repository containing all website components, styles, and content with clean separation of concerns. This approach supports our efficient development workflow and simplifies deployment processes.

### Service Architecture
JAMstack architecture with pre-built static files and minimal dynamic elements. Static site generation approach using modern JavaScript framework (React/Next.js preferred). No backend database required - all content will be statically generated for optimal performance and simplicity.

### Testing Requirements
Unit testing for core components and integration testing for build process. Manual testing for accessibility compliance and cross-browser compatibility. Automated performance testing to ensure sub-2-second load times and 95+ Lighthouse scores. Visual regression testing to ensure design precision is maintained.

### Additional Technical Assumptions and Requests
- Frontend framework must support static site generation for optimal performance
- CSS implementation must support the brutalist design system with architectural precision
- Build process must include automatic optimization for images and assets
- Simple mailto: links for contact functionality
- Automated deployment pipeline with preview environments
- Basic SEO meta tag implementation for legal compliance
- Progressive enhancement approach for older browser support
- Typography system that supports perfect spacing and beautiful rendering

## Epic List

**Epic 1: Foundation & Core Infrastructure**
Establish project setup, development environment, brutalist design system implementation with architectural precision, and deploy a basic canary page with full CI/CD pipeline.

**Epic 2: Homepage & Core Content**
Create the main homepage with company name and simple mission statement, implementing the full brutalist design system with beautiful typography and perfect spacing.

**Epic 3: About & Contact Pages**
Develop the About page presenting passion projects and innovation focus, plus the Contact page with friendly content and beautiful email presentation, completing the authentic 3-page structure.

## Epic 1: Foundation & Core Infrastructure

Establish the foundational project infrastructure including development environment setup, brutalist design system implementation with architectural precision, deployment pipeline, and a basic canary page that demonstrates beautiful design execution while providing a deployable foundation for subsequent epics.

### Story 1.1: Project Setup and Development Environment

As a developer,
I want a properly configured development environment with build tools and deployment pipeline,
so that I can efficiently develop and deploy the website with confidence.

#### Acceptance Criteria
1. Modern JavaScript framework (React/Next.js) project initialized with TypeScript support
2. Vercel Pro deployment configuration established with automatic deployments
3. Git repository configured with proper branch protection and CI/CD pipeline
4. Development server running locally with hot reload functionality
5. Build process optimized for static site generation and performance
6. ESLint and Prettier configured for code quality consistency

### Story 1.2: Brutalist Design System Implementation

As a developer,
I want the brutalist design system components and styling framework implemented with architectural precision,
so that I can build beautiful, consistent pages with perfect spacing and typography.

#### Acceptance Criteria
1. Color palette defined as CSS custom properties with mathematical precision
2. Beautiful typography system implemented with perfect spacing and dramatic impact
3. Component library structure established for navigation and content presentation
4. Responsive grid system implemented for mobile-first approach with architectural precision
5. Base styles and reset CSS applied for consistent cross-browser rendering
6. Design system documented with component examples showing beautiful execution

### Story 1.3: Basic Canary Page Deployment

As a stakeholder,
I want a basic canary page deployed to production,
so that I can verify the infrastructure works and see beautiful design implementation.

#### Acceptance Criteria
1. Simple landing page deployed with custom domain
2. Page displays "Superoptimised - Coming Soon" with beautiful typography
3. Page implements brutalist design system elements with architectural precision
4. HTTPS enabled with proper security headers
5. Performance metrics meet target (sub-2-second load, 95+ Lighthouse)
6. Mobile responsiveness verified across devices with perfect spacing

## Epic 2: Homepage & Core Content

Create the complete homepage featuring simple company name and mission statement "We create AI products with beautiful UI/UX", plus primary navigation, implementing the full brutalist design system with perfect spacing and beautiful typography.

### Story 2.1: Homepage Content

As a visitor,
I want to understand what Superoptimised does,
so that I can learn about the company's authentic mission.

#### Acceptance Criteria
1. Homepage prominently displays company name "Superoptimised"
2. Clear statement: "We create AI products with beautiful UI/UX"
3. Content presented simply and authentically without marketing language
4. NO call-to-action buttons or conversion elements
5. Visual design implements brutalist aesthetic with beautiful typography and perfect spacing
6. Section is fully responsive and loads in under 1 second

### Story 2.2: Navigation System

As a visitor,
I want clean, intuitive navigation between pages,
so that I can easily explore the company information.

#### Acceptance Criteria
1. Navigation header displays on all pages with consistent styling
2. Clear links to Homepage, About, and Contact pages
3. Current page indicator shows user location
4. Mobile navigation is accessible and user-friendly with perfect spacing
5. Navigation implements brutalist design system with architectural precision
6. NO services or portfolio links anywhere in navigation


## Epic 3: About & Contact Pages

Develop the About page presenting passion projects, innovation focus, and beautiful UI/UX + AI core mission, plus the Contact page with friendly content and beautifully presented email for exciting projects, completing the authentic 3-page website structure.

### Story 3.1: About Page Content

As a visitor,
I want to learn about Superoptimised's authentic mission and focus,
so that I can understand what the company actually does.

#### Acceptance Criteria
1. About page presents company as focused on passion projects and innovation
2. Content highlights beautiful UI/UX and AI as core mission
3. Information is authentic without marketing language or client positioning
4. Page maintains brutalist design consistency with architectural precision
5. Content reflects genuine company personality and values
6. Mobile experience provides excellent readability with perfect spacing

### Story 3.2: Contact Page with Email Functionality

As a visitor,
I want a simple, beautiful way to contact Superoptimised,
so that I can reach out about exciting projects.

#### Acceptance Criteria
1. Contact page includes friendly paragraph expressing openness to exciting projects
2. Email address presented beautifully with perfect typography and spacing
3. Mailto: link functionality works correctly across all devices and email clients
4. Design maintains brutalist aesthetic with architectural precision
5. Email address is accessible and easily copyable for manual use
6. NO marketing language or service selling anywhere on the page

### Story 3.3: Final Performance and Design Optimization

As a stakeholder,
I want the complete website to meet all performance, accessibility, and beauty requirements,
so that it demonstrates technical excellence and beautiful design execution.

#### Acceptance Criteria
1. All pages achieve sub-2-second load times for 95th percentile users
2. Lighthouse performance scores of 95+ across all pages
3. WCAG 2.1 AA accessibility compliance verified through testing
4. Cross-browser compatibility confirmed for modern browsers
5. Mobile responsiveness validated across device sizes with perfect spacing
6. Visual design achieves "wow, this looks beautiful" reaction from visitors

## Checklist Results Report

The PRD has been completely reworked to reflect the authentic vision of Superoptimised. The document provides comprehensive functional and non-functional requirements focused on beautiful design implementation, clear UI/UX goals aligned with the brutalist design system with architectural precision, appropriate technical assumptions for a JAMstack architecture, and well-structured epics with sequential, deliverable stories.

Key strengths of this PRD:
- Clear focus on authentic content presentation without marketing language
- Emphasis on beautiful design execution with perfect spacing and typography
- Specific, testable acceptance criteria focused on visual beauty and technical excellence
- Proper consideration of performance, accessibility, and design precision
- Elimination of all conversion goals and service-selling elements

The PRD successfully translates the authentic company vision into actionable development requirements while maintaining focus on beautiful design and honest content presentation.

## Next Steps

### UX Expert Prompt

Please switch to UX Expert mode and create a comprehensive user experience design for the Superoptimised website. Use this PRD as your foundation, focusing on the brutalist design system with architectural precision and beautiful typography. Design wireframes and user flows for the 3-page structure (Homepage, About, Contact) that achieve stunning visual beauty and perfect content presentation without any marketing or conversion elements.

### Architect Prompt

Please switch to Architect mode and create the technical architecture for the Superoptimised website. Use this PRD to design a JAMstack solution using React/Next.js with static site generation. Focus on achieving sub-2-second load times, 95+ Lighthouse scores, and WCAG AA compliance while supporting the brutalist design system with architectural precision and beautiful typography implementation outlined in the functional specifications.