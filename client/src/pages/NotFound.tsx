import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | SporeTrust</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <div className="min-h-screen w-full flex items-center justify-center bg-primary">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold font-heading">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-muted-foreground mb-6">
              The page you are looking for does not exist or has been moved.
            </p>

            <Link href="/">
              <Button className="w-full bg-accent hover:bg-accent-light">
                Return to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
