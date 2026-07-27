"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { searchProducts } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { LoadingState } from "@/components/ui/EmptyState";
import { departments } from "@/data/categories";

function SearchResults() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const results = useMemo(() => searchProducts(q), [q]);
  const deptHits = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return departments.filter((d) => d.name.toLowerCase().includes(query));
  }, [q]);

  return (
    <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8 py-10 md:py-16">
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">
        Search results
      </h1>
      <p className="mt-2 text-sm text-hl-muted">
        {q ? (
          <>
            Showing results for <span className="text-hl-black">“{q}”</span>
          </>
        ) : (
          "Enter a search term to find products."
        )}
      </p>

      {deptHits.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {deptHits.map((d) => (
            <Link
              key={d.slug}
              href={d.href}
              className="px-3 py-1.5 text-xs tracking-[0.1em] uppercase border border-hl-border hover:border-hl-black"
            >
              {d.name}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-10">
        <ProductGrid
          products={results}
          emptyTitle={q ? `No results for “${q}”` : "Start searching"}
          emptyDescription="Try popular terms like dresses, sneakers, handbags or beauty."
        />
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingState label="Searching…" />}>
      <SearchResults />
    </Suspense>
  );
}
