"use client";

import { Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Health Insurance",
  "Life Insurance",
  "Motor Insurance",
  "Investment Planning",
  "Retirement Planning",
  "Tax Saving",
  "General Consultation",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Could not submit the form.");
      }

      setStatus("success");
      setFeedback(
        result.message ?? "Thanks. We received your request and will contact you shortly.",
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-blue-100 bg-white p-6 text-slate-950 shadow-soft"
      aria-label="Contact consultation request form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-slate-800">
            Full name
          </label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            className="mt-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-slate-800">
            Phone number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            required
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-800">
            Email address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="text-sm font-semibold text-slate-800"
          >
            Interested service
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="mt-2 flex h-11 w-full rounded-md border border-blue-100 bg-white px-3 py-2 text-sm text-slate-950 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-slate-800">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us what you would like help with."
          className="mt-2"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={`text-sm ${
            status === "error" ? "text-red-600" : "text-slate-600"
          }`}
          role={feedback ? "status" : undefined}
          aria-live="polite"
        >
          {feedback || "Your details will be saved securely for follow-up."}
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          Submit Request
        </Button>
      </div>
    </form>
  );
}
