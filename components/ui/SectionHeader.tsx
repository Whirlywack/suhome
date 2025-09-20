import React from 'react'
import { cn } from '@/lib/utils'
import { Heading } from './typography'

interface SectionHeaderProps {
  number: string
  title: string
  className?: string
  isDark?: boolean
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  className,
  isDark = false
}) => {
  return (
    <div className={cn(
      "grid grid-cols-1 mobile-lg:grid-cols-[auto_1fr] gap-4 mobile-lg:gap-9 items-baseline mb-8",
      className
    )}>
      <div
        className={cn(
          "font-thin text-5xl leading-none",
          isDark ? "text-background/60" : "text-muted-foreground"
        )}
      >
        {number}
      </div>
      <Heading
        variant="h1"
        as="h2"
        className={isDark ? "text-background" : ""}
      >
        {title}
      </Heading>
    </div>
  )
}

export default SectionHeader