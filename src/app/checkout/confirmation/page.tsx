import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Thank you for your Helen Lifestyle order.",
};

export default function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 md:py-28 text-center">
      <p className="text-[11px] tracking-[0.16em] uppercase text-hl-accent mb-3">
        Thank you
      </p>
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">
        Order confirmed
      </h1>
      <p className="mt-4 text-sm text-hl-muted leading-relaxed">
        This is a demonstration confirmation page. When online ordering goes
        live, customers will receive order details and tracking information
        here.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/">
          <Button>Continue shopping</Button>
        </Link>
        <Link href="/account/orders">
          <Button variant="secondary">View orders</Button>
        </Link>
      </div>
    </div>
  );
}
