import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-normal ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-slate-50 hover:bg-primary/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-slate-100 hover:text-slate-900",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 border-slate-100",
        ghost: "hover:bg-slate-100 hover:text-slate-900 ",
        link: "text-slate-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const showLoader = loading && !asChild;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {showLoader ? <Loader2 className="mr-2 animate-spin" /> : null}
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
