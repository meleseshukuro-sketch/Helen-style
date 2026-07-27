import type { Metadata } from "next";
import Link from "next/link";
import { AccountShell } from "@/components/account/AccountShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <AccountShell title="Orders">
      <EmptyState
        title="No orders yet"
        description="When you place an order, it will appear here."
        action={
          <Link href="/">
            <Button variant="secondary">Start shopping</Button>
          </Link>
        }
        className="py-8 px-0"
      />
    </AccountShell>
  );
}
