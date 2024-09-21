"use client";
import React, { ReactNode } from "react";
import useUserAuth from "@/hooks/auth/useAuth";
import { redirect } from "next/navigation";

interface RestrictedRouteProps {
  children: ReactNode;
  allowedUserTypes: string[];
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  children,
  allowedUserTypes,
}) => {
  const { user, accessToken } = useUserAuth();
  const isAuthenticated = !!(user && accessToken);
  const isAuthorized =
    isAuthenticated && allowedUserTypes.includes(user?.accountType as string);

  if (!isAuthenticated) {
    return redirect("/auth/sign-in");
  }

  if (!isAuthorized) {
    return redirect("/dashboard");
  }

  return <>{children}</>;
};

export default RestrictedRoute;
