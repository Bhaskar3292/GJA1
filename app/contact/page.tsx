"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { companyProfile, serviceOptions } from "@/lib/companyProfile";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!", {
          description: "We'll get back to you as soon as possible.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Get in touch about your petroleum infrastructure project. Our team will review your
              requirements and provide detailed information.
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
                  <Button onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">
                    Contact Form
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          required
                          placeholder="John Smith"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(215) 555-0123"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Site Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="ABC Gas Station"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectLocation">
                        Project Location (Address/City/State){" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="projectLocation"
                        name="projectLocation"
                        required
                        placeholder="1234 Main St, City, State"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceNeeded">
                        Service Needed <span className="text-red-500">*</span>
                      </Label>
                      <Select name="serviceNeeded" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="targetStartDate">Target Start Date</Label>
                      <Input
                        id="targetStartDate"
                        name="targetStartDate"
                        type="date"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message / Project Details{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Please provide details about your project, including scope, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </Button>
                  </form>
                </div>
              )}
            </div>

            <div className="space-y-8 lg:col-span-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-600">
                        Phone
                      </p>
                      <a
                        href={`tel:${companyProfile.contact.phone.primary.replace(/[^0-9]/g, "")}`}
                        className="text-gray-900 hover:text-blue-600"
                      >
                        {companyProfile.contact.phone.primary}
                      </a>
                      <br />
                      <a
                        href={`tel:${companyProfile.contact.phone.alternate.replace(/[^0-9]/g, "")}`}
                        className="text-gray-900 hover:text-blue-600"
                      >
                        {companyProfile.contact.phone.alternate}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-600">
                        Mailing Address
                      </p>
                      <p className="text-gray-900">
                        {companyProfile.contact.address.mailing}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-600">
                        Physical Address
                      </p>
                      <p className="text-gray-900">
                        {companyProfile.contact.address.physical}
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
                    <span>You'll receive detailed information outlining scope and timeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
