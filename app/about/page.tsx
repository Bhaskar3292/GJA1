import { Shield, Target, Award, CircleCheck as CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About | GJA Construction Inc",
  description: "Petroleum infrastructure contractor with expertise in UST installation, fuel station construction, and compliance-oriented execution.",
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
              Petroleum infrastructure construction specialist
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
                  GJA Construction Inc is an operator with consistent ties to the
                  Glenside and Fort Washington area, specializing in petroleum and fueling infrastructure
                  construction throughout the metro region.
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
                  infrastructure work.
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
            {[
              {
                icon: Shield,
                title: "Safety First - Every project, every day",
              },
              {
                icon: CheckCircle2,
                title: "Compliance - Meeting and exceeding regulatory requirements",
              },
              {
                icon: Award,
                title: "Quality Execution - Professional workmanship on every job",
              },
              {
                icon: Target,
                title: "Reliability - On-time delivery and clear communication",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="font-medium text-gray-900">{value.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Verified Credentials
              </h2>
              <p className="text-lg text-gray-600">
                Our credentials and registrations are verifiable through official government sources
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  source: "FMCSA SAFER",
                  detail: "USDOT 2416527 (Active)",
                  verified: "February 2026",
                },
                {
                  source: "Delaware DNREC",
                  detail: "Certified UST Installation Contractor B0271 (expires 04/30/2026)",
                  verified: "December 2025",
                },
                {
                  source: "License Board",
                  detail: "HIC #36253 (Active)",
                  verified: "February 2026",
                },
              ].map((anchor, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      {anchor.source}
                    </h3>
                    <p className="mb-2 text-gray-700">{anchor.detail}</p>
                    <p className="text-sm text-gray-500">
                      Verified: {anchor.verified}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mb-6 text-lg text-blue-50">
              Experience the difference of working with a contractor who prioritizes compliance, safety, and quality on every project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
              >
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
