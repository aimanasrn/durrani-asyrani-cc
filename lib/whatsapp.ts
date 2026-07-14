import { businessInfo } from "@/content/business";

export type WhatsAppEnquiryType = "general" | "registration" | "visit" | "fees" | "programme";

const messages = {
  general: "Assalamualaikum, saya ingin bertanya tentang pendaftaran dan program di Pusat Jagaan Durrani Asyrani.",
  registration: "Assalamualaikum, saya ingin mendaftar minat kemasukan anak di Pusat Jagaan Durrani Asyrani. Sila bantu saya dengan maklumat lanjut.",
  visit: "Assalamualaikum, saya ingin menjadualkan lawatan ke Pusat Jagaan Durrani Asyrani untuk anak saya. Bilakah tarikh dan waktu bersesuaian?",
  fees: "Assalamualaikum, saya ingin bertanya berkenaan struktur yuran pendaftaran dan bulanan bagi Pusat Jagaan Durrani Asyrani.",
  programme: "Assalamualaikum, saya ingin bertanya maklumat lanjut berkenaan program di Pusat Jagaan Durrani Asyrani."
};

export function getWhatsAppLink(type: WhatsAppEnquiryType = "general", customProgramme?: string): string {
  let messageText = messages[type];
  
  if (type === "programme" && customProgramme) {
    messageText = `Assalamualaikum, saya ingin bertanya maklumat lanjut berkenaan program "${customProgramme}" di Pusat Jagaan Durrani Asyrani.`;
  }
  
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${businessInfo.phoneRaw}?text=${encodedText}`;
}
