import StartupLayout from "@/components/layouts/startup/StartupLayout";
import { ReactNode } from "react";

export default function Startup({ children }: { children: ReactNode }) {
  return <StartupLayout>{children}</StartupLayout>;
}
