// Google Analytics 4 configuration and utilities
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
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