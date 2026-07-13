"use client";

import { Menu, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky z-50 px-4 transition-all duration-300",
        isScrolled ? "top-2" : "top-4",
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-blue-100 bg-white/80 backdrop-blur-xl transition-all duration-300",
          isScrolled
            ? "px-3 py-1.5 shadow-[0_4px_20px_-8px_rgba(30,64,175,0.3)]"
            : "px-4 py-2.5 shadow-[0_8px_30px_-12px_rgba(30,64,175,0.25)] sm:px-5",
        )}
      >
        <a
          href="#home"
          className={cn(
            "flex items-center gap-2.5 font-bold tracking-tight text-blue-950 transition-all duration-300",
            isScrolled ? "text-sm sm:text-base" : "text-base sm:text-lg",
          )}
          aria-label="PRD Insurance and Finance home"
        >
          <span
            className={cn(
              "relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md shadow-blue-500/30 transition-all duration-300",
              isScrolled ? "h-8 w-8" : "h-10 w-10",
            )}
          >
            <span className="absolute inset-0 rounded-full bg-blue-400/40 animate-ping [animation-duration:2.5s]" />
            <ShieldCheck
              className={cn(
                "relative transition-all duration-300",
                isScrolled ? "h-4 w-4" : "h-5 w-5",
              )}
              aria-hidden="true"
            />
          </span>
          <span>
            PRD <span className="font-extrabold text-blue-700">Insurance</span>
            <span className="hidden text-slate-500 font-semibold sm:inline"> & Finance</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-blue-50/70 p-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={cn(
                  "relative rounded-full text-sm font-semibold transition-all duration-300",
                  isScrolled ? "px-3.5 py-1.5" : "px-4 py-2",
                  isActive
                    ? "bg-white text-blue-900 shadow-sm"
                    : "text-slate-600 hover:text-blue-800",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            size={isScrolled ? "sm" : "default"}
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 shadow-md shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-full md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-blue-100 bg-white/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-800"
                onClick={() => {
                  setActiveHref(item.href);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-md shadow-blue-500/30"
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}