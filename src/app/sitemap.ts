import type { MetadataRoute } from "next";
import { departments } from "@/data/categories";
import { products } from "@/data/products";
import { SITE_URL } from "@/data/store";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/wishlist",
    "/bag",
    "/checkout",
    "/account",
    "/search",
    "/privacy",
    "/terms",
    "/returns",
    "/delivery",
    "/careers",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const departmentRoutes = departments.map((d) => ({
    url: `${SITE_URL}${d.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${SITE_URL}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...departmentRoutes, ...productRoutes];
}
