import HomeLayout from "@/components/layouts/home";
import ProfileRoute from "@/components/route-helpers/ProfileRoute";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <ProfileRoute>
      <HomeLayout>{children}</HomeLayout>
    </ProfileRoute>
  );
}
