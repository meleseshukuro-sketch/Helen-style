import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display font-semibold tracking-[0.08em] uppercase text-hl-black hover:opacity-70 transition-opacity",
        size === "sm" && "text-sm md:text-base",
        size === "md" && "text-base md:text-lg",
        size === "lg" && "text-xl md:text-2xl",
        className
      )}
      aria-label="Helen Lifestyle home"
    >
      Helen Lifestyle
    </Link>
  );
}
