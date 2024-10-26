"use client";
import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useUserAuth from "@/hooks/auth/useAuth";
import useExplore from "../hooks/useExplore";
import { Skeleton } from "@/components/ui/skeleton";

function Page() {
  const { user } = useUserAuth();

  const { allStartupsData, loadingAllStartupData } = useExplore();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters Section */}
      <div className="flex gap-4 mb-[4rem] mt-[2rem]">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-white">
              <SelectLabel>Industry</SelectLabel>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort by status" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="funding">Highest Funding</SelectItem>
              <SelectItem value="valuation">Highest Valuation</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Startups Grid */}
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {loadingAllStartupData ? (
          <div className="w-full max-w-7xl mx-auto px-[2rem] py-[2rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-[300px] rounded-lg" />
              ))}
            </div>
          </div>
        ) : allStartupsData?.items?.length === 0 ? (
          <div className="flex items-center justify-center w-full h-[300px]">
            <p className="text-lg text-gray-500">No startups found.</p>
          </div>
        ) : (
          allStartupsData?.items.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden w-[390px] h-[550px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={startup.founder?.profileImage}
                  alt="startup image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <div className="mb-4">
                  <h2 className="text-xl font-medium mb-2 text-[#837e7e]">
                    {startup.companyInformation?.company_name}
                  </h2>
                  <p className="font-medium">
                    {startup.companyInformation?.company_desc}
                  </p>
                </div>

                <div className="flex-grow">
                  <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                    {startup.companyInformation?.company_bullet_point}
                  </p>

                  <div className="space-y-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Funding</span>
                      <span className="font-medium text-[#837e7e]">
                        $3,500,000 from 150 investors
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-medium">Valuation</span>
                      <span className="font-medium text-[#837e7e]">
                        $40.26M valuations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page;

// import React, { useRef, useState } from 'react';
// import { Play, Pause } from 'lucide-react';
// import PlayButton from '../../../../../public/assets/images/Play.png';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import ImageAngle from '../../../../../public/assets/images/imageAngel.png'
// const VideoBackground: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [activeTab, setActiveTab] = useState('Overview');

//   const tabs = ['Overview', 'About', 'Terms'];

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play().catch(error => {
//           console.error("Error attempting to play video: ", error);
//         });
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//      <section className='px-5 mt-[2rem] mb-[100px]'>
//     <div className="flex flex-col lg:flex-row w-full gap-8">

//       <div className="relative w-full lg:w-1/2 aspect-video">
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover rounded-lg"
//           loop
//           muted
//           playsInline
//         >
//           <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="absolute inset-0 flex items-center justify-center">
//           <button
//             onClick={togglePlayPause}
//             className="transform transition-transform hover:scale-110"
//             aria-label={isPlaying ? "Pause video" : "Play video"}
//           >
//             {isPlaying ? (
//               <Pause size={48} fill='black' color="black" />
//             ) : (
//               <Image
//                 src={PlayButton}
//                 alt="Play button"
//                 width={48}
//                 height={48}
//                 className="w-12 h-12"
//               />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="w-full lg:w-1/2  flex-col justify-center bg-[#CDEED3] hidden lg:block">
//         <div className="space-y-6">
//           <h2 className="text-4xl font-bold">Your Title Here</h2>
//           <p className="text-lg text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris.
//           </p>
//           <div className="flex gap-4">
//             <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
//               Primary Action
//             </button>
//             <button className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100 transition-colors">
//               Secondary Action
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className='mt-8'>
//      <h3 className='text-[1.2rem] font-normal text-[#000000]'>Get a fraction of kene & sons</h3>
//      <strong className='text-[1.5rem] font-bold leading-[2rem] '>Kene & Sons LTD AI Machine Communication and Virtual learning.</strong>
//      <p className='text-sm font-500'>Kene & sons software technologies are force multipliers for machine data communications, enabling up to 2-4x more data to be sent over existing networks with the potential for added security.
//      </p>
//      <Button className='w-[80%] md:w-[30%] rounded-3xl bg-[#241A3F] mt-10'>Get Equity</Button>
//      <p className='text-sm font-500 mt-10'>This Reg A+ offering is made available through StartEngine Primary, LLC.
//      This investment is speculative, illiquid, and involves a high degree of risk, including the possible loss of your entire investment.</p>
//     </div>

//     <div className='mt-8'>
//       <div className='flex gap-5 font-medium'>
//         {tabs.map((tab) => (
//           <div key={tab} className="relative">
//             <button
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 transition-colors duration-300 text-[1.1rem] ${
//                 activeTab === tab ? 'text-[#0F8B3A]' : 'text-gray-700 hover:text-gray-900'
//               }`}
//             >
//               {tab}
//             </button>
//             {/* Underline */}
//             <div
//               className={`absolute bottom-[8px] left-0 w-full h-0.5 transition-all duration-300 ${
//                 activeTab === tab ? 'bg-[#0F8B3A] opacity-100' : 'bg-transparent opacity-0'
//               }`}
//             />
//           </div>
//         ))}
//       </div>
//      <hr className='mt-2 bg-[#2f2c2c]' />
//       {/* Content area - you can add your tab content here */}
//       <div className="mt-4 ">
//         {activeTab === 'Overview' && (
//           <div>
//             <div>
//             <h2 className='font-bold text-[1.2rem]'>Reasons to Invest</h2>
//             <p className='mt-3'>.  Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui sapien pulvinar tincidunt pharetra consectetu.
//             Lorem ipsum dolor sit amet consectetur
//          .</p>
//             </div>

//          <div className='mt-4'>
//       <h2  className='text-[1.2rem] font-bold'>The pitch</h2>
//       <h3 className='text-[1rem] font-medium'>Streamlined, Secure & Smart Data Compression and Security</h3>
//                 <Image
//                 src={ImageAngle}
//                 alt="Play button"
//                className='w-full mt-3'
//               />
//               <p className='mt-4'>Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem ipsum dolor sit amet consectetur. Condimentum nullam dui sapien pulvinar tincidunt pharetra consectetur eros. Lorem ipsumss</p>
//      </div>
//           </div>
//         )}
//         {activeTab === 'About' && (
//           <div>About Content</div>
//         )}
//         {activeTab === 'Terms' && (
//           <div>Terms Content</div>
//         )}
//       </div>
//     </div>

//     </section>
//   );
// };

// export default VideoBackground;
