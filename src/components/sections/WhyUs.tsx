import React from "react";
import { MessageSquare, Target, Smartphone, ShieldCheck } from "lucide-react";

export function WhyUs() {
  const points = [
    {
      title: "CLEAR COMMUNICATION",
      description:
        "We aim to understand your requirements before recommending a solution.",
      icon: MessageSquare,
    },
    {
      title: "PRACTICAL APPROACH",
      description:
        "We focus on useful features and real business needs rather than unnecessary complexity.",
      icon: Target,
    },
    {
      title: "RESPONSIVE DESIGN",
      description:
        "We build websites with mobile, tablet, and desktop users in mind.",
      icon: Smartphone,
    },
    {
      title: "THOUGHTFUL DELIVERY",
      description:
        "We aim for maintainable solutions, clear handover, and straightforward communication about scope and limitations.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      aria-label="Why SAIS Labs"
      className="py-20 md:py-28 bg-background border-t border-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technology Should Make Work Simpler.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            We focus on what genuinely helps your business run better, avoiding
            hype and unnecessary overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-surface shadow-subtle hover:shadow-card hover:border-gold-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-200/80 flex items-center justify-center text-gold-600 mb-5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider uppercase text-foreground mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
