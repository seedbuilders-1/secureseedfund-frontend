import AuthLayout from "@/components/layouts/auth";
import { ReactNode } from "react";

export default function Auth({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
