import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background"
    >
      {/* Subtle architectural ambient grid */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(rgba(211, 175, 19, 0.15) 1px, transparent 1px), radial-gradient(rgba(17, 24, 39, 0.05) 1px, transparent 1px)`,
          backgroundSize: "32px 32px, 16px 16px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[260px] bg-gradient-to-tr from-gold-100/30 via-transparent to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Brand Emblem Presentation */}
        <div className="flex flex-col items-center justify-center mb-6 animate-fade-in">
          <div className="relative group cursor-default">
            {/* Subtle ambient halo */}
            <div
              className="absolute -inset-1.5 bg-gradient-to-r from-gold-400/20 via-gold-500/25 to-gold-400/20 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-black shadow-card ring-2 ring-gold-400/40 p-0.5 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="SAIS Labs Official Logo"
                width={176}
                height={176}
                priority
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface shadow-subtle mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-wider uppercase text-foreground/85">
            WE BUILD PRACTICAL DIGITAL SOLUTIONS
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance max-w-4xl mx-auto leading-[1.12]">
          Build Better. Work Smarter.{" "}
          <span className="relative inline-block text-foreground">
            Grow Digitally.
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 text-gold-500/40"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,8 Q50,0 100,8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Supporting paragraph */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed text-pretty">
          SAIS Labs helps businesses create professional websites, automate
          repetitive tasks, and build practical digital solutions that make
          everyday work simpler.
        </p>

        {/* Action Buttons: Gold Primary CTA + Quieter Secondary CTA */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-foreground font-semibold text-sm transition-all duration-200 shadow-card hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-foreground group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border bg-surface hover:bg-subtle text-foreground font-medium text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <span>Explore Our Services</span>
            <ChevronDown className="w-4 h-4 text-muted" />
          </Link>
        </div>

        {/* Honest Credibility Statement & Service Pillars */}
        <div className="mt-12 pt-8 border-t border-border max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs text-muted">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>Honest scoping, maintainable code, and direct founder communication.</span>
          </div>

          <p className="text-xs tracking-wider uppercase font-medium text-muted">
            Websites <span className="text-gold-500 mx-1.5">•</span> Automation{" "}
            <span className="text-gold-500 mx-1.5">•</span> Digital Solutions
          </p>
        </div>
      </div>
    </section>
  );
}
