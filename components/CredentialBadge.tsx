import { Shield, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CredentialBadgeProps {
  name: string;
  certNumber?: string | null;
  status?: string | null;
  description?: string | null;
  expires?: string | null;
  variant?: "default" | "compact";
}

export default function CredentialBadge({
  name,
  certNumber,
  status,
  description,
  expires,
  variant = "default",
}: CredentialBadgeProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-start gap-4 rounded-lg border bg-white p-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
          <Shield className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            {status && (
              <Badge variant={status === "Active" ? "default" : "secondary"}>
                {status}
              </Badge>
            )}
          </div>
          {certNumber && (
            <p className="text-sm text-gray-600">Certificate: {certNumber}</p>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-600">{description}</p>
          )}
          {expires && (
            <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <Clock className="h-3 w-3" />
              Expires: {expires}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex items-center justify-between">
          <Shield className="h-8 w-8 text-blue-600" />
          {status && (
            <Badge variant={status === "Active" ? "default" : "secondary"}>
              {status}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        {certNumber && (
          <p className="mb-2 text-sm font-medium text-gray-700">
            Certificate: {certNumber}
          </p>
        )}
        {description && <p className="mb-3 text-sm text-gray-600">{description}</p>}
        {expires && (
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Expires: {expires}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
