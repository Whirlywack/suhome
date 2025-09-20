import React from 'react'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import SectionHeader from '@/components/ui/SectionHeader'

export const NotesOnAISection: React.FC = () => {
  return (
    <section id="notes-on-ai" className="relative py-xl" aria-labelledby="notes-on-ai-heading">
      <div className="container">
        <SectionHeader number="02" title="Notes on AI" />

        {/* Content Grid */}
        <div className="z-pattern-content">
          <div className="text-muted-foreground font-medium uppercase text-sm tracking-wide">
            Technology<br />& Humanity
          </div>
          <div className="text-lg leading-normal">
            <ErrorBoundary level="section" componentName="AINotes">
              <div className="italic text-xl font-light p-xl border-l-4 border-primary bg-subtle mb-2xl my-2xl">
                AI isn&apos;t a feature to bolt on. It feels closer to the printing
                press or the microchip — a shift so deep it changes the way
                people live and create. A kind of quiet miracle.
              </div>
              <p>
                Superoptimised approaches it with curiosity and care. The
                goal is not to automate everything, but to fold
                intelligence into the everyday in ways that feel natural,
                playful, and humane. When it works, life becomes lighter:
                less friction, more joy, new kinds of meaning.
              </p>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotesOnAISection