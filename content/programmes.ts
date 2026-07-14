export interface ProgrammeData {
  id: string;
  iconName: string; // key to dynamically look up Lucide icons
  title: { ms: string; en: string };
  shortDescription: { ms: string; en: string };
  longDescription: { ms: string; en: string };
  ageGroup: { ms: string; en: string };
  schedule: { ms: string; en: string };
  fees: { ms: string; en: string };
  skills: { ms: string[]; en: string[] };
}

export const programmesDisclaimer = {
  ms: "Nota: Semua maklumat berkenaan program, had umur, jadual harian, dan struktur yuran adalah maklumat anggaran dan tertakluk kepada pengesahan rasmi pihak pengurusan pusat.",
  en: "Note: All information regarding programmes, age limits, schedules, and fee structures are estimated and subject to official confirmation by the centre management."
};

export const programmesList: ProgrammeData[] = [
  {
    id: "penjagaan-harian",
    iconName: "Heart",
    title: { ms: "Penjagaan Harian", en: "Full-Day Childcare" },
    shortDescription: {
      ms: "Penjagaan menyeluruh yang selamat, bersih dan penyayang sepanjang hari untuk menyokong keperluan ibu bapa bekerja.",
      en: "Comprehensive, clean, and loving full-day care to support working parents."
    },
    longDescription: {
      ms: "Program Penjagaan Harian kami dirancang khas untuk memberikan suasana seperti di rumah yang selamat, penyayang, dan teratur. Kami mengutamakan keselesaan, pemakanan yang seimbang (perlu disahkan), waktu rehat yang mencukupi, dan kebersihan diri anak-anak sepanjang berada di bawah jagaan kami.",
      en: "Our Full-Day Childcare programme is tailored to offer a home-like environment that is safe, loving, and organized. We prioritize physical comfort, balanced meals (subject to confirmation), adequate rest, and hygiene routines for children under our care."
    },
    ageGroup: { ms: "Kandungan Contoh (Sila hubungi pusat)", en: "Sample Content (Please contact centre)" },
    schedule: { ms: "Isnin - Jumaat (Sila hubungi pusat)", en: "Monday - Friday (Please contact centre)" },
    fees: { ms: "Hubungi pusat untuk yuran terkini", en: "Contact centre for latest fees" },
    skills: {
      ms: ["Rutin Kendiri", "Interaksi Sosial", "Kemahiran Sosio-Emosi"],
      en: ["Self-Help Routines", "Social Interaction", "Socio-Emotional Development"]
    }
  },
  {
    id: "pembelajaran-awal",
    iconName: "BookOpen",
    title: { ms: "Pembelajaran Awal", en: "Early Learning" },
    shortDescription: {
      ms: "Pendekatan pembelajaran berstruktur melalui bermain untuk merangsang rasa ingin tahu dan kebolehan kognitif awal.",
      en: "Structured play-based learning to stimulate early cognitive ability and curiosity."
    },
    longDescription: {
      ms: "Kami memperkenalkan asas pembelajaran awal yang merangkumi pengenalan huruf, nombor, warna, dan bentuk dengan kaedah yang santai dan interaktif. Anak-anak dibimbing secara individu dan berkumpulan bagi memupuk minat belajar dari peringkat awal.",
      en: "We introduce basic early learning concepts including letters, numbers, colors, and shapes in a fun and interactive way. Children are guided individually and in groups to foster a lifelong love for learning."
    },
    ageGroup: { ms: "Kandungan Contoh (Sila hubungi pusat)", en: "Sample Content (Please contact centre)" },
    schedule: { ms: "Sesi Pagi (Sila hubungi pusat)", en: "Morning Sessions (Please contact centre)" },
    fees: { ms: "Hubungi pusat untuk yuran terkini", en: "Contact centre for latest fees" },
    skills: {
      ms: ["Kemahiran Kognitif", "Pengecaman Awal", "Kemahiran Bahasa"],
      en: ["Cognitive Skills", "Early Recognition", "Language Skills"]
    }
  },
  {
    id: "aktiviti-sensori",
    iconName: "Sparkles",
    title: { ms: "Aktiviti Sensori", en: "Sensory Play & Activities" },
    shortDescription: {
      ms: "Aktiviti penerokaan sensori menggunakan pelbagai tekstur dan bahan untuk merangsang perkembangan sensori-motor.",
      en: "Sensory exploration using various textures and materials to stimulate sensory-motor development."
    },
    longDescription: {
      ms: "Melalui permainan sensori (seperti pasir hiasan, doh mainan, dan air), kanak-kanak belajar meneroka deria penglihatan, sentuhan, dan pendengaran. Aktiviti ini sangat penting untuk membina sambungan saraf otak kanak-kanak.",
      en: "Through sensory play (such as clean sand, playdough, and water table), children learn to explore sight, touch, and hearing. These activities are crucial in building neural connections in early brain development."
    },
    ageGroup: { ms: "Kandungan Contoh (Sila hubungi pusat)", en: "Sample Content (Please contact centre)" },
    schedule: { ms: "Sesi Mingguan (Sila hubungi pusat)", en: "Weekly Sessions (Please contact centre)" },
    fees: { ms: "Sila hubungi pusat", en: "Please contact centre" },
    skills: {
      ms: ["Kemahiran Motor Halus", "Penerokaan Deria", "Fokus dan Tumpuan"],
      en: ["Fine Motor Skills", "Sensory Integration", "Focus & Concentration"]
    }
  },
  {
    id: "seni-kreativiti",
    iconName: "Palette",
    title: { ms: "Seni & Kreativiti", en: "Art & Creativity" },
    shortDescription: {
      ms: "Sesi seni kreatif, mewarna, dan kraf tangan bagi memupuk ekspresi diri dan bakat seni semula jadi anak-anak.",
      en: "Art, coloring, and crafting sessions to foster self-expression and natural creative talent."
    },
    longDescription: {
      ms: "Kreativiti tiada batasan. Kami menyediakan ruang untuk anak-anak meluahkan imaginasi mereka melalui cap jari, melukis, mewarna, dan membuat kraf mudah menggunakan bahan kitar semula yang selamat.",
      en: "Creativity knows no bounds. We offer space for children to express their imagination through finger painting, drawing, coloring, and simple crafts using safe, non-toxic materials."
    },
    ageGroup: { ms: "Kandungan Contoh (Sila hubungi pusat)", en: "Sample Content (Please contact centre)" },
    schedule: { ms: "Sesi Petang (Sila hubungi pusat)", en: "Afternoon Sessions (Please contact centre)" },
    fees: { ms: "Sila hubungi pusat", en: "Please contact centre" },
    skills: {
      ms: ["Kreativiti", "Koordinasi Mata-Tangan", "Ekspresi Diri"],
      en: ["Creativity", "Hand-Eye Coordination", "Self-Expression"]
    }
  },
  {
    id: "membaca-bercerita",
    iconName: "Smile",
    title: { ms: "Sesi Membaca & Bercerita", en: "Reading & Storytelling" },
    shortDescription: {
      ms: "Memupuk minat membaca sejak awal melalui perkongsian buku cerita bergambar yang menarik dan interaktif.",
      en: "Instilling a love for books and language through interactive picture book sharing."
    },
    longDescription: {
      ms: "Sesi bercerita direka untuk memperkayakan kosa kata anak-anak dalam Bahasa Melayu dan Bahasa Inggeris. Kami menggunakan buku cerita dengan ilustrasi menarik untuk merangsang imaginasi dan kefahaman bahasa mereka.",
      en: "Storytelling sessions are designed to enrich children's vocabulary in both Bahasa Melayu and English. We use books with vivid illustrations to stimulate imagination and comprehension."
    },
    ageGroup: { ms: "Kandungan Contoh (Sila hubungi pusat)", en: "Sample Content (Please contact centre)" },
    schedule: { ms: "Sesi Harian (Sila hubungi pusat)", en: "Daily Sessions (Please contact centre)" },
    fees: { ms: "Sila hubungi pusat", en: "Please contact centre" },
    skills: {
      ms: ["Kemahiran Mendengar", "Pertuturan dan Bahasa", "Imaginasi"],
      en: ["Listening Skills", "Speech & Language", "Imagination"]
    }
  },
  {
    id: "aktiviti-fizikal",
    iconName: "Activity",
    title: { ms: "Aktiviti Fizikal & Pergerakan", en: "Physical Activities & Movement" },
    shortDescription: {
      ms: "Pergerakan fizikal berpandu, senaman ringkas, dan permainan dalam kumpulan untuk melatih motor kasar anak-anak.",
      en: "Guided physical play, light exercise, and group games to train children's gross motor skills."
    },
    longDescription: {
      ms: "Kesihatan fizikal disokong melalui aktiviti regangan, lompatan kecil, imbangan, dan berjalan secara teratur. Kami melatih otot besar kanak-kanak bagi membina keyakinan fizikal dan koordinasi badan.",
      en: "Physical health is supported through stretching, hopping, balancing, and coordinated walking. We train large muscles to build physical confidence and body balance."
    },
    ageGroup: { ms: "Kandungan Contoh (Sila hubungi pusat)", en: "Sample Content (Please contact centre)" },
    schedule: { ms: "Sesi Pagi (Sila hubungi pusat)", en: "Morning Sessions (Please contact centre)" },
    fees: { ms: "Sila hubungi pusat", en: "Please contact centre" },
    skills: {
      ms: ["Motor Kasar", "Keseimbangan Badan", "Disiplin Diri"],
      en: ["Gross Motor Skills", "Balance & Coordination", "Self-Discipline"]
    }
  },
  {
    id: "aktiviti-berkumpulan",
    iconName: "Users",
    title: { ms: "Aktiviti Berkumpulan", en: "Group Play & Interaction" },
    shortDescription: {
      ms: "Belajar berkongsi, bertolak ansur, dan bekerjasama dalam pelbagai permainan kumpulan kecil yang ceria.",
      en: "Learning to share, take turns, and cooperate in cooperative small-group interactive games."
    },
    longDescription: {
      ms: "Sosialisasi adalah aspek kritikal bagi awal kanak-kanak. Melalui permainan berkumpulan, anak-anak belajar konsep perkongsian, bekerjasama menyiapkan tugasan, dan cara berkomunikasi secara sopan dengan rakan sebaya.",
      en: "Socialization is a critical aspect of early childhood. Through small group tasks, children learn sharing, cooperation, and how to communicate politely with peers."
    },
    ageGroup: { ms: "Kandungan Contoh (Sila hubungi pusat)", en: "Sample Content (Please contact centre)" },
    schedule: { ms: "Sesi Harian (Sila hubungi pusat)", en: "Daily Sessions (Please contact centre)" },
    fees: { ms: "Sila hubungi pusat", en: "Please contact centre" },
    skills: {
      ms: ["Nilai Kerjasama", "Kemahiran Sosial", "Empati"],
      en: ["Cooperation", "Social Skills", "Empathy"]
    }
  },
  {
    id: "persediaan-sekolah",
    iconName: "GraduationCap",
    title: { ms: "Persediaan Awal Ke Sekolah", en: "School Readiness" },
    shortDescription: {
      ms: "Membiasakan anak-anak dengan rutin berjadual dan kemahiran asas prasekolah untuk peralihan yang mudah kelak.",
      en: "Familiarizing children with scheduled routines and preschool basics for a smooth future transition."
    },
    longDescription: {
      ms: "Bagi anak-anak yang hampir mencapai usia sekolah, kami melatih mereka mengikut jadual berstruktur, mendengar arahan kumpulan, mengemas barang sendiri, dan menulis kemahiran asas. Ini membantu mereka berasa bersedia menghadapi alam persekolahan formal.",
      en: "For children approaching school age, we train them in structured routines, listening to instructions, packing their own bags, and basic writing. This helps them transition smoothly into formal school."
    },
    ageGroup: { ms: "Kandungan Contoh (Sila hubungi pusat)", en: "Sample Content (Please contact centre)" },
    schedule: { ms: "Sesi Khusus (Sila hubungi pusat)", en: "Specialized Sessions (Please contact centre)" },
    fees: { ms: "Sila hubungi pusat", en: "Please contact centre" },
    skills: {
      ms: ["Kemahiran Berdikari", "Mengikuti Rutin", "Fokus Akademik Asas"],
      en: ["Independence", "Following Routines", "Basic Academic Readiness"]
    }
  }
];
