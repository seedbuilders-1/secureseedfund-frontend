import * as z from "zod";

export const BasicSchema = z.object({
  title: z.string(),
  startdate: z.string(),
  enddate: z.string(),
});

export type BasicsValidation = z.infer<typeof BasicSchema>;

export const MilestonSchema = z.object({
  milestones: z.array(
    z.object({
      milestoneTitle: z.string().min(1, "Milestone name is required"),
      milestoneDescription: z
        .string()
        .min(1, "Milestone description is required")
        .max(40, "maximum can only be 40 characters"),
      targetAmount: z.string().min(1, "target amount  is required"),
      date: z.string().min(1, "Milestone date is required"),
    })
  ),
});

export const CampaignSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    startdate: z.string().min(1, "Start Date is required"),
    enddate: z.string().min(1, "End Date is required"),
    fundinggoal: z.string().min(1, "Funding Goal is required"),
    minimum: z.string().min(1, "Minimum Value an investor can invest"),
  })
  .refine((data) => new Date(data.enddate) > new Date(data.startdate), {
    message: "End date must be greater than start date",
    path: ["enddate"],
  });
export type MilestoneValidation = z.infer<typeof MilestonSchema>;

export const StartupInfoSchema = z.object({
  companyType: z.string().min(1, "company type is required"),
  cofounders: z.string().min(1, " required"),
  teamMembers: z.string().min(1, "required"),
  about: z
    .string()
    .min(1, "required")
    .max(40, "maximum can only be 70 characters"),
});
export type CampaignValidation = z.infer<typeof CampaignSchema>;
export type StartupInfoValidation = z.infer<typeof StartupInfoSchema>;
