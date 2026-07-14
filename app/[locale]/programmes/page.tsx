"use client";

import { use } from "react";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Sparkles,
  Palette,
  Smile,
  Activity,
  Users,
  GraduationCap,
  MessageCircle,
  Clock,
  Coins
} from "lucide-react";
import { type Locale } from "@/content/translations";
import { programmesList, programmesDisclaimer } from "@/content/programmes";
import { getWhatsAppLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ProgrammesPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  // Map icon names to Lucide icons
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Heart: Heart,
    BookOpen: BookOpen,
    Sparkles: Sparkles,
    Palette: Palette,
    Smile: Smile,
    Activity: Activity,
    Users: Users,
    GraduationCap: GraduationCap
  };

  const texts = {
    title: { ms: "Program & Aktiviti Asuhan", en: "Programmes & Services" },
    subtitle: { ms: "Pilihan Program Perkembangan Kanak-Kanak", en: "Child Developmental Programmes" },
    intro: {
      ms: "Program di Pusat Jagaan Durrani Asyrani direka khas untuk memenuhi keperluan perkembangan fizikal, kognitif, dan sosio-emosi kanak-kanak mengikut kesesuaian peringkat umur mereka.",
      en: "Programmes at Pusat Jagaan Durrani Asyrani are structured to meet children's physical, cognitive, and socio-emotional developmental needs based on their ages."
    },
    ageLabel: { ms: "Sasaran Umur:", en: "Target Age Group:" },
    scheduleLabel: { ms: "Jadual Sesi:", en: "Session Schedule:" },
    feesLabel: { ms: "Yuran / Kos:", en: "Estimated Fees:" },
    skillsLabel: { ms: "Kemahiran Disokong:", en: "Skills Supported:" },
    ctaBtn: { ms: "Tanya Lanjut Tentang Program Ini", en: "Enquire About This Programme" }
  };

  return (
    <div className="flex flex-col w-full py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeading
          title={texts.title[locale]}
          subtitle={texts.subtitle[locale]}
          description={texts.intro[locale]}
          badgeColor="peach"
        />

        {/* Global Disclaimer */}
        <div className="mb-12 max-w-3xl mx-auto p-4 bg-orange-50 border border-orange-200 rounded-2xl text-xs text-orange-800 leading-relaxed">
          ⚠️ <strong>{locale === "ms" ? "Penting untuk Ibu Bapa:" : "Important for Parents:"}</strong> {programmesDisclaimer[locale]}
        </div>

        {/* Programmes detailed list */}
        <div className="flex flex-col gap-10">
          {programmesList.map((prog) => {
            const IconComponent = iconMap[prog.iconName] || Smile;
            const customWaLink = getWhatsAppLink("programme", prog.title[locale]);
            
            return (
              <div
                key={prog.id}
                id={prog.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24"
              >
                {/* Header/Icon Section */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-peach/40 text-primary-light flex items-center justify-center shadow-2xs">
                    <IconComponent className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
                    {prog.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {prog.shortDescription[locale]}
                  </p>
                  
                  {/* Meta items */}
                  <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Smile className="w-4 h-4 text-brand-peach-dark shrink-0" />
                      <span><strong>{texts.ageLabel[locale]}</strong> {prog.ageGroup[locale]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-yellow shrink-0" />
                      <span><strong>{texts.scheduleLabel[locale]}</strong> {prog.schedule[locale]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4 text-brand-green shrink-0" />
                      <span><strong>{texts.feesLabel[locale]}</strong> {prog.fees[locale]}</span>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:col-span-8 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
                      {locale === "ms" ? "Mengenai Program Ini:" : "About this Programme:"}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prog.longDescription[locale]}
                    </p>
                    
                    {/* Skills pills */}
                    <div className="flex flex-col gap-2 mt-2">
                      <span className="text-xs font-semibold text-slate-700">
                        {texts.skillsLabel[locale]}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {prog.skills[locale].map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200/50 py-1 px-3 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enquiry button */}
                  <div className="pt-4 border-t border-slate-100 flex justify-end">
                    <a
                      href={customWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-6 py-3 rounded-2xl bg-brand-green-light border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold hover:bg-emerald-100 transition-all active:scale-95 shadow-2xs"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-emerald-600 text-emerald-600" />
                      <span>{texts.ctaBtn[locale]}</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
