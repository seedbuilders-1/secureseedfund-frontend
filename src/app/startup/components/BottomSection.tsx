"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome5Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Wallet } from "lucide-react";

const BottomSection = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const pathSegments = pathname.split("/");
  const startupId = pathSegments[pathSegments.length - 2];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-300">
      <div className="flex justify-around items-center h-16">
        <Link href={`/startup/${startupId}/dashboard`}>
          <div
            className={`flex flex-col items-center justify-center ${
              isActive(`/startup/${startupId}/dashboard`)
                ? "text-[#0F8B3A]"
                : "text-[#6f2f2f]"
            }`}
          >
            <RiHome5Line className="w-6 h-6" />
            <span className="text-xs mt-1">Dashboard</span>
          </div>
        </Link>
        <Link href={`/startup/${startupId}/campaign`}>
          <div
            className={`flex flex-col items-center justify-center ${
              isActive(`/startup/${startupId}/campaign`)
                ? "text-[#0F8B3A]"
                : "text-[#050505]"
            }`}
          >
            <IoSettingsOutline className="w-6 h-6" />
            <span className="text-xs mt-1">Campaign</span>
          </div>
        </Link>
        <Link href={`/startup/${startupId}/wallet`}>
          <div
            className={`flex flex-col items-center justify-center ${
              isActive(`/startup/${startupId}/wallet`)
                ? "text-[#0F8B3A]"
                : "text-[#050505]"
            }`}
          >
            <Wallet className="w-6 h-6" />
            <span className="text-xs mt-1">Wallet</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default BottomSection;
