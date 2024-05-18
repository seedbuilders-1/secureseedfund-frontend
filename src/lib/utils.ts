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
