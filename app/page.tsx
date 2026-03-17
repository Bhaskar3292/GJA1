import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CredibilityStrip from "@/components/CredibilityStrip";
import {
  Fuel,
  Trash2,
  Building,
  CheckCircle2,
  Shield,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl duration-700">
              Petroleum & Fueling Infrastructure Experts
            </h1>
            <p className="mb-8 animate-in fade-in slide-in-from-bottom-4 text-xl leading-relaxed sm:text-2xl duration-700 delay-150">
              UST installation, compliance-focused execution, and fueling site construction.
            </p>
            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 sm:flex-row sm:justify-center duration-700 delay-300">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-base text-white hover:bg-white hover:text-gray-900"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CredibilityStrip />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl lg:h-[500px]">
              <Image
                src="/kling_20260301_Text_to_Image_High_end_c_2119_0.png"
                alt="Underground storage tank installation with construction equipment and workers"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                What We Do
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Fuel className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      UST Installation & Replacement
                    </h3>
                    <p className="text-gray-600">
                      New underground storage tank installations and replacements compliant with DEP and DNREC guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Canopy Construction
                    </h3>
                    <p className="text-gray-600">
                      Complete canopy builds for fuel stations including structural design and installation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Trash2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Fueling Infrastructure
                    </h3>
                    <p className="text-gray-600">
                      Underground fuel lines, dispenser work, and complete fueling system upgrades.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/kling_20260301_Text_to_Image_High_end_c_2119_2.png"
            alt="Construction site with crane installing fuel station canopy structure"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Field Execution & Project Experience
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Decades of experience delivering complex petroleum infrastructure projects.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-400" />
                <span className="text-lg">37+ permitted projects with full regulatory compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-400" />
                <span className="text-lg">DNREC certified UST installation contractor</span>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/kling_20260301_Text_to_Image_High_end_c_2119_3.png"
            alt="Fuel station with underground storage tank being installed"
            fill
            className="object-cover brightness-50 blur-sm"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              Compliance-First Execution
            </div>

            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-gray-200">
              Get a detailed proposal for your petroleum infrastructure project. Our team will review your requirements and provide a comprehensive quote with full compliance documentation.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-base text-white hover:bg-white hover:text-gray-900"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
