import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-gradient-to-br from-blue-800 via-blue-700 to-sky-600 px-6 py-14 text-white shadow-soft sm:px-10 lg:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-100">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Contact PRD Insurance & Finance
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build a safer financial future?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-blue-50">
              Speak with our team for a free consultation and get practical
              guidance on insurance, investments, retirement, and tax-saving
              options.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary">
            <a href="mailto:hello@prdinsurance.example">
              Contact Us Today
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
