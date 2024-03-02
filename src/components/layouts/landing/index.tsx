"use client";
import { ReactNode } from "react";
// import Footer from "@/components/footer/Footer";
import Header from "./header";
import Footer from "./footer";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full mt-[10vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
