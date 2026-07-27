"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Heart } from "lucide-react";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, discountPercent } from "@/lib/utils";
import { useWishlist } from "@/context/WishlistContext";
import { QuickViewModal } from "./QuickViewModal";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isWishlisted, toggle } = useWishlist();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const wished = isWishlisted(product.id);
  const price = product.salePrice ?? product.price;

  return (
    <>
      <article className="group relative">
        <div className="relative aspect-[3/4] bg-hl-off-white overflow-hidden">
          <Link href={`/product/${product.slug}`} className="block h-full w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          </Link>

          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.isNew && <Badge variant="new">New</Badge>}
            {product.salePrice != null && (
              <Badge variant="sale">
                -{discountPercent(product.price, product.salePrice)}%
              </Badge>
            )}
          </div>

          <button
            type="button"
            onClick={() => toggle(product.id)}
            className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white transition-colors"
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`h-4 w-4 ${wished ? "fill-hl-accent text-hl-accent" : ""}`}
            />
          </button>

          <button
            type="button"
            onClick={() => setQuickViewOpen(true)}
            className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-center gap-2 bg-white/95 py-2.5 text-[11px] tracking-[0.12em] uppercase opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="h-3.5 w-3.5" />
            Quick View
          </button>
        </div>

        <div className="mt-3 space-y-1">
          <p className="text-[10px] tracking-[0.12em] uppercase text-hl-muted">
            {product.category}
          </p>
          <Link
            href={`/product/${product.slug}`}
            className="block text-sm leading-snug hover:underline"
          >
            {product.name}
          </Link>
          <div className="flex items-baseline gap-2 pt-0.5">
            <span className="text-sm font-medium">{formatPrice(price)}</span>
            {product.salePrice != null && (
              <span className="text-xs text-hl-muted line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          <div className="flex gap-1.5 pt-1.5" aria-label="Available colours">
            {product.colours.slice(0, 5).map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="h-3 w-3 rounded-full border border-hl-border"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      </article>

      {quickViewOpen && (
        <QuickViewModal
          product={product}
          onClose={() => setQuickViewOpen(false)}
        />
      )}
    </>
  );
}
