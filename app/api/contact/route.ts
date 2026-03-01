import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "projectLocation",
      "serviceNeeded",
      "message",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("=== Contact Form Submission ===");
    console.log("Full Name:", body.fullName);
    console.log("Email:", body.email);
    console.log("Phone:", body.phone);
    console.log("Company:", body.company || "N/A");
    console.log("Project Location:", body.projectLocation);
    console.log("Service Needed:", body.serviceNeeded);
    console.log("Target Start Date:", body.targetStartDate || "Not specified");
    console.log("Message:", body.message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("==============================");

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
