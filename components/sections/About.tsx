import React from 'react'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import SectionHeader from '@/components/ui/SectionHeader'

interface AboutSubsection {
  title: string
  content: string
}

const subsections: AboutSubsection[] = [
  {
    title: 'The Journey',
    content: 'Curiosity starts the path. A fragment of an idea, a tool that feels missing, a playful thought worth chasing. Some journeys end quickly; others become long-running companions. Each sharpens the next.'
  },
  {
    title: 'Focus',
    content: `Edges are where things get interesting — the overlap of UI, UX, and AI. Superoptimised builds what feels engaging to explore, not what's easiest to explain. Most of the time, there's no availability for outside work. But when a project feels like a match, it's worth the time.`
  },
  {
    title: 'Design and Experience',
    content: `Contemporary products deserve more than function. They should be sleek, enjoyable, and meaningful. UI and UX aren't polish added at the end — they are the beginning. A product that feels good to use is already halfway to being loved.`
  },
  {
    title: 'Who',
    content: 'Based in London, reaching anywhere ideas travel. Always in motion, always busy, working on projects that feel alive.'
  }
]

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-xl" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeader number="04" title="About" />

        {/* Content Grid */}
        <div className="z-pattern-content">
          <div className="text-muted-foreground font-medium uppercase text-sm tracking-wide">
            Team<br />& Values
          </div>
          <div className="text-lg leading-normal">
            <ErrorBoundary level="section" componentName="About">
              <p className="mb-2xl">
                Superoptimised is small by design. A few people, enough to
                experiment, never enough to get lost in scale. Work
                happens where curiosity and fit align. Everything else is
                politely left behind.
              </p>

              {subsections.map((subsection, index) => (
                <div key={subsection.title} className={index < subsections.length - 1 ? 'mb-2xl' : ''}>
                  <h3 className="text-xl font-semibold mb-3 leading-tight">
                    {subsection.title}
                  </h3>
                  <p>{subsection.content.replace(/&rsquo;/g, "'")}</p>
                </div>
              ))}
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection