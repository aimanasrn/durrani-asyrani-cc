"use client";

import { use, useState } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";
import { type Locale } from "@/content/translations";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface GalleryItem {
  id: number;
  category: "spaces" | "activities";
  title: { ms: string; en: string };
  colorClass: string; // for high-quality mock preview card styling
  icon: string;
}

export default function GalleryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  const [activeFilter, setActiveFilter] = useState<"all" | "spaces" | "activities">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const texts = {
    title: { ms: "Galeri Foto Pusat Jagaan", en: "Photo Gallery" },
    subtitle: { ms: "Penerokaan Ruang & Aktiviti Kami", en: "Explore Our Spaces & Activities" },
    intro: {
      ms: "Berikut adalah gambaran ilustrasi visual persekitaran dan pembelajaran harian di Pusat Jagaan Durrani Asyrani. Sila rujuk nota privasi kanak-kanak di bawah.",
      en: "Below are illustrative representations of our environment and daily routines at Pusat Jagaan Durrani Asyrani. Please check the child privacy guidelines below."
    },
    filterAll: { ms: "Semua", en: "All" },
    filterSpaces: { ms: "Ruang Pusat", en: "Spaces" },
    filterActivities: { ms: "Aktiviti Kanak-Kanak", en: "Activities" },
    adminNotice: {
      ms: "Peringatan Pentadbir: Hanya muat naik gambar yang telah mendapat persetujuan bertulis (consent) daripada ibu bapa atau penjaga kanak-kanak secara sah.",
      en: "Admin Notice: Only upload photographs that have received the required formal written consent from parents or guardians."
    },
    privacyNotice: {
      ms: "🔒 Laman web kami komited untuk menjaga keselamatan dan privasi kanak-kanak. Gambar di atas disediakan secara umum dan tidak mendedahkan identiti anak secara sensitif.",
      en: "🔒 Our website is committed to child safety and privacy. The representations above are generalized and protect kids' identities."
    }
  };

  // 8 visual mock-ups representing spaces and activities with pleasant matching colours and icons
  const galleryItems: GalleryItem[] = [
    { id: 0, category: "spaces", title: { ms: "Ruang Pembelajaran Utama", en: "Main Learning Space" }, colorClass: "bg-brand-peach/30 border-brand-peach-dark/20 text-rose-900", icon: "📖" },
    { id: 1, category: "activities", title: { ms: "Aktiviti Mewarna Kreatif", en: "Creative Coloring Play" }, colorClass: "bg-brand-yellow-light border-brand-yellow/30 text-amber-900", icon: "🎨" },
    { id: 2, category: "spaces", title: { ms: "Ruang Rehat & Tidur", en: "Nap & Sleep Area" }, colorClass: "bg-brand-blue-light border-brand-blue/30 text-blue-900", icon: "💤" },
    { id: 3, category: "activities", title: { ms: "Penerokaan Sensori Doh", en: "Sensory Playdough Exploration" }, colorClass: "bg-brand-green-light border-brand-green/30 text-emerald-900", icon: "✨" },
    { id: 4, category: "spaces", title: { ms: "Ruang Makan Teratur", en: "Organized Dining Area" }, colorClass: "bg-brand-peach/30 border-brand-peach-dark/20 text-rose-900", icon: "🍽️" },
    { id: 5, category: "activities", title: { ms: "Sesi Buku Cerita Bergambar", en: "Picture Book Reading Session" }, colorClass: "bg-brand-yellow-light border-brand-yellow/30 text-amber-900", icon: "📚" },
    { id: 6, category: "spaces", title: { ms: "Sudut Permainan Bongkah", en: "Block Building Corner" }, colorClass: "bg-brand-blue-light border-brand-blue/30 text-blue-900", icon: "🧱" },
    { id: 7, category: "activities", title: { ms: "Senaman Ringkas Pagi", en: "Light Morning Exercise" }, colorClass: "bg-brand-green-light border-brand-green/30 text-emerald-900", icon: "🏃‍♂️" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    const currentFilteredIdx = filteredItems.findIndex(item => item.id === lightboxIndex);
    const prevFilteredIdx = (currentFilteredIdx - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(filteredItems[prevFilteredIdx].id);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const currentFilteredIdx = filteredItems.findIndex(item => item.id === lightboxIndex);
    const nextFilteredIdx = (currentFilteredIdx + 1) % filteredItems.length;
    setLightboxIndex(filteredItems[nextFilteredIdx].id);
  };

  const activeLightboxItem = galleryItems.find(item => item.id === lightboxIndex);

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

        {/* Admin Consent Notice */}
        <div className="mb-10 max-w-4xl mx-auto p-4 bg-amber-50 border border-dashed border-amber-300 rounded-2xl text-xs text-amber-800 flex items-start gap-2.5">
          <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>{locale === "ms" ? "Penting:" : "Important:"}</strong> {texts.adminNotice[locale]}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-primary text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {texts.filterAll[locale]}
          </button>
          <button
            onClick={() => setActiveFilter("spaces")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === "spaces"
                ? "bg-primary text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {texts.filterSpaces[locale]}
          </button>
          <button
            onClick={() => setActiveFilter("activities")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === "activities"
                ? "bg-primary text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {texts.filterActivities[locale]}
          </button>
        </div>

        {/* Responsive Masonry / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(item.id)}
              className={`aspect-square rounded-3xl border playful-shadow-hover flex flex-col items-center justify-center p-6 text-center cursor-pointer relative group overflow-hidden ${item.colorClass}`}
            >
              {/* Category indicator label */}
              <span className="absolute top-3 left-4 text-[9px] font-bold tracking-wider uppercase opacity-60">
                {item.category === "spaces" ? (locale === "ms" ? "Ruangan" : "Space") : (locale === "ms" ? "Aktiviti" : "Activity")}
              </span>
              
              <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-heading font-semibold text-xs sm:text-sm mt-4 leading-snug">
                {item.title[locale]}
              </h4>
              
              <span className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-bold text-slate-500">
                🔍 {locale === "ms" ? "Besarkan" : "Zoom"}
              </span>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <div className="max-w-2xl mx-auto text-center text-xs text-slate-400 italic">
          {texts.privacyNotice[locale]}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && activeLightboxItem && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Sebelum"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox content card */}
            <div className="max-w-lg w-full flex flex-col items-center gap-6 text-center select-none">
              <div className={`w-64 h-64 sm:w-80 sm:h-80 rounded-4xl border flex flex-col items-center justify-center text-center shadow-lg ${activeLightboxItem.colorClass}`}>
                <div className="text-7xl sm:text-8xl">{activeLightboxItem.icon}</div>
              </div>
              
              <div className="flex flex-col gap-1 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                  {activeLightboxItem.category === "spaces" ? (locale === "ms" ? "Ruangan" : "Space") : (locale === "ms" ? "Aktiviti" : "Activity")}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl">
                  {activeLightboxItem.title[locale]}
                </h3>
              </div>
            </div>

            {/* Right navigation */}
            <button
              onClick={handleNext}
              className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Seterusnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
