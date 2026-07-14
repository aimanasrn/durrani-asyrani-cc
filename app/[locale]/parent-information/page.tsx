"use client";

import { use } from "react";
import { ListChecks, AlertCircle, FileText, ClipboardList, Info, HelpCircle, PhoneCall } from "lucide-react";
import { type Locale } from "@/content/translations";
import { faqList } from "@/content/faq";
import { businessInfo } from "@/content/business";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ParentInformationPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  const texts = {
    title: { ms: "Panduan Ibu Bapa", en: "Parent Information" },
    subtitle: { ms: "Pendaftaran, Polisi, dan Persediaan Enrolmen", en: "Registration, Policies, & Enrolment Readiness" },
    intro: {
      ms: "Bahagian ini mengandungi panduan lengkap untuk persediaan anak-anak menyertai Pusat Jagaan Durrani Asyrani, bermula daripada langkah pendaftaran sehinggalah senarai keperluan harian.",
      en: "This section provides a complete guide for parents preparing their children to join Pusat Jagaan Durrani Asyrani, from registration steps to daily items lists."
    },
    processTitle: { ms: "Langkah-Langkah Pendaftaran", en: "Registration Process Steps" },
    processSubtitle: { ms: "Cadangan alur pendaftaran (Sila sahkan dengan pihak pusat)", en: "Suggested registration flow (Please verify with the centre)" },
    processSteps: [
      { num: "1", title: { ms: "Hubungi Pihak Pusat", en: "Contact the Centre" }, desc: { ms: "Lakukan pertanyaan awal melalui WhatsApp atau borang Hubungi Kami di laman web.", en: "Make an initial enquiry via WhatsApp or the Contact Us form on our website." } },
      { num: "2", title: { ms: "Semak Kekosongan", en: "Check Availability" }, desc: { ms: "Pihak kami akan menyemak kekosongan mengikut program pilihan dan kumpulan umur anak.", en: "We will check for openings matching your preferred programme and child's age." } },
      { num: "3", title: { ms: "Jadualkan Lawatan", en: "Schedule a Centre Visit" }, desc: { ms: "Datang melawat pusat jagaan secara janji temu untuk melihat persekitaran kami.", en: "Visit the childcare centre by appointment to inspect our physical environment." } },
      { num: "4", title: { ms: "Lengkapkan Borang", en: "Fill Registration Form" }, desc: { ms: "Isi borang pendaftaran rasmi yang dibekalkan semasa lawatan atau janji temu.", en: "Fill in the official enrolment forms provided during the visit or appointment." } },
      { num: "5", title: { ms: "Hantar Dokumen Sokongan", en: "Submit Supporting Documents" }, desc: { ms: "Hantar salinan sijil lahir anak dan kad pengenalan ibu bapa (rujuk Checklist).", en: "Submit copies of child birth certificate and parent identity cards (see Checklist)." } },
      { num: "6", title: { ms: "Sahkan Program & Yuran", en: "Confirm Programme & Fees" }, desc: { ms: "Pihak pusat akan mengesahkan kesesuaian jadual dan pengiraan yuran rasmi.", en: "The centre will confirm schedule suitability and finalize official fees." } },
      { num: "7", title: { ms: "Terima Pengesahan Enrolmen", en: "Receive Enrolment Approval" }, desc: { ms: "Anak anda secara rasmi diterima masuk selepas bayaran pendaftaran selesai.", en: "Your child is officially admitted after the registration payment is completed." } }
    ],
    docHeader: { ms: "Senarai Semak Dokumen", en: "Documents Checklist" },
    docsList: [
      { ms: "Salinan Sijil Lahir Anak", en: "Copy of Child's Birth Certificate" },
      { ms: "Salinan Kad Pengenalan Ibu & Bapa / Penjaga", en: "Copy of Identity Card of Mother & Father / Guardian" },
      { ms: "Salinan Buku Rekod Imunisasi Anak (Halaman hadapan & rekod vaksin)", en: "Copy of Child's Immunization Record Book (Front cover & vaccine history)" },
      { ms: "Gambar bersaiz pasport anak (Sila semak jumlah dengan pusat)", en: "Passport-sized photographs of the child (Please confirm quantity with centre)" }
    ],
    itemsHeader: { ms: "Perkara Yang Perlu Dibawa", en: "Items to Bring Daily" },
    itemsList: [
      { ms: "1-2 pasang pakaian pertukaran (berlabel nama)", en: "1-2 changes of clothes (labeled with child's name)" },
      { ms: "Lampin pakai buang mencukupi (jika masih memakai)", en: "Sufficient diapers (if still wearing)" },
      { ms: "Tuala mandi kecil & kelengkapan mandi peribadi", en: "Small bath towel & personal wash items" },
      { ms: "Botol air kosong atau botol susu berlabel", en: "Water bottle or labeled milk bottle" },
      { ms: "Pakaian sejuk / sweater kecil (pilihan)", en: "Light sweater / cardigan (optional)" }
    ],
    policiesHeader: { ms: "Polisi & Reminder Penting", en: "Important Policies & Reminders" },
    policies: [
      {
        title: { ms: "Polisi Kesihatan & Gejala", en: "Health & Illness Policy" },
        desc: { ms: "Demi menjaga kebajikan semua anak-anak, kanak-kanak yang mengalami gejala berjangkit (demam, batuk kuat, selesema teruk, cirit-birit, atau jangkitan kulit) tidak dibenarkan hadir ke pusat jagaan. Ibu bapa diminta menjaga anak di rumah sehingga pulih sepenuhnya.", en: "To protect all children, kids experiencing contagious symptoms (fever, heavy cough, severe flu, diarrhea, or skin infections) are not allowed at the centre. Parents are advised to care for them at home until fully recovered." }
      },
      {
        title: { ms: "Polisi Yuran & Kelewatan (Placeholder)", en: "Fees & Late Pick-up Policy (Placeholder)" },
        desc: { ms: "Kandungan Placeholder: Pembayaran yuran biasanya dilakukan pada awal bulan. Denda kelewatan penjemputan anak tertakluk kepada polisi rasmi pengurusan pusat. Sila hubungi pusat untuk dokumen polisi bertulis yang lengkap.", en: "Placeholder Content: Monthly payments are typically made at the start of the month. Late pickup surcharges are subject to the centre's official written policies. Please ask the centre for the full official policy document." }
      },
      {
        title: { ms: "Hubungan Kecemasan", en: "Emergency Contact Protocol" },
        desc: { ms: "Sekiranya berlaku sebarang kecemasan, pihak kami akan menghubungi ibu bapa secara terus. Sila pastikan nombor telefon kecemasan yang didaftarkan sentiasa aktif dan boleh dihubungi.", en: "In the event of an emergency, our educators will contact parents immediately. Please ensure the emergency phone numbers registered are active and reachable." }
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

        {/* 1. Registration Process */}
        <div className="bg-white rounded-4xl p-6 sm:p-10 border border-slate-100 shadow-xs mb-16">
          <div className="text-center mb-10">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
              {texts.processTitle[locale]}
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 italic">
              * {texts.processSubtitle[locale]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {texts.processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-50/50 rounded-3xl p-5 border border-slate-100 flex flex-col gap-3 relative"
              >
                <span className="absolute top-4 right-4 text-3xl font-heading font-bold text-brand-peach/50 select-none">
                  {step.num}
                </span>
                <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-800 pr-8">
                  {step.title[locale]}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Documents & Items to Bring Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Docs checklist */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs flex flex-col gap-5">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 flex items-center gap-2 border-b border-slate-50 pb-3">
              <FileText className="w-5 h-5 text-brand-peach-dark" />
              {texts.docHeader[locale]}
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
              {texts.docsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-peach/30 text-rose-950 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Items Checklist */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs flex flex-col gap-5">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 flex items-center gap-2 border-b border-slate-50 pb-3">
              <ClipboardList className="w-5 h-5 text-brand-yellow" />
              {texts.itemsHeader[locale]}
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
              {texts.itemsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-yellow/30 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. Policies & Reminders */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-xl text-slate-900 text-center mb-10">
            {texts.policiesHeader[locale]}
          </h3>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {texts.policies.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-amber-600">
                  <AlertCircle className="w-5 h-5 text-slate-600" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
                    {p.title[locale]}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.desc[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Support Box */}
        <div className="max-w-2xl mx-auto bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-6 text-center flex flex-col items-center gap-4">
          <PhoneCall className="w-8 h-8 text-slate-400" />
          <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
            {locale === "ms" ? "Ada Sebarang Kemusykilan?" : "Have Questions or Uncertainties?"}
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            {locale === "ms"
              ? "Kami gembira untuk membimbing anda. Sila hubungi pihak kami melalui talian WhatsApp rasmi untuk semakan pantas."
              : "We are happy to assist. Please contact our team on our official WhatsApp line for quick support."}
          </p>
          <a
            href={`https://wa.me/${businessInfo.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-2xl bg-primary text-white text-xs font-bold shadow-xs hover:bg-primary-light transition-colors"
          >
            {locale === "ms" ? "Hubungi Sekarang" : "Contact Now"}
          </a>
        </div>

      </div>
    </div>
  );
}
