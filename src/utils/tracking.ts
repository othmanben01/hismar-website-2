export function trackConversion(eventName: string, fbEventName: string) {
  if (typeof window !== "undefined") {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName);
    }
    if (typeof (window as any).fbq === "function") {
      (window as any).fbq("track", fbEventName);
    }
  }
}
