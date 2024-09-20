"use client";
import { Fragment, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpSchema, SignUpValidation } from "@/lib/validations/auth";
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
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import GetStarted from "../components/GetStarted";

const SignUpPage = () => {
  const { loading, registerUser, Registered } = useUserAuth();
  const form = useForm<SignUpValidation>({
    resolver: zodResolver(SignUpSchema),
  });
  const { toast } = useToast();
  const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [selectedCard, setSelectedCard] = useState<string>("");
    const onSubmit = (values: SignUpValidation) => {
      const { email, firstName, lastName, password } = values;
      registerUser({
        email,
        firstName,
        lastName,
        password,
        accountType: selectedCard,
      });
    };
    useEffect(() => {
      if (Registered) {
        toast({
          variant: "default",
          title: "Congratulations",
          description: "You have succesfully created your account",
        });
        router.push("/auth/sign-in");
      }
    }, [Registered, router, toast]);

    const handleCardClick = (text: string) => {
      setIsModalOpen(false);
      setSelectedCard((prev: string) => (prev = text));
    };

  return (
    <Fragment>
      {isModalOpen && <GetStarted onCardClick={handleCardClick} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="mb-3 grid grid-cols-2 gap-x-2 gap-y-4 w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
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
            Create account
          </Button>
        </form>
      </Form>
    </Fragment>
  );
};

export default SignUpPage;
