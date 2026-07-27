import Link from "next/link";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 md:px-6 py-14 md:py-20">
      <h1 className="font-display text-3xl tracking-tight">{title}</h1>
      <div className="mt-8 space-y-4 text-sm text-hl-muted leading-relaxed">
        {children}
      </div>
      <Link
        href="/"
        className="inline-block mt-10 text-xs tracking-[0.12em] uppercase underline underline-offset-4"
      >
        Back to home
      </Link>
    </div>
  );
}
