type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    __GA_ID__?: string;
  }
}

export function trackPageView(url: string, gaId?: string) {
  const activeGaId =
    gaId || (typeof window !== "undefined" ? window.__GA_ID__ : undefined);
  if (typeof window === "undefined" || !window.gtag || !activeGaId) {
    return;
  }
  window.gtag("config", activeGaId, {
    page_path: url,
  });
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }
  window.gtag("event", eventName, params);
}
