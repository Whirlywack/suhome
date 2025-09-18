import { cn } from '@/lib/utils';

interface AboutStoryProps {
  id?: string;
  className?: string;
}

export default function AboutStory({ id, className }: AboutStoryProps) {
  return (
    <section id={id} className={cn("py-xl", className)}>
      <div className="container">
        <h2 className="text-2xl font-semibold mb-md">About Story Component</h2>
        <p className="text-muted-foreground">This component will be implemented in Story 2.1</p>
      </div>
    </section>
  )
}