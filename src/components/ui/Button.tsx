import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-hl-black text-white hover:bg-neutral-800 focus-visible:outline-hl-black",
  secondary:
    "bg-white text-hl-black border border-hl-black hover:bg-hl-off-white focus-visible:outline-hl-black",
  ghost:
    "bg-transparent text-hl-black hover:bg-hl-off-white focus-visible:outline-hl-black",
  accent:
    "bg-hl-accent text-white hover:bg-red-800 focus-visible:outline-hl-accent",
  outline:
    "bg-transparent text-hl-black border border-hl-border hover:border-hl-black focus-visible:outline-hl-black",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-wide",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-sm tracking-[0.12em] uppercase",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
