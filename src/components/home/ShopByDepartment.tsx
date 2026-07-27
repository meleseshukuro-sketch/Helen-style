import Image from "next/image";
import Link from "next/link";
import { shopByDepartment } from "@/data/categories";

export function ShopByDepartment() {
  return (
    <section id="departments" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 mx-auto max-w-[1600px]">
      <div className="mb-10 md:mb-14">
        <h2 className="font-display text-2xl md:text-4xl tracking-tight">
          Shop by Department
        </h2>
        <p className="mt-3 text-sm text-hl-muted max-w-lg">
          Browse fashion, home, beauty and more — all in one convenient place.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
        {shopByDepartment.map((dept, i) => (
          <Link
            key={dept.href}
            href={dept.href}
            className="group relative aspect-[3/4] overflow-hidden bg-hl-off-white animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <Image
              src={dept.image}
              alt={dept.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
            <span className="absolute inset-x-0 bottom-0 p-4 md:p-6 font-display text-lg md:text-2xl text-white tracking-tight">
              {dept.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
