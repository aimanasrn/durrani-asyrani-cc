export type Locale = "ms" | "en";

export const translations = {
  announcement: {
    ms: "Pendaftaran kini dibuka — Hubungi kami untuk pertanyaan dan lawatan pusat.",
    en: "Registration now open — Contact us for enquiries and centre visits."
  },
  nav: {
    home: { ms: "Utama", en: "Home" },
    about: { ms: "Tentang Kami", en: "About Us" },
    programmes: { ms: "Program", en: "Programmes" },
    activities: { ms: "Aktiviti", en: "Activities" },
    facilities: { ms: "Kemudahan", en: "Facilities" },
    gallery: { ms: "Galeri", en: "Gallery" },
    parentInfo: { ms: "Maklumat Ibu Bapa", en: "Parent Info" },
    contact: { ms: "Hubungi Kami", en: "Contact Us" },
  },
  buttons: {
    whatsapp: { ms: "WhatsApp Kami", en: "WhatsApp Us" },
    register: { ms: "Daftar Minat", en: "Register Interest" },
    aboutUs: { ms: "Kenali Kami", en: "Learn More" },
    learnMore: { ms: "Ketahui Lebih Lanjut", en: "Learn More" },
    visitUs: { ms: "Lawati Pusat Kami", en: "Visit Our Centre" },
    submit: { ms: "Hantar", en: "Submit" },
    submitting: { ms: "Menghantar...", en: "Submitting..." },
    contactNow: { ms: "Hubungi Sekarang", en: "Contact Now" },
    whatsappNow: { ms: "WhatsApp Sekarang", en: "WhatsApp Now" },
    backToHome: { ms: "Kembali ke Utama", en: "Back to Home" },
    googleMaps: { ms: "Buka Google Maps", en: "Open Google Maps" },
    waze: { ms: "Buka Waze", en: "Open Waze" },
  },
  formLabels: {
    // Contact & Registration Form
    parentName: { ms: "Nama Penuh Ibu Bapa / Penjaga", en: "Full Name of Parent / Guardian" },
    phone: { ms: "Nombor Telefon", en: "Phone Number" },
    whatsapp: { ms: "Nombor WhatsApp (Jika berbeza)", en: "WhatsApp Number (If different)" },
    email: { ms: "Alamat E-mel", en: "Email Address" },
    icNumber: { ms: "Nombor Kad Pengenalan (Pilihan)", en: "IC / Passport Number (Optional)" },
    homeArea: { ms: "Kawasan Tempat Tinggal (e.g. Skudai, Uda Utama)", en: "Residential Area (e.g. Skudai, Uda Utama)" },
    
    childName: { ms: "Nama Penuh Anak", en: "Child's Full Name" },
    childDob: { ms: "Tarikh Lahir Anak", en: "Child's Date of Birth" },
    childAge: { ms: "Umur Anak", en: "Child's Age" },
    childGender: { ms: "Jantina (Pilihan)", en: "Gender (Optional)" },
    genderBoy: { ms: "Lelaki", en: "Boy" },
    genderGirl: { ms: "Perempuan", en: "Girl" },
    
    preferredProgramme: { ms: "Program Pilihan", en: "Preferred Programme" },
    preferredStartDate: { ms: "Tarikh Mula Pilihan", en: "Preferred Start Date" },
    preferredContactMethod: { ms: "Kaedah Hubungan Pilihan", en: "Preferred Contact Method" },
    preferredVisitDate: { ms: "Cadangan Tarikh Lawatan Pusat (Pilihan)", en: "Suggested Visit Date (Optional)" },
    source: { ms: "Bagaimana anda mengetahui tentang kami?", en: "How did you hear about us?" },
    
    message: { ms: "Mesej atau Catatan Khas", en: "Message or Special Notes" },
    notes: { ms: "Catatan Khas / Keperluan Khas Anak", en: "Special Notes / Child's Special Needs" },
    
    consentContact: { 
      ms: "Saya bersetuju untuk dihubungi oleh wakil pusat jagaan melalui telefon, WhatsApp, atau e-mel.", 
      en: "I consent to be contacted by the childcare centre representative via phone, WhatsApp, or email." 
    },
    consentAccurate: { 
      ms: "Saya mengesahkan bahawa semua maklumat yang diberikan adalah tepat dan betul.", 
      en: "I confirm that all information provided is accurate and correct." 
    },
    consentPrivacy: { 
      ms: "Saya bersetuju dengan terma Dasar Privasi pusat jagaan ini.", 
      en: "I agree to the terms of the Privacy Policy of this childcare centre." 
    },
    
    validationError: { ms: "Sila betulkan ralat di bawah.", en: "Please correct the errors below." },
    successTitle: { ms: "Terima Kasih!", en: "Thank You!" },
    successMsgContact: { 
      ms: "Pertanyaan anda telah berjaya dihantar. Pihak kami akan menghubungi anda dalam masa terdekat.", 
      en: "Your enquiry has been successfully submitted. We will contact you shortly." 
    },
    successMsgReg: { 
      ms: "Pendaftaran minat anda telah berjaya diterima. Kami akan menyemak kekosongan dan menghubungi anda segera.", 
      en: "Your registration of interest has been successfully received. We will check availability and contact you soon." 
    }
  },
  meta: {
    home: {
      title: "Pusat Jagaan Durrani Asyrani | Childcare Centre Bandar Uda Utama, Skudai",
      desc: "Pusat Jagaan Durrani Asyrani menyediakan persekitaran penjagaan awal kanak-kanak yang selamat, mesra dan tersusun di Skudai, Johor Bahru. Daftar minat anak anda hari ini."
    },
    about: {
      title: "Tentang Kami - Pusat Jagaan Durrani Asyrani",
      desc: "Kenali visi, misi, dan falsafah penjagaan kami di Pusat Jagaan Durrani Asyrani. Kami komited membimbing perkembangan fizikal, sosial dan intelek anak-anak."
    },
    programmes: {
      title: "Program Kami - Pusat Jagaan Durrani Asyrani",
      desc: "Terokai program penjagaan harian, pembelajaran awal, dan aktiviti perkembangan kanak-kanak di Skudai, Johor Bahru."
    },
    activities: {
      title: "Aktiviti Harian - Pusat Jagaan Durrani Asyrani",
      desc: "Lihat contoh jadual harian dan aktiviti kreatif yang menyokong pembelajaran awal dan perkembangan motor anak-anak."
    },
    facilities: {
      title: "Kemudahan Kami - Pusat Jagaan Durrani Asyrani",
      desc: "Ketahui ruang pembelajaran, rehat, bermain, dan aspek keselamatan pusat jagaan kami di Bandar Uda Utama."
    },
    gallery: {
      title: "Galeri Gambar - Pusat Jagaan Durrani Asyrani",
      desc: "Lihat foto persekitaran dan aktiviti riang kanak-kanak di Pusat Jagaan Durrani Asyrani."
    },
    parentInfo: {
      title: "Maklumat Ibu Bapa - Pusat Jagaan Durrani Asyrani",
      desc: "Panduan pendaftaran, senarai dokumen, perkara perlu dibawa, dan dasar pusat jagaan untuk ibu bapa."
    },
    contact: {
      title: "Hubungi Kami - Pusat Jagaan Durrani Asyrani",
      desc: "Hubungi kami di Bandar Uda Utama, Skudai melalui telefon, WhatsApp, atau e-mel untuk lawatan pusat."
    },
    registration: {
      title: "Daftar Minat Enrolmen - Pusat Jagaan Durrani Asyrani",
      desc: "Daftar minat secara dalam talian untuk kemasukan kanak-kanak ke Pusat Jagaan Durrani Asyrani."
    },
    privacy: {
      title: "Dasar Privasi - Pusat Jagaan Durrani Asyrani",
      desc: "Dasar perlindungan maklumat peribadi ibu bapa dan kanak-kanak di Pusat Jagaan Durrani Asyrani."
    }
  }
};
