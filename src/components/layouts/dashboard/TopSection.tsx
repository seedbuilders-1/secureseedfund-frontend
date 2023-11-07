import Image from "next/image";
import TopNavItem from "./TopNavItem";
import { Bell, ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const TopSection = () => {
  return (
    <header className="w-full h-[45vh] bg-primary-gradient px-8 pt-4">
      <div className="flex w-full items-center justify-between">
        <Image
          src="/assets/icons/logo_variant_1.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <nav className="flex space-x-4 items-center">
          <TopNavItem label="Dashboard" active />
          <TopNavItem label="Find Investors" active={false} />
          <TopNavItem label="Messages" active={false} />
        </nav>

        <div className="flex items-center space-x-4 text-white">
          <Bell />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarFallback>VW</AvatarFallback>
                </Avatar>
                <ChevronDown size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-20">
              <Link href="/">
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default TopSection;
