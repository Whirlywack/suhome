import Link from 'next/link'
import { Heading } from '@/components/ui/typography'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

// Header component for 3-page navigation with brutalist design
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand - architectural precision */}
        <Link href="/" className="flex items-center space-x-2">
          <Heading
            variant="h3"
            as="h1"
            className="text-xl font-bold tracking-tight"
          >
            SuperOptimised
          </Heading>
        </Link>

        {/* Navigation - systematic 3-page structure */}
        <nav className="flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                // Base navigation link styles - architectural precision
                'text-sm font-medium transition-colors hover:text-primary',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                'text-foreground/80 hover:text-foreground'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header