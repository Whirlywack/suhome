# Simplified Contact Approach

## No API Integration Required

**Contact Method**: Simple mailto: links for direct email communication

```typescript
// Simple contact utilities - no API needed
export const contactUtils = {
  // Generate mailto link for different purposes
  getContactLink: (subject?: string, body?: string) => {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    if (body) params.set('body', body);

    const queryString = params.toString();
    return `mailto:hello@superoptimised.com${queryString ? '?' + queryString : ''}`;
  },

  // Quick contact functions
  generalInquiry: () => contactUtils.getContactLink('General Inquiry'),
  projectDiscussion: () => contactUtils.getContactLink('Project Discussion'),
  collaboration: () => contactUtils.getContactLink('Collaboration Opportunity'),
};

// Simple contact component pattern
const ContactButton = ({ subject, children }: { subject?: string; children: React.ReactNode }) => (
  <a
    href={contactUtils.getContactLink(subject)}
    className="btn-primary"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
```

## Security Headers Only

```typescript
// Next.js security configuration - simplified protection
import { NextRequest, NextResponse } from 'next/server';

// Security middleware - essential headers only
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Essential security headers for static site
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Content-Security-Policy', "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'");

  return response;
}

// Middleware configuration - static pages only
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)', // All pages, no API routes
  ],
};
```
