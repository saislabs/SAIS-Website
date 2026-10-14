import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const { whatsappNumber, whatsappPrefillMessage } = siteConfig.contact;

  // Render floating button ONLY if a valid number is provided (not empty or default placeholder)
  if (!whatsappNumber || whatsappNumber.trim() === "" || whatsappNumber.includes("XXXXX")) {
    return null;
  }

  // Clean the number of non-numeric characters except leading plus if any
  const cleanNumber = whatsappNumber.replace(/[^\d+]/g, "").replace(/^\+/, "");
  const encodedText = encodeURIComponent(whatsappPrefillMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SAIS Labs on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#25D366]/40 font-medium text-sm group"
      >
        <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        <span className="hidden sm:inline font-sans">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
