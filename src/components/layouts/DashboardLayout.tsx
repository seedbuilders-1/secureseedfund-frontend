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
  console.log(isActive);

  return (
    <>
      {isActive(`/investor/account/accountform`) ? (
        children
      ) : (
        <div className="flex flex-col min-h-screen bg-white">
          <TopSection items={items} />
          <main className="flex-grow overflow-y-auto h-full px-4 pb-16 mb-[2rem]">
            {children}
          </main>
          <BottomSection items={items} />
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
