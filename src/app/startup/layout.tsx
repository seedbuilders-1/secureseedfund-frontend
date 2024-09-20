"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { RiHome5Line } from "react-icons/ri";
import { SiWpexplorer } from "react-icons/si";
import { Wallet } from "lucide-react";
import { User } from "lucide-react";
import { useParams } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const { startupid } = useParams();

  const items = [
    {
      name: "Dashboard",
      icon: RiHome5Line,
      path: `/startup/${startupid}/dashboard`,
    },
    {
      name: "Campaign",
      icon: SiWpexplorer,
      path: `/startup/${startupid}/campaign`,
    },
    {
      name: "Wallet",
      icon: Wallet,
      path: `/startup/${startupid}/wallet`,
    },
    {
      name: "Account",
      icon: User,
      path: `/startup/${startupid}/account`,
    },
  ];

  return <DashboardLayout items={items}>{children}</DashboardLayout>;
};

export default Layout;
