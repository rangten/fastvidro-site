declare global {
  interface Window {
    gtag?: (...args: (string | number | Record<string, unknown>)[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackGoogleAdsConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18214089234/UBlZCOvhhLkcEJLkk-1D",
      value: 1.0,
      currency: "BRL",
    });
  }
}
