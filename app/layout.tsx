import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import Header from '@/components/layout/header'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import MicrosoftClarity from '@/components/analytics/MicrosoftClarity'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['200', '300', '400', '500', '600', '700'],
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    default: 'Superoptimised — Indie Dev Studio London | UI/UX & AI Design',
    template: '%s | Superoptimised',
  },
  description:
    'London-based indie development studio specializing in UI/UX design and AI integration. Creating thoughtful, engaging digital experiences that feel natural and meaningful.',
  keywords: [
    'UI design',
    'UX design',
    'AI development',
    'indie studio',
    'London',
    'digital design',
    'user experience',
    'interface design',
  ],
  authors: [{ name: 'Superoptimised' }],
  creator: 'Superoptimised',
  publisher: 'Superoptimised',
  metadataBase: new URL('https://superoptimised.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://superoptimised.com',
    title: 'Superoptimised — Indie Dev Studio London',
    description:
      'Projects chosen by fit — curiosity, design, and the chance to make something enjoyable, meaningful, or just plain fun.',
    siteName: 'Superoptimised',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Superoptimised — Indie Dev Studio London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superoptimised — Indie Dev Studio London',
    description:
      'Creating thoughtful digital experiences at the intersection of UI, UX, and AI.',
    images: ['/twitter-card.jpg'],
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
  other: {
    'theme-color': '#f5f5f5',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <head>
        {/* Viewport meta tag for proper mobile rendering */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ''}
        />

        {/* Favicon links */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme initialization script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = savedTheme || systemTheme;
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Superoptimised',
              description:
                'Indie development studio specializing in UI/UX design and AI integration',
              url: 'https://superoptimised.com',
              logo: 'https://superoptimised.com/apple-touch-icon.png',
              sameAs: [],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'London',
                addressCountry: 'GB',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'connect@superoptimised.com',
                contactType: 'customer service',
              },
              foundingDate: '2024',
              knowsAbout: [
                'UI Design',
                'UX Design',
                'AI Development',
                'Digital Design',
              ],
              serviceArea: {
                '@type': 'Place',
                name: 'London, United Kingdom',
              },
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <ErrorBoundary level="root" componentName="Application">
          <CustomCursor />
          <ScrollToTop />
          <Header />
          {children}
        </ErrorBoundary>
        <Analytics />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  )
}
