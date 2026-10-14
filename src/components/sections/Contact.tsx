"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MessageSquare,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface FormValues {
  name: string;
  businessName: string;
  email: string;
  service: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  description?: string;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    businessName: "",
    email: "",
    service: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const serviceOptions = [
    "Website Design & Development",
    "AI Automation & Workflows",
    "Business Digital Solutions",
    "AI & Technology Workshops",
    "Not Sure Yet",
  ];

  // Auto-detect service from hash if user clicked service card CTA
  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined" && window.location.hash.includes("service=")) {
        const parts = window.location.hash.split("service=");
        if (parts[1]) {
          const decoded = decodeURIComponent(parts[1]);
          if (serviceOptions.includes(decoded)) {
            setValues((prev) => ({ ...prev, service: decoded }));
          }
        }
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const validate = (formValues: FormValues): FormErrors => {
    const errs: FormErrors = {};

    if (!formValues.name.trim()) {
      errs.name = "Your name is required.";
    } else if (formValues.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!emailRegex.test(formValues.email.trim())) {
      errs.email = "Please enter a valid email address (e.g., name@example.com).";
    }

    if (!formValues.service) {
      errs.service = "Please select the service you are interested in.";
    }

    if (!formValues.description.trim()) {
      errs.description = "Please share a brief description of your project.";
    } else if (formValues.description.trim().length < 10) {
      errs.description = "Description should be at least 10 characters.";
    }

    return errs;
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const updatedValues = { ...values, [name]: value };
      const validationErrors = validate(updatedValues);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      service: true,
      description: true,
    });

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please contact us via email.");
      }
    }
  };

  const mailtoLink = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${values.service || "General"}`
  )}&body=${encodeURIComponent(
    `Hello SAIS Labs,\n\nName: ${values.name}\nBusiness: ${values.businessName}\nService: ${values.service}\n\nProject Overview:\n${values.description}\n`
  )}`;

  return (
    <section
      id="contact"
      aria-label="Contact SAIS Labs"
      className="py-20 md:py-28 bg-subtle/30 border-t border-border/80 scroll-mt-12"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Tell us what your business needs. We&apos;ll review your requirements
            and discuss a practical next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Expectations Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface rounded-xl border border-border p-6 sm:p-7 shadow-subtle space-y-6">
              <h3 className="text-base font-bold text-foreground tracking-tight">
                Direct Communication
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-medium text-foreground hover:text-gold-700 transition-colors break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                      Phone & Direct Call
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.whatsappNumber}`}
                      className="text-sm font-medium text-foreground hover:text-gold-700 transition-colors block"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-200/60 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                      WhatsApp Quick Chat
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(
                        /[^\d+]/g,
                        ""
                      )}?text=${encodeURIComponent(siteConfig.contact.whatsappPrefillMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors underline underline-offset-2 block"
                    >
                      Chat on WhatsApp (+91 63807 28543)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                      Response Timeline
                    </span>
                    <p className="text-sm text-foreground/80">
                      We typically respond within 24–48 business hours with honest feedback on scope and feasibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Mail Client Fallback */}
              <div className="pt-4 border-t border-border/70">
                <p className="text-xs text-muted mb-3">
                  Prefer sending an email directly from your own mail application?
                </p>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-gold-700 underline underline-offset-4 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open in Mail Client</span>
                </a>
              </div>
            </div>

            {/* Scope clarity note */}
            <div className="bg-surface/60 rounded-xl border border-border/60 p-5 text-xs text-muted leading-relaxed">
              <div className="flex items-center gap-2 font-semibold text-foreground mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Transparent Scoping</span>
              </div>
              Project estimates and turnaround times are shared after reviewing
              your exact requirements, tool integrations, and design expectations.
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 md:p-9 shadow-subtle">
              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="text-center py-10 space-y-4 animate-fade-in"
                >
                  <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-foreground">{values.name}</span>. We have received your inquiry regarding{" "}
                    <span className="font-semibold text-foreground">{values.service}</span>. We will review your project requirements and follow up via email at{" "}
                    <span className="font-semibold text-foreground">{values.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setValues({
                          name: "",
                          businessName: "",
                          email: "",
                          service: "",
                          description: "",
                        });
                        setTouched({});
                      }}
                      className="px-5 py-2.5 rounded-lg border border-border bg-subtle hover:bg-subtle/80 text-sm font-medium text-foreground transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {status === "error" && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5 animate-fade-in"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Failed to submit</p>
                        <p className="text-xs mt-0.5 text-red-600">
                          {errorMessage || "Please verify your information or use the direct email fallback."}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Name and Business Name Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur("name")}
                        placeholder="e.g. John Doe"
                        aria-required="true"
                        aria-invalid={!!errors.name && touched.name}
                        aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-foreground bg-background transition-colors focus:bg-surface focus:outline-none ${
                          errors.name && touched.name
                            ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                            : "border-border focus:border-gold-500"
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p id="name-error" className="text-xs text-red-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-businessName"
                        className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5"
                      >
                        Business Name <span className="text-muted font-normal text-[11px]">(Optional)</span>
                      </label>
                      <input
                        id="contact-businessName"
                        name="businessName"
                        type="text"
                        value={values.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Studio"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border text-sm text-foreground bg-background transition-colors focus:bg-surface focus:outline-none focus:border-gold-500"
                      />
                    </div>
                  </div>

                  {/* Email & Service Required Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                        placeholder="you@domain.com"
                        aria-required="true"
                        aria-invalid={!!errors.email && touched.email}
                        aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-foreground bg-background transition-colors focus:bg-surface focus:outline-none ${
                          errors.email && touched.email
                            ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                            : "border-border focus:border-gold-500"
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="text-xs text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5"
                      >
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={values.service}
                        onChange={handleChange}
                        onBlur={() => handleBlur("service")}
                        aria-required="true"
                        aria-invalid={!!errors.service && touched.service}
                        aria-describedby={errors.service && touched.service ? "service-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-foreground bg-background transition-colors focus:bg-surface focus:outline-none ${
                          errors.service && touched.service
                            ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                            : "border-border focus:border-gold-500"
                        }`}
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && touched.service && (
                        <p id="service-error" className="text-xs text-red-600 mt-1">
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label
                      htmlFor="contact-description"
                      className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5"
                    >
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-description"
                      name="description"
                      rows={4}
                      value={values.description}
                      onChange={handleChange}
                      onBlur={() => handleBlur("description")}
                      placeholder="Briefly describe what you are looking to build or automate, your key goals, and any timeline expectations..."
                      aria-required="true"
                      aria-invalid={!!errors.description && touched.description}
                      aria-describedby={errors.description && touched.description ? "desc-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-foreground bg-background transition-colors focus:bg-surface focus:outline-none resize-y ${
                        errors.description && touched.description
                          ? "border-red-400 focus:border-red-500 ring-1 ring-red-400"
                          : "border-border focus:border-gold-500"
                      }`}
                    />
                    {errors.description && touched.description && (
                      <p id="desc-error" className="text-xs text-red-600 mt-1">
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-foreground text-surface hover:bg-black font-medium text-sm transition-all duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-gold-500"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-surface border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Requirements...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
