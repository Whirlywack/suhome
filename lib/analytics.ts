// Google Analytics 4 configuration and utilities
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Microsoft Clarity configuration
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

// Sentry configuration
export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (action: string, parameters: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters)
  }
}

// Track contact button clicks
export const trackContactClick = () => {
  event('contact_click', {
    event_category: 'engagement',
    event_label: 'email_contact',
    value: 1
  })
}

// Track 404 page views
export const track404 = () => {
  event('page_not_found', {
    event_category: 'navigation',
    event_label: '404_error',
    value: 1
  })
}

// Microsoft Clarity utilities
export const clarityIdentify = (userId: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('identify', userId)
  }
}

export const claritySet = (key: string, value: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', key, value)
  }
}

// Sentry error tracking utilities
export const captureError = (error: Error, context?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    import('@sentry/nextjs').then(({ captureException, setContext }) => {
      if (context) {
        setContext('error_context', context)
      }
      captureException(error)
    })
  }
}

export const captureMessage = (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
  if (typeof window !== 'undefined') {
    import('@sentry/nextjs').then(({ captureMessage: sentryCaptureMessage }) => {
      sentryCaptureMessage(message, level)
    })
  }
}