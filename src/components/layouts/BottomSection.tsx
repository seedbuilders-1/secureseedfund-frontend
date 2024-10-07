"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  icon: React.ElementType;
  path: string;
};

interface BottomSectionProps {
  items: NavItem[];
}

const BottomSection = ({ items }: BottomSectionProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#EEF6E0] border-t border-[#E6D9D9]">
      <div className="flex justify-around items-center h-16">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link key={index} href={item.path}>
              <div
                className={`flex gap-1 items-center justify-between rounded-[30px] font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
                  isActive(item.path)
                    ? "bg-[#CDEED3] text-[#0F8B3A]"
                    : "text-[#6f2f2f]"
                }`}
              >
                <IconComponent style={{ width: "20px", height: "20px" }} />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomSection;
