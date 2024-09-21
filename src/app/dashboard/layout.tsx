"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { RiHome5Line } from "react-icons/ri";
import { SiWpexplorer } from "react-icons/si";
import { Wallet, User } from "lucide-react";
import useUserAuth from "@/hooks/auth/useAuth";
import PrivateRoute from "@/route-helpers/PrivateRoute";

const Layout = ({ children }: { children: ReactNode }) => {
  const { user } = useUserAuth();
  const role = user?.accountType;

  const items = [
    {
      name: "Dashboard",
      icon: RiHome5Line,
      path: `/dashboard/startup`,
      allowedRoles: ["startup"],
    },
    {
      name: "Campaign",
      icon: SiWpexplorer,
      path: `/dashboard/startup/campaign`,
      allowedRoles: ["startup"],
    },
    {
      name: "Wallet",
      icon: Wallet,
      path: `/dashboard/startup/wallet`,
      allowedRoles: ["startup"],
    },
    {
      name: "Account",
      icon: User,
      path: `/dashboard/startup/account`,
      allowedRoles: ["startup"],
    },
    {
      name: "Dashboard",
      icon: RiHome5Line,
      path: `/dashboard/investor`,
      allowedRoles: ["investor"],
    },
    {
      name: "Explore",
      icon: RiHome5Line,
      path: `/dashboard/investor/explore`,
      allowedRoles: ["investor"],
    },
    {
      name: "Wallet",
      icon: RiHome5Line,
      path: `/dashboard/investor/wallet`,
      allowedRoles: ["investor"],
    },
    {
      name: "Account",
      icon: RiHome5Line,
      path: `/dashboard/investor/account`,
      allowedRoles: ["investor"],
    },
  ];

  const filteredItems = items.filter(
    (item) => !item.allowedRoles || item.allowedRoles.includes(role as string)
  );

  return (
    <PrivateRoute>
      <DashboardLayout items={filteredItems}>{children}</DashboardLayout>
    </PrivateRoute>
  );
};

export default Layout;
