import Image from "next/image";
import Link from "next/link";
import { featuredCollections } from "@/data/categories";

export function FeaturedCollections() {
  return (
    <section className="py-16 md:py-24 bg-hl-off-white">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <h2 className="font-display text-2xl md:text-4xl tracking-tight">
            Featured Collections
          </h2>
          <p className="mt-3 text-sm text-hl-muted max-w-lg">
            Curated edits across departments for every lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featuredCollections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group relative aspect-[4/5] overflow-hidden bg-white"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
                <h3 className="font-display text-xl md:text-2xl tracking-tight">
                  {collection.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/85">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
