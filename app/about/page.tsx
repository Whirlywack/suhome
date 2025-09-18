import { Heading, Text } from '@/components/ui/typography'

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Heading variant="h1" className="mb-4">
          About
        </Heading>
        <Text variant="large" className="text-muted-foreground">
          Passion projects & innovation
        </Text>
      </div>
    </main>
  )
}