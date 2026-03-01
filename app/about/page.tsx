import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import { companyProfile } from "@/lib/companyProfile";
import { Shield, Target, Award, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | GJA Construction Inc",
  description: "Pennsylvania-based petroleum infrastructure contractor with expertise in UST installation, fuel station construction, and compliance-oriented execution.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              About GJA Construction Inc
            </h1>
            <p className="text-xl text-gray-300">
              Pennsylvania-based petroleum infrastructure construction specialist
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  GJA Construction Inc is a Pennsylvania-based operator with consistent ties to the
                  Glenside and Fort Washington area, specializing in petroleum and fueling infrastructure
                  construction.
                </p>
                <p>
                  Our work centers on underground storage tank installation and removal, fuel station
                  canopy construction, and related fueling infrastructure projects—all executed with a
                  compliance-first mindset that prioritizes safety, regulatory adherence, and professional
                  execution.
                </p>
                <p>
                  With a track record spanning multiple years and dozens of permitted projects, we bring
                  proven expertise in navigating the complex regulatory landscape of petroleum
                  infrastructure work in Pennsylvania.
                </p>
              </div>
            </div>

            <div className="mb-12 rounded-lg border bg-blue-50 p-8">
              <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                Our Operational Base
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-600">
                    Mailing Address
                  </p>
                  <p className="text-gray-900">
                    {companyProfile.contact.address.mailing}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-600">
                    Physical Address
                  </p>
                  <p className="text-gray-900">
                    {companyProfile.contact.address.physical}
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-blue-200 pt-6">
                <p className="text-center text-gray-700">
                  <span className="font-semibold">Service Area:</span>{" "}
                  {companyProfile.contact.serviceArea}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide every project we undertake
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {companyProfile.values.map((value, index) => {
              const icons = [Shield, Target, Award, CheckCircle2];
              const Icon = icons[index % icons.length];

              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-gray-900 font-medium">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Our Commitment to Excellence
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Every project we undertake reflects our dedication to safety, compliance, quality
              execution, and reliability. We don't just meet requirements—we establish a standard
              for professional petroleum infrastructure construction.
            </p>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-8">
              <blockquote className="text-xl font-medium italic text-white">
                "Safety • Compliance • Execution"
              </blockquote>
              <p className="mt-4 text-sm text-gray-400">
                The foundation of everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work Together?"
        description="Experience the difference of working with a contractor who prioritizes compliance, safety, and quality on every project."
        primaryCTA={{
          text: "Contact Us",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Our Projects",
          href: "/projects",
        }}
      />
    </main>
  );
}
