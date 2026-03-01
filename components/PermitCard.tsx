import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, FileText, DollarSign, CheckCircle2 } from "lucide-react";

interface PermitCardProps {
  address: string;
  date: string;
  description: string;
  valuation?: string;
  permitNumber: string;
  status: string;
}

export default function PermitCard({
  address,
  date,
  description,
  valuation,
  permitNumber,
  status,
}: PermitCardProps) {
  const isComplete = status.toLowerCase() === "complete";

  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
            <CardTitle className="text-base leading-tight">{address}</CardTitle>
          </div>
          <Badge variant={isComplete ? "default" : "secondary"} className="text-xs">
            {status}
          </Badge>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span>{new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}</span>
          </div>
          {valuation && valuation !== "N/A" && (
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="h-4 w-4 text-gray-400" />
              <span className="font-medium">{valuation}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-gray-600">
            <FileText className="h-4 w-4 text-gray-400" />
            <span className="font-mono text-xs">{permitNumber}</span>
          </div>
          {isComplete && (
            <div className="mt-2 flex items-center gap-2 text-green-600">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs font-medium">Project Completed</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
