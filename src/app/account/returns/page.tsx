import type { Metadata } from "next";
import Link from "next/link";
import { AccountShell } from "@/components/account/AccountShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Returns",
};

export default function AccountReturnsPage() {
  return (
    <AccountShell title="Returns">
      <EmptyState
        title="No returns in progress"
        description="Need to return an item? Visit us in store or review our returns policy."
        action={
          <Link href="/returns">
            <Button variant="secondary">Returns policy</Button>
          </Link>
        }
        className="py-8 px-0"
      />
    </AccountShell>
  );
}
