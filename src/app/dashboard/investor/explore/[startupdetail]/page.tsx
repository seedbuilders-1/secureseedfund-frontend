"use client";
import React, { useRef, useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Pause } from "lucide-react";
import { api as startupsApi } from "@/generated/service/startups/startups";
import Milestones from "../components/Milestone";
import { Button } from "@/components/ui/button";
import AboutusSection from "../components/Aboutus";
import TeamMembers from "../components/TeamMembers";
import { useParams } from "next/navigation";
import InvestModal from "../components/InvestModal";
import useUserAuth from "@/hooks/auth/useAuth";
import LoadingSkeleton from "../components/LoadingSkeleton";
import useExplore from "../hooks/useExplore";
import PDFViewerModal from "../components/PdfViewer";
const StartupDetail = () => {
  const [isOpenInvest, setIsOpenInvest] = useState(false);
  const { startupdetail } = useParams();
  const { createInvestment, isInvesting, investedSuccesss } = useExplore({});
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [progress, setProgress] = useState(0);
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition =
        e.clientX - progressBar.getBoundingClientRect().left;
      const percentageClicked = (clickPosition / progressBar.offsetWidth) * 100;
      const newTime = (videoRef.current.duration / 100) * percentageClicked;
      videoRef.current.currentTime = newTime;
      setProgress(percentageClicked);
    }
  };

  const tabs = ["Overview", "About", "Teams"];
  const startupId = Array.isArray(startupdetail)
    ? startupdetail[0]
    : startupdetail || "";
  const { data: startup, isLoading } =
    startupsApi.useStartupControllerGetStartupByStartupIdQuery({
      startupId: startupId,
    });
  const { user } = useUserAuth();
  const campaignId = startup?.campaignInformation[0].id;
  const handleInvest = (amount: number) => {
    const investDto = {
      investmentAmount: amount,
    };
    createInvestment({
      investorUserId: user?.userId as string,
      campaignId: campaignId as string,
      investDto,
    });
  };
  useEffect(() => {
    if (investedSuccesss) {
      setIsOpenInvest(false);
    }
  }, [investedSuccesss]);
  const hasCampaign =
    startup?.campaignInformation && startup.campaignInformation.length > 0;
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
              className="object-cover rounded-sm w-full"
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
              className="w-[80%] md:w-[30%] rounded-3xl bg-[#241A3F] mt-10 md:hidden"
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
                          <h2 className="text-[1.2rem] font-medium mt-6">
                            The Pitch Deck
                          </h2>
                          <PDFViewerModal
                            pdfUrl={
                              startup?.companyInformation
                                .company_pitchDeck as string
                            }
                          />
                        </div>
                        <div className="mt-4 w-full">
                          <h2 className="text-[1.2rem] font-medium mt-6">
                            The Company Registration
                          </h2>
                          <PDFViewerModal
                            pdfUrl={
                              startup?.companyInformation.company_cac as string
                            }
                          />
                        </div>
                        <div className="mt-4 w-full">
                          <h2 className="text-[1.2rem] font-medium mt-6">
                            The Business Plan
                          </h2>
                          <PDFViewerModal
                            pdfUrl={
                              startup?.companyInformation
                                .company_business_plan as string
                            }
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        {hasCampaign && (
                          <Milestones
                            currentCampaign={
                              startup?.campaignInformation[0].milestones
                            }
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === "About" && <AboutusSection about={startup} />}
                  {activeTab === "Teams" && (
                    <div>
                      <TeamMembers team={startup} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          {hasCampaign && (
            <InvestModal isLoading={isInvesting} handleInvest={handleInvest} />
          )}
        </div>
        <Dialog open={isOpenInvest} onOpenChange={setIsOpenInvest}>
          <DialogContent className="mx-auto  bg-transparent border-none">
            <div className="mt-4">
              {hasCampaign && (
                <InvestModal
                  isLoading={isInvesting}
                  handleInvest={handleInvest}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default StartupDetail;
