'use client'

import React, { Component, ErrorInfo } from 'react'
import { cn } from '@/lib/utils'
import Button from './button'
import { logError } from '@/lib/error-logger'

// Error boundary state interface following TypeScript precision
interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

// Error boundary props interface with architectural precision
interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>
  className?: string
  level?: 'root' | 'section' | 'component'
  componentName?: string
}

// Default fallback UI component with brutalist design consistency
const DefaultErrorFallback: React.FC<{
  error?: Error
  retry: () => void
  level?: string
  componentName?: string
}> = ({ error, retry, level = 'component', componentName = 'Component' }) => (
  <div
    className={cn(
      'flex flex-col items-center justify-center',
      'bg-background border-2 border-primary',
      'text-center',
      // Perfect Fifth spacing progression for visual precision
      {
        'min-h-screen p-2xl': level === 'root',
        'min-h-4xl p-xl': level === 'section',
        'min-h-3xl p-lg': level === 'component',
      }
    )}
  >
    {/* Error icon with brutalist styling */}
    <div className="mb-lg text-4xl text-primary">⚠️</div>

    {/* Error message typography following design system */}
    <h2 className="mb-sm text-lg font-medium text-foreground">
      {level === 'root' ? 'Application Error' : `${componentName} Error`}
    </h2>

    <p className="mb-xl text-sm text-muted-foreground max-w-md">
      {level === 'root'
        ? 'Something went wrong with the application. Please try refreshing the page.'
        : `The ${componentName.toLowerCase()} component encountered an error. You can try again or continue using other parts of the page.`}
    </p>

    {/* Retry button using existing Button component */}
    <Button variant="primary" size="md" onClick={retry} className="mb-sm">
      Try Again
    </Button>

    {/* Development error details - only in development */}
    {process.env.NODE_ENV === 'development' && error && (
      <details className="mt-4 text-left w-full max-w-2xl">
        <summary className="cursor-pointer text-sm text-muted-foreground mb-sm">
          Technical Details (Development Only)
        </summary>
        <pre className="text-xs text-red-600 bg-red-50 p-md rounded border overflow-auto">
          {error.message}
          {error.stack}
        </pre>
      </details>
    )}
  </div>
)

// Error Boundary class component following React 18.3.1 patterns
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // Static method called during render phase to update state
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  // Lifecycle method called during commit phase for side effects (logging)
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Use centralized error logging system
    logError(
      error,
      this.props.componentName || 'Unknown Component',
      this.props.level || 'component',
      {
        componentStack: errorInfo.componentStack,
      }
    )
  }

  // Retry mechanism to reset error boundary state
  resetErrorBoundary = (): void => {
    this.setState({ hasError: false, error: undefined })
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // Use custom fallback or default fallback UI
      const FallbackComponent = this.props.fallback || DefaultErrorFallback

      return (
        <div className={cn('error-boundary-container', this.props.className)}>
          <FallbackComponent
            error={this.state.error}
            retry={this.resetErrorBoundary}
            level={this.props.level}
            componentName={this.props.componentName}
          />
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
