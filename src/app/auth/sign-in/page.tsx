"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInValidation } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useUserAuth from "@/hooks/auth/useAuth";
import facebook from "../../../../public/assets/icons/icons8-facebook.svg";
import linkednin from "../../../../public/assets/icons/icons8-linkedin.svg";
import google from "../../../../public/assets/icons/icons8-google.svg";
import Image from "next/image";
import { Fragment } from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import authLogo from "../../../../public/assets/images/authLogo.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpPage from "../sign-up/page";
import Link from "next/link";
import ResetPasswordModal from "../components/ResetPasswordComponent";

const SignInPage = () => {
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const handleCloseResetPassword = () => {
    setOpenResetPassword(!openResetPassword);
  };
  const form = useForm<SignInValidation>({
    resolver: zodResolver(SignInSchema),
  });
  const { loginUser, loading } = useUserAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values: SignInValidation) => {
    const { email, password } = values;
    loginUser({
      email,
      password,
    });
  };
  // const { refetch } = useGoogleAuthQuery({});
  // const handleGoogleSignIn = () => {
  // refetch();
  // };
  const handleGoogleLogin = () => {
    const clientId =
      "663229998275-qvppb9d8jnqikofcatmjr42122i45pi5.apps.googleusercontent.com";
    const redirectUri = "http://localhost:3000/auth/google/callback";
    const scope = "email profile";
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = oauthUrl; // Redirects the usexr
  };

  return (
    <Fragment>
      <div className=" flex flex-col items-center px-6">
        <Link href="/">
          <Image
            src={authLogo}
            alt="logo"
            className="cursor-pointer"
            width={150}
            height={150}
          />
        </Link>
        <Tabs
          defaultValue="login"
          className="w-full flex items-center justify-center flex-col"
        >
          <TabsList className="bg-white rounded-full border flex justify-between items-center p-1 border-#241A3F h-14 w-full sm:w-[60%] lg:w-[60%]">
            <TabsTrigger
              value="login"
              className="font-normal text-[1rem] bg-white w-full rounded-3xl p-3 text-center text-[black] data-[state=active]:bg-[#241A3F] data-[state=active]:text-white"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="sign-up"
              className="font-normal text-[1rem] bg-white w-full rounded-3xl p-3 text-center text-[black] data-[state=active]:bg-[#241A3F] data-[state=active]:text-white"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <div className="w-full md:w-[60%] flex justify-between mt-12 space-x-5">
            <div className="bg-[#D9D9D93B] rounded-lg p-3 shadow cursor-pointer">
              <Image src={facebook} alt="logo" layout="intrinsic" />
            </div>
            <div
              onClick={handleGoogleLogin}
              className="bg-[#D9D9D93B] p-3 rounded-lg shadow cursor-pointer"
            >
              <Image src={google} alt="logo" layout="intrinsic" />
            </div>
            <div className="bg-[#D9D9D93B] p-3 rounded-lg shadow cursor-pointer">
              <Image src={linkednin} alt="logo" layout="intrinsic" />
            </div>
          </div>
          <div className="flex items-center mt-10 w-full md:w-[60%] space-x-5">
            <div className="flex-grow border-b border-[black] border-dashed border"></div>
            <span className="text-[black]">OR</span>
            <div className="flex-grow border-b border-[black] border-dashed border"></div>
          </div>
          <div className="flex items-center justify-center my-6">
            <p className="text-[#2B2B2B]">Provide your credentials to login</p>
          </div>
          <TabsContent value="sign-up" className="w-full md:w-[60%] lg:w-[65%]">
            <SignUpPage />
          </TabsContent>
          <TabsContent value="login" className="w-full md:w-[60%] lg:w-[65%]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="mb-4 flex flex-col space-y-6 w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                              {...field}
                            />
                            <div
                              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div
                    onClick={() => setOpenResetPassword(!openResetPassword)}
                    className="ml-auto my-0 underline cursor-pointer"
                  >
                    <p className="text-sm">Forget Password</p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#241A3F] hover:bg-[#241A3F]/90 rounded-3xl"
                  loading={loading}
                >
                  Login
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
      <ResetPasswordModal
        isOpen={openResetPassword}
        onClose={handleCloseResetPassword}
      />
    </Fragment>
  );
};

export default SignInPage;
