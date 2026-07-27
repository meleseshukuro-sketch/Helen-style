import type { Metadata } from "next";
import { AccountShell } from "@/components/account/AccountShell";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Saved Addresses",
};

export default function AddressesPage() {
  return (
    <AccountShell title="Saved addresses">
      <div className="border border-hl-border p-5 max-w-md">
        <p className="text-sm font-medium">Home</p>
        <p className="mt-2 text-sm text-hl-muted leading-relaxed">
          12 Example Street
          <br />
          Mankweng, Polokwane
          <br />
          Limpopo, 0727
        </p>
        <div className="mt-4 flex gap-3">
          <Button type="button" size="sm" variant="outline">
            Edit
          </Button>
          <Button type="button" size="sm" variant="ghost">
            Remove
          </Button>
        </div>
      </div>
      <Button type="button" className="mt-6" variant="secondary">
        Add new address
      </Button>
    </AccountShell>
  );
}
