import { Metadata } from "next";
import AuthRegister from "@/features/auth/register";

export const metadata: Metadata = {
  title: "Register | SecureSeedFund",
};

export default function RegisterPage() {
  return <AuthRegister />;
}
