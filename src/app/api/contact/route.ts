import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, timeline, goals, newsletter } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Get recipient email from environment or use default
    const recipientEmail = process.env.CONTACT_EMAIL || "genexis.ailab@gmail.com";

    // Format email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Timeline: ${timeline || "Not provided"}
Newsletter Subscription: ${newsletter ? "Yes" : "No"}

Project Goals:
${goals || "Not provided"}
`;

    // Send email
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: "Genexis Contact Form <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1f1321; color: #ffffff;">
          <h2 style="color: #ffffff; border-bottom: 2px solid #4E2A4F; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin-top: 20px;">
            <p><strong style="color: #ffffff;">Name:</strong> ${name}</p>
            <p><strong style="color: #ffffff;">Email:</strong> <a href="mailto:${email}" style="color: #8542b5;">${email}</a></p>
            <p><strong style="color: #ffffff;">Company:</strong> ${company || "Not provided"}</p>
            <p><strong style="color: #ffffff;">Timeline:</strong> ${timeline || "Not provided"}</p>
            <p><strong style="color: #ffffff;">Newsletter Subscription:</strong> ${newsletter ? "Yes" : "No"}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: rgba(78, 42, 79, 0.2); border-left: 4px solid #4E2A4F;">
            <h3 style="color: #ffffff; margin-top: 0;">Project Goals:</h3>
            <p style="color: #ffffff; white-space: pre-wrap;">${goals || "Not provided"}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
            <p style="color: rgba(255, 255, 255, 0.6); font-size: 12px;">This email was sent from the Genexis contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

