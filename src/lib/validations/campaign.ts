import * as z from "zod";

export const BasicSchema = z.object({
  title: z.string(),
  startdate: z.string(),
  enddate: z.string(),
});

export type BasicsValidation = z.infer<
  typeof BasicSchema
>;

export const MilestonSchema = z.object({
  title:z.string(),
  description:z.string(),
  startdate: z.string(),
  enddate: z.string(),
  fundinggoal:z.string(),
  milestones: z.array(
    z.object({
      milestoneTitle:   z.string().min(1, 'Milestone name is required'),
      milestoneDescription:z.string().min(1, 'Milestone description is required').max(40, 'maximum can only be 40 characters'),
      targetAmount: z.string().min(1, 'target amount  is required'),
      date:z.string().min(1, 'Milestone date is required'),
    })
  ),

})
export type MilestoneValidation = z.infer<
  typeof MilestonSchema
>;

export const StartupInfoSchema = z.object({
 
      companyType: z.string().min(1, 'company type is required'),
      cofounders: z.string().min(1, ' required'),
      teamMembers:z.string().min(1, 'required'),
      about:z.string().min(1, 'required').max(40, 'maximum can only be 70 characters'),
})
export type StartupInfoValidation = z.infer<
  typeof StartupInfoSchema
>;

