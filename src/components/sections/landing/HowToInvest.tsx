import DocumentIcon from "@/assets/icons/DocumentIcon";
import LockLineIcon from "@/assets/icons/LockLineIcon";
import RegisterOutlineIcon from "@/assets/icons/RegisterOutlineIcon";
import SearchNormalIcon from "@/assets/icons/SearchNormalIcon";
import PaddingContainer from "@/components/shared/PaddingContainer";
import Image from "next/image";
import { ReactNode } from "react";

interface IHowToCard {
  title: string;
  desc: string;
  icon: ReactNode;
}
const HowToCard = ({ title, desc, icon }: IHowToCard) => {
  return (
    <div className="w-full flex flex-col p-6 bg-[#001215]">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#CDEED3] mb-10">
        {icon}
      </div>
      <h4 className="text-[1.5rem] font-[400] text-white">{title}</h4>
      <p className="text-base text-white font-[300] w-[50%] mt-2">{desc}</p>
    </div>
  );
};

const HowToInvest = () => {
  return (
    <section className="w-full">
      <div className="bg-[#001D21]">
        <PaddingContainer className="py-10">
          <div className="w-full flex flex-col space-y-6">
            <h3 className="text-[#F7F8F6] text-[3.0625rem]">How To Invest</h3>
            <div className="w-full grid grid-cols-4 gap-6">
              <HowToCard
                icon={<RegisterOutlineIcon />}
                title="Sign Up"
                desc="Join our platform and get started!"
              />
              <HowToCard
                icon={<SearchNormalIcon />}
                title="Explore the start ups"
                desc="Explore innovative ventures."
              />
              <HowToCard
                icon={<LockLineIcon />}
                title="Securely Fund"
                desc="Safely invest in promising projects."
              />
              <HowToCard
                icon={<DocumentIcon />}
                title="Review Milestones"
                desc="Monitor project progress easily."
              />
            </div>
          </div>
        </PaddingContainer>
      </div>
      <div className="w-full h-[40rem] relative">
        <Image
          src="/assets/images/invest-image.png"
          alt="Invest image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HowToInvest;
