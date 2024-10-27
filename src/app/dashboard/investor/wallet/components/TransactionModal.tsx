"use client";

import React from "react";
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
} from "../../../../../components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const transactionSchema = z.object({
  amount: z.number().positive({ message: "Amount must be greater than 0" }),
});

interface TransactionFormData {
  amount: number;
}

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "deposit" | "withdraw" | null;
  onSubmit: (amount: number) => void;
  isLoading: boolean;
  balance?: number;
}

const TransactionModal: React.FC<TransactionModalProps> = ({
  isOpen,
  onClose,
  type,
  onSubmit,
  isLoading,
  balance,
}) => {
  const getTransactionSchema = () => {
    const baseSchema = z.object({
      amount: z
        .number({
          required_error: "Amount is required",
          invalid_type_error: "Amount must be a number",
        })
        .positive({ message: "Amount must be greater than 0" }),
    });

    if (type === "withdraw") {
      return baseSchema.refine((data) => data.amount <= (balance as number), {
        message: `Insufficient balance. Available balance: ${balance}`,
        path: ["amount"],
      });
    }

    return baseSchema;
  };

  const form = useForm<{ amount: number }>({
    resolver: zodResolver(getTransactionSchema()),
    defaultValues: {
      amount: undefined,
    },
    resetOptions: {
      keepDirtyValues: false,
    },
  });

  const handleFormSubmit = (data: TransactionFormData) => {
    onSubmit(data.amount);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-normal text-[1.1rem]">
            {type === "deposit" ? "Deposit Funds" : "Withdraw Funds"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="w-full mt-3">
                  <FormControl>
                    <Input
                      placeholder="Enter Amount"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
                {type === "deposit" ? "Proceed to Pay" : "Withdraw"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionModal;
