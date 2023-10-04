import * as z from "zod";

export const AngelInvestorProfileDetailsSchema = z
  .object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email(),
    country: z.string(),
    phoneNumber: z.string(),
    password: z
      .string()
      .min(8, { message: "Password should be minimum 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type AngelInvestorProfileDetailsValidation = z.infer<
  typeof AngelInvestorProfileDetailsSchema
>;
