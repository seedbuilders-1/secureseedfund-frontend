"use client";
import { ReactNode } from "react";
// import Footer from "@/components/footer/Footer";
import Header from "./header";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default LandingLayout;
