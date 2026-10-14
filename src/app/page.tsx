import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-gold-100 selection:text-foreground">
      {/* 1. Header and Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services */}
        <Services />

        {/* 4. Why SAIS Labs */}
        <WhyUs />

        {/* 5. How We Work */}
        <HowWeWork />

        {/* 6. Who We Help */}
        <WhoWeHelp />

        {/* 7. About SAIS Labs */}
        <About />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* WhatsApp CTA (displayed only when phone number is configured) */}
      <WhatsAppButton />
    </div>
  );
}
