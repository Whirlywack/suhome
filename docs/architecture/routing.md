# Routing

## Route Configuration

```typescript
// Next.js App Router configuration - beautiful organization
// File: src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import '@/styles/globals.css';

// Font optimization - secure, beautiful precision
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Performance and security
  preload: true,
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
  preload: true,
});

// Metadata configuration - beautiful SEO
export const metadata: Metadata = {
  title: {
    default: 'Superoptimised - Simple AI Products with Beautiful UI/UX',
    template: '%s | Superoptimised',
  },
  description: 'Passionate team creating simple AI products with beautiful interfaces. Innovation through design excellence.',
  keywords: ['AI products', 'beautiful UI/UX', 'design excellence', 'innovation', 'brutalist design'],
  authors: [{ name: 'Superoptimised Team' }],
  creator: 'Superoptimised',
  publisher: 'Superoptimised',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://superoptimised.com',
    title: 'Superoptimised - Simple AI Products with Beautiful UI/UX',
    description: 'Passionate team creating simple AI products with beautiful interfaces.',
    siteName: 'Superoptimised',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superoptimised - Simple AI Products with Beautiful UI/UX',
    description: 'Passionate team creating simple AI products with beautiful interfaces.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Root layout - beautiful foundation
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          lexend.variable
        )}
      >
        <div className="relative min-h-screen flex flex-col">
          {/* Header - consistent beautiful element */}
          <Header />

          {/* Main content - beautiful layout */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

// Route-specific configurations
// File: src/app/(routes)/about/page.tsx
export const metadata: Metadata = {
  title: 'About - Passion Projects & Innovation',
  description: 'Learn about our passion for creating beautiful AI products and innovative solutions.',
};

// File: src/app/(routes)/contact/page.tsx
export const metadata: Metadata = {
  title: 'Contact - Get in Touch',
  description: 'Friendly communication - reach out to discuss AI products and collaboration.',
};
```
