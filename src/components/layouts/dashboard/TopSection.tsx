"use client";
import { Bell, ChevronDown, LogOut } from "lucide-react";
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
    <header className="w-[90%] h-[45vh]  mx-auto px-8 pt-4">
      <div className="flex w-full items-center justify-between mt-4">
        <h1 className="font-semibold text-[28px]">
          Good Morning,
          {user?.firstName}
        </h1>
        <nav className="flex space-x-4 items-center">
          <Link href={`/startup/${startupId}/dashboard`}>
            <div
              className={` flex  gap-1 items-center justify-between rounded-[30px] text-[#050505]   font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
                isActive(`/startup/${startupId}/dashboard`) &&
                "border bg-[#F3FFDE] text-[#6C8C3C]"
              }`}
            >
              <RiHome5Line className="w-[19px] h-[19px]" />
              <h2 className=" mt-1  font-normal">Dashboard</h2>
            </div>
          </Link>
          <Link href={`/startup/${startupId}/campaign`}>
            <div
              className={` flex  gap-1 items-center justify-between rounded-[30px]   font-[500] px-3 py-2 text-[.875rem] cursor-pointer text-[#050505] ${
                isActive(`/startup/${startupId}/campaign`) &&
                "border bg-[#F3FFDE] text-[#6C8C3C]"
              }`}
            >
              <IoSettingsOutline className="w-[19px] h-[19px]" />
              <h2 className="mt-1  font-normal">Campaign</h2>
            </div>
          </Link>
          <Link href="/startup/profile">
            <div
              className={` flex  gap-1 items-center justify-between rounded-[30px] text-[#050505]  font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
                isActive("/startup/profile") &&
                "border bg-[#F3FFDE] text-[#6C8C3C]"
              }`}
            >
              <RiUserLine className="w-[19px] h-[19px]" />
              <h2 className="mt-1  font-normal">Profile</h2>
            </div>
          </Link>
        </nav>

        <div className="flex items-center space-x-4 ">
          <div className="bg-[#EEF6E0] rounded-full p-[0.6rem]">
            <Bell className="text-[#77B900]" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2 cursor-pointer ">
                <Avatar className="bg-[#77B900] text-[#EEF6E0]">
                  <AvatarFallback>
                    {user?.firstName.charAt(0).toUpperCase()}{" "}
                    {user?.lastName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <ChevronDown size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-20 bg-[#77B900]">
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
    </header>
  );
};

export default TopSection;
