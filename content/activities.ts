export interface ActivityTimelineItem {
  time: string;
  title: { ms: string; en: string };
  description: { ms: string; en: string };
}

export interface DevelopmentBenefit {
  title: { ms: string; en: string };
  description: { ms: string; en: string };
}

export const activitiesDisclaimer = {
  ms: "Nota: Jadual ini merupakan contoh rujukan sahaja. Jadual sebenar adalah fleksibel dan tertakluk kepada kumpulan umur, keperluan individu anak, program khusus, serta pengurusan semasa pusat.",
  en: "Note: This schedule is for reference only. The actual schedule is flexible and subject to child age groups, individual needs, specific programmes, and centre management updates."
};

export const sampleDailyActivities: ActivityTimelineItem[] = [
  {
    time: "07:30 AM - 08:30 AM",
    title: { ms: "Ketibaan & Sambutan Mesra", en: "Arrival & Warm Welcome" },
    description: {
      ms: "Ibu bapa menghantar anak-anak. Pendidik menyambut mesra dengan saringan kesihatan ringkas (suhu badan/gejala umum).",
      en: "Parents drop off their children. Educators welcome them with a quick health check (body temperature/general check)."
    }
  },
  {
    time: "08:30 AM - 09:00 AM",
    title: { ms: "Rutin Pagi & Sarapan", en: "Morning Routine & Breakfast" },
    description: {
      ms: "Anak-anak belajar membersihkan tangan, membaca doa makan (placeholder/mengikut persetujuan), dan menikmati sarapan pagi ringan.",
      en: "Children learn to wash hands, recite meal prayers (if applicable/consented), and enjoy a light breakfast."
    }
  },
  {
    time: "09:00 AM - 09:45 AM",
    title: { ms: "Aktiviti Pagi & Pergerakan Fizikal", en: "Morning Activity & Physical Movement" },
    description: {
      ms: "Senaman renggangan ringkas, nyanyian lagu kanak-kanak berirama (nurseri), atau permainan motor kasar di ruang aktiviti.",
      en: "Light stretching exercise, nursery rhymes, or gross motor games in the play/activity area."
    }
  },
  {
    time: "09:45 AM - 11:00 AM",
    title: { ms: "Pembelajaran Berpandu & Sensori", en: "Guided Learning & Sensory Play" },
    description: {
      ms: "Sesi kognitif berpandu (bentuk, warna, nombor) diselang-seli dengan aktiviti sensori (doh mainan, menyusun blok) secara bergilir.",
      en: "Cognitive sessions (shapes, colors, numbers) paired with rotating sensory play (playdough, stacking blocks)."
    }
  },
  {
    time: "11:00 AM - 11:30 AM",
    title: { ms: "Sesi Membaca & Bercerita", en: "Storytelling & Reading Circle" },
    description: {
      ms: "Membaca buku cerita bergambar interaktif bersama pendidik bagi memupuk tumpuan dan pengenalan bahasa awal.",
      en: "Interactive storytelling with picture books with the educators to foster concentration and early language."
    }
  },
  {
    time: "11:30 AM - 12:30 PM",
    title: { ms: "Makan Tengah Hari & Rutin Kebersihan", en: "Lunch & Personal Hygiene Routine" },
    description: {
      ms: "Menikmati makan tengah hari seimbang, dibimbing untuk mengemas bekas makan sendiri, menggosok gigi, dan membasuh diri.",
      en: "Enjoying a balanced lunch, guided to pack away utensils, brush teeth, and freshen up."
    }
  },
  {
    time: "12:30 PM - 03:00 PM",
    title: { ms: "Masa Rehat & Tenang (Tidur)", en: "Quiet Time & Nap Time" },
    description: {
      ms: "Lampu dimalapkan, alunan muzik tenang (lullaby) dimainkan bagi menyokong tidur tengah hari yang selesa untuk pemulihan tenaga.",
      en: "Dimmed lights and soothing background music to support comfortable nap time for energy recovery."
    }
  },
  {
    time: "03:00 PM - 03:30 PM",
    title: { ms: "Persediaan Diri & Minum Petang", en: "Fleshing Up & Tea Time" },
    description: {
      ms: "Mengemas diri selepas tidur, menyikat rambut, membasuh muka, dan menikmati snek/minum petang berkhasiat.",
      en: "Freshening up after nap, combing hair, washing face, and enjoying a nutritious tea break."
    }
  },
  {
    time: "03:30 PM - 04:30 PM",
    title: { ms: "Aktiviti Kreatif & Kraf Mudah", en: "Creative Activity & Simple Crafting" },
    description: {
      ms: "Aktiviti ekspresi bebas seperti mewarna bebas, kraf kertas, atau permainan blok pembinaan untuk kemahiran motor halus.",
      en: "Free expression activities like coloring, paper crafts, or block construction to develop fine motor skills."
    }
  },
  {
    time: "04:30 PM - 05:30 PM",
    title: { ms: "Permainan Bebas & Persediaan Pulang", en: "Free Play & Pack Up for Home" },
    description: {
      ms: "Kanak-kanak bermain bebas secara terkawal sementara mengemas beg masing-masing dan bersedia untuk dijemput pulang.",
      en: "Controlled free play while children pack their bags and prepare to be picked up by parents."
    }
  }
];

