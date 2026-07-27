"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { storeInfo } from "@/data/store";

type CheckoutMode = "guest" | "login";
type Fulfillment = "delivery" | "collection";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [mode, setMode] = useState<CheckoutMode>("guest");
  const [fulfillment, setFulfillment] = useState<Fulfillment>("collection");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (items.length === 0) {
    return (
      <EmptyState
        title="Nothing to checkout"
        description="Your bag is empty. Add products before checking out."
        action={
          <Link href="/">
            <Button>Browse store</Button>
          </Link>
        }
      />
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      // Placeholder payment / order flow for future backend integration
      await new Promise((r) => setTimeout(r, 900));
      clearCart();
      router.push("/checkout/confirmation");
    } catch {
      setError("We could not place your order. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-16">
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">
        Checkout
      </h1>
      <p className="mt-2 text-sm text-hl-muted">
        Secure checkout interface prepared for future online ordering.
      </p>

      <div className="mt-6 inline-flex border border-hl-border">
        <button
          type="button"
          onClick={() => setMode("guest")}
          className={`px-4 py-2 text-xs tracking-[0.1em] uppercase ${
            mode === "guest" ? "bg-hl-black text-white" : "hover:bg-hl-off-white"
          }`}
        >
          Guest checkout
        </button>
        <button
          type="button"
          onClick={() => setMode("login")}
          className={`px-4 py-2 text-xs tracking-[0.1em] uppercase ${
            mode === "login" ? "bg-hl-black text-white" : "hover:bg-hl-off-white"
          }`}
        >
          Customer login
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        <div className="lg:col-span-2 space-y-8">
          {mode === "login" && (
            <section className="space-y-4 border border-hl-border p-5">
              <h2 className="font-display text-lg">Sign in</h2>
              <Field label="Email" name="loginEmail" type="email" required />
              <Field label="Password" name="password" type="password" required />
              <p className="text-xs text-hl-muted">
                Account login is a frontend placeholder for future authentication.
              </p>
            </section>
          )}

          <section className="space-y-4">
            <h2 className="font-display text-lg">Contact details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="First name" name="firstName" required />
              <Field label="Last name" name="lastName" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg">Fulfilment</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex items-center gap-2 border border-hl-border px-4 py-3 cursor-pointer flex-1">
                <input
                  type="radio"
                  name="fulfillment"
                  checked={fulfillment === "collection"}
                  onChange={() => setFulfillment("collection")}
                />
                <span className="text-sm">Collect in store</span>
              </label>
              <label className="flex items-center gap-2 border border-hl-border px-4 py-3 cursor-pointer flex-1">
                <input
                  type="radio"
                  name="fulfillment"
                  checked={fulfillment === "delivery"}
                  onChange={() => setFulfillment("delivery")}
                />
                <span className="text-sm">Delivery</span>
              </label>
            </div>

            {fulfillment === "collection" ? (
              <div className="border border-hl-border p-4 text-sm text-hl-muted leading-relaxed">
                Collect from {storeInfo.locationName},{" "}
                {storeInfo.addressLines.join(", ")}.
              </div>
            ) : (
              <div className="space-y-4">
                <Field label="Street address" name="address" required />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Suburb / City" name="city" required />
                  <Field label="Postal code" name="postal" required />
                </div>
                <Field label="Province" name="province" defaultValue="Limpopo" required />
              </div>
            )}
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg">Payment</h2>
            <p className="text-sm text-hl-muted">
              Placeholder payment methods for development. Connect a payment
              provider before going live.
            </p>
            <div className="space-y-2">
              {["Card (placeholder)", "EFT (placeholder)", "Pay on collection"].map(
                (method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 border border-hl-border px-4 py-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked={method.startsWith("Pay")}
                      required
                    />
                    <span className="text-sm">{method}</span>
                  </label>
                )
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-60">
              <Field label="Card number" name="card" placeholder="•••• •••• •••• ••••" />
              <Field label="Expiry" name="expiry" placeholder="MM/YY" />
            </div>
          </section>

          {error && (
            <p className="text-sm text-hl-accent" role="alert">
              {error}
            </p>
          )}
        </div>

        <aside className="border border-hl-border p-6 h-fit sticky top-28">
          <h2 className="font-display text-lg">Order summary</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.size}-${item.colour}`}
                className="flex justify-between gap-3"
              >
                <span className="text-hl-muted">
                  {item.name} × {item.quantity}
                </span>
                <span>
                  {formatPrice((item.salePrice ?? item.price) * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-hl-border pt-3 font-medium text-sm">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <Button
            type="submit"
            fullWidth
            size="lg"
            className="mt-6"
            disabled={submitting}
          >
            {submitting ? "Placing order…" : "Place order"}
          </Button>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block text-xs">
      <span className="block mb-1.5 tracking-[0.08em] uppercase text-hl-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full border border-hl-border px-3 py-2.5 text-sm outline-none focus:border-hl-black bg-white"
      />
    </label>
  );
}
