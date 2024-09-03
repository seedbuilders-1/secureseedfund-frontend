"use client";
import { ReactNode } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { RiHome5Line } from "react-icons/ri";
import { SiWpexplorer } from "react-icons/si";
import { Wallet } from "lucide-react";
import { User } from 'lucide-react';

const layout = ({ children }: { children: ReactNode }) => {
  const items = [
    {
      name: "Dashboard",
      icon: RiHome5Line,
      path: "/investor/dashboard",
    },
    {
      name: "Explore",
      icon: SiWpexplorer,
      path: "/investor/explore",
    },
    {
      name: "Wallet",
      icon: Wallet,
      path: "/investor/walletInvestor",
    },
    {
      name: "Account",
      icon: User,
      path: "/investor/account",
    }
  ];

  return (
    <DashboardLayout items={items}>
    
      {children}
    </DashboardLayout>
  );
};

export default layout;