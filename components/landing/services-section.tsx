import {
  Car,
  HeartPulse,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  Umbrella,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/landing/section-heading";

const services = [
  {
    title: "Health Insurance",
    description:
      "Coverage guidance for hospitalization, family floaters, and critical illness needs.",
    icon: HeartPulse,
  },
  {
    title: "Life Insurance",
    description:
      "Term and protection plans built around your family responsibilities.",
    icon: Umbrella,
  },
  {
    title: "Motor Insurance",
    description:
      "Car and two-wheeler policies with renewal support and claim guidance.",
    icon: Car,
  },
  {
    title: "Investment Planning",
    description:
      "Goal-based investment choices aligned to risk appetite and timelines.",
    icon: PiggyBank,
  },
  {
    title: "Retirement Planning",
    description:
      "Practical strategies for steady income, preservation, and future comfort.",
    icon: ShieldCheck,
  },
  {
    title: "Tax Saving",
    description:
      "Insurance and investment options that support smarter tax planning.",
    icon: ReceiptText,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Insurance and finance solutions for real life"
          description="From essential protection to long-term planning, our advisors help you choose options that fit your goals and budget."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-7">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
