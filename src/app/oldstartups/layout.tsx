import StartupsLayout from "@/components/layouts/startups";
import { ReactNode } from "react";

export default function Landing({ children }: { children: ReactNode }) {
  return <StartupsLayout>{children}</StartupsLayout>;
}
