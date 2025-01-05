"use client";

import React, { useEffect } from "react";
import { useVerifyEmailQuery } from "@/services/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";

const EmailVerificationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const encodedEmail = searchParams.get("email") || "";
  const email = decodeURIComponent(encodedEmail).replace(" ", "%2B");
  const key = searchParams.get("key") || "";

  const { refetch, isLoading } = useVerifyEmailQuery({
    email,
    key,
  });
  useEffect(() => {
    if (email && key) {
      refetch();
    }
  }, [email, key]);

  if (isLoading) {
    return <LoadingSpinner className="mt-[10rem]" />;
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="max-w-[600px] w-full ">
        <CardHeader className="text-center">
          <h1 className="text-[2rem] font-medium">Verification Successful</h1>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Your email account has been verified successfully. Login to your
            account to continue.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => router.push("/auth/sign-in")}
            className="w-full rounded-md"
          >
            Log in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EmailVerificationPage;
