import SignUp from "@/screens/auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up | SecureSeedFund",
};

export default function SignUpPage() {
  return <SignUp />;
}
