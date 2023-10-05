import * as z from "zod";

// Angel Investor
export const AngelInvestorProfileDetailsSchema = z
  .object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email(),
    country: z
      .object({
        code: z.string(), // Validate code as string
        label: z.string(), // Validate label as string
        phone: z.string(), // Validate phone as string
        suggested: z.boolean().optional(), // Validate suggested as boolean (optional)
      })
      .refine(
        (country) => {
          // Custom validation function
          if (!country || !country.code || !country.label || !country.phone) {
            return "Country code, label, and phone are required.";
          }
          return true;
        },
        {
          message: "Invalid country structure",
        }
      ),
    phoneNumber: z
      .string()
      .min(10, { message: "Phone number must be a minimum of 10 characters" }),
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

export const InvestmentPreferenceSchema = z.object({
  sectorsOfInterest: z.array(z.string()),
  expectedROI: z.array(z.string()),
  regions: z.array(z.string()),
  maturityStages: z.array(z.string()),
  riskTolerance: z.array(z.string()),
});

export type InvestmentPreferenceValidation = z.infer<
  typeof InvestmentPreferenceSchema
>;

// Venture Capitalist
export const VentureCapitalistProfileDetailsSchema = z
  .object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email(),
    country: z
      .object({
        code: z.string(), // Validate code as string
        label: z.string(), // Validate label as string
        phone: z.string(), // Validate phone as string
        suggested: z.boolean().optional(), // Validate suggested as boolean (optional)
      })
      .refine(
        (country) => {
          // Custom validation function
          if (!country || !country.code || !country.label || !country.phone) {
            return "Country code, label, and phone are required.";
          }
          return true;
        },
        {
          message: "Invalid country structure",
        }
      ),
    phoneNumber: z
      .string()
      .min(10, { message: "Phone number must be a minimum of 10 characters" }),
    password: z
      .string()
      .min(8, { message: "Password should be minimum 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type VentureCapitalistProfileDetailsValidation = z.infer<
  typeof VentureCapitalistProfileDetailsSchema
>;

export const VentureCapitalistInvestmentPreferenceSchema = z.object({
  sectorsOfInterest: z.array(z.string()),
  typicalInvestmentSize: z.array(z.string()),
  regions: z.array(z.string()),
  maturityStages: z.array(z.string()),
  expectedIRR: z.array(z.string()),
});

export type VentureCapitalistInvestmentPreferenceValidation = z.infer<
  typeof VentureCapitalistInvestmentPreferenceSchema
>;
