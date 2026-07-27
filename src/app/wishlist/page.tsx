"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export default function WishlistPage() {
  const { ids, clear } = useWishlist();
  const wishProducts = products.filter((p) => ids.includes(p.id));

  if (wishProducts.length === 0) {
    return (
      <EmptyState
        title="Your wishlist is empty"
        description="Tap the heart on any product to save it for later."
        action={
          <Link href="/women">
            <Button>Browse Women</Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8 py-10 md:py-16">
      <div className="flex items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="font-display text-3xl md:text-4xl tracking-tight">
            Wishlist
          </h1>
          <p className="mt-2 text-sm text-hl-muted">
            {wishProducts.length} saved item{wishProducts.length === 1 ? "" : "s"}
          </p>
        </div>
        <button
          type="button"
          onClick={clear}
          className="text-xs tracking-[0.1em] uppercase underline underline-offset-4 text-hl-muted hover:text-hl-black"
        >
          Clear all
        </button>
      </div>
      <ProductGrid products={wishProducts} />
    </div>
  );
}
