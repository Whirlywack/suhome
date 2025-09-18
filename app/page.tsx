import { Heading, Text } from '@/components/ui/typography'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

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
                className="relative mb-6 hero-title"
                style={{
                  fontSize: '8rem',
                  fontWeight: '200',
                  lineHeight: '0.85',
                  letterSpacing: '-0.05em'
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
                  maxWidth: '40rem',
                  fontWeight: '300'
                }}
              >
                An indie dev studio in London. Projects are chosen by fit —
                curiosity, design, and the chance to make something
                enjoyable, meaningful, or just plain fun.
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

        {/* Section 04: Principles */}
        <section id="principles" className="relative border-t border-border">
          <div className="container mx-auto px-lg py-6xl">
            <div className="flex gap-xl">
              {/* Section number */}
              <div className="flex-shrink-0 w-16">
                <span className="text-5xl font-light text-muted-foreground">
                  03
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2xl max-w-4xl">
                <ErrorBoundary level="section" componentName="Principles">
                  <Heading variant="hero" className="mb-md font-bold">
                    Principles
                  </Heading>

                  <div className="mb-xl">
                    <Text variant="small" className="uppercase tracking-wider text-muted-foreground font-medium">
                      DESIGN VALUES
                    </Text>
                  </div>

                  <div className="max-w-4xl">
                    <ol className="space-y-md text-base">
                      <li className="flex gap-md">
                        <span className="text-muted-foreground font-medium">
                          1.
                        </span>
                        <span>
                          Ideas should invite exploration, not exhaustion.
                        </span>
                      </li>
                      <li className="flex gap-md">
                        <span className="text-muted-foreground font-medium">
                          2.
                        </span>
                        <span>
                          Design is attention: typography, space, motion.
                        </span>
                      </li>
                      <li className="flex gap-md">
                        <span className="text-muted-foreground font-medium">
                          3.
                        </span>
                        <span>Fun matters, even in serious work.</span>
                      </li>
                      <li className="flex gap-md">
                        <span className="text-muted-foreground font-medium">
                          4.
                        </span>
                        <span>
                          A good interface disappears; a great one lingers in
                          memory.
                        </span>
                      </li>
                    </ol>
                  </div>
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05: About */}
        <section id="about" className="relative border-t border-border">
          <div className="container mx-auto px-lg py-6xl">
            <div className="flex gap-xl">
              {/* Section number */}
              <div className="flex-shrink-0 w-16">
                <span className="text-5xl font-light text-muted-foreground">
                  04
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3xl max-w-4xl">
                <ErrorBoundary level="section" componentName="About">
                  <Heading variant="hero" className="mb-xl font-bold">
                    About
                  </Heading>

                  <div className="max-w-4xl space-y-2xl">
                    <Text variant="body">
                      Superoptimised is small by design. A few people, enough to
                      experiment, never enough to get lost in scale. Work
                      happens where curiosity and fit align. Everything else is
                      politely left behind.
                    </Text>

                    <div className="space-y-xl">
                      <div>
                        <Heading variant="h4" className="mb-md">
                          The Journey
                        </Heading>
                        <Text variant="body">
                          Curiosity starts the path. A fragment of an idea, a
                          tool that feels missing, a playful thought worth
                          chasing. Some journeys end quickly; others become
                          long-running companions. Each sharpens the next.
                        </Text>
                      </div>

                      <div>
                        <Heading variant="h4" className="mb-md">
                          Focus
                        </Heading>
                        <Text variant="body">
                          Edges are where things get interesting — the overlap
                          of UI, UX, and AI. Superoptimised builds what feels
                          engaging to explore, not what&rsquo;s easiest to
                          explain. Most of the time, there&rsquo;s no
                          availability for outside work. But when a project
                          feels like a match, it&rsquo;s worth the time.
                        </Text>
                      </div>

                      <div>
                        <Heading variant="h4" className="mb-md">
                          Design and Experience
                        </Heading>
                        <Text variant="body">
                          Contemporary products deserve more than function. They
                          should be sleek, enjoyable, and meaningful. UI and UX
                          aren&rsquo;t polish added at the end — they are the
                          beginning. A product that feels good to use is already
                          halfway to being loved.
                        </Text>
                      </div>

                      <div>
                        <Heading variant="h4" className="mb-md">
                          Who
                        </Heading>
                        <Text variant="body">
                          Based in London, reaching anywhere ideas travel.
                          Always in motion, always busy, working on projects
                          that feel alive.
                        </Text>
                      </div>
                    </div>
                  </div>
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: Contact - Dark theme */}
        <section
          id="contact"
          className="relative bg-foreground text-background"
        >
          <div className="container mx-auto px-lg py-6xl">
            <div className="flex gap-xl">
              {/* Section number */}
              <div className="flex-shrink-0 w-16">
                <span className="text-5xl font-light text-background/60">
                  05
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2xl max-w-4xl">
                <ErrorBoundary level="section" componentName="Contact">
                  <Heading variant="hero" className="mb-xl text-background font-bold">
                    Contact
                  </Heading>

                  <div className="max-w-4xl space-y-lg">
                    <Text variant="body" className="text-background/80">
                      Superoptimised is usually at capacity, but an open channel
                      remains. If a project feels aligned — thoughtful, curious,
                      or simply fun — a short note is welcome.
                    </Text>

                    <Text variant="body" className="text-background/80">
                      No forms, no funnels. Just an email.
                    </Text>

                    <div className="pt-lg">
                      <a
                        href="mailto:connect@superoptimised.com"
                        className="text-2xl font-mono text-background hover:text-background/80 transition-colors duration-200 underline decoration-background/30 underline-offset-4 hover:decoration-background/60"
                      >
                        connect@superoptimised.com
                      </a>
                    </div>
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
