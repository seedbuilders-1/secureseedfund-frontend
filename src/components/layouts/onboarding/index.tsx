"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { Progress } from "@/components/ui/progress";
import useOnboarding from "@/hooks/onboarding/useOnboarding";


const OnboardLayout = ({ children }: { children: ReactNode }) => {
    const { steps, calculateProgress } = useOnboarding()

    return (
        <div className="flex">
            <div className="basis-[50%] bg-secondaryblue fixed h-full w-[50%] overflow-hidden mr-[50%] p-2 ">

                <Image
                    src="/assets/icons/logo-white.svg"
                    alt="logo"
                    width={47}
                    height={50}
                    className="absolute top-8 left-8"
                />
                <div className="mt-[5rem] px-6 py-6">
                    <h1 className="text-slate-50 text-[1.3rem] ">
                        Getting started as an investor
                    </h1>
                    <p className="text-slate-300 text-[1rem] leading-[1.5rem] mt-2 w-[400px] ">
                        Access a pool of startups, view the pitch and make investments securely.
                    </p>
                    <div className="mt-5">
                        <p className="text-slate-300 text-[0.9rem] leading-[1.5rem] mt-3">
                            onboarding process
                        </p>
                        <Progress className="mt-2 w-2/4 h-[0.7rem]" value={calculateProgress()}></Progress>
                    </div>
                    <div className="mt-10 space-y-7">
                        <div className="flex  items-center">
                            <div className={`bg-${steps >= 1 ? "primaryMain" : ""} border border-slate-500 rounded-full w-[40px] h-[40px] flex justify-center items-center text-white`}>1</div>
                            <h2 className={`text-${steps >= 1 ? "white" : "slate-500"} mx-4`}>Entity Information</h2>
                        </div>
                        <div className="flex items-center">
                            <div className={`bg-${steps >= 2 ? "primaryMain" : "gray"} border border-slate-500 rounded-full w-[40px] h-[40px] flex justify-center items-center text-white`}>2</div>
                            <h2 className={`text-${steps >= 2 ? "white" : "slate-500"} mx-4`}>Upload identity Document</h2>
                        </div>
                        <div className="flex   items-center">
                            <div className={`bg-${steps >= 3 ? "primaryMain" : ""} border border-slate-500 rounded-full w-[40px] h-[40px] flex justify-center items-center text-white`}>3</div>
                            <h2 className={`text-${steps >= 3 ? "white" : "slate-500"} mx-4`}>Investment Questionaire </h2>
                        </div>
                        <div className="flex  items-center">
                            <div className={`bg-${steps >= 4 ? "primaryMain" : "gray"} border border-slate-500 rounded-full w-[40px] h-[40px] flex justify-center items-center text-white`}>4</div>
                            <h2 className={`text-${steps >= 4 ? "white" : "slate-500"} mx-4`}>Terms and Conditions </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="basis-[50%] ml-[50%] py-4 px-20">
                {children}
            </div>
        </div>
    );
};

export default OnboardLayout;
