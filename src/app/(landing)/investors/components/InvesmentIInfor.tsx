"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Linkdein from "@/assets/icons/LinkedInIcon";
import google from "@/assets/iconspng/Googleicon.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InvestmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
}

const InvestmentInfo = () => {
  const methods = useForm<InvestmentFormData>();

  const onSubmit = (data: InvestmentFormData) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <FormProvider {...methods}>
      <section className="mt-[6rem] px-[2rem]">
        <h1 className="font-medium text-[1.5rem] md:text-4xl text-center">
          <span>
            Securely invest In{" "}
            <span className="text-[#0BA53C] text-[1.5rem] md:text-4xl">
              Startup <br className="hidden md:block" />{" "}
            </span>{" "}
            that you can trust
          </span>
        </h1>
        <p className="text-[1rem] md:text-[1.5rem] text-[#2B2B2B] text-center mt-[1rem] hidden md:block">
          Join hundreds of investors funding the biggest startups globally.
        </p>

        <div className="mt-[2rem] flex flex-col items-center md:flex-row-reverse md:gap-[2rem] md:justify-center ">
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="mb-3 flex flex-col w-full max-w-[550px]"
          >
            <FormField
              name="firstName"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#2B2B2B]"
                  >
                    First Name
                  </label>
                  <FormControl>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      {...field}
                      style={{
                        border: "0.86px solid #D0D5DD",
                        borderRadius: "4px",
                        padding: "0.8rem",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#2B2B2B]"
                  >
                    Last Name
                  </label>
                  <FormControl>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      {...field}
                      style={{
                        border: "0.86px solid #D0D5DD",
                        borderRadius: "4px",
                        padding: "0.8rem",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#2B2B2B]"
                  >
                    Email Address
                  </label>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="Email Address"
                      {...field}
                      style={{
                        border: "0.86px solid #D0D5DD",
                        borderRadius: "4px",
                        padding: "0.8rem",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="userType"
              render={({ field }) => (
                <FormItem className="py-2 w-full lg:w-[50%]">
                  <FormLabel>User Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full capitalize">
                        <SelectValue placeholder="Select user type" />
                      </SelectTrigger>
                      <SelectContent className="w-full bg-white">
                        <SelectGroup>
                          {["startup", "investor", "institution"].map(
                            (opt: string, idx: number) => (
                              <SelectItem
                                key={idx}
                                className="capitalize"
                                value={opt}
                              >
                                {opt}
                              </SelectItem>
                            )
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#2B2B2B]"
                  >
                    Password
                  </label>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      {...field}
                      style={{
                        border: "0.86px solid #D0D5DD",
                        borderRadius: "4px",
                        padding: "0.8rem",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-[#2B2B2B]"
                  >
                    Confirm Password
                  </label>
                  <FormControl>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                      style={{
                        border: "0.86px solid #D0D5DD",
                        borderRadius: "4px",
                        padding: "0.8rem",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4">
              <Button
                type="submit"
                className="w-full bg-[#241A3F] hover:bg-[#241A3F]/90"
              >
                Sign Up
              </Button>
            </div>
          </form>

          <div className="flex flex-col w-full max-w-[550px] md:mt-[-17rem] ">
            <div className="mt-[3rem]">
              <button
                type="button"
                className="flex gap-[0.5rem] items-center justify-center w-full border border-[#D0D5DD] rounded-md px-[1.5rem] py-[1.1rem] bg-white hover:bg-gray-100 text-gray-700 text-left"
                style={{
                  border: "0.86px solid #D0D5DD",
                }}
              >
                <Image src={google} alt="" />
                Continue with Google
              </button>
            </div>

            <div className="mt-[1rem]">
              <button
                type="button"
                className="flex gap-[0.5rem] items-center justify-center w-full border border-[#D0D5DD] rounded-md px-[1.5rem] py-[1.1rem] bg-white hover:bg-gray-100 text-gray-700"
              >
                <Linkdein />
                Continue with LinkedIn
              </button>
            </div>

            <div className="mt-[1rem]">
              <button
                type="button"
                className="flex gap-[0.5rem] items-center justify-center w-full border border-[#D0D5DD] rounded-md px-[1.5rem] py-[1.1rem] bg-[#000] hover:bg-gray-100 text-white"
              >
                {/* <Image src={apple} alt="" /> */}
                Continue with Apple
              </button>
            </div>
          </div>
        </div>
      </section>
    </FormProvider>
  );
};

export default InvestmentInfo;
