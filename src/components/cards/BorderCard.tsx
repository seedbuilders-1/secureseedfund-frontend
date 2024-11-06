import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  btnText: string;
  onBtnClick?: () => void;
}

const BorderCard = ({ children, btnText, onBtnClick }: Props) => {
  return (
    <div className="w-full border border-slate-300 rounded-[0.6rem] min-h-[5rem] flex flex-col">
      <div className="w-full p-4 h-full">{children}</div>
      <div
        onClick={onBtnClick}
        className="flex w-full items-center justify-between px-4 py-2 border-t border-slate-300 text-slate-600 text-[.875rem] mt-auto cursor-pointer hover:bg-slate-100 transition-all duration-200"
      >
        <span>{btnText}</span>
        <ChevronRight size={14} />
      </div>
    </div>
  );
};

export default BorderCard;
