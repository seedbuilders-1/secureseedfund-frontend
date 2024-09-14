import LandingLayout from "@/components/layouts/landing";
import { ReactNode } from "react";

export default function Services({ children }: { children: ReactNode }) {
  return <LandingLayout>{children}</LandingLayout>;
}
