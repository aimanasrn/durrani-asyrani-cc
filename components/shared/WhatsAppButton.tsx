"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { type Locale } from "@/content/translations";

interface WhatsAppButtonProps {
  locale: Locale;
}

export default function WhatsAppButton({ locale }: WhatsAppButtonProps) {
  const whatsappLink = getWhatsAppLink("general");

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
      aria-label={locale === "ms" ? "Hubungi kami di WhatsApp" : "Contact us on WhatsApp"}
    >
      <MessageCircle className="w-7 h-7 fill-white text-emerald-500 animate-pulse group-hover:scale-105" />
      <span className="absolute right-16 scale-0 group-hover:scale-100 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 shadow-md">
        {locale === "ms" ? "WhatsApp Kami" : "WhatsApp Us"}
      </span>
    </a>
  );
}
