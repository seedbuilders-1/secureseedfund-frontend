import { ReactNode } from "react";
import TopSection from "./TopSection";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex flex-col ">
      <TopSection />
      <main className="px-8 -mt-[32vh]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
