import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Clock,
  Shield,
  Bell,
  Download,
  Eye,
  CheckCircle2,
  Lock,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal | GJA Construction Inc",
  description: "Access your project documentation, compliance reports, and real-time updates through our secure client portal.",
};

const portalFeatures = [
  {
    icon: FileText,
    title: "Project Documentation",
    description: "Access all project-related documents, permits, and compliance certificates in one secure location.",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Track project milestones, schedule changes, and completion status with automatic notifications.",
  },
  {
    icon: Shield,
    title: "Compliance Reports",
    description: "Download regulatory compliance documentation, inspection reports, and certification records.",
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    description: "Receive instant notifications for permit approvals, inspection schedules, and project updates.",
  },
  {
    icon: Download,
    title: "Document Downloads",
    description: "Export and download project files, reports, and certificates for your records.",
  },
  {
    icon: Eye,
    title: "Project Visibility",
    description: "View detailed project timelines, progress photos, and work completion documentation.",
  },
];

const benefits = [
  "24/7 access to your project information",
  "Secure document storage and retrieval",
  "Automated compliance tracking",
  "Mobile-friendly responsive design",
  "Direct communication with project team",
  "Historical project archive",
];

export default function PortalPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
              <Lock className="h-4 w-4" />
              Secure Client Access
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Client Portal
            </h1>
            <p className="text-xl text-gray-300">
              Access your project documentation, compliance reports, and real-time updates anytime,
              anywhere through our secure client portal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Portal Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Everything you need to monitor and manage your petroleum infrastructure projects
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Use the Client Portal?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Our client portal provides unprecedented transparency and accessibility for your
                petroleum infrastructure projects. Stay informed, access critical documents, and
                communicate with your project team—all from a single, secure platform.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-white p-8 shadow-lg">
              <div className="mb-6 text-center">
                <Lock className="mx-auto mb-4 h-16 w-16 text-blue-600" />
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Portal Access
                </h3>
                <p className="text-gray-600">
                  Login to access your projects or register for a new account
                </p>
              </div>

              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  Login to Portal
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Register New Account
                </Button>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-gray-700">
                <p className="mb-2 font-semibold">First-time users:</p>
                <p>
                  Contact your project manager to receive your portal access credentials. Access is
                  granted automatically when a new project begins.
                </p>
              </div>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>
                  Need help?{" "}
                  <a href="/contact" className="font-semibold text-blue-600 hover:text-blue-700">
                    Contact Support
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Experience the Difference
              </h2>
              <p className="mb-8 text-lg text-blue-50">
                Join our clients who enjoy 24/7 access to their project information and compliance
                documentation through our secure portal.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Request Portal Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
