'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heading, Text } from '@/components/ui/typography'

const AnimatedDigit = ({ digit, delay }: { digit: string; delay: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: 'easeOut'
      }}
      className="inline-block"
    >
      {digit}
    </motion.span>
  )
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-xl">
        <Heading variant="mega" className="mb-4">
          <AnimatedDigit digit="4" delay={0} />
          <AnimatedDigit digit="0" delay={0.2} />
          <AnimatedDigit digit="4" delay={0.4} />
        </Heading>

        <Text variant="large" className="text-muted-foreground">
          Page not found
        </Text>

        <Link
          href="/"
          className="inline-block text-foreground hover:text-foreground/80 hover:bg-foreground/10 transition-all duration-200"
          style={{
            fontSize: '1.125rem',
            fontWeight: '500',
            textDecoration: 'none',
            padding: '1rem 1.5rem',
            border: '1px solid hsla(var(--foreground) / 0.3)',
            minWidth: '140px',
            textAlign: 'center'
          }}
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
