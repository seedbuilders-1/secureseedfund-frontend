"use client";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
