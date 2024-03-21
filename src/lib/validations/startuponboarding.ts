import * as z from "zod";

export const CompanyInformationSchema = z.object({
  city: z.string().min(1, "Enter city"),
  address: z.string().min(1, "Enter address"),
  postalcode: z.string().min(1, "Enter postal code"),
  companyname: z.string().min(1, "Enter company name"),
  companyEmail: z.string().min(1, "Enter company email"),
  country: z.string().min(1, "Select a country"),
  companyPhone: z.string().min(1, "Enter company name"),
});

export type CompanyInformationValidation = z.infer<
  typeof CompanyInformationSchema
>;
