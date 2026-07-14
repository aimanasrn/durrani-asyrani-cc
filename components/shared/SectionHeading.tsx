import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  badgeColor?: "peach" | "yellow" | "green" | "blue";
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className,
  badgeColor = "peach"
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  const badgeBg = {
    peach: "bg-brand-peach/40 text-rose-900 border-brand-peach-dark/30",
    yellow: "bg-brand-yellow/30 text-amber-900 border-brand-yellow/40",
    green: "bg-brand-green/30 text-emerald-900 border-brand-green/40",
    blue: "bg-brand-blue/30 text-blue-900 border-brand-blue/40"
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mx-auto mb-10 md:mb-14", alignClasses[align], className)}>
      {subtitle && (
        <span
          className={cn(
            "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border",
            badgeBg[badgeColor]
          )}
        >
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
