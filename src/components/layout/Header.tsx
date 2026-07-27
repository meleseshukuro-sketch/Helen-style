"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/data/store";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useUI } from "@/context/UIContext";
import { cn } from "@/lib/utils";

export function Header() {
  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();
  const {
    openSearch,
    mobileNavOpen,
    openMobileNav,
    closeMobileNav,
  } = useUI();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-hl-border-soft">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-14 md:h-16">
            {/* Left */}
            <div className="flex items-center gap-2 justify-self-start">
              <button
                type="button"
                className="lg:hidden p-2 -ml-2 hover:opacity-60"
                aria-label="Open menu"
                onClick={openMobileNav}
              >
                <Menu className="h-5 w-5" />
              </button>
              <nav
                className="hidden lg:flex items-center gap-5 xl:gap-6"
                aria-label="Main"
              >
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-[11px] xl:text-xs tracking-[0.12em] uppercase text-hl-black/80 hover:text-hl-black transition-colors whitespace-nowrap",
                      link.label === "Sale" && "text-hl-accent hover:text-hl-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Centre */}
            <div className="justify-self-center">
              <Logo />
            </div>

            {/* Right */}
            <div className="flex items-center gap-1 sm:gap-2 justify-self-end">
              <button
                type="button"
                className="p-2 hover:opacity-60"
                aria-label="Search"
                onClick={openSearch}
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/account"
                className="p-2 hover:opacity-60 hidden sm:inline-flex"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>
              <Link
                href="/wishlist"
                className="relative p-2 hover:opacity-60"
                aria-label={`Wishlist, ${wishlistCount} items`}
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-0.5 min-w-4 h-4 px-1 rounded-full bg-hl-accent text-white text-[9px] flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                href="/bag"
                className="relative p-2 hover:opacity-60"
                aria-label={`Shopping bag, ${itemCount} items`}
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-0.5 min-w-4 h-4 px-1 rounded-full bg-hl-black text-white text-[9px] flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={closeMobileNav}
          />
          <div className="absolute inset-y-0 left-0 w-[min(100%,320px)] bg-white shadow-xl animate-slide-in-left flex flex-col">
            <div className="flex items-center justify-between px-4 h-14 border-b border-hl-border">
              <span className="font-display text-sm tracking-[0.1em] uppercase">
                Menu
              </span>
              <button
                type="button"
                className="p-2"
                aria-label="Close menu"
                onClick={closeMobileNav}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileNav}
                  className={cn(
                    "block px-6 py-3.5 text-sm tracking-[0.08em] uppercase border-b border-hl-border-soft",
                    link.label === "Sale" && "text-hl-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/account"
                onClick={closeMobileNav}
                className="block px-6 py-3.5 text-sm tracking-[0.08em] uppercase border-b border-hl-border-soft"
              >
                Account
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileNav}
                className="block px-6 py-3.5 text-sm tracking-[0.08em] uppercase"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
