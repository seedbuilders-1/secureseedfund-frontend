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

export const listOFIndustries = [
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
