import * as z from "zod";

export const EntityInformationSchema = z.object({
  firstname: z.string().min(1, "Enter first name"),
  lastname: z.string().min(1, "Enter last name"),
  dateofbirth: z.string(),
  phonenumber: z
    .string()
    .min(8, { message: "Phone number should be minimum 8 characters" }),
  country: z.string().min(1, "Enter country"),
  address: z.string().min(1, "Enter address"),
  city: z.string().min(1, "Enter city"),
  postalcode: z.string().min(1, "Enter postal code"),
  companyname: z.string().min(1, "Enter company name"),
});

export type EntityInformationValidation = z.infer<
  typeof EntityInformationSchema
>;
