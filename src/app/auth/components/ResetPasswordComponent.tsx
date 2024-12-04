"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRecoverPasswordMutation } from "@/services/auth";

const resetPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});
type ResetPasswordValidation = z.infer<typeof resetPasswordSchema>;
interface ResetPasswordFormData {
  email: string;
}

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const form = useForm<ResetPasswordValidation>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const [resetPassword, { isLoading, isSuccess }] =
    useRecoverPasswordMutation();
  const handleFormSubmit = (data: ResetPasswordFormData) => {
    resetPassword({
      email: data.email,
    });
    form.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-normal text-[1.1rem]">
            Reset Password
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-9">
            Enter your email and we'll send you a link to reset your password
          </p>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-10 mt-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                loading={isLoading}
                className="rounded-md w-full"
              >
                Send Reset Link
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordModal;
