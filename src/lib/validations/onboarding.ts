import * as z from "zod";

export const EntityInformationSchema = z.object({
  dateofbirth: z.string(),
  phonenumber: z
    .string()
    .min(8, { message: "Phone number should be minimum 8 characters" }),
  country: z.string().min(1, "Enter country"),
  city: z.string().min(1, "Enter city"),
  address: z.string().min(1, "Enter address"),
  postalcode: z.string().min(1, "Enter postal code"),
  companyname: z.string().optional(),
});

export type EntityInformationValidation = z.infer<
  typeof EntityInformationSchema
>;
