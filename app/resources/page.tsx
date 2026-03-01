"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, BookOpen, Download, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

const resources = [
  {
    title: "UST Compliance Guide",
    description: "Comprehensive overview of PADEP UST guidelines, regulatory requirements, and compliance best practices for underground storage tank projects.",
    type: "Guide",
    category: "Compliance",
  },
  {
    title: "Permit Application Checklist",
    description: "Complete checklist of required documents and information for fuel station construction permits.",
    type: "Checklist",
    category: "Permits",
  },
  {
    title: "DNREC UST Contractor Certification",
    description: "Information about Delaware DNREC contractor certification requirements and verification procedures for UST installation work.",
    type: "Resource",
    category: "Certification",
  },
  {
    title: "Underground Fuel Line Installation Standards",
    description: "Technical standards and best practices for underground fuel line installation, including material specifications and installation procedures.",
    type: "Guide",
    category: "Technical",
  },
  {
    title: "Fuel Station Canopy Construction Guidelines",
    description: "Design and construction guidelines for freestanding canopy structures over fuel dispensers, including structural and code requirements.",
    type: "Guide",
    category: "Construction",
  },
  {
    title: "Tank Removal & Closure Procedures",
    description: "Step-by-step procedures for safe underground storage tank removal and closure in compliance with environmental regulations.",
    type: "Checklist",
    category: "Compliance",
  },
  {
    title: "USDOT Motor Carrier Safety Requirements",
    description: "Overview of FMCSA safety requirements for construction contractors operating commercial vehicles for petroleum infrastructure projects.",
    type: "Resource",
    category: "Safety",
  },
  {
    title: "Project Documentation Best Practices",
    description: "Guidelines for maintaining comprehensive project documentation, including permit records, compliance certificates, and inspection reports.",
    type: "Guide",
    category: "Documentation",
  },
];

const categories = ["All", "Compliance", "Permits", "Certification", "Technical", "Construction", "Safety", "Documentation"];
const types = ["All", "Guide", "Checklist", "Resource"];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesType = selectedType === "All" || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <main>
      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Resources & Guides
            </h1>
            <p className="text-xl text-gray-300">
              Compliance guides, checklists, and technical resources for petroleum infrastructure
              projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div>
                <p className="mb-2 text-sm font-medium text-gray-700">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-gray-700">Type</p>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selectedType === type
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource, index) => (
                <Card key={index} className="group transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        {resource.type === "Guide" ? (
                          <BookOpen className="h-6 w-6 text-blue-600" />
                        ) : (
                          <FileText className="h-6 w-6 text-blue-600" />
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{resource.type}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <Badge variant="outline" className="mt-2 w-fit">
                      {resource.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {resource.description}
                    </CardDescription>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                      <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                        <ExternalLink className="h-4 w-4" />
                        View
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center">
              <FileText className="mx-auto mb-4 h-12 w-12 text-gray-400" />
              <h3 className="mb-2 text-lg font-semibold text-gray-900">No resources found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Need Additional Information?
            </h2>
            <p className="mb-6 text-lg text-blue-50">
              Can't find what you're looking for? Contact us for project-specific guidance and
              technical support.
            </p>
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
