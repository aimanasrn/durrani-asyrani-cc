"use client";

import { use } from "react";
import { ShieldCheck, BookOpen, Layout, Moon, Coffee, Smile, Compass, AlertCircle } from "lucide-react";
import { type Locale } from "@/content/translations";
import { facilitiesList, facilitiesDisclaimer } from "@/content/facilities";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function FacilitiesPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  // Icon lookup helper
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    BookOpen: BookOpen,
    Layout: Layout,
    Moon: Moon,
    Coffee: Coffee,
    Smile: Smile,
    ShieldCheck: ShieldCheck
  };

  const texts = {
    title: { ms: "Kemudahan & Ruang Pusat", en: "Our Facilities & Environment" },
    subtitle: { ms: "Persekitaran Yang Selamat dan Selesa", en: "A Safe & Comfortable Environment" },
    intro: {
      ms: "Keselesaan fizikal dan keselamatan anak-anak adalah perkara utama di Pusat Jagaan Durrani Asyrani. Berikut adalah susunan ruang fizikal yang kami sediakan untuk melatih rutin tumbesaran anak.",
      en: "Physical comfort and safety of the children are top priorities at Pusat Jagaan Durrani Asyrani. Below is the layout of the physical spaces we offer to support child growth."
    },
    safetyHeader: { ms: "Pertimbangan Keselamatan & Kawalan", en: "Safety & Security Protocols" },
    safetyBody: {
      ms: "Bagi memastikan keselamatan fizikal yang tinggi, kami mengamalkan dasar kawalan ketat bagi kehadiran pelawat dan urusan penjemputan anak. Sebarang urusan kemasukan pelawat mestilah dijadualkan terlebih dahulu, dan anak-anak hanya boleh diserahkan kepada penjaga berdaftar yang sah sahaja.",
      en: "To maintain high physical safety, we practice strict access policies for visitors and child pickup. All visitor entries must be pre-scheduled, and children can only be handed over to authorized, registered guardians."
    },
    pickupHeader: { ms: "Panduan Penghantaran & Penjemputan", en: "Drop-Off & Pick-Up Guide" },
    pickupSteps: [
      {
        title: { ms: "Saringan Kesihatan Awal", en: "Initial Health Screening" },
        desc: { ms: "Suhu badan anak diperiksa semasa ketibaan. Anak yang kurang sihat dinasihatkan berehat di rumah demi kesihatan bersama.", en: "Body temperature is checked upon arrival. Unwell children are advised to rest at home for collective health safety." }
      },
      {
        title: { ms: "Perekodan & Kehadiran", en: "Recording Attendance" },
        desc: { ms: "Setiap kehadiran direkodkan secara teratur oleh pendidik bertugas untuk tujuan kawalan keselamatan.", en: "Every attendance is documented carefully by the educator on duty for safety control purposes." }
      },
      {
        title: { ms: "Penyerahan Terkawal", en: "Secured Handover" },
        desc: { ms: "Pada waktu pulang, anak-anak hanya dibenarkan diserahkan kepada ibu bapa atau individu yang mempunyai kebenaran bertulis sahaja.", en: "At pick-up time, children will only be handed over directly to parents or individuals with prior written authorization." }
      }
    ]
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

        {/* Administrator Notice */}
        <div className="mb-12 max-w-4xl mx-auto p-5 bg-blue-50 border border-blue-200 rounded-3xl text-xs text-blue-900 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong>📌 {locale === "ms" ? "Nota Untuk Pentadbir Web:" : "Notice for Web Admin:"}</strong>{" "}
            {facilitiesDisclaimer[locale]}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilitiesList.map((item) => {
            const Icon = iconMap[item.iconName] || Smile;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col gap-4 playful-shadow-hover"
              >
                <div className="w-10 h-10 rounded-2xl bg-brand-peach/30 text-rose-950 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-slate-900">
                    {item.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                    {item.description[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Protocol */}
        <div className="bg-white rounded-4xl p-6 sm:p-10 border border-slate-100 shadow-xs mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-brand-green/20 flex items-center justify-center text-emerald-800">
                <ShieldCheck className="w-10 h-10 text-emerald-600 stroke-[1.5]" />
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col gap-3">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                {texts.safetyHeader[locale]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {texts.safetyBody[locale]}
              </p>
            </div>
          </div>
        </div>

        {/* Dropoff & Pickup Guide */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-xl text-slate-900 text-center mb-10">
            {texts.pickupHeader[locale]}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {texts.pickupSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 flex flex-col gap-3 text-center items-center"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
                  {step.title[locale]}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
