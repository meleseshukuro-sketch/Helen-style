"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

export default function BagPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <EmptyState
        title="Your bag is empty"
        description="Browse our departments and add something you love."
        action={
          <Link href="/women">
            <Button>Start shopping</Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-16">
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">
        Shopping Bag
      </h1>
      <p className="mt-2 text-sm text-hl-muted">
        {items.reduce((s, i) => s + i.quantity, 0)} item
        {items.length === 1 ? "" : "s"}
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <ul className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <li
              key={`${item.productId}-${item.size}-${item.colour}`}
              className="flex gap-4 border-b border-hl-border pb-6"
            >
              <Link
                href={`/product/${item.slug}`}
                className="relative h-28 w-20 bg-hl-off-white shrink-0 overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-3">
                  <div>
                    <Link
                      href={`/product/${item.slug}`}
                      className="text-sm font-medium hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-hl-muted mt-1">
                      Size: {item.size} · Colour: {item.colour}
                    </p>
                  </div>
                  <p className="text-sm font-medium shrink-0">
                    {formatPrice((item.salePrice ?? item.price) * item.quantity)}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(q) =>
                      updateQuantity(item.productId, item.size, item.colour, q)
                    }
                  />
                  <button
                    type="button"
                    onClick={() =>
                      removeItem(item.productId, item.size, item.colour)
                    }
                    className="inline-flex items-center gap-1.5 text-xs text-hl-muted hover:text-hl-accent"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="border border-hl-border p-6 h-fit sticky top-28">
          <h2 className="font-display text-lg">Order summary</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-hl-muted">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-hl-muted">Estimated delivery</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between border-t border-hl-border pt-3 font-medium">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
          </div>
          <Link href="/checkout" className="block mt-6">
            <Button fullWidth size="lg">
              Checkout
            </Button>
          </Link>
          <Link
            href="/women"
            className="block mt-4 text-center text-xs tracking-[0.1em] uppercase underline underline-offset-4"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
