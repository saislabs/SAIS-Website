import React from "react";
import Link from "next/link";
import {
  Globe,
  Cpu,
  Layers,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function Services() {
  const icons = [Globe, Cpu, Layers, GraduationCap];

  return (
    <section
      id="services"
      aria-label="Services"
      className="py-20 md:py-28 bg-subtle/50 border-y border-border/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Practical Technology. Real Business Needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            We help businesses improve their online presence and simplify
            everyday operations through focused digital solutions.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.id}
                className="bg-surface rounded-xl border border-border p-7 sm:p-9 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:border-gold-300/80"
              >
                <div>
                  {/* Top card bar with number and subtle icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-subtle text-foreground/70 border border-border/60">
                      SERVICE {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 transition-colors duration-200 group-hover:bg-gold-500 group-hover:text-white">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Scope note for automation */}
                  {service.id === "ai-automation-workflows" && (
                    <p className="mt-2.5 text-xs text-muted/90 italic">
                      Actual scope depends on your tools, existing systems, and
                      access permissions.
                    </p>
                  )}

                  {/* Deliverables / Capabilities List */}
                  <div className="mt-6 pt-6 border-t border-border/70">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-3.5">
                      What we cover
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-border/70">
                  <Link
                    href={`#contact?service=${encodeURIComponent(
                      service.formServiceOption
                    )}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-gold-700 transition-colors focus-visible:ring-2 focus-visible:ring-gold-500 rounded py-1"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
