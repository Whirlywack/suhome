# Technical Assumptions

## Repository Structure: Monorepo
Single repository containing all website components, styles, and content with clean separation of concerns. This approach supports our efficient development workflow and simplifies deployment processes.

## Service Architecture
Hybrid JAMstack architecture with pre-built static files and serverless capability. Static site generation approach using Next.js App Router with hybrid deployment supporting future API routes. No backend database required for current functionality - all content statically generated for optimal performance while maintaining serverless flexibility for future enhancements.

## Testing Requirements
Unit testing for core components and integration testing for build process. Manual testing for accessibility compliance and cross-browser compatibility. Automated performance testing to ensure sub-2-second load times and 95+ Lighthouse scores. Visual regression testing to ensure design precision is maintained.

## Additional Technical Assumptions and Requests
- Frontend framework must support static site generation for optimal performance
- CSS implementation must support the brutalist design system with architectural precision
- Build process must include automatic optimization for images and assets
- Simple mailto: links for contact functionality
- Automated deployment pipeline with preview environments
- Basic SEO meta tag implementation for legal compliance
- Progressive enhancement approach for older browser support
- Typography system that supports perfect spacing and beautiful rendering
