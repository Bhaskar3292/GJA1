import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "dark";
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 ${isDark ? "bg-gray-900 text-white" : "bg-blue-600 text-white"}`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h2>
          {description && (
            <p
              className={`mx-auto mb-8 max-w-2xl text-lg ${isDark ? "text-gray-300" : "text-blue-50"}`}
            >
              {description}
            </p>
          )}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCTA && (
              <Button
                asChild
                size="lg"
                variant={isDark ? "default" : "secondary"}
                className="min-w-[200px]"
              >
                <Link href={primaryCTA.href} className="group">
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className={`min-w-[200px] ${isDark ? "border-white text-white hover:bg-white hover:text-gray-900" : "border-white bg-transparent text-white hover:bg-white hover:text-blue-600"}`}
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
