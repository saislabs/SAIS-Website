import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function About() {
  const principles = [
    {
      title: "Problem First",
      text: "Understanding the underlying workflow problem before writing code.",
    },
    {
      title: "Right Tooling",
      text: "Selecting robust, standard technologies that are cost-effective and easy to maintain.",
    },
    {
      title: "Clarity & Handover",
      text: "Transparent documentation and clear explanations without technical jargon.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About SAIS Labs"
      className="py-20 md:py-28 bg-subtle/50 border-t border-border/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-2xl border border-border p-8 sm:p-12 md:p-16 shadow-subtle">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-subtle text-xs font-semibold uppercase tracking-wider text-muted mb-6">
            About Us
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-black ring-2 ring-gold-400/30 shrink-0 shadow-subtle">
              <Image
                src="/logo.png"
                alt="SAIS Labs"
                width={112}
                height={112}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              About SAIS Labs
            </h2>
          </div>

          {/* Authentic exact copy */}
          <div className="space-y-5 text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl">
            <p>
              SAIS Labs is a technology-focused initiative dedicated to building
              practical websites, business automation workflows, and digital
              solutions.
            </p>
            <p>
              Our approach is simple: understand the problem, choose the right
              tools, and build something useful, clear, and maintainable.
            </p>
            <p className="text-foreground font-medium">
              We are focused on learning, building, and helping businesses make
              better use of technology.
            </p>
          </div>

          {/* Core guiding principles */}
          <div className="mt-12 pt-10 border-t border-border/80 grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <div className="w-5 h-5 rounded-full bg-gold-50 border border-gold-200/80 flex items-center justify-center text-gold-600 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{p.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed pl-7">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
