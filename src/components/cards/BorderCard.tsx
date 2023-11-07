import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  btnText: string;
}

const BorderCard = ({ children, btnText }: Props) => {
  return (
    <div className="w-full border border-slate-300 rounded-[0.6rem] min-h-[5rem] flex flex-col">
      <div className="w-full p-4 h-full">{children}</div>
      <div className="flex w-full items-center justify-between px-4 py-2 border-t border-slate-300 text-slate-600 text-[.875rem] mt-auto">
        <span>{btnText}</span>
        <ChevronRight size={14} />
      </div>
    </div>
  );
};

export default BorderCard;
