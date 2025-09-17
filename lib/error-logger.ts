// Error logging utility for centralized error handling
export interface ErrorLogEntry {
  error: string
  stack?: string
  componentName?: string
  level?: 'root' | 'section' | 'component'
  timestamp: string
  location: string
  userAgent?: string
  // Note: Sensitive information is intentionally excluded
}

// Production-safe error log entry
export interface ProductionErrorLog {
  component?: string
  level: 'root' | 'section' | 'component'
  error: string
  timestamp: string
  location: string
}

// Future: Error service integration hook
function sendToErrorService(errorLog: ProductionErrorLog): void {
  // TODO: Integrate with Sentry, LogRocket, or other error tracking service
  // Example for Sentry:
  // import * as Sentry from '@sentry/nextjs'
  // Sentry.captureException(new Error(errorLog.error), {
  //   tags: { component: errorLog.component, level: errorLog.level },
  //   extra: { timestamp: errorLog.timestamp, location: errorLog.location }
  // })

  // For now, this is a no-op placeholder
  console.debug('Error service integration placeholder:', errorLog)
}

// Centralized error logging function
export function logError(
  error: Error,
  componentName?: string,
  level: 'root' | 'section' | 'component' = 'component',
  additionalInfo?: Record<string, unknown>
): void {
  const errorEntry: ErrorLogEntry = {
    error: error.name + ': ' + error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    componentName,
    level,
    timestamp: new Date().toISOString(),
    location: typeof window !== 'undefined' ? window.location.href : 'SSR',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
  }

  // Development logging with full context
  if (process.env.NODE_ENV === 'development') {
    switch (level) {
      case 'root':
        console.error('🚨 Root Error (dev):', errorEntry)
        break
      case 'section':
        console.warn('⚠️ Section Error (dev):', errorEntry)
        break
      default:
        console.info('ℹ️ Component Error (dev):', errorEntry)
    }

    // Add additional context in development
    if (additionalInfo) {
      console.group('Additional Error Context:')
      console.info(additionalInfo)
      console.groupEnd()
    }
  }

  // Production logging with filtered data
  if (process.env.NODE_ENV === 'production') {
    const productionLog: ProductionErrorLog = {
      component: componentName,
      level,
      error: error.name + ': ' + error.message,
      timestamp: errorEntry.timestamp,
      location: errorEntry.location,
    }

    // Use severity consistently in production
    switch (level) {
      case 'root':
        console.error('🚨 Root Error (prod):', productionLog)
        break
      case 'section':
        console.warn('⚠️ Section Error (prod):', productionLog)
        break
      default:
        console.info('ℹ️ Component Error (prod):', productionLog)
    }

    // Send to external error tracking service
    sendToErrorService(productionLog)
  }
}

// Helper function to create error boundary compatible logging
export function createErrorBoundaryLogger(
  componentName: string,
  level: 'root' | 'section' | 'component' = 'component'
) {
  return (error: Error, errorInfo?: { componentStack?: string }) => {
    logError(error, componentName, level, {
      componentStack: errorInfo?.componentStack,
    })
  }
}

// Export for use in error boundaries and components
export default logError