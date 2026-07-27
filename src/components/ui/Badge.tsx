import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "new" | "sale" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em]",
        variant === "new" && "bg-hl-black text-white",
        variant === "sale" && "bg-hl-accent text-white",
        variant === "neutral" && "bg-hl-off-white text-hl-muted border border-hl-border",
        className
      )}
    >
      {children}
    </span>
  );
}
