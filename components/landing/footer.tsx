import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Facebook", icon: Facebook },
  { label: "Twitter", icon: Twitter },
  { label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-bold">PRD Insurance & Finance</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Professional insurance and financial planning support for families,
            professionals, and growing businesses.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Quick links
          </h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Contact
          </h3>
          <address className="mt-4 space-y-3 not-italic text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-blue-300" aria-hidden="true" />
              123 Finance Avenue, Business District
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-blue-300" aria-hidden="true" />
              +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-blue-300" aria-hidden="true" />
              hello@prdinsurance.example
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Social
          </h3>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href="#home"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition hover:border-blue-300 hover:bg-blue-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-6 text-center text-sm text-slate-400">
        Copyright © 2026 PRD Insurance & Finance. All rights reserved.
      </div>
    </footer>
  );
}
