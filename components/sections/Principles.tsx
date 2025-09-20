import React from 'react'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import SectionHeader from '@/components/ui/SectionHeader'

const principles = [
  { number: '01', text: 'Ideas should invite exploration, not exhaustion.' },
  { number: '02', text: 'Design is attention: typography, space, motion.' },
  { number: '03', text: 'Fun matters, even in serious work.' },
  { number: '04', text: 'A good interface disappears; a great one lingers in memory.' },
]

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="relative py-xl" aria-labelledby="principles-heading">
      <div className="container">
        <SectionHeader number="03" title="Principles" />

        {/* Content Grid */}
        <div className="z-pattern-content">
          <div className="text-muted-foreground font-medium uppercase text-sm tracking-wide">
            Design<br />Values
          </div>
          <div className="text-lg leading-normal">
            <ErrorBoundary level="section" componentName="Principles">
              <div className="grid gap-6">
                {principles.map((principle, index) => (
                  <div
                    key={principle.number}
                    className={`grid grid-cols-[3rem_1fr] gap-4 items-baseline ${
                      index < principles.length - 1 ? 'pb-4 border-b border-border' : ''
                    }`}
                  >
                    <div className="text-sm font-bold text-accent text-right">
                      {principle.number}
                    </div>
                    <div>{principle.text}</div>
                  </div>
                ))}
              </div>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrinciplesSection