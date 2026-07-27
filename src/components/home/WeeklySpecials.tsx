import Link from "next/link";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getWeeklySpecials } from "@/data/products";

export function WeeklySpecials() {
  const products = getWeeklySpecials(8);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 mx-auto max-w-[1600px]">
      <div className="flex items-end justify-between gap-4 mb-10 md:mb-14">
        <div>
          <p className="text-[11px] tracking-[0.16em] uppercase text-hl-accent mb-2">
            Limited time
          </p>
          <h2 className="font-display text-2xl md:text-4xl tracking-tight">
            Weekly Specials
          </h2>
          <p className="mt-3 text-sm text-hl-muted">
            Selected styles at reduced prices — while stocks last.
          </p>
        </div>
        <Link
          href="/sale"
          className="hidden sm:inline text-xs tracking-[0.14em] uppercase underline underline-offset-4 hover:opacity-60"
        >
          Shop sale
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
