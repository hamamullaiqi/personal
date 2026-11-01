import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Optional forwarding to Formspree or Resend if environment variable is configured
    if (process.env.FORMSPREE_ENDPOINT) {
      await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name}! Your message has been logged. M. Hamamul Fikri L. will respond to ${email} shortly.`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 500 }
    );
  }
}

