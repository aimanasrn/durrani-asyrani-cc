import { z } from "zod";

// Shared validation patterns
const phoneRegex = /^[+]?[0-9\s-]{9,15}$/;

export const contactFormSchema = z.object({
  parentName: z.string().min(3, {
    message: JSON.stringify({
      ms: "Nama penuh mestilah sekurang-kurangnya 3 aksara.",
      en: "Full name must be at least 3 characters."
    })
  }),
  phone: z.string().regex(phoneRegex, {
    message: JSON.stringify({
      ms: "Nombor telefon tidak sah. Sila masukkan nombor yang betul.",
      en: "Invalid phone number. Please enter a valid phone number."
    })
  }),
  email: z.string().email({
    message: JSON.stringify({
      ms: "Alamat e-mel tidak sah.",
      en: "Invalid email address."
    })
  }),
  childAge: z.string().min(1, {
    message: JSON.stringify({
      ms: "Sila nyatakan umur anak.",
      en: "Please state the child's age."
    })
  }),
  preferredProgramme: z.string().min(1, {
    message: JSON.stringify({
      ms: "Sila pilih program.",
      en: "Please select a programme."
    })
  }),
  preferredStartDate: z.string().min(1, {
    message: JSON.stringify({
      ms: "Sila pilih tarikh mula.",
      en: "Please select a start date."
    })
  }),
  message: z.string().min(5, {
    message: JSON.stringify({
      ms: "Mesej mestilah sekurang-kurangnya 5 aksara.",
      en: "Message must be at least 5 characters."
    })
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: JSON.stringify({
      ms: "Anda mesti bersetuju dengan syarat hubungan.",
      en: "You must agree to be contacted."
    })
  })
});

export const registrationFormSchema = z.object({
  // Parent info
  parentName: z.string().min(3, {
    message: JSON.stringify({
      ms: "Nama penuh mestilah sekurang-kurangnya 3 aksara.",
      en: "Full name must be at least 3 characters."
    })
  }),
  icNumber: z.string().optional(),
  phone: z.string().regex(phoneRegex, {
    message: JSON.stringify({
      ms: "Nombor telefon tidak sah.",
      en: "Invalid phone number."
    })
  }),
  whatsapp: z.string().optional(),
  email: z.string().email({
    message: JSON.stringify({
      ms: "Alamat e-mel tidak sah.",
      en: "Invalid email address."
    })
  }),
  homeArea: z.string().min(2, {
    message: JSON.stringify({
      ms: "Sila nyatakan kawasan tempat tinggal anda.",
      en: "Please state your residential area."
    })
  }),

  // Child info
  childName: z.string().min(3, {
    message: JSON.stringify({
      ms: "Nama anak mestilah sekurang-kurangnya 3 aksara.",
      en: "Child's name must be at least 3 characters."
    })
  }),
  childDob: z.string().min(1, {
    message: JSON.stringify({
      ms: "Sila nyatakan tarikh lahir anak.",
      en: "Please select the child's date of birth."
    })
  }),
  childAge: z.string().min(1, {
    message: JSON.stringify({
      ms: "Sila masukkan umur anak.",
      en: "Please state the child's age."
    })
  }),
  childGender: z.string().optional(),

  // Enrolment details
  preferredProgramme: z.string().min(1, {
    message: JSON.stringify({
      ms: "Sila pilih program.",
      en: "Please select a programme."
    })
  }),
  preferredStartDate: z.string().min(1, {
    message: JSON.stringify({
      ms: "Sila pilih tarikh mula.",
      en: "Please select a start date."
    })
  }),
  notes: z.string().optional(),

  // Visit details
  preferredContactMethod: z.string().min(1, {
    message: JSON.stringify({
      ms: "Sila pilih kaedah hubungan pilihan.",
      en: "Please select a contact method."
    })
  }),
  preferredVisitDate: z.string().optional(),
  source: z.string().optional(),

  // Consents
  consentContact: z.boolean().refine((val) => val === true, {
    message: JSON.stringify({
      ms: "Persetujuan untuk dihubungi diperlukan.",
      en: "Consent to be contacted is required."
    })
  }),
  consentAccurate: z.boolean().refine((val) => val === true, {
    message: JSON.stringify({
      ms: "Pengesahan ketepatan maklumat diperlukan.",
      en: "Confirmation of accuracy is required."
    })
  }),
  consentPrivacy: z.boolean().refine((val) => val === true, {
    message: JSON.stringify({
      ms: "Persetujuan Dasar Privasi diperlukan.",
      en: "Agreement to the Privacy Policy is required."
    })
  })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type RegistrationFormData = z.infer<typeof registrationFormSchema>;

export function getErrorMessage(errorMsg: string | undefined, locale: "ms" | "en"): string | undefined {
  if (!errorMsg) return undefined;
  try {
    const parsed = JSON.parse(errorMsg);
    return parsed[locale] || errorMsg;
  } catch {
    return errorMsg;
  }
}
