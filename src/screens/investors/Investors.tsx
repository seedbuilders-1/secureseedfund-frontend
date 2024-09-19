import HeroSection from "@/components/sections/investors/HeroSection";
import InvestArticleCarousel from "@/app/(landing)/home/components/InvestArticle";
import StepstoInvest from "@/app/(landing)/investors/components/StepstoInvest";
import InvesmentIInfor from "@/app/(landing)/investors/components/InvesmentIInfor";

const Investors = () => {
  return (
    <>
      <HeroSection />
      <InvestArticleCarousel title="Most Raised This Week" />
      <StepstoInvest />
      <InvesmentIInfor />
    </>
  );
};

export default Investors;
