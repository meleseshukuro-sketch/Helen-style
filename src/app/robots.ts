import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/store";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout", "/account", "/bag"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
