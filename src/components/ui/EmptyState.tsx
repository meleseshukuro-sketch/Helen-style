import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 px-6 text-center",
        className
      )}
    >
      <h2 className="font-display text-xl md:text-2xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-md text-sm text-hl-muted leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function LoadingState({ label = "Loading…" }: { label?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-4"
      role="status"
      aria-live="polite"
    >
      <div className="h-8 w-8 border border-hl-border border-t-hl-black rounded-full animate-spin" />
      <p className="text-sm text-hl-muted">{label}</p>
    </div>
  );
}

export function ErrorState({
  title = "Something went wrong",
  description = "Please try again in a moment.",
  action,
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <h2 className="font-display text-xl">{title}</h2>
      <p className="mt-3 max-w-md text-sm text-hl-muted">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
