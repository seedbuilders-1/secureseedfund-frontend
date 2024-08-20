"use client";
import { ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import useUserAuth from "@/hooks/auth/useAuth";
import { usePathname } from "next/navigation";
import { RiHome5Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";

const TopSection = () => {
  const { logoutUser, user } = useUserAuth();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const pathSegments = pathname.split("/");
  const startupId = pathSegments[pathSegments.length - 2];

  return (
    <header className="w-full h-[10vh] mx-auto px-8 pt-4 max-w-[1200px]">
      <div className="flex w-full items-center justify-between mt-4">
        <h1 className="font-semibold text-[1.2rem] md:text-[1.7rem]">
          Good Morning, {user?.firstName}
        </h1>
        <nav className="hidden space-x-4 items-center md:flex">
          <Link href={`/startup/${startupId}/dashboard`}>
            <div
              className={`flex gap-1 items-center justify-between rounded-[30px] font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
                isActive(`/startup/${startupId}/dashboard`)
                  ? "bg-[#CDEED3] text-[#0F8B3A]"
                  : "text-[#6f2f2f]"
              }`}
            >
              <RiHome5Line className="w-[19px] h-[19px]" />
              <h2
                className={`mt-1 font-normal ${
                  isActive(`/startup/${startupId}/dashboard`)
                    ? "text-[#0F8B3A]"
                    : "text-[#6f2f2f]"
                }`}
              >
                Dashboard
              </h2>
            </div>
          </Link>
          <Link href={`/startup/${startupId}/campaign`}>
            <div
              className={`flex gap-1 items-center justify-between rounded-[30px] font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
                isActive(`/startup/${startupId}/campaign`)
                  ? "bg-[#CDEED3] text-[#0F8B3A]"
                  : "text-[#050505]"
              }`}
            >
              <IoSettingsOutline className="w-[19px] h-[19px]" />
              <h2
                className={`mt-1 font-normal ${
                  isActive(`/startup/${startupId}/campaign`)
                    ? "text-[#0F8B3A]"
                    : "text-[#050505]"
                }`}
              >
                Campaign
              </h2>
            </div>
          </Link>
          <Link href="/startup/profile">
            <div
              className={`flex gap-1 items-center justify-between rounded-[30px] font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
                isActive("/startup/profile")
                  ? "bg-[#CDEED3] text-[#0F8B3A]"
                  : "text-[#050505]"
              }`}
            >
              <RiUserLine className="w-[19px] h-[19px]" />
              <h2
                className={`mt-1 font-normal ${
                  isActive("/startup/profile")
                    ? "text-[#0F8B3A]"
                    : "text-[#050505]"
                }`}
              >
                Profile
              </h2>
            </div>
          </Link>
        </nav>

        <div className="flex items-center space-x-4 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Avatar className="bg-[#77B900] text-[#EEF6E0]">
                  <AvatarFallback>
                    {user?.firstName.charAt(0).toUpperCase()}{" "}
                    {user?.lastName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <ChevronDown size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w- bg-[#77B900]">
              <DropdownMenuItem
                onClick={() => logoutUser()}
                className="cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="" />
    </header>
  );
};

export default TopSection;
