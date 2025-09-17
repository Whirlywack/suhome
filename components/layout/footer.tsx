import { Text } from '@/components/ui/typography'

// Simple footer component with architectural precision
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          {/* Copyright - minimal and clean */}
          <Text variant="small" className="text-muted-foreground">
            © 2025 SuperOptimised. All rights reserved.
          </Text>

          {/* Simple contact link */}
          <Text variant="small" className="text-muted-foreground">
            Built with{' '}
            <span className="text-primary">Next.js</span>{' '}
            &{' '}
            <span className="text-primary">Tailwind CSS</span>
          </Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer