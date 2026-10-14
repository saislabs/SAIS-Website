import React from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
} from "lucide-react";

export function WhoWeHelp() {
  const categories = [
    {
      title: "Small Businesses",
      description:
        "Local businesses, retail, and growing companies looking to modernise their online presence and customer intake.",
      icon: Briefcase,
    },
    {
      title: "Educational Institutes",
      description:
        "Schools, colleges, training centres, and academies needing clear course information and student admission workflows.",
      icon: GraduationCap,
    },
    {
      title: "Service Providers",
      description:
        "Independent operators and trade specialists requiring professional enquiry capture and booking channels.",
      icon: Compass,
    },
    {
      title: "Consultants and Agencies",
      description:
        "Professional advisors and boutique agencies looking to elevate their digital positioning and automate repetitive admin.",
      icon: Users,
    },
    {
      title: "Founders and Entrepreneurs",
      description:
        "Early-stage builders and leaders launching new initiatives needing clean landing pages and practical workflows.",
      icon: Sparkles,
    },
  ];

  return (
    <section
      aria-label="Who We Help"
      className="py-20 md:py-28 bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Audience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Built Around Your Business Needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Whether you need a professional website or a more organised business
            workflow, let&apos;s discuss a solution that fits your needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-surface shadow-subtle hover:shadow-card hover:border-gold-300 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-50/70 border border-gold-200/60 flex items-center justify-center text-foreground mb-4">
                  <Icon className="w-4 h-4 text-gold-600" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}

          {/* Call to action card */}
          <div className="p-6 rounded-xl border border-gold-300/80 bg-gold-50/50 flex flex-col justify-between shadow-subtle">
            <div>
              <span className="text-xs font-mono font-semibold text-gold-700 uppercase tracking-wider">
                GET IN TOUCH
              </span>
              <h3 className="text-base font-bold text-foreground mt-2 mb-2">
                Have a different use case?
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                We are open to discussing unique requirements and tailoring our
                approach to your business setup.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gold-200/70">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold-700 transition-colors"
              >
                <span>Discuss your scenario</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
