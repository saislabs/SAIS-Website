import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  linkToHome?: boolean;
}

export function Logo({
  className = "",
  size = "md",
  linkToHome = true,
}: LogoProps) {
  const sizeClasses = {
    sm: "text-lg tracking-tight",
    md: "text-xl tracking-tight",
    lg: "text-2xl tracking-tight",
  };

  const markSize = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  const content = (
    <div
      className={`inline-flex items-center gap-2.5 font-sans select-none group ${className}`}
      aria-label="SAIS Labs Home"
    >
      {/* Clean architectural mark */}
      <div
        className={`${markSize[size]} rounded-md bg-foreground text-surface flex items-center justify-center font-bold relative overflow-hidden transition-transform duration-200 group-hover:scale-105 shadow-sm`}
      >
        <span className="text-white text-xs font-semibold tracking-wider font-mono">
          S
        </span>
        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-gold-500 rounded-bl-sm" />
      </div>

      {/* Typography wordmark */}
      <div className="flex items-baseline">
        <span
          className={`font-bold text-foreground transition-colors group-hover:text-black ${sizeClasses[size]}`}
        >
          SAIS
        </span>
        <span
          className={`font-medium text-muted ml-1 uppercase text-xs tracking-widest transition-colors group-hover:text-foreground`}
        >
          LABS
        </span>
      </div>
    </div>
  );

  if (!linkToHome) {
    return content;
  }

  return (
    <Link
      href="#home"
      className="inline-flex items-center focus-visible:ring-2 focus-visible:ring-gold-500 rounded-md transition-opacity hover:opacity-90"
    >
      {content}
    </Link>
  );
}
