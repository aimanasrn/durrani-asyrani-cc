import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { type Locale } from "@/content/translations";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const runtime = "edge";

export function generateStaticParams() {
  return [{ locale: "ms" }, { locale: "en" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  return {
    title: locale === "ms" ? "Pusat Jagaan Durrani Asyrani" : "Durrani Asyrani Childcare Centre",
    description: locale === "ms" 
      ? "Pusat Jagaan Kanak-Kanak pilihan di Skudai, Johor Bahru" 
      : "Preferred Child Care Centre in Skudai, Johor Bahru",
    icons: {
      icon: "/favicon.ico",
    }
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  
  return (
    <html
      lang={locale}
      className={`${fredoka.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-bg text-slate-800 font-sans">
        <AnnouncementBar locale={locale} />
        <Header locale={locale} />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer locale={locale} />
        <WhatsAppButton locale={locale} />
      </body>
    </html>
  );
}
