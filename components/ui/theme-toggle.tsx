interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className={className}
      disabled
      aria-label="Theme toggle - coming in Story 2.2"
    >
      Theme Toggle (Story 2.2)
    </button>
  )
}