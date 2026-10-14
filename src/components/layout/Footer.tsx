import React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/config/site";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Filter social links that are actually configured
  const configuredSocial = Object.entries(siteConfig.social).filter(
    ([_, url]) => url && url.trim().length > 0 && !url.includes("example.com")
  );

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-12 text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Practical websites and digital solutions for better business
              workflows.
            </p>
            <p className="text-xs text-muted/70">
              Modern digital development, intelligent workflow automations, and
              practical tech guidance.
            </p>

            {/* Display social links ONLY if configured */}
            {configuredSocial.length > 0 && (
              <div className="pt-2 flex items-center gap-3">
                {configuredSocial.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-muted hover:text-foreground inline-flex items-center gap-1 transition-colors capitalize"
                  >
                    <span>{platform}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link
                  href="#home"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-foreground transition-colors"
                >
                  About SAIS Labs
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#contact?service=${encodeURIComponent(
                      s.formServiceOption
                    )}`}
                    className="hover:text-foreground transition-colors line-clamp-1"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-muted">
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              )}

              {siteConfig.contact.whatsappNumber &&
                !siteConfig.contact.whatsappNumber.includes("XXXXX") && (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(
                      /[^\d+]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                )}

              <p className="text-xs text-muted/80 pt-1">
                {siteConfig.contact.locationPlaceholder}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
          <p>© {currentYear} SAIS Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#home"
              className="hover:text-foreground transition-colors"
            >
              Back to Top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
