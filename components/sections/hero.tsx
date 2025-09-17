'use client'

import { motion } from 'framer-motion'
import { Heading, Text } from '@/components/ui/typography'

// Hero section with z-pattern layout and beautiful animations
export function Hero() {
  return (
    <section className="architectural-section z-pattern-hero">
      {/* Content Column - Left side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <Heading variant="hero" className="text-balance">
          Superoptimised - <span className="text-primary">Coming Soon</span>
        </Heading>

        <Text variant="large" className="text-muted-foreground max-w-lg">
          Beautiful digital experiences with architectural precision and
          mathematical design are on the way.
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
          {/* Placeholder for future visual content */}
          <div className="aspect-square w-80 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-8">
            <div className="flex h-full items-center justify-center">
              <Text variant="large" className="text-center text-muted-foreground">
                Visual showcase
                <br />
                coming soon
              </Text>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero