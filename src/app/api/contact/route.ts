import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import fs from "fs";
import path from "path";

interface ContactPayload {
  name: string;
  businessName?: string;
  email: string;
  service: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, businessName, email, service, description } = body;

    // Strict Server-Side Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const allowedServices = [
      "Website Design & Development",
      "AI Automation & Workflows",
      "Business Digital Solutions",
      "AI & Technology Workshops",
      "Not Sure Yet",
    ];

    if (!service || !allowedServices.includes(service)) {
      return NextResponse.json(
        { error: "Please select a valid service option from the list." },
        { status: 400 }
      );
    }

    if (!description || description.trim().length < 10) {
      return NextResponse.json(
        {
          error:
            "Please describe your project requirements (at least 10 characters).",
        },
        { status: 400 }
      );
    }

    const newEnquiry = {
      id: `enq_${Date.now()}`,
      timestamp: new Date().toISOString(),
      name: name.trim(),
      businessName: businessName?.trim() || "N/A",
      email: email.trim(),
      service,
      description: description.trim(),
    };

    // 1. Save to local data/enquiries.json so no leads are ever lost
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "enquiries.json");

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let existing: unknown[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        try {
          existing = JSON.parse(fileContent);
        } catch {
          existing = [];
        }
      }

      existing.unshift(newEnquiry);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");
    } catch (saveErr) {
      console.warn("Could not save to enquiries.json file:", saveErr);
    }

    // 2. Log in server console
    console.log("[SAIS Labs New Enquiry Received]:", newEnquiry);

    // 3. Automated dispatch if RESEND_API_KEY is configured
    const recipientEmail =
      process.env.CONTACT_RECEIVER_EMAIL || siteConfig.contact.email;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "SAIS Labs <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email.trim(),
            subject: `New Project Enquiry from ${name.trim()} - SAIS Labs`,
            text: `Name: ${name.trim()}\nBusiness: ${
              businessName?.trim() || "N/A"
            }\nEmail: ${email.trim()}\nService: ${service}\n\nProject Description:\n${description.trim()}`,
          }),
        });
      } catch (err) {
        console.error("Resend API dispatch error:", err);
      }
    }

    // 4. Automated dispatch if WEB3FORMS_ACCESS_KEY is configured
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Lead from ${name.trim()} - SAIS Labs`,
            from_name: "SAIS Labs Website",
            name: name.trim(),
            email: email.trim(),
            business: businessName?.trim() || "N/A",
            service: service,
            message: description.trim(),
          }),
        });
      } catch (err) {
        console.error("Web3Forms dispatch error:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your project enquiry has been securely received by SAIS Labs.",
        enquiry: newEnquiry,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error:
          "There was an unexpected error submitting your request. Please email or WhatsApp us directly.",
      },
      { status: 500 }
    );
  }
}
