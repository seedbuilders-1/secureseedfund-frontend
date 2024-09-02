"use client";
import TopSection from "./components/TopSection";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useStartupIdUrl } from "@/lib/utils";
import BottomSection from "./components/BottomSection";

export default function StartupLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const startupId = useStartupIdUrl();

  return (
    <PrivateRoute>
      {isActive(`/startup/${startupId}/campaign/createcampaign`) ||
      isActive(`/startup/${startupId}/account/accountform`) ? (
        children
      ) : (
        <div className="flex flex-col min-h-screen bg-white">
          <TopSection />
          <main className="flex-grow overflow-y-auto h-full px-4 pb-16 mb-[2rem]">
            {children}
          </main>
          <BottomSection />
        </div>
      )}
    </PrivateRoute>
  );
}
