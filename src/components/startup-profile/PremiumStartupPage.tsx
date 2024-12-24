"use client";
import React, { useRef, useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Pause } from "lucide-react";
import Milestones from "../../app/dashboard/investor/explore/components/Milestone";
import { Button } from "@/components/ui/button";
import AboutusSection from "../../app/dashboard/investor/explore/components/Aboutus";
import TeamMembers from "../../app/dashboard/investor/explore/components/TeamMembers";
import InvestModal from "../../app/dashboard/investor/explore/components/InvestModal";
import useUserAuth from "@/hooks/auth/useAuth";
import LoadingSkeleton from "../../app/dashboard/investor/explore/components/LoadingSkeleton";
import useExplore from "../../app/dashboard/investor/explore/hooks/useExplore";
import PDFViewerModal from "../../app/dashboard/investor/explore/components/PdfViewer";
import { useRouter } from "next/navigation";
import { Startup } from "@/services/startup";
import { Bell } from "lucide-react";
import moment from "moment";
import { useInstitutionInvestInCampaignMutation } from "@/services/institution";
interface Props {
  hasCampaign: boolean | undefined;
  isLoading: boolean;
  startup: Startup | undefined;
}

const PremiumStartupPage = ({ hasCampaign, startup, isLoading }: Props) => {
  const router = useRouter();
  const [isOpenInvest, setIsOpenInvest] = useState(false);
  const { createInvestment, isInvesting, investedSuccess } = useExplore({});
  const [
    createInstitutionInvestment,
    { isLoading: isloadingInstitutionInvest, isSuccess: institutionSuccess },
  ] = useInstitutionInvestInCampaignMutation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [progress, setProgress] = useState(0);
  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    if (duration > 0) {
      const percent = (currentTime / duration) * 100;
      setProgress(percent);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const progressBarWidth = progressBar.offsetWidth;
    if (progressBarWidth === 0) return;

    const percentageClicked = (clickPosition / progressBarWidth) * 100;
    const newTime = (videoRef.current.duration / 100) * percentageClicked;

    if (
      isFinite(newTime) &&
      newTime >= 0 &&
      newTime <= videoRef.current.duration
    ) {
      videoRef.current.currentTime = newTime;
      setProgress(percentageClicked);
    }
  };
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      video.currentTime = 0;
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const tabs = ["Overview", "About", "Teams", "Milestones"];
  const { user } = useUserAuth();
  const campaignId =
    startup?.campaignInformation?.length &&
    startup?.campaignInformation[startup?.campaignInformation?.length - 1].id;
  const handleInvest = (amount: number) => {
    if (user?.accountType === "institution") {
      const institutionInvestmentDto = {
        investmentAmount: amount,
        investorUserId: user?.userId as string,
      };
      createInstitutionInvestment({
        campaignId: campaignId as string,
        institutionDto: institutionInvestmentDto,
      });
    } else {
      const investDto = {
        investmentAmount: amount,
        investorUserId: user?.userId as string,
      };
      createInvestment({
        campaignId: campaignId as string,
        investDto,
      });
    }
  };
  useEffect(() => {
    if (investedSuccess || institutionSuccess) {
      setIsOpenInvest(false);
      router.push(`/dashboard/investor`);
    }
  }, [investedSuccess || institutionSuccess]);
  const daysLeft =
    startup?.campaignInformation && startup.campaignInformation.length > 0
      ? Math.max(
          0,
          moment(
            startup.campaignInformation[startup.campaignInformation.length - 1]
              .endDate
          ).diff(moment(), "days")
        )
      : 0;
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <section className=" px-[1rem] lg:px-[3rem] mt-[2rem] mb-[100px] flex items-center  mx-auto ">
      <div
        className={`flex flex-col md:flex-row gap-8 ${
          hasCampaign ? "w-full" : "w-full max-w-[1200px]"
        }`}
      >
        <div
          className={`${
            hasCampaign ? "w-[100%] max-w-[900px]" : "w-full"
          } h-full`}
        >
          <div className="relative w-full">
            <video
              ref={videoRef}
              className="object-cover rounded-sm w-full h-[500px]"
              loop
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
            >
              <source
                src={startup?.companyInformation.company_video}
                type="video/mp4"
              />
            </video>
            {(startup?.campaignInformation &&
              startup.campaignInformation.length > 0) ?? (
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0F8B3A] px-4 py-2 rounded-sm text-white z-10">
                <span className="text-md font-medium">
                  Days Left: {daysLeft}
                </span>
                <Bell className="h-4 w-4" />
              </div>
            )}

            <div className="absolute inset-0 bg-black/40 rounded-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlayPause}
                className="transform transition-transform hover:scale-110 z-10"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause size={48} fill="white" color="white" />
                ) : (
                  <Play size={48} fill="white" color="white" />
                )}
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div
                className="w-full bg-white/30 h-1 rounded-full cursor-pointer"
                onClick={handleProgressClick}
                role="slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
              >
                <div
                  className="bg-white h-full rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 ">
            <h3 className="text-[1rem] font-normal text-[#000000] mb-4">
              {startup?.companyInformation.company_name}
            </h3>
            <strong className="text-[1.2rem] font-bold leading-[1rem]   ">
              {startup?.companyInformation.company_desc}
            </strong>
            <p className="text-sm font-500 mt-4">
              {startup?.companyInformation.company_bullet_point}
            </p>
            <p className="text-sm font-500 mt-8">
              <strong>Industry</strong>:{" "}
              {startup?.companyInformation.company_industry}
            </p>
            <Button
              onClick={() => setIsOpenInvest(true)}
              className="w-[80%] md:w-[30%] rounded-3xl bg-[#241A3F] mt-10 lg:hidden"
            >
              Invest
            </Button>

            <div>
              <div className="mt-8">
                <div className="flex gap-5 font-medium">
                  {tabs.map((tab) => (
                    <div key={tab} className="relative">
                      <button
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 transition-colors duration-300 text-[1.1rem] font-bold ${
                          activeTab === tab
                            ? "text-[#0F8B3A]"
                            : "text-gray-700 hover:text-gray-900 font-bold"
                        }`}
                      >
                        {tab}
                      </button>
                      <div
                        className={`absolute bottom-[8px] left-0 w-full h-0.5 transition-all duration-300 mb-[-0.3rem] ${
                          activeTab === tab
                            ? "bg-[#0F8B3A] opacity-100 font-bold"
                            : "bg-transparent opacity-0 font-bold"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <hr className="mt-6 bg-[#2f2c2c] mb-6" />
                <div className="mt-4 ">
                  {activeTab === "Overview" && (
                    <div>
                      <div>
                        <h2 className="font-bold text-[1.5rem]">
                          Reasons to Invest
                        </h2>
                        <p className="mt-6 text-sm">
                          {startup?.companyInformation.company_bullet_point}
                        </p>
                      </div>
                      <div className="flex  w-full justify-between gap-4 flex-wrap">
                        <div className="mt-4 w-full">
                          <h2 className="text-[1.2rem]  font-medium mt-6">
                            The Pitch Deck
                          </h2>
                          <PDFViewerModal
                            pdfUrl={
                              startup?.companyInformation
                                .company_pitchDeck as string
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "About" && <AboutusSection about={startup} />}
                  {activeTab === "Teams" && (
                    <div>
                      <TeamMembers team={startup} />
                    </div>
                  )}
                  {activeTab === "Milestones" && (
                    <div className="mt-4">
                      {hasCampaign && (
                        <Milestones
                          currentCampaign={
                            startup?.campaignInformation[0].milestones
                          }
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          {hasCampaign && (
            <InvestModal
              isLoading={isInvesting || isloadingInstitutionInvest}
              handleInvest={handleInvest}
              campaign={startup?.campaignInformation}
            />
          )}
        </div>
        <Dialog open={isOpenInvest} onOpenChange={setIsOpenInvest}>
          <DialogContent className="mx-auto  bg-transparent border-none">
            <div className="mt-4">
              {hasCampaign && (
                <InvestModal
                  isLoading={isInvesting || isloadingInstitutionInvest}
                  handleInvest={handleInvest}
                  campaign={startup?.campaignInformation}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PremiumStartupPage;
