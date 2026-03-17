import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { companyProfile } from "@/lib/companyProfile";
import { Fuel, Trash2, Building, SignpostBig, Wrench, Shield, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | GJA Construction Inc",
  description: "Professional petroleum and fueling infrastructure construction services including UST installation, removal, canopy construction, and compliance.",
};

const serviceIcons = {
  "ust-installation": Fuel,
  "ust-removal": Trash2,
  "canopy-construction": Building,
  "signage": SignpostBig,
  "infrastructure": Wrench,
  "compliance": Shield,
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Specialized petroleum and fueling infrastructure construction with a compliance-first approach
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {companyProfile.services.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons];

              return (
                <Card key={service.id} id={service.id} className="overflow-hidden scroll-mt-24">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div className="bg-gray-50 p-8 lg:flex lg:flex-col lg:items-center lg:justify-center">
                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-blue-100">
                        <Icon className="h-10 w-10 text-blue-600" />
                      </div>
                      <h2 className="text-center text-2xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>

                    <div className="p-8 lg:col-span-2">
                      <CardDescription className="mb-6 text-base text-gray-700">
                        {service.description}
                      </CardDescription>

                      <div className="mb-6">
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                          Typical Deliverables
                        </h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                              <span className="text-gray-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild>
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Commitment to Compliance
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Every project is executed with rigorous attention to DEP UST guidelines,
              DNREC standards, and all applicable federal, state, and local compliance requirements.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border bg-white p-6">
                <Shield className="mx-auto mb-3 h-10 w-10 text-blue-600" />
                <h3 className="mb-2 font-semibold text-gray-900">Safety First</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive safety protocols on every job site
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6">
                <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-blue-600" />
                <h3 className="mb-2 font-semibold text-gray-900">Permit Management</h3>
                <p className="text-sm text-gray-600">
                  Expert handling of all permitting requirements
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6">
                <Wrench className="mx-auto mb-3 h-10 w-10 text-blue-600" />
                <h3 className="mb-2 font-semibold text-gray-900">Quality Work</h3>
                <p className="text-sm text-gray-600">
                  Professional execution meeting industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
}
