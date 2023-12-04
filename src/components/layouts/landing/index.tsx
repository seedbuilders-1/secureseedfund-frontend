"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const gradientStyle = {
    background:
      "linear-gradient(255deg, #140A2D 1.28%, #241A3F 100%), linear-gradient(105deg, #140A2D 2.53%, #241A3F 100.75%)",
  };

  const isActive = (pathname: string) =>
    isClient && window.location.pathname === pathname;

  return (
    <>
      <div className="flex flex-col w-full px-10 mx-auto" style={gradientStyle}>
        <header className="flex items-center justify-between py-4">
          <Image
            src="/assets/icons/seedbuilder-logo.svg"
            alt="logo"
            width={47}
            height={47}
            className="object-contain h-11 w-11"
          />

          <div className="flex items-center gap-8">
            <Link href="/investors" legacyBehavior>
              <a
                className={`text-sm ${
                  isActive("/investors") ? "bg-white text-black" : "text-white"
                }`}
              >
                Investors
              </a>
            </Link>
            <Link href="/startups" legacyBehavior>
              <a
                className={`text-sm ${
                  isActive("/startups") ? "bg-white text-black" : "text-white"
                }`}
              >
                Startups
              </a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a
                className={`text-sm ${
                  isActive("/pricing") ? "bg-white text-black" : "text-white"
                }`}
              >
                Pricing
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a
                className={`text-sm ${
                  isActive("/services") ? "bg-white text-black" : "text-white"
                }`}
              >
                Services
              </a>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <p className="text-white text-sm">Login</p>
            <button className="text-white text-sm bg-[#1AA657] py-2 px-4 rounded-md">
              Create Account
            </button>
          </div>
        </header>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;
