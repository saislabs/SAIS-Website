import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

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

    // Secure processing
    // In production on Vercel, you can set RESEND_API_KEY or webhook url in environment variables
    const recipientEmail =
      process.env.CONTACT_RECEIVER_EMAIL || siteConfig.contact.email;

    // Log the enquiry securely on the server
    console.log("[SAIS Labs Contact Enquiry Received]:", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      businessName: businessName?.trim() || "N/A",
      email: email.trim(),
      service,
      descriptionLength: description.trim().length,
      recipient: recipientEmail,
    });

    // If RESEND_API_KEY is configured in env, we can dispatch via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "SAIS Labs Form <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email.trim(),
            subject: `New Project Enquiry from ${name.trim()} - SAIS Labs`,
            text: `Name: ${name.trim()}\nBusiness: ${
              businessName?.trim() || "N/A"
            }\nEmail: ${email.trim()}\nService: ${service}\n\nProject Description:\n${description.trim()}`,
          }),
        });

        if (!emailRes.ok) {
          console.error("Resend delivery warning:", await emailRes.text());
        }
      } catch (sendErr) {
        console.error("Failed to forward via external email provider:", sendErr);
        // We still acknowledge the request received
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting SAIS Labs. Your project enquiry has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error:
          "There was an unexpected error submitting your request. Please email us directly.",
      },
      { status: 500 }
    );
  }
}
