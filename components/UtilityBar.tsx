import { companyProfile } from "@/lib/companyProfile";
import { Phone, Mail, Linkedin, Youtube } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="bg-gray-900 text-gray-300 text-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyProfile.contact.phone.primary.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{companyProfile.contact.phone.primary}</span>
            </a>
            <a
              href="mailto:contact@gjaconstruction.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden md:inline">contact@gjaconstruction.com</span>
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
}
