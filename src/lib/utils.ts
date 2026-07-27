import { clsx, type ClassValue } from "clsx";
import type { Product, SortOption } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(amount: number): string {
  return `R${amount.toFixed(2)}`;
}

export function discountPercent(price: number, salePrice: number): number {
  return Math.round(((price - salePrice) / price) * 100);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      return sorted.sort(
        (a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price)
      );
    case "price-desc":
      return sorted.sort(
        (a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price)
      );
    case "best-selling":
      return sorted.sort(
        (a, b) => Number(b.isBestSeller) - Number(a.isBestSeller)
      );
    case "newest":
    default:
      return sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
  }
}

export function getEffectivePrice(product: Product): number {
  return product.salePrice ?? product.price;
}
