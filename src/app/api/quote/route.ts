import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In a real app, you'd save to a database, send an email, etc.
    console.log("Quote request received:", {
      name,
      email,
      phone,
      service,
      message,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message! We will get back to you within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }
}
