type EventName = 
  | "view_hero"
  | "click_cta_main"
  | "click_cta_secondary"
  | "click_sticky_cta"
  | "submit_lead_form"
  | "view_pricing"
  | "exit_intent_shown"
  | "exit_intent_converted"
  | "click_whatsapp"
  | "click_telegram";

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (eventName: EventName, properties?: EventProperties) => {
  // Console log for development
  console.log(`[Analytics] ${eventName}`, properties);

  // Placeholder for Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, properties);
  }

  // Placeholder for Facebook Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", eventName, properties);
  }

  // Placeholder for VK Pixel
  if (typeof window !== "undefined" && (window as any).VK) {
    (window as any).VK.Goal(eventName);
  }
};

export const trackPageView = (pagePath: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", "GA_MEASUREMENT_ID", {
      page_path: pagePath,
    });
  }
};
