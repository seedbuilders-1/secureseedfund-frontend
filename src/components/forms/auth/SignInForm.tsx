"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignInSchema, SignInValidation } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useUserAuth from "@/hooks/auth/useAuth";
import { useRouter } from "next/navigation";
import facebook from "../../../../public/assets/icons/icons8-facebook.svg";
import linkednin from "../../../../public/assets/icons/icons8-linkedin.svg";
import google from "../../../../public/assets/icons/icons8-google.svg";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import SignUpForm from "./SignUpForm";

import GetStarted from "@/screens/getStarted/GetStarted";

const SignInForm = () => {
  const form = useForm<SignInValidation>({
    resolver: zodResolver(SignInSchema),
  });
  const { loginUser, loading, LoggedIn } = useUserAuth();
  const router = useRouter();

  const onSubmit = (values: SignInValidation) => {
    const { email, password } = values;
    loginUser({
      email,
      password,
    });
    if (LoggedIn) {
      router.push("/onboarding");
    }
  };

  const [signUpClicked, setSignUpClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string>("");

  const signUpButtonClicked = () => {
    setSignUpClicked(true);
    setIsModalOpen(true);
  };

  const handleCardClick = (text: string) => {
    setIsModalOpen(false);
    console.log(text);
    setSelectedCard((prev) => (prev = text));
    // console.log(selectedCard);
  };

  useEffect(() => {
    console.log("Updated Selected Card:", selectedCard); // Logs the latest selectedCard value after state update
  }, [selectedCard]);

  return (
    <Fragment>
      {isModalOpen ? (
        <GetStarted onCardClick={handleCardClick} />
      ) : (
        <div className="w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-3xl border-solid border-[1px] border-#241A3F w-[400px] flex justify-between items-center p-1">
              <div
                className={`bg-${
                  signUpClicked ? "" : "[#241A3F]"
                } w-full rounded-3xl text-${
                  signUpClicked ? "[black]" : "white"
                } p-2 text-center cursor-pointer`}
                onClick={() => setSignUpClicked(false)}
              >
                Login
              </div>
              <div
                className={`bg-${
                  signUpClicked ? "[#241A3F]" : ""
                } w-full rounded-3xl text-${
                  signUpClicked ? "white" : "[black"
                } p-2 text-center cursor-pointer`}
                onClick={signUpButtonClicked}
              >
                Sign Up
              </div>
            </div>

            <div className="flex justify-between space-x-20 mt-12">
              <div className="bg-[#D9D9D93B] rounded-lg p-3 shadow cursor-pointer">
                <Image src={facebook} alt="logo" layout="intrinsic" />
              </div>
              <div className="bg-[#D9D9D93B] p-3 rounded-lg shadow cursor-pointer">
                <Image src={google} alt="logo" layout="intrinsic" />
              </div>
              <div className="bg-[#D9D9D93B] p-3 rounded-lg shadow cursor-pointer">
                <Image src={linkednin} alt="logo" layout="intrinsic" />
              </div>
            </div>

            <div className="flex items-center mt-10 w-[400px] space-x-5">
              <div className="flex-grow border-b border-[black] border-dashed border"></div>
              <span className="text-[black]">OR</span>
              <div className="flex-grow border-b border-[black] border-dashed border"></div>
            </div>

            <div className="flex items-center justify-center my-6">
              <p className="text-[#2B2B2B]">
                Provide your credentials to login
              </p>
            </div>

            {signUpClicked ? (
              <SignUpForm />
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-[400px]"
                >
                  <div className="mb-10 flex flex-col space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Email address</FormLabel> */}
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
                          {/* <FormLabel>Password</FormLabel> */}
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#241A3F] hover:bg-[#241A3F]/90 rounded-3xl"
                    loading={loading}
                  >
                    Login
                  </Button>
                  {/* <p className="text-[.8rem] text-center text-slate-700 leading-[1.25rem] mt-6">
              Don’t have an account?{" "}
              <Link href="/auth/sign-up">
                <span className="font-[500] text-primaryMain hover:underline cursor-pointer">
                  Create an account
                </span>
              </Link>
            </p> */}
                </form>
              </Form>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SignInForm;
