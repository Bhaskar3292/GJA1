"use client";

import { useState } from "react";
import { CircleCheck as CheckCircle2, MapPin } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <main>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch to discuss your petroleum infrastructure project
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-600" />
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    Thank You!
                  </h2>
                  <p className="mb-6 text-gray-600">
                    Your message has been received. We'll review your project details and get back to
                    you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          required
                          placeholder="John Smith"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company / Site Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        placeholder="ABC Gas Station"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projectLocation" className="block text-sm font-medium text-gray-700">
                        Project Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="projectLocation"
                        name="projectLocation"
                        required
                        placeholder="1234 Main St, City, State"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="UST Installation">UST Installation</option>
                        <option value="UST Removal">UST Removal</option>
                        <option value="Canopy Construction">Canopy Construction</option>
                        <option value="Signage Installation">Signage Installation</option>
                        <option value="Fueling Infrastructure">Fueling Infrastructure</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message / Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Please provide details about your project, including scope, timeline, and any specific requirements..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="space-y-8 lg:col-span-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Service Area
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-600">
                        Base of Operations
                      </p>
                      <p className="text-gray-900">
                        Glenside / Fort Washington area
                      </p>
                      <p className="mt-2 text-gray-600">
                        Serving the metro region and surrounding areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-blue-50 p-6">
                <h4 className="mb-3 font-semibold text-gray-900">
                  What to Expect
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>We'll review your project details within 1-2 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>We may contact you for additional information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>You'll receive a response outlining next steps</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border bg-gray-50 p-6">
                <h4 className="mb-3 font-semibold text-gray-900">
                  Credentials
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>USDOT 2416527</li>
                  <li>DNREC Certified UST Contractor B0271</li>
                  <li>HIC #36253</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
