"use client";

import { use, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, MessageCircle, FileHeart, Calendar, User, Baby, HelpCircle } from "lucide-react";
import { translations, type Locale } from "@/content/translations";
import { programmesList } from "@/content/programmes";
import { registrationFormSchema, type RegistrationFormData, getErrorMessage } from "@/lib/validation/schemas";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Input, Select, Checkbox, FormField, Textarea } from "@/components/ui/FormElements";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function RegistrationPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      parentName: "",
      icNumber: "",
      phone: "",
      whatsapp: "",
      email: "",
      homeArea: "",
      childName: "",
      childDob: "",
      childAge: "",
      childGender: "",
      preferredProgramme: "",
      preferredStartDate: "",
      notes: "",
      preferredContactMethod: "",
      preferredVisitDate: "",
      source: "",
      consentContact: false,
      consentAccurate: false,
      consentPrivacy: false
    }
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    // Simulate API Submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Registration of Interest form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  const programmeOptions = programmesList.map((prog) => ({
    value: prog.id,
    label: prog.title[locale]
  }));

  const contactMethodOptions = [
    { value: "whatsapp", label: locale === "ms" ? "WhatsApp" : "WhatsApp" },
    { value: "phone", label: locale === "ms" ? "Panggilan Telefon" : "Phone Call" },
    { value: "email", label: locale === "ms" ? "E-mel" : "Email" }
  ];

  const sourceOptions = [
    { value: "facebook", label: "Facebook" },
    { value: "instagram", label: "Instagram" },
    { value: "search", label: locale === "ms" ? "Carian Google" : "Google Search" },
    { value: "friend", label: locale === "ms" ? "Kawan / Keluarga" : "Friend / Family" },
    { value: "banner", label: locale === "ms" ? "Banner / Papan Iklan" : "Signboard / Banner" },
    { value: "other", label: locale === "ms" ? "Lain-lain" : "Others" }
  ];

  const texts = {
    title: { ms: "Daftar Minat Enrolmen", en: "Register Enrolment Interest" },
    subtitle: { ms: "Borang Kemasukan Awal Kanak-Kanak", en: "Early Childhood Intake Form" },
    intro: {
      ms: "Sila lengkapkan borang pendaftaran minat di bawah untuk mendaftarkan minat anak anda. Pihak kami akan menyemak slot kekosongan dan menghubungi anda segera.",
      en: "Please complete the registration of interest form below to register your child. We will verify slot availability and contact you shortly."
    },
    parentSec: { ms: "Maklumat Ibu Bapa / Penjaga", en: "Parent / Guardian Information" },
    childSec: { ms: "Maklumat Anak", en: "Child Information" },
    enquirySec: { ms: "Pilihan Kemasukan & Janji Temu", en: "Intake Options & Appointments" },
    consentSec: { ms: "Persetujuan & Perakuan", en: "Consent & Declaration" },
    whatsappAlt: {
      title: { ms: "Pendaftaran Pantas via WhatsApp", en: "Quick Registration via WhatsApp" },
      desc: {
        ms: "Sekiranya anda menghadapi kesukaran mengisi borang, anda boleh mendaftarkan minat anak secara terus melalui talian WhatsApp rasmi kami.",
        en: "If you face any issues filling in this form, you can register your interest directly through our official WhatsApp line."
      }
    }
  };

  const whatsappRegLink = getWhatsAppLink("registration");

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

        {/* WhatsApp Alternative */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="font-heading font-semibold text-sm sm:text-base text-emerald-950">
                {texts.whatsappAlt.title[locale]}
              </h4>
              <p className="text-xs text-emerald-800 leading-normal max-w-lg">
                {texts.whatsappAlt.desc[locale]}
              </p>
            </div>
          </div>
          <a
            href={whatsappRegLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center shadow-xs whitespace-nowrap active:scale-95 transition-all"
          >
            {locale === "ms" ? "Daftar Lewat WhatsApp" : "Register via WhatsApp"}
          </a>
        </div>

        {/* Main Intake Form */}
        <div className="bg-white rounded-4xl p-6 sm:p-10 border border-slate-100 shadow-xs">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                {translations.formLabels.successTitle[locale]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                {translations.formLabels.successMsgReg[locale]}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-4 px-6 py-3 rounded-2xl bg-primary text-white text-xs sm:text-sm font-bold hover:bg-primary-light transition-all"
              >
                {locale === "ms" ? "Daftar Minat Anak Lain" : "Register Another Child"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
              
              {/* SECTION A: Parent Information */}
              <div className="flex flex-col gap-5">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2 border-b border-slate-50 pb-2">
                  <User className="w-5 h-5 text-brand-peach-dark" />
                  {texts.parentSec[locale]}
                </h3>

                <FormField
                  label={translations.formLabels.parentName[locale]}
                  error={getErrorMessage(errors.parentName?.message, locale)}
                  required
                >
                  <Input
                    placeholder={locale === "ms" ? "e.g. Ahmad bin Kamal" : "e.g. John Doe"}
                    error={!!errors.parentName}
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
                      {...register("phone")}
                    />
                  </FormField>

                  <FormField
                    label={translations.formLabels.whatsapp[locale]}
                    error={getErrorMessage(errors.whatsapp?.message, locale)}
                  >
                    <Input
                      type="tel"
                      placeholder="e.g. +60132639114 (jika berbeza)"
                      error={!!errors.whatsapp}
                      {...register("whatsapp")}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label={translations.formLabels.email[locale]}
                    error={getErrorMessage(errors.email?.message, locale)}
                    required
                  >
                    <Input
                      type="email"
                      placeholder="e.g. email@gmail.com"
                      error={!!errors.email}
                      {...register("email")}
                    />
                  </FormField>

                  <FormField
                    label={translations.formLabels.homeArea[locale]}
                    error={getErrorMessage(errors.homeArea?.message, locale)}
                    required
                  >
                    <Input
                      placeholder={locale === "ms" ? "e.g. Bandar Uda Utama" : "e.g. Skudai"}
                      error={!!errors.homeArea}
                      {...register("homeArea")}
                    />
                  </FormField>
                </div>

                <FormField
                  label={translations.formLabels.icNumber[locale]}
                  error={getErrorMessage(errors.icNumber?.message, locale)}
                >
                  <Input
                    placeholder="e.g. 881020-01-5432"
                    error={!!errors.icNumber}
                    {...register("icNumber")}
                  />
                </FormField>
              </div>

              {/* SECTION B: Child Information */}
              <div className="flex flex-col gap-5">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2 border-b border-slate-50 pb-2">
                  <Baby className="w-5 h-5 text-brand-yellow" />
                  {texts.childSec[locale]}
                </h3>

                <FormField
                  label={translations.formLabels.childName[locale]}
                  error={getErrorMessage(errors.childName?.message, locale)}
                  required
                >
                  <Input
                    placeholder={locale === "ms" ? "e.g. Adam bin Ahmad" : "e.g. Timmy Doe"}
                    error={!!errors.childName}
                    {...register("childName")}
                  />
                </FormField>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <FormField
                    label={translations.formLabels.childDob[locale]}
                    error={getErrorMessage(errors.childDob?.message, locale)}
                    required
                  >
                    <Input
                      type="date"
                      error={!!errors.childDob}
                      {...register("childDob")}
                    />
                  </FormField>

                  <FormField
                    label={translations.formLabels.childAge[locale]}
                    error={getErrorMessage(errors.childAge?.message, locale)}
                    required
                  >
                    <Input
                      placeholder="e.g. 3"
                      error={!!errors.childAge}
                      {...register("childAge")}
                    />
                  </FormField>

                  <FormField
                    label={translations.formLabels.childGender[locale]}
                    error={getErrorMessage(errors.childGender?.message, locale)}
                  >
                    <Select
                      options={[
                        { value: "boy", label: translations.formLabels.genderBoy[locale] },
                        { value: "girl", label: translations.formLabels.genderGirl[locale] }
                      ]}
                      placeholder={locale === "ms" ? "-- Pilih --" : "-- Choose --"}
                      error={!!errors.childGender}
                      {...register("childGender")}
                    />
                  </FormField>
                </div>
              </div>

              {/* SECTION C: Enquiry Info */}
              <div className="flex flex-col gap-5">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2 border-b border-slate-50 pb-2">
                  <Calendar className="w-5 h-5 text-brand-blue" />
                  {texts.enquirySec[locale]}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label={translations.formLabels.preferredProgramme[locale]}
                    error={getErrorMessage(errors.preferredProgramme?.message, locale)}
                    required
                  >
                    <Select
                      options={programmeOptions}
                      placeholder={locale === "ms" ? "-- Pilih Program --" : "-- Select Programme --"}
                      error={!!errors.preferredProgramme}
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
                      {...register("preferredStartDate")}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <FormField
                    label={translations.formLabels.preferredContactMethod[locale]}
                    error={getErrorMessage(errors.preferredContactMethod?.message, locale)}
                    required
                  >
                    <Select
                      options={contactMethodOptions}
                      placeholder={locale === "ms" ? "-- Pilih --" : "-- Choose --"}
                      error={!!errors.preferredContactMethod}
                      {...register("preferredContactMethod")}
                    />
                  </FormField>

                  <FormField
                    label={translations.formLabels.preferredVisitDate[locale]}
                    error={getErrorMessage(errors.preferredVisitDate?.message, locale)}
                  >
                    <Input
                      type="date"
                      error={!!errors.preferredVisitDate}
                      {...register("preferredVisitDate")}
                    />
                  </FormField>

                  <FormField
                    label={translations.formLabels.source[locale]}
                    error={getErrorMessage(errors.source?.message, locale)}
                  >
                    <Select
                      options={sourceOptions}
                      placeholder={locale === "ms" ? "-- Pilih --" : "-- Choose --"}
                      error={!!errors.source}
                      {...register("source")}
                    />
                  </FormField>
                </div>

                <FormField
                  label={translations.formLabels.notes[locale]}
                  error={getErrorMessage(errors.notes?.message, locale)}
                >
                  <Textarea
                    placeholder={locale === "ms" ? "e.g. Alahan makanan, ketidakselesaan sensori, atau catatan khas perkembangan anak..." : "e.g. Food allergies, sensory discomfort, or specific child development notes..."}
                    error={!!errors.notes}
                    {...register("notes")}
                  />
                </FormField>
              </div>

              {/* SECTION D: Consents */}
              <div className="flex flex-col gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-100">
                <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-800 flex items-center gap-2 mb-2">
                  <FileHeart className="w-4.5 h-4.5 text-slate-600" />
                  {texts.consentSec[locale]}
                </h3>

                <FormField label="" error={getErrorMessage(errors.consentContact?.message, locale)}>
                  <Checkbox
                    label={translations.formLabels.consentContact[locale]}
                    error={!!errors.consentContact}
                    {...register("consentContact")}
                  />
                </FormField>

                <FormField label="" error={getErrorMessage(errors.consentAccurate?.message, locale)}>
                  <Checkbox
                    label={translations.formLabels.consentAccurate[locale]}
                    error={!!errors.consentAccurate}
                    {...register("consentAccurate")}
                  />
                </FormField>

                <FormField label="" error={getErrorMessage(errors.consentPrivacy?.message, locale)}>
                  <Checkbox
                    label={translations.formLabels.consentPrivacy[locale]}
                    error={!!errors.consentPrivacy}
                    {...register("consentPrivacy")}
                  />
                </FormField>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary-light transition-all active:scale-95 disabled:opacity-50 text-sm shadow-xs cursor-pointer"
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
  );
}
