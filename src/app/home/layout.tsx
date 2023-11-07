import HomeLayout from "@/components/layouts/home";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}
