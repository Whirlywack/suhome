'use client'

import { motion } from 'framer-motion'
import { Heading, Text } from '@/components/ui/typography'

/**
 * Hero component props interface for configurable content
 * Supports React.ReactNode for rich text formatting while maintaining XSS protection
 *
 * @example
 * ```tsx
 * // Basic usage with defaults
 * <Hero />
 *
 * // With custom content
 * <Hero
 *   title="Your Company"
 *   subtitle={<span className="text-primary">Coming Soon</span>}
 *   description="Beautiful digital experiences with architectural precision"
 * />
 *
 * // With rich text formatting and custom visual
 * <Hero
 *   title={<><strong>Bold</strong> Company Name</>}
 *   subtitle="Dynamic Subtitle"
 *   description={
 *     <>
 *       Multi-line description with <em>emphasis</em> and
 *       <br />
 *       custom formatting while maintaining XSS protection.
 *     </>
 *   }
 *   visualContent={<CustomVisualComponent />}
 * />
 *
 * // Testing various content lengths
 * <Hero
 *   title="Very Long Title That Tests Responsive Design"
 *   subtitle="Extended subtitle for testing design system consistency"
 *   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
 * />
 * ```
 */
export interface HeroProps {
  /** Main heading text - supports JSX elements for rich formatting */
  title?: React.ReactNode;
  /** Highlighted subtitle text within or after title - supports JSX elements */
  subtitle?: React.ReactNode;
  /** Supporting text below title - supports JSX elements */
  description?: React.ReactNode;
  /** Right column visual content - supports any React component */
  visualContent?: React.ReactNode;
}

// Hero section with z-pattern layout and beautiful animations
export function Hero({
  title = "Superoptimised",
  subtitle = <span className="text-primary">Coming Soon</span>,
  description = "Beautiful digital experiences with architectural precision and mathematical design are on the way.",
  visualContent = (
    <div className="aspect-square w-6xl rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-2xl">
      <div className="flex h-full items-center justify-center">
        <Text variant="large" className="text-center text-muted-foreground">
          Visual showcase
          <br />
          coming soon
        </Text>
      </div>
    </div>
  )
}: HeroProps = {}) {
  return (
    <section className="architectural-section z-pattern-hero">
      {/* Content Column - Left side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-xl"
      >
        <Heading variant="hero" className="text-balance">
          {title}{subtitle && <> - {subtitle}</>}
        </Heading>

        <Text variant="large" className="text-muted-foreground max-w-lg">
          {description}
        </Text>

      </motion.div>

      {/* Visual Column - Right side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center"
      >
        <div className="relative">
          {visualContent}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero