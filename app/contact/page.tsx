import { Heading, Text } from '@/components/ui/typography'

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-lg py-2xl">
        <Heading variant="h1" className="mb-lg">
          Contact
        </Heading>
        <Text variant="large" className="text-muted-foreground">
          Friendly email presentation
        </Text>
      </div>
    </main>
  )
}