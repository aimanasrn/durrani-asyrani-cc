import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation/schemas";

export const runtime = "edge";

// Basic in-memory rate limiting (valid per active edge worker instance)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter out timestamps outside the active window
  const activeTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  
  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  activeTimestamps.push(now);
  rateLimitMap.set(ip, activeTimestamps);
  return false;
}

// Simple HTML/JS tag escaping helper for string inputs
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export async function POST(request: Request) {
  try {
    // 1. Get client IP and check rate limiting
    const ip = request.headers.get("cf-connecting-ip") || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Terlalu banyak cubaan. Sila tunggu 1 minit sebelum cuba lagi." 
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await request.json();

    // 3. Honeypot check (hidden field 'website')
    if (body.website && body.website.trim() !== "") {
      // Return a decoy success response to silent-fail spam bots
      return NextResponse.json({ success: true, spam: true });
    }

    // 4. Validate data using Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Data borang tidak sah. Sila semak semua input.", 
          errors: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    // 5. Destructure and sanitize verified inputs
    const { parentName, phone, email, childAge, preferredProgramme, message } = validationResult.data;
    
    const cleanParentName = sanitize(parentName);
    const cleanPhone = sanitize(phone);
    const cleanEmail = sanitize(email);
    const cleanChildAge = sanitize(childAge);
    const cleanPreferredProgramme = sanitize(preferredProgramme);
    const cleanMessage = sanitize(message);

    // 6. Check environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "taskadurniasyirani@gmail.com";

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY in environment variables.");
      return NextResponse.json(
        { 
          success: false, 
          message: "Konfigurasi pelayan ralat. Sila cuba lagi kemudian." 
        },
        { status: 500 }
      );
    }

    // 7. Initialize Resend and dispatch email
    const resend = new Resend(apiKey);

    const emailHtmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Pertanyaan Baharu</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            color: #334155;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
          .header {
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 15px;
            margin-bottom: 25px;
          }
          .title {
            color: #ff8a8a;
            font-size: 20px;
            font-weight: bold;
            margin: 0;
          }
          .subtitle {
            color: #64748b;
            font-size: 14px;
            margin: 5px 0 0 0;
          }
          .table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
          }
          .table th {
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid #f1f5f9;
            color: #475569;
            font-weight: 600;
            width: 40%;
          }
          .table td {
            padding: 10px;
            border-bottom: 1px solid #f1f5f9;
            color: #0f172a;
          }
          .message-box {
            background-color: #fafaf9;
            border-left: 4px solid #ffd43b;
            padding: 15px;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            color: #44403c;
            margin-top: 10px;
            white-space: pre-wrap;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #94a3b8;
            margin-top: 30px;
            border-top: 1px solid #f1f5f9;
            padding-top: 15px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Pertanyaan Baharu (New Website Enquiry)</h1>
            <p class="subtitle">Dihantar melalui borang Hubungi Kami di laman web pusat jagaan.</p>
          </div>
          
          <table class="table">
            <tr>
              <th>Nama Ibu Bapa / Penjaga</th>
              <td>${cleanParentName}</td>
            </tr>
            <tr>
              <th>Nombor Telefon (WhatsApp)</th>
              <td><a href="https://wa.me/${cleanPhone.replace(/[^0-9]/g, "")}">${cleanPhone}</a></td>
            </tr>
            <tr>
              <th>E-mel</th>
              <td><a href="mailto:${cleanEmail}">${cleanEmail}</a></td>
            </tr>
            <tr>
              <th>Umur Anak</th>
              <td>${cleanChildAge} tahun/years old</td>
            </tr>
            <tr>
              <th>Program Minat</th>
              <td>${cleanPreferredProgramme}</td>
            </tr>
          </table>

          <div style="font-weight: 600; color: #475569; margin-bottom: 5px;">Mesej / Pertanyaan Tambahan:</div>
          <div class="message-box">${cleanMessage}</div>

          <div class="footer">
            <p>E-mel ini dihantar secara automatik daripada borang Hubungi Kami.<br>Pusat Jagaan Durrani Asyrani &copy; 2026</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Note: onboarding@resend.dev is the default sandbox domain for testing keys
    // Once they verify a domain on Resend, they can change the sender to e.g. hello@taskadurraniasyirani.com.my
    await resend.emails.send({
      from: "Durrani Asyrani Website <onboarding@resend.dev>",
      to: recipientEmail,
      subject: "Pertanyaan Baharu dari Website Pusat Jagaan Durrani Asyrani",
      html: emailHtmlBody,
      replyTo: cleanEmail
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in contact route handler:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Maaf, ralat pelayan berlaku. Sila cuba lagi." 
      },
      { status: 500 }
    );
  }
}
