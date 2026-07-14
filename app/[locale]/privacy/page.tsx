"use client";

import { use } from "react";
import { Shield, Eye, Lock, FileCheck } from "lucide-react";
import { type Locale } from "@/content/translations";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function PrivacyPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  const texts = {
    title: { ms: "Dasar Privasi", en: "Privacy Policy" },
    subtitle: { ms: "Perlindungan Data Peribadi Anda & Anak Anda", en: "Protection of Your & Your Child's Personal Data" },
    intro: {
      ms: "Pusat Jagaan Durrani Asyrani komited sepenuhnya untuk melindungi data peribadi anda dan anak anda selaras dengan Akta Perlindungan Data Peribadi (PDPA) 2010 di Malaysia.",
      en: "Pusat Jagaan Durrani Asyrani is fully committed to protecting your and your child's personal data in accordance with the Personal Data Protection Act (PDPA) 2010 of Malaysia."
    },
    sections: [
      {
        title: { ms: "1. Maklumat Yang Kami Kumpul", en: "1. Information We Collect" },
        desc: {
          ms: "Kami mengumpul maklumat yang diperlukan sahaja bagi tujuan pendaftaran dan asuhan anak anda, seperti nama penuh, nombor kad pengenalan (pilihan), alamat tempat tinggal, rekod kesihatan dan vaksinasi anak, serta maklumat hubungan kecemasan ibu bapa.",
          en: "We only collect information necessary for the registration and childcare of your child, such as full names, identity card numbers (optional), home addresses, child medical and immunization records, and emergency contact details."
        },
        icon: Eye
      },
      {
        title: { ms: "2. Penggunaan Maklumat Peribadi", en: "2. How We Use Information" },
        desc: {
          ms: "Maklumat yang dikumpulkan digunakan semata-mata untuk menguruskan enrolmen anak, menghubungi ibu bapa semasa kecemasan, memaklumkan perkembangan harian anak, dan menguruskan pentadbiran yuran pusat jagaan. Maklumat ini tidak akan dijual atau dikongsi kepada pihak ketiga yang tidak berkaitan.",
          en: "The collected information is used solely to manage child enrolment, contact parents in emergencies, update on the child's daily progress, and handle administrative fee payments. We do not sell or share this data with unrelated third parties."
        },
        icon: FileCheck
      },
      {
        title: { ms: "3. Keselamatan dan Penyimpanan Data", en: "3. Security & Storage" },
        desc: {
          ms: "Semua maklumat peribadi (fizikal mahupun digital) disimpan secara selamat dengan kawalan akses yang ketat. Hanya pendidik dan pengurusan pusat jagaan yang diberi kebenaran khas sahaja yang boleh mengakses maklumat tersebut demi tujuan tugas.",
          en: "All personal information (physical and digital) is stored securely with strict access control. Only authorized educators and management representatives are permitted to access this information for task-related purposes."
        },
        icon: Lock
      },
      {
        title: { ms: "4. Hak Akses dan Kemas Kini Data", en: "4. Data Access & Corrections" },
        desc: {
          ms: "Ibu bapa mempunyai hak penuh untuk mengakses, membetulkan, atau memadam maklumat peribadi yang telah diberikan pada bila-bila masa dengan menghubungi pengurusan Pusat Jagaan Durrani Asyrani secara bertulis.",
          en: "Parents retain the full right to access, correct, or request deletion of their personal data at any time by contacting the management of Pusat Jagaan Durrani Asyrani in writing."
        },
        icon: Shield
      }
    ]
  };

  return (
    <div className="flex flex-col w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeading
          title={texts.title[locale]}
          subtitle={texts.subtitle[locale]}
          description={texts.intro[locale]}
          badgeColor="peach"
        />

        {/* Content list */}
        <div className="flex flex-col gap-6 mb-12">
          {texts.sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-2xl bg-brand-peach/30 text-rose-950 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-900">
                    {sec.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-655 leading-relaxed">
                    {sec.desc[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing note */}
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-3xl text-center text-xs text-slate-455 leading-relaxed">
          {locale === "ms"
            ? "Sekiranya anda mempunyai sebarang soalan mengenai Dasar Privasi ini, sila hubungi kami terus melalui e-mel rasmi di taskadurniasyirani@gmail.com."
            : "If you have any questions regarding this Privacy Policy, please contact us directly via email at taskadurniasyirani@gmail.com."}
        </div>

      </div>
    </div>
  );
}
