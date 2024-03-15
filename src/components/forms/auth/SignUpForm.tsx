"use client";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpSchema, SignUpValidation } from "@/lib/validations/auth";
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
import { useToast } from "@/components/ui/use-toast";

const SignUpForm = () => {
  const { loading, registerUser, Registered } = useUserAuth();
  const form = useForm<SignUpValidation>({
    resolver: zodResolver(SignUpSchema),
  });
  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = (values: SignUpValidation) => {
    const { email, firstName, lastName, password } = values;
    registerUser({
      email,
      firstName,
      lastName,
      password,
      role: "USER",
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-3 grid grid-cols-2 gap-x-2 gap-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. Jane" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. Doe" {...field} />
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
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. jane@example.com" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    {...field}
                  />
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
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter Confirm Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full rounded-md" loading={loading}>
          Create account
        </Button>
        <p className="text-[.8rem] text-center text-slate-700 leading-[1.25rem] mt-6">
          Already have an account?{" "}
          <Link href="/auth/sign-in">
            <span className="font-[500] text-primaryMain hover:underline cursor-pointer">
              Sign in
            </span>
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignUpForm;
