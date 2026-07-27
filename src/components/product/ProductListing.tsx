"use client";

import { useMemo, useState } from "react";
import type { Product, SortOption, StockStatus } from "@/types";
import { sortProducts } from "@/lib/utils";
import { ProductGrid } from "./ProductGrid";

interface ProductListingProps {
  products: Product[];
  title?: string;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "best-selling", label: "Best Selling" },
];

export function ProductListing({ products }: ProductListingProps) {
  const [sort, setSort] = useState<SortOption>("newest");
  const [size, setSize] = useState("all");
  const [colour, setColour] = useState("all");
  const [availability, setAvailability] = useState<"all" | StockStatus>("all");
  const [priceBand, setPriceBand] = useState("all");
  const [category, setCategory] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const sizes = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.sizes))).sort(),
    [products]
  );
  const colours = useMemo(
    () =>
      Array.from(
        new Map(
          products.flatMap((p) => p.colours.map((c) => [c.name, c]))
        ).values()
      ),
    [products]
  );
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [products]
  );

  const filtered = useMemo(() => {
    let list = [...products];
    if (size !== "all") list = list.filter((p) => p.sizes.includes(size));
    if (colour !== "all")
      list = list.filter((p) => p.colours.some((c) => c.name === colour));
    if (availability !== "all")
      list = list.filter((p) => p.stockStatus === availability);
    if (category !== "all")
      list = list.filter((p) => p.category === category);
    if (priceBand === "under-200")
      list = list.filter((p) => (p.salePrice ?? p.price) < 200);
    if (priceBand === "200-400")
      list = list.filter((p) => {
        const price = p.salePrice ?? p.price;
        return price >= 200 && price <= 400;
      });
    if (priceBand === "over-400")
      list = list.filter((p) => (p.salePrice ?? p.price) > 400);
    return sortProducts(list, sort);
  }, [products, sort, size, colour, availability, priceBand, category]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hl-border pb-4 mb-6">
        <p className="text-xs text-hl-muted tracking-wide">
          {filtered.length} product{filtered.length === 1 ? "" : "s"}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="text-xs tracking-[0.1em] uppercase border border-hl-border px-3 py-2 md:hidden"
            onClick={() => setFiltersOpen((o) => !o)}
          >
            {filtersOpen ? "Hide filters" : "Filters"}
          </button>
          <label className="flex items-center gap-2 text-xs">
            <span className="text-hl-muted tracking-[0.08em] uppercase hidden sm:inline">
              Sort by
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="border border-hl-border bg-white px-3 py-2 text-xs outline-none focus:border-hl-black"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div
        className={`grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-5 ${
          filtersOpen ? "grid" : "hidden md:grid"
        }`}
      >
        <FilterSelect
          label="Size"
          value={size}
          onChange={setSize}
          options={[
            { value: "all", label: "All sizes" },
            ...sizes.map((s) => ({ value: s, label: s })),
          ]}
        />
        <FilterSelect
          label="Colour"
          value={colour}
          onChange={setColour}
          options={[
            { value: "all", label: "All colours" },
            ...colours.map((c) => ({ value: c.name, label: c.name })),
          ]}
        />
        <FilterSelect
          label="Price"
          value={priceBand}
          onChange={setPriceBand}
          options={[
            { value: "all", label: "All prices" },
            { value: "under-200", label: "Under R200" },
            { value: "200-400", label: "R200 – R400" },
            { value: "over-400", label: "Over R400" },
          ]}
        />
        <FilterSelect
          label="Category"
          value={category}
          onChange={setCategory}
          options={[
            { value: "all", label: "All categories" },
            ...categories.map((c) => ({ value: c, label: c })),
          ]}
        />
        <FilterSelect
          label="Availability"
          value={availability}
          onChange={(v) => setAvailability(v as "all" | StockStatus)}
          options={[
            { value: "all", label: "All" },
            { value: "in_stock", label: "In stock" },
            { value: "low_stock", label: "Low stock" },
            { value: "out_of_stock", label: "Out of stock" },
          ]}
        />
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block text-xs">
      <span className="block mb-1.5 tracking-[0.1em] uppercase text-hl-muted">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-hl-border bg-white px-3 py-2.5 text-xs outline-none focus:border-hl-black"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