export const developmentBenefits: DevelopmentBenefit[] = [
  {
    title: { ms: "Kemahiran Bahasa", en: "Language Skills" },
    description: {
      ms: "Melalui sesi bercerita, menyanyi, dan interaksi sosial harian, kanak-kanak diperkenalkan kepada perkataan baharu dalam Bahasa Melayu dan Bahasa Inggeris.",
      en: "Through storytelling, singing, and daily social interactions, children learn new vocabulary in both Bahasa Melayu and English."
    }
  },
  {
    title: { ms: "Perkembangan Sosial", en: "Social Development" },
    description: {
      ms: "Aktiviti berkumpulan melatih anak-anak bertolak ansur, berkongsi mainan, memahami giliran, dan membina hubungan baik dengan rakan-rakan.",
      en: "Group activities train children to tolerate, share toys, understand taking turns, and build positive peer relationships."
    }
  },
  {
    title: { ms: "Kreativiti & Imaginasi", en: "Creativity & Imagination" },
    description: {
      ms: "Aktiviti melukis, mewarna, sensori, dan kraf tangan membolehkan kanak-kanak mengekspresikan diri mereka mengikut daya kreatif tersendiri.",
      en: "Painting, coloring, sensory plays, and crafts allow children to express themselves freely according to their unique creativity."
    }
  },
  {
    title: { ms: "Keyakinan Diri", en: "Self-Confidence" },
    description: {
      ms: "Apabila berjaya menyiapkan projek kraf atau mengurus diri sendiri seperti memakai kasut, anak-anak membina rasa bangga terhadap pencapaian mereka.",
      en: "Succeeding in craft projects or mastering self-help skills like putting on shoes helps build pride and self-efficacy in children."
    }
  },
  {
    title: { ms: "Pergerakan Fizikal", en: "Physical Development" },
    description: {
      ms: "Pergerakan motor kasar seperti berjalan, berlari, dan melompat diselaraskan dengan motor halus seperti memegang krayon dan menyunting objek.",
      en: "Gross motor skills (walking, running, jumping) are developed alongside fine motor skills (holding crayons, picking small objects)."
    }
  },
  {
    title: { ms: "Kemahiran Menyelesaikan Masalah", en: "Problem Solving" },
    description: {
      ms: "Permainan menyusun blok, padanan bentuk, dan teka-teki mudah membantu melatih kemahiran logik serta penyelesaian rintangan awal.",
      en: "Block building, shape matching, and simple puzzles help train logical thinking and early problem-solving skills."
    }
  }
];
