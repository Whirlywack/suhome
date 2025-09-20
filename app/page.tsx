// Server component - no 'use client' needed for static content
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import { Heading, Text } from '@/components/ui/typography'
import StudioStorySection from '@/components/sections/StudioStory'
import NotesOnAISection from '@/components/sections/NotesOnAI'
import PrinciplesSection from '@/components/sections/Principles'
import AboutSection from '@/components/sections/About'
import ContactSection from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen bg-background" role="main">
        {/* Hero */}
        <section
          id="home"
          className="architectural-section text-center mt-[4.5rem]"
          aria-labelledby="hero-heading"
        >
          <div className="container">
            <ErrorBoundary level="section" componentName="Hero">
              <h1 id="hero-heading" className="sr-only">Superoptimised - Indie Dev Studio London</h1>
              <Heading
                variant="mega"
                className="relative hero-title mb-2xl"
                as="h2"
                aria-hidden="true"
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

        {/* Extracted Section Components */}
        <StudioStorySection />
        <NotesOnAISection />
        <PrinciplesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}