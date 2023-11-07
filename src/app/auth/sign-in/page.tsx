import SignIn from "@/screens/auth/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | SecureSeedFund",
};

export default function SignInPage() {
  return <SignIn />;
}
