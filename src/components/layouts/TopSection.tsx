"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useUserAuth from "@/hooks/auth/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, LogOut } from "lucide-react";

type NavItem = {
  name: string;
  icon: React.ElementType;
  path: string;
};

interface TopSectionProps {
  items: NavItem[];
}

const TopSection = ({ items }: TopSectionProps) => {
  const { logoutUser, user } = useUserAuth();
  const pathname = usePathname();

  const isActive = (href: string) => {
    const normalizedPathname = pathname.replace(/\/$/, "");
    const normalizedHref = href.replace(/\/$/, "");
    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(normalizedHref + "/")
    );
  };

  return (
    <header className="w-full h-[10vh] mx-auto px-8 pt-4 max-w-[1200px] border-b border-[#E6D9D9]">
      <div className="flex w-full items-center justify-around mt-4">
        <h1 className="font-semibold text-[1.2rem] md:text-[1.7rem]">
          Good Morning, {user?.firstName}
        </h1>
        <nav className="hidden space-x-5 items-center md:flex">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link key={index} href={item.path}>
                <div
                  className={`flex gap-1 items-center justify-between rounded-[30px] font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
                    isActive(item.path)
                      ? "bg-[#CDEED3] text-[#0F8B3A]"
                      : "text-[#6f2f2f]"
                  }`}
                >
                  <IconComponent style={{ width: "20px", height: "20px" }} />
                  <h2
                    className={`mt-1 font-normal ${
                      isActive(item.path) ? "text-[#0F8B3A]" : "text-[#6f2f2f]"
                    }`}
                  >
                    {item.name}
                  </h2>
                </div>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center space-x-4 mr-6">
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
    </header>
  );
};

export default TopSection;
