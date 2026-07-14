"use client";

import { use } from "react";
import Link from "next/link";
import { Clock, HelpCircle, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { type Locale } from "@/content/translations";
import { sampleDailyActivities, activitiesDisclaimer, developmentBenefits } from "@/content/activities";
import { getWhatsAppLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ActivitiesPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  const texts = {
    title: { ms: "Aktiviti Harian & Pembelajaran", en: "Daily Activities & Learning" },
    subtitle: { ms: "Jadual Tersusun, Fleksibel dan Riang", en: "Structured, Flexible, and Cheerful Schedule" },
    intro: {
      ms: "Kami percaya bahawa rutin harian yang konsisten membantu mewujudkan kestabilan emosi dan disiplin diri kanak-kanak. Berikut merupakan gambaran rujukan bagi satu hari yang riang di pusat jagaan kami.",
      en: "We believe that consistent daily routines foster emotional security and self-discipline in children. Below is a sample timeline of a joyful day at our centre."
    },
    timelineHeader: { ms: "Contoh Jadual Harian", en: "Sample Daily Timeline" },
    benefitHeader: { ms: "Perkembangan Awal Yang Didorong", en: "Key Areas of Early Growth" },
    benefitIntro: {
      ms: "Setiap aktiviti dirancang secara tidak langsung untuk memupuk kebolehan asas anak-anak tanpa memberi beban akademik.",
      en: "Every activity is indirectly structured to nurture foundational skills without creating academic pressure."
    },
    ctaTitle: { ms: "Ingin Mengetahui Lebih Lanjut?", en: "Want to Learn More?" },
    ctaDesc: {
      ms: "Hubungi wakil kami melalui WhatsApp untuk mendapatkan panduan lanjut berkenaan rutin atau untuk berkongsi keperluan khusus anak anda.",
      en: "Contact our team via WhatsApp to get more guidance about routines or to share any specific needs of your child."
    }
  };

  const whatsappLink = getWhatsAppLink("general");

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
          ⚠️ <strong>{locale === "ms" ? "Nota Penting:" : "Important Note:"}</strong> {activitiesDisclaimer[locale]}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Vertical Timeline - lg:col-span-8 */}
          <div className="lg:col-span-8">
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-8 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-peach-dark" />
              {texts.timelineHeader[locale]}
            </h3>

            <div className="relative border-l-2 border-brand-peach/60 ml-4 flex flex-col gap-8">
              {sampleDailyActivities.map((act, index) => (
                <div key={index} className="relative pl-6">
                  {/* Timeline point */}
                  <span className="absolute -left-[11px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-brand-peach-dark border-4 border-white shadow-xs" />
                  
                  <div className="flex flex-col gap-1.5">
                    <span className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <Clock className="w-3 h-3" />
                      {act.time}
                    </span>
                    <h4 className="font-heading font-semibold text-base text-slate-800">
                      {act.title[locale]}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {act.description[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Support Side - lg:col-span-4 */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col gap-4">
              <h3 className="font-heading font-bold text-lg text-slate-900">
                {texts.benefitHeader[locale]}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {texts.benefitIntro[locale]}
              </p>
              
              <div className="flex flex-col gap-4 mt-2">
                {developmentBenefits.map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-800">{item.title[locale]}</span>
                      <span className="text-[11px] text-slate-500 leading-normal mt-0.5">{item.description[locale]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic WhatsApp Box */}
        <div className="max-w-3xl mx-auto bg-brand-yellow-light/50 border border-brand-yellow/30 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center gap-4">
          <h4 className="font-heading font-bold text-lg text-slate-900">
            {texts.ctaTitle[locale]}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            {texts.ctaDesc[locale]}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-brand-green-light border border-emerald-200 text-emerald-800 font-bold hover:bg-emerald-100 transition-all active:scale-95 text-xs sm:text-sm"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-emerald-600 text-emerald-600" />
            <span>{locale === "ms" ? "Tanya Pendidik Kami" : "Ask Our Educators"}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
