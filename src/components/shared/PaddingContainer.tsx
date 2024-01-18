import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: ReactNode;
}

const PaddingContainer = ({ children, className }: Props) => {
  return <div className={cn("px-10", className)}>{children}</div>;
};

export default PaddingContainer;
