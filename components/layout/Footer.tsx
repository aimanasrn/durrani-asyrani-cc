import Link from "next/link";
import { Phone, Mail, MapPin, Heart, ExternalLink } from "lucide-react";
import { translations, type Locale } from "@/content/translations";
import { businessInfo } from "@/content/business";
import { navLinksList } from "@/content/navigation";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-brand-peach flex items-center justify-center text-primary font-bold">
                <Heart className="w-5 h-5 fill-brand-peach-dark" />
              </div>
              <span className="font-heading font-bold text-lg text-brand-peach">
                Durrani Asyrani
              </span>
            </Link>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {locale === "ms"
                ? "Pusat jagaan kanak-kanak yang selamat, ceria dan penuh perhatian di Bandar Uda Utama, Skudai, Johor Bahru."
                : "A safe, cheerful, and attentive childcare centre in Bandar Uda Utama, Skudai, Johor Bahru."}
            </p>
            <p className="text-[11px] text-slate-400">
              {locale === "ms" ? "Pendaftaran dibuka sejak: " : "Registered date: "}
              {businessInfo.establishedDate}
            </p>
          </div>

          {/* Sitemap Links */}
          <div className="flex flex-col gap-3">
            <span className="font-heading font-semibold text-sm text-brand-yellow uppercase tracking-wider">
              {locale === "ms" ? "Pautan Pintas" : "Quick Links"}
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              {navLinksList.map((link) => (
                <li key={link.path}>
                  <Link
                    href={`/${locale}${link.path ? "/" + link.path : ""}`}
                    className="text-slate-300 hover:text-brand-peach transition-colors"
                  >
                    {translations.nav[link.labelKey][locale]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-slate-300 hover:text-brand-peach transition-colors"
                >
                  {locale === "ms" ? "Dasar Privasi" : "Privacy Policy"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <span className="font-heading font-semibold text-sm text-brand-yellow uppercase tracking-wider">
              {locale === "ms" ? "Hubungi Kami" : "Contact Details"}
            </span>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-peach shrink-0 mt-0.5" />
                <span>{businessInfo.formattedAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-peach shrink-0" />
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="hover:text-brand-peach transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-peach shrink-0" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="hover:text-brand-peach transition-colors break-all"
                >
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigasi (Location Apps) */}
          <div className="flex flex-col gap-4">
            <span className="font-heading font-semibold text-sm text-brand-yellow uppercase tracking-wider">
              {locale === "ms" ? "Navigasi Lokasi" : "Navigate to Us"}
            </span>
            <p className="text-slate-300 text-xs leading-relaxed">
              {locale === "ms"
                ? "Gunakan Waze atau Google Maps untuk panduan perjalanan terus ke pusat jagaan kami."
                : "Use Waze or Google Maps for navigation route directly to our childcare centre."}
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg border border-slate-600 hover:border-brand-peach text-slate-200 hover:text-brand-peach transition-all"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={businessInfo.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg border border-slate-600 hover:border-brand-peach text-slate-200 hover:text-brand-peach transition-all"
              >
                <span>Waze</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {businessInfo.name}.{" "}
            {locale === "ms" ? "Hak Cipta Terpelihara." : "All Rights Reserved."}
          </p>
          <p className="text-[11px] text-center sm:text-right max-w-md italic leading-normal">
            {locale === "ms"
              ? "Penafian: Maklumat di laman web ini disediakan untuk penerangan umum sahaja dan bukan jaminan perkhidmatan rasmi."
              : "Disclaimer: Information on this website is for general reference only and does not constitute a formal guarantee of services."}
          </p>
        </div>
      </div>
    </footer>
  );
}
