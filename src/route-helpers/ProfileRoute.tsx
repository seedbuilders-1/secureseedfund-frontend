"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { Fragment, ReactNode } from "react";
import useProfile from "@/hooks/profile/useProfile";

const ProfileRoute = ({ children }: { children: ReactNode }) => {
  const { userProfile, loadingProfile } = useProfile();

  useEffect(() => {
    if (!loadingProfile) {
      const profileExists =
        userProfile &&
        (userProfile.investor as any)?.investmentQuestionnaire?.id &&
        userProfile.investor?.id;

      if (!profileExists) {
        redirect("/onboarding");
      }
    }
  }, [loadingProfile, userProfile]);

  return <Fragment>{children}</Fragment>;
};

export default ProfileRoute;
