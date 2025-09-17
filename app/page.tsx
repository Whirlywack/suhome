import { Hero } from '@/components/sections/hero'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white">
      <div className="architectural-container">
        <ErrorBoundary level="section" componentName="Hero">
          <Hero />
        </ErrorBoundary>
      </div>
    </main>
  )
}