import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  variant?: "default" | "compact";
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  variant = "default",
}: ServiceCardProps) {
  const isCompact = variant === "compact";

  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <CardTitle className={isCompact ? "text-lg" : "text-xl"}>{title}</CardTitle>
        {!isCompact && <CardDescription className="mt-2">{description}</CardDescription>}
      </CardHeader>
      {isCompact && (
        <CardContent className="flex-1">
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      )}
      {href && (
        <CardFooter>
          <Button asChild variant="link" className="px-0">
            <Link href={href}>Learn More</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
