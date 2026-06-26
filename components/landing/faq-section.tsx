import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/landing/section-heading";

const faqs = [
  {
    question: "How do I choose the right insurance policy?",
    answer:
      "Start with your responsibilities, budget, dependents, liabilities, and existing coverage. An advisor can then compare benefits, exclusions, waiting periods, and claim support before you decide.",
  },
  {
    question: "Is health insurance necessary if my employer already covers me?",
    answer:
      "Employer cover is useful, but it may change if you switch jobs and may not be enough for family needs. A personal policy can add continuity and more control over coverage.",
  },
  {
    question: "What documents are usually needed for a claim?",
    answer:
      "Documents vary by insurer and policy type, but commonly include policy details, identity proof, claim forms, invoices, medical records, repair bills, or incident reports.",
  },
  {
    question: "How often should I review my financial plan?",
    answer:
      "Review your plan at least once a year, and whenever there is a major life event such as marriage, a new child, home purchase, career change, or retirement planning milestone.",
  },
  {
    question: "Can insurance help with tax saving?",
    answer:
      "Some insurance and investment-linked products may offer tax benefits under applicable rules. The right choice should still fit your protection needs and long-term goals.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-blue-50/70 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common insurance questions"
          description="Simple answers to the questions clients often ask before choosing insurance or financial planning support."
        />
        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-lg border border-blue-100 bg-white px-6 shadow-sm"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
