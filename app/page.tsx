import Link from "next/link";
import { CircleCheck as CheckCircle2, Shield, Award, Clock } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const projectImages = [
    {
      src: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Underground storage tank installation",
      title: "UST Installation",
    },
    {
      src: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Fuel station canopy construction",
      title: "Canopy Construction",
    },
    {
      src: "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Concrete work at fuel station",
      title: "Site Infrastructure",
    },
    {
      src: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Construction site preparation",
      title: "Professional Execution",
    },
  ];

  return (
    <main>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gray-900 py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="GJA Construction petroleum infrastructure work"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Petroleum Infrastructure Construction
            </h1>
            <p className="mb-8 text-xl text-gray-200 sm:text-2xl">
              UST installation, fuel station canopy construction, and compliance-focused execution
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Our Services
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted Construction Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Delivering quality craftsmanship and reliable project execution across petroleum infrastructure work
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Safety-Focused Execution",
                description: "Rigorous safety protocols on every project site",
              },
              {
                icon: CheckCircle2,
                title: "Compliance-First Approach",
                description: "Meeting all regulatory requirements and standards",
              },
              {
                icon: Award,
                title: "DNREC Certified",
                description: "Certified UST installation contractor credentials",
              },
              {
                icon: Clock,
                title: "Reliable Delivery",
                description: "On-time project completion and clear communication",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Highlights Gallery */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Work
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Professional petroleum infrastructure construction across the region
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projectImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Core Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Specialized petroleum and fueling infrastructure construction services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "UST Installation & Replacement",
                description: "Professional underground storage tank installation compliant with DEP and DNREC guidelines.",
              },
              {
                title: "Canopy Construction",
                description: "Freestanding canopy construction and replacement over fuel dispensers and service areas.",
              },
              {
                title: "UST Removal & Decommission",
                description: "Safe underground storage tank removal with full regulatory compliance documentation.",
              },
              {
                title: "Fueling Infrastructure Upgrades",
                description: "Underground fuel lines, dispenser work, and complete fueling system installations.",
              },
              {
                title: "Site Signage & Improvements",
                description: "Fuel station signage installation and comprehensive site improvement services.",
              },
              {
                title: "Compliance-Oriented Execution",
                description: "All work performed with rigorous attention to federal, state, and local requirements.",
              },
            ].map((service, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link href="/services" className="font-semibold text-blue-600 hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-white sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg text-blue-50">
              Experience professional petroleum infrastructure construction with proven expertise and reliable execution
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
