import { ReactNode } from "react";
import AuthLayout from "@/components/layouts/auth/AuthLayout";

export default function Auth({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
