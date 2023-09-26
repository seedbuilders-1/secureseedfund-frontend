import ComingSoonLayout from "@/components/layouts/coming-soon/ComingSoonLayout";
import { ReactNode } from "react";

export default function ComingSoonPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ComingSoonLayout>{children}</ComingSoonLayout>;
}
