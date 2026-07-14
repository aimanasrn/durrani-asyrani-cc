"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqList } from "@/content/faq";
import { type Locale } from "@/content/translations";

interface FaqAccordionProps {
  locale: Locale;
}

export default function FaqAccordion({ locale }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-4">
      {faqList.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(item.id)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-slate-800 hover:text-primary transition-colors focus-visible:outline-hidden focus-visible:bg-slate-50 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{item.question[locale]}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-brand-peach-dark" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 border-t border-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.answer[locale]}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
