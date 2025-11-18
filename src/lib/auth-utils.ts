export enum UserRole {
  ADMIN = "ADMIN",
}

interface RouteConfig {
  exact?: string[];
  pettern?: RegExp[];
}

const authRoutes = ["/login", "forget-password", "/reset-password"];

const commonProtectedRoutes: RouteConfig = {
  exact: ["/profile", "/settings", "/change-password"],
};

const adminProtectedRoutes: RouteConfig = {
  //   exact: ["/admin/dashboard", "/admin/users", "/admin/settings"],
  pettern: [/^\/admin/],
};

const isAuthRoute = (pathname: string) => {
  console.log(
    "auth route pathname: ",
    pathname,
    " authRoutes: ",
    authRoutes,
    "is it auth route: ",
    authRoutes.some((route) => route === pathname)
  );
  return authRoutes.some((route) => route === pathname);
};

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact?.includes(pathname)) {
    console.log(
      "getting pathname in isRouteMatches inside if block: ",
      pathname
    );
    return true;
  }

  const hasPatternMatch =
    routes.pettern?.some((pattern: RegExp) => pattern.test(pathname)) ?? false;

  console.log(
    "getting pathname in isRouteMatches outside if block: ",
    pathname,
    "is there a pattern match: ",
    hasPatternMatch
  );
  return hasPatternMatch;
};

const getRouteOwner = (pathname: string): "ADMIN" | "COMMON" | null => {
  console.log("getting pathname in getRouteOwner outside if block: ", pathname);
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    console.log(
      "getting pathname in getRouteOwner inside if admin protected route block: ",
      pathname
    );
    return "ADMIN";
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    console.log(
      "getting pathname in getRouteOwner inside if common protected route block: ",
      pathname
    );
    return "COMMON";
  }
  return null;
};

const getDefaultDashboardRoute = (role: UserRole | null): string => {
  console.log("User Role from getDefaultDashboardRoute: ", role);
  switch (role) {
    case UserRole.ADMIN:
      return "/admin/dashboard";
    default:
      return "/";
  }
};

const isValidRedirectForRole = (
  redirectPath: string,
  role: UserRole
): boolean => {
  const routeOwner = getRouteOwner(redirectPath);

  if (routeOwner === null) {
    return true;
  }

  if (routeOwner === "COMMON") {
    return true;
  }
  if (routeOwner === "ADMIN" && role === UserRole.ADMIN) {
    return true;
  }
  return false;
};

export {
  type RouteConfig,
  authRoutes,
  commonProtectedRoutes,
  adminProtectedRoutes,
  isAuthRoute,
  isRouteMatches,
  getRouteOwner,
  getDefaultDashboardRoute,
  isValidRedirectForRole,
};
