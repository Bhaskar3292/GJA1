import Link from "next/link";
import { Button } from "@/components/ui/button";
import CredentialBadge from "@/components/CredentialBadge";
import CTASection from "@/components/CTASection";
import { companyProfile } from "@/lib/companyProfile";
import { FileText, Shield, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credentials & Compliance | GJA Construction Inc",
  description: "Active certifications, licenses, and compliance credentials for GJA Construction Inc including USDOT, DNREC UST certification, and HIC license.",
};

export default function CredentialsPage() {
  return (
    <main>
      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Credentials & Compliance
            </h1>
            <p className="text-xl text-gray-300">
              Active certifications and licenses demonstrating our commitment to regulatory compliance
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Active Credentials
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our credentials are maintained current and in good standing with all regulatory authorities
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {companyProfile.credentials.map((credential) => (
              <CredentialBadge
                key={credential.id}
                name={credential.name}
                certNumber={credential.certNumber}
                status={credential.status}
                description={credential.description}
                expires={credential.expires}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <Shield className="mx-auto mb-4 h-16 w-16 text-blue-600" />
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Public Record Anchors
              </h2>
              <p className="text-lg text-gray-600">
                Our credentials are verifiable through official government sources
              </p>
            </div>

            <div className="space-y-4">
              {companyProfile.publicRecordAnchors.map((anchor, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border bg-white p-6"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-gray-900">
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

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto mb-6 h-16 w-16 text-blue-600" />
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Verification & Documentation
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We encourage clients to request verification documentation as part of their onboarding process.
              We can provide:
            </p>

            <div className="mb-12 grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-lg border bg-white p-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Certificate of Insurance
                </h3>
                <p className="text-sm text-gray-600">
                  Current liability and coverage documentation
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6">
                <h3 className="mb-2 font-semibold text-gray-900">W-9 Form</h3>
                <p className="text-sm text-gray-600">
                  Tax identification and business information
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  License Confirmations
                </h3>
                <p className="text-sm text-gray-600">
                  Official verification of active licenses
                </p>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">Request Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Compliance Commitment
            </h2>
            <p className="mb-8 text-lg text-blue-50">
              Safety, compliance, and execution are not just values—they are the foundation of every
              project we undertake. We maintain active credentials, follow all regulatory guidelines,
              and deliver work that meets the highest industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="rounded-full bg-white/20 px-4 py-2">Safety First</span>
              <span className="rounded-full bg-white/20 px-4 py-2">Regulatory Compliance</span>
              <span className="rounded-full bg-white/20 px-4 py-2">Quality Execution</span>
              <span className="rounded-full bg-white/20 px-4 py-2">Professional Standards</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Work with a Certified Contractor"
        description="Get the peace of mind that comes from working with a fully credentialed and compliant construction partner."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Our Services",
          href: "/services",
        }}
        variant="dark"
      />
    </main>
  );
}
