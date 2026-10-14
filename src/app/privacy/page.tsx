import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | SAIS Labs",
  description: "Privacy policy and data handling information for SAIS Labs.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <header className="border-b border-border bg-surface py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Logo size="md" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20 flex-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated: October 2026
        </p>

        <div className="space-y-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">1. Overview</h2>
            <p>
              SAIS Labs respects your privacy. This policy explains what information we collect when you visit our website or submit an inquiry, and how that information is handled.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. Information We Collect</h2>
            <p>
              When you submit a contact inquiry on our website, we collect your name, business name (if provided), email address, selected service area, and project description.
            </p>
            <p>
              We use this information exclusively to communicate with you about your project request and provide relevant technical solutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-muted">
              <li>To evaluate your project requirements and scope.</li>
              <li>To respond to your inquiries and schedule discovery discussions.</li>
              <li>To provide agreed design, automation, or workshop services.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties or marketing companies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Data Security & Retention</h2>
            <p>
              We maintain reasonable technical and organizational precautions to protect your data. Inquiry information is retained only as long as necessary to fulfill project communication or comply with legal obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions about this privacy statement or wish to request the removal of any submitted information, please reach out directly to us at:
            </p>
            <p className="font-semibold text-foreground">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline hover:text-gold-700"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-6 bg-surface text-center text-xs text-muted">
        <p>© {new Date().getFullYear()} SAIS Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
