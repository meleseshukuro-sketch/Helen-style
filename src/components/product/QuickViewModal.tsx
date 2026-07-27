"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import type { Product } from "@/types";
import { Button } from "@/components/ui/Button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const [size, setSize] = useState(product.sizes[0]);
  const [colour, setColour] = useState(product.colours[0]?.name ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function handleAdd() {
    addItem(product, { size, colour, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-0 md:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close quick view"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Quick view: ${product.name}`}
        className="relative bg-white w-full max-w-3xl max-h-[92vh] overflow-y-auto animate-slide-up md:grid md:grid-cols-2"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[420px] bg-hl-off-white">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-6 md:p-8 space-y-5">
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-hl-muted">
              {product.category}
            </p>
            <h2 className="font-display text-xl mt-1">{product.name}</h2>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-base font-medium">
                {formatPrice(product.salePrice ?? product.price)}
              </span>
              {product.salePrice != null && (
                <span className="text-sm text-hl-muted line-through">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.12em] uppercase mb-2">Colour</p>
            <div className="flex flex-wrap gap-2">
              {product.colours.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColour(c.name)}
                  className={`h-8 w-8 rounded-full border-2 ${
                    colour === c.name ? "border-hl-black" : "border-transparent"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.12em] uppercase mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`min-w-10 px-3 py-2 text-xs border ${
                    size === s
                      ? "border-hl-black bg-hl-black text-white"
                      : "border-hl-border hover:border-hl-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <QuantitySelector value={qty} onChange={setQty} />

          <div className="flex flex-col gap-2">
            <Button onClick={handleAdd} fullWidth>
              {added ? "Added to bag" : "Add to Bag"}
            </Button>
            <Button
              variant="secondary"
              fullWidth
              onClick={() => toggle(product.id)}
            >
              {isWishlisted(product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </Button>
            <Link
              href={`/product/${product.slug}`}
              onClick={onClose}
              className="text-center text-xs tracking-[0.1em] uppercase underline underline-offset-4 pt-2"
            >
              View full details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
