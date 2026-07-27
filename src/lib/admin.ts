/**
 * Admin / CMS preparation layer
 * --------------------------------
 * This module defines the shape of future admin-managed content so the
 * storefront can later connect to Shopify, WooCommerce, Supabase, Firebase,
 * Sanity, Strapi or another commerce backend without rewriting UI components.
 *
 * Current implementation reads from local TypeScript data files.
 * Replace the repository functions below with API clients when ready.
 */

import type { Department, Product } from "@/types";
import { departments } from "@/data/categories";
import { products } from "@/data/products";
import { announcements, storeInfo } from "@/data/store";

export interface AdminProductInput {
  name: string;
  department: Product["department"];
  category: string;
  categorySlug: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  sizes: string[];
  colours: Product["colours"];
  stockStatus: Product["stockStatus"];
  isNew: boolean;
  isFeatured: boolean;
}

export interface HomepageBanner {
  id: string;
  heading: string;
  supportingText: string;
  image: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  active: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  href: string;
  active: boolean;
  startsAt?: string;
  endsAt?: string;
}

export interface OrderRecord {
  id: string;
  customerEmail: string;
  status: "pending" | "confirmed" | "fulfilled" | "cancelled";
  total: number;
  createdAt: string;
  items: { productId: string; quantity: number; price: number }[];
}

export interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
}

/** Product repository — swap for remote CMS/commerce API */
export const productRepository = {
  list: (): Product[] => products,
  getBySlug: (slug: string) => products.find((p) => p.slug === slug),
  listByDepartment: (department: Product["department"]) =>
    products.filter((p) => p.department === department),
};

/** Category repository */
export const categoryRepository = {
  listDepartments: (): Department[] => departments,
  getDepartment: (slug: string) => departments.find((d) => d.slug === slug),
};

/** Content repository for homepage / store settings */
export const contentRepository = {
  getAnnouncements: () => announcements,
  getStoreLocations: () => [storeInfo],
  getHomepageBanners: (): HomepageBanner[] => [
    {
      id: "hero-1",
      heading: "Discover Your Lifestyle",
      supportingText:
        "Fashion, home, beauty and everyday essentials under one roof.",
      image: "/images/hero.jpg",
      ctaPrimaryLabel: "Shop New Arrivals",
      ctaPrimaryHref: "/women?category=new-arrivals",
      ctaSecondaryLabel: "Explore Departments",
      ctaSecondaryHref: "/#departments",
      active: true,
    },
  ],
  getPromotions: (): Promotion[] => [],
};

/**
 * Future admin dashboard entities:
 * - Products, Categories, Prices, Stock, Images
 * - Orders, Customers, Promotions
 * - Homepage banners, Store locations
 */
export const adminEntities = [
  "products",
  "categories",
  "prices",
  "stock",
  "images",
  "orders",
  "customers",
  "promotions",
  "homepageBanners",
  "storeLocations",
] as const;
