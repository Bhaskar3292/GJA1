// components/Footer.tsx (or wherever your Footer.tsx lives)

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="GJA Construction Inc."
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Safety • Compliance • Execution
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:text-right">
            <h3 className="text-sm font-semibold text-slate-900">
              Ready to start a project?
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Request a quote and we’ll follow up with next steps.
            </p>

            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} GJA Construction Inc. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs">
            <Link className="text-slate-500 hover:text-slate-800" href="/privacy">
              Privacy
            </Link>
            <Link className="text-slate-500 hover:text-slate-800" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}