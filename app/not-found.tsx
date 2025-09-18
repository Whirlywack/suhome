import { Heading, Text } from '@/components/ui/typography'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <Heading variant="mega" className="mb-4">
          404
        </Heading>
        <Text variant="large" className="text-muted-foreground">
          Page not found
        </Text>
      </div>
    </main>
  )
}
