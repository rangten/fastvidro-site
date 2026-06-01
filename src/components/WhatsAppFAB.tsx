import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFAB() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp Fast Vidro"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-ink hover:scale-110 transition"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
