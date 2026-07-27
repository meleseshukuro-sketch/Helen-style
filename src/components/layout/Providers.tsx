"use client";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { UIProvider } from "@/context/UIContext";
import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchOverlay } from "./SearchOverlay";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UIProvider>
      <CartProvider>
        <WishlistProvider>
          <AnnouncementBar />
          <Header />
          <SearchOverlay />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </UIProvider>
  );
}
