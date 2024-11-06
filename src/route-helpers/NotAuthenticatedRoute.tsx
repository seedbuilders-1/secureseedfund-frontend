"use client";
import useUserAuth from "@/hooks/auth/useAuth";
import { redirect } from "next/navigation";
import { Fragment, ReactNode } from "react";

const NotAuthenticatedRoute = ({ children }: { children: ReactNode }) => {
  const { user, accessToken } = useUserAuth();
  const auth = !!(user && accessToken);
  if (auth) {
    redirect("/dashboard");
  }
  return <Fragment>{children}</Fragment>;
};

export default NotAuthenticatedRoute;
