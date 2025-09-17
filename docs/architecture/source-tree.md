# Project Structure

```plaintext
superoptimised-web/
├── app/                              # Next.js App Router - Simple 3-Page Structure
│   ├── about/
│   │   └── page.tsx                  # About: passion projects & innovation
│   ├── contact/
│   │   └── page.tsx                  # Contact: friendly email presentation
│   ├── globals.css                   # Brutalist design system + Tailwind
│   ├── layout.tsx                    # Root layout with perfect typography
│   ├── page.tsx                      # Homepage: AI products + beautiful UI/UX
│   └── not-found.tsx                 # 404 page
├── components/                       # Simple Component Architecture
│   ├── ui/                           # Base components
│   │   ├── button.tsx                # Button with Framer Motion
│   │   └── typography.tsx            # Heading, Text components
│   ├── layout/                       # Layout components
│   │   ├── header.tsx                # Navigation (3 pages)
│   │   └── footer.tsx                # Simple footer (optional)
│   └── sections/                     # Page sections
│       ├── hero.tsx                  # Homepage hero
│       ├── ai-products.tsx           # AI products showcase
│       ├── about-story.tsx           # About content
│       └── contact-email.tsx         # Beautiful email presentation
├── lib/                              # Simple utilities
│   ├── utils.ts                      # cn() and basic utilities
│   ├── fonts.ts                      # Inter, Lexend font loading
│   └── constants.ts                  # Site content constants
├── public/                           # Static assets
│   ├── images/                       # Optimized images
│   └── favicon.ico                   # Site favicon
├── docs/                             # Planning documents (BMad workflow)
│   ├── project-brief.md              # Project brief
│   ├── prd.md                        # Product requirements
│   ├── front-end-spec.md             # UX specification
│   └── ui-architecture.md            # This document
├── package.json                      # Simplified dependencies
├── tailwind.config.ts                # Brutalist design system config
├── tsconfig.json                     # TypeScript configuration
├── next.config.js                    # Next.js 14.2.25 secure config
└── README.md                         # Project documentation
```
