"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import useProfile from "@/hooks/profile/useProfile";
import { Loader2 } from "lucide-react";
import useUserAuth from "@/hooks/auth/useAuth";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const { loadingProfile } = useProfile();
  const { user } = useUserAuth();
  return (
    <>
      {loadingProfile ? (
        <Loader2 className="flex items-center justify-center animate-spin mx-auto w-[300px]" />
      ) : (
        <div className="flex flex-col w-full max-w-[1200px] px-10 mx-auto">
          <header className="flex items-center justify-between py-4">
            <Image
              src="/assets/icons/logo_variant_1.svg"
              alt="logo"
              width={50}
              height={50}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback className="bg-slate-100">{`${user?.firstName
                      .charAt(0)
                      .toUpperCase()} ${user?.lastName
                      .charAt(0)
                      .toUpperCase()}`}</AvatarFallback>
                  </Avatar>
                  <ChevronDown size={16} />
                </div>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </header>

          <main className="mt-10">{children}</main>
        </div>
      )}
    </>
  );
};

export default HomeLayout;
