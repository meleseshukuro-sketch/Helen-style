import Link from "next/link";
import { AccountNav } from "./AccountNav";

export function AccountShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-[11px] tracking-[0.14em] uppercase text-hl-muted mb-2">
            My account
          </p>
          <h1 className="font-display text-3xl tracking-tight">{title}</h1>
        </div>
        <Link
          href="/"
          className="text-xs tracking-[0.1em] uppercase underline underline-offset-4"
        >
          Logout
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12">
        <AccountNav />
        <div>{children}</div>
      </div>
    </div>
  );
}
