import Link from "next/link";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getNewArrivals } from "@/data/products";

export function NewArrivals() {
  const products = getNewArrivals(8);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 mx-auto max-w-[1600px]">
      <div className="flex items-end justify-between gap-4 mb-10 md:mb-14">
        <div>
          <h2 className="font-display text-2xl md:text-4xl tracking-tight">
            New Arrivals
          </h2>
          <p className="mt-3 text-sm text-hl-muted">
            Fresh styles just in — shop the latest from Helen Lifestyle.
          </p>
        </div>
        <Link
          href="/women?category=new-arrivals"
          className="hidden sm:inline text-xs tracking-[0.14em] uppercase underline underline-offset-4 hover:opacity-60"
        >
          View all
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
