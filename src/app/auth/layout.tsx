import Image from "next/image";
import { ReactNode } from "react";
import threeImage from "../../../public/assets/images/threeImage.png";
import NotAuthenticatedRoute from "@/route-helpers/NotAuthenticatedRoute";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in | Sign Up | SecureSeedFund",
};

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <NotAuthenticatedRoute>
      <div className="min-h-screen flex justify-between w-full">
        <div className="hidden lg:flex lg:flex-col lg:justify-between w-[50%] relative">
          <div className="hidden lg:block"></div>
          <div className="w-full text-center text-[24px]">
            <p>Invest Securely-Raise Confidently</p>
          </div>
          <Link href="/">
            <div className="relative bottom-0 left-0 right-0 w-full cursor-pointer">
              <Image src={threeImage} alt="logo" className="w-full" />
            </div>
          </Link>
        </div>
        <div className="lg:w-[50%] w-full">{children}</div>
      </div>
    </NotAuthenticatedRoute>
  );
}
