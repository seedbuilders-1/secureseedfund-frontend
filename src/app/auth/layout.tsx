import AuthLayout from "@/components/layouts/auth";
import NotAuthenticatedRoute from "@/components/route-helpers/NotAuthenticatedRoute";
import { ReactNode } from "react";

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <NotAuthenticatedRoute>
      <AuthLayout>{children}</AuthLayout>
    </NotAuthenticatedRoute>
  );
}
