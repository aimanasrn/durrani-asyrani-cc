export interface FacilityItem {
  id: string;
  title: { ms: string; en: string };
  description: { ms: string; en: string };
  iconName: string;
}

export const facilitiesDisclaimer = {
  ms: "Penting untuk Pentadbir Web: Maklumat kemudahan di bawah adalah placeholder contoh sahaja. Sila gantikan atau kemas kini penerangan ini mengikut kemudahan fizikal sebenar yang tersedia di pusat jagaan anda.",
  en: "Important for Web Administrator: The facilities below are placeholder examples only. Please replace or update these descriptions according to the actual physical facilities available at your childcare centre."
};

export const facilitiesList: FacilityItem[] = [
  {
    id: "ruang-pembelajaran",
    title: { ms: "Ruang Pembelajaran", en: "Learning Area" },
    description: {
      ms: "Kandungan Contoh: Sudut pembelajaran yang tenang, dilengkapi dengan meja dan kerusi mesra kanak-kanak serta bahan bacaan bersesuaian.",
      en: "Sample Content: A quiet study corner equipped with child-friendly tables, chairs, and appropriate reading materials."
    },
    iconName: "BookOpen"
  },
  {
    id: "ruang-aktiviti",
    title: { ms: "Ruang Aktiviti", en: "Activity Area" },
    description: {
      ms: "Kandungan Contoh: Ruang luas yang selamat untuk menjalankan aktiviti seni, kraf tangan, sensori, dan simulasi motor kasar.",
      en: "Sample Content: A safe, spacious indoor area for performing art, crafts, sensory play, and gross motor simulations."
    },
    iconName: "Layout"
  },
  {
    id: "ruang-rehat",
    title: { ms: "Ruang Rehat", en: "Rest & Nap Area" },
    description: {
      ms: "Kandungan Contoh: Ruang tidur berasingan yang selesa, bersih, dan dilengkapi dengan tilam individu bersesuaian untuk masa rehat tengah hari.",
      en: "Sample Content: A comfortable, clean, and dedicated sleeping area equipped with individual mattresses for afternoon nap time."
    },
    iconName: "Moon"
  },
  {
    id: "ruang-makan",
    title: { ms: "Ruang Makan", en: "Dining Area" },
    description: {
      ms: "Kandungan Contoh: Ruang makan yang bersih dan teratur untuk melatih anak-anak berdisiplin ketika makan dan menjaga kebersihan meja.",
      en: "Sample Content: A clean and organized dining area to train children in eating discipline and table manners."
    },
    iconName: "Coffee"
  },
  {
    id: "ruang-permainan",
    title: { ms: "Ruang Permainan Dalaman", en: "Indoor Play Area" },
    description: {
      ms: "Kandungan Contoh: Sudut dengan pelbagai alat mainan pembelajaran berstruktur seperti blok kayu, teka-teki, dan mainan peranan.",
      en: "Sample Content: A corner with various structured learning toys like wooden blocks, puzzles, and role-playing props."
    },
    iconName: "Smile"
  },
  {
    id: "kemudahan-kebersihan",
    title: { ms: "Kemudahan Kebersihan", en: "Hygiene & Washrooms" },
    description: {
      ms: "Kandungan Contoh: Tandas dan sinki mesra kanak-kanak untuk melatih rutin mencuci tangan, menggosok gigi, serta tandas (toilet training).",
      en: "Sample Content: Child-friendly toilets and sinks to practice proper handwashing, teeth brushing, and potty training routines."
    },
    iconName: "ShieldCheck"
  }
];
