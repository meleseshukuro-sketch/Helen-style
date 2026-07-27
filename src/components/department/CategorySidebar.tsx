"use client";

import Link from "next/link";
import { X } from "lucide-react";
import type { Department } from "@/types";
import { useUI } from "@/context/UIContext";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  department: Department;
  activeCategory?: string;
}

export function CategorySidebar({
  department,
  activeCategory,
}: CategorySidebarProps) {
  const { categoryDrawerOpen, closeCategoryDrawer } = useUI();

  const content = (
    <nav aria-label={`${department.name} categories`} className="space-y-8">
      <div>
        <Link
          href={department.href}
          onClick={closeCategoryDrawer}
          className={cn(
            "font-display text-lg tracking-tight hover:opacity-70",
            !activeCategory && "underline underline-offset-4"
          )}
        >
          {department.name}
        </Link>
      </div>
      {department.menu.map((group, idx) => (
        <div key={group.title ?? idx}>
          {group.title && (
            <p className="text-[11px] tracking-[0.16em] uppercase text-hl-muted mb-3">
              {group.title}
            </p>
          )}
          <ul className="space-y-0">
            {group.items.map((item) => {
              const active = activeCategory === item.slug;
              return (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    onClick={closeCategoryDrawer}
                    className={cn(
                      "block py-2 text-sm text-hl-black/80 hover:text-hl-black transition-colors",
                      active && "text-hl-black font-medium underline underline-offset-4"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
        <div className="sticky top-[calc(var(--header-offset)+1rem)] max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
          {content}
        </div>
      </aside>

      {/* Mobile drawer */}
      {categoryDrawerOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close categories"
            onClick={closeCategoryDrawer}
          />
          <div className="absolute inset-y-0 left-0 w-[min(100%,320px)] bg-white shadow-xl animate-slide-in-left flex flex-col">
            <div className="flex items-center justify-between px-4 h-14 border-b border-hl-border">
              <span className="font-display text-sm tracking-[0.1em] uppercase">
                Categories
              </span>
              <button
                type="button"
                className="p-2"
                aria-label="Close categories"
                onClick={closeCategoryDrawer}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{content}</div>
          </div>
        </div>
      )}
    </>
  );
}
