import { Shield, Award, CheckCircle2, Building2 } from "lucide-react";

const credibilityItems = [
  {
    icon: Shield,
    label: "DNREC Certified",
    sublabel: "UST Installation",
  },
  {
    icon: Award,
    label: "USDOT Active",
    sublabel: "Federal Carrier",
  },
  {
    icon: CheckCircle2,
    label: "Philadelphia Licensed",
    sublabel: "HIC #36253",
  },
  {
    icon: Building2,
    label: "37+ Projects",
    sublabel: "Permitted Work",
  },
];

export default function CredibilityStrip() {
  return (
    <div className="border-y bg-gray-50 py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {credibilityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                  <div className="text-xs text-gray-600">{item.sublabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
