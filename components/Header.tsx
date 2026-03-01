"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicesMegaMenu from "./ServicesMegaMenu";
import UtilityBar from "./UtilityBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinks = [
  { href: "/services", label: "Services", hasMegaMenu: true },
  { href: "/contact", label: "Contact" },
];

const mobileServiceLinks = [
  { href: "/services#ust-installation", label: "UST Installation & Replacement" },
  { href: "/services#ust-removal", label: "UST Removal & Closure" },
  { href: "/services#canopy-construction", label: "Canopy Construction" },
  { href: "/services#signage", label: "Signage & Improvements" },
  { href: "/services#infrastructure", label: "Fueling Infrastructure" },
  { href: "/services#compliance", label: "Compliance Services" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  return (
    <>
      <UtilityBar />
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="GJA Construction Inc"
              width={220}
              height={72}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden items-center space-x-1 lg:flex">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesMenuOpen(true)}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                >
                  <button className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {servicesMenuOpen && <ServicesMegaMenu />}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild size="default">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t bg-white lg:hidden">
            <div className="container mx-auto max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-4 sm:px-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b-0">
                  <AccordionTrigger className="py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:no-underline">
                    Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1 pl-4">
                      {mobileServiceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <ChevronRight className="h-4 w-4" />
                          {service.label}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-blue-600 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        View All Services
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {navLinks
                .filter((link) => !link.hasMegaMenu)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

              <div className="mt-4 border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
