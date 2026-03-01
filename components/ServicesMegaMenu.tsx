"use client";

import Link from "next/link";
import { companyProfile } from "@/lib/companyProfile";
import { ChevronRight } from "lucide-react";

const serviceCategories = [
  {
    title: "Underground Storage Tanks",
    services: [
      {
        name: "UST Installation & Replacement",
        href: "/services#ust-installation",
        description: "New tank installations and replacements",
      },
      {
        name: "UST Removal & Closure",
        href: "/services#ust-removal",
        description: "Safe removal and decommissioning",
      },
    ],
  },
  {
    title: "Above-Ground Construction",
    services: [
      {
        name: "Canopy Construction",
        href: "/services#canopy-construction",
        description: "Fuel station canopy builds and replacements",
      },
      {
        name: "Signage & Improvements",
        href: "/services#signage",
        description: "Fuel station signage and site work",
      },
    ],
  },
  {
    title: "Infrastructure & Compliance",
    services: [
      {
        name: "Fueling Infrastructure",
        href: "/services#infrastructure",
        description: "Underground lines and dispenser work",
      },
      {
        name: "Compliance Services",
        href: "/services#compliance",
        description: "Regulatory compliance and permitting",
      },
    ],
  },
];

export default function ServicesMegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 w-screen -translate-x-1/2 border-t bg-white shadow-xl">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      href={service.href}
                      className="group flex items-start gap-2 rounded-lg p-2 transition-colors hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 group-hover:text-blue-600">
                            {service.name}
                          </span>
                          <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                        <p className="mt-1 text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View All Services
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
