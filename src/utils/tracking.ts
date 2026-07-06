export const trackConversion = (eventName: string, fbEventName?: string) => {
  if (typeof window === 'undefined') return;

  // Track on Google Analytics
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, {
      event_category: 'engagement',
      event_label: eventName,
    });
  }

  // Track on Facebook Pixel
  if (typeof (window as any).fbq === 'function' && fbEventName) {
    (window as any).fbq('track', fbEventName, {
      content_name: eventName,
    });
  }
};
