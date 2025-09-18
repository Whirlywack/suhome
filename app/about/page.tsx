import { Heading, Text } from '@/components/ui/typography'

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-lg py-2xl">
        <Heading variant="h1" className="mb-lg">
          About
        </Heading>
        <Text variant="large" className="text-muted-foreground">
          Passion projects & innovation
        </Text>
      </div>
    </main>
  )
}