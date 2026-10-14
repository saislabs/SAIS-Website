"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What services does SAIS Labs provide?",
      answer:
        "SAIS Labs provides four core offerings: Website Design & Development (business websites, landing pages, institute portals), AI Automation & Business Workflows (connecting tools, lead intake, form-to-spreadsheet processing), Business Digital Solutions (custom booking forms, internal tools, reporting interfaces), and practical AI & Technology Workshops for teams and students.",
    },
    {
      question: "Can you build a website for my business or institute?",
      answer:
        "Yes. We design and develop responsive, fast, and modern websites tailored to small businesses, educational institutions, training centres, service providers, and startups. We ensure your website looks great on mobile, tablet, and desktop, with clear structure and enquiry forms.",
    },
    {
      question: "Can you automate repetitive business tasks?",
      answer:
        "Yes, where your tools and workflow allow. We build automation sequences that connect your web forms to spreadsheets, trigger instant email notifications, organise customer enquiries, and reduce manual copy-paste work. The actual feasibility and scope depend on the specific software platforms, APIs, and access permissions you use.",
    },
    {
      question: "Can you customise a solution for my requirements?",
      answer:
        "Yes. We do not believe in forcing one-size-fits-all templates. Every project begins by understanding your exact business process and constraints, allowing us to build a digital solution that fits your everyday routine.",
    },
    {
      question: "How does the project process work?",
      answer:
        "We follow a transparent 5-step process: Understand (learn your goals and current challenges), Plan (define scope, features, and timeline), Build (develop the agreed solution with milestone reviews), Test & Deliver (verify functionality, deliver assets, and guide your team), and Support (ongoing assistance according to agreed terms).",
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer:
        "We configure deployment on reliable modern platforms (such as Vercel, Netlify, or your preferred hosting provider) and provide handover documentation. Ongoing maintenance, updates, and technical support can be arranged based on your specific requirements.",
    },
    {
      question: "How can I request a quotation?",
      answer:
        "You can fill out the contact form below or email us directly with details about your project. Because every project has unique scope, integration needs, and design complexity, we review your requirements first and provide a straightforward, transparent proposal without hidden charges.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="py-20 md:py-28 bg-background border-t border-border"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Clear, straightforward answers about how we work and what to expect.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="border border-border rounded-xl bg-surface shadow-subtle overflow-hidden transition-all duration-200 hover:border-gold-300"
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-foreground hover:text-black focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg transition-colors"
                  >
                    <span className="text-base sm:text-lg pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180 text-foreground" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-muted leading-relaxed border-t border-border/50 animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
