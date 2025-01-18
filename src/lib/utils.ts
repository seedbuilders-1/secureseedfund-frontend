import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useStartupIdUrl = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const startupIdIndex = pathParts.indexOf("startup") + 1;
  return pathParts[startupIdIndex] || "";
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const industryList = [
  "Aerospace",
  "Agriculture",
  "Business Management",
  "Chemistry, Pharma and Biotech",
  "Construction and real estate",
  "Consulting",
  "E-government",
  "Education",
  "Energy",
  "Environment and Resources",
  "Fairs and Events",
  "Finance",
  "Food and consumer goods",
  "Gaming",
  "Health and Machine",
  "Industry",
  "Information and communication technology ",
  "Insurance",
  "Legal",
  "Logistics",
  "Media and creative industries",
  "Mobility",
  "New Works",
  "Retail and e commerce",
  "Security and defense",
  "Smart city",
  "Social and culture",
  "Sports",
  "Textile industry and fashion",
  "Travel",
];

export const listOFIndustries = [
  { value: "Aerospace", label: "Aerospace" },
  { value: "Agriculture", label: "Agriculture" },
  { value: "Business Management", label: "Business Management" },
  {
    value: "Chemistry, Pharma and Biotech",
    label: "Chemistry, Pharma and Biotech",
  },
  {
    value: "Construction and real estate",
    label: "Construction and real estate",
  },
  { value: "Consulting", label: "Consulting" },
  { value: "E-government", label: "E-government" },
  { value: "Education", label: "Education" },
  { value: "Energy", label: "Energy" },
  { value: "Environment and Resources", label: "Environment and Resources" },
  { value: "Fairs and Events", label: "Fairs and Events" },
  { value: "Finance", label: "Finance" },
  { value: "Food and consumer goods", label: "Food and consumer goods" },
  { value: "Gaming", label: "Gaming" },
  { value: "Health and Machine", label: "Health and Machine" },
  { value: "Industry", label: "Industry" },
  {
    value: "Information and communication technology",
    label: "Information and communication technology",
  },
  { value: "Insurance", label: "Insurance" },
  { value: "Legal", label: "Legal" },
  { value: "Logistics", label: "Logistics" },
  {
    value: "Media and creative industries",
    label: "Media and creative industries",
  },
  { value: "Mobility", label: "Mobility" },
  { value: "New Works", label: "New Works" },
  { value: "Retail and e commerce", label: "Retail and e commerce" },
  { value: "Security and defense", label: "Security and defense" },
  { value: "Smart city", label: "Smart city" },
  { value: "Social and culture", label: "Social and culture" },
  { value: "Sports", label: "Sports" },
  {
    value: "Textile industry and fashion",
    label: "Textile industry and fashion",
  },
  { value: "Travel", label: "Travel" },
];

export const fundingTypes = [
  { type: "Equity", value: "EQUITY", icon: "/equity.svg" },
  { type: "Debt", value: "DEBT", icon: "/debt.svg" },
  { type: "Reward", value: "REWARD", icon: "/reward.svg" },
  { type: "Revenue Share", value: "REVENUE_SHARE", icon: "/revenue.svg" },
  { type: "Grants", value: "ROI", icon: "/grant.svg" },
  { type: "ROI", value: "PARTNERSHIP", icon: "/partnership.svg" },
  { type: "SAFE", value: "SAFE", icon: "/safe.svg" },
  { type: "Others", value: "OTHERS", icon: "/mentorship.svg" },
];
