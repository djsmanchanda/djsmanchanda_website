"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/app/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const checkRouteEnabled = (pathname: string | null) => {
  if (!pathname) return false;

  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  // Collection/detail pages should inherit the visibility of their section.
  const dynamicRoutes = ["/blog", "/work", "/projects"] as const;
  return dynamicRoutes.some((route) => pathname.startsWith(route) && routes[route]);
};

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const routeEnabledForPath = checkRouteEnabled(pathname);
  const requiresPasswordForPath = Boolean(
    pathname && protectedRoutes[pathname as keyof typeof protectedRoutes],
  );
  const [isRouteEnabled, setIsRouteEnabled] = useState(routeEnabledForPath);
  const [isPasswordRequired, setIsPasswordRequired] = useState(requiresPasswordForPath);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(requiresPasswordForPath);

  useEffect(() => {
    let cancelled = false;
    const routeEnabled = checkRouteEnabled(pathname);
    const requiresPassword = Boolean(
      pathname && protectedRoutes[pathname as keyof typeof protectedRoutes],
    );

    setIsRouteEnabled(routeEnabled);
    setIsPasswordRequired(requiresPassword);
    setIsAuthenticated(false);
    setError(undefined);

    // Public routes do not need an asynchronous guard. Render them immediately
    // so navigation never flashes a loading screen between pages.
    if (!requiresPassword) {
      setLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setLoading(true);
    fetch("/api/check-auth")
      .then((response) => {
        if (!cancelled && response.ok) {
          setIsAuthenticated(true);
        }
      })
      .catch(() => {
        // Keep the password prompt visible when the auth check cannot complete.
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  if (!routeEnabledForPath || !isRouteEnabled) {
    return <NotFound />;
  }

  if (requiresPasswordForPath && loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (requiresPasswordForPath && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };