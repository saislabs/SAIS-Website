import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBFBFA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SAIS Labs | Websites, Automation & Digital Solutions",
  description:
    "SAIS Labs helps businesses build professional websites, automate repetitive tasks, and create practical digital solutions.",
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: "SAIS Labs" }],
  creator: "SAIS Labs",
  publisher: "SAIS Labs",
  keywords: [
    "SAIS Labs",
    "Website Design",
    "Website Development",
    "AI Automation",
    "Business Workflows",
    "Digital Solutions",
    "Technology Studio",
    "Business Process Automation",
    "Technology Workshops",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SAIS Labs | Websites, Automation & Digital Solutions",
    description:
      "SAIS Labs helps businesses create professional websites, automate repetitive tasks, and build practical digital solutions that make everyday work simpler.",
    url: siteConfig.url,
    siteName: "SAIS Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAIS Labs | Websites, Automation & Digital Solutions",
    description:
      "SAIS Labs helps businesses create professional websites, automate repetitive tasks, and build practical digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-gold-100 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
