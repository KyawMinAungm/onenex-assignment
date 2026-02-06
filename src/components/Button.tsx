"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  label?: string;
  className?: string;
  bg?: string;
  fg?: string;
}

export default function Button({ label, className, bg, fg }: ButtonProps) {
  return (
    <div
      className={`w-max px-4 flex items-center justify-center gap-2 font-sharp py-3 border text-nowrap text-xs font-bold transition-all duration-300 hover:bg-foreground hover:text-background
        ${
          bg ? `bg-${bg}` : "bg-background"
        } ${fg ? `text-${fg}` : "text-foreground"} ${className}`}
    >
      {label}
      <ArrowRight size={14} />
    </div>
  );
}
