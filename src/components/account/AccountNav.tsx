"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/account", label: "Profile" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/addresses", label: "Saved addresses" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/account/returns", label: "Returns" },
  { href: "/account/password", label: "Password" },
];

export function AccountNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Account" className="flex md:flex-col gap-1 overflow-x-auto">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "whitespace-nowrap px-3 py-2 text-sm border-b-2 md:border-b-0 md:border-l-2 border-transparent text-hl-muted hover:text-hl-black",
              active && "border-hl-black text-hl-black"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
