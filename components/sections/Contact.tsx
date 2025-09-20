import React from 'react'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import ContactButton from '@/components/ui/ContactButton'
import SectionHeader from '@/components/ui/SectionHeader'

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-foreground text-background py-xl mt-3xl"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <SectionHeader number="05" title="Contact" isDark />

        {/* Content Grid */}
        <div className="z-pattern-content">
          <div className="text-background/60 font-medium uppercase text-sm tracking-wide">
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
  )
}

export default ContactSection