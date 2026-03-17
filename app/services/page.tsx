import Image from "next/image";
import Link from "next/link";
import { CircleCheck as CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services | GJA Construction Inc",
  description: "Petroleum infrastructure construction services including UST installation, canopy construction, and fueling site work.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "ust-installation",
      title: "UST Installation & Replacement",
      description: "Professional underground storage tank installation and replacement services compliant with DEP and DNREC guidelines.",
      image: "https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&w=1200",
      deliverables: [
        "New UST installations (gasoline, diesel, DEF)",
        "Tank replacement and upgrades",
        "Compliance with PADEP UST guidelines",
        "Permit coordination and documentation",
      ],
    },
    {
      id: "canopy-construction",
      title: "Canopy Construction & Replacement",
      description: "Freestanding canopy construction and replacement over fuel dispensers and service areas.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
      deliverables: [
        "New canopy installations",
        "Canopy replacement projects",
        "Structural design coordination",
        "Commercial building permit management",
      ],
    },
    {
      id: "ust-removal",
      title: "UST Removal & Decommission",
      description: "Safe underground storage tank removal and closure services with full regulatory compliance.",
      image: "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      deliverables: [
        "Complete tank removal services",
        "Environmental compliance documentation",
        "Site remediation coordination",
        "Closure permit management",
      ],
    },
    {
      id: "infrastructure",
      title: "Fueling Infrastructure Upgrades",
      description: "Comprehensive fueling infrastructure work including underground lines and dispenser-related installations.",
      image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200",
      deliverables: [
        "Underground fuel line installation",
        "Dispenser island work",
        "Sump pump and containment systems",
        "Complete fueling system upgrades",
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Specialized petroleum and fueling infrastructure construction services with compliance-focused execution
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg lg:h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-lg text-gray-600">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
                      Key Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose GJA Construction
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Safety and Compliance Focus",
                description: "Rigorous attention to safety protocols and regulatory compliance on every project.",
              },
              {
                title: "Permitting-Aware Execution",
                description: "Extensive experience navigating metro area permitting requirements and processes.",
              },
              {
                title: "Certified UST Contractor",
                description: "DNREC-certified for underground storage tank installation with active credentials.",
              },
              {
                title: "Reliable Scheduling",
                description: "Clear communication and dependable project timelines you can count on.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Discuss Your Project?
            </h2>
            <p className="mb-6 text-lg text-blue-50">
              Contact us to learn more about our petroleum infrastructure construction services
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
