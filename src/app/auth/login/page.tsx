import { Metadata } from "next";
import AuthLogin from "@/features/auth/login";

export const metadata: Metadata = {
  title: "Login | SecureSeedFund",
};

export default function RegisterPage() {
  return <AuthLogin />;
}
