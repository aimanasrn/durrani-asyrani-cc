"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { translations, type Locale } from "@/content/translations";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface AnnouncementBarProps {
  locale: Locale;
}

export default function AnnouncementBar({ locale }: AnnouncementBarProps) {
  const whatsappLink = getWhatsAppLink("general");
  
  return (
    <div className="bg-primary text-white py-2 px-4 text-sm font-medium transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-center sm:text-left text-xs sm:text-sm tracking-wide">
          📢 {translations.announcement[locale]}
        </p>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-brand-peach text-primary hover:bg-brand-peach-dark px-3 py-1 rounded-full text-xs font-semibold transition-all shadow-sm hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>{locale === "ms" ? "Hubungi WhatsApp" : "WhatsApp Us"}</span>
        </Link>
      </div>
    </div>
  );
}
