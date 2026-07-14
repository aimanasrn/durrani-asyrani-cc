"use client";

import { use, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, Share2, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { translations, type Locale } from "@/content/translations";
import { businessInfo } from "@/content/business";
import { programmesList } from "@/content/programmes";
import { contactFormSchema, type ContactFormData, getErrorMessage } from "@/lib/validation/schemas";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Input, Textarea, Select, Checkbox, FormField } from "@/components/ui/FormElements";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ContactPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData & { website?: string }>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      parentName: "",
      phone: "",
      email: "",
      childAge: "",
      preferredProgramme: "",
      preferredStartDate: "",
      message: "",
      consent: false,
      website: ""
    }
  });

  const onSubmit = async (data: ContactFormData & { website?: string }) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Failed to submit.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      console.error("Contact form error:", err);
      setSubmitError(
        locale === "ms"
          ? "Maaf, mesej tidak dapat dihantar. Sila cuba lagi atau hubungi kami melalui WhatsApp."
          : "Sorry, the message could not be sent. Please try again or contact us via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const programmeOptions = programmesList.map((prog) => ({
    value: prog.id,
    label: prog.title[locale]
  }));

  const texts = {
    title: { ms: "Hubungi Kami", en: "Contact Us" },
    subtitle: { ms: "Mulakan Pertanyaan Enrolmen", en: "Start Your Enrolment Enquiry" },
    intro: {
      ms: "Sila isi borang di bawah atau hubungi kami terus melalui WhatsApp. Kami sedia menjawab soalan berkenaan yuran, jadual, dan lawatan.",
      en: "Please fill out the form below or contact us directly on WhatsApp. We are ready to answer your questions on fees, schedules, and visits."
    },
    contactCardHeader: { ms: "Maklumat Hubungan", en: "Contact Details" },
    socialsHeader: { ms: "Ikuti Media Sosial Kami", en: "Follow Our Social Media" },
    hoursHeader: { ms: "Waktu Operasi Anggaran", en: "Estimated Operating Hours" },
    formHeader: { ms: "Borang Pertanyaan Am", en: "General Enquiry Form" }
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Details Card - lg:col-span-5 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Info */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs flex flex-col gap-6">
              <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-55 pb-3">
                {texts.contactCardHeader[locale]}
              </h3>

              <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-peach-dark shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-800">{locale === "ms" ? "Alamat Pusat" : "Centre Address"}</span>
                    <span className="mt-1 leading-relaxed">{businessInfo.formattedAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4.5 h-4.5 text-brand-yellow shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-800">{locale === "ms" ? "Telefon & WhatsApp" : "Phone & WhatsApp"}</span>
                    <a href={`tel:${businessInfo.phoneRaw}`} className="mt-1 hover:text-brand-peach transition-colors font-semibold">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4.5 h-4.5 text-brand-green shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-800">{locale === "ms" ? "E-mel Rasmi" : "Official Email"}</span>
                    <a href={`mailto:${businessInfo.email}`} className="mt-1 hover:text-brand-peach transition-colors font-semibold break-all">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-3.5 rounded-2xl bg-brand-green-light border border-emerald-200 text-emerald-800 font-bold hover:bg-emerald-100 transition-all text-xs sm:text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                <span>{translations.buttons.whatsappNow[locale]}</span>
              </a>
            </div>

            {/* Operating Hours Placeholder */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs flex flex-col gap-4">
              <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-brand-blue" />
                {texts.hoursHeader[locale]}
              </h3>
              <p className="text-xs text-slate-500 italic leading-relaxed">
                ⚠️ {businessInfo.operatingHoursPlaceholder[locale]}
              </p>
            </div>

            {/* Socials Placeholder */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs flex flex-col gap-4">
              <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                <Share2 className="w-4.5 h-4.5 text-brand-peach" />
                {texts.socialsHeader[locale]}
              </h3>
              <div className="flex gap-3">
                <span className="text-xs text-slate-400 italic">
                  ({locale === "ms" ? "Pautan media sosial diaktifkan kemudian." : "Social media URLs will be linked later."})
                </span>
              </div>
            </div>

          </div>

          {/* Form - lg:col-span-7 */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs">
              <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-50 pb-3 mb-6">
                {texts.formHeader[locale]}
              </h3>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-10 px-4 gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-slate-900">
                    {locale === "ms" ? "Berjaya Dihantar!" : "Successfully Sent!"}
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
                    {locale === "ms"
                      ? "Terima kasih! Mesej anda telah berjaya dihantar. Pihak kami akan menghubungi anda secepat mungkin."
                      : "Thank you! Your message has been successfully sent. We will contact you as soon as possible."}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-2xl bg-primary text-white text-xs font-bold hover:bg-primary-light transition-colors cursor-pointer"
                  >
                    {locale === "ms" ? "Hantar Mesej Baru" : "Send Another Message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  {submitError && (
                    <div className="p-4 rounded-2xl bg-red-50 text-red-700 border border-red-100 text-xs sm:text-sm font-medium flex items-start gap-2.5">
                      <span className="shrink-0 text-base mt-0.5">⚠️</span>
                      <span className="leading-relaxed">{submitError}</span>
                    </div>
                  )}

                  {/* Honeypot field - hidden from human users */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      placeholder="Do not fill this"
                      {...register("website")}
                    />
                  </div>

                  <FormField
                    label={translations.formLabels.parentName[locale]}
                    error={getErrorMessage(errors.parentName?.message, locale)}
                    required
                  >
                    <Input
                      placeholder={locale === "ms" ? "Contoh: Aishah binti Ali" : "Example: Jane Doe"}
                      error={!!errors.parentName}
                      disabled={isSubmitting}
                      {...register("parentName")}
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label={translations.formLabels.phone[locale]}
                      error={getErrorMessage(errors.phone?.message, locale)}
                      required
                    >
                      <Input
                        type="tel"
                        placeholder="e.g. +60132639114"
                        error={!!errors.phone}
                        disabled={isSubmitting}
                        {...register("phone")}
                      />
                    </FormField>

                    <FormField
                      label={translations.formLabels.email[locale]}
                      error={getErrorMessage(errors.email?.message, locale)}
                      required
                    >
                      <Input
                        type="email"
                        placeholder="e.g. email@gmail.com"
                        error={!!errors.email}
                        disabled={isSubmitting}
                        {...register("email")}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <FormField
                      label={translations.formLabels.childAge[locale]}
                      error={getErrorMessage(errors.childAge?.message, locale)}
                      required
                    >
                      <Input
                        placeholder="e.g. 3"
                        error={!!errors.childAge}
                        disabled={isSubmitting}
                        {...register("childAge")}
                      />
                    </FormField>

                    <FormField
                      label={translations.formLabels.preferredProgramme[locale]}
                      error={getErrorMessage(errors.preferredProgramme?.message, locale)}
                      required
                    >
                      <Select
                        options={programmeOptions}
                        placeholder={locale === "ms" ? "-- Pilih Program --" : "-- Select Programme --"}
                        error={!!errors.preferredProgramme}
                        disabled={isSubmitting}
                        {...register("preferredProgramme")}
                      />
                    </FormField>

                    <FormField
                      label={translations.formLabels.preferredStartDate[locale]}
                      error={getErrorMessage(errors.preferredStartDate?.message, locale)}
                      required
                    >
                      <Input
                        type="date"
                        error={!!errors.preferredStartDate}
                        disabled={isSubmitting}
                        {...register("preferredStartDate")}
                      />
                    </FormField>
                  </div>

                  <FormField
                    label={translations.formLabels.message[locale]}
                    error={getErrorMessage(errors.message?.message, locale)}
                    required
                  >
                    <Textarea
                      placeholder={locale === "ms" ? "Tuliskan sebarang soalan atau catatan khas anda di sini..." : "Write your questions or notes here..."}
                      error={!!errors.message}
                      disabled={isSubmitting}
                      {...register("message")}
                    />
                  </FormField>

                  <FormField label="" error={getErrorMessage(errors.consent?.message, locale)}>
                    <Checkbox
                      label={translations.formLabels.consentContact[locale]}
                      error={!!errors.consent}
                      disabled={isSubmitting}
                      {...register("consent")}
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-primary text-white font-bold hover:bg-primary-light transition-all active:scale-95 disabled:opacity-50 text-sm shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? translations.buttons.submitting[locale]
                        : translations.buttons.submit[locale]}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
