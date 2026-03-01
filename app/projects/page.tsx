import PermitCard from "@/components/PermitCard";
import CTASection from "@/components/CTASection";
import { companyProfile } from "@/lib/companyProfile";
import { Calendar, FileText, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Permits | GJA Construction Inc",
  description: "Track record of completed petroleum infrastructure projects and permit activity in the Philadelphia area.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Projects & Permits
            </h1>
            <p className="text-xl text-gray-300">
              A track record of successful petroleum infrastructure projects in the Philadelphia metro area
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 text-center">
              <FileText className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <div className="mb-2 text-3xl font-bold text-gray-900">
                {companyProfile.stats.permittedProjects}+
              </div>
              <div className="text-sm text-gray-600">Permitted Projects</div>
            </div>
            <div className="rounded-lg border bg-white p-6 text-center">
              <Calendar className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <div className="mb-2 text-3xl font-bold text-gray-900">
                {companyProfile.stats.yearsOfActivity}
              </div>
              <div className="text-sm text-gray-600">Years of Activity</div>
            </div>
            <div className="rounded-lg border bg-white p-6 text-center">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <div className="mb-2 text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Compliance Record</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Permit Activity Timeline
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Consistent project activity since 2015 across Philadelphia-area fueling infrastructure work
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {companyProfile.permitActivityYears.map((activity, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                      {activity.year}
                    </div>
                    {index < companyProfile.permitActivityYears.length - 1 && (
                      <div className="h-full w-0.5 bg-blue-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="rounded-lg border bg-white p-4">
                      <p className="text-gray-700">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Selected Permit Examples
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Representative sample of completed projects across various petroleum infrastructure scopes
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companyProfile.permitExamples.map((permit, index) => (
              <PermitCard
                key={index}
                address={permit.address}
                date={permit.date}
                description={permit.description}
                valuation={permit.valuation}
                permitNumber={permit.permitNumber}
                status={permit.status}
              />
            ))}
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Disclaimer:</span> Examples shown are drawn from publicly
              visible permit samples and are provided for general reference. Permit details are sourced from
              public records and may not reflect all project information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Project Scope & Capabilities
            </h2>
            <p className="mb-12 text-lg text-gray-300">
              Our permit history demonstrates expertise across the full spectrum of petroleum
              infrastructure construction
            </p>

            <div className="grid gap-6 text-left sm:grid-cols-2">
              <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Underground Storage Tanks
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• New UST installations</li>
                  <li>• Tank replacement projects</li>
                  <li>• Tank removal and closure</li>
                  <li>• DEF and diesel systems</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Above-Ground Structures
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Freestanding canopy construction</li>
                  <li>• Canopy replacement</li>
                  <li>• Fuel station signage</li>
                  <li>• Site improvements</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Underground Infrastructure
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Underground fuel lines</li>
                  <li>• Dispenser island work</li>
                  <li>• Sump pump systems</li>
                  <li>• Containment systems</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Compliance & Permitting
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• PADEP UST compliance</li>
                  <li>• Philadelphia permit coordination</li>
                  <li>• Regulatory documentation</li>
                  <li>• Code compliance verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Add Your Project to Our Portfolio"
        description="Let's discuss how we can bring the same level of compliance and quality execution to your project."
        primaryCTA={{
          text: "Start a Conversation",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Our Services",
          href: "/services",
        }}
      />
    </main>
  );
}
