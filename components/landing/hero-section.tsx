import { ArrowRight, BadgeCheck, LineChart, Shield, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Trusted insurance and financial planning
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Protect What Matters Most
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            PRD Insurance & Finance helps you compare smart insurance coverage,
            build resilient financial plans, and prepare confidently for every
            stage of life.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>

        <div className="relative" aria-label="Insurance planning illustration">
          <div className="absolute inset-0 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="relative rounded-lg border border-blue-100 bg-white p-6 shadow-soft">
            <div className="rounded-lg bg-gradient-to-br from-blue-700 to-sky-500 p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-100">Plan health</p>
                  <p className="mt-2 text-3xl font-bold">92%</p>
                </div>
                <Shield className="h-12 w-12 text-blue-100" aria-hidden="true" />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-md bg-white/20" />
                <div className="h-32 rounded-md bg-white/30" />
                <div className="h-20 rounded-md bg-white/20" />
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                <WalletCards className="h-6 w-6 text-blue-700" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-slate-950">
                  Smart premium planning
                </p>
              </div>
              <div className="rounded-lg border border-blue-100 bg-white p-4">
                <LineChart className="h-6 w-6 text-blue-700" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-slate-950">
                  Long-term wealth guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
