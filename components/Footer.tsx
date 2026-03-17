import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              GJA Construction Inc
            </h3>
            <p className="text-sm">
              Petroleum & Fueling Infrastructure Construction
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Credentials
            </h4>
            <ul className="space-y-2 text-sm">
              <li>USDOT 2416527</li>
              <li>DNREC Certified UST Contractor</li>
              <li>HIC #36253</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} GJA Construction Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
