"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserAuth from "@/hooks/auth/useAuth";
import { Loader2 } from "lucide-react";

const DashboardRedirect = () => {
  const { user, loading } = useUserAuth();
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
    } else {
      router.replace("/");
    }
  }, [user, loading, router]);
  if (loading) {
    return <Loader2 className="mr-2 h-6 w-6 animate-spin" />;
  }

  return null;
};

export default DashboardRedirect;
