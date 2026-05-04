import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "meshellcookies@gmail.com";

type ContactBody = {
  type?: "contact" | "order" | "newsletter";
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  address?: string;
  deliveryPreference?: string;
  orderNote?: string;
  cartLines?: { name: string; qty: number; price: number; note?: string }[];
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const type = body.type ?? "contact";
  const email = body.email?.trim();
  const name = body.name?.trim();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (type !== "newsletter" && !name) {
    return NextResponse.json(
      { error: "Name is required." },
      { status: 400 },
    );
  }

  const displayName = name ?? "Newsletter subscriber";

  const subject =
    type === "order"
      ? `New order request from ${displayName}`
      : type === "newsletter"
        ? `Newsletter signup: ${email}`
        : `Website message from ${displayName}`;

  const lines: string[] = [
    `Type: ${type}`,
    `Name: ${displayName}`,
    `Email: ${email}`,
    `Phone: ${body.phone ?? "—"}`,
  ];

  if (type === "contact") {
    lines.push(`Message:\n${body.message ?? "—"}`);
  }
  if (type === "newsletter") {
    lines.push("Requested flavor / promo updates.");
  }
  if (type === "order") {
    lines.push(`Address:\n${body.address ?? "—"}`);
    lines.push(`Delivery preference:\n${body.deliveryPreference ?? "—"}`);
    lines.push(`Extra note:\n${body.orderNote ?? "—"}`);
    if (body.cartLines?.length) {
      lines.push("Cart:");
      body.cartLines.forEach((l) => {
        lines.push(
          `  • ${l.name} ×${l.qty} @ $${l.price.toFixed(2)}${l.note ? ` — ${l.note}` : ""}`,
        );
      });
    }
  }

  const text = lines.join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[api/contact] RESEND_API_KEY missing — logging payload:\n", text);
      return NextResponse.json({ ok: true, simulated: true });
    }
    return NextResponse.json(
      { error: "Email is not configured on this server." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ?? "MeShell Cookies <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: TO,
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    console.error("[api/contact] Resend error", error);
    return NextResponse.json(
      { error: "Could not send email. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
