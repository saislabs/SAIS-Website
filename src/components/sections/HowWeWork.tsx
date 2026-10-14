import React from "react";

export function HowWeWork() {
  const steps = [
    {
      step: "01",
      title: "Understand",
      description:
        "We learn about your business, current challenges, and goals.",
    },
    {
      step: "02",
      title: "Plan",
      description:
        "We define the scope, essential features, timeline, and proposed approach.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "We develop the agreed solution and share progress for feedback.",
    },
    {
      step: "04",
      title: "Test & Deliver",
      description:
        "We check the agreed functionality, prepare the delivery, and explain the next steps.",
    },
    {
      step: "05",
      title: "Support",
      description:
        "Maintenance and ongoing support can be discussed according to your requirements.",
    },
  ];

  return (
    <section
      aria-label="How We Work"
      className="py-20 md:py-28 bg-subtle/40 border-t border-border/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            A Simple, Transparent Process.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Clear expectations, regular updates, and structured milestones from
            start to handover.
          </p>
        </div>

        {/* 5-Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="bg-surface rounded-xl border border-border p-6 shadow-subtle hover:border-gold-300 transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-gold-600 bg-gold-50 px-2.5 py-1 rounded border border-gold-200/60">
                    Step {item.step}
                  </span>
                  <span className="text-xs font-medium text-muted/60">
                    {index + 1} of 5
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
