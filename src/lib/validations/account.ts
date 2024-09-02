import * as z from "zod";

export const FounderSchema = z.object({
  image: z.string().min(1, "Image is required"),
  title: z.string().min(1, "Title is required"),
  firstname: z.string().min(1, "First Name is required"),
  lastname: z.string().min(1, "Last Name required"),
  email: z.string().email("Enter a valid email"),
  education: z
    .string()
    .min(1, "Education is required")
    .max(40, "maximum can only be 70 characters"),
  linkedinprofile: z.string().min(1, "LinkedIn Profile is required"),
  phonenumber: z.string().min(1, "Phone Number is required"),
  expereince: z
    .string()
    .min(1, "Experience is required")
    .max(40, "maximum can only be 70 characters"),
});

export const TeamInformationSchema = z.object({
  titleofcofounder: z.string().min(1, "Title of Co-Founder is required"),
  firstnameofcofounder: z
    .string()
    .min(1, "First Name of Co-Founder is required"),
  lastnameofcofounder: z.string().min(1, "Last Name of Co-Founder is required"),
  emailofcofounder: z.string().email("Enter a valid email"),
  educationofcofounder: z
    .string()
    .min(1, "Education of Co-Founder is required")
    .max(40, "maximum can only be 70 characters"),
  linkedinprofileofcofounder: z
    .string()
    .min(1, "LinkedIn Profile of Co-Founder is required"),
  phonenumberofcofounder: z
    .string()
    .min(1, "Phone Number of Co-Founder is required"),

  experienceofcofounder: z
    .string()
    .min(1, "Experience of Co-Founder is needed")
    .max(40, "maximum can only be 70 characters"),
  numberofteammembers: z.string().min(1, "Number of team members is required"),

  // teammembers: z.array(
  //   z.object({
  //     membertitle: z.string().min(1, "Milestone name is required"),
  //     membername: z.string().min(1, "Milestone description is required"),
  //     memberrole: z.string().min(1, "target amount  is required"),
  //   })
  teammembers: z.string().min(1, "Team members is required"),

  executiveprimarilybased: z
    .string()
    .min(1, "Executive Primarily Based is required"),
});

export const CompanyInformationSchema = z.object({
  companyname: z.string().min(1, "Company Name is required"),
  companyaddress: z.string().min(1, "Company Address is required"),
  contactemail: z.string().email("Enter a valid email"),
  companywebsite: z.string().min(1, "Company Website is required"),
  companyphonenumber: z.string().min(1, "Company Phone Number is required"),
  industry: z.string().min(1, "Industry is required"),
  yearofincorporation: z.string().min(1, "Year of Incorporation is required"),
  geographicfocus: z.string().min(1, "Geographic Focus is required"),
  cityofoperation: z.string().min(1, "City of Operation is required"),
  companydescription: z
    .string()
    .min(1, "Comapny Description is required")
    .max(1000, "maximum can only be 1000 characters"),
  companyincorporatedin: z
    .string()
    .min(1, "Company Incorporated in is required"),
  threeorfivepointswhycompanyisagoodinvestment: z
    .string()
    .min(1, "Three points why company is a good investment is required"),
});

export const BusinessInformationSchema = z.object({
  businessstage: z.string().min(1, "Business Stage is required"),
  businessmodel: z.string().min(1, "Business Model is required"),
  buesinessrevenuechannels: z
    .string()
    .min(1, "Business Revenue Channel is required"),
  marketsize: z.string().min(1, "Market size is required"),
  howmuchrevenuegeneratedsinceoperation: z
    .string()
    .min(1, "How much revenue generated since operation is required"),
  customeracquisitioncost: z
    .string()
    .min(1, "Customer Acquisition Cost is required"),
  numberofcurrentusers: z
    .string()
    .min(1, "Number of current users is required"),
  monthlyrecurrringrevenue: z
    .string()
    .min(1, "Monthly Recurring Revenue is required"),
  monthlyrecurringexpense: z
    .string()
    .min(1, "Monthly recurring Expense is reuquired"),
  businessmodeldescription: z
    .string()
    .min(1, "Business Model Description is required"),
});

export const FundingInformationSchema = z.object({
  // Have you received funding from an Angel Investor or Venture Capitalits?
  fundingreceivedfromangelinvestororventurecapitalists: z.string(),
  // if yes, company post money valuation
  companypostmoneyvaluation: z
    .string()
    .min(1, "Company post money valuation is required"),
  rationaleforcompanyvaluation: z
    .string()
    .min(1, "Rationale for company valuation is required"),
  howmuchrasisedpreviously: z
    .string()
    .min(1, "How much has been raised previously is required"),
  describefundinghistorysinceinception: z
    .string()
    .min(1, "Describe your funding history since inception is required"),
  useoffunds: z.string().min(1, "Use of Funds is required"),
  haveyoucollectedanyloansorcredit: z
    .string()
    .min(1, "Have you collected any loans or Credit is required"),
  ifyesstateyourcredithistorywithtenoramountinterestrateandcreditor: z
    .string()
    .min(
      1,
      "If yes, state your credit history with tenor, amount, interest rate and creditor is required"
    ),
  partofincubatororacceleratorprogram: z
    .string()
    .min(1, "Part of Incubator or Accelerator Program is required"),
  ifyeswhichprogram: z.string().min(1, "If yes, which program is it?"),
  whichinvestmentareyouseeking: z
    .string()
    .min(1, "Which Investment are you seeking?"),
  whenareyoulookingatraise: z.string().min(1, "When are you looking at raise?"),
  uploadfinancialstatement: z
    .string()
    .min(1, "Financial Statement is required"),
  howdidyouhearaboutus: z.string(),
  duedilligence: z.string().min(1, "Due Diligence is required"),
});

export type FounderValidation = z.infer<typeof FounderSchema>;
export type TeamInformationValidation = z.infer<typeof TeamInformationSchema>;
export type CompanyInformationValidation = z.infer<
  typeof CompanyInformationSchema
>;
export type BusinessInformationValidation = z.infer<
  typeof BusinessInformationSchema
>;
export type FundingInformationValidation = z.infer<
  typeof FundingInformationSchema
>;
