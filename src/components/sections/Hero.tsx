import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Subtle background ambient grid & warm accent */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(rgba(184, 150, 40, 0.08) 1px, transparent 1px), radial-gradient(rgba(17, 24, 39, 0.04) 1px, transparent 1px)`,
          backgroundSize: "32px 32px, 16px 16px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-gold-100/40 via-transparent to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface shadow-subtle mb-6 sm:mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
            WE BUILD PRACTICAL DIGITAL SOLUTIONS
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance max-w-4xl mx-auto leading-[1.12]">
          Build Better. Work Smarter.{" "}
          <span className="relative inline-block text-foreground">
            Grow Digitally.
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-2 text-gold-500/40"
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
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed text-pretty">
          SAIS Labs helps businesses create professional websites, automate
          repetitive tasks, and build practical digital solutions that make
          everyday work simpler.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-foreground text-surface hover:bg-black font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-gold-500 group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border bg-surface hover:bg-subtle/80 text-foreground font-medium text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <span>Explore Our Services</span>
            <ChevronDown className="w-4 h-4 text-muted" />
          </Link>
        </div>

        {/* Small supporting text */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border/60 max-w-md mx-auto">
          <p className="text-xs tracking-wider uppercase font-medium text-muted">
            Websites <span className="text-gold-500 mx-1.5">•</span> Automation{" "}
            <span className="text-gold-500 mx-1.5">•</span> Digital Solutions
          </p>
        </div>
      </div>
    </section>
  );
}
