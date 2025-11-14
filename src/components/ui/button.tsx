import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum/80 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-gradient-to-r from-[#2D1E2F] via-[#3A2143] to-[#4E2A4F] text-white shadow-[0_18px_38px_rgba(78,42,79,0.45)] hover:shadow-[0_24px_48px_rgba(78,42,79,0.55)] hover:brightness-110 active:scale-95",
        secondary:
          "border border-white/25 bg-gradient-to-r from-[#2D1E2F]/80 to-[#4E2A4F]/80 text-white shadow-[0_12px_30px_rgba(45,30,47,0.35)] hover:border-white/45 hover:shadow-[0_20px_40px_rgba(78,42,79,0.5)] hover:brightness-110 active:scale-95",
        ghost:
          "bg-transparent text-white/75 border-transparent hover:text-white",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-3",
        lg: "text-lg px-7 py-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={twMerge(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

