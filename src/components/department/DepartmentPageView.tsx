"use client";

import Image from "next/image";
import { ListFilter } from "lucide-react";
import type { Department, Product } from "@/types";
import { CategorySidebar } from "./CategorySidebar";
import { ProductListing } from "@/components/product/ProductListing";
import { useUI } from "@/context/UIContext";

interface DepartmentPageViewProps {
  department: Department;
  products: Product[];
  activeCategory?: string;
  categoryLabel?: string;
}

export function DepartmentPageView({
  department,
  products,
  activeCategory,
  categoryLabel,
}: DepartmentPageViewProps) {
  const { openCategoryDrawer } = useUI();
  const heading = categoryLabel ?? department.name;
  const description = categoryLabel
    ? `Browse ${categoryLabel.toLowerCase()} in ${department.name} at Helen Lifestyle.`
    : department.description;

  return (
    <div>
      <section className="relative h-[36vh] min-h-[240px] max-h-[420px] overflow-hidden bg-hl-off-white">
        <Image
          src={department.image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-8 lg:px-12 pb-10 md:pb-14">
          <h1 className="font-display text-3xl md:text-5xl text-white tracking-tight animate-slide-up">
            {heading}
          </h1>
          <p className="mt-3 max-w-xl text-sm md:text-base text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex lg:hidden mb-6">
          <button
            type="button"
            onClick={openCategoryDrawer}
            className="inline-flex items-center gap-2 border border-hl-border px-4 py-2.5 text-xs tracking-[0.12em] uppercase"
          >
            <ListFilter className="h-4 w-4" />
            Categories
          </button>
        </div>

        <div className="flex gap-8 xl:gap-12">
          <CategorySidebar
            department={department}
            activeCategory={activeCategory}
          />
          <div className="flex-1 min-w-0">
            <ProductListing products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
