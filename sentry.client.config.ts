import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,

  // Capture 100% of the transactions in development, 10% in production
  tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,

  // Capture 100% of the sessions in development, 10% in production
  replaysSessionSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,

  // Capture 100% of the sessions on error
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration({
      // Mask text and block media to protect user privacy
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  beforeSend(event) {
    // Filter out development errors
    if (process.env.NODE_ENV === 'development') {
      return null
    }
    return event
  },
})