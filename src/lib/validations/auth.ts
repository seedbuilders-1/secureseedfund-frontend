import * as z from "zod";

export const SignUpSchema = z
  .object({
    firstName: z.string().min(1, "Enter first name"),
    lastName: z.string().min(1, "Enter last name"),
    email: z.string().email(),
    // phone: z.string(),
    password: z
      .string()
      .min(8, { message: "Password should be minimum 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpValidation = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Please enter a password"),
});

export type SignInValidation = z.infer<typeof SignInSchema>;
