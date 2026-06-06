import type { ReactNode } from "react";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { trackGoogleAdsConversion } from "@/lib/conversion";

function useWhatsAppConversionTracking() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (anchor && anchor.href && anchor.href.includes("wa.me")) {
        trackGoogleAdsConversion();
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useWhatsAppConversionTracking();
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
