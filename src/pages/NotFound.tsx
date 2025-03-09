
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <Globe className="mx-auto mb-6 h-20 w-20 text-primary opacity-80" />
        <h1 className="mb-2 text-6xl font-bold tracking-tight text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Oops! The page you're looking for doesn't exist
        </p>
        <Link to="/">
          <Button size="lg" className="min-w-[200px]">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
