import { Badge } from "../ui/badge";
import BorderCard from "./BorderCard";

const RecommendedInvestor = () => {
  return (
    <BorderCard btnText="View Profile">
      <div className="w-full flex flex-col space-y-3">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-gray-200 w-12 h-12" />
          <div className="flex flex-col">
            <h4 className="text-slate-700 text-[1rem] font-[500] leading-[1.5rem]">
              Wenston Ventures
            </h4>
            <p className="text-slate-500 text-[.75rem] font-[500] leading-[1.25rem]">
              Venture Capitalist
            </p>
          </div>
        </div>

        <p className="text-[.75rem]  leading-[1.5rem] text-slate-600 w-full">
          Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat
          quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae
          massa volutpat massa askdsksa...
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge size="sm" className="text-amber-900 bg-amber-200">
            Actively Investing
          </Badge>
          <Badge size="sm" className="text-sky-700 bg-sky-200">
            Same investor as Paystack
          </Badge>
          <Badge size="sm" className="text-emerald-900 bg-emerald-100">
            $1M+ investor
          </Badge>
        </div>
      </div>
    </BorderCard>
  );
};

export default RecommendedInvestor;
