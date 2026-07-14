export interface FaqItem {
  id: string;
  question: { ms: string; en: string };
  answer: { ms: string; en: string };
}

export const faqList: FaqItem[] = [
  {
    id: "umur",
    question: {
      ms: "Apakah kumpulan umur yang diterima di pusat jagaan ini?",
      en: "What age groups are accepted at this childcare centre?"
    },
    answer: {
      ms: "Sila hubungi pihak pusat untuk maklumat terkini mengenai kumpulan umur kanak-kanak yang kami terima pada masa ini.",
      en: "Please contact the centre for the latest information on the specific age groups we currently accept."
    }
  },
  {
    id: "waktu-operasi",
    question: {
      ms: "Apakah waktu operasi Pusat Jagaan Durrani Asyrani?",
      en: "What are the operating hours of Pusat Jagaan Durrani Asyrani?"
    },
    answer: {
      ms: "Sila hubungi pihak pusat untuk maklumat waktu operasi terkini, termasuk polisi penghantaran awal dan penjemputan lewat.",
      en: "Please contact the centre directly for the latest operating hours, including early drop-off and late pick-up policies."
    }
  },
  {
    id: "proses-pendaftaran",
    question: {
      ms: "Bagaimanakah proses pendaftaran kemasukan anak?",
      en: "How does the child enrolment/registration process work?"
    },
    answer: {
      ms: "Ibu bapa boleh bermula dengan mengisi borang Daftar Minat di laman web kami atau menghubungi kami melalui WhatsApp. Kami akan menjadualkan lawatan pusat terlebih dahulu bagi membincangkan kekosongan dan kelayakan program.",
      en: "Parents can start by filling out the Register Interest form on our website or contacting us via WhatsApp. We will then schedule a centre visit to discuss availability and programme eligibility."
    }
  },
  {
    id: "dokumen-diperlukan",
    question: {
      ms: "Apakah dokumen yang diperlukan untuk pendaftaran?",
      en: "What documents are required for registration?"
    },
    answer: {
      ms: "Dokumen asas termasuk salinan Sijil Lahir anak, salinan kad pengenalan ibu dan bapa/penjaga, buku rekod imunisasi anak, dan gambar bersaiz pasport anak (Sila hubungi pihak pusat untuk senarai rasmi penuh).",
      en: "Basic documents include a copy of the child's birth certificate, copies of parent/guardian identity cards, the child's immunization record book, and passport-sized photos of the child (please contact the centre for the full official checklist)."
    }
  },
  {
    id: "lawatan-pusat",
    question: {
      ms: "Adakah lawatan ke pusat dibenarkan sebelum mendaftar?",
      en: "Are visits to the centre allowed before registering?"
    },
    answer: {
      ms: "Ya, kami sangat menggalakkan lawatan pusat! Namun, lawatan hendaklah dijadualkan terlebih dahulu melalui janji temu bagi mengelakkan gangguan terhadap aktiviti harian kanak-kanak dan memastikan keselamatan pusat jagaan.",
      en: "Yes, we strongly encourage centre visits! However, visits must be scheduled in advance by appointment to prevent disruption to daily children's activities and ensure security."
    }
  },
  {
    id: "laporan-perkembangan",
    question: {
      ms: "Bagaimanakah ibu bapa menerima perkembangan harian anak?",
      en: "How do parents receive updates on their child's development?"
    },
    answer: {
      ms: "Pihak kami menyediakan kemas kini berkala kepada ibu bapa. Sila hubungi pihak pusat untuk mengetahui kaedah komunikasi rasmi (seperti laporan harian, WhatsApp, atau perbincangan bersemuka) yang digunakan.",
      en: "We provide regular updates to parents. Please contact the centre to learn about our official communication channels (such as daily reports, WhatsApp, or face-to-face updates)."
    }
  },
  {
    id: "yuran",
    question: {
      ms: "Berapakah yuran pendaftaran dan yuran bulanan?",
      en: "What are the registration and monthly fees?"
    },
    answer: {
      ms: "Struktur yuran bergantung kepada program pilihan dan kumpulan umur anak. Sila hubungi pihak pusat untuk maklumat yuran terkini dan terperinci.",
      en: "Our fee structure depends on the selected programme and child's age group. Please contact the centre directly for the latest and detailed fee details."
    }
  },
  {
    id: "barang-perlu-dibawa",
    question: {
      ms: "Apakah yang perlu dibawa oleh anak ke pusat jagaan setiap hari?",
      en: "What does my child need to bring to the childcare centre daily?"
    },
    answer: {
      ms: "Kebiasaannya merangkumi sepasang pakaian pertukaran, lampin pakai buang, tuala kecil, dan botol susu/air kosong yang dilabel nama. Senarai lengkap keperluan harian akan diberikan selepas pendaftaran diluluskan.",
      en: "Typically includes a change of clothes, diapers, a small towel, and a labeled milk/water bottle. A complete checklist of items to bring will be provided upon enrolment approval."
    }
  }
];
