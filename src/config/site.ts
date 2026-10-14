export interface SiteConfig {
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  url: string;
  contact: {
    // Leave placeholder or replace with verified email address
    // e.g. "contact@saislabs.com" or "hello@saislabs.com"
    email: string;
    // Set to your valid international WhatsApp number (e.g. "+919876543210")
    // When empty (""), the floating WhatsApp button and WhatsApp links are safely hidden.
    whatsappNumber: string;
    whatsappPrefillMessage: string;
    locationPlaceholder: string;
  };
  social: {
    // Only populated platforms with real URLs are displayed in the footer
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  services: {
    id: string;
    number: string;
    title: string;
    shortDescription: string;
    deliverables: string[];
    ctaText: string;
    formServiceOption: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "SAIS Labs",
  tagline: "Build Better. Work Smarter. Grow Digitally.",
  positioning:
    "A modern technology studio helping businesses build better websites, automate repetitive work, and improve their digital presence.",
  description:
    "SAIS Labs helps businesses create professional websites, automate repetitive tasks, and build practical digital solutions that make everyday work simpler.",
  url: "https://saislabs.com",

  // Central contact configuration
  // Replace placeholders with verified business details when ready
  contact: {
    email: "contact@saislabs.com", // update to your verified business email
    whatsappNumber: "", // Set to e.g. "+91XXXXXXXXXX" to enable the WhatsApp button
    whatsappPrefillMessage:
      "Hello SAIS Labs, I'm interested in discussing a project for my business.",
    locationPlaceholder: "India • Serving Global Clients",
  },

  // Social profiles (only non-empty URLs will be displayed)
  social: {
    linkedin: "", // e.g. "https://linkedin.com/company/saislabs"
    twitter: "",
    github: "", // e.g. "https://github.com/saislabs"
  },

  services: [
    {
      id: "website-design-development",
      number: "01",
      title: "Website Design & Development",
      shortDescription:
        "Professional, responsive websites designed to present your business clearly and help customers take the next step.",
      deliverables: [
        "Business websites",
        "Landing pages",
        "Institute and educational websites",
        "Service and company websites",
        "Website redesign and responsive improvements",
        "Contact and enquiry forms",
      ],
      ctaText: "Discuss a Website",
      formServiceOption: "Website Design & Development",
    },
    {
      id: "ai-automation-workflows",
      number: "02",
      title: "AI Automation & Workflows",
      shortDescription:
        "Reduce repetitive manual work by connecting your business tools and creating practical automation workflows.",
      deliverables: [
        "Enquiry capture workflows",
        "Lead organisation and follow-up processes",
        "Form-to-spreadsheet automation",
        "Email notifications and reminders",
        "Data organisation and reporting workflows",
        "AI-assisted business tasks where appropriate",
      ],
      ctaText: "Explore Automation",
      formServiceOption: "AI Automation & Workflows",
    },
    {
      id: "business-digital-solutions",
      number: "03",
      title: "Business Digital Solutions",
      shortDescription:
        "Practical digital tools that help businesses organise information, manage requests, and improve everyday processes.",
      deliverables: [
        "Online booking and enquiry systems",
        "Business forms and internal tools",
        "Simple reporting interfaces",
        "Website customisation",
        "Digital workflow improvements",
        "Small business web applications",
      ],
      ctaText: "Discuss Your Requirements",
      formServiceOption: "Business Digital Solutions",
    },
    {
      id: "ai-technology-workshops",
      number: "04",
      title: "AI & Technology Workshops",
      shortDescription:
        "Beginner-friendly workshops that help students and teams understand practical technology concepts and explore real-world applications.",
      deliverables: [
        "Introduction to AI tools",
        "AI-assisted project building",
        "Beginner hackathon preparation",
        "Practical technology sessions",
        "Student project guidance",
      ],
      ctaText: "Enquire About Workshops",
      formServiceOption: "AI & Technology Workshops",
    },
  ],
};
