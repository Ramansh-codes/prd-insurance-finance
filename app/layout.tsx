import type { Metadata } from "next";
import "./globals.css";
import { ChatWidget } from "@/components/chat-widget";

export const metadata: Metadata = {
  title: "PRD Insurance & Finance | Insurance and Financial Planning",
  description:
    "PRD Insurance & Finance helps families and businesses choose insurance, investment, retirement, and tax-saving plans with trusted guidance.",
  keywords: [
    "insurance",
    "financial planning",
    "health insurance",
    "life insurance",
    "investment planning",
    "PRD Insurance & Finance",
  ],
  openGraph: {
    title: "PRD Insurance & Finance",
    description:
      "Protect what matters most with trusted insurance and financial planning guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
