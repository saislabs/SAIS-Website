export interface SiteConfig {
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappPrefillMessage: string;
    locationPlaceholder: string;
  };
  social: {
    linkedin?: string;
    instagram?: string;
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

  // Central verified contact configuration
  contact: {
    email: "suryaaisolutions21@gmail.com",
    phone: "+91 63807 28543",
    whatsappNumber: "+916380728543",
    whatsappPrefillMessage:
      "Hello SAIS Labs, I'm interested in discussing a project for my business.",
    locationPlaceholder: "Tamil Nadu, India • Serving Global Clients",
  },

  // Verified social profiles
  social: {
    linkedin: "https://www.linkedin.com/in/surya21012007/",
    instagram: "https://www.instagram.com/saislabs",
    twitter: "",
    github: "",
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
