"use client";
import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import PlayButton from "../../../../../../public/assets/images/Play.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ImageAngle from "../../../../../../public/assets/images/imageAngel.png";
import AboutusSection from "./Aboutus"
import TermsSection from "./TermsSection"

const StartupDetail: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "About", "Terms"];

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Error attempting to play video: ", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="px-5 mt-[2rem] mb-[100px] flex items-center justify-center ">
      <div className="flex  flex-col md:flex-row w-full gap-8">
        <div className="w-[100%] max-w-[700px] h-full">
          
          <video
            ref={videoRef}
            className=" object-cover"
            loop
            muted
            playsInline
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 flex items-center justify-center right-[23rem]">
            <button
              onClick={togglePlayPause}
              className="transform transition-transform hover:scale-110"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause size={48} fill="black" color="black" />
              ) : (
                <Image
                  src={PlayButton}
                  alt="Play button"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              )}
            </button>
          </div>
          
      <div className="mt-8 ">
        <h3 className="text-[1rem] font-normal text-[#000000] mb-4">
          Get a fraction of kene & sons
        </h3>
        <strong className="text-[1.2rem] font-bold leading-[1rem]   ">
          Kene & Sons LTD AI Machine Communication and Virtual learning.
        </strong>
        <p className="text-sm font-500 mt-4">
          Kene & sons software technologies are force multipliers for machine
          data communications, enabling up to 2-4x more data to be sent over
          existing networks with the potential for added security.
        </p>
        <Button className="w-[80%] md:w-[30%] rounded-3xl bg-[#241A3F] mt-10">
          Get Equity
        </Button>
        <p className="text-sm font-500 mt-8">
          This Reg A+ offering is made available through StartEngine Primary,
          LLC. This investment is speculative, illiquid, and involves a high
          degree of risk, including the possible loss of your entire investment.
        </p>
     

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
              {/* Underline */}
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
        {/* Content area - you can add your tab content here */}
        <div className="mt-4 ">
          {activeTab === "Overview" && (
            <div>
              <div>
                <h2 className="font-bold text-[1.5rem]">Reasons to Invest</h2>
                <p className="mt-6 text-sm">
                  . Lorem ipsum dolor sit amet consectetur. Condimentum nullam
                  dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetu. Lorem ipsum
                  dolor sit amet consectetur .
                </p>
                <p className="mt-6 text-sm">
                  . Lorem ipsum dolor sit amet consectetur. Condimentum nullam
                  dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetu. Lorem ipsum
                  dolor sit amet consectetur .
                </p>
                <p className="mt-6 text-sm">
                  . Lorem ipsum dolor sit amet consectetur. Condimentum nullam
                  dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetu. Lorem ipsum
                  dolor sit amet consectetur .
                </p>
              </div>

              <div className="mt-4">
                <h2 className="text-[1.5rem] font-bold mt-6">The pitch</h2>
                <h3 className="text-[1rem] font-medium">
                  Streamlined, Secure & Smart Data Compression and Security
                </h3>
                <Image
                  src={ImageAngle}
                  alt="Play button"
                  className="w-full mt-3"
                />
                <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsumss
                </p>
                
              </div>

              <div className="mt-4">
                <h2 className="text-[1.5rem] font-bold mt-6">The pitch</h2>
                <h3 className="text-[1rem] font-medium">
                  Streamlined, Secure & Smart Data Compression and Security
                </h3>
                <Image
                  src={ImageAngle}
                  alt="Play button"
                  className="w-full mt-3"
                />
                <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsum dolor sit amet consectetur. Condimentum nullam dui
                  sapien pulvinar tincidunt pharetra consectetur eros. Lorem
                  ipsumss
                </p>
                
              </div>
            </div>
          )}
          {activeTab === "About" && <AboutusSection/>}
          {activeTab === "Terms" && <div><TermsSection/></div>}
        </div>
      </div>




   {/* Milesstone section */}

   
   <div className="w-full py-4 px-4 rounded-md h-full flex flex-col mt-10">
   <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-8">
          <h2 className="text-[#0F8B3A] text-2xl font-bold whitespace-nowrap">Miles Stone</h2>
          <div className="bg-[#0F8B3A] h-[3px] w-[200px]" />
        </div>
      </div>
      <div className="py-4 px-6 rounded-md w-full border border-[#1F9347]">
        <div className="flex gap-4">
          <div className="bg-[#1F9347] rounded-full w-[30px] h-[30px] shrink-0 mt-1" />
          
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-black font-medium text-[1.1rem]">
                Milestone 01
              </h2>
              <span className="text-[1rem] text-[#0F8B3A] font-medium">
                $100,000
              </span>
            </div>
            
            <p className="text-black text-[0.9rem] max-w-md">
              Marketing Campaign Fund raising With the additional resources, we will be...
            </p>
            
            <div className="inline-flex">
              <div className="bg-[#CEECDB] rounded-3xl text-[#0F8B3A] px-4 py-1 text-xs font-medium">
                Achieved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
        </div>

        <div className="w-[450px] h-[400px] flex-col justify-center bg-[#CDEED3] hidden lg:block ">
          <div className="px-6 py-4">
            <h2 className="text-4xl font-bold">$425,900</h2>
            <p className="text-lg mt-3 ">Raised from 845 investors</p>
            <div className="flex gap-4 mt-3">
            <p className="text-md font-bold">  invest <br /> <span>Min $100</span></p>
              <button className="px-6 py-3 border border-[#0F8B3A] rounded-lg text-[#0F8B3A] font-medium text-2xl">
               $   0.000
              </button>
            </div>
            <Button className="bg-[#241A3F] text-white w-full mt-4"> Get equity</Button>
            <Button className="bg-transparent text-[#241A3F] border border-[#241A3F] w-full mt-4"> Add to watchlist</Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default StartupDetail;
