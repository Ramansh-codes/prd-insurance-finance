import { Clock3, Handshake, Headphones, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/landing/section-heading";

const features = [
  {
    title: "Trusted Advisors",
    description:
      "Clear, practical recommendations from experienced insurance and finance professionals.",
    icon: Handshake,
  },
  {
    title: "Fast Claim Assistance",
    description:
      "Responsive support that helps you navigate documents, timelines, and next steps.",
    icon: Clock3,
  },
  {
    title: "Personalized Financial Planning",
    description:
      "Plans shaped around your income, priorities, family needs, and life stage.",
    icon: Sparkles,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Helpful guidance when questions come up before, during, or after policy selection.",
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="bg-blue-50/70 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why choose us"
          title="Guidance you can trust before you commit"
          description="We simplify complex choices, compare available options, and stay available when you need help most."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="bg-white/95">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-700 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-7">
                    {feature.description}
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
