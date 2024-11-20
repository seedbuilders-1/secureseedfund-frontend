"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserAuth from "@/hooks/auth/useAuth";


const DashboardRedirect = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }

    const role = user.accountType;
    if (role === "startup") {
      router.replace("/dashboard/startup");
    } else if (role === "investor") {
      router.replace("/dashboard/investor");
    } else if (role === "institution") {
      router.replace("/dashboard/institution");
    } else {
      router.replace("/");
    }
  }, [user, router]);


  return null;
};

export default DashboardRedirect;
