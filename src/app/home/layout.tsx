import HomeLayout from "@/components/layouts/home";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <PrivateRoute>
      <HomeLayout>{children}</HomeLayout>
    </PrivateRoute>
  );
}
