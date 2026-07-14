"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, MessageCircle, Heart, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { translations, type Locale } from "@/content/translations";
import { navLinksList } from "@/content/navigation";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { businessInfo } from "@/content/business";

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Watch scroll to add sticky shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleLanguage = () => {
    if (!pathname) return;
    const nextLocale = locale === "ms" ? "en" : "ms";
    const segments = pathname.split("/");
    // segments[1] contains the current locale
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  const activePath = pathname ? pathname.replace(/^\/[a-z]{2}/, "") : "";
  const isLinkActive = (path: string) => {
    if (path === "") {
      return activePath === "" || activePath === "/";
    }
    return activePath.startsWith("/" + path) || activePath === path;
  };

  const whatsappLink = getWhatsAppLink("general");

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-cream-bg/90 backdrop-blur-sm py-4 border-b border-orange-100/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-peach flex items-center justify-center text-primary-light font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-5.5 h-5.5 text-primary fill-brand-peach-dark" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl text-primary leading-tight">
                Durrani Asyrani
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 uppercase font-semibold">
                {locale === "ms" ? "Pusat Jagaan Kanak-Kanak" : "Child Care Centre"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinksList.map((link) => {
              const fullPath = `/${locale}${link.path ? "/" + link.path : ""}`;
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.path}
                  href={fullPath}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    active
                      ? "text-primary font-bold"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {translations.nav[link.labelKey][locale]}
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-peach-dark rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{locale === "ms" ? "EN" : "BM"}</span>
            </button>

            {/* WhatsApp Link */}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-brand-green-light border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-all active:scale-95 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>{translations.buttons.whatsapp[locale]}</span>
            </Link>

            {/* Register Interest */}
            <Link
              href={`/${locale}/registration`}
              className="px-5 py-2 text-xs font-bold rounded-full bg-primary text-white hover:bg-primary-light transition-all active:scale-95 shadow-sm hover:shadow-md"
            >
              {translations.buttons.register[locale]}
            </Link>
          </div>

          {/* Mobile Actions Menu */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Small Lang Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="Tukar bahasa"
            >
              {locale === "ms" ? "EN" : "BM"}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Menu navigasi"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-cream-bg z-50 p-6 flex flex-col shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-heading font-bold text-lg text-primary">
                  {locale === "ms" ? "Menu Pilihan" : "Navigation"}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-4 overflow-y-auto mb-6 flex-1">
                {navLinksList.map((link) => {
                  const fullPath = `/${locale}${link.path ? "/" + link.path : ""}`;
                  const active = isLinkActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      href={fullPath}
                      onClick={() => setIsOpen(false)}
                      className={`py-3 px-4 rounded-2xl text-base font-semibold transition-all ${
                        active
                          ? "bg-brand-peach/40 text-primary-light font-bold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-primary"
                      }`}
                    >
                      {translations.nav[link.labelKey][locale]}
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-slate-200">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-brand-green-light border border-emerald-200 text-emerald-800 font-bold hover:bg-emerald-100 transition-all text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                  <span>{translations.buttons.whatsapp[locale]}</span>
                </Link>

                <Link
                  href={`/${locale}/registration`}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded-2xl bg-primary text-white text-center font-bold hover:bg-primary-light transition-all text-sm shadow-sm"
                >
                  {translations.buttons.register[locale]}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
