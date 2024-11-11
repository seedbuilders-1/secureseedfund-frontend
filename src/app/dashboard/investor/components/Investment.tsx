import React from "react";
import Image from "next/image";
import useUserAuth from "@/hooks/auth/useAuth";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { api as investorApi } from "@/services/investor/index";

const Investment = () => {
  const router = useRouter();
  const { user } = useUserAuth();
  const { data: investments, isLoading: loadingInvestments } =
    investorApi.useInvestorControllerGetInvestorInvestmentsQuery({
      investorId: user?.userId as string,
    });

  if (loadingInvestments) {
    return (
      <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
        <div className="space-y-3">
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
        </div>
      </div>
    );
  }
  return (
    <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
      {investments?.length ? (
        <div className="w-full overflow-x-auto">
          {" "}
          <div className="min-w-full">
            <div className="flex flex-wrap mb-3 text-gray-500 text-xs md:text-sm font-medium">
              <div className="w-1/5 text-center md:text-left">Company Logo</div>
              <div className="w-1/5 text-center md:text-left">Company Name</div>
              <div className="w-1/5 text-center md:text-left">Type</div>
              <div className="w-1/5 text-center md:text-left">Amount</div>
              <div className="w-1/5 text-center md:text-left">Funding Goal</div>
            </div>
            {investments?.map((investor) => (
              <div
                key={investor.id}
                onClick={() =>
                  router.push(
                    `/dashboard/investor/explore/${investor?.campaign.startup.id}`
                  )
                }
                className="flex flex-wrap items-center py-3 cursor-pointer 
                    transition-all duration-200 hover:bg-slate-100
                    relative overflow-hidden"
              >
                <div className="w-1/5 flex items-center justify-center md:justify-start">
                  <Image
                    src={
                      investor.campaign.startup?.companyInformation
                        ?.company_logo
                    }
                    alt={
                      investor.campaign.startup?.companyInformation
                        ?.company_name
                    }
                    width={64}
                    height={64}
                    className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-cover rounded-full"
                  />
                </div>
                <div className="w-1/5 text-center md:text-left text-xs md:text-sm">
                  {investor.campaign.startup?.companyInformation?.company_name}
                </div>
                <div className="w-1/5 text-center md:text-left text-xs md:text-sm">
                  {investor.campaign.campaignType}
                </div>
                <div className="w-1/5 text-center md:text-left text-xs md:text-sm font-medium text-[#16A34A]">
                  ₦ {investor?.total_invested}
                </div>
                <div className="w-1/5 text-center md:text-left text-xs md:text-sm">
                  ₦ {investor.campaign.fundingGoal}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-black text-[1rem] md:text-sm">
            You have no investments
          </h2>
        </div>
      )}
    </div>
  );
};

export default Investment;
