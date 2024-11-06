import { ReactNode } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { usePathname } from "next/navigation";
const DashboardLayout = ({
  children,
  items,
}: {
  children: ReactNode;
  items: any[];
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {isActive(`/investor/account/accountform`) ? (
        children
      ) : (
        <div className="flex flex-col min-h-screen bg-white">
          <TopSection items={items} />
          <main>{children}</main>
          <BottomSection items={items} />
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
