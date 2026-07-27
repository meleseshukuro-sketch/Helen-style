"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { ProductGrid } from "@/components/product/ProductGrid";
import { formatPrice, discountPercent } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { getRelatedProducts } from "@/data/products";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(product.sizes[0]);
  const [colour, setColour] = useState(product.colours[0]?.name ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const related = getRelatedProducts(product);

  const stockLabel =
    product.stockStatus === "in_stock"
      ? "In stock"
      : product.stockStatus === "low_stock"
        ? "Low stock"
        : "Out of stock";

  function handleAdd() {
    if (product.stockStatus === "out_of_stock") return;
    addItem(product, { size, colour, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        setActiveImage((i) => (i + 1) % product.images.length);
      } else {
        setActiveImage(
          (i) => (i - 1 + product.images.length) % product.images.length
        );
      }
    }
    touchStartX.current = null;
  }

  return (
    <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <nav className="text-xs text-hl-muted mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-hl-black">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/${product.department}`} className="hover:text-hl-black capitalize">
          {product.department.replace(/-/g, " ")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-hl-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        {/* Gallery */}
        <div>
          <div
            className="relative aspect-[3/4] bg-hl-off-white overflow-hidden cursor-zoom-in"
            onClick={() => setZoomed((z) => !z)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              priority
              className={`object-cover transition-transform duration-300 ${
                zoomed ? "scale-150" : "scale-100"
              }`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-3 left-3 flex gap-1.5">
              {product.isNew && <Badge variant="new">New</Badge>}
              {product.salePrice != null && (
                <Badge variant="sale">
                  -{discountPercent(product.price, product.salePrice)}%
                </Badge>
              )}
            </div>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {product.images.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`relative h-20 w-16 shrink-0 overflow-hidden border ${
                  activeImage === i ? "border-hl-black" : "border-transparent"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-hl-muted">
            Tap image to zoom · Swipe on mobile to browse
          </p>
        </div>

        {/* Details */}
        <div className="lg:pt-2">
          <p className="text-[11px] tracking-[0.14em] uppercase text-hl-muted">
            {product.category}
          </p>
          <h1 className="font-display text-2xl md:text-4xl tracking-tight mt-2">
            {product.name}
          </h1>
          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-lg font-medium">
              {formatPrice(product.salePrice ?? product.price)}
            </span>
            {product.salePrice != null && (
              <span className="text-sm text-hl-muted line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <p className="mt-6 text-sm text-hl-muted leading-relaxed max-w-lg">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-[11px] tracking-[0.12em] uppercase mb-3">
              Colour — {colour}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colours.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColour(c.name)}
                  className={`h-9 w-9 rounded-full border-2 ${
                    colour === c.name ? "border-hl-black" : "border-hl-border"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] tracking-[0.12em] uppercase">Size</p>
              <button
                type="button"
                onClick={() => setShowGuide((s) => !s)}
                className="text-xs underline underline-offset-4 text-hl-muted hover:text-hl-black"
              >
                Size guide
              </button>
            </div>
            {showGuide && (
              <div className="mb-4 p-4 border border-hl-border text-xs text-hl-muted leading-relaxed">
                Sizes may vary by style. If you are between sizes, we recommend
                sizing up. Visit Helen Lifestyle at Turfloop Plaza for in-store
                fitting assistance.
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`min-w-12 px-3 py-2.5 text-xs border ${
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

          <div className="mt-6">
            <p className="text-[11px] tracking-[0.12em] uppercase mb-3">
              Quantity
            </p>
            <QuantitySelector value={qty} onChange={setQty} />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAdd}
              disabled={product.stockStatus === "out_of_stock"}
              className="flex-1"
              size="lg"
            >
              {added ? "Added to bag" : "Add to Bag"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => toggle(product.id)}
              className="flex-1"
              size="lg"
            >
              {isWishlisted(product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </Button>
          </div>

          <dl className="mt-10 space-y-4 border-t border-hl-border pt-8 text-sm">
            <div>
              <dt className="text-[11px] tracking-[0.12em] uppercase text-hl-muted">
                Availability
              </dt>
              <dd className="mt-1">{stockLabel}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.12em] uppercase text-hl-muted">
                Delivery information
              </dt>
              <dd className="mt-1 text-hl-muted leading-relaxed">
                Delivery options coming soon. Collect in store at Turfloop Plaza
                during business hours.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.12em] uppercase text-hl-muted">
                Returns information
              </dt>
              <dd className="mt-1 text-hl-muted leading-relaxed">
                Unworn items with tags may be returned or exchanged in store
                within 7 days of purchase. See our{" "}
                <Link href="/returns" className="underline">
                  Returns and Exchanges
                </Link>{" "}
                policy.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.12em] uppercase text-hl-muted">
                Product care
              </dt>
              <dd className="mt-1 text-hl-muted leading-relaxed">
                Follow the care label on your garment. Wash similar colours
                together and avoid harsh detergents where possible.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 md:mt-28">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-8">
            Related products
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
