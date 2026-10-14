# SAIS Labs — Modern Technology Studio Website

> **Build Better. Work Smarter. Grow Digitally.**

A minimal, high-performance website for **SAIS Labs**, built with Next.js App Router, React, TypeScript, and Tailwind CSS. Tailored for small & medium businesses, educational institutes, training centres, consultants, agencies, and founders.

---

## 🌟 Highlights

- **Fast & Responsive**: Clean layout optimized for mobile (360px+), tablet, laptop, and 4K desktop screens with zero horizontal overflow.
- **Brand Aesthetic**: Warm-white base, deep charcoal typography, refined gold accent (`#B89628`), generous whitespace, and subtle architectural CSS accents.
- **Honest & Direct**: Focused value propositions without fake testimonials, fabricated stats, or artificial demo dashboards.
- **10 Core Sections**:
  1. Header & Navigation (Mobile drawer with accessible toggle & project CTA)
  2. Hero Section (Exact brand copy & clear value proposition)
  3. Services (4 dedicated service cards with transparent scope notes)
  4. Why SAIS Labs (4 fundamental principles)
  5. How We Work (5-step transparent delivery process)
  6. Who We Help (Target audience categories)
  7. About SAIS Labs (Authentic, concise mission & approach)
  8. Frequently Asked Questions (7 honest answers with accordion UI)
  9. Contact & Inquiries (Validated contact form + server-side endpoint + mailto fallback)
  10. Footer (Brand wordmark, dynamic copyright year, configurable social profiles, and privacy policy)
- **Centralized Configuration**: All contact emails, phone numbers, WhatsApp details, and service offerings are controlled from a single configuration file (`src/config/site.ts`).
- **Conditional Features**: The floating WhatsApp CTA button and footer social profiles only appear when valid details are configured—no dead links or placeholder numbers are ever exposed to visitors.

---

## 🛠 Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter (Google Fonts via `next/font`)
- **Deployment Target**: Vercel / GitHub

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # Secure contact form API endpoint
│   │   ├── privacy/
│   │   │   └── page.tsx           # Privacy policy page
│   │   ├── favicon.ico
│   │   ├── globals.css            # Tailwind directives, animations & reset
│   │   ├── icon.svg               # Vector favicon
│   │   ├── layout.tsx             # Root layout with metadata & fonts
│   │   ├── page.tsx               # Homepage integrating all 10 sections
│   │   ├── robots.ts              # Search engine robots configuration
│   │   └── sitemap.ts             # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo.tsx           # Scalable SAIS Labs text-based wordmark
│   │   │   └── WhatsAppButton.tsx # Config-gated floating WhatsApp CTA
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Responsive sticky header & drawer
│   │   │   └── Footer.tsx         # Brand footer with dynamic year
│   │   └── sections/
│   │       ├── Hero.tsx           # Hero section with exact copy
│   │       ├── Services.tsx       # 4 core service cards with scope notes
│   │       ├── WhyUs.tsx          # 4 core pillars of approach
│   │       ├── HowWeWork.tsx      # 5-step transparent delivery workflow
│   │       ├── WhoWeHelp.tsx      # Audience categories
│   │       ├── About.tsx          # Authentic, concise brand statement
│   │       ├── FAQ.tsx            # 7 detailed FAQ accordion items
│   │       └── Contact.tsx        # Validated form with direct email fallback
│   ├── config/
│   │   └── site.ts                # Central configuration (Brand, Contact, Services)
│   └── types/
├── .env.example                   # Optional environment variable reference
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18.17` or later (Node `v24.x` tested and supported)
- npm, pnpm, or yarn

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/sais-labs-website.git

# Navigate into the project folder
cd sais-labs-website

# Install dependencies
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### 3. Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## ⚙️ Configuration Guide

All primary business settings are located in [`src/config/site.ts`](src/config/site.ts).

### 1. Updating Contact Email
In `src/config/site.ts`:
```typescript
contact: {
  email: "your-verified-email@saislabs.com", // Used for contact display and mailto links
  ...
}
```

### 2. Configuring WhatsApp Floating Button
The floating WhatsApp button remains hidden until a valid phone number is supplied:
```typescript
contact: {
  // Replace with your international number including country code (e.g. "+919876543210")
  whatsappNumber: "+919876543210", 
  whatsappPrefillMessage: "Hello SAIS Labs, I'm interested in discussing a project for my business.",
  ...
}
```

### 3. Updating Social Links
Profiles with empty strings are excluded automatically from the footer:
```typescript
social: {
  linkedin: "https://linkedin.com/company/saislabs",
  twitter: "", // Left blank = hidden
  github: "https://github.com/saislabs",
}
```

### 4. Updating Services or Scope
Edit the `services` array in [`src/config/site.ts`](src/config/site.ts) to adjust service titles, deliverables, or short descriptions.

---

## 📨 Contact Form & Email Setup

The contact section includes:
1. **Client-side validation**: Validates required fields, email syntax, and minimum description lengths before dispatch.
2. **Server-side validation**: The API route (`/api/contact`) re-validates payload integrity and logs submissions on the server.
3. **Automated Email Dispatch (Optional)**:
   - To route submissions directly into your inbox via [Resend](https://resend.com):
     1. Sign up for a free Resend account and obtain an API key.
     2. Add the following to your `.env.local` or Vercel Environment Variables:
        ```bash
        RESEND_API_KEY=re_your_resend_api_key
        CONTACT_RECEIVER_EMAIL=your-inbox@saislabs.com
        ```
4. **Direct Mail Fallback**: Visitors can also click *"Open in Mail Client"* to launch their native email application with a prefilled message body.

---

## 🌐 Deploying to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SAIS Labs website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sais-labs-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
   - Import your GitHub repository (`sais-labs-website`).
   - Framework Preset will be automatically detected as **Next.js**.
   - (Optional) In **Environment Variables**, add `RESEND_API_KEY` and `CONTACT_RECEIVER_EMAIL` if you wish to use automated email forwarding.
   - Click **Deploy**.

Vercel will build and assign a production URL (e.g., `https://sais-labs-website.vercel.app`).

---

## 📄 License & Attribution

Copyright © 2026 SAIS Labs. All rights reserved.
