"use client";
import { ReactNode } from "react";
// import Footer from "@/components/footer/Footer";
import Header from "./header";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Header />
      <main className="w-full mt-[10vh]">{children}</main>
    </div>
  );
};

export default LandingLayout;
