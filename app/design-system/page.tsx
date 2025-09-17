'use client'

import { Heading, Text } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

// Design system showcase page for component documentation
export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-12 space-y-16">
        {/* Page Header */}
        <section className="space-y-4">
          <Heading variant="hero">
            Brutalist Design System
          </Heading>
          <Text variant="large" className="text-muted-foreground max-w-2xl">
            A comprehensive design system built with mathematical precision,
            featuring 8px base unit spacing and architectural excellence.
          </Text>
        </section>

        {/* Color Palette Section */}
        <section className="space-y-8">
          <Heading variant="h2">Color Palette</Heading>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg bg-primary"></div>
              <Text variant="small">Primary</Text>
              <Text variant="muted">HSL Design Token</Text>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg bg-secondary"></div>
              <Text variant="small">Secondary</Text>
              <Text variant="muted">Light Gray</Text>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg bg-muted"></div>
              <Text variant="small">Muted</Text>
              <Text variant="muted">Subtle Background</Text>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg bg-foreground"></div>
              <Text variant="small">Foreground</Text>
              <Text variant="muted">Text Color</Text>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border-2 border-border bg-background"></div>
              <Text variant="small">Background</Text>
              <Text variant="muted">Base Color</Text>
            </div>
          </div>
        </section>

        {/* Typography Scale Section */}
        <section className="space-y-8">
          <Heading variant="h2">Typography Scale</Heading>
          <div className="space-y-6">
            <div>
              <Heading variant="mega">Mega Heading</Heading>
              <Text variant="muted">clamp(4rem, 8vw, 7.5rem) - Dramatic impact</Text>
            </div>
            <div>
              <Heading variant="hero">Hero Heading</Heading>
              <Text variant="muted">clamp(3rem, 6vw, 5rem) - Main headlines</Text>
            </div>
            <div>
              <Heading variant="display">Display Heading</Heading>
              <Text variant="muted">clamp(1.5rem, 3vw, 2.5rem) - Section headers</Text>
            </div>
            <div>
              <Heading variant="h1">H1 Heading</Heading>
              <Text variant="muted">2.25rem - Large headings</Text>
            </div>
            <div>
              <Heading variant="h2">H2 Heading</Heading>
              <Text variant="muted">1.875rem - Medium headings</Text>
            </div>
            <div>
              <Text variant="large">Large body text for introductions and emphasis</Text>
              <Text variant="muted">1.125rem - Large text</Text>
            </div>
            <div>
              <Text variant="body">Regular body text for content and paragraphs</Text>
              <Text variant="muted">1rem - Base text</Text>
            </div>
            <div>
              <Text variant="small">Small text for captions and secondary information</Text>
              <Text variant="muted">0.875rem - Small text</Text>
            </div>
          </div>
        </section>

        {/* Button Components Section */}
        <section className="space-y-8">
          <Heading variant="h2">Button Components</Heading>
          <div className="space-y-6">
            <div className="space-y-4">
              <Text variant="body" className="font-medium">Button Variants</Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>
            <div className="space-y-4">
              <Text variant="body" className="font-medium">Button Sizes</Text>
              <div className="flex flex-wrap gap-4 items-end">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div className="space-y-4">
              <Text variant="body" className="font-medium">Button States</Text>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing System Section */}
        <section className="space-y-8">
          <Heading variant="h2">Spacing System</Heading>
          <Text variant="body" className="text-muted-foreground">
            Mathematical 8px base unit system for perfect visual harmony
          </Text>
          <div className="space-y-4">
            {[
              { name: '0.5rem', pixels: '8px', class: 'w-2' },
              { name: '1rem', pixels: '16px', class: 'w-4' },
              { name: '1.5rem', pixels: '24px', class: 'w-6' },
              { name: '2rem', pixels: '32px', class: 'w-8' },
              { name: '3rem', pixels: '48px', class: 'w-12' },
              { name: '4rem', pixels: '64px', class: 'w-16' },
              { name: '6rem', pixels: '96px', class: 'w-24' },
            ].map((spacing) => (
              <div key={spacing.name} className="flex items-center gap-4">
                <div className={`${spacing.class} h-4 bg-primary rounded`}></div>
                <Text variant="small" className="font-mono">
                  {spacing.name} ({spacing.pixels})
                </Text>
              </div>
            ))}
          </div>
        </section>

        {/* Layout Components Section */}
        <section className="space-y-8">
          <Heading variant="h2">Layout Patterns</Heading>
          <div className="space-y-6">
            <div>
              <Text variant="body" className="font-medium mb-4">Z-Pattern Hero Layout</Text>
              <div className="z-pattern-hero border border-border rounded-lg p-8 bg-muted/20">
                <div className="space-y-4">
                  <Heading variant="h3">Content Column</Heading>
                  <Text variant="body">Left side content with perfect spacing</Text>
                </div>
                <div className="space-y-4">
                  <Heading variant="h3">Visual Column</Heading>
                  <Text variant="body">Right side visual with systematic alignment</Text>
                </div>
              </div>
            </div>
            <div>
              <Text variant="body" className="font-medium mb-4">Architectural Section</Text>
              <div className="architectural-section border border-border rounded-lg bg-muted/20">
                <Text variant="body">Section with systematic padding and max-width</Text>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}