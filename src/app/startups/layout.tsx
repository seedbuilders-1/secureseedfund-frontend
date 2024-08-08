import LandingLayout from "@/components/layouts/landing";
import { ReactNode } from "react";

export default function Investors({ children }: { children: ReactNode }) {
  return <LandingLayout>{children}</LandingLayout>;
}
