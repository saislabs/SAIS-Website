import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  linkToHome?: boolean;
  variant?: "light" | "dark";
}

export function Logo({
  className = "",
  size = "md",
  showText = true,
  linkToHome = true,
  variant = "light",
}: LogoProps) {
  const pixelDimensions = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 72,
  };

  const px = pixelDimensions[size];

  const content = (
    <div
      className={`inline-flex items-center gap-3 font-sans select-none group ${className}`}
      aria-label="SAIS Labs Home"
    >
      {/* Official circular emblem */}
      <div
        className="relative rounded-full overflow-hidden bg-black shadow-subtle group-hover:shadow-logo ring-1 ring-gold-400/30 transition-all duration-300 transform group-hover:scale-105 shrink-0"
        style={{ width: `${px}px`, height: `${px}px` }}
      >
        <Image
          src="/logo.png"
          alt="SAIS Labs Official Logo"
          width={px * 2}
          height={px * 2}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Clean typographic lockup */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className={`font-extrabold tracking-tight text-lg sm:text-xl font-sans transition-colors ${
                variant === "dark"
                  ? "text-white group-hover:text-gold-200"
                  : "text-foreground group-hover:text-black"
              }`}
            >
              SAIS
            </span>
            <span className="font-bold text-xs tracking-widest uppercase text-gold-500 transition-colors">
              LABS
            </span>
          </div>
          <span
            className={`text-[10px] tracking-wider uppercase font-medium mt-1 leading-none ${
              variant === "dark" ? "text-dark-muted" : "text-muted"
            }`}
          >
            Technology Studio
          </span>
        </div>
      )}
    </div>
  );

  if (!linkToHome) {
    return content;
  }

  return (
    <Link
      href="#home"
      className="inline-flex items-center focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg transition-opacity hover:opacity-95"
    >
      {content}
    </Link>
  );
}
