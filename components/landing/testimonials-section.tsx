import { Quote } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/landing/section-heading";

const testimonials = [
  {
    quote:
      "The team helped us compare health cover without pressure. Everything was explained in simple terms.",
    name: "Anita Sharma",
    role: "Small Business Owner",
  },
  {
    quote:
      "PRD Insurance & Finance gave our family a clear plan for protection, savings, and future goals.",
    name: "Rahul Mehta",
    role: "IT Professional",
  },
  {
    quote:
      "Their claim support was quick and calm. We knew exactly what to submit and when to follow up.",
    name: "Neha Kapoor",
    role: "Working Parent",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients value clarity, speed, and steady support"
          description="A few words from people who trusted PRD Insurance & Finance for their insurance and financial planning decisions."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardHeader>
                <Quote className="h-8 w-8 text-blue-700" aria-hidden="true" />
                <CardDescription className="text-base leading-8 text-slate-700">
                  &quot;{testimonial.quote}&quot;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-base">{testimonial.name}</CardTitle>
                <p className="mt-2 text-sm text-slate-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
