'use client'

// motion import removed - no longer needed
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import ContactButton from '@/components/ui/ContactButton'
import { Heading, Text } from '@/components/ui/typography'

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero */}
        <section id="home" className="architectural-section text-center mt-[4.5rem]">
          <div className="container">
            <ErrorBoundary level="section" componentName="Hero">
              <Heading
                variant="mega"
                className="relative hero-title mb-2xl"
                as="h1"
              >
                Superoptimised
              </Heading>
              <Text
                variant="large"
                className="text-muted-foreground mx-auto max-w-[42rem] font-light"
              >
                An indie dev studio in London. Projects are chosen by fit — curiosity, design,
                and the chance to make something enjoyable, meaningful, or just plain fun.
              </Text>
            </ErrorBoundary>
          </div>
        </section>

        {/* Studio Story */}
        <section className="relative pt-lg pb-xl">
          <div className="container">
            {/* Section Header */}
            <div className="grid grid-cols-1 mobile-lg:grid-cols-[auto_1fr] gap-4 mobile-lg:gap-9 items-baseline mb-8">
              <div
                className="text-muted-foreground font-thin text-5xl leading-none"
              >
                01
              </div>
              <Heading variant="h1" as="h2">
                Studio Story
              </Heading>
            </div>

            {/* Content Grid */}
            <div className="z-pattern-content">
              <div
                className="text-muted-foreground font-medium uppercase text-sm tracking-wide"
              >
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

        {/* Notes on AI */}
        <section className="relative py-xl">
          <div className="container">
            {/* Section Header */}
            <div className="grid grid-cols-1 mobile-lg:grid-cols-[auto_1fr] gap-4 mobile-lg:gap-9 items-baseline mb-8">
              <div
                className="text-muted-foreground font-thin text-5xl leading-none"
              >
                02
              </div>
              <Heading variant="h1" as="h2">
                Notes on AI
              </Heading>
            </div>

            {/* Content Grid */}
            <div className="z-pattern-content">
              <div
                className="text-muted-foreground font-medium uppercase text-sm tracking-wide"
              >
                Technology<br />& Humanity
              </div>
              <div className="text-lg leading-normal">
                <ErrorBoundary level="section" componentName="AINotes">
                  <div
                    className="italic text-xl font-light p-xl border-l-4 border-primary bg-subtle mb-2xl my-2xl"
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
        <section className="relative py-xl">
          <div className="container">
            {/* Section Header */}
            <div className="grid grid-cols-1 mobile-lg:grid-cols-[auto_1fr] gap-4 mobile-lg:gap-9 items-baseline mb-8">
              <div
                className="text-muted-foreground font-thin text-5xl leading-none"
              >
                03
              </div>
              <Heading variant="h1" as="h2">
                Principles
              </Heading>
            </div>

            {/* Content Grid */}
            <div className="z-pattern-content">
              <div
                className="text-muted-foreground font-medium uppercase text-sm tracking-wide"
              >
                Design<br />Values
              </div>
              <div className="text-lg leading-normal">
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
        <section id="about" className="relative py-xl">
          <div className="container">
            {/* Section Header */}
            <div className="grid grid-cols-1 mobile-lg:grid-cols-[auto_1fr] gap-4 mobile-lg:gap-9 items-baseline mb-8">
              <div
                className="text-muted-foreground font-thin text-5xl leading-none"
              >
                04
              </div>
              <Heading variant="h1" as="h2">
                About
              </Heading>
            </div>

            {/* Content Grid */}
            <div className="z-pattern-content">
              <div
                className="text-muted-foreground font-medium uppercase text-sm tracking-wide"
              >
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

                  <div className="mb-2xl">
                    <h3 className="text-xl font-semibold mb-3 leading-tight">
                      The Journey
                    </h3>
                    <p>
                      Curiosity starts the path. A fragment of an idea, a
                      tool that feels missing, a playful thought worth
                      chasing. Some journeys end quickly; others become
                      long-running companions. Each sharpens the next.
                    </p>
                  </div>

                  <div className="mb-2xl">
                    <h3 className="text-xl font-semibold mb-3 leading-tight">
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

                  <div className="mb-2xl">
                    <h3 className="text-xl font-semibold mb-3 leading-tight">
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
                    <h3 className="text-xl font-semibold mb-3 leading-tight">
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
          className="relative bg-foreground text-background py-xl mt-3xl"
        >
          <div className="container">
            {/* Section Header */}
            <div className="grid grid-cols-1 mobile-lg:grid-cols-[auto_1fr] gap-4 mobile-lg:gap-9 items-baseline mb-8">
              <div
                className="text-background/60 font-thin text-5xl leading-none"
              >
                05
              </div>
              <Heading variant="h1" as="h2" className="text-background">
                Contact
              </Heading>
            </div>

            {/* Content Grid */}
            <div className="z-pattern-content">
              <div
                className="text-background/60 font-medium uppercase text-sm tracking-wide"
              >
                Get In<br />Touch
              </div>
              <div className="text-lg leading-normal">
                <ErrorBoundary level="section" componentName="Contact">
                  <p className="text-background/80 mb-lg">
                    Superoptimised is usually at capacity, but an open channel
                    remains. If a project feels aligned — thoughtful, curious,
                    or simply fun — a short note is welcome.
                  </p>
                  <p className="text-background/80 mb-xl">
                    No forms, no funnels. Just an email.
                  </p>
                  <div className="mt-xl">
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
