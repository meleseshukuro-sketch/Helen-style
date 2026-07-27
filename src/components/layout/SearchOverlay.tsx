"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUI } from "@/context/UIContext";
import { popularSearches, suggestedSearches } from "@/data/store";
import { departments } from "@/data/categories";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function SearchOverlay() {
  const { searchOpen, closeSearch, recentSearches, addRecentSearch } = useUI();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    if (searchOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, closeSearch]);

  const results = useMemo(() => searchProducts(query).slice(0, 8), [query]);
  const deptMatches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return departments.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.menu.some((g) =>
          g.items.some((i) => i.label.toLowerCase().includes(q))
        )
    );
  }, [query]);

  if (!searchOpen) return null;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    addRecentSearch(query);
    closeSearch();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  function goToSuggestion(term: string) {
    addRecentSearch(term);
    closeSearch();
    router.push(`/search?q=${encodeURIComponent(term)}`);
  }

  return (
    <div
      className="fixed inset-0 z-[70] bg-white animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="mx-auto max-w-3xl px-4 pt-6 md:pt-10">
        <div className="flex items-center justify-between mb-8">
          <p className="font-display text-sm tracking-[0.14em] uppercase">
            Search
          </p>
          <button
            type="button"
            onClick={closeSearch}
            className="p-2 hover:opacity-60"
            aria-label="Close search"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={submit} className="relative border-b border-hl-black pb-3">
          <Search className="absolute left-0 top-1 h-5 w-5 text-hl-muted" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, departments, categories…"
            className="w-full pl-8 pr-4 py-2 text-lg md:text-2xl outline-none bg-transparent placeholder:text-hl-muted/60"
            aria-label="Search Helen Lifestyle"
          />
        </form>

        <div className="mt-8 max-h-[70vh] overflow-y-auto pb-16 space-y-10">
          {query.trim() ? (
            <>
              {deptMatches.length > 0 && (
                <section>
                  <h2 className="text-[11px] tracking-[0.14em] uppercase text-hl-muted mb-3">
                    Departments
                  </h2>
                  <ul className="space-y-2">
                    {deptMatches.slice(0, 5).map((d) => (
                      <li key={d.slug}>
                        <Link
                          href={d.href}
                          onClick={closeSearch}
                          className="text-sm hover:underline"
                        >
                          {d.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <h2 className="text-[11px] tracking-[0.14em] uppercase text-hl-muted mb-4">
                  Products
                </h2>
                {results.length === 0 ? (
                  <p className="text-sm text-hl-muted">
                    No products found for “{query}”.
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {results.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/product/${p.slug}`}
                          onClick={() => {
                            addRecentSearch(query);
                            closeSearch();
                          }}
                          className="flex gap-4 group"
                        >
                          <div className="relative h-20 w-16 bg-hl-off-white overflow-hidden shrink-0">
                            <Image
                              src={p.images[0]}
                              alt={p.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                          <div>
                            <p className="text-sm group-hover:underline">{p.name}</p>
                            <p className="text-xs text-hl-muted mt-1">{p.category}</p>
                            <p className="text-sm mt-1">
                              {formatPrice(p.salePrice ?? p.price)}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </>
          ) : (
            <>
              {recentSearches.length > 0 && (
                <section>
                  <h2 className="text-[11px] tracking-[0.14em] uppercase text-hl-muted mb-3">
                    Recent searches
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => goToSuggestion(term)}
                        className="px-3 py-1.5 text-sm border border-hl-border hover:border-hl-black"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </section>
              )}
              <section>
                <h2 className="text-[11px] tracking-[0.14em] uppercase text-hl-muted mb-3">
                  Popular searches
                </h2>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => goToSuggestion(term)}
                      className="px-3 py-1.5 text-sm border border-hl-border hover:border-hl-black"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-[11px] tracking-[0.14em] uppercase text-hl-muted mb-3">
                  Suggested
                </h2>
                <ul className="space-y-2">
                  {suggestedSearches.map((term) => (
                    <li key={term}>
                      <button
                        type="button"
                        onClick={() => goToSuggestion(term)}
                        className="text-sm hover:underline"
                      >
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
