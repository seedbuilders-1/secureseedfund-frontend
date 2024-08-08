import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const StatCard = ({ children }: Props) => {
  return (
    <div className="w-full rounded-[1.25rem] bg-white border border-[#CBD5E1] p-6 min-h-[10rem] flex flex-col shadow-stat-card">
      {children}
    </div>
  );
};

export const StatCardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex space-x-2 items-center">
      <h3 className="text-slate-500 text-[.8rem] font-[600]">{children}</h3>
    </div>
  );
};

interface IStatCardBody {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
export const StatCardBody = ({ children, className }: IStatCardBody) => {
  return <div className={cn("flex-1 pt-2", className)}>{children}</div>;
};

export const StateCardMetric = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="font-secondary text-slate-600 text-[1.55rem] font-[600]">
      {children}
    </h3>
  );
};

export default StatCard;
