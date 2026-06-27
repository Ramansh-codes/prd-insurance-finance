import { appendFile, mkdir, stat } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const allowedServices = new Set([
  "Health Insurance",
  "Life Insurance",
  "Motor Insurance",
  "Investment Planning",
  "Retirement Planning",
  "Tax Saving",
  "General Consultation",
]);

const headers = [
  "Submitted At",
  "Name",
  "Email",
  "Phone",
  "Service",
  "Message",
];

function cleanText(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ");
}

function toCsvCell(value: string) {
  const protectedValue = /^[=+\-@]/.test(value) ? `'${value}` : value;
  return `"${protectedValue.replace(/"/g, '""')}"`;
}

async function fileExists(filePath: string) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Please submit valid contact details." },
      { status: 400 },
    );
  }

  const name = cleanText(payload.name);
  const email = cleanText(payload.email);
  const phone = cleanText(payload.phone);
  const service = cleanText(payload.service);
  const message = cleanText(payload.message);

  if (!name || !phone || !service) {
    return NextResponse.json(
      { message: "Name, phone number, and service are required." },
      { status: 400 },
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!allowedServices.has(service)) {
    return NextResponse.json(
      { message: "Please choose a valid service." },
      { status: 400 },
    );
  }

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "contact-submissions.csv");
  const hasFile = await fileExists(filePath);
  const row = [
    new Date().toISOString(),
    name,
    email,
    phone,
    service,
    message,
  ]
    .map(toCsvCell)
    .join(",");

  await mkdir(dataDir, { recursive: true });
  await appendFile(
    filePath,
    `${hasFile ? "" : `${headers.map(toCsvCell).join(",")}\n`}${row}\n`,
    "utf8",
  );

  return NextResponse.json({
    message: "Thanks. We received your request and will contact you shortly.",
  });
}
