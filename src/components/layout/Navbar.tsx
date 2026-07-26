"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Success Stories" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold"
          style={{ color: "oklch(0.52 0.18 155)" }}
        >
          <FontAwesomeIcon
            icon={faHeartPulse}
            className="size-6"
            style={{ color: "oklch(0.52 0.18 155)" }}
          />
          <span>VitalEdge</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="default"
            className="ml-4"
            style={{
              backgroundColor: "oklch(0.52 0.18 155)",
              color: "#fff",
            }}
            render={<Link href="/contact" />}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </Button>
            }
          />
          <SheetContent side="right" className="w-[280px] p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col p-6 pt-16">
              <Link
                href="/"
                className="mb-6 flex items-center gap-2 text-lg font-bold"
                style={{ color: "oklch(0.52 0.18 155)" }}
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faHeartPulse}
                  className="size-6"
                  style={{ color: "oklch(0.52 0.18 155)" }}
                />
                <span>VitalEdge</span>
              </Link>
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-muted",
                      pathname === link.href
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button
                variant="default"
                className="mt-6 w-full"
                style={{
                  backgroundColor: "oklch(0.52 0.18 155)",
                  color: "#fff",
                }}
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
