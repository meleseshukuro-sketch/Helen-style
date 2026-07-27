import type { Metadata } from "next";
import type { DepartmentSlug } from "@/types";
import { getDepartment } from "@/data/categories";
import { getProductsByDepartment } from "@/data/products";
import { DepartmentPageView } from "@/components/department/DepartmentPageView";
import { ErrorState } from "@/components/ui/EmptyState";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

function findCategoryLabel(slug: DepartmentSlug, category?: string) {
  if (!category) return undefined;
  const dept = getDepartment(slug);
  for (const group of dept?.menu ?? []) {
    const item = group.items.find((i) => i.slug === category);
    if (item) return item.label;
  }
  return undefined;
}

export function createDepartmentPage(slug: DepartmentSlug) {
  async function Page({ searchParams }: PageProps) {
    const { category } = await searchParams;
    const department = getDepartment(slug);

    if (!department) {
      return (
        <ErrorState
          title="Department not found"
          action={
            <Link href="/">
              <Button variant="secondary">Go home</Button>
            </Link>
          }
        />
      );
    }

    const products = getProductsByDepartment(slug, category);
    const categoryLabel = findCategoryLabel(slug, category);

    return (
      <DepartmentPageView
        department={department}
        products={products}
        activeCategory={category}
        categoryLabel={categoryLabel}
      />
    );
  }

  return Page;
}

export function createDepartmentMetadata(slug: DepartmentSlug): Metadata {
  const department = getDepartment(slug);
  return {
    title: department?.name,
    description: department?.description,
    openGraph: {
      title: `${department?.name} | Helen Lifestyle`,
      description: department?.description,
    },
  };
}
