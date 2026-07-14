"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, error, required, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      <label className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1">
        <span>{label}</span>
        {required && <span className="text-red-500 font-bold">*</span>}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-500 font-semibold mt-0.5 transition-all">
          ⚠️ {error}
        </span>
      )}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full px-4 py-3 text-sm rounded-2xl border bg-white/70 transition-all duration-200 outline-hidden focus:border-brand-peach-dark focus:bg-white focus:ring-4 focus:ring-brand-peach/30 placeholder:text-slate-400 text-slate-800",
          error ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-slate-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "w-full px-4 py-3 text-sm rounded-2xl border bg-white/70 transition-all duration-200 outline-hidden focus:border-brand-peach-dark focus:bg-white focus:ring-4 focus:ring-brand-peach/30 placeholder:text-slate-400 text-slate-800 min-h-[100px] resize-y",
          error ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-slate-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, options, placeholder, ...props }, ref) => {
    return (
      <select
        className={cn(
          "w-full px-4 py-3 text-sm rounded-2xl border bg-white/70 transition-all duration-200 outline-hidden focus:border-brand-peach-dark focus:bg-white focus:ring-4 focus:ring-brand-peach/30 text-slate-800",
          error ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-slate-200",
          className
        )}
        ref={ref}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
);
Select.displayName = "Select";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    const id = useId();
    return (
      <div className="flex items-start gap-2.5 py-1">
        <input
          type="checkbox"
          id={id}
          className={cn(
            "w-5 h-5 rounded-md border text-primary bg-white/70 accent-brand-peach-dark transition-all duration-200 outline-hidden focus:ring-2 focus:ring-brand-peach/30 cursor-pointer mt-0.5",
            error ? "border-red-400" : "border-slate-300",
            className
          )}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "text-xs sm:text-sm font-medium text-slate-600 cursor-pointer select-none leading-snug",
            error && "text-red-500"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
