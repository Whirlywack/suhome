import React from 'react'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import SectionHeader from '@/components/ui/SectionHeader'

export const StudioStorySection: React.FC = () => {
  return (
    <section id="studio-story" className="relative pt-lg pb-xl" aria-labelledby="studio-story-heading">
      <div className="container">
        <SectionHeader number="01" title="Studio Story" />

        {/* Content Grid */}
        <div className="z-pattern-content">
          <div className="text-muted-foreground font-medium uppercase text-sm tracking-wide">
            Philosophy<br />& Process
          </div>
          <div className="text-lg leading-normal">
            <ErrorBoundary level="section" componentName="StudioStory">
              <p className="mb-lg">
                Superoptimised exists to follow ideas wherever they lead.
                Sometimes the result is small, almost throwaway; other
                times it grows into something bigger. The scale matters
                less than the spark.
              </p>
              <p>
                The process is more of a rhythm than a method: sketch an
                idea, test it, shape it, discard or keep. Curiosity and
                play drive everything. What stays is what feels alive.
              </p>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioStorySection