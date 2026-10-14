"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/common/Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-subtle py-3.5"
          : "bg-background/80 backdrop-blur-sm border-b border-border/40 py-4.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark Logo with emblem */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold-500 rounded px-1.5 py-0.5"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Primary CTA (Gold with Charcoal Text for High Contrast) */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gold-500 hover:bg-gold-400 text-foreground transition-all duration-200 shadow-subtle hover:shadow-card focus-visible:ring-2 focus-visible:ring-foreground group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-lg text-foreground hover:bg-subtle transition-colors focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-background border-b border-border shadow-card transition-all duration-200 animate-fade-in"
        >
          <div className="px-5 pt-3 pb-6 space-y-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="block py-2.5 text-base font-medium text-foreground hover:text-gold-600 border-b border-border/40 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="#contact"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-gold-500 hover:bg-gold-400 text-foreground transition-colors shadow-subtle"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
