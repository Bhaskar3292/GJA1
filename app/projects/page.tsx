import Image from "next/image";

export const metadata = {
  title: "Projects | GJA Construction Inc",
  description: "View our completed petroleum infrastructure construction projects including UST installations, canopy construction, and fueling site work.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Underground Storage Tank Installation",
      location: "Multi-tank UST installation project",
      description: "Professional installation of multiple underground storage tanks with complete compliance documentation and permitting.",
      image: "https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "UST Installation",
    },
    {
      title: "Fuel Station Canopy Construction",
      location: "New canopy installation",
      description: "Complete canopy construction over fuel dispensers with structural coordination and permit management.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Canopy Construction",
    },
    {
      title: "Concrete Pad Installation",
      location: "Fuel station site work",
      description: "Precision concrete work for fuel dispenser pads and site infrastructure with proper containment systems.",
      image: "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Site Infrastructure",
    },
    {
      title: "Site Preparation & Excavation",
      location: "Commercial fueling site",
      description: "Professional site preparation and excavation work for petroleum infrastructure installation.",
      image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Site Preparation",
    },
    {
      title: "Fuel Line Installation",
      location: "Underground infrastructure",
      description: "Underground fuel line installation with proper containment and compliance with all regulations.",
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Infrastructure",
    },
    {
      title: "Dispenser Island Work",
      location: "Fuel station upgrade",
      description: "Complete dispenser island construction including concrete work, fuel lines, and electrical coordination.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Dispenser Work",
    },
  ];

  const permitExamples = [
    {
      address: "4000 Woodhaven Rd",
      date: "2021-11-24",
      description: "Replacement of sump pump underground lines and dispenser-related work at existing gas station",
      valuation: "$147,730",
    },
    {
      address: "8837 Torresdale Ave",
      date: "2023-06-29",
      description: "New UST installations (DEF and diesel/off-road diesel tanks)",
      valuation: "$100,000",
    },
    {
      address: "6301 Castor Ave",
      date: "2022-07-21",
      description: "Construction of freestanding canopy over gas dispensers",
      valuation: "$15,000",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 text-white sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300">
              Proven expertise in petroleum infrastructure construction across the region
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Project Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Professional construction execution across petroleum infrastructure projects
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute right-2 top-2">
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-blue-600">
                    {project.location}
                  </p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permit History */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Verified Project History
            </h2>
            <p className="text-lg text-gray-600">
              Sample of permitted projects demonstrating our track record
            </p>
          </div>

          <div className="space-y-6">
            {permitExamples.map((permit, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-2 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {permit.address}
                    </h3>
                    <p className="text-sm text-gray-500">{permit.date}</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 px-4 py-2">
                    <span className="text-sm font-semibold text-blue-900">
                      {permit.valuation}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">{permit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-blue-50 p-6 text-center">
            <p className="text-gray-700">
              <span className="font-semibold">37+ permitted projects</span> completed from 2015–Present
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">37+</div>
              <div className="text-blue-100">Permitted Projects</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">2015–Present</div>
              <div className="text-blue-100">Years of Activity</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">100%</div>
              <div className="text-blue-100">Compliance-Focused</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
