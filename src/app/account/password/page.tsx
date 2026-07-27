import type { Metadata } from "next";
import { AccountShell } from "@/components/account/AccountShell";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Password",
};

export default function PasswordPage() {
  return (
    <AccountShell title="Password">
      <form className="max-w-md space-y-4">
        <label className="block text-xs">
          <span className="block mb-1.5 tracking-[0.08em] uppercase text-hl-muted">
            Current password
          </span>
          <input
            type="password"
            className="w-full border border-hl-border px-3 py-2.5 text-sm outline-none focus:border-hl-black"
          />
        </label>
        <label className="block text-xs">
          <span className="block mb-1.5 tracking-[0.08em] uppercase text-hl-muted">
            New password
          </span>
          <input
            type="password"
            className="w-full border border-hl-border px-3 py-2.5 text-sm outline-none focus:border-hl-black"
          />
        </label>
        <label className="block text-xs">
          <span className="block mb-1.5 tracking-[0.08em] uppercase text-hl-muted">
            Confirm new password
          </span>
          <input
            type="password"
            className="w-full border border-hl-border px-3 py-2.5 text-sm outline-none focus:border-hl-black"
          />
        </label>
        <Button type="button">Update password</Button>
      </form>
    </AccountShell>
  );
}
