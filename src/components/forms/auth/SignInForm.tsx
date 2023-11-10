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

const SignInForm = () => {
  const form = useForm<SignInValidation>({
    resolver: zodResolver(SignInSchema),
  });
  const { loginUser, loading } = useUserAuth();

  const onSubmit = (values: SignInValidation) => {
    const { email, password } = values;
    loginUser({
      email,
      password,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-6 flex flex-col space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
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
        </div>
        <Button type="submit" className="w-full" loading={loading}>
          Sign in
        </Button>
        <p className="text-[.8rem] text-center text-slate-700 leading-[1.25rem] mt-6">
          Don’t have an account?{" "}
          <Link href="/auth/sign-up">
            <span className="font-[500] text-primary hover:underline cursor-pointer">
              Create an account
            </span>
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignInForm;
