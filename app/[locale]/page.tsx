"use client";

import { use } from "react";
import Link from "next/link";
import {
  Heart,
  Smile,
  ShieldCheck,
  Calendar,
  ChevronRight,
  MessageCircle,
  Clock,
  ArrowRight,
  BookOpen,
  MapPin,
  ExternalLink,
  ChevronRightCircle,
  HelpCircle,
  Star,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import { type Locale, translations } from "@/content/translations";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { businessInfo } from "@/content/business";
import { programmesList } from "@/content/programmes";
import { sampleDailyActivities } from "@/content/activities";
import { facilitiesList } from "@/content/facilities";
import FaqAccordion from "@/components/shared/FaqAccordion";
import SectionHeading from "@/components/shared/SectionHeading";

// Custom SVG Illustration for Hero
function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto max-w-lg mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sun / Background light */}
      <circle cx="400" cy="100" r="80" fill="#fef3c7" opacity="0.7" />
      
      {/* Playful hill background */}
      <path d="M-50 400 C150 380 200 320 300 350 C400 380 450 390 550 400 Z" fill="#e2e8f0" opacity="0.3" />
      <path d="M-50 400 C50 390 150 350 250 360 C350 370 450 380 550 400 Z" fill="#a3b19b" opacity="0.15" />

      {/* Childcare building/shapes graphic - cute abstract blocks representing learning */}
      <rect x="80" y="180" width="120" height="180" rx="20" fill="#ffcad4" /> {/* Peach house base */}
      <polygon points="60,180 140,80 220,180" fill="#ffb5a7" /> {/* Red roof */}
      
      <rect x="230" y="220" width="80" height="140" rx="16" fill="#8ecafe" /> {/* Blue block */}
      <circle cx="270" cy="180" r="30" fill="#f4d068" /> {/* Yellow circular sun/block */}

      <rect x="330" y="250" width="100" height="110" rx="12" fill="#a3b19b" /> {/* Green base */}
      <path d="M330 250 L380 200 L430 250 Z" fill="#b8c5b2" />
      
      {/* Happy Heart on the peach house */}
      <path d="M140 250 C140 240 150 230 160 230 C170 230 180 240 180 250 C180 265 155 280 140 290 C125 280 100 265 100 250 C100 240 110 230 120 230 C130 230 140 240 140 250 Z" fill="#ffb5a7" />
      
      {/* Decorative clouds */}
      <path d="M420 50 C430 50 435 45 440 45 C445 45 450 50 460 50 C465 50 470 55 470 60 C470 65 465 70 460 70 L420 70 C415 70 410 65 410 60 C410 55 415 50 420 50 Z" fill="#ffffff" opacity="0.9" />
      <path d="M60 70 C70 70 75 65 80 65 C85 65 90 70 100 70 C105 70 110 75 110 80 C110 85 105 90 100 90 L60 90 C55 90 50 85 50 80 C50 75 55 70 60 70 Z" fill="#ffffff" opacity="0.9" />
      
      {/* Window cutouts */}
      <rect x="110" y="195" width="25" height="25" rx="5" fill="#ffffff" />
      <rect x="145" y="195" width="25" height="25" rx="5" fill="#ffffff" />
      
      {/* Cute growing plant */}
      <path d="M380 360 V330" stroke="#a3b19b" strokeWidth="4" strokeLinecap="round" />
      <path d="M380 340 Q395 330 395 340 Q395 350 380 350" fill="#a3b19b" />
      <path d="M380 345 Q365 335 365 345 Q365 355 380 355" fill="#a3b19b" />
    </svg>
  );
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function HomePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  // Localized texts for Home Page
  const texts = {
    hero: {
      headline: {
        ms: "Tempat Anak Anda Membesar, Belajar dan Disayangi",
        en: "Where Your Child Grows, Learns and is Cherished"
      },
      supporting: {
        ms: "Pusat jagaan yang selamat, ceria dan penuh perhatian untuk menyokong perkembangan awal anak-anak di Bandar Uda Utama, Skudai.",
        en: "A safe, cheerful, and caring childcare environment to support early child development in Bandar Uda Utama, Skudai."
      },
      trustBadge1: { ms: "Persekitaran Selamat", en: "Safe Environment" },
      trustBadge2: { ms: "Aktiviti Berstruktur", en: "Structured Activities" },
      trustBadge3: { ms: "Penjagaan Penuh Kasih Sayang", en: "Loving Childcare" },
      trustBadge4: { ms: "Komunikasi Bersama Ibu Bapa", en: "Parent Communication" },
    },
    intro: {
      badge: { ms: "Selamat Datang", en: "Welcome" },
      title: { ms: "Mengenai Pusat Jagaan Kami", en: "About Our Childcare Centre" },
      body: {
        ms: "Pusat Jagaan Durrani Asyrani menyediakan suasana penjagaan yang mesra, selamat dan menyokong perkembangan kanak-kanak. Kami percaya setiap anak memerlukan ruang untuk belajar, bermain, membina keyakinan dan berkembang mengikut tahap mereka sendiri.",
        en: "Pusat Jagaan Durrani Asyrani provides a warm, safe, and nurturing environment supporting early childhood development. We believe every child deserves room to learn, play, build confidence, and grow at their own individual pace."
      }
    },
    whyUs: {
      badge: { ms: "Kelebihan Kami", en: "Why Choose Us" },
      title: { ms: "Mengapa Ibu Bapa Memilih Kami", en: "Why Parents Choose Us" },
      cards: [
        {
          title: { ms: "Suasana Mesra Kanak-Kanak", en: "Child-Friendly Environment" },
          desc: { ms: "Ruang yang dihiasi dengan warna lembut, perabot mesra kanak-kanak, dan susun atur yang merangsang keceriaan.", en: "Spaces decorated with soft tones, child-appropriate furniture, and layouts that foster positivity." }
        },
        {
          title: { ms: "Aktiviti Pembelajaran & Permainan", en: "Learning through Play" },
          desc: { ms: "Menggabungkan pengenalan kognitif awal secara kreatif melalui permainan bongkah, lagu, dan kraf tangan.", en: "Combining early cognitive introductions creatively through block construction, rhymes, and crafts." }
        },
        {
          title: { ms: "Perhatian Terhadap Perkembangan", en: "Development Tracking" },
          desc: { ms: "Memantau interaksi harian bagi membantu anak-anak membina rutin kendiri dan keyakinan sosial.", en: "Monitoring daily actions to support self-help routines and social confidence." }
        },
        {
          title: { ms: "Komunikasi Bersama Ibu Bapa", en: "Parent Cooperation" },
          desc: { ms: "Kami sentiasa terbuka berkongsi perkembangan dan memberi makluman semasa demi kebaikan anak.", en: "We are always open to sharing updates and notifications for the well-being of the child." }
        },
        {
          title: { ms: "Ruang Selesa & Teratur", en: "Comfortable & Neat Spaces" },
          desc: { ms: "Setiap sudut diatur kemas mengikut fungsinya demi keselesaan rehat dan keceriaan bermain anak-anak.", en: "Every corner is organized neatly by function for comfortable naps and cheerful interactive play." }
        },
        {
          title: { ms: "Pendekatan Penuh Kasih Sayang", en: "Compassionate Care" },
          desc: { ms: "Didukung dengan kesabaran bagi memastikan anak berasa dihargai dan gembira setiap hari.", en: "Supported by immense patience to ensure children feel cherished, safe, and happy daily." }
        }
      ]
    },
    programmes: {
      badge: { ms: "Program Pilihan", en: "Our Programmes" },
      title: { ms: "Menyokong Tumbesaran Awal", en: "Supporting Early Growth" },
      desc: { ms: "Berikut adalah program perkembangan yang tersedia di pusat jagaan kami.", en: "Here are the developmental programmes available at our childcare centre." }
    },
    activities: {
      badge: { ms: "Rutin Harian", en: "Daily Routines" },
      title: { ms: "Gambaran Aktiviti Harian Anak", en: "A Sample Day of Activities" },
      desc: { ms: "Kami mengimbangi jadual harian anak anda antara pembelajaran, pergerakan fizikal, pemakanan, dan rehat.", en: "We balance your child's daily schedule between learning, physical activity, meals, and nap times." }
    },
    development: {
      badge: { ms: "Aspek Perkembangan", en: "Child Development Areas" },
      title: { ms: "Kemahiran Yang Disokong", en: "Supported Developmental Skills" },
      desc: { ms: "Melalui aktiviti berstruktur dan permainan bebas terbimbing, kami memupuk potensi diri anak-anak dalam pelbagai dimensi.", en: "Through structured activities and guided free play, we foster the potential of children across multiple dimensions." },
      items: [
        { title: { ms: "Kemahiran Bahasa", en: "Language Skills" }, desc: { ms: "Pendedahan kosa kata awal dalam BM & EN melalui sesi bercerita dan interaksi.", en: "Early vocabulary introduction in BM & EN via interactive stories and dialogue." } },
        { title: { ms: "Perkembangan Sosial", en: "Social Development" }, desc: { ms: "Belajar berkongsi, bertolak ansur, dan memahami perasaan rakan sebaya.", en: "Learning to share, take turns, and respect peers' emotions." } },
        { title: { ms: "Kreativiti & Seni", en: "Creativity & Art" }, desc: { ms: "Meluahkan imaginasi melukis, mewarna, dan projek kraf mudah.", en: "Expressing imagination through drawing, painting, and basic crafts." } },
        { title: { ms: "Keyakinan Diri", en: "Self-Confidence" }, desc: { ms: "Meningkatkan kepercayaan diri dengan rutin mengurus beg dan kasut sendiri.", en: "Building self-reliance through routines like keeping their own bags and shoes." } },
        { title: { ms: "Pergerakan Fizikal", en: "Physical Movement" }, desc: { ms: "Latihan otot motor kasar dan halus menerusi senaman kecil dan permainan.", en: "Gross and fine motor muscle exercises through play and light workouts." } },
        { title: { ms: "Menyelesaikan Masalah", en: "Problem Solving" }, desc: { ms: "Permainan blok kayu, padanan bentuk, dan teka-teki logik mudah.", en: "Wooden block building, shape matching, and simple logical puzzles." } }
      ]
    },
    facilities: {
      badge: { ms: "Kemudahan Selesa", en: "Comfortable Facilities" },
      title: { ms: "Persekitaran Yang Menyokong", en: "Nurturing Environment" },
      desc: { ms: "Ruang fizikal yang teratur dan direka khas untuk keperluan pembelajaran serta rehat kanak-kanak.", en: "Physical spaces organized and customized specifically for early learning and children's rest." }
    },
    gallery: {
      badge: { ms: "Galeri Foto", en: "Photo Gallery" },
      title: { ms: "Suasana Di Pusat Jagaan", en: "Atmosphere at the Centre" },
      desc: { ms: "Gambaran persekitaran pembelajaran dan aktiviti yang ceria di pusat jagaan kami.", en: "A glimpse of the cheerful learning environment and active play at our centre." },
      categories: {
        all: { ms: "Semua", en: "All" },
        spaces: { ms: "Ruang Pusat", en: "Spaces" },
        activities: { ms: "Aktiviti", en: "Activities" }
      },
      notice: {
        ms: "Nota: Laman web ini menjaga privasi anak-anak. Tiada wajah kanak-kanak dipaparkan tanpa izin penuh.",
        en: "Note: This website respects children's privacy. No children's faces are displayed without full consent."
      }
    },
    testimonials: {
      badge: { ms: "Maklum Balas", en: "Testimonials" },
      title: { ms: "Apa Kata Ibu Bapa", en: "What Parents Say" },
      subtitle: { ms: "Testimoni contoh — akan digantikan dengan maklum balas sebenar ibu bapa kelak.", en: "Sample feedback — will be replaced with real parent responses in the future." },
      cards: [
        {
          quote: { ms: "Pusat jagaan ini sangat bersih dan suasananya selesa. Anak saya gembira menceritakan rutin bermainnya setiap hari.", en: "This childcare centre is very clean and cozy. My child happily shares daily stories of interactive play routines." },
          author: { ms: "Ibu Bapa Contoh A", en: "Sample Parent A" },
          location: { ms: "Taman Uda Utama", en: "Taman Uda Utama" }
        },
        {
          quote: { ms: "Saya sangat menghargai cara pendidik berkomunikasi dengan mesra tentang keadaan anak saya apabila saya mengambilnya pulang.", en: "I deeply appreciate how the educators kindly update me about my child's progress when picking them up." },
          author: { ms: "Ibu Bapa Contoh B", en: "Sample Parent B" },
          location: { ms: "Skudai", en: "Skudai" }
        },
        {
          quote: { ms: "Rutin harian yang tersusun membantu anak saya belajar tidur tengah hari dengan lebih teratur dan disiplin mengemas mainan.", en: "Structured daily routines helped my child adopt nap timings and build habits of putting toys away." },
          author: { ms: "Ibu Bapa Contoh C", en: "Sample Parent C" },
          location: { ms: "Johor Bahru", en: "Johor Bahru" }
        }
      ]
    },
    faq: {
      badge: { ms: "Soalan Lazim", en: "FAQ" },
      title: { ms: "Pertanyaan Lazim Ibu Bapa", en: "Frequently Asked Questions" }
    },
    location: {
      badge: { ms: "Lokasi Pusat", en: "Our Location" },
      title: { ms: "Mudah Ditemui Di Bandar Uda Utama", en: "Easy to Find in Bandar Uda Utama" },
    },
    finalCta: {
      title: { ms: "Sedang Mencari Pusat Jagaan Untuk Anak Anda?", en: "Looking for a Childcare Centre for Your Child?" },
      desc: { ms: "Hubungi kami hari ini untuk bertanya tentang program, kekosongan terkini, yuran, atau untuk menjadualkan lawatan pusat.", en: "Contact us today to enquire about programmes, current vacancies, fees, or to schedule a centre tour." }
    }
  };

  const whatsappLink = getWhatsAppLink("general");
  const whatsappVisitLink = getWhatsAppLink("visit");

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-yellow-light/40 via-brand-peach/10 to-transparent py-14 sm:py-20 lg:py-24">
        {/* Background blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-peach/20 filter blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-blue-light/50 filter blur-3xl opacity-60 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Text info */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-peach-dark/20 text-indigo-950 uppercase tracking-widest border border-brand-peach-dark/30 animate-pulse">
                {locale === "ms" ? "Enrolmen Dibuka" : "Enrolment Open"}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
                {texts.hero.headline[locale]}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                {texts.hero.supporting[locale]}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-3.5 w-full sm:w-auto">
                <Link
                  href={`/${locale}/registration`}
                  className="flex-grow sm:flex-grow-0 px-8 py-3.5 rounded-2xl bg-primary text-white font-bold hover:bg-primary-light transition-all active:scale-95 shadow-md text-center text-sm"
                >
                  {translations.buttons.register[locale]}
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-xs text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-brand-green text-brand-green" />
                  <span>{translations.buttons.whatsapp[locale]}</span>
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto text-center py-3.5 px-6 rounded-2xl text-xs font-bold text-indigo-950 hover:underline transition-all flex items-center justify-center gap-1"
                >
                  {translations.buttons.visitUs[locale]} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Trust Panel list */}
              <div className="grid grid-cols-2 gap-3.5 w-full mt-6 pt-6 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-peach-dark shrink-0" />
                  <span>{texts.hero.trustBadge1[locale]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-yellow shrink-0" />
                  <span>{texts.hero.trustBadge2[locale]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-brand-peach shrink-0 fill-brand-peach/40" />
                  <span>{texts.hero.trustBadge3[locale]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smile className="w-5 h-5 text-brand-green shrink-0" />
                  <span>{texts.hero.trustBadge4[locale]}</span>
                </div>
              </div>
            </div>

            {/* Illustration side */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <HeroIllustration />
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK INTRODUCTION */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-yellow-light text-amber-900 border border-brand-yellow/30">
            {texts.intro.badge[locale]}
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            {texts.intro.title[locale]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {texts.intro.body[locale]}
          </p>
          <Link
            href={`/${locale}/about`}
            className="mt-2 inline-flex items-center gap-1 bg-brand-peach/40 hover:bg-brand-peach-dark/30 text-indigo-950 font-bold px-6 py-2.5 rounded-full text-sm transition-all"
          >
            <span>{translations.buttons.aboutUs[locale]}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. WHY PARENTS CHOOSE US */}
      <section className="py-16 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.whyUs.title[locale]}
            subtitle={texts.whyUs.badge[locale]}
            badgeColor="yellow"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {texts.whyUs.cards.map((card, idx) => {
              // Alternate background card accents
              const accents = [
                "border-t-4 border-t-brand-peach-dark",
                "border-t-4 border-t-brand-yellow",
                "border-t-4 border-t-brand-green",
                "border-t-4 border-t-brand-blue",
                "border-t-4 border-t-brand-peach",
                "border-t-4 border-t-brand-yellow"
              ];
              
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 shadow-xs border border-slate-100/80 flex flex-col gap-3.5 playful-shadow-hover ${accents[idx % accents.length]}`}
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary font-bold">
                    <Smile className="w-5 h-5 text-slate-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
                    {card.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc[locale]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROGRAMMES PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.programmes.title[locale]}
            subtitle={texts.programmes.badge[locale]}
            description={texts.programmes.desc[locale]}
            badgeColor="peach"
          />

          {/* Grid showing first 3 programmes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {programmesList.slice(0, 3).map((prog) => (
              <div
                key={prog.id}
                className="bg-cream-bg/40 border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 justify-between playful-shadow-hover"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-peach/30 flex items-center justify-center text-slate-700">
                    {prog.iconName === "Heart" ? (
                      <Heart className="w-5 h-5 text-rose-500 fill-rose-500/10" />
                    ) : prog.iconName === "BookOpen" ? (
                      <BookOpen className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Smile className="w-5 h-5 text-amber-500" />
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-base text-slate-900">
                    {prog.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prog.shortDescription[locale]}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100 mt-2">
                  <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">
                    {locale === "ms" ? "Had Umur Anggaran:" : "Est. Age Group:"}
                  </span>
                  <span className="text-xs text-slate-700 font-bold bg-white/80 py-1 px-3 rounded-lg border border-slate-200/50 w-fit">
                    {prog.ageGroup[locale]}
                  </span>
                  <Link
                    href={`/${locale}/programmes#${prog.id}`}
                    className="mt-2 text-xs font-bold text-primary hover:text-primary-light flex items-center gap-1"
                  >
                    <span>{translations.buttons.learnMore[locale]}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/programmes`}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-primary text-white font-bold hover:bg-primary-light transition-all active:scale-95 text-sm shadow-xs"
            >
              <span>{locale === "ms" ? "Lihat Semua Program" : "View All Programmes"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DAILY ACTIVITIES PREVIEW */}
      <section className="py-16 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.activities.title[locale]}
            subtitle={texts.activities.badge[locale]}
            description={texts.activities.desc[locale]}
            badgeColor="green"
          />

          {/* Timeline box - showing first 4 items */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 mb-10">
            <div className="relative border-l-2 border-brand-peach/60 ml-4 flex flex-col gap-8">
              {sampleDailyActivities.slice(0, 4).map((act, index) => (
                <div key={index} className="relative pl-6">
                  {/* Timeline point */}
                  <span className="absolute -left-[11px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-brand-peach-dark border-4 border-white shadow-xs" />
                  
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <Clock className="w-3 h-3" />
                      {act.time}
                    </span>
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
                      {act.title[locale]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {act.description[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-400 italic text-center mt-6 pt-4 border-t border-slate-100">
              ⚠️ {locale === "ms" ? "Rujukan anggaran jadual harian. Pihak pusat mempunyai kelonggaran tersendiri." : "Estimated reference only. The centre retains schedules flexibility."}
            </p>
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/activities`}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all active:scale-95 text-sm shadow-xs"
            >
              <span>{locale === "ms" ? "Lihat Jadual Penuh Harian" : "View Full Daily Schedule"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CHILD DEVELOPMENT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.development.title[locale]}
            subtitle={texts.development.badge[locale]}
            description={texts.development.desc[locale]}
            badgeColor="yellow"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {texts.development.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100/60 flex items-start gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-brand-yellow-light/80 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
                    {item.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 italic text-center mt-10 max-w-xl mx-auto">
            * {locale === "ms" 
              ? "Perhatian: Tiada sebarang jaminan perubatan, psikologi, atau janji pencapaian mutlak kanak-kanak. Pembangunan berbeza mengikut tahap penerimaan anak."
              : "Attention: No medical, psychological, or absolute developmental guarantees. Tumbesaran timeline differs for every child."}
          </p>
        </div>
      </section>

      {/* 7. FACILITIES PREVIEW */}
      <section className="py-16 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.facilities.title[locale]}
            subtitle={texts.facilities.badge[locale]}
            description={texts.facilities.desc[locale]}
            badgeColor="blue"
          />

          {/* Grid showing 3 facilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {facilitiesList.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-xs border border-slate-100/60 flex flex-col gap-3.5 playful-shadow-hover"
              >
                <div className="w-10 h-10 rounded-2xl bg-brand-blue-light/60 flex items-center justify-center text-primary-light">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
                  {item.title[locale]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description[locale]}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/facilities`}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-primary text-white font-bold hover:bg-primary-light transition-all active:scale-95 text-sm shadow-xs"
            >
              <span>{locale === "ms" ? "Lihat Semua Kemudahan" : "View All Facilities"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. GALLERY PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.gallery.title[locale]}
            subtitle={texts.gallery.badge[locale]}
            description={texts.gallery.desc[locale]}
            badgeColor="peach"
          />

          {/* Visual representations of gallery items (colorful shapes or nice mock borders to prevent face privacy breach) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="aspect-square rounded-2xl bg-brand-peach/20 border border-brand-peach-dark/10 flex flex-col items-center justify-center p-4 text-center gap-2 shadow-xs">
              <BookOpen className="w-8 h-8 text-rose-400" />
              <span className="text-xs font-semibold text-slate-600">{locale === "ms" ? "Ruang Belajar" : "Learning Space"}</span>
            </div>
            <div className="aspect-square rounded-2xl bg-brand-yellow-light/60 border border-brand-yellow/20 flex flex-col items-center justify-center p-4 text-center gap-2 shadow-xs">
              <Smile className="w-8 h-8 text-amber-500" />
              <span className="text-xs font-semibold text-slate-600">{locale === "ms" ? "Aktiviti Bermain" : "Playtime"}</span>
            </div>
            <div className="aspect-square rounded-2xl bg-brand-green-light border border-brand-green/20 flex flex-col items-center justify-center p-4 text-center gap-2 shadow-xs">
              <Heart className="w-8 h-8 text-emerald-600 fill-emerald-500/10" />
              <span className="text-xs font-semibold text-slate-600">{locale === "ms" ? "Aktiviti Kreatif" : "Creative Arts"}</span>
            </div>
            <div className="aspect-square rounded-2xl bg-brand-blue-light border border-brand-blue/20 flex flex-col items-center justify-center p-4 text-center gap-2 shadow-xs">
              <Users className="w-8 h-8 text-blue-500" />
              <span className="text-xs font-semibold text-slate-600">{locale === "ms" ? "Aktiviti Kumpulan" : "Group Work"}</span>
            </div>
          </div>

          <div className="text-center flex flex-col items-center gap-4">
            <p className="text-[10px] sm:text-xs text-slate-400 italic">
              🔒 {texts.gallery.notice[locale]}
            </p>
            <Link
              href={`/${locale}/gallery`}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all active:scale-95 text-sm shadow-xs"
            >
              <span>{locale === "ms" ? "Lawati Galeri Penuh" : "Visit Full Gallery"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. PARENT TESTIMONIALS */}
      <section className="py-16 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.testimonials.title[locale]}
            subtitle={texts.testimonials.badge[locale]}
            description={texts.testimonials.subtitle[locale]}
            badgeColor="yellow"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {texts.testimonials.cards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col justify-between gap-5 relative playful-shadow-hover"
              >
                {/* Quote decoration */}
                <span className="absolute top-4 right-6 text-6xl text-brand-peach/30 font-serif leading-none select-none">
                  “
                </span>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic z-10 pt-2">
                  "{item.quote[locale]}"
                </p>

                <div className="flex flex-col gap-0.5 pt-4 border-t border-slate-50">
                  <span className="text-xs sm:text-sm font-heading font-semibold text-slate-800">
                    {item.author[locale]}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    📍 {item.location[locale]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.faq.title[locale]}
            subtitle={texts.faq.badge[locale]}
            badgeColor="peach"
          />

          <FaqAccordion locale={locale} />
        </div>
      </section>

      {/* 11. LOCATION SECTION */}
      <section className="py-16 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={texts.location.title[locale]}
            subtitle={texts.location.badge[locale]}
            badgeColor="blue"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Map Placeholder Frame */}
            <div className="lg:col-span-7 bg-white p-4 rounded-3xl border border-slate-100 shadow-xs">
              <div className="aspect-video w-full rounded-2xl bg-brand-blue-light/40 border border-brand-blue/20 flex flex-col items-center justify-center p-6 text-center gap-3">
                <MapPin className="w-12 h-12 text-primary-light stroke-[1.5] animate-bounce" />
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-slate-800 text-sm sm:text-base">
                    No. 1, Jalan Uda Utama 7/2
                  </span>
                  <span className="text-xs text-slate-600 mt-1 max-w-sm">
                    Bandar Uda Utama, Skudai, 81300 Johor Bahru, Johor, Malaysia
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 italic mt-2">
                  ({locale === "ms" ? "Peta interaktif diaktifkan selepas pengesahan rasmi lokasi." : "Interactive map enabled upon official location confirmation."})
                </span>
              </div>
            </div>

            {/* Navigation buttons and text */}
            <div className="lg:col-span-5 flex flex-col items-start gap-5">
              <h3 className="font-heading font-semibold text-lg text-slate-900 leading-snug">
                {locale === "ms" ? "Mari Datang & Lawat Kami" : "Come & Visit Us"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {locale === "ms"
                  ? "Pusat jagaan kami terletak secara strategik di Bandar Uda Utama, Skudai. Sangat mudah diakses untuk ibu bapa yang tinggal atau bekerja di sekitar Johor Bahru."
                  : "Our childcare centre is strategically located in Bandar Uda Utama, Skudai. Easily accessible for parents living or working around Johor Bahru."}
              </p>
              
              <div className="flex flex-col gap-3 w-full">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all text-xs sm:text-sm shadow-xs"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>{translations.buttons.googleMaps[locale]}</span>
                </a>
                <a
                  href={businessInfo.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all text-xs sm:text-sm shadow-xs"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>{translations.buttons.waze[locale]}</span>
                </a>
                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center justify-center gap-1.5 w-full py-3.5 rounded-2xl bg-primary text-white font-bold hover:bg-primary-light transition-all text-xs sm:text-sm shadow-sm"
                >
                  <Clock className="w-4 h-4" />
                  <span>{locale === "ms" ? "Atur Janji Temu Lawatan" : "Schedule Visit Appointment"}</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="bg-primary text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Playful graphic accents */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-yellow/10 filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-peach/10 filter blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-brand-peach flex items-center justify-center text-primary-light mb-2">
            <Heart className="w-6 h-6 fill-brand-peach-dark text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-brand-peach leading-tight">
            {texts.finalCta.title[locale]}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
            {texts.finalCta.desc[locale]}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mt-4">
            <Link
              href={whatsappVisitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-2xl bg-brand-green-light text-emerald-950 font-bold hover:bg-emerald-100 transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>{translations.buttons.whatsappNow[locale]}</span>
            </Link>
            <Link
              href={`/${locale}/registration`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-brand-peach text-primary font-bold hover:bg-brand-peach-dark transition-all text-sm"
            >
              {translations.buttons.register[locale]}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-all border border-slate-700 text-sm"
            >
              {translations.nav.contact[locale]}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
