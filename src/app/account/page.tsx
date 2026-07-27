import type { Metadata } from "next";
import { AccountShell } from "@/components/account/AccountShell";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your Helen Lifestyle profile, orders and wishlist.",
};

export default function AccountPage() {
  return (
    <AccountShell title="Profile">
      <form className="max-w-lg space-y-4">
        <Field label="Full name" defaultValue="Helen Customer" />
        <Field label="Email" type="email" defaultValue="customer@example.com" />
        <Field label="Phone" type="tel" defaultValue="+27 60 000 0000" />
        <Button type="button">Save changes</Button>
        <p className="text-xs text-hl-muted">
          Profile updates are local placeholders until customer accounts are
          connected to a backend.
        </p>
      </form>
    </AccountShell>
  );
}

function Field({
  label,
  type = "text",
  defaultValue,
}: {
  label: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block text-xs">
      <span className="block mb-1.5 tracking-[0.08em] uppercase text-hl-muted">
        {label}
      </span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full border border-hl-border px-3 py-2.5 text-sm outline-none focus:border-hl-black"
      />
    </label>
  );
}
