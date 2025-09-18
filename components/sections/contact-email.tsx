import { cn } from '@/lib/utils';

interface ContactEmailProps {
  id?: string;
  className?: string;
}

export default function ContactEmail({ id, className }: ContactEmailProps) {
  return (
    <section id={id} className={cn("py-xl", className)}>
      <div className="container">
        <h2 className="text-2xl font-semibold mb-md">Contact Email Component</h2>
        <p className="text-muted-foreground">This component will be implemented in Story 2.1</p>
      </div>
    </section>
  )
}