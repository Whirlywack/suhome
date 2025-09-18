'use client'

import { motion } from 'framer-motion'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import ContactButton from '@/components/ui/ContactButton'

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero */}
        <section id="home" className="relative text-center" style={{
          paddingTop: '5rem',
          paddingBottom: '3.375rem',
          marginTop: '4.5rem'
        }}>
          <div className="container">
            <ErrorBoundary level="section" componentName="Hero">
              <h1
                className="relative hero-title"
                style={{
                  fontSize: '8rem',
                  fontWeight: '200',
                  lineHeight: '0.85',
                  letterSpacing: '-0.05em',
                  marginBottom: '2.5rem'
                }}
              >
                Superoptimised
              </h1>
              <p
                className="text-muted-foreground mx-auto"
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.4',
                  color: 'hsl(var(--muted-foreground))',
                  maxWidth: '42rem',
                  fontWeight: '300'
                }}
              >
                An indie dev studio in London. Projects are chosen by fit — curiosity, design,
                and the chance to make something enjoyable, meaningful, or just plain fun.
              </p>
            </ErrorBoundary>
          </div>
        </section>

        {/* Studio Story */}
        <section className="relative" style={{ padding: '2.25rem 0' }}>
          <div className="container">
            {/* Section Header */}
            <div className="grid gap-9 items-baseline mb-12" style={{ gridTemplateColumns: 'auto 1fr' }}>
              <div
                className="text-muted-foreground font-thin"
                style={{
                  fontSize: '3rem',
                  fontWeight: '100',
                  lineHeight: '1',
                  width: '6rem'
                }}
              >
                01
              </div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: '600',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Studio Story
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid gap-9" style={{ gridTemplateColumns: '1fr 2fr' }}>
              <div
                className="text-muted-foreground font-medium uppercase"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.1em'
                }}
              >
                Philosophy<br />& Process
              </div>
              <div style={{ fontSize: '1.125rem', lineHeight: '1.5' }}>
                <ErrorBoundary level="section" componentName="StudioStory">
                  <p style={{ marginBottom: '1rem' }}>
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

        {/* Notes on AI */}
        <section className="relative" style={{ padding: '2.25rem 0' }}>
          <div className="container">
            {/* Section Header */}
            <div className="grid gap-9 items-baseline mb-12" style={{ gridTemplateColumns: 'auto 1fr' }}>
              <div
                className="text-muted-foreground font-thin"
                style={{
                  fontSize: '3rem',
                  fontWeight: '100',
                  lineHeight: '1',
                  width: '6rem'
                }}
              >
                02
              </div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: '600',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Notes on AI
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid gap-9" style={{ gridTemplateColumns: '1fr 2fr' }}>
              <div
                className="text-muted-foreground font-medium uppercase"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.1em'
                }}
              >
                Technology<br />& Humanity
              </div>
              <div style={{ fontSize: '1.125rem', lineHeight: '1.5' }}>
                <ErrorBoundary level="section" componentName="AINotes">
                  <div
                    className="italic text-accent border-l-4 bg-subtle mb-9"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '300',
                      padding: '2.25rem',
                      borderLeftColor: 'hsl(var(--accent))',
                      borderLeftWidth: '3px',
                      background: 'hsl(var(--subtle))',
                      margin: '2.25rem 0'
                    }}
                  >
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

        {/* Principles */}
        <section className="relative" style={{ padding: '2.25rem 0' }}>
          <div className="container">
            {/* Section Header */}
            <div className="grid gap-9 items-baseline mb-12" style={{ gridTemplateColumns: 'auto 1fr' }}>
              <div
                className="text-muted-foreground font-thin"
                style={{
                  fontSize: '3rem',
                  fontWeight: '100',
                  lineHeight: '1',
                  width: '6rem'
                }}
              >
                03
              </div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: '600',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Principles
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid gap-9" style={{ gridTemplateColumns: '1fr 2fr' }}>
              <div
                className="text-muted-foreground font-medium uppercase"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.1em'
                }}
              >
                Design<br />Values
              </div>
              <div style={{ fontSize: '1.125rem', lineHeight: '1.5' }}>
                <ErrorBoundary level="section" componentName="Principles">
                  <div className="grid gap-6">
                    <div className="grid grid-cols-[3rem_1fr] gap-4 items-baseline pb-4 border-b border-border">
                      <div className="text-sm font-bold text-accent text-right">01</div>
                      <div>Ideas should invite exploration, not exhaustion.</div>
                    </div>
                    <div className="grid grid-cols-[3rem_1fr] gap-4 items-baseline pb-4 border-b border-border">
                      <div className="text-sm font-bold text-accent text-right">02</div>
                      <div>Design is attention: typography, space, motion.</div>
                    </div>
                    <div className="grid grid-cols-[3rem_1fr] gap-4 items-baseline pb-4 border-b border-border">
                      <div className="text-sm font-bold text-accent text-right">03</div>
                      <div>Fun matters, even in serious work.</div>
                    </div>
                    <div className="grid grid-cols-[3rem_1fr] gap-4 items-baseline">
                      <div className="text-sm font-bold text-accent text-right">04</div>
                      <div>A good interface disappears; a great one lingers in memory.</div>
                    </div>
                  </div>
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative" style={{ padding: '2.25rem 0' }}>
          <div className="container">
            {/* Section Header */}
            <div className="grid gap-9 items-baseline mb-12" style={{ gridTemplateColumns: 'auto 1fr' }}>
              <div
                className="text-muted-foreground font-thin"
                style={{
                  fontSize: '3rem',
                  fontWeight: '100',
                  lineHeight: '1',
                  width: '6rem'
                }}
              >
                04
              </div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: '600',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                About
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid gap-9" style={{ gridTemplateColumns: '1fr 2fr' }}>
              <div
                className="text-muted-foreground font-medium uppercase"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.1em'
                }}
              >
                Team<br />& Values
              </div>
              <div style={{ fontSize: '1.125rem', lineHeight: '1.5' }}>
                <ErrorBoundary level="section" componentName="About">
                  <p style={{ marginBottom: '2rem' }}>
                    Superoptimised is small by design. A few people, enough to
                    experiment, never enough to get lost in scale. Work
                    happens where curiosity and fit align. Everything else is
                    politely left behind.
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      lineHeight: '1.2'
                    }}>
                      The Journey
                    </h3>
                    <p>
                      Curiosity starts the path. A fragment of an idea, a
                      tool that feels missing, a playful thought worth
                      chasing. Some journeys end quickly; others become
                      long-running companions. Each sharpens the next.
                    </p>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      lineHeight: '1.2'
                    }}>
                      Focus
                    </h3>
                    <p>
                      Edges are where things get interesting — the overlap
                      of UI, UX, and AI. Superoptimised builds what feels
                      engaging to explore, not what&rsquo;s easiest to
                      explain. Most of the time, there&rsquo;s no
                      availability for outside work. But when a project
                      feels like a match, it&rsquo;s worth the time.
                    </p>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      lineHeight: '1.2'
                    }}>
                      Design and Experience
                    </h3>
                    <p>
                      Contemporary products deserve more than function. They
                      should be sleek, enjoyable, and meaningful. UI and UX
                      aren&rsquo;t polish added at the end — they are the
                      beginning. A product that feels good to use is already
                      halfway to being loved.
                    </p>
                  </div>

                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      lineHeight: '1.2'
                    }}>
                      Who
                    </h3>
                    <p>
                      Based in London, reaching anywhere ideas travel.
                      Always in motion, always busy, working on projects
                      that feel alive.
                    </p>
                  </div>
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </section>

        {/* Contact - Dark theme */}
        <section
          id="contact"
          className="relative bg-foreground text-background"
          style={{ padding: '2.25rem 0', marginTop: '4rem' }}
        >
          <div className="container">
            {/* Section Header */}
            <div className="grid gap-9 items-baseline mb-12" style={{ gridTemplateColumns: 'auto 1fr' }}>
              <div
                className="text-background/60 font-thin"
                style={{
                  fontSize: '3rem',
                  fontWeight: '100',
                  lineHeight: '1',
                  width: '6rem'
                }}
              >
                05
              </div>
              <h2
                className="text-background"
                style={{
                  fontSize: '2.25rem',
                  fontWeight: '600',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Contact
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid gap-9" style={{ gridTemplateColumns: '1fr 2fr' }}>
              <div
                className="text-background/60 font-medium uppercase"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.1em'
                }}
              >
                Get In<br />Touch
              </div>
              <div style={{ fontSize: '1.125rem', lineHeight: '1.5' }}>
                <ErrorBoundary level="section" componentName="Contact">
                  <p className="text-background/80" style={{ marginBottom: '1rem' }}>
                    Superoptimised is usually at capacity, but an open channel
                    remains. If a project feels aligned — thoughtful, curious,
                    or simply fun — a short note is welcome.
                  </p>
                  <p className="text-background/80" style={{ marginBottom: '1.5rem' }}>
                    No forms, no funnels. Just an email.
                  </p>
                  <div style={{ marginTop: '1.5rem' }}>
                    <ContactButton />
                  </div>
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
