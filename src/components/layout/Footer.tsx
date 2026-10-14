import React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/config/site";
import {
  Mail,
  MessageCircle,
  Phone,
  ArrowUpRight,
  Linkedin,
  Instagram,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-16 pb-12 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-dark-border">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="dark" />
            <p className="text-sm text-dark-muted max-w-sm leading-relaxed">
              Practical websites and digital solutions for better business
              workflows.
            </p>
            <p className="text-xs text-dark-muted/80">
              Modern digital development, intelligent workflow automations, and
              practical tech guidance.
            </p>

            {/* Verified Social Profiles */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-dark-border bg-gray-900/60 hover:bg-gray-800 text-xs font-medium text-white inline-flex items-center gap-1.5 transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Surya M</span>
                  <ArrowUpRight className="w-3 h-3 text-dark-muted group-hover:text-white" />
                </a>
              )}

              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-dark-border bg-gray-900/60 hover:bg-gray-800 text-xs font-medium text-white inline-flex items-center gap-1.5 transition-colors group"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>@saislabs</span>
                  <ArrowUpRight className="w-3 h-3 text-dark-muted group-hover:text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li>
                <Link
                  href="#home"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About SAIS Labs
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-dark-muted">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#contact?service=${encodeURIComponent(
                      s.formServiceOption
                    )}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm text-dark-muted">
              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span className="text-xs sm:text-sm">{siteConfig.contact.email}</span>
              </a>

              {/* Phone */}
              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.whatsappNumber}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span className="text-xs sm:text-sm">{siteConfig.contact.phone}</span>
                </a>
              )}

              {/* WhatsApp */}
              {siteConfig.contact.whatsappNumber && (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(
                    /[^\d+]/g,
                    ""
                  )}?text=${encodeURIComponent(siteConfig.contact.whatsappPrefillMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span className="text-xs sm:text-sm">WhatsApp Chat</span>
                </a>
              )}

              <p className="text-xs text-dark-muted/70 pt-1">
                {siteConfig.contact.locationPlaceholder}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-dark-muted gap-4">
          <p>© {currentYear} SAIS Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#home"
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
