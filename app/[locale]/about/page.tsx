"use client";

import { use } from "react";
import Link from "next/link";
import { Heart, Shield, Star, BookOpen, UserCheck, Users, HelpCircle, ArrowRight } from "lucide-react";
import { type Locale, translations } from "@/content/translations";
import SectionHeading from "@/components/shared/SectionHeading";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function AboutPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as Locale;

  const texts = {
    title: { ms: "Tentang Kami", en: "About Us" },
    subtitle: { ms: "Mengenai Pusat Jagaan Durrani Asyrani", en: "About Pusat Jagaan Durrani Asyrani" },
    intro: {
      ms: "Pusat Jagaan Durrani Asyrani diasaskan dengan hasrat untuk menyediakan ruang asuhan dan bimbingan awal yang selamat serta penyayang. Kami memahami bahawa setiap anak berkembang dengan cara yang tersendiri, dan kami komited untuk menyokong mereka secara fizikal dan emosi.",
      en: "Pusat Jagaan Durrani Asyrani was founded with a passion for offering a safe and loving early care environment. We understand that every child grows differently, and we are committed to supporting their physical and emotional development."
    },
    mission: {
      title: { ms: "Misi Kami", en: "Our Mission" },
      body: {
        ms: "Menyediakan persekitaran asuhan yang selamat, bersih, dan kondusif bagi menggalakkan pertumbuhan kanak-kanak melalui rutin harian tersusun dan pendekatan asuhan yang penuh perhatian.",
        en: "To provide a safe, clean, and conducive care environment that encourages children's growth through structured daily routines and highly attentive care."
      }
    },
    vision: {
      title: { ms: "Visi Kami", en: "Our Vision" },
      body: {
        ms: "Menjadi rakan kongsi penjagaan awal kanak-kanak yang dipercayai oleh ibu bapa di Bandar Uda Utama dan Skudai, dengan melahirkan generasi kecil yang yakin, berdisiplin, dan ceria.",
        en: "To be a trusted early childhood care partner for parents in Bandar Uda Utama and Skudai, raising young children who are confident, disciplined, and cheerful."
      }
    },
    philosophy: {
      title: { ms: "Falsafah Asuhan Kami", en: "Our Care Philosophy" },
      body: {
        ms: "Falsafah kami berpaksikan kasih sayang dan rasa hormat terhadap keunikan setiap anak. Kami percaya bahawa penjagaan awal bukan sekadar mengawasi kanak-kanak, tetapi merangkumi bimbingan nilai murni, pembiasaan rutin kebersihan, dan pemupukan rasa ingin tahu melalui aktiviti permainan berpandu.",
        en: "Our philosophy is centered around love and respect for each child's uniqueness. We believe early care is not just about supervision, but encompasses guidance in good moral values, hygiene habit forming, and fostering curiosity through guided play."
      }
    },
    values: {
      title: { ms: "Nilai Teras Kami", en: "Our Core Values" },
      desc: { ms: "Nilai-nilai utama yang menjadi panduan utama pendidik kami di pusat jagaan.", en: "Core values that serve as the main guide for our educators at the centre." },
      items: [
        {
          title: { ms: "Kasih Sayang", en: "Loving Care" },
          desc: { ms: "Mendekati anak-anak dengan kelembutan, memastikan mereka berasa diterima dan selamat.", en: "Approaching children with gentleness, ensuring they feel welcomed and safe." },
          icon: Heart
        },
        {
          title: { ms: "Keselamatan", en: "Safety First" },
          desc: { ms: "Mengamalkan langkah kebersihan yang ketat dan pemantauan fizikal yang peka sepanjang masa.", en: "Practicing strict hygiene measures and highly alert physical supervision at all times." },
          icon: Shield
        },
        {
          title: { ms: "Kesabaran", en: "Patience" },
          desc: { ms: "Membimbing anak dengan ketenangan, memahami bahawa setiap peringkat usia mempunyai ragam tersendiri.", en: "Guiding children calmly, understanding that each age stage comes with its unique behaviors." },
          icon: Star
        },
        {
          title: { ms: "Pembelajaran", en: "Active Learning" },
          desc: { ms: "Merangsang minda menerusi permainan kreatif, aktiviti motor, dan sesi bercerita.", en: "Stimulating young minds through creative play, motor skills training, and storytelling." },
          icon: BookOpen
        },
        {
          title: { ms: "Keyakinan", en: "Self-Confidence" },
          desc: { ms: "Menggalakkan urus diri asas bagi melahirkan anak-anak yang berdikari dan yakin.", en: "Encouraging basic self-help skills to raise children who are independent and confident." },
          icon: UserCheck
        },
        {
          title: { ms: "Kerjasama Ibu Bapa", en: "Parent Cooperation" },
          desc: { ms: "Bekerjasama rapat dengan ibu bapa demi kesinambungan rutin dan perkembangan terbaik anak.", en: "Collaborating closely with parents for the continuity of routines and optimal child growth." },
          icon: Users
        }
      ]
    },
    ownerPlaceholder: {
      title: { ms: "Nota Maklumat Pendidik & Pengasas", en: "Educators & Founder Information Note" },
      body: {
        ms: "Pihak pentadbir boleh mengemas kini bahagian ini dengan latar belakang pengasas, profil pendidik, dan kelayakan kelak. Pusat Jagaan Durrani Asyrani komited untuk melantik pendidik yang penyayang bagi membimbing anak-anak anda.",
        en: "The administrator can update this section with founder backgrounds, educator profiles, and qualifications later. Pusat Jagaan Durrani Asyrani is committed to appointing compassionate educators to guide your children."
      }
    }
  };

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

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs flex flex-col gap-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-yellow-light flex items-center justify-center text-amber-950 font-bold">
              🌟
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              {texts.mission.title[locale]}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {texts.mission.body[locale]}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs flex flex-col gap-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue-light flex items-center justify-center text-primary-light font-bold">
              🚀
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              {texts.vision.title[locale]}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {texts.vision.body[locale]}
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-brand-peach/25 border border-brand-peach-dark/20 rounded-4xl p-6 sm:p-10 mb-16 max-w-4xl mx-auto text-center flex flex-col items-center gap-4 shadow-2xs">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-rose-500 shadow-xs">
            <Heart className="w-6 h-6 fill-rose-500/10" />
          </div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
            {texts.philosophy.title[locale]}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {texts.philosophy.body[locale]}
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <SectionHeading
            title={texts.values.title[locale]}
            description={texts.values.desc[locale]}
            badgeColor="green"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {texts.values.items.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col gap-3.5 playful-shadow-hover"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
                    {val.title[locale]}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc[locale]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Factual Integrity Placement */}
        <div className="max-w-3xl mx-auto bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-6 text-center flex flex-col items-center gap-3">
          <HelpCircle className="w-8 h-8 text-slate-400" />
          <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-800">
            {texts.ownerPlaceholder.title[locale]}
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
            {texts.ownerPlaceholder.body[locale]}
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Link
            href={`/${locale}/registration`}
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold hover:bg-primary-light transition-all active:scale-95 text-sm"
          >
            <span>{translations.buttons.register[locale]}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
